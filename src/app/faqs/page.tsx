import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Footer } from "@/components/server/Footer";
import { FaqsClient } from "./FaqsClient";
import { HelpCircle, ChevronRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | India Essential Oils",
  description:
    "Explore common questions regarding B2B wholesale procurement, 48-hour order dispatch, GC-MS testing, UN-certified packaging, supercritical CO2 extracts, and global export shipping.",
  keywords: [
    "essential oils FAQ",
    "wholesale essential oil ordering questions",
    "essential oils MOQ India",
    "GC-MS essential oil testing FAQ",
    "CO2 extract FAQ",
    "bulk packaging drums essential oils",
    "India Essential Oils shipping turnaround",
  ],
  openGraph: {
    title: "Frequently Asked Questions (FAQs) | India Essential Oils",
    description:
      "Comprehensive B2B procurement FAQ on ordering procedure, 48-hour order dispatch, GC-MS laboratory verification, UN-certified packaging, and international export documentation.",
    url: "https://indiaessentialoils.com/faqs",
  },
};

export default function FaqsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is India Essential Oils?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "India Essential Oils is a premier manufacturing and export division of Mother Herbs Pvt. Ltd. Operating from New Delhi, India, we run certified steam distillation distilleries, mechanical cold-pressing units, and supercritical CO2 extraction autoclaves, supplying 100% pure botanical oils to global pharmaceutical, cosmetic, flavoring, and perfumery industries.",
        },
      },
      {
        "@type": "Question",
        name: "What is your Minimum Order Quantity (MOQ)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our standard Minimum Order Quantity (MOQ) for commercial wholesale starts from 5 kg to 25 kg in UN-certified aluminum canisters or HDPE containers. For new formulation development and laboratory testing, we supply 1 kg evaluation samples with complete CoA dossiers.",
        },
      },
      {
        "@type": "Question",
        name: "What is the standard 3-step procedure to place a B2B order?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We follow a transparent 3-step ordering process: (1) Submit Your Enquiry with product requirements and quantity via our online form or sales desk; (2) Quotation & Technical Verification where you receive lot pricing, batch CoA, and evaluation samples; and (3) Order Confirmation & 48-Hour Dispatch upon formal Proforma Invoice (PI) validation.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly are wholesale orders dispatched?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We maintain extensive bulk stocks of standard botanical distillates in our climate-controlled warehouse, allowing standard wholesale orders to be packaged and dispatched within 48 hours of payment confirmation.",
        },
      },
      {
        "@type": "Question",
        name: "What laboratory testing is conducted on each batch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every production batch undergoes comprehensive testing in our analytical lab: Dual Gas Chromatography-Mass Spectrometry (GC-MS) for chemical constituent profiling, Refractive Index, Optical Rotation, Specific Gravity, Peroxide Value, and microbial screening. Full batch dossiers and CoAs are provided with every delivery.",
        },
      },
      {
        "@type": "Question",
        name: "What bulk packaging sizes and materials do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We supply industrial UN-certified packaging: 1 kg, 5 kg, 10 kg, and 25 kg seamless aluminum canisters; 25 kg and 50 kg virgin food-grade HDPE carboys; and 200 kg heavy-gauge galvanized iron/epoxy-phenolic lined steel export drums fitted with Tri-Sure tamper-evident seals.",
        },
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      {/* Structured Data for SEO / AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        {/* Breadcrumbs */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#5B486E", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>Home</Link>
          <ChevronRight size={14} />
          <span style={{ color: "#180D26", fontWeight: 700 }}>Frequently Asked Questions</span>
        </div>

        {/* Hero Header */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
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
            <HelpCircle size={14} color="#7C3AED" /> Procurement &amp; Technical FAQs
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
            Frequently Asked Questions
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "780px", margin: "0 auto", lineHeight: 1.7 }}>
            Find clear, authoritative answers to common inquiries regarding our B2B ordering procedure, 48-hour order dispatch, analytical lab testing, and global export shipping.
          </p>
        </div>

        {/* Interactive Client Search & Accordion */}
        <FaqsClient />
      </main>

      <Footer />
    </div>
  );
}
