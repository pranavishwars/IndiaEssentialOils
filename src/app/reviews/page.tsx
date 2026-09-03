"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Building2, ArrowRight } from "lucide-react";

export default function ReviewsPage() {
  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", paddingTop: "110px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>

        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(124, 58, 237, 0.1)",
              border: "1px solid rgba(124, 58, 237, 0.25)",
              color: "#7C3AED",
              padding: "6px 18px",
              borderRadius: "9999px",
              fontSize: "0.8rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "16px",
            }}
          >
            <ShieldCheck size={16} color="#059669" /> Verified B2B Partner Testimonials
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontFamily: "var(--font-lora), Georgia, serif",
              fontWeight: 700,
              color: "#180D26",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Trusted by Global Formulators & Perfumers
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#5B486E", maxWidth: "680px", margin: "0 auto", lineHeight: 1.6 }}>
            Verified customer testimonials and client audits will be published here shortly.
          </p>
        </div>

        {/* Reviews Placeholder Notice */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.74)",
            backdropFilter: "blur(24px) saturate(160%)",
            WebkitBackdropFilter: "blur(24px) saturate(160%)",
            border: "1px solid rgba(124, 58, 237, 0.18)",
            borderRadius: "24px",
            padding: "48px 32px",
            textAlign: "center",
            maxWidth: "640px",
            margin: "0 auto 60px",
            boxShadow: "0 6px 24px rgba(24, 13, 38, 0.04)",
          }}
        >
          <div style={{ display: "inline-flex", padding: "12px", borderRadius: "50%", backgroundColor: "rgba(124, 58, 237, 0.08)", marginBottom: "16px" }}>
            <Building2 size={28} color="#7C3AED" />
          </div>
          <h3 style={{ fontSize: "1.25rem", fontFamily: "var(--font-lora), Georgia, serif", fontWeight: 700, color: "#180D26", marginBottom: "8px" }}>
            Client Reviews Coming Soon
          </h3>
          <p style={{ fontSize: "0.95rem", color: "#5B486E", lineHeight: 1.6, margin: 0 }}>
            We are currently compiling verified client feedback, pilot formulation testimonials, and laboratory audit endorsements from our wholesale partners.
          </p>
        </div>

        {/* CTA Banner */}
        <div
          style={{
            backgroundColor: "#180D26",
            borderRadius: "28px",
            padding: "48px",
            color: "white",
            textAlign: "center",
            boxShadow: "0 16px 48px rgba(24, 13, 38, 0.25)",
          }}
        >
          <h2 style={{ fontSize: "1.9rem", fontFamily: "var(--font-lora), Georgia, serif", fontWeight: 700, marginBottom: "12px", color: "#C4B5FD" }}>
            Ready to Partner With a Trusted Bulk Botanical Supplier?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", maxWidth: "560px", margin: "0 auto 28px", lineHeight: 1.6 }}>
            Request sample vials, CoA certificates, and customized bulk volume wholesale pricing for your formulations.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
              color: "white",
              textDecoration: "none",
              fontWeight: 700,
              padding: "15px 32px",
              borderRadius: "9999px",
              boxShadow: "0 4px 18px rgba(124, 58, 237, 0.45)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(124, 58, 237, 0.65)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 18px rgba(124, 58, 237, 0.45)";
            }}
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}
