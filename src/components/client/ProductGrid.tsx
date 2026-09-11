"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/lib/data";

export function ProductGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
      {PRODUCT_CATEGORIES.map((category) => (
        <Link href={`/products/${category.slug}`} key={category.id} style={{ textDecoration: "none", display: "block", height: "100%" }}>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "rgba(255, 255, 255, 0.74)",
              backdropFilter: "blur(24px) saturate(160%)",
              WebkitBackdropFilter: "blur(24px) saturate(160%)",
              border: "1px solid rgba(124, 58, 237, 0.18)",
              borderRadius: "24px",
              padding: "26px",
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s",
              boxShadow: "0 4px 20px rgba(24, 13, 38, 0.04)",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 18px 45px rgba(24, 13, 38, 0.12)";
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.35)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(24, 13, 38, 0.04)";
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.18)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "14px", backgroundColor: "rgba(124, 58, 237, 0.12)", border: "1px solid rgba(124, 58, 237, 0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7C3AED" }}>
                {category.icon}
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: 0 }}>{category.name}</h3>
            </div>
            
            <p style={{ fontSize: "0.9rem", color: "#5B486E", marginBottom: "24px", lineHeight: 1.6, flexGrow: 1 }}>{category.description}</p>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
              {category.sampleProducts.slice(0, 3).map(prod => (
                <span key={prod} style={{ fontSize: "0.75rem", backgroundColor: "rgba(124, 58, 237, 0.08)", border: "1px solid rgba(124, 58, 237, 0.15)", padding: "4px 10px", borderRadius: "8px", color: "#180D26", fontWeight: 600 }}>
                  {prod}
                </span>
              ))}
              {category.sampleProducts.length > 3 && (
                <span style={{ fontSize: "0.75rem", backgroundColor: "transparent", padding: "4px 6px", color: "#7C3AED", fontWeight: 700 }}>
                  +{category.sampleProducts.length - 3} more
                </span>
              )}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "16px", borderTop: "1px solid rgba(124, 58, 237, 0.12)" }}>
              <span style={{ fontWeight: 700, color: "#180D26", fontSize: "0.88rem" }}>View Details</span>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#7C3AED", display: "flex", alignItems: "center", gap: "4px" }}>
                Explore <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
