"use client";

import Link from "next/link";
import { Sprout, Microscope, Package } from "lucide-react";
import { ScrollReveal } from "@/components/client/ScrollReveal";

const features = [
  {
    icon: <Sprout size={28} strokeWidth={2} color="#7C3AED" />,
    iconBg: "rgba(124, 58, 237, 0.1)",
    iconBorder: "rgba(124, 58, 237, 0.2)",
    title: "Direct Steam Distillation",
    body: "Ethically harvested across regional farm networks and distilled in 316 stainless steel stills. 100% unadulterated botanical oil with zero synthetic fillers.",
  },
  {
    icon: <Microscope size={28} strokeWidth={2} color="#7C3AED" />,
    iconBg: "rgba(124, 58, 237, 0.1)",
    iconBorder: "rgba(124, 58, 237, 0.2)",
    title: "GC-MS Batch Verification",
    body: "Every distillation run undergoes gas chromatography testing in our Delhi laboratory. Complete Certificate of Analysis (CoA) provided with every shipment.",
  },
  {
    icon: <Package size={28} strokeWidth={2} color="#7C3AED" />,
    iconBg: "rgba(124, 58, 237, 0.1)",
    iconBorder: "rgba(124, 58, 237, 0.2)",
    title: "Wholesale Drum Logistics",
    body: "Export packaging in UN-certified epoxy-lined 25kg carboys and 200kg steel drums, serving institutional formulators and pharmaceutical clients worldwide.",
  },
];

// Light glass card — vibrant botanical aesthetics with fluid responsiveness
export function GlassFeatureCards() {
  return (
    <section
      id="explore-section"
      style={{
        padding: "clamp(48px, 8vh, 80px) clamp(16px, 4vw, 24px) 32px",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "clamp(16px, 3vw, 24px)" }}>
        {features.map((card, idx) => (
          <ScrollReveal key={card.title} staggerIndex={idx}>
            <div
              className="card-interactive liquid-glass"
              style={{
                borderRadius: "clamp(1.5rem, 3vw, 2rem)",
                padding: "clamp(24px, 3.5vw, 36px)",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              {/* Vibrant Glass icon bubble */}
              <div
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "16px",
                  backgroundColor: card.iconBg,
                  border: `1px solid ${card.iconBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
                  flexShrink: 0,
                }}
              >
                {card.icon}
              </div>

              <h3 style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "10px", lineHeight: 1.3 }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "clamp(0.86rem, 1.2vw, 0.92rem)", color: "#5B486E", lineHeight: 1.7, margin: 0 }}>
                {card.body}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// Hero buttons — fluid sizing for all screen resolutions
export function GlassHeroButtons() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "clamp(10px, 2vw, 16px)",
        maxWidth: "580px",
        width: "100%",
      }}
    >
      {/* Primary Button — Vibrant Solid Purple Gradient */}
      <Link
        href="/products"
        style={{
          flex: "1 1 min(100%, 220px)",
          minHeight: "clamp(48px, 5.5vh, 56px)",
          padding: "clamp(12px, 1.6vh, 16px) clamp(20px, 3vw, 30px)",
          background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)",
          color: "#FFFFFF",
          borderRadius: "9999px",
          fontWeight: 700,
          fontSize: "clamp(0.9rem, 1.2vw, 1.02rem)",
          textDecoration: "none",
          boxShadow: "0 4px 14px rgba(24, 13, 38, 0.15)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          letterSpacing: "0.01em",
          boxSizing: "border-box",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s",
          textWrap: "balance",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(24, 13, 38, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 14px rgba(24, 13, 38, 0.15)";
        }}
      >
        Explore Botanical Catalog
      </Link>

      {/* Secondary Button — High Contrast Frosted Liquid Glass */}
      <Link
        href="/contact"
        style={{
          flex: "1 1 min(100%, 200px)",
          minHeight: "clamp(48px, 5.5vh, 56px)",
          padding: "clamp(12px, 1.6vh, 16px) clamp(20px, 3vw, 30px)",
          backgroundColor: "rgba(24, 13, 38, 0.68)",
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          border: "1.5px solid rgba(255, 255, 255, 0.38)",
          color: "#FFFFFF",
          borderRadius: "9999px",
          fontWeight: 700,
          fontSize: "clamp(0.9rem, 1.2vw, 1.02rem)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxShadow: "0 10px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
          boxSizing: "border-box",
          transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s, box-shadow 0.2s",
          textWrap: "balance",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.backgroundColor = "rgba(38, 20, 60, 0.85)";
          e.currentTarget.style.boxShadow = "0 14px 40px rgba(0, 0, 0, 0.45)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.backgroundColor = "rgba(24, 13, 38, 0.68)";
          e.currentTarget.style.boxShadow = "0 10px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)";
        }}
      >
        Contact Us
      </Link>
    </div>
  );
}
