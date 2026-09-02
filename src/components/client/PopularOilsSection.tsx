"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";
import { Product, getCategorySlug } from "@/lib/products-store";

export function PopularOilsSection() {
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPopular() {
      try {
        const res = await fetch("/api/search?sort=popularity");
        if (res.ok) {
          const data = await res.json();
          setPopularProducts(data.results.slice(0, 6)); // Top 6 trending products
        }
      } catch (err) {
        console.error("Failed to load popular oils:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPopular();
  }, []);

  return (
    <section style={{ padding: "0 24px 80px", maxWidth: "1280px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(124, 58, 237, 0.1)",
              border: "1px solid rgba(124, 58, 237, 0.25)",
              padding: "6px 16px",
              borderRadius: "9999px",
              color: "#7C3AED",
              fontWeight: 800,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "12px",
            }}
          >
            <TrendingUp size={14} color="#7C3AED" /> 90-Day Market Demand
          </div>
          <h2 style={{ fontSize: "var(--font-size-h1)", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: 0 }}>
            Most Popular & Trending Oils
          </h2>
        </div>

        <Link
          href="/products"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#7C3AED",
            fontWeight: 700,
            fontSize: "0.92rem",
            textDecoration: "none",
            backgroundColor: "rgba(255, 255, 255, 0.76)",
            backdropFilter: "blur(20px) saturate(160%)",
            border: "1px solid rgba(124, 58, 237, 0.3)",
            padding: "12px 24px",
            borderRadius: "9999px",
            boxShadow: "0 4px 16px rgba(124, 58, 237, 0.08)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#FFFFFF";
            e.currentTarget.style.transform = "translateX(3px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(124, 58, 237, 0.18)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.76)";
            e.currentTarget.style.transform = "translateX(0)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(124, 58, 237, 0.08)";
          }}
        >
          View Full Catalog <ArrowRight size={16} />
        </Link>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
        {popularProducts.map((product, index) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.74)",
              backdropFilter: "blur(24px) saturate(160%)",
              WebkitBackdropFilter: "blur(24px) saturate(160%)",
              border: "1px solid rgba(124, 58, 237, 0.18)",
              borderRadius: "24px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 8px 30px rgba(24, 13, 38, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 48px rgba(124, 58, 237, 0.18)";
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(24, 13, 38, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)";
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.18)";
            }}
          >
            {/* Rank badge */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", letterSpacing: "0.06em" }}>
                #{index + 1} TRENDING
              </span>
            </div>

            {/* Product Bottle Image Link */}
            <Link
              href={`/products/${getCategorySlug(product.category)}/${product.slug}`}
              style={{
                position: "relative",
                width: "100%",
                height: "250px",
                borderRadius: "16px",
                overflow: "hidden",
                marginBottom: "16px",
                border: "1px solid rgba(124, 58, 237, 0.12)",
                display: "block",
                textDecoration: "none",
              }}
            >
              <img
                src={product.compositeImageUrl || `/products/${product.slug}.webp`}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  transition: "transform 0.4s ease",
                  display: "block",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                loading="lazy"
              />
            </Link>

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "4px" }}>
              <Link href={`/products/${getCategorySlug(product.category)}/${product.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                {product.name}
              </Link>
            </h3>
            {product.botanicalName && (
              <div style={{ fontSize: "0.82rem", fontStyle: "italic", color: "#5B486E", marginBottom: "12px" }}>
                {product.botanicalName}
              </div>
            )}

            <p style={{ fontSize: "0.875rem", color: "#5B486E", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
              {product.description}
            </p>

            <div style={{ fontSize: "0.8rem", color: "#180D26", backgroundColor: "rgba(124, 58, 237, 0.08)", border: "1px solid rgba(124, 58, 237, 0.15)", padding: "8px 12px", borderRadius: "10px", marginBottom: "20px" }}>
              {product.shortSpec}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "14px",
                borderTop: "1px solid rgba(124, 58, 237, 0.15)",
                gap: "8px",
              }}
            >
              <div
                className="notranslate"
                translate="no"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.82rem",
                  color: "#5B486E",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontWeight: 600, opacity: 0.85 }}>MOQ:</span>
                <strong style={{ color: "#180D26", fontWeight: 700 }}>{product.moq}</strong>
              </div>

              <Link
                href={`/products/${getCategorySlug(product.category)}/${product.slug}`}
                style={{
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  color: "#7C3AED",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "gap 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#6D28D9";
                  e.currentTarget.style.gap = "7px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#7C3AED";
                  e.currentTarget.style.gap = "4px";
                }}
              >
                <span>View Details</span>
                <ArrowRight size={14} style={{ flexShrink: 0 }} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
