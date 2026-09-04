import prisma from "@/lib/prisma";
import { productStore, mapDbProduct, Product } from "@/lib/products-store";
import { getOrSetCache, invalidateCachePrefix, invalidateCacheKey } from "@/lib/cache";

// TTL for product collections (15 minutes) - drastically slashes Neon compute usage
const PRODUCTS_COLLECTION_TTL_SEC = 15 * 60;
// TTL for individual product pages (30 minutes)
const PRODUCT_ITEM_TTL_SEC = 30 * 60;

/**
 * Invalidate the product cache manually (e.g. after catalog updates, imports, or cron scoring)
 */
export async function invalidateProductsCache(): Promise<void> {
  await invalidateCachePrefix("products:");
}

/**
 * Fetches all products from the PostgreSQL database using the Cache-Aside pattern.
 * Checks LRU memory first (0ms latency, 0 Neon compute).
 * Falls back gracefully to in-memory static catalog if the database is offline or asleep.
 */
export async function getProductsFromDb(): Promise<Product[]> {
  return getOrSetCache<Product[]>(
    "products:all:popularity",
    PRODUCTS_COLLECTION_TTL_SEC,
    async () => {
      try {
        if (prisma) {
          const rows = await prisma.product.findMany({
            orderBy: { popularityScore: "desc" },
          });
          if (rows && rows.length > 0) {
            const mapped = rows.map(mapDbProduct);
            productStore.setProducts(mapped);
            return mapped;
          }
        }
      } catch (err) {
        console.warn("[Database] Neon products query fallback to static catalog:", err);
      }

      return productStore.getAll();
    }
  );
}

/**
 * Fetches a single product by slug with Cache-Aside pattern.
 * Resolution:
 * 1. Checks Cache (0ms, 0 Neon compute).
 * 2. If missed, checks pre-loaded productStore.
 * 3. Only if completely unresolved, queries Neon Postgres.
 */
export async function getProductBySlugFromDb(slug: string): Promise<Product | undefined> {
  // 1. Direct memoryStore fast-path check
  const memoryMatch = productStore.getBySlug(slug);
  if (memoryMatch) {
    return memoryMatch;
  }

  // 2. Cache-Aside resolution
  return getOrSetCache<Product | undefined>(
    `products:slug:${slug}`,
    PRODUCT_ITEM_TTL_SEC,
    async () => {
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
        console.warn(`[Database] Neon product lookup for '${slug}' fallback:`, err);
      }

      return productStore.getBySlug(slug);
    }
  );
}

/**
 * Ensures the in-memory productStore has loaded the latest catalog from PostgreSQL.
 */
export async function syncProductStoreFromDb(): Promise<void> {
  await getProductsFromDb();
}
