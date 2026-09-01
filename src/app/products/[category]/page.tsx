import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CatalogView } from "@/components/client/CatalogView";
import { Footer } from "@/components/server/Footer";
import { SLUG_TO_CATEGORY, CATEGORY_SLUGS } from "@/lib/products-store";
import { PRODUCT_CATEGORIES } from "@/lib/data";

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

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <main style={{ flex: 1, maxWidth: "1280px", margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span
              style={{
                display: "inline-block",
                padding: "6px 18px",
                borderRadius: "9999px",
                backgroundColor: "rgba(124, 58, 237, 0.1)",
                border: "1px solid rgba(124, 58, 237, 0.25)",
                color: "#7C3AED",
                fontWeight: 800,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Wholesale Botanical Catalog
            </span>
            {categoryMeta?.badge && (
              <span
                style={{
                  display: "inline-block",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: "0.78rem",
                  letterSpacing: "0.04em",
                  boxShadow: "0 2px 8px rgba(236, 72, 153, 0.35)",
                }}
              >
                {categoryMeta.badge}
              </span>
            )}
          </div>
          <h1 style={{ fontSize: "3rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "12px" }}>
            {categoryName}
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#5B486E", maxWidth: "680px", lineHeight: 1.7 }}>
            {categoryMeta?.description || "Explore pure, lab-tested botanical extracts with comprehensive chemical analysis and GC-MS documentation."}
          </p>
        </div>

        <Suspense fallback={<div style={{ padding: "40px", textAlign: "center", color: "#5B486E" }}>Loading {categoryName}...</div>}>
          <CatalogView />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
