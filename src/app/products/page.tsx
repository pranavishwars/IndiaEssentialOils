import { Suspense } from "react";
import { CatalogView } from "@/components/client/CatalogView";
import { Footer } from "@/components/server/Footer";

export default function ProductsPage() {
  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <main style={{ flex: 1, maxWidth: "1280px", margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
        <div style={{ marginBottom: "40px" }}>
          <span style={{ display: "inline-block", padding: "6px 18px", borderRadius: "9999px", backgroundColor: "rgba(124, 58, 237, 0.1)", border: "1px solid rgba(124, 58, 237, 0.25)", color: "#7C3AED", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
            200+ Botanical Extracts
          </span>
          <h1 style={{ fontSize: "3rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "12px" }}>
            Botanical Catalog & Search
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#5B486E", maxWidth: "600px", lineHeight: 1.7 }}>
            Explore pure, lab-tested botanical extracts across 8 specialized categories with comprehensive chemical analysis and GC-MS documentation.
          </p>
        </div>

        <Suspense fallback={<div style={{ padding: "40px", textAlign: "center", color: "#5B486E" }}>Loading catalog...</div>}>
          <CatalogView />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
