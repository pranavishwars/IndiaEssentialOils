import { Suspense } from "react";
import { CatalogView } from "@/components/client/CatalogView";
import { Footer } from "@/components/server/Footer";

export default function ProductsPage() {
  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <main style={{ flex: 1, maxWidth: "1280px", margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
        <Suspense fallback={<div style={{ padding: "40px", textAlign: "center", color: "#5B486E" }}>Loading catalog...</div>}>
          <CatalogView key="all" />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
