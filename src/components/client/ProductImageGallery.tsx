"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Product } from "@/lib/products-store";
import { ShieldCheck, Award, FlaskConical, CheckCircle2, Eye, Box } from "lucide-react";

interface ProductImageGalleryProps {
  product: Product;
}

export function ProductImageGallery({ product }: ProductImageGalleryProps) {
  const [activeTab, setActiveTab] = useState<"BOTTLE" | "LABEL">("BOTTLE");
  const [isZooming, setIsZooming] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const bottleSrc = product.compositeImageUrl || `/products/${product.slug}.webp`;
  const labelSrc = product.labelImageUrl || `/labels/${product.slug}.png`;
  const currentSrc = activeTab === "BOTTLE" ? bottleSrc : labelSrc;
  const signatureColor = product.signatureColor || "#275A38";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
      {/* Primary Container */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsZooming(true)}
        onMouseLeave={() => setIsZooming(false)}
        onMouseMove={handleMouseMove}
        style={{
          position: "relative",
          width: "100%",
          height: "520px",
          backgroundColor: "#F7F4EE",
          borderRadius: "28px",
          border: "1px solid rgba(124, 58, 237, 0.2)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "crosshair",
          boxShadow: "0 10px 36px rgba(24, 13, 38, 0.06)",
        }}
      >
        {/* Main Image with Smooth Zoom */}
        <img
          src={currentSrc}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: activeTab === "BOTTLE" ? "cover" : "contain",
            objectPosition: "center",
            padding: activeTab === "LABEL" ? "28px" : "0px",
            transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
            transform: isZooming ? (activeTab === "LABEL" ? "scale(2.2)" : "scale(1.85)") : "scale(1)",
            transition: isZooming ? "transform 0.08s ease-out" : "transform 0.3s ease-out",
            pointerEvents: "none",
            display: "block",
          }}
        />

        {/* View Mode Toggle Pill (Top-Right) */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            display: "flex",
            gap: "6px",
            backgroundColor: "rgba(255, 255, 255, 0.82)",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            padding: "4px",
            borderRadius: "9999px",
            border: "1px solid rgba(124, 58, 237, 0.22)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
            zIndex: "var(--z-gallery)" as unknown as number,
          }}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setActiveTab("BOTTLE"); }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              padding: "6px 14px",
              borderRadius: "9999px",
              fontSize: "0.78rem",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              backgroundColor: activeTab === "BOTTLE" ? "#180D26" : "transparent",
              color: activeTab === "BOTTLE" ? "#FFFFFF" : "#5B486E",
            }}
          >
            <Box size={14} /> 3D Bottle
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setActiveTab("LABEL"); }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              padding: "6px 14px",
              borderRadius: "9999px",
              fontSize: "0.78rem",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              backgroundColor: activeTab === "LABEL" ? "#180D26" : "transparent",
              color: activeTab === "LABEL" ? "#FFFFFF" : "#5B486E",
            }}
          >
            <Eye size={14} /> Flat Label
          </button>
        </div>

        {/* Hover Zoom Hint Badge */}
        {!isZooming && (
          <div
            style={{
              position: "absolute",
              bottom: "18px",
              right: "18px",
              backgroundColor: "rgba(255, 255, 255, 0.74)",
              backdropFilter: "blur(16px) saturate(160%)",
              WebkitBackdropFilter: "blur(16px) saturate(160%)",
              color: "#5B486E",
              fontSize: "0.75rem",
              fontWeight: 700,
              padding: "5px 12px",
              borderRadius: "9999px",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              pointerEvents: "none",
            }}
          >
            Hover to magnify {activeTab === "LABEL" ? "apothecary artwork" : "bottle details"}
          </div>
        )}

        {/* Floating Authentic GC-MS Seal Badge */}
        <div
          style={{
            position: "absolute",
            top: "18px",
            left: "18px",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: "rgba(255, 255, 255, 0.82)",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            borderRadius: "9999px",
            padding: "5px 14px",
            fontSize: "0.75rem",
            fontWeight: 800,
            color: "#059669",
            boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
          }}
        >
          <ShieldCheck size={14} color="#059669" />
          <span>GC-MS Authenticated</span>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: signatureColor,
              display: "inline-block",
              marginLeft: "4px",
              border: "1px solid rgba(0,0,0,0.15)",
            }}
            title={`Signature Botanical Accent: ${signatureColor}`}
          />
        </div>
      </div>

      {/* Quality Feature Badges Strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        <Link
          href="/certifications"
          title="View accredited ISO 9001, ISO 22000, GMP & Organic Certificates"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.72)",
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
            border: "1px solid rgba(124, 58, 237, 0.18)",
            borderRadius: "14px",
            padding: "12px 10px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            textDecoration: "none",
            transition: "transform 0.2s, background-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.12)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.72)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <Award size={18} color="#7C3AED" />
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#180D26" }}>ISO 22000 &amp; GMP</span>
        </Link>

        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.72)",
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
            border: "1px solid rgba(124, 58, 237, 0.18)",
            borderRadius: "14px",
            padding: "12px 10px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <FlaskConical size={18} color="#059669" />
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#180D26" }}>100% Pure & Uncut</span>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.72)",
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
            border: "1px solid rgba(124, 58, 237, 0.18)",
            borderRadius: "14px",
            padding: "12px 10px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <CheckCircle2 size={18} color="#D97706" />
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#180D26" }}>Batch Traceable</span>
        </div>
      </div>
    </div>
  );
}
