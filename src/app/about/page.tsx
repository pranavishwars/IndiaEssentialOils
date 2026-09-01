import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/data";
import { Footer } from "@/components/server/Footer";
import { ShieldCheck, Globe, Leaf, Sparkles, FlaskConical, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1140px", margin: "0 auto", width: "100%" }}>

        {/* Hero Section */}
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
            <Sparkles size={14} color="#7C3AED" /> Trusted Botanical Manufacturer Since 1999
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
            About {COMPANY_INFO.name}
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "720px", margin: "0 auto", lineHeight: 1.7 }}>
            A premier division of Mother Herbs Private Limited, delivering pure, traceable, GC-MS certified essential oils and botanical extracts to global industries.
          </p>
        </div>

        {/* Floating Liquid Glass Certification Badges Strip */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "48px", flexWrap: "wrap" }}>
          {COMPANY_INFO.certifications.map(cert => (
            <Link
              key={cert.name}
              href="/certifications"
              title={`View official ${cert.name} accredited certificate`}
              className="liquid-glass-pill"
              style={{
                padding: "8px 20px",
                color: "#180D26",
                fontWeight: 700,
                fontSize: "0.88rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.78)",
                border: "1px solid rgba(124, 58, 237, 0.2)",
                boxShadow: "0 4px 14px rgba(24, 13, 38, 0.04)",
                textDecoration: "none",
                transition: "transform 0.2s ease, background-color 0.2s ease",
              }}
            >
              <ShieldCheck size={16} color="#059669" />
              <span>{cert.name}</span>
            </Link>
          ))}
        </div>

        {/* Main Narrative Glass Card */}
        <div
          className="liquid-glass"
          style={{
            borderRadius: "28px",
            padding: "48px 40px",
            marginBottom: "56px",
            backgroundColor: "rgba(255, 255, 255, 0.76)",
            border: "1px solid rgba(124, 58, 237, 0.18)",
            boxShadow: "0 12px 40px rgba(24, 13, 38, 0.05)",
          }}
        >
          <div style={{ fontSize: "1.1rem", color: "#180D26", lineHeight: 1.85, display: "flex", flexDirection: "column", gap: "24px" }}>
            {COMPANY_INFO.about.split("\n\n").map((paragraph, idx) => (
              <p key={idx} style={{ margin: 0 }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Global Impact Stats Floating Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "64px" }}>
          {COMPANY_INFO.stats.map(stat => (
            <div
              key={stat.label}
              className="liquid-glass-elevated"
              style={{
                borderRadius: "24px",
                padding: "32px 24px",
                textAlign: "center",
                backgroundColor: "rgba(255, 255, 255, 0.74)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                boxShadow: "0 8px 30px rgba(24, 13, 38, 0.04)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 800,
                  fontFamily: "var(--font-lora), Georgia, serif",
                  background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.1,
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#5B486E", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Global Export Markets Section */}
        <section style={{ marginBottom: "64px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span
              className="liquid-glass-pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 18px",
                fontSize: "0.78rem",
                fontWeight: 800,
                color: "#7C3AED",
                marginBottom: "12px",
                backgroundColor: "rgba(124, 58, 237, 0.1)",
                border: "1px solid rgba(124, 58, 237, 0.25)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              <Globe size={14} color="#7C3AED" /> Global Trade Corridors
            </span>

            <h2
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                fontFamily: "var(--font-lora), Georgia, serif",
                color: "#180D26",
                marginTop: "4px",
                lineHeight: 1.2,
              }}
            >
              Prominent Global Export Destinations
            </h2>

            <p style={{ fontSize: "1.02rem", color: "#5B486E", maxWidth: "760px", margin: "12px auto 0", lineHeight: 1.7 }}>
              With over two decades of export heritage, India Essential Oils actively supplies bulk consignments to cosmetic manufacturers, pharmaceutical formulators, and fragrance houses across major global trade corridors.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>

            {/* USA */}
            <div
              className="liquid-glass"
              style={{
                borderRadius: "24px",
                padding: "32px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px", marginBottom: "14px" }}>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#180D26", margin: "0 0 4px 0" }}>
                      United States of America (USA)
                    </h3>
                    <span style={{ fontSize: "0.8rem", color: "#7C3AED", fontWeight: 700 }}>
                      Major Bulk &amp; Formulation Corridor
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(124, 58, 237, 0.12)",
                      border: "1px solid rgba(124, 58, 237, 0.22)",
                      color: "#7C3AED",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    High Volume
                  </span>
                </div>

                <p style={{ fontSize: "0.92rem", color: "#5B486E", lineHeight: 1.65, margin: "0 0 16px 0" }}>
                  A cornerstone market for organic certified essential oils, cold-pressed virgin carrier oils, and supercritical CO₂ extracts supplied to US wellness, cosmetic, and flavor houses.
                </p>
              </div>

              <div style={{ borderTop: "1px solid rgba(124, 58, 237, 0.12)", paddingTop: "14px" }}>
                <div style={{ fontSize: "0.82rem", color: "#180D26", fontWeight: 600 }}>
                  ✓ US FDA compliance support, GRAS listed oils, and OSHA/GHS Safety Data Sheets.
                </div>
              </div>
            </div>

            {/* Australia */}
            <div
              className="liquid-glass"
              style={{
                borderRadius: "24px",
                padding: "32px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px", marginBottom: "14px" }}>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#180D26", margin: "0 0 4px 0" }}>
                      Australia
                    </h3>
                    <span style={{ fontSize: "0.8rem", color: "#7C3AED", fontWeight: 700 }}>
                      Therapeutic &amp; Aromatherapy Hub
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(5, 150, 105, 0.12)",
                      border: "1px solid rgba(5, 150, 105, 0.22)",
                      color: "#059669",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    Aromatherapy
                  </span>
                </div>

                <p style={{ fontSize: "0.92rem", color: "#5B486E", lineHeight: 1.65, margin: "0 0 16px 0" }}>
                  High-demand destination for 100% pure therapeutic-grade oils, personal care formulation bases, and bulk tea tree, eucalyptus, and spice distillates.
                </p>
              </div>

              <div style={{ borderTop: "1px solid rgba(124, 58, 237, 0.12)", paddingTop: "14px" }}>
                <div style={{ fontSize: "0.82rem", color: "#180D26", fontWeight: 600 }}>
                  ✓ TGA (Therapeutic Goods) aligned dossiers, AICIS standards, and biosecurity clearance.
                </div>
              </div>
            </div>

            {/* New Zealand */}
            <div
              className="liquid-glass"
              style={{
                borderRadius: "24px",
                padding: "32px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px", marginBottom: "14px" }}>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#180D26", margin: "0 0 4px 0" }}>
                      New Zealand (NZ)
                    </h3>
                    <span style={{ fontSize: "0.8rem", color: "#7C3AED", fontWeight: 700 }}>
                      Clean-Label &amp; Natural Beauty
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(14, 165, 233, 0.12)",
                      border: "1px solid rgba(14, 165, 233, 0.22)",
                      color: "#0284C7",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    Organic Focus
                  </span>
                </div>

                <p style={{ fontSize: "0.92rem", color: "#5B486E", lineHeight: 1.65, margin: "0 0 16px 0" }}>
                  Key destination for certified organic carrier oils, cold-pressed base ingredients, and wild-harvested botanical extracts for clean-label skincare formulators.
                </p>
              </div>

              <div style={{ borderTop: "1px solid rgba(124, 58, 237, 0.12)", paddingTop: "14px" }}>
                <div style={{ fontSize: "0.82rem", color: "#180D26", fontWeight: 600 }}>
                  ✓ EPA New Zealand cosmetics compliance and MPI import health standards.
                </div>
              </div>
            </div>

            {/* Middle East */}
            <div
              className="liquid-glass"
              style={{
                borderRadius: "24px",
                padding: "32px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px", marginBottom: "14px" }}>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#180D26", margin: "0 0 4px 0" }}>
                      Middle East (GCC Markets)
                    </h3>
                    <span style={{ fontSize: "0.8rem", color: "#7C3AED", fontWeight: 700 }}>
                      Luxury Perfumery &amp; Attar Houses
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(217, 119, 6, 0.12)",
                      border: "1px solid rgba(217, 119, 6, 0.22)",
                      color: "#D97706",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    Perfumery
                  </span>
                </div>

                <p style={{ fontSize: "0.92rem", color: "#5B486E", lineHeight: 1.65, margin: "0 0 16px 0" }}>
                  Supplying premium floral absolutes (Jasmine Sambac, Rose Damascena, Lotus), high-grade agarwood/oudh oils, and spice distillates to UAE, Saudi Arabia, Qatar, and Oman.
                </p>
              </div>

              <div style={{ borderTop: "1px solid rgba(124, 58, 237, 0.12)", paddingTop: "14px" }}>
                <div style={{ fontSize: "0.82rem", color: "#180D26", fontWeight: 600 }}>
                  ✓ Express air-cargo freight via Gulf hubs, GSO conformity, and Halal declarations.
                </div>
              </div>
            </div>

            {/* Europe (EU & UK) — HIGHLIGHTED FOR COMPLEX NORMS */}
            <div
              className="liquid-glass-elevated"
              style={{
                gridColumn: "1 / -1",
                borderRadius: "28px",
                padding: "36px 40px",
                backgroundColor: "rgba(255, 255, 255, 0.88)",
                border: "1px solid rgba(124, 58, 237, 0.25)",
                boxShadow: "0 12px 36px rgba(24, 13, 38, 0.05)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap", marginBottom: "16px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: 0 }}>
                      Europe (European Union &amp; United Kingdom)
                    </h3>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        padding: "4px 12px",
                        borderRadius: "9999px",
                        backgroundColor: "rgba(124, 58, 237, 0.12)",
                        border: "1px solid rgba(124, 58, 237, 0.25)",
                        color: "#7C3AED",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Strict Regulatory Frameworks
                    </span>
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "#7C3AED", fontWeight: 700, display: "block", marginTop: "4px" }}>
                    Specialized Technical Dossiers for Complex European Regulatory Norms
                  </span>
                </div>
              </div>

              <p style={{ fontSize: "0.95rem", color: "#5B486E", lineHeight: 1.7, marginBottom: "20px" }}>
                Europe is one of our primary, longest-standing export destinations for wholesale fine fragrance, pharmaceutical preparations, and organic cosmetic formulation. While European regulatory requirements have evolved into some of the most intricate and demanding compliance frameworks globally, India Essential Oils provides end-to-end technical dossier facilitation to ensure seamless customs clearance and compliant market placement.
              </p>

              <div
                style={{
                  backgroundColor: "rgba(124, 58, 237, 0.06)",
                  borderRadius: "18px",
                  padding: "20px 24px",
                  border: "1px solid rgba(124, 58, 237, 0.18)",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "14px",
                }}
              >
                <div style={{ fontSize: "0.86rem", color: "#180D26", fontWeight: 600 }}>
                  📋 <strong>EU Cosmetic Regulation (EC No 1223/2009):</strong> Full PIF technical dossiers &amp; CosIng ingredient data.
                </div>
                <div style={{ fontSize: "0.86rem", color: "#180D26", fontWeight: 600 }}>
                  🔬 <strong>EU REACH &amp; CLP Classification:</strong> Comprehensive GHS Safety Data Sheets and chemical registration support.
                </div>
                <div style={{ fontSize: "0.86rem", color: "#180D26", fontWeight: 600 }}>
                  🌸 <strong>IFRA 51st Amendment:</strong> Maximum safe usage level certificates for all 11 fragrance categories.
                </div>
                <div style={{ fontSize: "0.86rem", color: "#180D26", fontWeight: 600 }}>
                  📜 <strong>Phytosanitary &amp; Origin:</strong> Government-certified phytosanitary &amp; EUR.1 / REX trade facilitation.
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3 Core Pillars */}
        <div style={{ marginBottom: "64px" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Our Foundations
            </span>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "4px" }}>
              Why Global Brands Choose Us
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            <div className="liquid-glass" style={{ borderRadius: "24px", padding: "32px", border: "1px solid rgba(124, 58, 237, 0.18)" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", backgroundColor: "rgba(16, 185, 129, 0.14)", border: "1px solid rgba(16, 185, 129, 0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Leaf size={26} color="#059669" />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
                Authentic Terroir Sourcing
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#5B486E", lineHeight: 1.65, margin: 0 }}>
                Direct partnerships with multi-generational cultivators across Kashmir, the Western Ghats, Uttar Pradesh, and Rajasthan for uncontaminated botanical inputs.
              </p>
            </div>

            <div className="liquid-glass" style={{ borderRadius: "24px", padding: "32px", border: "1px solid rgba(124, 58, 237, 0.18)" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", backgroundColor: "rgba(124, 58, 237, 0.14)", border: "1px solid rgba(124, 58, 237, 0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <FlaskConical size={26} color="#7C3AED" />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
                Batch Analytical Transparency
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#5B486E", lineHeight: 1.65, margin: 0 }}>
                Every production lot is subjected to dual GC-MS chromatography, optical rotation, and specific gravity verification before release.
              </p>
            </div>

            <div className="liquid-glass" style={{ borderRadius: "24px", padding: "32px", border: "1px solid rgba(245, 158, 11, 0.25)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", backgroundColor: "rgba(245, 158, 11, 0.14)", border: "1px solid rgba(245, 158, 11, 0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <Globe size={26} color="#D97706" />
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
                  Global Export Compliance
                </h3>
                <p style={{ fontSize: "0.95rem", color: "#5B486E", lineHeight: 1.65, margin: 0 }}>
                  Full documentation suite provided with every shipment: Certificates of Analysis (CoA), MSDS, Non-GMO declarations, and IFRA compliance statements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
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
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "6px" }}>
              Ready to Formulate with Pure Botanicals?
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#5B486E", margin: 0 }}>
              Speak with our technical sales team for custom specifications and container lot quotes.
            </p>
          </div>

          <Link
            href="/request-quote"
            className="btn-vibrant-primary"
            style={{
              padding: "16px 32px",
              borderRadius: "9999px",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.95rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Request B2B Quote <ArrowRight size={16} />
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  );
}
