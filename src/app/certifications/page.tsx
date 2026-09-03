import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Footer } from "@/components/server/Footer";
import { CertificationsGrid } from "@/components/client/CertificationsGrid";
import { ShieldCheck, FlaskConical, ArrowRight, FileCheck, CheckCircle2, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Accredited International Certifications | India Essential Oils",
  description:
    "Official ISO 9001:2015, ISO 22000:2005, WHO-GMP, NPOP India Organic certificates, and IndiaMART TrustSeal for India Essential Oils & Mother Herbs Pvt. Ltd.",
  keywords: [
    "ISO 9001 essential oil certificate",
    "ISO 22000 essential oil manufacturer",
    "GMP compliant botanical extraction",
    "NPOP organic certified essential oils India",
    "IndiaMART TrustSeal essential oils",
    "India Essential Oils certificates",
  ],
};

export default function CertificationsPage() {
  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>

        {/* Page Header */}
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
              color: "#059669",
              marginBottom: "16px",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.25)",
            }}
          >
            <ShieldCheck size={16} color="#059669" /> Accredited Compliance &amp; Transparency
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
              fontWeight: 700,
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#180D26",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Official International Certifications
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "780px", margin: "0 auto", lineHeight: 1.7 }}>
            Our botanical extracts, steam distillation plants, and cleanroom packaging suites operate under globally audited quality frameworks. Click any certificate below to inspect and download the official accredited document scans.
          </p>
        </div>

        {/* 2x2 Certifications Grid Component with Document Lightbox */}
        <CertificationsGrid />

        {/* IndiaMART TrustSeal™ Verification Showcase */}
        <div
          className="liquid-glass-elevated"
          style={{
            borderRadius: "28px",
            padding: "36px 40px",
            backgroundColor: "rgba(255, 255, 255, 0.88)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            boxShadow: "0 14px 40px rgba(16, 185, 129, 0.08)",
            marginBottom: "48px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle Accent Glow */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0) 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "24px",
              marginBottom: "24px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
              {/* TrustSeal Seal Badge */}
              <div
                style={{
                  position: "relative",
                  width: "80px",
                  height: "80px",
                  borderRadius: "20px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  boxShadow: "0 8px 24px rgba(16, 185, 129, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/certificates/indiamart_trustseal_badge.png"
                  alt="IndiaMART TrustSeal Verified Star Supplier"
                  width={68}
                  height={68}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: "#059669",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                      padding: "3px 10px",
                      borderRadius: "9999px",
                    }}
                  >
                    Audited B2B Business Seal
                  </span>
                  <span style={{ fontSize: "0.78rem", color: "#6B7280", fontWeight: 600 }}>
                    Member ID: <strong style={{ color: "#180D26" }}>1752862</strong> (IM-TS-981002)
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "var(--font-size-h2)",
                    fontWeight: 700,
                    fontFamily: "var(--font-lora), Georgia, serif",
                    color: "#180D26",
                    margin: 0,
                  }}
                >
                  IndiaMART TrustSeal™ Verified Star Supplier
                </h3>
                <div style={{ fontSize: "0.88rem", color: "#5B486E", marginTop: "2px" }}>
                  Mother Herbs Pvt. Ltd. · Division of India Essential Oils · Audited by Independent Credit Agency
                </div>
              </div>
            </div>

            {/* External Verification Link */}
            <a
              href="https://www.indiamart.com/indiaessentialoils/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "12px 24px",
                borderRadius: "9999px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.88rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#059669",
                color: "white",
                border: "1px solid rgba(5, 150, 105, 0.3)",
                boxShadow: "0 6px 20px rgba(5, 150, 105, 0.25)",
                transition: "transform 0.2s ease, background-color 0.2s ease",
              }}
            >
              Verify TrustSeal on IndiaMART <ExternalLink size={15} />
            </a>
          </div>

          <p style={{ color: "#5B486E", fontSize: "0.95rem", lineHeight: 1.65, marginBottom: "24px" }}>
            The <strong>IndiaMART TrustSeal™</strong> is an audited business credibility certification issued following comprehensive on-site inspections and background checks by an independent credit rating bureau. It validates our manufacturing infrastructure, statutory registrations, and export track record.
          </p>

          {/* 4 TrustSeal Audit Checkpoints */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            <div style={{ padding: "14px 18px", borderRadius: "16px", backgroundColor: "#FCFAF6", border: "1px solid rgba(16, 185, 129, 0.15)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "#180D26", fontSize: "0.9rem", marginBottom: "4px" }}>
                <CheckCircle2 size={16} color="#059669" /> Physical Premises Audited
              </div>
              <p style={{ fontSize: "0.8rem", color: "#6B7280", margin: 0, lineHeight: 1.45 }}>
                Physical inspection of Patparganj Delhi office and distillation units confirmed by field auditors.
              </p>
            </div>

            <div style={{ padding: "14px 18px", borderRadius: "16px", backgroundColor: "#FCFAF6", border: "1px solid rgba(16, 185, 129, 0.15)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "#180D26", fontSize: "0.9rem", marginBottom: "4px" }}>
                <CheckCircle2 size={16} color="#059669" /> Statutory Licenses Validated
              </div>
              <p style={{ fontSize: "0.8rem", color: "#6B7280", margin: 0, lineHeight: 1.45 }}>
                Verified GST, PAN, Certificate of Incorporation, and DGFT Import Export Code (IEC).
              </p>
            </div>

            <div style={{ padding: "14px 18px", borderRadius: "16px", backgroundColor: "#FCFAF6", border: "1px solid rgba(16, 185, 129, 0.15)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "#180D26", fontSize: "0.9rem", marginBottom: "4px" }}>
                <CheckCircle2 size={16} color="#059669" /> Financial &amp; Banking Authenticity
              </div>
              <p style={{ fontSize: "0.8rem", color: "#6B7280", margin: 0, lineHeight: 1.45 }}>
                Active corporate bank account verification, tax clearance, and clean commercial reputation.
              </p>
            </div>

            <div style={{ padding: "14px 18px", borderRadius: "16px", backgroundColor: "#FCFAF6", border: "1px solid rgba(16, 185, 129, 0.15)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "#180D26", fontSize: "0.9rem", marginBottom: "4px" }}>
                <CheckCircle2 size={16} color="#059669" /> Star Exporter Track Record
              </div>
              <p style={{ fontSize: "0.8rem", color: "#6B7280", margin: 0, lineHeight: 1.45 }}>
                20+ years supplying global export destinations worldwide with high customer satisfaction ratings.
              </p>
            </div>
          </div>
        </div>

        {/* Trust & Regulatory Accordion / Info Box */}
        <div
          className="liquid-glass"
          style={{
            borderRadius: "28px",
            padding: "36px 40px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: "1px solid rgba(124, 58, 237, 0.18)",
            marginBottom: "48px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <FileCheck size={24} color="#7C3AED" />
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: 0 }}>
              Global Customs &amp; Regulatory Dossier Support
            </h3>
          </div>
          <p style={{ color: "#5B486E", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "20px" }}>
            Every commercial consignment shipped by India Essential Oils is accompanied by batch-specific Certificates of Analysis (CoA), full 16-point Material Safety Data Sheets (MSDS), Technical Specifications, Certificates of Origin (COO), and Allergen Declarations conforming to EU Cosmetic Regulation (EC) No 1223/2009, US FDA GRAS, and IFRA 51st Amendment standards.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {["EU (EC) No 834/2007 Equivalent", "Swiss Organic Farming Ordinance", "UKAF UK Accredited", "UDEM International Audited", "IFRA Standards Compliant", "IndiaMART TrustSeal Audited"].map((badge, idx) => (
              <span
                key={idx}
                style={{
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(124, 58, 237, 0.08)",
                  border: "1px solid rgba(124, 58, 237, 0.18)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "#5B21B6",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <CheckCircle2 size={12} color="#059669" /> {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Batch Traceability Callout Banner */}
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
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", marginBottom: "4px" }}>
              <FlaskConical size={16} /> Instant GC-MS Verification
            </div>
            <h3 style={{ fontSize: "1.45rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "6px" }}>
              In-House Analytical Laboratory Testing
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#5B486E", margin: 0 }}>
              Learn how our Shimadzu GC-MS, polarimetry, and refractive index tests verify 100% botanical purity.
            </p>
          </div>

          <Link
            href="/quality"
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
            Explore Quality Standards <ArrowRight size={16} />
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  );
}
