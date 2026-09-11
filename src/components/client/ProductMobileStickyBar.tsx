"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/lib/products-store";
import { ArrowRight } from "lucide-react";

interface ProductMobileStickyBarProps {
  product: Product;
  onOpenQuote: () => void;
}

export function ProductMobileStickyBar({ product, onOpenQuote }: ProductMobileStickyBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="mobile-sticky-pdp-bar"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: "var(--z-sticky-bar)" as unknown as number,
        backgroundColor: "rgba(252, 250, 246, 0.84)",
        backdropFilter: "blur(28px) saturate(180%)",
        WebkitBackdropFilter: "blur(28px) saturate(180%)",
        borderTop: "1px solid rgba(124, 58, 237, 0.25)",
        padding: "12px 20px max(12px, env(safe-area-inset-bottom))",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 -4px 24px rgba(24, 13, 38, 0.1)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "60%", minWidth: 0 }}>
        <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#180D26", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: 1.3 }}>
          {product.name}
        </div>
        <div className="notranslate" translate="no" style={{ fontSize: "0.78rem", color: "#7C3AED", fontWeight: 700, lineHeight: 1.2 }}>
          {product.priceDisplay || "Request Quote"} · MOQ {product.moq}
        </div>
      </div>

      <button
        type="button"
        onClick={onOpenQuote}
        style={{
          background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
          color: "white",
          border: "none",
          borderRadius: "9999px",
          padding: "10px 22px",
          fontSize: "0.875rem",
          fontWeight: 700,
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          boxShadow: "0 2px 10px rgba(24, 13, 38, 0.15)",
          cursor: "pointer",
          minHeight: "44px",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        <span>Enquire</span>
        <ArrowRight size={14} className="rtl-flip" />
      </button>

      <style>{`
        @media (min-width: 1024px) {
          .mobile-sticky-pdp-bar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
