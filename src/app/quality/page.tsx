import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/server/Footer";
import { Sprout, FlaskConical, Microscope, ClipboardList, Sparkles, CheckCircle2, ArrowRight, Boxes, Droplets } from "lucide-react";

export default function QualityPage() {
  const qualityPillars = [
    {
      title: "1. Botanical Terroir & Raw Sourcing",
      desc: "We work directly with vetted farmers and indigenous harvesters. Raw botanical foliage, seeds, and resins undergo rigorous microscopic, moisture, and organoleptic pre-screening before distillation.",
      icon: <Sprout size={28} color="#059669" />,
      bg: "rgba(16, 185, 129, 0.12)",
      border: "rgba(16, 185, 129, 0.25)",
    },
    {
      title: "2. Precision Low-Pressure Distillation",
      desc: "Our GMP-certified manufacturing units utilize 316-grade stainless steel stills with computer-regulated vapor velocities and low temperatures, preserving delicate heat-sensitive monoterpenes.",
      icon: <FlaskConical size={28} color="#7C3AED" />,
      bg: "rgba(124, 58, 237, 0.12)",
      border: "rgba(124, 58, 237, 0.25)",
    },
    {
      title: "3. Dual GC-MS Chromatographic Auditing",
      desc: "Every single distillation lot is tested on Agilent Gas Chromatography-Mass Spectrometry systems to identify 100% of chemical constituents, verifying active targets and detecting synthetic adulterants.",
      icon: <Microscope size={28} color="#7C3AED" />,
      bg: "rgba(124, 58, 237, 0.12)",
      border: "rgba(124, 58, 237, 0.25)",
    },
    {
      title: "4. End-to-End Batch Traceability",
      desc: "Every drum, bottle, and flask receives a unique batch identifier linked to our analytical database. Complete Certificates of Analysis (CoA) and MSDS accompany every commercial order.",
      icon: <ClipboardList size={28} color="#D97706" />,
      bg: "rgba(245, 158, 11, 0.12)",
      border: "rgba(245, 158, 11, 0.25)",
    },
  ];

  const labInstruments = [
    { name: "GC-MS Chromatography", use: "Chemical component profiling & chiral purity verification" },
    { name: "Specific Gravity (Pycnometer)", use: "Density measurement at standardized 20°C / 25°C" },
    { name: "Digital Refractometer", use: "Refractive index determination for purity confirmation" },
    { name: "Optical Polarimeter", use: "Optical rotation angle validation for enantiomeric authenticity" },
    { name: "Flash Point Closed-Cup Tester", use: "Safety data and air cargo transport classification" },
    { name: "ICP-MS Heavy Metal Analysis", use: "Parts-per-billion screen for Lead, Arsenic, Cadmium, Mercury" },
  ];

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1140px", margin: "0 auto", width: "100%" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
            }}
          >
            <Sparkles size={14} color="#7C3AED" /> Uncompromising Analytical Integrity
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
            Quality Control & Laboratory Assurance
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "720px", margin: "0 auto", lineHeight: 1.7 }}>
            As an ISO 9001:2015 and GMP certified botanical manufacturer, we maintain stringent control across every stage of the extraction and distillation process.
          </p>
        </div>

        {/* 4 Quality Pillars Cards */}
        <div style={{ display: "grid", gap: "24px", marginBottom: "64px" }}>
          {qualityPillars.map((item, index) => (
            <div
              key={index}
              className="liquid-glass"
              style={{
                borderRadius: "28px",
                padding: "36px",
                display: "flex",
                gap: "28px",
                alignItems: "flex-start",
                backgroundColor: "rgba(255, 255, 255, 0.74)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                boxShadow: "0 8px 32px rgba(24, 13, 38, 0.04)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "18px",
                  backgroundColor: item.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  border: `1px solid ${item.border}`,
                }}
              >
                {item.icon}
              </div>

              <div>
                <h2 style={{ fontSize: "1.35rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "10px" }}>
                  {item.title}
                </h2>
                <p style={{ color: "#5B486E", lineHeight: 1.7, fontSize: "1rem", margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Laboratory Instrumentation Glass Grid */}
        <div style={{ marginBottom: "64px" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              In-House Analytical Arsenal
            </span>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "4px" }}>
              Standard Laboratory Testing Parameters
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
            {labInstruments.map((inst, i) => (
              <div key={i} className="liquid-glass" style={{ borderRadius: "20px", padding: "24px", backgroundColor: "rgba(255, 255, 255, 0.74)", border: "1px solid rgba(124, 58, 237, 0.18)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#180D26", margin: 0 }}>{inst.name}</h3>
                </div>
                <p style={{ fontSize: "0.88rem", color: "#5B486E", lineHeight: 1.5, margin: 0 }}>{inst.use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Packaging & Preservation Standards Section */}
        <section style={{ marginBottom: "64px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              Climate-Controlled Packaging &amp; Preservation
            </span>
            <h2 style={{ fontSize: "var(--font-size-h1)", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "6px" }}>
              Export Packaging &amp; Nitrogen Inerting Standards
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#5B486E", maxWidth: "760px", margin: "10px auto 0", lineHeight: 1.65 }}>
              Oils are packaged inside climate-controlled cleanroom suites designed to protect delicate aromatic fractions against vibration, thermal compression, and atmospheric oxidation.
            </p>
          </div>

          {/* Packaging Showcase Banner */}
          <div
            style={{
              position: "relative",
              borderRadius: "28px",
              overflow: "hidden",
              height: "clamp(280px, 36vw, 440px)",
              marginBottom: "36px",
              boxShadow: "0 16px 48px rgba(24, 13, 38, 0.08)",
              border: "1px solid rgba(124, 58, 237, 0.18)",
            }}
          >
            <Image
              src="/packaging_hero.jpg"
              alt="India Essential Oils Industrial and Retail Packaging Range"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1140px) 100vw, 1140px"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(24, 13, 38, 0.1) 0%, rgba(24, 13, 38, 0.78) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "24px 32px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "16px",
                backgroundColor: "rgba(24, 13, 38, 0.7)",
                backdropFilter: "blur(16px)",
                borderTop: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
            >
              <div>
                <div style={{ fontSize: "1.2rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#C4B5FD" }}>
                  Private Labeling &amp; Bulk Container Formats
                </div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.75)", marginTop: "2px" }}>
                  From 5ml Amber Pipette Bottles to 200kg UN-Rated Epoxy Steel Drums
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <span style={{ padding: "6px 14px", borderRadius: "9999px", backgroundColor: "rgba(139, 92, 246, 0.3)", border: "1px solid rgba(167, 139, 250, 0.4)", fontSize: "0.75rem", fontWeight: 700, color: "#E9D5FF" }}>
                  ⚡ Nitrogen Capping
                </span>
                <span style={{ padding: "6px 14px", borderRadius: "9999px", backgroundColor: "rgba(16, 185, 129, 0.3)", border: "1px solid rgba(52, 211, 153, 0.4)", fontSize: "0.75rem", fontWeight: 700, color: "#A7F3D0" }}>
                  ✓ UN Certified Export
                </span>
              </div>
            </div>
          </div>

          {/* Bulk vs Retail Packaging Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px", marginBottom: "36px" }}>

            {/* Industrial & Wholesale Bulk */}
            <div
              className="liquid-glass"
              style={{
                borderRadius: "24px",
                padding: "32px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", backgroundColor: "rgba(124, 58, 237, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Boxes size={22} color="#7C3AED" />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: 0 }}>
                  Bulk Wholesale Containers
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ padding: "12px 16px", borderRadius: "14px", backgroundColor: "#FCFAF6", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#180D26" }}>Aluminium Canisters &amp; Bottles</div>
                  <div style={{ fontSize: "0.85rem", color: "#7C3AED", fontWeight: 600, marginTop: "2px" }}>1 kg · 2 kg · 5 kg · 10 kg · 25 kg</div>
                  <div style={{ fontSize: "0.78rem", color: "#6B7280", marginTop: "4px" }}>UN-rated leak-proof closures with tamper-evident tear seals and inner epoxy lining.</div>
                </div>

                <div style={{ padding: "12px 16px", borderRadius: "14px", backgroundColor: "#FCFAF6", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#180D26" }}>Food-Grade HDPE Drums &amp; Barrels</div>
                  <div style={{ fontSize: "0.85rem", color: "#059669", fontWeight: 600, marginTop: "2px" }}>5 kg · 20 kg · 25 kg · 50 kg · 200 kg</div>
                  <div style={{ fontSize: "0.78rem", color: "#6B7280", marginTop: "4px" }}>Available in narrow-mouth bung caps and open-top barrels with heavy-duty locking rings.</div>
                </div>

                <div style={{ padding: "12px 16px", borderRadius: "14px", backgroundColor: "#FCFAF6", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#180D26" }}>Epoxy-Lined Steel &amp; GI Drums</div>
                  <div style={{ fontSize: "0.85rem", color: "#D97706", fontWeight: 600, marginTop: "2px" }}>20 kg · 40 kg · 200 kg</div>
                  <div style={{ fontSize: "0.78rem", color: "#6B7280", marginTop: "4px" }}>Heavy gauge galvanized iron drums compliant with international maritime dangerous goods (IMDG) codes.</div>
                </div>
              </div>
            </div>

            {/* Retail & Private Label Solutions */}
            <div
              className="liquid-glass"
              style={{
                borderRadius: "24px",
                padding: "32px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", backgroundColor: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Droplets size={22} color="#059669" />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: 0 }}>
                  Retail &amp; Private Label Packaging
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ padding: "12px 16px", borderRadius: "14px", backgroundColor: "#FCFAF6", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#180D26" }}>Pharmaceutical Glass Dropper Bottles</div>
                  <div style={{ fontSize: "0.85rem", color: "#7C3AED", fontWeight: 600, marginTop: "2px" }}>5 ml · 10 ml · 20 ml · 50 ml · 100 ml · 200 ml</div>
                  <div style={{ fontSize: "0.78rem", color: "#6B7280", marginTop: "4px" }}>Amber, Cobalt Blue, Forest Green &amp; Flint Clear glass with Euro droppers, glass pipettes, and treatment pumps.</div>
                </div>

                <div style={{ padding: "12px 16px", borderRadius: "14px", backgroundColor: "#FCFAF6", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#180D26" }}>Custom Colored PET Bottles</div>
                  <div style={{ fontSize: "0.85rem", color: "#059669", fontWeight: 600, marginTop: "2px" }}>10 ml · 20 ml · 50 ml · 100 ml · 500 ml · 1 kg · 2 kg</div>
                  <div style={{ fontSize: "0.78rem", color: "#6B7280", marginTop: "4px" }}>Amber, clear, matte black, white, and violet PET for cosmetic formulations and personal care products.</div>
                </div>

                <div style={{ padding: "12px 16px", borderRadius: "14px", backgroundColor: "#FCFAF6", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#180D26" }}>Nitrogen Capping &amp; Gift Packaging</div>
                  <div style={{ fontSize: "0.85rem", color: "#D97706", fontWeight: 600, marginTop: "2px" }}>Custom Boxes · Foiling · Nitrogen Purge</div>
                  <div style={{ fontSize: "0.78rem", color: "#6B7280", marginTop: "4px" }}>99.999% nitrogen head-space purge displacement protecting sensitive terpenes from oxidation. Custom gift box branding on request.</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Verification CTA */}
        <div
          className="liquid-glass-elevated"
          style={{
            borderRadius: "28px",
            padding: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            boxShadow: "0 16px 48px rgba(24, 13, 38, 0.08)",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.45rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "6px" }}>
              Need Technical CoA, MSDS, or Custom Packaging Specs?
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#5B486E", margin: 0 }}>
              Our regulatory department provides full technical documentation dossiers and packaging samples within 24 hours.
            </p>
          </div>

          <Link
            href="/contact"
            className="btn-vibrant-primary"
            style={{
              padding: "15px 30px",
              borderRadius: "9999px",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.95rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  );
}
