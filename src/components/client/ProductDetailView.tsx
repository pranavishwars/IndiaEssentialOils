"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Product, INITIAL_PRODUCTS, getCategorySlug } from "@/lib/products-store";
import { ProductImageGallery } from "@/components/client/ProductImageGallery";
import { ProductPurchasePanel } from "@/components/client/ProductPurchasePanel";

import { ProductQuoteModal } from "@/components/client/ProductQuoteModal";
import { ProductMobileStickyBar } from "@/components/client/ProductMobileStickyBar";
import {
  ArrowRight,
  ArrowLeft,
} from "lucide-react";


interface ProductDetailViewProps {
  product: Product;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const categorySlug = getCategorySlug(product.category);

  useEffect(() => {
    // Log VIEW event for popularity engine
    fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: product.id, type: "VIEW" }),
    }).catch(() => { });
  }, [product.id]);

  // Related products from same category (excluding current)
  const relatedProducts = INITIAL_PRODUCTS
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  // Fallback if less than 4 in same category: grab top popular oils
  const finalRelated = relatedProducts.length >= 3
    ? relatedProducts
    : [
      ...relatedProducts,
      ...INITIAL_PRODUCTS.filter(p => p.id !== product.id && !relatedProducts.some(r => r.id === p.id)).slice(0, 4 - relatedProducts.length)
    ];

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", paddingTop: "100px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 28px" }}>

        {/* Back Button Navigation */}
        <div style={{ marginBottom: "20px" }}>
          <Link
            href={`/products/${categorySlug}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              color: "#5B486E",
              fontSize: "0.85rem",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 2px 10px rgba(24, 13, 38, 0.03)",
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateX(-3px)";
              e.currentTarget.style.color = "#7C3AED";
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.4)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(124, 58, 237, 0.12)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.color = "#5B486E";
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.2)";
              e.currentTarget.style.boxShadow = "0 2px 10px rgba(24, 13, 38, 0.03)";
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to {product.category.replace(/_/g, " ").toLowerCase().replace(/\b\w/g, c => c.toUpperCase())}</span>
          </Link>
        </div>

        {/* ZONE 1: Above-the-fold */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "48px",
            marginBottom: "50px",
            alignItems: "start",
          }}
        >
          {/* Left Column: Image Gallery */}
          <div>
            <ProductImageGallery product={product} />
          </div>

          {/* Right Column: Purchase Decision Panel */}
          <div>
            <ProductPurchasePanel
              product={product}
              onOpenQuote={() => setIsQuoteOpen(true)}
            />
          </div>
        </div>


        {/* ZONE 2: Deep Content Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "56px", maxWidth: "980px" }}>

          {/* 5.1 Overview Section */}
          <section id="overview" style={{ scrollMarginTop: "140px" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "14px" }}>
              Product Overview &amp; Botanical Profile
            </h2>
            <div style={{ backgroundColor: "white", borderRadius: "24px", padding: "32px", border: "1px solid rgba(124, 58, 237, 0.18)", boxShadow: "0 8px 30px rgba(24, 13, 38, 0.04)" }}>
              <p style={{ fontSize: "1.05rem", color: "#180D26", lineHeight: 1.8, marginBottom: "20px" }}>
                {product.overview || product.description}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", backgroundColor: "rgba(124, 58, 237, 0.06)", border: "1px solid rgba(124, 58, 237, 0.15)", padding: "20px", borderRadius: "16px" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#7C3AED", fontWeight: 800, textTransform: "uppercase" }}>Botanical Name</div>
                  <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "#180D26", fontStyle: "italic", marginTop: "2px" }}>
                    {product.botanicalName || "Pure Botanical Extract"}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "0.75rem", color: "#7C3AED", fontWeight: 800, textTransform: "uppercase" }}>Primary Processing</div>
                  <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "#180D26", marginTop: "2px" }}>
                    {product.shortSpec?.split("·")[0]?.trim() || "Steam Distillation"}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "0.75rem", color: "#7C3AED", fontWeight: 800, textTransform: "uppercase" }}>Quality Profile</div>
                  <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "#180D26", marginTop: "2px" }}>
                    {(() => {
                      const parts = product.shortSpec?.split("·").map(s => s.trim()) || [];
                      return parts.length >= 2 ? parts[parts.length - 1] : "100% Pure & Natural";
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* ZONE 3: Related Botanical Products */}
        <div style={{ marginTop: "72px", borderTop: "1px solid rgba(124, 58, 237, 0.2)", paddingTop: "48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Complementary Botanical Extracts
              </span>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "2px" }}>
                Frequently Ordered Together
              </h2>
            </div>
            <Link
              href="/products"
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#7C3AED",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                transition: "gap 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.gap = "7px")}
              onMouseLeave={e => (e.currentTarget.style.gap = "4px")}
            >
              View Full Catalog <ArrowRight size={15} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
            {finalRelated.map(rel => {
              const relCatSlug = getCategorySlug(rel.category);
              return (
                <Link
                  key={rel.id}
                  href={`/products/${relCatSlug}/${rel.slug}`}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "24px",
                    padding: "20px",
                    border: "1px solid rgba(124, 58, 237, 0.18)",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 6px 20px rgba(24, 13, 38, 0.04)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 16px 36px rgba(124, 58, 237, 0.18)";
                    e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.35)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(24, 13, 38, 0.04)";
                    e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.18)";
                  }}
                >
                  <div style={{ width: "100%", height: "180px", borderRadius: "14px", border: "1px solid rgba(124, 58, 237, 0.12)", display: "block", overflow: "hidden", marginBottom: "14px" }}>
                    <img
                      src={rel.compositeImageUrl || `/products/${rel.slug}.webp`}
                      alt={rel.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                    />
                  </div>

                  <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", marginBottom: "2px" }}>
                    {rel.category.replace(/_/g, " ")}
                  </div>
                  <h3 style={{ fontSize: "1.08rem", fontWeight: 700, color: "#180D26", marginBottom: "4px" }}>
                    {rel.name}
                  </h3>
                  <div style={{ fontSize: "0.78rem", color: "#5B486E", fontStyle: "italic", marginBottom: "12px" }}>
                    {rel.botanicalName}
                  </div>

                  <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(124, 58, 237, 0.12)", paddingTop: "10px", fontSize: "0.78rem", color: "#180D26", gap: "6px" }}>
                    <span className="notranslate" translate="no" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>MOQ: <strong>{rel.moq}</strong></span>
                    <span style={{ color: "#7C3AED", fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>Inspect &rarr;</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>

      {/* Mobile Floating Sticky Enquire Bar */}
      <ProductMobileStickyBar
        product={product}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Pre-filled B2B Quote Modal */}
      <ProductQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        product={product}
      />
    </div>
  );
}
