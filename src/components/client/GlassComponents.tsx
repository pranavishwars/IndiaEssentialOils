"use client";

import Link from "next/link";
import { Sprout, Microscope, Package } from "lucide-react";
import { ScrollReveal } from "@/components/client/ScrollReveal";

const features = [
  {
    icon: <Sprout size={28} strokeWidth={2} color="#059669" />,
    iconBg: "rgba(16, 185, 129, 0.14)",
    iconBorder: "rgba(16, 185, 129, 0.25)",
    title: "Direct Steam Distillation",
    body: "Ethically harvested across regional farm networks and distilled in 316 stainless steel stills. 100% unadulterated botanical oil with zero synthetic fillers.",
  },
  {
    icon: <Microscope size={28} strokeWidth={2} color="#7C3AED" />,
    iconBg: "rgba(124, 58, 237, 0.14)",
    iconBorder: "rgba(124, 58, 237, 0.25)",
    title: "GC-MS Batch Verification",
    body: "Every distillation run undergoes gas chromatography testing in our Delhi laboratory. Complete Certificate of Analysis (CoA) provided with every shipment.",
  },
  {
    icon: <Package size={28} strokeWidth={2} color="#D97706" />,
    iconBg: "rgba(245, 158, 11, 0.14)",
    iconBorder: "rgba(245, 158, 11, 0.25)",
    title: "Wholesale Drum Logistics",
    body: "Export packaging in UN-certified epoxy-lined 25kg carboys and 200kg steel drums. Rapid air express dispatch and full container ocean freight worldwide.",
  },
];

// Light glass card — vibrant botanical aesthetics
export function GlassFeatureCards() {
  return (
    <section style={{ padding: "0 24px 80px", maxWidth: "1280px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
        {features.map((card, idx) => (
          <ScrollReveal key={card.title} staggerIndex={idx}>
            <div
              className="card-interactive liquid-glass"
              style={{
                borderRadius: "2rem",
                padding: "40px 36px",
                height: "100%",
              }}
            >
              {/* Vibrant Glass icon bubble */}
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "16px",
                  backgroundColor: card.iconBg,
                  border: `1px solid ${card.iconBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "22px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
                }}
              >
                {card.icon}
              </div>

              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "10px" }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#5B486E", lineHeight: 1.75 }}>
                {card.body}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// Hero buttons — solid radiant gradient primary & frosted liquid glass secondary
export function GlassHeroButtons() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "18px",
        maxWidth: "600px",
        width: "100%",
      }}
    >
      {/* Primary Button — Vibrant Solid Purple Gradient (Never Transparent) */}
      <Link
        href="/products"
        style={{
          flex: "1 1 250px",
          minHeight: "64px",
          padding: "18px 34px",
          background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)",
          color: "#FFFFFF",
          borderRadius: "9999px",
          fontWeight: 800,
          fontSize: "1.1rem",
          textDecoration: "none",
          boxShadow: "0 8px 28px rgba(124, 58, 237, 0.65)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          letterSpacing: "0.01em",
          boxSizing: "border-box",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 12px 36px rgba(124, 58, 237, 0.85)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 28px rgba(124, 58, 237, 0.65)";
        }}
      >
        Explore Botanical Catalog
      </Link>

      {/* Secondary Button — High Contrast Frosted Liquid Glass */}
      <Link
        href="/request-quote"
        style={{
          flex: "1 1 250px",
          minHeight: "64px",
          padding: "18px 34px",
          backgroundColor: "rgba(24, 13, 38, 0.68)",
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          border: "1.5px solid rgba(255, 255, 255, 0.38)",
          color: "#FFFFFF",
          borderRadius: "9999px",
          fontWeight: 800,
          fontSize: "1.1rem",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxShadow: "0 10px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
          boxSizing: "border-box",
          transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.backgroundColor = "rgba(38, 20, 60, 0.85)";
          e.currentTarget.style.boxShadow = "0 14px 40px rgba(0, 0, 0, 0.45)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.backgroundColor = "rgba(24, 13, 38, 0.68)";
          e.currentTarget.style.boxShadow = "0 10px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)";
        }}
      >
        Request a Bulk Quote
      </Link>
    </div>
  );
}
