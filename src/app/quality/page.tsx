import React from "react";
import Link from "next/link";
import { Footer } from "@/components/server/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Control & Commitment | India Essential Oils",
  description:
    "Quality control standards, well equipped laboratories, and our commitment to exceptional purity, safety, and customer service.",
};

export default function QualityPage() {
  const qualityStandards = [
    "Verification of the plants botanical species",
    "Crops were not subjected to agrochemicals",
    "Low pressure distillation techniques employed",
    "Visually inspecting the oil",
    "Odour evaluation of the oil",
    "Measuring the oils physical parameters",
  ];

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1140px", margin: "0 auto", width: "100%" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
            Quality Control &amp; Commitment
          </h1>

          <p style={{ fontSize: "1.12rem", color: "#5B486E", maxWidth: "820px", margin: "0 auto", lineHeight: 1.75 }}>
            We have well equipped laboratories &amp; machinery to undertake the preparation of the Herbal &amp; Essential oils with minute attention given to every aspect of them. After the preparation is over, the products are tested for efficacy and safety.
          </p>
        </div>

        {/* Quality Control Standards Grid */}
        <div style={{ marginBottom: "56px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.85rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: 0 }}>
              Our Quality Control Standards Include
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: "20px",
            }}
          >
            {qualityStandards.map((std, idx) => (
              <div
                key={idx}
                className="liquid-glass-elevated"
                style={{
                  borderRadius: "20px",
                  padding: "24px",
                  backgroundColor: "rgba(255, 255, 255, 0.92)",
                  border: "1px solid rgba(124, 58, 237, 0.18)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  boxShadow: "0 6px 24px rgba(24, 13, 38, 0.04)",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(124, 58, 237, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle2 size={20} color="#7C3AED" />
                </div>
                <span style={{ fontSize: "0.98rem", fontWeight: 600, color: "#180D26", lineHeight: 1.45 }}>
                  {std}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* R&D Laboratory & Quality Approval */}
        <div
          className="liquid-glass-elevated"
          style={{
            borderRadius: "28px",
            padding: "clamp(28px, 4vw, 44px)",
            backgroundColor: "rgba(255, 255, 255, 0.94)",
            border: "1.5px solid rgba(124, 58, 237, 0.2)",
            boxShadow: "0 12px 40px rgba(24, 13, 38, 0.05)",
            marginBottom: "48px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "1.04rem", color: "#3B284C", lineHeight: 1.85 }}>
            <p style={{ margin: 0 }}>
              We have a state of the art R&amp;D laboratory with a group of experts to supervise the entire gamut of activity pertaining to the manufacturing of the Essential Oils. There are scores of relevantly qualified and experienced professionals working under highly experienced supervisors to carry out the basic activities. Raw materials are collected from the bountiful resources of the Nature and then are translated into final products with proper care and supervision.
            </p>
            <p style={{ margin: 0 }}>
              Before leaving for the market, the products are tested for their odor and usability. Our experts take a lot of pain before giving final approval to the purely Herbal cosmetics and make it at par with the international standards.
            </p>
          </div>
        </div>

        {/* Our Commitment Section */}
        <div
          className="liquid-glass-elevated"
          style={{
            borderRadius: "28px",
            padding: "clamp(28px, 4vw, 44px)",
            backgroundColor: "rgba(255, 255, 255, 0.94)",
            border: "1.5px solid rgba(124, 58, 237, 0.2)",
            boxShadow: "0 12px 40px rgba(24, 13, 38, 0.05)",
            marginBottom: "56px",
          }}
        >
          <h2
            style={{
              fontSize: "1.85rem",
              fontWeight: 700,
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#180D26",
              marginTop: 0,
              marginBottom: "16px",
            }}
          >
            Our Commitment
          </h2>
          <p style={{ fontSize: "1.04rem", color: "#3B284C", lineHeight: 1.85, margin: 0 }}>
            We are committed to be hailed as a trustworthy, enthusiastic and environmentally conscious company that practices with loyalty and integrity and supports humanitarian causes; to continue providing unique, high quality products combined with personal customer service to achieve exceptional consumer satisfaction.
          </p>
        </div>

        {/* Contact CTA */}
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
            <h3 style={{ fontSize: "1.45rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "6px", marginTop: 0 }}>
              Contact Us for Quality Specifications &amp; Inquiries
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#5B486E", margin: 0 }}>
              Speak with our team to learn more about our quality control processes and bulk product offerings.
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
