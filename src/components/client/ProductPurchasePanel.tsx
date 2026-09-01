"use client";

import React from "react";
import Link from "next/link";
import { Product, getCategorySlug } from "@/lib/products-store";
import { Star, ArrowRight, FlaskConical } from "lucide-react";

interface ProductPurchasePanelProps {
  product: Product;
  onOpenQuote: () => void;
}

export function ProductPurchasePanel({ product, onOpenQuote }: ProductPurchasePanelProps) {
  const categorySlug = getCategorySlug(product.category);
  const categoryLabel = product.category.replace(/_/g, " ");

  const scrollToReviews = (e: React.MouseEvent) => {
    e.preventDefault();
    const reviewsEl = document.getElementById("reviews");
    if (reviewsEl) {
      reviewsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: "96px",
        height: "fit-content",
      }}
    >
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "0.8rem",
          color: "#5B486E",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ color: "#5B486E", textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/products" style={{ color: "#5B486E", textDecoration: "none" }}>Catalog</Link>
        <span>/</span>
        <Link href={`/products/${categorySlug}`} style={{ color: "#5B486E", textDecoration: "none" }}>
          {categoryLabel}
        </Link>
        <span>/</span>
        <span style={{ color: "#180D26", fontWeight: 700 }}>{product.name}</span>
      </nav>

      {/* Category Badge */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "#7C3AED",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              backgroundColor: "rgba(124, 58, 237, 0.1)",
              padding: "4px 14px",
              borderRadius: "9999px",
              border: "1px solid rgba(124, 58, 237, 0.2)",
            }}
          >
            {categoryLabel} {product.subCategory ? `· ${product.subCategory}` : ""}
          </span>

          {product.signatureColor && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#4B3D60",
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                padding: "3px 10px",
                borderRadius: "9999px",
              }}
              title="Botanical Signature Color"
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: product.signatureColor,
                  display: "inline-block",
                }}
              />
              {product.signatureColor}
            </span>
          )}
        </div>
      </div>

      {/* Product Name (H1) */}
      <h1
        style={{
          fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
          fontFamily: "var(--font-lora), Georgia, serif",
          fontWeight: 700,
          color: "#180D26",
          lineHeight: 1.18,
          marginBottom: "6px",
        }}
      >
        {product.name}
      </h1>

      {/* Botanical Latin Name */}
      {product.botanicalName && (
        <div style={{ fontSize: "1.05rem", fontStyle: "italic", color: "#5B486E", marginBottom: "14px" }}>
          {product.botanicalName}
        </div>
      )}

      {/* Short Spec line */}
      <div style={{ fontSize: "0.875rem", color: "#180D26", backgroundColor: "rgba(124, 58, 237, 0.08)", border: "1px solid rgba(124, 58, 237, 0.15)", padding: "10px 16px", borderRadius: "12px", marginBottom: "16px", fontWeight: 600 }}>
        {product.shortSpec}
      </div>

      {/* Star Rating & Review Link */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <div style={{ display: "flex", gap: "2px" }}>
          {[1, 2, 3, 4, 5].map(s => (
            <Star key={s} size={16} fill="#F59E0B" color="#F59E0B" />
          ))}
        </div>
        <a
          href="#reviews"
          onClick={scrollToReviews}
          style={{ fontSize: "0.88rem", color: "#7C3AED", fontWeight: 700, textDecoration: "none", cursor: "pointer" }}
        >
          4.9 (48 Verified B2B Reviews)
        </a>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: "rgba(124, 58, 237, 0.15)", marginBottom: "20px" }} />

      {/* Price & MOQ Block */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "0.8rem", color: "#5B486E", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
          Approximate Wholesale Price
        </div>
        <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "#180D26", fontFamily: "var(--font-lora), Georgia, serif" }}>
          {product.priceDisplay || "Request Quote for Pricing"}
        </div>
        <div style={{ fontSize: "0.78rem", color: "#5B486E", marginTop: "4px" }}>
          *Tiered volume discounts applied at invoice based on purchase quantity.
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "16px", fontSize: "0.88rem", color: "#180D26", flexWrap: "wrap" }}>
          <span style={{ fontWeight: 600, color: "#5B486E" }}>Minimum Order Qty (MOQ):</span>
          <strong className="notranslate" translate="no" style={{ backgroundColor: "rgba(124, 58, 237, 0.12)", color: "#7C3AED", padding: "4px 12px", borderRadius: "8px", border: "1px solid rgba(124, 58, 237, 0.2)", whiteSpace: "nowrap" }}>
            {product.moq}
          </strong>
        </div>

        {/* Private Label / Turnkey OEM Customization Highlight */}
        <div style={{ marginTop: "16px", padding: "12px 14px", borderRadius: "12px", backgroundColor: "rgba(124, 58, 237, 0.05)", border: "1px dashed rgba(124, 58, 237, 0.35)", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "1.1rem" }}>🏷️</span>
          <div style={{ fontSize: "0.82rem", color: "#374151", lineHeight: 1.4 }}>
            <strong style={{ color: "#7C3AED", display: "block" }}>Custom Labeling &amp; OEM Ready</strong>
            We print your brand logo, custom barcodes, and provide turnkey bottle packaging for your brand.
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
        {/* Primary CTA */}
        <button
          onClick={onOpenQuote}
          style={{
            background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)",
            color: "white",
            border: "none",
            borderRadius: "9999px",
            padding: "16px 28px",
            fontSize: "1rem",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            boxShadow: "0 6px 22px rgba(124, 58, 237, 0.5)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 28px rgba(124, 58, 237, 0.65)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 22px rgba(124, 58, 237, 0.5)";
          }}
        >
          Request Bulk Quote / CoA <ArrowRight size={18} />
        </button>
      </div>

      {/* Batch Lookup Direct Link */}
      <div style={{ borderTop: "1px solid rgba(124, 58, 237, 0.15)", paddingTop: "18px" }}>
        <Link
          href="/batch-lookup"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "0.88rem",
            fontWeight: 700,
            color: "#7C3AED",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#6D28D9")}
          onMouseLeave={e => (e.currentTarget.style.color = "#7C3AED")}
        >
          <FlaskConical size={16} color="#7C3AED" />
          Have a bottle? Look up your batch report &rarr;
        </Link>
      </div>
    </div>
  );
}
