"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/server/Footer";
import {
  Calculator,
  Send,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Globe2,
  Clock,
  ArrowRight,
  Building2,
  Sparkles,
  Mail,
  Loader2
} from "lucide-react";
import { ScrollReveal } from "@/components/client/ScrollReveal";
import { PRODUCT_CATEGORIES } from "@/lib/data";
import { INITIAL_PRODUCTS } from "@/lib/products-store";

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    selectedProduct: "Lavender Essential Oil (Lavandula angustifolia)",
    quantityTier: "25 kg - Commercial Carboy",
    packagingType: "UN Epoxy-Lined Drums (200kg)",
    incoterms: "CIF (Cost, Insurance & Freight to Destination Port)",
    destinationPort: "",
    requiredDocs: ["Certificate of Analysis (CoA)", "GC-MS Chromatography Report"],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDocToggle = (doc: string) => {
    setFormData(prev => ({
      ...prev,
      requiredDocs: prev.requiredDocs.includes(doc)
        ? prev.requiredDocs.filter(d => d !== doc)
        : [...prev.requiredDocs, doc],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "QUOTE",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          country: formData.country,
          productName: formData.selectedProduct,
          quantity: formData.quantityTier,
          packaging: formData.packagingType,
          incoterms: formData.incoterms,
          destinationPort: formData.destinationPort,
          requiredDocs: formData.requiredDocs,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit quote request.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "An unexpected error occurred. Please try again or email us directly at pranavishwars@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1180px", margin: "0 auto", width: "100%" }}>

        {/* Page Header */}
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
            }}
          >
            <Calculator size={14} color="#7C3AED" /> B2B Commercial Quotes Desk
          </div>

          <h1
            style={{
              fontSize: "clamp(2.3rem, 4vw, 3.2rem)",
              fontWeight: 700,
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#180D26",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Request a Commercial Wholesale Quotation
          </h1>

          <p style={{ fontSize: "1.1rem", color: "#5B486E", maxWidth: "720px", margin: "0 auto", lineHeight: 1.65 }}>
            Direct factory pricing, tiered volume discounts (1 kg to 200 kg steel drums), and complete regulatory documentation (CoA, GC-MS, MSDS) for global cosmetic, pharmaceutical, and aromatherapy brands.
          </p>
        </div>

        {/* Cross-Link Banner: Redirect to General Contact if needed */}
        <div
          style={{
            backgroundColor: "rgba(124, 58, 237, 0.06)",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            border: "1px solid rgba(124, 58, 237, 0.22)",
            borderRadius: "20px",
            padding: "16px 24px",
            marginBottom: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "14px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Building2 size={20} color="#7C3AED" />
            <div style={{ fontSize: "0.92rem", color: "#180D26" }}>
              <strong>Looking for Corporate Office Info, Factory Address, or General Support?</strong>{" "}
              <span style={{ color: "#5B486E" }}>For general inquiries and visiting hours, use our general contact page.</span>
            </div>
          </div>

          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(124, 58, 237, 0.3)",
              color: "#7C3AED",
              padding: "8px 18px",
              borderRadius: "9999px",
              fontWeight: 700,
              fontSize: "0.85rem",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
          >
            <span>Visit Contact Page</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Main 2-Column Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "40px", alignItems: "start" }}>

          {/* Left Column: Sourcing Guarantees & Direct Email Desk */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            {/* B2B Export Pillars Card */}
            <div
              className="liquid-glass"
              style={{
                borderRadius: "28px",
                padding: "36px 30px",
                backgroundColor: "rgba(255, 255, 255, 0.76)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                boxShadow: "0 8px 32px rgba(24, 13, 38, 0.04)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "22px" }}>
                <Sparkles size={22} color="#7C3AED" />
                <h2 style={{ fontSize: "1.3rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: 0 }}>
                  Wholesale Procurement Advantage
                </h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", backgroundColor: "rgba(124, 58, 237, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <ShieldCheck size={18} color="#7C3AED" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "0.98rem", fontWeight: 700, color: "#180D26", margin: "0 0 4px 0" }}>
                      100% GC-MS Authenticated
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "#5B486E", margin: 0, lineHeight: 1.5 }}>
                      Zero diluents, artificial boosters, or synthetic phthalates. Every drum includes full chromatographic batch spectra.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", backgroundColor: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Clock size={18} color="#059669" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "0.98rem", fontWeight: 700, color: "#180D26", margin: "0 0 4px 0" }}>
                      24–48h International Dispatch
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "#5B486E", margin: 0, lineHeight: 1.5 }}>
                      Ex-stock inventory maintained year-round in New Delhi for rapid air express & container ocean shipping.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", backgroundColor: "rgba(217, 119, 6, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Globe2 size={18} color="#D97706" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "0.98rem", fontWeight: 700, color: "#180D26", margin: "0 0 4px 0" }}>
                      Worldwide Export Compliance
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "#5B486E", margin: 0, lineHeight: 1.5 }}>
                      Conforms with US FDA, EU Cosmetics Regulation EC No 1223/2009, IFRA 51st Amendment, and REACH standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Commercial Email Desk Card */}
            <div
              className="liquid-glass"
              style={{
                borderRadius: "24px",
                padding: "26px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
                backgroundColor: "rgba(255, 255, 255, 0.76)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
              }}
            >
              <div>
                <div style={{ fontSize: "1.02rem", fontWeight: 700, color: "#180D26", marginBottom: "3px" }}>
                  Direct Procurement Inquiry?
                </div>
                <div style={{ fontSize: "0.84rem", color: "#5B486E" }}>
                  Email directly to <strong style={{ color: "#7C3AED" }}>pranavishwars@gmail.com</strong>
                </div>
              </div>

              <a
                href="mailto:pranavishwars@gmail.com?subject=B2B%20Wholesale%20Quote%20Request"
                className="btn-vibrant-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "11px 20px",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(124, 58, 237, 0.35)",
                }}
              >
                <Mail size={16} /> Email Sales Desk
              </a>
            </div>

          </div>

          {/* Right Column: Commercial Quote Form */}
          <div
            className="liquid-glass-elevated"
            style={{
              borderRadius: "28px",
              padding: "36px",
              backgroundColor: "rgba(255, 255, 255, 0.82)",
              backdropFilter: "blur(24px) saturate(160%)",
              WebkitBackdropFilter: "blur(24px) saturate(160%)",
              border: "1px solid rgba(124, 58, 237, 0.25)",
              boxShadow: "0 16px 48px rgba(24, 13, 38, 0.08)",
            }}
          >
            {isSuccess ? (
              <div style={{ textAlign: "center", padding: "40px 12px" }}>
                <div
                  style={{
                    width: "68px",
                    height: "68px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    color: "#059669",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: "1.45rem", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
                  Quote Request Dispatched!
                </h3>
                <p style={{ fontSize: "0.95rem", color: "#5B486E", lineHeight: 1.6, maxWidth: "420px", margin: "0 auto 24px" }}>
                  Thank you, <strong>{formData.name}</strong>. Your commercial quotation request for <strong>{formData.selectedProduct}</strong> has been transmitted to our export sales desk. A formal proforma quote will be delivered to <strong>{formData.email}</strong> within 4 business hours.
                </p>

                <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData(prev => ({ ...prev, message: "" }));
                    }}
                    style={{
                      padding: "10px 22px",
                      borderRadius: "9999px",
                      border: "1px solid rgba(124, 58, 237, 0.3)",
                      backgroundColor: "white",
                      color: "#7C3AED",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      cursor: "pointer",
                    }}
                  >
                    Submit Another Quote
                  </button>
                  <Link
                    href="/products"
                    style={{
                      padding: "10px 22px",
                      borderRadius: "9999px",
                      backgroundColor: "#7C3AED",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      textDecoration: "none",
                    }}
                  >
                    Browse Full Catalog
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#180D26", margin: "0 0 4px 0" }}>
                    Commercial Quotation Parameters
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#5B486E", margin: 0 }}>
                    Please specify your target botanical oils, required volumes, and delivery terms.
                  </p>
                </div>

                {errorMessage && (
                  <div style={{ padding: "12px 16px", borderRadius: "12px", backgroundColor: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.25)", color: "#DC2626", fontSize: "0.88rem" }}>
                    {errorMessage}
                  </div>
                )}

                {/* Product Selection */}
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                    Botanical Product *
                  </label>
                  <select
                    value={formData.selectedProduct}
                    onChange={e => setFormData({ ...formData, selectedProduct: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "12px",
                      border: "1px solid rgba(124, 58, 237, 0.25)",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      fontSize: "0.9rem",
                      color: "#180D26",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    {INITIAL_PRODUCTS.map(p => (
                      <option key={p.id} value={`${p.name} (${p.botanicalName || p.shortSpec})`}>
                        {p.name} {p.botanicalName ? `(${p.botanicalName})` : ""}
                      </option>
                    ))}
                    <option value="Multiple Products / Custom Inquiry">Multiple Botanical Oils / Custom Blend</option>
                  </select>
                </div>

                {/* Quantity & Packaging Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                      Target Volume *
                    </label>
                    <select
                      value={formData.quantityTier}
                      onChange={e => setFormData({ ...formData, quantityTier: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.25)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        fontSize: "0.85rem",
                        color: "#180D26",
                        outline: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option value="25 kg - Commercial Carboy">25 kg Industrial Carboy (Wholesale MOQ)</option>
                      <option value="50 kg - UN Steel Drum">50 kg UN Steel Drum</option>
                      <option value="100 kg - Dual Drum Lot">100 kg Dual Drum Lot</option>
                      <option value="200 kg - Full Export Steel Drum">200 kg Full Export Steel Drum</option>
                      <option value="1,000 kg - 5,000 kg+ Bulk Consignment">1,000 kg – 5,000 kg+ (Metric Ton / FCL Consignment)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                      Packaging Preference
                    </label>
                    <select
                      value={formData.packagingType}
                      onChange={e => setFormData({ ...formData, packagingType: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.25)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        fontSize: "0.85rem",
                        color: "#180D26",
                        outline: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option value="UN Epoxy-Lined Drums (200kg)">200 kg UN Epoxy-Lined Steel Drums</option>
                      <option value="UN-Approved Steel Drums (50kg)">50 kg UN-Approved Steel Drums</option>
                      <option value="HDPE Fluorinated Carboys (25kg)">25 kg HDPE Fluorinated Carboys</option>
                      <option value="IBC Totes (1000kg)">1,000 kg IBC Totes</option>
                    </select>
                  </div>
                </div>

                {/* Incoterms & Destination */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                      Incoterms
                    </label>
                    <select
                      value={formData.incoterms}
                      onChange={e => setFormData({ ...formData, incoterms: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.25)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        fontSize: "0.85rem",
                        color: "#180D26",
                        outline: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option value="CIF (Cost, Insurance & Freight)">CIF (Destination Port)</option>
                      <option value="FOB (Free on Board New Delhi)">FOB (New Delhi)</option>
                      <option value="EXW (Ex Works Factory)">EXW (Factory Direct)</option>
                      <option value="DDP (Delivered Duty Paid)">DDP (Door to Door)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                      Destination Port / Country *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rotterdam, New York, Dubai"
                      value={formData.destinationPort}
                      onChange={e => setFormData({ ...formData, destinationPort: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.25)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        fontSize: "0.88rem",
                        color: "#180D26",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>

                {/* Required Documents Checkboxes */}
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "8px" }}>
                    Required Regulatory Documentation:
                  </label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {[
                      "Certificate of Analysis (CoA)",
                      "GC-MS Chromatography Report",
                      "MSDS (OSHA/GHS)",
                      "IFRA 51st Dossier",
                      "USDA/EU Organic Cert",
                    ].map(doc => {
                      const isChecked = formData.requiredDocs.includes(doc);
                      return (
                        <button
                          key={doc}
                          type="button"
                          onClick={() => handleDocToggle(doc)}
                          style={{
                            padding: "6px 12px",
                            borderRadius: "8px",
                            border: isChecked ? "1px solid #7C3AED" : "1px solid rgba(124, 58, 237, 0.2)",
                            backgroundColor: isChecked ? "rgba(124, 58, 237, 0.12)" : "rgba(255, 255, 255, 0.6)",
                            color: isChecked ? "#7C3AED" : "#5B486E",
                            fontSize: "0.78rem",
                            fontWeight: isChecked ? 700 : 500,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            transition: "all 0.15s ease",
                          }}
                        >
                          <FileText size={12} color={isChecked ? "#7C3AED" : "#7A6985"} />
                          {doc}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Buyer Profile Fields */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.25)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        fontSize: "0.88rem",
                        color: "#180D26",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@brand.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.25)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        fontSize: "0.88rem",
                        color: "#180D26",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Cosmetics Ltd"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.25)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        fontSize: "0.88rem",
                        color: "#180D26",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                      Phone / Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.25)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        fontSize: "0.88rem",
                        color: "#180D26",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>

                {/* Additional Specifications */}
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                    Special Specifications or Custom Inquiries (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specific chemotype requirements, target delivery dates, or private label details..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1px solid rgba(124, 58, 237, 0.25)",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      fontSize: "0.88rem",
                      color: "#180D26",
                      outline: "none",
                      boxSizing: "border-box",
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    width: "100%",
                    padding: "15px",
                    backgroundColor: "#7C3AED",
                    color: "white",
                    border: "none",
                    borderRadius: "9999px",
                    fontSize: "1rem",
                    fontWeight: 700,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    boxShadow: "0 6px 20px rgba(124, 58, 237, 0.4)",
                    transition: "all 0.2s ease",
                  }}
                >
                  {isSubmitting ? (
                    "Transmitting Quote Request..."
                  ) : (
                    <>
                      <span>Submit Commercial Quote Request</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
