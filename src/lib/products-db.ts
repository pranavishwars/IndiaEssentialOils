import prisma from "@/lib/prisma";
import { productStore, mapDbProduct, Product } from "@/lib/products-store";

let cachedProducts: Product[] | null = null;
let lastCacheTime = 0;
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes cache to drastically cut serverless compute wakeups
let isFetchingFromDb = false;

/**
 * Invalidate the product cache manually (e.g. after catalog imports or updates)
 */
export function invalidateProductsCache(): void {
  cachedProducts = null;
  lastCacheTime = 0;
}

/**
 * Fetches all products from the PostgreSQL database, falling back gracefully
 * to the in-memory product catalog if the database is offline or not configured.
 * Cached in-memory for 10 minutes for ultra-low database compute consumption.
 */
export async function getProductsFromDb(): Promise<Product[]> {
  const now = Date.now();
  if (cachedProducts && cachedProducts.length > 0 && now - lastCacheTime < CACHE_TTL_MS) {
    return cachedProducts;
  }

  // Prevent multiple concurrent DB roundtrips (stampede protection)
  if (isFetchingFromDb && cachedProducts && cachedProducts.length > 0) {
    return cachedProducts;
  }

  try {
    if (prisma) {
      isFetchingFromDb = true;
      const rows = await prisma.product.findMany({
        orderBy: { popularityScore: "desc" },
      });
      if (rows && rows.length > 0) {
        const mapped = rows.map(mapDbProduct);
        cachedProducts = mapped;
        lastCacheTime = now;
        productStore.setProducts(mapped);
        return mapped;
      }
    }
  } catch (err) {
    console.warn("Prisma products lookup fallback to in-memory store:", err);
  } finally {
    isFetchingFromDb = false;
  }

  cachedProducts = productStore.getAll();
  lastCacheTime = now;
  return cachedProducts;
}

/**
 * Fetches a single product by slug with zero-query in-memory cache resolution.
 * If the product is in memory, requires 0 database queries.
 */
export async function getProductBySlugFromDb(slug: string): Promise<Product | undefined> {
  // 1. Check in-memory store / cache first (0 DB compute used)
  const memoryMatch = productStore.getBySlug(slug);
  if (memoryMatch) {
    return memoryMatch;
  }

  // 2. Check full cached list if populated
  if (cachedProducts) {
    const found = cachedProducts.find(p => p.slug === slug);
    if (found) return found;
  }

  // 3. Fallback to DB only if not found in memory
  try {
    if (prisma) {
      const row = await prisma.product.findUnique({
        where: { slug },
      });
      if (row) {
        return mapDbProduct(row);
      }
    }
  } catch (err) {
    console.warn(`Prisma product lookup for '${slug}' fallback:`, err);
  }
  return productStore.getBySlug(slug);
}

/**
 * Ensures the in-memory productStore has loaded the latest catalog from PostgreSQL.
 */
export async function syncProductStoreFromDb(): Promise<void> {
  if (cachedProducts && cachedProducts.length > 0) return;
  await getProductsFromDb();
}
