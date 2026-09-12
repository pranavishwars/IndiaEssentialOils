import React from "react";
import Link from "next/link";
import { Footer } from "@/components/server/Footer";
import { 
  Clock, 
  Truck, 
  FileCheck2, 
  ArrowRight, 
  ChevronRight,
  Headphones,
  CheckCircle2,
  Ship,
  Globe2
} from "lucide-react";

export const metadata = {
  title: "Shipment Policy | India Essential Oils",
  description: "India Essential Oils considers shipping as one of the most vital functions. Guaranteed 48-hour order dispatch, best global shipping rates, and complete post-shipment tracking.",
};

export default function ShipmentPolicyPage() {
  const postShipmentServices = [
    {
      title: "Shipment Movement Tracking",
      desc: "Complete monitoring of consignment movement at every stage of transit.",
    },
    {
      title: "Timely Documentation",
      desc: "Prompt generation and processing of all essential shipping records and manifests.",
    },
    {
      title: "Country-Specific Documentation Facilitation",
      desc: "Expert facilitation tailored to satisfy destination-specific customs and regulatory requirements.",
    },
    {
      title: "Typical Materials Movement Facilitation",
      desc: "Specialized logistics facilitation for the proper transit of botanical materials and essential oils.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1140px", margin: "0 auto", width: "100%" }}>

        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#4A5568", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#2D3748", textDecoration: "none", fontWeight: 600 }}>Home</Link>
          <ChevronRight size={14} color="#718096" />
          <Link href="/packaging" style={{ color: "#2D3748", textDecoration: "none", fontWeight: 600 }}>Packaging</Link>
          <ChevronRight size={14} color="#718096" />
          <span style={{ color: "#1A202C", fontWeight: 700 }}>Shipment Policy</span>
        </div>

        {/* Hero Header */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
              fontWeight: 700,
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#1A202C",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Shipment Policy
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#4A5568", maxWidth: "820px", margin: "0 auto", lineHeight: 1.7 }}>
            Timely and economical shipment movement is as important as quality. Guaranteed 48-hour order dispatch, best global shipping rates, and complete post-shipment tracking.
          </p>
        </div>

        {/* Vital Function Highlight Banner */}
        <div
          className="liquid-glass-elevated"
          style={{
            borderRadius: "28px",
            padding: "clamp(28px, 4vw, 36px)",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            border: "1.5px solid rgba(124, 58, 237, 0.2)",
            boxShadow: "0 12px 36px rgba(24, 13, 38, 0.05)",
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "18px",
              backgroundColor: "rgba(124, 58, 237, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Truck size={30} color="#7C3AED" />
          </div>

          <div style={{ flex: 1, minWidth: "280px" }}>
            <h2 style={{ fontSize: "1.45rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#1A202C", margin: "0 0 8px 0" }}>
              Shipping as a Vital Business Function
            </h2>
            <p style={{ fontSize: "1.02rem", color: "#2D3748", lineHeight: 1.75, margin: 0 }}>
              India Essential Oils considers Shipping as one of the most vital functions. Shipping represents <strong>5–20% of the total cost</strong> of any business. Timely and economical shipment movement is as important as quality.
            </p>
          </div>
        </div>

        {/* Main Shipment Pillars Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 520px), 1fr))", gap: "28px", marginBottom: "36px" }}>

          {/* Pillar 1: 48-Hour Order Dispatch */}
          <div
            className="liquid-glass-elevated"
            style={{
              borderRadius: "28px",
              padding: "clamp(28px, 3.5vw, 36px)",
              backgroundColor: "rgba(255, 255, 255, 0.92)",
              border: "1.5px solid rgba(124, 58, 237, 0.18)",
              boxShadow: "0 10px 30px rgba(24, 13, 38, 0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    backgroundColor: "rgba(124, 58, 237, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Clock size={24} color="#7C3AED" />
                </div>
                <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#1A202C", margin: 0 }}>
                  Prompt Delivery Period — Dispatch in 48 Hours
                </h2>
              </div>

              <p style={{ fontSize: "0.98rem", color: "#2D3748", lineHeight: 1.75, marginBottom: "18px" }}>
                Our specialty is promptness in service. We maintain substantial bulk stocks of regular products in our climate-controlled warehouse, which enables us to dispatch standard orders within 48 hours of payment confirmation, unless custom packaging or urgent priority schedules apply.
              </p>

              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "16px",
                  backgroundColor: "rgba(124, 58, 237, 0.06)",
                  border: "1px solid rgba(124, 58, 237, 0.16)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>⚡</span>
                <div>
                  <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A202C" }}>
                    48-Hour Standard Order Dispatch
                  </span>
                  <p style={{ fontSize: "0.84rem", color: "#4A5568", margin: "2px 0 0 0", lineHeight: 1.4 }}>
                    Standard wholesale orders are packed and dispatched within 48 hours of payment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Best Shipping Rates & Direct Tie-Ups */}
          <div
            className="liquid-glass-elevated"
            style={{
              borderRadius: "28px",
              padding: "clamp(28px, 3.5vw, 36px)",
              backgroundColor: "rgba(255, 255, 255, 0.92)",
              border: "1.5px solid rgba(124, 58, 237, 0.18)",
              boxShadow: "0 10px 30px rgba(24, 13, 38, 0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    backgroundColor: "rgba(124, 58, 237, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Ship size={24} color="#7C3AED" />
                </div>
                <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#1A202C", margin: 0 }}>
                  Best Shipping Rates Worldwide
                </h2>
              </div>

              <p style={{ fontSize: "0.98rem", color: "#2D3748", lineHeight: 1.75, marginBottom: "18px" }}>
                India Essential Oils offers one of the best shipping rates for all major destinations of the world. We have direct tie-ups with major shipping lines and reputed Clearing House agents to guarantee economical and timely shipment movement.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#1A202C" }}>
                  <CheckCircle2 size={16} color="#7C3AED" />
                  <span>Direct tie-ups with major global shipping lines</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#1A202C" }}>
                  <CheckCircle2 size={16} color="#7C3AED" />
                  <span>Partnerships with reputed Clearing House agents</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#1A202C" }}>
                  <CheckCircle2 size={16} color="#7C3AED" />
                  <span>Best freight rates negotiated for all major world destinations</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section: Best Post Shipment Services */}
        <div
          className="liquid-glass-elevated"
          style={{
            borderRadius: "28px",
            padding: "clamp(28px, 4vw, 40px)",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            border: "1.5px solid rgba(124, 58, 237, 0.18)",
            boxShadow: "0 12px 36px rgba(24, 13, 38, 0.04)",
            marginBottom: "36px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                backgroundColor: "rgba(124, 58, 237, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <FileCheck2 size={24} color="#7C3AED" />
            </div>
            <h2 style={{ fontSize: "1.45rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#1A202C", margin: 0 }}>
              Best Post Shipment Services
            </h2>
          </div>

          <p style={{ fontSize: "1.02rem", color: "#2D3748", lineHeight: 1.75, maxWidth: "860px", marginBottom: "24px" }}>
            India Essential Oils offers the best Post Shipment services to ensure smooth, compliant, and transparent movement for every consignment:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "20px" }}>
            {postShipmentServices.map((srv, idx) => (
              <div
                key={idx}
                style={{
                  padding: "24px",
                  borderRadius: "20px",
                  backgroundColor: "#FCFAF6",
                  border: "1px solid rgba(124, 58, 237, 0.14)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <CheckCircle2 size={18} color="#7C3AED" style={{ flexShrink: 0 }} />
                  <h3 style={{ fontSize: "1.02rem", fontWeight: 700, color: "#1A202C", margin: 0 }}>
                    {srv.title}
                  </h3>
                </div>
                <p style={{ fontSize: "0.9rem", color: "#4A5568", lineHeight: 1.65, margin: 0, paddingLeft: "28px" }}>
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Customer Care Tracking */}
        <div
          className="liquid-glass-elevated"
          style={{
            borderRadius: "28px",
            padding: "clamp(28px, 4vw, 36px)",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            border: "1.5px solid rgba(124, 58, 237, 0.18)",
            boxShadow: "0 12px 36px rgba(24, 13, 38, 0.04)",
            marginBottom: "48px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              backgroundColor: "rgba(124, 58, 237, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Headphones size={28} color="#7C3AED" />
          </div>

          <div style={{ flex: 1, minWidth: "280px" }}>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#1A202C", margin: "0 0 8px 0" }}>
              Customer Care Executive Tracking
            </h2>
            <p style={{ fontSize: "1.02rem", color: "#2D3748", lineHeight: 1.75, margin: 0 }}>
              Our Customer Care Executive keeps complete tracking of all the shipments at different point of time and keeps customers abreast of all movements.
            </p>
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
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1A202C", margin: 0 }}>
              Packaging Policy &bull; Export Drums &amp; Canisters
            </h3>
            <p style={{ fontSize: "0.88rem", color: "#4A5568", margin: "4px 0 0 0" }}>
              Learn about our heavy-duty export containers, retail packaging, and customized private labeling.
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/packaging/packaging-policy"
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
              Packaging Policy <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
