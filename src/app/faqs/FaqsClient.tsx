"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Sparkles,
  HelpCircle,
  Package,
  ShieldCheck,
  Truck,
  Flame,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

export interface FAQItem {
  id: string;
  category: "General" | "Ordering" | "Quality" | "Packaging" | "Shipping";
  question: string;
  answer: string;
  highlight?: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "gen-1",
    category: "General",
    question: "Who is India Essential Oils?",
    answer: "India Essential Oils is a premier manufacturing and export division of Mother Herbs Pvt. Ltd. Operating from New Delhi, India, we run certified steam distillation distilleries, mechanical cold-pressing units, and supercritical CO2 extraction autoclaves, supplying 100% pure botanical oils to global pharmaceutical, cosmetic, flavoring, and perfumery industries.",
    highlight: "Mother Herbs Pvt. Ltd. Division",
  },
  {
    id: "gen-2",
    category: "General",
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer: "Our standard Minimum Order Quantity (MOQ) for commercial wholesale starts from 5 kg to 25 kg in UN-certified aluminum canisters or HDPE containers. For new formulation development, laboratory testing, and technical validation, we supply 1 kg evaluation samples with complete CoA dossiers.",
    highlight: "1 kg Samples • 5 kg Bulk MOQ",
  },
  {
    id: "gen-3",
    category: "General",
    question: "What manufacturing standards and certifications do your facilities maintain?",
    answer: "Our facilities operate under stringent international quality frameworks, holding ISO 9001:2015 (Quality Management), GMP (Good Manufacturing Practices) Compliance, Ministry of MSME Udyam Registration, and active in-house GC-MS testing.",
    highlight: "ISO 9001:2015 • GMP Certified • MSME Registered",
  },
  {
    id: "ord-1",
    category: "Ordering",
    question: "What is the standard 3-step procedure to place a B2B order?",
    answer: "We follow a transparent 3-step ordering process: (1) Submit Your Enquiry with product requirements and quantity via our online form or sales desk; (2) Quotation & Technical Verification where you receive lot pricing, batch CoA, and evaluation samples; and (3) Order Confirmation & 48-Hour Dispatch upon formal Proforma Invoice (PI) validation.",
    highlight: "3-Step Procurement Flow",
  },
  {
    id: "ord-2",
    category: "Ordering",
    question: "How quickly are wholesale orders dispatched?",
    answer: "Promptness in service is our hallmark. We maintain extensive bulk stocks of standard botanical distillates in our climate-controlled warehouse, allowing standard wholesale orders to be packaged and dispatched within 48 hours of payment confirmation.",
    highlight: "⚡ 48-Hour Order Dispatch",
  },
  {
    id: "ord-3",
    category: "Ordering",
    question: "Do you supply evaluation samples before bulk ordering?",
    answer: "Yes, we provide pre-shipment evaluation samples (100g to 1kg) for formulators, laboratories, and quality teams. Every sample batch matches the commercial consignment lot and includes a lot-specific Certificate of Analysis (CoA) and GC-MS chromatogram.",
    highlight: "Lot-Matched Pre-Shipment Samples",
  },
  {
    id: "ord-4",
    category: "Ordering",
    question: "What payment terms and currencies do you support?",
    answer: "We accept international Wire Transfers (T/T), Letter of Credit (L/C) for container contracts, and standard commercial banking methods. Quotations and invoices can be issued in USD, EUR, GBP, and INR.",
    highlight: "USD • EUR • GBP • T/T & L/C",
  },
  {
    id: "qual-1",
    category: "Quality",
    question: "What laboratory testing is conducted on each batch?",
    answer: "Every production batch undergoes comprehensive testing in our analytical lab: Dual Gas Chromatography-Mass Spectrometry (GC-MS) for chemical constituent profiling, Refractive Index, Optical Rotation, Specific Gravity, Peroxide Value, and microbial screening. Full batch dossiers and CoAs are provided with every delivery.",
    highlight: "Dual GC-MS Analysis • Full CoAs",
  },
  {
    id: "qual-2",
    category: "Quality",
    question: "What are Supercritical CO2 Extracts and why are they superior?",
    answer: "Supercritical CO2 extracts are natural botanical oils crafted using clean carbon dioxide gas at physiological temperatures (31.1°C) rather than extreme heat or chemical petrochemical solvents. Because no scorching heat is applied, the extracts preserve the true, fresh scent and complete bioactive profile of the living plant with zero chemical residues.",
    highlight: "100% Pure • Zero Solvent Residues",
  },
  {
    id: "qual-3",
    category: "Quality",
    question: "Are your essential oils 100% pure and unadulterated?",
    answer: "Absolutely. We supply 100% pure, natural, and therapeutic-grade essential oils. Our oils contain zero synthetic fragrances, petrochemical fillers, parabens, phthalates, or adulterants, fully complying with IFRA, IP, BP, USP, and Ph. Eur. pharmacopoeial standards.",
    highlight: "100% Pure & Natural • Pharmacopoeial Grade",
  },
  {
    id: "pack-1",
    category: "Packaging",
    question: "What bulk packaging sizes and materials do you offer?",
    answer: "We supply industrial UN-certified packaging: 1 kg, 5 kg, 10 kg, and 25 kg seamless aluminum canisters; 25 kg and 50 kg virgin food-grade HDPE carboys; and 200 kg heavy-gauge galvanized iron/epoxy-phenolic lined steel export drums fitted with Tri-Sure tamper-evident seals.",
    highlight: "5kg Aluminum • 25kg HDPE • 200kg Steel Drums",
  },
  {
    id: "pack-2",
    category: "Packaging",
    question: "Do you offer retail dropper bottling and private labeling (OEM)?",
    answer: "Yes! We provide turnkey OEM and private label services. Options include 5ml to 500ml amber, clear, cobalt blue, and matte frosted glass bottles fitted with European orifice reducers, calibrated pipettes, mist atomizers, or treatment pumps, complete with custom label printing and secondary box packing.",
    highlight: "Turnkey Private Label & Custom Closures",
  },
  {
    id: "pack-3",
    category: "Packaging",
    question: "What is cleanroom nitrogen inerting / displacement capping?",
    answer: "Nitrogen inerting purges the headspace of bottles and drums with pure food-grade nitrogen gas immediately before hermetic sealing. This displaces all atmospheric oxygen, preventing oxidation and preserving active aromatics and therapeutic potency during maritime export.",
    highlight: "Oxygen Displacement • Extended Shelf-Life",
  },
  {
    id: "ship-1",
    category: "Shipping",
    question: "Which global countries and regions do you export to?",
    answer: "We export bulk botanical consignments worldwide, including to the United States, United Kingdom, Germany, France, Australia, Canada, United Arab Emirates, Japan, and South Korea, fully complying with regional customs and import regulations.",
    highlight: "Worldwide Delivery Across Major Regions",
  },
  {
    id: "ship-2",
    category: "Shipping",
    question: "What export customs documentation accompanies shipments?",
    answer: "Every export consignment is accompanied by a full regulatory packet: Commercial Invoice, Packing List, Certificate of Analysis (CoA), Material Safety Data Sheet (MSDS / SDS 16-point), Certificate of Origin (COO), and Phytosanitary Certificates where applicable.",
    highlight: "Complete MSDS, CoA & Export Documentation",
  },
];

const CATEGORIES = [
  { id: "All", label: "All Questions", count: FAQ_DATA.length },
  { id: "General", label: "General & Company", count: FAQ_DATA.filter((f) => f.category === "General").length },
  { id: "Ordering", label: "Ordering & Dispatch", count: FAQ_DATA.filter((f) => f.category === "Ordering").length },
  { id: "Quality", label: "Quality & GC-MS", count: FAQ_DATA.filter((f) => f.category === "Quality").length },
  { id: "Packaging", label: "Packaging & OEM", count: FAQ_DATA.filter((f) => f.category === "Packaging").length },
  { id: "Shipping", label: "Shipping & Export", count: FAQ_DATA.filter((f) => f.category === "Shipping").length },
];

export function FaqsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "gen-1": true,
    "ord-1": true,
  });

  const toggleAccordion = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((faq) => {
      const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        (faq.highlight && faq.highlight.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div>
      {/* Search & Filter Bar */}
      <div style={{ maxWidth: "720px", margin: "0 auto 36px" }}>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "9999px",
            border: "1.5px solid rgba(124, 58, 237, 0.25)",
            boxShadow: "0 8px 30px rgba(24, 13, 38, 0.06)",
            padding: "6px 8px 6px 20px",
          }}
        >
          <Search size={20} color="#7C3AED" style={{ flexShrink: 0, marginRight: "12px" }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g., MOQ, 48-hour dispatch, GC-MS, CO2 extracts, packaging...)"
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              fontSize: "0.95rem",
              color: "#180D26",
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              style={{
                background: "none",
                border: "none",
                color: "#7C3AED",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                padding: "4px 12px",
              }}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "40px",
        }}
      >
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                fontSize: "0.86rem",
                fontWeight: isSelected ? 700 : 600,
                cursor: "pointer",
                border: isSelected ? "1.5px solid #7C3AED" : "1px solid rgba(124, 58, 237, 0.2)",
                backgroundColor: isSelected ? "#7C3AED" : "rgba(255, 255, 255, 0.8)",
                color: isSelected ? "#FFFFFF" : "#4A3E56",
                boxShadow: isSelected ? "0 4px 14px rgba(124, 58, 237, 0.3)" : "none",
                transition: "all 0.2s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>{cat.label}</span>
              <span
                style={{
                  fontSize: "0.72rem",
                  padding: "2px 6px",
                  borderRadius: "9999px",
                  backgroundColor: isSelected ? "rgba(255, 255, 255, 0.25)" : "rgba(124, 58, 237, 0.08)",
                  color: isSelected ? "#FFFFFF" : "#7C3AED",
                  fontWeight: 700,
                }}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* FAQs Accordion List */}
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px", marginBottom: "64px" }}>
        {filteredFaqs.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: "24px",
              border: "1px solid rgba(124, 58, 237, 0.15)",
            }}
          >
            <HelpCircle size={40} color="#7C3AED" style={{ margin: "0 auto 12px" }} />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
              No matching answers found
            </h3>
            <p style={{ color: "#5B486E", fontSize: "0.95rem", marginBottom: "20px" }}>
              Try searching with different terms or contact our commercial sales team directly.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              style={{
                padding: "8px 20px",
                borderRadius: "9999px",
                backgroundColor: "#7C3AED",
                color: "#FFFFFF",
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isExpanded = !!expandedIds[faq.id];
            return (
              <div
                key={faq.id}
                className="liquid-glass-elevated"
                style={{
                  borderRadius: "20px",
                  backgroundColor: isExpanded ? "rgba(255, 255, 255, 0.96)" : "rgba(255, 255, 255, 0.82)",
                  border: isExpanded ? "1.5px solid rgba(124, 58, 237, 0.35)" : "1px solid rgba(124, 58, 237, 0.16)",
                  boxShadow: isExpanded ? "0 8px 24px rgba(24, 13, 38, 0.06)" : "0 2px 8px rgba(24, 13, 38, 0.02)",
                  transition: "all 0.25s ease",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                  aria-expanded={isExpanded}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        padding: "3px 10px",
                        borderRadius: "9999px",
                        backgroundColor: "rgba(124, 58, 237, 0.08)",
                        color: "#7C3AED",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {faq.category}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#180D26",
                        margin: 0,
                        lineHeight: 1.35,
                      }}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: isExpanded ? "#7C3AED" : "rgba(124, 58, 237, 0.08)",
                      color: isExpanded ? "#FFFFFF" : "#7C3AED",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease, background-color 0.25s ease",
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isExpanded && (
                  <div
                    style={{
                      padding: "0 24px 22px",
                      borderTop: "1px solid rgba(124, 58, 237, 0.1)",
                      paddingTop: "16px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "#4A3E56",
                        lineHeight: 1.7,
                        margin: 0,
                        marginBottom: faq.highlight ? "14px" : "0",
                      }}
                    >
                      {faq.answer}
                    </p>

                    {faq.highlight && (
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "4px 12px",
                          borderRadius: "8px",
                          backgroundColor: "rgba(16, 185, 129, 0.08)",
                          border: "1px solid rgba(16, 185, 129, 0.25)",
                          color: "#059669",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                        }}
                      >
                        <CheckCircle2 size={14} color="#059669" />
                        <span>{faq.highlight}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Commercial Support CTA Card */}
      <div
        className="liquid-glass-elevated"
        style={{
          borderRadius: "28px",
          padding: "40px",
          background: "linear-gradient(135deg, #2A1744 0%, #180D26 100%)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "28px",
          boxShadow: "0 16px 48px rgba(24, 13, 38, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <div style={{ maxWidth: "580px" }}>
          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: "9999px",
              backgroundColor: "rgba(139, 92, 246, 0.25)",
              border: "1px solid rgba(139, 92, 246, 0.4)",
              color: "#C4B5FD",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "12px",
            }}
          >
            Direct Commercial Assistance
          </span>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "white", lineHeight: 1.25, margin: "0 0 10px 0" }}>
            Have a Specific Formulation or Volume Inquiry?
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
            Our commercial export desk and technical chemists are ready to review your botanical specifications and assist with customized quotations.
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link
            href="/contact"
            className="btn-vibrant-primary"
            style={{
              padding: "14px 28px",
              borderRadius: "9999px",
              fontWeight: 700,
              fontSize: "0.92rem",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 6px 20px rgba(124, 58, 237, 0.45)",
            }}
          >
            Contact Sales Desk <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+918043807715"
            style={{
              padding: "14px 24px",
              borderRadius: "9999px",
              fontWeight: 600,
              fontSize: "0.92rem",
              textDecoration: "none",
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Phone size={16} /> (+91 8043807715)
          </a>
        </div>
      </div>
    </div>
  );
}
