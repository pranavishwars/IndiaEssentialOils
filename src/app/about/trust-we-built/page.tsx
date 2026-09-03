import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/data";
import { Footer } from "@/components/server/Footer";
import { 
  Award, 
  ShieldCheck, 
  Activity, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  Sparkles,
  FlaskConical,
  Building2
} from "lucide-react";

export const metadata = {
  title: "The Trust We've Built | India Essential Oils",
  description: "Learn about the trust India Essential Oils has built worldwide with 95% buyer retention, 90% repeat orders, and ISO/GMP accreditations.",
};

export default function TrustWeBuiltPage() {
  const trustPillars = [
    {
      title: "Established in the Industry",
      subtitle: "95% Buyer Retention & 90% Repeat Orders",
      desc: "As a premier division of Mother Herbs Pvt. Ltd., we have built an enduring global reputation supplying 100% Pure & Natural Essential Oils and Oleoresins to corporate clients and international formulators worldwide. Our long-term partnerships are cemented by unwavering reliability and batch-to-batch consistency.",
      icon: <Award size={24} color="#059669" />,
      badge: "Industry Leader",
      badgeColor: "#059669",
      badgeBg: "rgba(5, 150, 105, 0.1)",
    },
    {
      title: "Dynamic in Nature",
      subtitle: "Advanced Extraction & Trained Technical Team",
      desc: "We operate on the solid foundation of the latest extraction technologies and state-of-the-art distillation equipment, supported by an agile team of highly qualified, well-trained chemists and process engineers capable of tailoring yields to strict international pharmacopoeias.",
      icon: <Activity size={24} color="#7C3AED" />,
      badge: "Modern Facility",
      badgeColor: "#7C3AED",
      badgeBg: "rgba(124, 58, 237, 0.1)",
    },
    {
      title: "Adapting to Changing Markets",
      subtitle: "Continuous R&D & Custom Regional Cultivation",
      desc: "Our industrial R&D team strives daily for process up-gradation, product improvisation, and development of new botanical lines. We identify optimal micro-climates and promote customized cultivation in specified geographic areas as per customer and regulatory requirements.",
      icon: <TrendingUp size={24} color="#0284C7" />,
      badge: "Agile Sourcing",
      badgeColor: "#0284C7",
      badgeBg: "rgba(2, 132, 199, 0.1)",
    },
    {
      title: "Providing Uncompromising Quality",
      subtitle: "Farm-to-Factory Potency & Dual GC-MS Verification",
      desc: "We monitor raw materials from field to factory to protect active ingredient potency, guide farmers on approved eco-friendly agricultural practices, and verify every single lot with dual GC-MS chromatography and accredited ISO 9001:2015 / WHO-GMP certifications.",
      icon: <ShieldCheck size={24} color="#D97706" />,
      badge: "Pure & Certified",
      badgeColor: "#D97706",
      badgeBg: "rgba(217, 119, 6, 0.1)",
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
          <span style={{ color: "#180D26", fontWeight: 700 }}>The Trust We&apos;ve Built</span>
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
              color: "#059669",
              marginBottom: "16px",
              backgroundColor: "rgba(5, 150, 105, 0.1)",
              border: "1px solid rgba(5, 150, 105, 0.25)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            <CheckCircle2 size={14} color="#059669" /> Proven Track Record &bull; Worldwide Delivery
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
            The Trust We&apos;ve Built
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "800px", margin: "0 auto", lineHeight: 1.7 }}>
            Why global formulators, cosmetic manufacturers, and pharmaceutical innovators consistently rely on India Essential Oils.
          </p>
        </div>

        {/* 4 Core Pillars 2x2 Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "24px", marginBottom: "40px" }}>
          {trustPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="liquid-glass-elevated"
              style={{
                borderRadius: "24px",
                padding: "32px",
                backgroundColor: "rgba(255, 255, 255, 0.88)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 10px 30px rgba(24, 13, 38, 0.04)",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", backgroundColor: "rgba(124, 58, 237, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {pillar.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      backgroundColor: pillar.badgeBg,
                      color: pillar.badgeColor,
                      border: `1px solid ${pillar.badgeColor}33`,
                    }}
                  >
                    {pillar.badge}
                  </span>
                </div>

                <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#180D26", marginBottom: "4px", lineHeight: 1.3 }}>
                  {pillar.title}
                </h2>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#7C3AED", marginBottom: "12px" }}>
                  {pillar.subtitle}
                </div>
                <p style={{ fontSize: "0.92rem", color: "#5B486E", lineHeight: 1.65, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Impact Numbers */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          {COMPANY_INFO.stats.map(stat => (
            <div
              key={stat.label}
              className="liquid-glass-elevated"
              style={{
                borderRadius: "24px",
                padding: "32px 24px",
                textAlign: "center",
                backgroundColor: "rgba(255, 255, 255, 0.82)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                boxShadow: "0 8px 30px rgba(24, 13, 38, 0.04)",
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

        {/* Accredited Certifications Strip */}
        <div
          className="liquid-glass"
          style={{
            borderRadius: "28px",
            padding: "36px",
            marginBottom: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.88)",
            border: "1px solid rgba(124, 58, 237, 0.2)",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#180D26", marginBottom: "16px" }}>
            Certified to Global Standards
          </h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            {COMPANY_INFO.certifications.map(cert => (
              <Link
                key={cert.name}
                href="/certifications"
                className="liquid-glass-pill"
                style={{
                  padding: "8px 20px",
                  color: "#180D26",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.88)",
                  border: "1px solid rgba(124, 58, 237, 0.22)",
                  boxShadow: "0 4px 14px rgba(24, 13, 38, 0.04)",
                  textDecoration: "none",
                }}
              >
                <ShieldCheck size={16} color="#059669" />
                <span>{cert.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Next Subpage Link */}
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
              Why Us &bull; Terroir Sourcing &amp; GC-MS
            </h3>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/about/why-us"
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
              Why Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
