import React from "react";
import { notFound } from "next/navigation";
import { INITIAL_PRODUCTS, getCategorySlug } from "@/lib/products-store";
import { getProductBySlugFromDb } from "@/lib/products-db";
import { ProductDetailView } from "@/components/client/ProductDetailView";

export const dynamic = "force-dynamic";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlugFromDb(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
