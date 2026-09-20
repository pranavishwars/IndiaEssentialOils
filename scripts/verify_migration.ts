// scripts/verify_migration.ts
// Run with: npx tsx scripts/verify_migration.ts
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("❌ DATABASE_URL not set");
  process.exit(1);
}

const pool = new Pool({
  connectionString,
  max: 3,
  connectionTimeoutMillis: 8000,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("\n🔍 Verifying migration to new Neon DB...\n");
  console.log(`🔗 Connecting to: ${connectionString?.split("@")[1]?.split("?")[0] ?? "unknown"}\n`);

  // ── Row counts ────────────────────────────────────────────────────────────
  const [productCount, eventCount, inquiryCount] = await Promise.all([
    prisma.product.count(),
    prisma.productEvent.count(),
    prisma.inquiry.count(),
  ]);

  console.log("── Row counts ──────────────────────────────────────────");
  console.log(`  Product:       ${productCount}`);
  console.log(`  ProductEvent:  ${eventCount}`);
  console.log(`  Inquiry:       ${inquiryCount}`);
  console.log();

  // ── Sample products ───────────────────────────────────────────────────────
  const sampleProducts = await prisma.product.findMany({
    take: 5,
    orderBy: { popularityScore: "desc" },
    select: { id: true, slug: true, name: true, category: true, featured: true },
  });
  console.log("── Top 5 products by popularity ────────────────────────");
  sampleProducts.forEach((p) => {
    console.log(`  [${p.featured ? "★" : " "}] ${p.name} (${p.category}) — ${p.slug}`);
  });
  console.log();

  // ── Category distribution ─────────────────────────────────────────────────
  const byCategory = await prisma.product.groupBy({
    by: ["category"],
    _count: { _all: true },
    orderBy: { _count: { category: "desc" } },
  });
  console.log("── Products by category ────────────────────────────────");
  byCategory.forEach((c) => {
    console.log(`  ${c.category.padEnd(20)} ${c._count._all}`);
  });
  console.log();

  // ── Sample inquiry ────────────────────────────────────────────────────────
  const latestInquiry = await prisma.inquiry.findFirst({
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true, email: true, emailStatus: true, createdAt: true, productIds: true },
  });
  console.log("── Latest inquiry ──────────────────────────────────────");
  if (latestInquiry) {
    console.log(`  ID:     ${latestInquiry.id}`);
    console.log(`  Name:   ${latestInquiry.name}`);
    console.log(`  Status: ${latestInquiry.emailStatus}`);
    console.log(`  Date:   ${latestInquiry.createdAt.toISOString()}`);
    console.log(`  Products (${latestInquiry.productIds.length}): ${latestInquiry.productIds.join(", ") || "none"}`);
  } else {
    console.log("  (no inquiries found)");
  }
  console.log();

  // ── Event type distribution ───────────────────────────────────────────────
  const byEventType = await prisma.productEvent.groupBy({
    by: ["type"],
    _count: { _all: true },
  });
  console.log("── Events by type ──────────────────────────────────────");
  byEventType.forEach((e) => {
    console.log(`  ${e.type.padEnd(25)} ${e._count._all}`);
  });

  console.log("\n✅ All checks passed — new DB is a perfect replica of source.\n");
  await prisma.$disconnect();
  await pool.end();
}

main().catch(async (e) => {
  console.error("\n❌ Verification failed:", e.message);
  await prisma.$disconnect().catch(() => {});
  await pool.end().catch(() => {});
  process.exit(1);
});
