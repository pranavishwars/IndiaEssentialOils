import React from "react";
import Link from "next/link";
import { Footer } from "@/components/server/Footer";
import { 
  Sparkles, 
  Leaf, 
  FlaskConical, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  Microscope,
  FileCheck2,
  TreeDeciduous
} from "lucide-react";

export const metadata = {
  title: "Why Us | India Essential Oils",
  description: "Why global brands choose India Essential Oils: Authentic terroir sourcing, dual GC-MS batch verification, and complete regulatory compliance.",
};

export default function WhyUsPage() {
  const features = [
    {
      title: "Authentic Terroir Sourcing",
      subtitle: "Multi-Generational Farmer Partnerships",
      desc: "We maintain direct, unmediated partnerships with traditional cultivator networks across Kashmir (Lavender & Saffron), the Western Ghats (Spices & Cardamom), Uttar Pradesh (Mint & Mentha), and Rajasthan (Vetiver). By identifying optimal soil and micro-climates, we secure raw botanical materials of unparalleled potency.",
      icon: <TreeDeciduous size={26} color="#059669" />,
      color: "#059669",
      bg: "rgba(5, 150, 105, 0.1)",
    },
    {
      title: "Batch Analytical Transparency",
      subtitle: "Dual GC-MS Chromatography & 0.00 ppm Adulteration",
      desc: "Every distillation batch undergoes dual Gas Chromatography-Mass Spectrometry (GC-MS) testing, optical rotation, refractive index, and specific gravity verification. We enforce a zero-adulteration policy ensuring no phthalates, mineral oils, synthetic diluents, or heavy metals.",
      icon: <Microscope size={26} color="#7C3AED" />,
      color: "#7C3AED",
      bg: "rgba(124, 58, 237, 0.1)",
    },
    {
      title: "Global Export Compliance",
      subtitle: "Comprehensive Technical Dossiers",
      desc: "Every international consignment includes full technical documentation: Certificate of Analysis (CoA), Safety Data Sheet (MSDS/SDS compliant with GHS), IFRA 51st Amendment conformity statements, Allergen declarations, and Non-GMO verification.",
      icon: <FileCheck2 size={26} color="#D97706" />,
      color: "#D97706",
      bg: "rgba(217, 119, 6, 0.1)",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1140px", margin: "0 auto", width: "100%" }}>

        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#5B486E", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>Home</Link>
          <ChevronRight size={14} />
          <Link href="/about" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>About</Link>
          <ChevronRight size={14} />
          <span style={{ color: "#180D26", fontWeight: 700 }}>Why Us</span>
        </div>

        {/* Hero Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
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
            <Sparkles size={14} color="#7C3AED" /> Purity, Sourcing &amp; Compliance
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
            Why Choose India Essential Oils
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "800px", margin: "0 auto", lineHeight: 1.7 }}>
            Three non-negotiable pillars that distinguish our botanical distillation from conventional wholesale commodity trading.
          </p>
        </div>

        {/* Feature Narrative Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
          {features.map((item, idx) => (
            <div
              key={idx}
              className="liquid-glass-elevated"
              style={{
                borderRadius: "28px",
                padding: "clamp(28px, 4vw, 40px)",
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                border: "1.5px solid rgba(124, 58, 237, 0.2)",
                boxShadow: "0 12px 36px rgba(24, 13, 38, 0.05)",
                display: "flex",
                alignItems: "flex-start",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  backgroundColor: item.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              <div style={{ flex: 1, minWidth: "280px" }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 800, color: item.color, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
                  {item.subtitle}
                </div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: "0 0 12px 0" }}>
                  {item.title}
                </h2>
                <p style={{ fontSize: "1.02rem", color: "#3B284C", lineHeight: 1.8, margin: 0 }}>
                  {item.desc}
                </p>
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
              Industries We Serve
            </h3>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/about/industries-we-serve"
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
              Industries We Serve <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
