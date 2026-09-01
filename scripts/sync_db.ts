import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { INITIAL_PRODUCTS } from "../src/lib/products-store";

async function main() {
  const connectionString = process.env.DIRECT_DATABASE_URL || process.env.DATABASE_URL;
  if (!connectionString) {
    console.log("No connection string found in environment.");
    return;
  }
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  console.log(`\n📦 Upserting ${INITIAL_PRODUCTS.length} total products into remote PostgreSQL database...`);

  let count = 0;
  for (const p of INITIAL_PRODUCTS) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        name: p.name,
        botanicalName: p.botanicalName,
        category: p.category as any,
        subCategory: p.subCategory,
        description: p.description,
        shortSpec: p.shortSpec,
        overview: p.overview,
        history: p.history,
        benefits: p.benefits as any,
        manufacturingSteps: p.manufacturingSteps as any,
        bottleFormat: p.bottleFormat as any,
        signatureColor: p.signatureColor,
        labelImageUrl: p.labelImageUrl,
        compositeImageUrl: p.compositeImageUrl,
        priceDisplay: p.priceDisplay,
        moq: p.moq,
        popularityScore: p.popularityScore,
        featured: p.featured || false,
      },
      create: {
        id: p.id,
        slug: p.slug,
        name: p.name,
        botanicalName: p.botanicalName,
        category: p.category as any,
        subCategory: p.subCategory,
        description: p.description,
        shortSpec: p.shortSpec,
        overview: p.overview,
        history: p.history,
        benefits: p.benefits as any,
        manufacturingSteps: p.manufacturingSteps as any,
        bottleFormat: p.bottleFormat as any,
        signatureColor: p.signatureColor,
        labelImageUrl: p.labelImageUrl,
        compositeImageUrl: p.compositeImageUrl,
        priceDisplay: p.priceDisplay,
        moq: p.moq,
        popularityScore: p.popularityScore,
        featured: p.featured || false,
      },
    });
    count++;
    if (count % 50 === 0 || count === INITIAL_PRODUCTS.length) {
      console.log(`  ✓ Synced ${count}/${INITIAL_PRODUCTS.length} products`);
    }
  }

  console.log(`\n✅ Successfully synced all ${count} products to PostgreSQL database!\n`);
  await prisma.$disconnect();
  await pool.end();
}

main().catch(console.error);
