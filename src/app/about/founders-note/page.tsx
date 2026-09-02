import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/data";
import { Footer } from "@/components/server/Footer";
import { 
  Quote, 
  CheckCircle2, 
  Sparkles, 
  Leaf, 
  Award, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight,
  Building2
} from "lucide-react";

export const metadata = {
  title: "Founders' Note | India Essential Oils",
  description: "A message from the leadership of Mother Herbs and India Essential Oils on our founding commitment to botanical integrity and unadulterated purity.",
};

export default function FoundersNotePage() {
  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1140px", margin: "0 auto", width: "100%" }}>

        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#5B486E", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>Home</Link>
          <ChevronRight size={14} />
          <Link href="/about" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>About</Link>
          <ChevronRight size={14} />
          <span style={{ color: "#180D26", fontWeight: 700 }}>Founders&apos; Note</span>
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
              color: "#D97706",
              marginBottom: "16px",
              backgroundColor: "rgba(217, 119, 6, 0.1)",
              border: "1px solid rgba(217, 119, 6, 0.25)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            <Quote size={14} color="#D97706" /> Leadership Perspective
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
            Founders&apos; Note: Our Commitment to Botanical Integrity
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "800px", margin: "0 auto", lineHeight: 1.7 }}>
            A message on our founding principles, environmental stewardship, and uncompromising dedication to natural botanical purity.
          </p>
        </div>

        {/* Founders Letter Main Card */}
        <div
          className="liquid-glass-elevated"
          style={{
            borderRadius: "32px",
            padding: "clamp(32px, 5vw, 56px)",
            backgroundColor: "rgba(255, 255, 255, 0.94)",
            border: "1.5px solid rgba(124, 58, 237, 0.22)",
            boxShadow: "0 20px 60px rgba(24, 13, 38, 0.08)",
            marginBottom: "48px",
          }}
        >
          <div style={{ fontSize: "1.08rem", color: "#3B284C", lineHeight: 1.9, display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={{ margin: 0, fontSize: "1.18rem", fontWeight: 600, color: "#180D26", fontStyle: "italic", fontFamily: "var(--font-lora), Georgia, serif" }}>
              &ldquo;When Mother Herbs Private Limited established India Essential Oils, our mission was simple yet absolute: to bridge the vast botanical wealth of India with the exacting standards of the world&apos;s leading formulators, while strictly preserving the purity and sanctity of natural materials.&rdquo;
            </p>

            <p style={{ margin: 0 }}>
              The global market for essential oils and oleoresins has experienced unprecedented expansion across the food, pharmaceutical, flavor, cosmetic, and perfumery sectors. However, this growing demand has often been met with synthetic adulteration and opaque commodity brokerage.
            </p>

            <p style={{ margin: 0 }}>
              <strong>Mother Herbs promises to offer Nature&apos;s best in value-added form.</strong> By combining modern extraction technologies with direct cultivator guidance on eco-friendly practices, we ensure <strong>100% natural, unadulterated extracts</strong> that stay ahead of time.
            </p>

            <p style={{ margin: 0 }}>
              Our <strong>95% buyer retention rate</strong> and <strong>90% repeat orders</strong> are not accidental metrics; they reflect our daily commitment to process up-gradation, prompt 48-hour order dispatch, and open analytical transparency with every consignment shipped worldwide.
            </p>

            <p style={{ margin: 0 }}>
              We invite formulators, manufacturers, and researchers around the globe to experience pure botanicals in their true, authentic form.
            </p>
          </div>

          <div
            style={{
              marginTop: "36px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(124, 58, 237, 0.16)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div>
              <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#180D26", fontFamily: "var(--font-lora), Georgia, serif" }}>
                Leadership Team &amp; President
              </div>
              <div style={{ fontSize: "0.9rem", color: "#7C3AED", fontWeight: 700 }}>
                Mother Herbs Private Limited &bull; India Essential Oils
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#059669",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <CheckCircle2 size={18} color="#059669" /> 95% Retention &bull; 90% Repeat Orders
              </span>
            </div>
          </div>
        </div>

        {/* Section Navigation Strip */}
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
              Explore Overview
            </span>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#180D26", margin: "4px 0 0 0" }}>
              Company Profile
            </h3>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/about/profile"
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
              Company Profile <ArrowRight size={14} />
            </Link>

            <Link
              href="/about"
              style={{
                padding: "12px 20px",
                borderRadius: "9999px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.88rem",
                color: "#7C3AED",
                backgroundColor: "rgba(124, 58, 237, 0.1)",
                border: "1px solid rgba(124, 58, 237, 0.25)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              About Overview Hub
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
