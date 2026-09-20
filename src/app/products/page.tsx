import { Suspense } from "react";
import { CatalogView } from "@/components/client/CatalogView";
import { Footer } from "@/components/server/Footer";
import { getProductsFromDb } from "@/lib/products-db";

export default async function ProductsPage() {
  // Non-blocking SSR prefetch: if server cache is warm (<1ms) products arrive instantly;
  // if Neon is cold the 300ms timeout wins and the client handles loading via skeleton.
  const initialProducts = await Promise.race([
    getProductsFromDb().catch(() => undefined),
    new Promise<undefined>((r) => setTimeout(() => r(undefined), 50)),
  ]);

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <main style={{ flex: 1, maxWidth: "1280px", margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
        <Suspense fallback={<div style={{ padding: "40px", textAlign: "center", color: "#5B486E" }}>Loading catalog...</div>}>
          <CatalogView key="all" initialProducts={initialProducts} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
