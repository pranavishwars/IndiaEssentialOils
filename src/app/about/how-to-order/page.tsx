import React from "react";
import Link from "next/link";
import { Footer } from "@/components/server/Footer";
import { 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  FileText,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "How to Order | India Essential Oils",
  description: "Learn how to place wholesale and export orders with India Essential Oils. Transparent 3-step procurement process and 48-hour order dispatch.",
};

export default function HowToOrderPage() {
  const orderingSteps = [
    {
      step: "01",
      title: "Submit Your Enquiry",
      desc: "Send your product requirements (botanical name, quantity in kg/drums, packaging requirements) via our online customized web enquiry form or sales desk.",
      icon: <Mail size={24} color="#7C3AED" />,
    },
    {
      step: "02",
      title: "Quotation & Technical Verification",
      desc: "Receive our comprehensive quotation with volume pricing, Certificates of Analysis (CoA), and pre-shipment evaluation samples for technical lab verification.",
      icon: <FileText size={24} color="#0284C7" />,
    },
    {
      step: "03",
      title: "Order Confirmation & 48-Hour Dispatch",
      desc: "Confirm your order with a formal Proforma Invoice (PI). Your consignment is packed into UN-certified drums or aluminum canisters and dispatched within 48 hours.",
      icon: <CheckCircle2 size={24} color="#059669" />,
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
          <span style={{ color: "#180D26", fontWeight: 700 }}>How to Order</span>
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
              color: "#7C3AED",
              marginBottom: "16px",
              backgroundColor: "rgba(124, 58, 237, 0.1)",
              border: "1px solid rgba(124, 58, 237, 0.25)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            <Sparkles size={14} color="#7C3AED" /> Streamlined 3-Step Sourcing
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
            How to Order
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "800px", margin: "0 auto", lineHeight: 1.7 }}>
            Seamless global procurement for wholesale essential oils, oleoresins, and cold-pressed carrier oils.
          </p>
        </div>

        {/* 3 Ordering Steps Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "24px", marginBottom: "48px" }}>
          {orderingSteps.map((step) => (
            <div
              key={step.step}
              className="liquid-glass-elevated"
              style={{
                borderRadius: "24px",
                padding: "32px",
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                border: "1.5px solid rgba(124, 58, 237, 0.18)",
                boxShadow: "0 10px 30px rgba(24, 13, 38, 0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", backgroundColor: "rgba(124, 58, 237, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {step.icon}
                  </div>
                  <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "rgba(124, 58, 237, 0.3)", fontFamily: "var(--font-lora), Georgia, serif" }}>
                    {step.step}
                  </span>
                </div>

                <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
                  {step.title}
                </h2>
                <p style={{ fontSize: "0.92rem", color: "#5B486E", lineHeight: 1.65, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
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
              Explore Next
            </span>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#180D26", margin: "4px 0 0 0" }}>
              Founders&apos; Note
            </h3>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/about/founders-note"
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
              Founders&apos; Note <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
