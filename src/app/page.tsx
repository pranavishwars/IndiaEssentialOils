import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/server/Footer";
import { HeroSlideshow } from "@/components/client/HeroSlideshow";
import { GlassFeatureCards, GlassHeroButtons } from "@/components/client/GlassComponents";
import { HomeUniversalSearchBar } from "@/components/client/HomeUniversalSearchBar";
import { PopularOilsSection } from "@/components/client/PopularOilsSection";
import { CompanyVideoSection } from "@/components/client/CompanyVideoSection";
import { HomeB2BSection } from "@/components/client/HomeB2BSection";

export const metadata: Metadata = {
  title: "Indian Essential Oil Manufacturer & B2B Exporter | India Essential Oils",
  description:
    "Bulk essential oils, carrier oils, spice oils and botanical extracts from India for cosmetic, personal-care, aromatherapy and formulation companies worldwide.",
};

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#FCFAF6" }}>
      <main style={{ flex: 1 }}>

        {/* Hero — full viewport cover, clean liquid glass typography without purple glow */}
        <section style={{ position: "relative", height: "100vh", minHeight: "640px", display: "flex", alignItems: "center", overflow: "hidden", borderRadius: 0, marginBottom: "0px" }}>
          <HeroSlideshow />

          <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>
            <div style={{ maxWidth: "820px" }}>

              {/* Liquid glass badge matching navbar opacity */}
              <span
                style={{
                  display: "inline-block",
                  padding: "8px 20px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(35, 24, 48, 0.48)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  WebkitBackdropFilter: "blur(24px) saturate(180%)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "white",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
              >
                Direct Distillery · B2B Wholesale Exporter
              </span>

              <h1
                style={{
                  fontSize: "clamp(2.4rem, 4.8vw, 3.8rem)",
                  fontWeight: 700,
                  fontFamily: "var(--font-lora), Georgia, serif",
                  color: "white",
                  lineHeight: 1.25,
                  letterSpacing: "0.015em",
                  marginBottom: "28px",
                  textShadow: "0 2px 20px rgba(0,0,0,0.35)",
                }}
              >
                Indian Essential Oil Manufacturer<br />&amp; B2B Exporter
              </h1>

              {/* High-Contrast Frosted Liquid Glass Highlight Plaque for 100% Legibility */}
              <div
                style={{
                  backgroundColor: "rgba(20, 10, 32, 0.62)",
                  backdropFilter: "blur(28px) saturate(190%)",
                  WebkitBackdropFilter: "blur(28px) saturate(190%)",
                  border: "1px solid rgba(255, 255, 255, 0.32)",
                  borderRadius: "22px",
                  padding: "20px 24px",
                  marginBottom: "36px",
                  maxWidth: "620px",
                  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.22)",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    color: "#DDD6FE",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#A855F7" }} />
                  A Division of Mother Herbs Pvt. Ltd. · WHO-GMP &amp; ISO 22000 Certified
                </div>
                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "#FFFFFF",
                    lineHeight: 1.65,
                    margin: 0,
                    fontWeight: 450,
                    textShadow: "0 1px 3px rgba(0,0,0,0.4)",
                  }}
                >
                  Bulk essential oils, carrier oils, spice oils and botanical extracts from India for cosmetic, personal-care, aromatherapy and formulation companies worldwide.
                </p>
              </div>

              <GlassHeroButtons />
            </div>
          </div>
        </section>

        {/* Value Proposition — Liquid Glass feature cards (3 boxes) */}
        <GlassFeatureCards />

        {/* Universal Search Bar — Full Aesthetic Length with In-Flow Dynamic Push */}
        <HomeUniversalSearchBar />

        {/* Dynamic Popular & Trending Oils */}
        <PopularOilsSection />

        {/* Corporate Film & Distillery Video Tour Section */}
        <CompanyVideoSection />

        {/* Global B2B Sourcing & Technical Standards Section */}
        <HomeB2BSection />
      </main>

      <Footer />
    </div>
  );
}
