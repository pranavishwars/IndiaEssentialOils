import React from "react";
import Link from "next/link";
import { Footer } from "@/components/server/Footer";
import { 
  Clock, 
  Plane, 
  ShieldCheck, 
  FileCheck2, 
  ArrowRight, 
  ChevronRight,
  PackageCheck,
  Building2
} from "lucide-react";

export const metadata = {
  title: "Shipment Policy | India Essential Oils",
  description: "Our international export shipping policies: 48-hour prompt order dispatch, heavy-duty export packaging, and comprehensive export dossiers.",
};

export default function ShipmentPolicyPage() {
  const policies = [
    {
      title: "1. Promptness in Service & 48-Hour Order Dispatch",
      desc: "Our specialty is promptness in service. We maintain substantial bulk stocks of regular products in our climate-controlled warehouse, which enables us to despatch standard orders within 48 hours of payment confirmation, unless custom packaging or urgent priority schedules apply.",
      icon: <Clock size={24} color="#7C3AED" />,
      color: "#7C3AED",
    },
    {
      title: "2. Heavy-Duty Master Carton & Pallet Packing",
      desc: "All retail and aluminum bottles are packed into 5-ply and 7-ply heavy-duty corrugated export master cartons with water-repellent shrink wrapping. For maritime shipments, cartons are strapped onto heat-treated ISPM-15 certified wooden pallets with edge protectors.",
      icon: <PackageCheck size={24} color="#7C3AED" />,
      color: "#7C3AED",
    },
    {
      title: "3. Complete International Export Dossiers",
      desc: "Every export shipment is dispatched with an exhaustive documentation set: Commercial Invoice, Packing List, Certificate of Origin, Certificate of Analysis (CoA) with GC-MS report, Safety Data Sheet (MSDS/SDS), and Phytosanitary Certificate on buyer request.",
      icon: <FileCheck2 size={24} color="#7C3AED" />,
      color: "#7C3AED",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1140px", margin: "0 auto", width: "100%" }}>

        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#5B486E", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>Home</Link>
          <ChevronRight size={14} />
          <Link href="/packaging" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>Packaging</Link>
          <ChevronRight size={14} />
          <span style={{ color: "#180D26", fontWeight: 700 }}>Shipment Policy</span>
        </div>

        {/* Hero Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
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
            Shipment Policy
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "800px", margin: "0 auto", lineHeight: 1.7 }}>
            Guaranteed 48-hour order dispatch, heavy-duty export packaging, and worldwide express delivery.
          </p>
        </div>

        {/* Policies Detailed Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
          {policies.map((pol, idx) => (
            <div
              key={idx}
              className="liquid-glass-elevated"
              style={{
                borderRadius: "28px",
                padding: "clamp(28px, 4vw, 36px)",
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                border: "1.5px solid rgba(124, 58, 237, 0.18)",
                boxShadow: "0 12px 36px rgba(24, 13, 38, 0.04)",
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(124, 58, 237, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {pol.icon}
              </div>

              <div style={{ flex: 1, minWidth: "280px" }}>
                <h2 style={{ fontSize: "1.45rem", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
                  {pol.title}
                </h2>
                <p style={{ fontSize: "1.02rem", color: "#3B284C", lineHeight: 1.75, margin: 0 }}>
                  {pol.desc}
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
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#180D26", margin: 0 }}>
              Packaging Policy &bull; Export Drums &amp; Canisters
            </h3>
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
