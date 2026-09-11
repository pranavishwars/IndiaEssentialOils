import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/data";
import { Footer } from "@/components/server/Footer";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "900px", margin: "0 auto", width: "100%" }}>
        
        {/* Back Link */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: "#7C3AED",
            fontSize: "0.88rem",
            fontWeight: 700,
            textDecoration: "none",
            marginBottom: "24px",
          }}
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#180D26",
              marginBottom: "8px",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontSize: "0.95rem", color: "#5B486E" }}>
            Last Updated: August 2026 · {COMPANY_INFO.name} ({COMPANY_INFO.parentCompany})
          </p>
        </div>

        {/* Content Card */}
        <div
          className="liquid-glass"
          style={{
            borderRadius: "28px",
            padding: "48px",
            backgroundColor: "rgba(255, 255, 255, 0.78)",
            border: "1px solid rgba(124, 58, 237, 0.18)",
            boxShadow: "0 10px 40px rgba(24, 13, 38, 0.05)",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            fontSize: "1rem",
            color: "#180D26",
            lineHeight: 1.8,
          }}
        >
          <section>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
              1. Information We Collect
            </h2>
            <p style={{ color: "#5B486E", margin: 0 }}>
              When you submit an inquiry, request a Certificate of Analysis (CoA), or communicate with our export desk, we collect your business contact details (Full Name, Corporate Email, Phone Number, Company Name, Country of Destination, and Product Requirements).
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
              2. How We Use Commercial Data
            </h2>
            <p style={{ color: "#5B486E", margin: 0 }}>
              Your information is used strictly to prepare tiered wholesale quotations, verify international customs/import documentation, and send scheduled harvest bulletins. We never sell, rent, or lease B2B client contact details to third parties.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
              3. Data Protection & Security
            </h2>
            <p style={{ color: "#5B486E", margin: 0 }}>
              All customer communications and quote submissions are encrypted in transit via Transport Layer Security (TLS 1.3). Commercial records are securely archived under ISO 9001 quality management procedures.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
              4. Contacting Our Data Privacy Officer
            </h2>
            <p style={{ color: "#5B486E", margin: 0 }}>
              If you wish to update your business records or unsubscribe from harvest market bulletins, contact our compliance desk at <strong style={{ color: "#7C3AED" }}>{COMPANY_INFO.contact.email}</strong>.
            </p>
          </section>
        </div>

      </main>
      <Footer />
    </div>
  );
}
