"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  FlaskConical,
  ShieldCheck,
  Globe2,
  PackageCheck,
  FileText,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  icon: React.ReactNode;
  tags: string[];
}

const B2B_FAQS: FAQItem[] = [
  {
    id: "top-supplier",
    question: "Why is India Essential Oils rated among the top essential oil manufacturers in India?",
    shortAnswer: "20+ years of primary distillation heritage, WHO-GMP & ISO 22000 certified processing, direct farm traceability, and 100% GC-MS verified chemical purity.",
    detailedAnswer: "As a primary division of Mother Herbs Pvt. Ltd. (established in 2004), India Essential Oils manages direct agricultural sourcing across premier botanical growing belts in India (Kashmir lavender, Nilgiri eucalyptus, Kerala spices, and Assam agarwood). Every single production run is steam-distilled or cold-pressed without synthetic diluents, artificial boosters, or mineral oil fillers, serving formulators in 45+ countries worldwide.",
    icon: <ShieldCheck size={20} color="#7C3AED" />,
    tags: ["WHO-GMP Certified", "Primary Distiller", "Export to 45+ Countries"],
  },
  {
    id: "gcms-purity",
    question: "How is 100% purity and GC-MS chromatography guaranteed for every batch?",
    shortAnswer: "Every container includes an individual batch code linked to public Gas Chromatography–Mass Spectrometry (GC-MS) spectra and Certificate of Analysis (CoA).",
    detailedAnswer: "Our in-house analytical laboratory utilizes Shimadzu Gas Chromatography–Mass Spectrometry (GC-MS), Anton Paar polarimeters (optical rotation), and Abbe refractometers. We quantify active constituents (such as Linalool, Menthol, Terpinen-4-ol, and Eugenol) to confirm precise botanical chemotypes and test for zero pesticide residues or heavy metals. Buyers can verify their batch code 24/7 on our online Batch Lookup portal.",
    icon: <FlaskConical size={20} color="#059669" />,
    tags: ["GC-MS Tested", "Instant Batch Lookup", "Zero Adulteration"],
  },
  {
    id: "moq-shipping",
    question: "What are your wholesale Minimum Order Quantities (MOQ) and global delivery timelines?",
    shortAnswer: "Wholesale supply starting from 25 kg industrial carboys up to 200 kg steel drum consignments with rapid dispatch from New Delhi.",
    detailedAnswer: "We specialize in commercial B2B supply for cosmetic brands, personal care formulators, and pharmaceutical manufacturers worldwide. Shipments are packed in 25 kg fluorinated HDPE carboys and 200 kg epoxy-coated UN steel drums. We manage full IATA/IMDG dangerous goods declarations, with air cargo transit in 3–6 business days and full container load (FCL) sea freight via Mundra and Nhava Sheva ports.",
    icon: <Globe2 size={20} color="#7C3AED" />,
    tags: ["MOQ 25 kg", "200 kg Steel Drums", "Worldwide Air & Sea Freight"],
  },
  {
    id: "compliance-docs",
    question: "What regulatory documentation is provided for cosmetic and pharmaceutical compliance?",
    shortAnswer: "Complete regulatory dossiers including CoA, MSDS (GHS-compliant), IFRA 51st Amendment, Technical Data Sheets (TDS), and Phytosanitary certificates.",
    detailedAnswer: "To guarantee smooth customs clearance and regulatory filings with US FDA, EU Cosmetics Regulation (EC No 1223/2009), REACH, and Health Canada, every commercial shipment is accompanied by comprehensive batch-specific documentation: Certificate of Analysis (CoA), GHS Safety Data Sheet (MSDS), Certificate of Origin (COO), and Non-GMO/Vegan declarations.",
    icon: <FileText size={20} color="#D97706" />,
    tags: ["IFRA Compliant", "GHS/MSDS Dossier", "EU & US FDA Ready"],
  },
  {
    id: "private-label",
    question: "Do you offer private labeling, custom botanical formulations, and custom drum packaging?",
    shortAnswer: "Yes. Full OEM/ODM services including bespoke botanical blending, custom carrier dilutions, amber dropper bottling (10ml–100ml), and customized bulk packaging.",
    detailedAnswer: "We support brands globally with end-to-end contract manufacturing and private labeling. Whether you require customized therapeutic essential oil blends, specialized carrier oil dilutions (Jojoba, Argan, Rosehip), or bespoke retail-ready amber glass dropper bottles with customized labeling, our New Delhi production facility is equipped to fulfill custom orders.",
    icon: <PackageCheck size={20} color="#7C3AED" />,
    tags: ["Private Label OEM", "Custom Blending", "10ml–200kg Packaging"],
  },
];

export function HomeB2BSection() {
  const [expandedId, setExpandedId] = useState<string | null>("top-supplier");

  const toggleAccordion = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  // Structured FAQPage schema for Answer Engine Optimization (AEO)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": B2B_FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `${faq.shortAnswer} ${faq.detailedAnswer}`,
      },
    })),
  };

  return (
    <section
      id="b2b-procurement-faq"
      style={{
        padding: "20px 24px 80px",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span
          style={{
            display: "inline-block",
            padding: "6px 18px",
            borderRadius: "9999px",
            backgroundColor: "rgba(124, 58, 237, 0.1)",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            color: "#7C3AED",
            fontWeight: 800,
            fontSize: "0.78rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          Global B2B Sourcing & Technical Standards
        </span>

        <h2
          style={{
            fontSize: "clamp(2rem, 3.8vw, 2.75rem)",
            fontWeight: 700,
            fontFamily: "var(--font-lora), Georgia, serif",
            color: "#180D26",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          Frequently Asked Wholesale & Quality Inquiries
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            color: "#5B486E",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: 1.65,
          }}
        >
          Key technical specifications, GC-MS testing verification, regulatory compliance, and export logistics for global formulators and cosmetic procurement teams.
        </p>
      </div>

      {/* Accordion List in Liquid Glass Design */}
      <div style={{ maxWidth: "880px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
        {B2B_FAQS.map(faq => {
          const isExpanded = expandedId === faq.id;
          return (
            <div
              key={faq.id}
              style={{
                backgroundColor: isExpanded ? "rgba(255, 255, 255, 0.82)" : "rgba(255, 255, 255, 0.72)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                border: isExpanded ? "1px solid rgba(124, 58, 237, 0.35)" : "1px solid rgba(124, 58, 237, 0.18)",
                borderRadius: "20px",
                padding: "24px 28px",
                boxShadow: isExpanded
                  ? "0 12px 36px rgba(124, 58, 237, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)"
                  : "0 4px 20px rgba(24, 13, 38, 0.03)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Trigger Button */}
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={isExpanded}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  textAlign: "start",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(124, 58, 237, 0.08)",
                      border: "1px solid rgba(124, 58, 237, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {faq.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.08rem",
                      fontWeight: 700,
                      color: "#180D26",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </h3>
                </div>

                <div
                  style={{
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease",
                    color: "#7C3AED",
                    flexShrink: 0,
                  }}
                >
                  <ChevronDown size={20} />
                </div>
              </button>

              {/* Answer Content */}
              {isExpanded && (
                <div
                  style={{
                    marginTop: "16px",
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(124, 58, 237, 0.12)",
                    animation: "fadeIn 0.2s ease-out",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#180D26",
                      fontWeight: 600,
                      lineHeight: 1.6,
                      marginBottom: "10px",
                    }}
                  >
                    {faq.shortAnswer}
                  </p>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#5B486E",
                      lineHeight: 1.7,
                      marginBottom: "16px",
                    }}
                  >
                    {faq.detailedAnswer}
                  </p>

                  {/* High-Signal Feature Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {faq.tags.map(tag => (
                      <span
                        key={tag}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#7C3AED",
                          backgroundColor: "rgba(124, 58, 237, 0.08)",
                          border: "1px solid rgba(124, 58, 237, 0.2)",
                          padding: "4px 10px",
                          borderRadius: "9999px",
                        }}
                      >
                        <CheckCircle2 size={12} color="#7C3AED" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Technical Callout Strip */}
      <div
        style={{
          maxWidth: "880px",
          margin: "36px auto 0",
          backgroundColor: "rgba(124, 58, 237, 0.06)",
          border: "1px solid rgba(124, 58, 237, 0.22)",
          borderRadius: "20px",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <FlaskConical size={22} color="#7C3AED" />
          <div>
            <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#180D26" }}>
              Need Batch Purity Verification or CoA Download?
            </div>
            <div style={{ fontSize: "0.82rem", color: "#5B486E" }}>
              Enter any container code for instant GC-MS chromatogram & analytical specs.
            </div>
          </div>
        </div>

        <Link
          href="/batch-lookup"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: "#7C3AED",
            color: "white",
            padding: "10px 20px",
            borderRadius: "9999px",
            fontWeight: 700,
            fontSize: "0.85rem",
            textDecoration: "none",
            boxShadow: "0 4px 14px rgba(124, 58, 237, 0.35)",
            transition: "all 0.2s ease",
          }}
        >
          <span>Batch Lookup</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
