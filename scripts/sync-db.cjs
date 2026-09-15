const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");

const storeFile = fs.readFileSync(path.join(__dirname, "../src/lib/products-store.ts"), "utf8");
const match = storeFile.match(/export const INITIAL_PRODUCTS: Product\[\] = (\[[\s\S]*?\n\]);/);
if (!match) {
  console.error("Could not find INITIAL_PRODUCTS");
  process.exit(1);
}
const products = JSON.parse(match[1]);

async function main() {
  const connectionString = process.env.DIRECT_DATABASE_URL || process.env.DATABASE_URL;
  if (!connectionString) {
    console.log("No connection string found in environment.");
    return;
  }
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  console.log(`\n📦 Upserting ${products.length} products into remote PostgreSQL database...`);

  let count = 0;
  for (const p of products) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        name: p.name,
        botanicalName: p.botanicalName,
        category: p.category,
        subCategory: p.subCategory,
        description: p.description,
        shortSpec: p.shortSpec,
        overview: p.overview,
        history: p.history,
        benefits: p.benefits,
        manufacturingSteps: p.manufacturingSteps,
        bottleFormat: p.bottleFormat,
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
        category: p.category,
        subCategory: p.subCategory,
        description: p.description,
        shortSpec: p.shortSpec,
        overview: p.overview,
        history: p.history,
        benefits: p.benefits,
        manufacturingSteps: p.manufacturingSteps,
        bottleFormat: p.bottleFormat,
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
    if (count % 50 === 0 || count === products.length) {
      console.log(`  ✓ Synced ${count}/${products.length} products`);
    }
  }

  console.log(`\n✅ Successfully synced all ${count} products to PostgreSQL database!\n`);
  await prisma.$disconnect();
  await pool.end();
}

main().catch(console.error);
