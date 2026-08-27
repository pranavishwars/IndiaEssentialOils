"use client";

import React from "react";
import Link from "next/link";
import { Star, ShieldCheck, CheckCircle2, Building2, Globe, ArrowRight } from "lucide-react";
import { REVIEWS_DATA } from "@/lib/reviews-data";

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
            Over 800+ cosmetic brands, pharmaceutical manufacturers, and niche perfumeries in 45+ countries rely on our certified botanical oils.
          </p>

          {/* Rating Summary Bar */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "24px",
              marginTop: "28px",
              backgroundColor: "rgba(255, 255, 255, 0.76)",
              backdropFilter: "blur(24px) saturate(160%)",
              WebkitBackdropFilter: "blur(24px) saturate(160%)",
              padding: "14px 32px",
              borderRadius: "9999px",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              boxShadow: "0 6px 24px rgba(24, 13, 38, 0.05)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ display: "flex", gap: "3px" }}>
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} size={18} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <span style={{ fontWeight: 800, color: "#180D26", fontSize: "1.05rem", marginLeft: "4px" }}>4.95 / 5.0</span>
            </div>
            <div style={{ width: "1px", height: "20px", backgroundColor: "rgba(124, 58, 237, 0.25)" }} />
            <div style={{ fontSize: "0.88rem", color: "#5B486E", fontWeight: 700 }}>
              Based on <strong style={{ color: "#180D26" }}>280+ Verified B2B Audits</strong>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "24px", marginBottom: "60px" }}>
          {REVIEWS_DATA.map(rev => (
            <div
              key={rev.id}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.74)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                borderRadius: "24px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 6px 24px rgba(24, 13, 38, 0.04)",
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 18px 45px rgba(124, 58, 237, 0.18)";
                e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.35)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(24, 13, 38, 0.04)";
                e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.18)";
              }}
            >
              {/* Stars & Verified Badge */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div style={{ display: "flex", gap: "3px" }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                {rev.verifiedBuyer && (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "3px",
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      color: "#059669",
                      fontSize: "0.725rem",
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: "9999px",
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                    }}
                  >
                    <CheckCircle2 size={12} /> Verified Buyer
                  </span>
                )}
              </div>

              {/* Review Content */}
              <p style={{ fontSize: "0.95rem", color: "#180D26", lineHeight: 1.65, fontStyle: "italic", marginBottom: "20px", flexGrow: 1 }}>
                &ldquo;{rev.content}&rdquo;
              </p>

              {/* Product Tag */}
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#7C3AED", backgroundColor: "rgba(124, 58, 237, 0.1)", border: "1px solid rgba(124, 58, 237, 0.2)", padding: "4px 12px", borderRadius: "8px", width: "fit-content", marginBottom: "18px" }}>
                Sourced: {rev.productName}
              </div>

              {/* Author & Company Meta */}
              <div style={{ borderTop: "1px solid rgba(124, 58, 237, 0.12)", paddingTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 700, color: "#180D26", fontSize: "0.92rem" }}>{rev.author}</div>
                  <div style={{ fontSize: "0.78rem", color: "#5B486E", display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                    <Building2 size={13} color="#7C3AED" /> {rev.role}, {rev.company}
                  </div>
                </div>
                <div style={{ fontSize: "0.78rem", color: "#5B486E", display: "flex", alignItems: "center", gap: "4px" }}>
                  <Globe size={13} color="#7C3AED" /> {rev.country}
                </div>
              </div>
            </div>
          ))}
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
            href="/request-quote"
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
            Request B2B Quote <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}
