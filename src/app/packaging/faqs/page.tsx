import React from "react";
import Link from "next/link";
import { Footer } from "@/components/server/Footer";
import { 
  HelpCircle, 
  Package, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight,
  MessageCircle,
  FileQuestion,
  Mail,
  Phone
} from "lucide-react";

export const metadata = {
  title: "Packaging & OEM FAQs | India Essential Oils",
  description: "Frequently Asked Questions on packaging sizes, private labeling, custom dropper assemblies, nitrogen capping, and ordering turnaround.",
};

export default function PackagingFaqsPage() {
  const faqs = [
    {
      q: "How do I place an order and what is the response turnaround?",
      a: "You can send an enquiry through our online customized request form or contact desk. We are committed to replying to all enquiries in less than 30 minutes during Indian business hours (10:00 AM – 9:00 PM IST) with full lot pricing, batch specifications, and technical dossiers.",
    },
    {
      q: "What is your standard order dispatch and delivery turnaround?",
      a: "Our specialty is promptness in service. We maintain substantial bulk stocks of regular products in our climate-controlled warehouse, which enables us to despatch standard orders within 48 hours of payment confirmation unless custom manufacturing or private label formulation is requested.",
    },
    {
      q: "What glass bottle sizes and finishes do you supply for private labeling?",
      a: "We offer 5 ml, 10 ml, 20 ml, 50 ml, 100 ml, 200 ml, 500 ml, 1 kg, and 2 kg glass bottles. Available finishes include Amber Glass (maximum UV protection), Clear Glass (high optical clarity), Matte Finish Glass (frosted luxury velvet touch), as well as Cobalt Blue and Emerald Green glass.",
    },
    {
      q: "What cap and dropper mechanisms are available?",
      a: "Our closures include European dropper type droppers (controlled drop-by-drop orifice reducers), calibrated glass droppers (pipettes), tamper-evident sealed caps with breakaway rings, flip top caps, fine mist atomizers, treatment pumps, and stainless steel rollerballs.",
    },
    {
      q: "Do you offer Outer Box and Cushion Box packing?",
      a: "Yes! We specialize in customized outer box packaging and cushion box packing. Our cushion box packing utilizes molded shock-absorbing internal padding to protect bottles from vibrations and compression during domestic and international transit. We also design bespoke gift packaging and presentation boxes on request.",
    },
    {
      q: "What are your bulk packaging sizes for essential oils, oleoresins, and floral waters?",
      a: "Our bulk range includes Aluminum Bottles (1kg, 2kg, 5kg, 10kg, 25kg+), HDPE Drums (5kg, 20kg, 25kg, 50kg, 200kg+), HDPE Barrels (200kg open top & 200kg closed top), and Steel & GI Drums (20kg, 40kg, 200kg open top with narrow mouth).",
    },
    {
      q: "Is Nitrogen capping available for oxidation protection?",
      a: "Yes. We offer Nitrogen capping for specific oils on special requests. Our automated cleanroom capping line purges atmospheric oxygen from the container headspace with ultra-pure nitrogen gas before sealing, safeguarding sensitive botanical oils against oxidative rancidity.",
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
          <span style={{ color: "#180D26", fontWeight: 700 }}>FAQs</span>
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
            <HelpCircle size={14} color="#7C3AED" /> Support &amp; Technical Queries
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
            Packaging &amp; OEM FAQs
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "800px", margin: "0 auto", lineHeight: 1.7 }}>
            Answers to common questions regarding private label bottling, dropper mechanics, cushion box protection, and dispatch turnaround.
          </p>
        </div>

        {/* FAQs List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "48px" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="liquid-glass-elevated"
              style={{
                borderRadius: "24px",
                padding: "32px",
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                border: "1.5px solid rgba(124, 58, 237, 0.18)",
                boxShadow: "0 8px 28px rgba(24, 13, 38, 0.04)",
              }}
            >
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#180D26", marginBottom: "12px", display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: "#7C3AED", fontWeight: 800 }}>Q:</span>
                <span>{faq.q}</span>
              </h2>
              <p style={{ fontSize: "1.02rem", color: "#3B284C", lineHeight: 1.8, margin: 0, paddingLeft: "26px" }}>
                {faq.a}
              </p>
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
              Explore Overview Hub
            </span>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#180D26", margin: "4px 0 0 0" }}>
              Packaging Process &amp; Materials
            </h3>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/packaging/process"
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
              Packaging Process <ArrowRight size={14} />
            </Link>

            <Link
              href="/packaging"
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
              Packaging Overview
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
