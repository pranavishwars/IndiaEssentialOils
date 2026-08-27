import prisma from "@/lib/prisma";
import { productStore, mapDbProduct, Product } from "@/lib/products-store";

let isSynced = false;

/**
 * Fetches all products from the PostgreSQL database, falling back gracefully
 * to the in-memory product catalog if the database is offline or not configured.
 */
export async function getProductsFromDb(): Promise<Product[]> {
  try {
    if (prisma) {
      const rows = await prisma.product.findMany({
        orderBy: { popularityScore: "desc" },
      });
      if (rows && rows.length > 0) {
        const mapped = rows.map(mapDbProduct);
        productStore.setProducts(mapped);
        isSynced = true;
        return mapped;
      }
    }
  } catch (err) {
    console.warn("Prisma products lookup fallback to in-memory store:", err);
  }
  return productStore.getAll();
}

/**
 * Fetches a single product by slug from PostgreSQL with automatic in-memory fallback.
 */
export async function getProductBySlugFromDb(slug: string): Promise<Product | undefined> {
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
  if (isSynced) return;
  await getProductsFromDb();
}
