import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CatalogView } from "@/components/client/CatalogView";
import { Footer } from "@/components/server/Footer";
import { SLUG_TO_CATEGORY, CATEGORY_SLUGS } from "@/lib/products-store";
import { PRODUCT_CATEGORIES } from "@/lib/data";
import { getProductsFromDb } from "@/lib/products-db";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const enumKey = SLUG_TO_CATEGORY[category];
  if (!enumKey && category !== "all") {
    return {
      title: "Category Not Found — India Essential Oils",
    };
  }

  const categoryMeta = PRODUCT_CATEGORIES.find((c) => c.slug === category);
  const categoryName = categoryMeta?.name || category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${categoryName} — Pure Wholesale Botanical Extracts | India Essential Oils`,
    description: categoryMeta?.description || `Explore 100% pure wholesale ${categoryName} manufactured and bulk exported by India Essential Oils. Complete GC-MS testing and certificate of analysis verification.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const enumKey = SLUG_TO_CATEGORY[category];

  if (!enumKey && category !== "all") {
    notFound();
  }

  const categoryMeta = PRODUCT_CATEGORIES.find((c) => c.slug === category);
  const categoryName = categoryMeta?.name || category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  // Non-blocking SSR prefetch with 300ms timeout — warm cache is instant; cold Neon falls back to client
  const allProducts = await Promise.race([
    getProductsFromDb().catch(() => undefined),
    new Promise<undefined>((r) => setTimeout(() => r(undefined), 50)),
  ]);
  const initialProducts = allProducts
    ? (category === "all" ? allProducts : allProducts.filter((p) => p.category === (enumKey ?? category)))
    : undefined;

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <main style={{ flex: 1, maxWidth: "1280px", margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
        <Suspense fallback={<div style={{ padding: "40px", textAlign: "center", color: "#5B486E" }}>Loading {categoryName}...</div>}>
          <CatalogView key={category} preselectedCategory={category} initialProducts={initialProducts} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
