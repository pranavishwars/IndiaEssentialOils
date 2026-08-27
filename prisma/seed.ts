/**
 * prisma/seed.ts
 *
 * Seeds all 222 products from products-store into the local Postgres DB.
 * Upserts on slug — idempotent, safe to re-run at any time.
 *
 * Run:  npx tsx prisma/seed.ts
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { INITIAL_PRODUCTS } from "../src/lib/products-store";

// Use the direct TCP URL (not the prisma+postgres proxy) for seed scripts
const connectionString = process.env.DIRECT_DATABASE_URL ?? process.env.DATABASE_URL!;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });


async function main() {
  console.log(`\n🌱  Seeding ${INITIAL_PRODUCTS.length} products into the database…\n`);

  let upserted = 0;
  let failed = 0;

  for (const product of INITIAL_PRODUCTS) {
    try {
      await prisma.product.upsert({
        where: { slug: product.slug },
        update: {
          name: product.name,
          botanicalName: product.botanicalName ?? null,
          category: product.category,
          subCategory: product.subCategory ?? null,
          description: product.description,
          shortSpec: product.shortSpec,
          overview: product.overview ?? null,
          history: product.history ?? null,
          benefits: product.benefits
            ? JSON.parse(JSON.stringify(product.benefits))
            : undefined,
          manufacturingSteps: product.manufacturingSteps
            ? JSON.parse(JSON.stringify(product.manufacturingSteps))
            : undefined,
          bottleFormat: product.bottleFormat,
          signatureColor: product.signatureColor ?? null,
          labelImageUrl: product.labelImageUrl ?? null,
          compositeImageUrl: product.compositeImageUrl ?? null,
          priceDisplay: product.priceDisplay,
          moq: product.moq,
          popularityScore: product.popularityScore,
          featured: product.featured ?? false,
        },
        create: {
          slug: product.slug,
          name: product.name,
          botanicalName: product.botanicalName ?? null,
          category: product.category,
          subCategory: product.subCategory ?? null,
          description: product.description,
          shortSpec: product.shortSpec,
          overview: product.overview ?? null,
          history: product.history ?? null,
          benefits: product.benefits
            ? JSON.parse(JSON.stringify(product.benefits))
            : undefined,
          manufacturingSteps: product.manufacturingSteps
            ? JSON.parse(JSON.stringify(product.manufacturingSteps))
            : undefined,
          bottleFormat: product.bottleFormat,
          signatureColor: product.signatureColor ?? null,
          labelImageUrl: product.labelImageUrl ?? null,
          compositeImageUrl: product.compositeImageUrl ?? null,
          priceDisplay: product.priceDisplay,
          moq: product.moq,
          popularityScore: product.popularityScore,
          featured: product.featured ?? false,
        },
      });
      upserted++;
      if (upserted % 25 === 0) {
        console.log(`  ✓ ${upserted}/${INITIAL_PRODUCTS.length} products seeded…`);
      }
    } catch (err) {
      console.error(`  ✗ Failed: "${product.name}" (${product.slug})`, err);
      failed++;
    }
  }

  console.log(`\n✅  Seeding complete.`);
  console.log(`   Upserted : ${upserted}`);
  console.log(`   Failed   : ${failed}`);

  // Verify total count
  const count = await prisma.product.count();
  console.log(`   DB total : ${count} products in database\n`);

  // Category breakdown
  const categories = await prisma.product.groupBy({
    by: ["category"],
    _count: { id: true },
    orderBy: { _count: { id: "desc" } },
  });

  console.log("📊  Category breakdown:");
  for (const row of categories) {
    console.log(`   ${row.category.padEnd(22)} ${row._count.id} products`);
  }
  console.log("");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
