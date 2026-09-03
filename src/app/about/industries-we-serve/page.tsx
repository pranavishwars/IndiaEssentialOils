import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/server/Footer";
import { 
  Building2, 
  Sparkle, 
  Apple, 
  HeartPulse, 
  Flower, 
  Leaf, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
} from "lucide-react";

export const metadata = {
  title: "Industries We Serve | India Essential Oils",
  description: "Explore the global B2B sectors supplied by India Essential Oils: Cosmetics, Food & Flavor, Pharmaceuticals, Fine Perfumery, and Aromatherapy.",
};

export default function IndustriesWeServePage() {
  const industries = [
    {
      title: "Cosmetics & Personal Care",
      subtitle: "Clean Beauty, Skincare & Luxury Formulations",
      desc: "We supply cold-pressed virgin carrier oils, floral hydrosols, and therapeutic essential oils with low peroxide values and high fatty acid profiles. Perfect for anti-aging serums, body butters, haircare oils, and clean label beauty ranges.",
      image: "/images/industries/cosmetics_personal_care.jpg",
      icon: <Sparkle size={24} color="#EC4899" />,
      color: "#EC4899",
      bg: "rgba(236, 72, 153, 0.1)",
      examples: "Rosehip, Virgin Jojoba, Moroccan Argan, Lavender, Tea Tree, Pure Rose Water",
      cert: "COSMOS / Ecocert Compatible",
    },
    {
      title: "Food, Beverage & Flavoring",
      subtitle: "Standardized Spice Distillates & Oleoresins",
      desc: "Delivering concentrated, standardized aromatic flavor profiles with stable color values and volatile oil percentages. Essential for seasoning manufacturers, confectioneries, bakery, beverage blenders, and processed savory foods.",
      image: "/images/industries/food_beverage_flavor.jpg",
      icon: <Apple size={24} color="#D97706" />,
      color: "#D97706",
      bg: "rgba(217, 119, 6, 0.1)",
      examples: "Cardamom, Black Pepper, Ginger, Clove Bud, Ceylon Cinnamon, Nutmeg Oleoresins",
      cert: "ISO 22000 Food Safety Certified",
    },
    {
      title: "Pharmaceutical & Healthcare",
      subtitle: "Therapeutic-Grade Extracts & Pharmacopoeial Botanicals",
      desc: "High-purity botanical distillates and therapeutic-grade CO₂ extracts complying with IP, BP, USP, and Ph. Eur. standards. Accompanied by full regulatory support, allergen declarations, and non-GMO statements.",
      image: "/images/industries/pharmaceutical_healthcare.jpg",
      icon: <HeartPulse size={24} color="#DC2626" />,
      color: "#DC2626",
      bg: "rgba(220, 38, 38, 0.1)",
      examples: "Curcumin/Turmeric Extract, Eucalyptus Globulus, Mentha Arvensis, Frankincense CO2, Wintergreen",
      cert: "WHO-GMP Manufacturing Standards",
    },
    {
      title: "Perfumery & Fine Fragrance",
      subtitle: "Solvent Floral Absolutes & Exotic Attars",
      desc: "Exquisite aromatic extracts and solvent-extracted floral absolutes crafted specifically for artisanal perfumers, luxury scent houses, and fine fragrance creators seeking depth, longevity, and authentic olfactory richness.",
      image: "/images/industries/perfumery_fine_fragrance.jpg",
      icon: <Flower size={24} color="#8B5CF6" />,
      color: "#8B5CF6",
      bg: "rgba(139, 92, 246, 0.1)",
      examples: "Jasmine Sambac Absolute, Rose Damascena, Lotus Absolute, White Champaca, Aged Oudh / Agarwood",
      cert: "IFRA 51st Amendment Compliant",
    },
    {
      title: "Aromatherapy & Holistic Wellness",
      subtitle: "100% Pure, Unadulterated Distillates",
      desc: "Therapeutic essential oils verified by GC-MS batch analysis for certified aromatherapists, wellness spas, and diffusions. Zero synthetic fragrances, isolates, or petrochemical carriers.",
      image: "/images/industries/aromatherapy_wellness.jpg",
      icon: <Leaf size={24} color="#059669" />,
      color: "#059669",
      bg: "rgba(5, 150, 105, 0.1)",
      examples: "German Chamomile, Clary Sage, Bergamot (FCF), Himalayan Cedarwood, Rosemary, Vetiver",
      cert: "Dual GC-MS Verified Batch CoA",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>

        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#5B486E", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>Home</Link>
          <ChevronRight size={14} />
          <Link href="/about" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>About</Link>
          <ChevronRight size={14} />
          <span style={{ color: "#180D26", fontWeight: 700 }}>Industries We Serve</span>
        </div>

        {/* Hero Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div
            className="liquid-glass-pill"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 18px",
              fontSize: "0.8rem",
              fontWeight: 800,
              color: "#7C3AED",
              marginBottom: "16px",
              backgroundColor: "rgba(124, 58, 237, 0.1)",
              border: "1px solid rgba(124, 58, 237, 0.25)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            <Building2 size={14} color="#7C3AED" /> B2B Sector Formulations
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
              fontWeight: 700,
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#180D26",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Industries We Serve
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "800px", margin: "0 auto", lineHeight: 1.7 }}>
            Supplying wholesale commercial manufacturers, laboratories, and formulators across 5 core industrial sectors.
          </p>
        </div>

        {/* Industry Detailed Cards — 2x.. Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "28px", marginBottom: "48px" }}>
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="liquid-glass-elevated"
              style={{
                borderRadius: "28px",
                padding: "clamp(24px, 3vw, 32px)",
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                border: "1.5px solid rgba(124, 58, 237, 0.18)",
                boxShadow: "0 10px 32px rgba(24, 13, 38, 0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
              }}
            >
              <div>
                {/* Image Banner */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "230px",
                    borderRadius: "18px",
                    overflow: "hidden",
                    marginBottom: "20px",
                    backgroundColor: "#EDE8DF",
                    border: "1px solid rgba(124, 58, 237, 0.14)",
                  }}
                >
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      right: "14px",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(24, 13, 38, 0.85)",
                      backdropFilter: "blur(12px)",
                      color: "#A7F3D0",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <ShieldCheck size={12} color="#10B981" />
                    <span>{ind.cert}</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      backgroundColor: ind.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {ind.icon}
                  </div>
                  <div>
                    <h2 style={{ fontSize: "1.25rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: "0 0 4px 0" }}>
                      {ind.title}
                    </h2>
                    <span style={{ fontSize: "0.82rem", fontWeight: 700, color: ind.color }}>
                      {ind.subtitle}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: "0.92rem", color: "#4A3E56", lineHeight: 1.65, marginBottom: "18px" }}>
                  {ind.desc}
                </p>
              </div>

              <div style={{ backgroundColor: "rgba(124, 58, 237, 0.05)", borderRadius: "16px", padding: "14px 18px", border: "1px solid rgba(124, 58, 237, 0.12)" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "4px" }}>
                  Key Bulk Distillates &amp; Extracts
                </span>
                <span style={{ fontSize: "0.88rem", color: "#180D26", fontWeight: 600 }}>
                  {ind.examples}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Navigation Strip */}
        <div
          className="liquid-glass-elevated"
          style={{
            borderRadius: "24px",
            padding: "32px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid rgba(124, 58, 237, 0.22)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase" }}>
              Explore Next
            </span>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#180D26", margin: "4px 0 0 0" }}>
              The Countries We Serve &bull; Global Map
            </h3>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/about/countries-we-serve"
              className="btn-vibrant-primary"
              style={{
                padding: "12px 24px",
                borderRadius: "9999px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.88rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              The Countries We Serve <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
