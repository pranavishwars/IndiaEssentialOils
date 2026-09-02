import React from "react";
import Link from "next/link";
import { Footer } from "@/components/server/Footer";
import { 
  Package, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight,
  Droplets,
  Layers,
  Box,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "Packaging Process | India Essential Oils",
  description: "Explore our specialized packaging process: Amber/Cobalt glass bottles, precision droppers, tamper-evident seals, and protective cushion box packing.",
};

export default function PackagingProcessPage() {
  const steps = [
    {
      title: "1. Premium Glass Selection & Finishing",
      desc: "We supply USP Type III compliant glass bottles specifically designed to protect delicate botanical chemistry from light degradation. Finishes include Amber Glass (maximum UV block), Cobalt Blue, Emerald Green, Clear Glass, and Matte/Frosted Velvet touch.",
      sizes: "5 ml, 10 ml, 15 ml, 20 ml, 30 ml, 50 ml, 100 ml, 200 ml, 500 ml, 1 kg, 2 kg",
      badge: "UV Degradation Defense",
      color: "#D97706",
    },
    {
      title: "2. Precision Droppers & Closure Mechanisms",
      desc: "A wide variety of dispensing closures tested for chemical compatibility with concentrated essential oils: European dropper reducers (controlled drop-by-drop orifice), calibrated glass pipettes, tamper-evident breakaway caps, fine mist atomizers, and stainless steel rollerballs.",
      sizes: "Euro Dropper Caps, Pipettes, Rollerballs, Pumps, Tamper Rings",
      badge: "Controlled Dispensing",
      color: "#7C3AED",
    },
    {
      title: "3. Customized Cushion Box & Outer Packing",
      desc: "To guarantee zero breakage during domestic and international transit, our cushion box packing features custom molded internal foam/corrugated inserts that absorb vibration and impact. We also provide bespoke luxury gift boxes and branded outer cartons for private label lines.",
      sizes: "Single Unit Boxes, Multi-Pack Kits, Presentation & Gifting Boxes",
      badge: "Zero-Breakage Transit",
      color: "#059669",
    },
    {
      title: "4. Cleanroom Filling & Nitrogen Purging",
      desc: "Bottles are filled in an ISO-classified cleanroom environment. For oxygen-sensitive botanicals, automated nitrogen headspace flushing displaces atmospheric oxygen before cap torque application to prevent oxidative rancidity.",
      sizes: "Pharmaceutical Cleanroom Standard",
      badge: "Active Potency Guard",
      color: "#0284C7",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1140px", margin: "0 auto", width: "100%" }}>

        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#5B486E", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>Home</Link>
          <ChevronRight size={14} />
          <Link href="/packaging" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>Packaging</Link>
          <ChevronRight size={14} />
          <span style={{ color: "#180D26", fontWeight: 700 }}>Packaging Process</span>
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
            <Package size={14} color="#7C3AED" /> OEM &bull; Private Label &bull; Retail Bottling
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
            Packaging Process
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "800px", margin: "0 auto", lineHeight: 1.7 }}>
            End-to-end retail packaging, glass finishing, automated dropper assembly, and protective cushion box packing.
          </p>
        </div>

        {/* Process Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="liquid-glass-elevated"
              style={{
                borderRadius: "28px",
                padding: "clamp(28px, 4vw, 36px)",
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                border: "1.5px solid rgba(124, 58, 237, 0.18)",
                boxShadow: "0 12px 36px rgba(24, 13, 38, 0.04)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap", marginBottom: "14px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#180D26", margin: 0 }}>
                  {step.title}
                </h2>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(124, 58, 237, 0.1)",
                    color: step.color,
                  }}
                >
                  {step.badge}
                </span>
              </div>

              <p style={{ fontSize: "1.02rem", color: "#3B284C", lineHeight: 1.8, marginBottom: "20px" }}>
                {step.desc}
              </p>

              <div style={{ backgroundColor: "#FCFAF6", borderRadius: "16px", padding: "16px 20px", border: "1px solid rgba(124, 58, 237, 0.12)" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "4px" }}>
                  Available Formats &amp; Closures
                </span>
                <span style={{ fontSize: "0.92rem", color: "#180D26", fontWeight: 600 }}>
                  {step.sizes}
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
              Packaging Sizes &bull; Bulk &amp; Canisters
            </h3>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/packaging/sizes"
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
              Packaging Sizes <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
