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

            <div className="liquid-glass" style={{ borderRadius: "24px", padding: "32px", border: "1px solid rgba(124, 58, 237, 0.18)" }}>
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
