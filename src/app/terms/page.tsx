import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/data";
import { Footer } from "@/components/server/Footer";
import { ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
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
            Terms of Service & Export Agreement
          </h1>
          <p style={{ fontSize: "0.95rem", color: "#5B486E" }}>
            Effective: August 2026 · {COMPANY_INFO.name} ({COMPANY_INFO.parentCompany})
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
              1. B2B Wholesale Terms
            </h2>
            <p style={{ color: "#5B486E", margin: 0 }}>
              All quotations, sample evaluations, and bulk sales issued by India Essential Oils (a Division of Mother Herbs Pvt. Ltd.) are intended solely for business-to-business (B2B) manufacturing, cosmetic formulation, industrial perfumery, and pharmaceutical purposes.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
              2. Analytical Standards & Certificate of Analysis
            </h2>
            <p style={{ color: "#5B486E", margin: 0 }}>
              Each shipment is accompanied by a batch-specific Certificate of Analysis (CoA) and GC-MS chromatogram confirming physical constants (specific gravity, optical rotation, refractive index) and chemical constituent percentages within pharmacopoeial tolerances.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
              3. Freight, Shipping & Incoterms
            </h2>
            <p style={{ color: "#5B486E", margin: 0 }}>
              Unless otherwise specified on formal proforma invoices, export quotations are quoted FOB (New Delhi / Mumbai Sea/Air Ports) or CIF (Destination Port) in accordance with Incoterms 2020.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
              4. Governing Law & Jurisdiction
            </h2>
            <p style={{ color: "#5B486E", margin: 0 }}>
              Commercial contracts and agreements are governed by and construed in accordance with the laws of the Republic of India, under the jurisdiction of the courts of New Delhi.
            </p>
          </section>
        </div>

      </main>
      <Footer />
    </div>
  );
}
