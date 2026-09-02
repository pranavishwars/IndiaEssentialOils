"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/data";
import { Footer } from "@/components/server/Footer";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Loader2,
  ArrowRight,
  Package
} from "lucide-react";
import { productStore } from "@/lib/products-store";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get("product") || "";

  const allProducts = productStore.getAll();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    selectedProduct: "General Wholesale Inquiry",
    quantityTier: "1 kg - Formulation / Evaluation Sample",
    packagingType: "Standard Industrial Bulk (Aluminum / HDPE / Steel Drums)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle pre-selected product from URL query
  useEffect(() => {
    if (prefilledProduct) {
      const found = allProducts.find(
        (p) => p.slug === prefilledProduct || p.name.toLowerCase().includes(prefilledProduct.toLowerCase())
      );
      if (found) {
        setFormData((prev) => ({
          ...prev,
          selectedProduct: `${found.name} (${found.botanicalName || "Pure Distillate"})`,
        }));
      }
    }
  }, [prefilledProduct, allProducts]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "CONTACT_AND_QUOTE",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          country: formData.country,
          productName: formData.selectedProduct !== "General Wholesale Inquiry" ? formData.selectedProduct : undefined,
          quantity: formData.quantityTier,
          packaging: formData.packagingType,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(
        err.message ||
          "An unexpected error occurred. Please try again or email us directly at info@motherherbs.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>

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
            <Building2 size={14} color="#7C3AED" /> CORPORATE HEADQUARTERS &amp; COMMERCIAL DESK
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 3.4rem)",
              fontWeight: 700,
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#180D26",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Contact Us &amp; Request Wholesale Quotes
          </h1>

          <p style={{ fontSize: "1.12rem", color: "#5B486E", maxWidth: "780px", margin: "0 auto", lineHeight: 1.7 }}>
            Connect with our New Delhi distillery headquarters. Submit wholesale pricing inquiries, custom retail dropper bottling specifications, sample requests, or general business queries.
          </p>
        </div>

        {/* 2-Column Main Layout: Form (Left) & Corporate Details (Right) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "36px", alignItems: "start" }}>

          {/* Left Column: Unified Contact & Quote Form */}
          <div
            className="liquid-glass-elevated"
            style={{
              borderRadius: "28px",
              padding: "36px 32px",
              backgroundColor: "rgba(255, 255, 255, 0.88)",
              border: "1px solid rgba(124, 58, 237, 0.22)",
              boxShadow: "0 16px 48px rgba(24, 13, 38, 0.06)",
            }}
          >
            <div style={{ marginBottom: "24px" }}>
              <h2 style={{ fontSize: "var(--font-size-h2)", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: "0 0 6px 0" }}>
                Submit Your Inquiry or Quote Request
              </h2>
              <p style={{ fontSize: "0.88rem", color: "#5B486E", margin: 0 }}>
                Our commercial desk reviews all inquiries within 24 business hours.
              </p>
            </div>

            {isSuccess ? (
              <div
                style={{
                  padding: "36px 24px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(16, 185, 129, 0.08)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    backgroundColor: "#059669",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    boxShadow: "0 6px 20px rgba(5, 150, 105, 0.35)",
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#065F46", marginBottom: "8px" }}>
                  Inquiry Received Successfully
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#047857", lineHeight: 1.6, maxWidth: "460px", margin: "0 auto 20px" }}>
                  Thank you, <strong>{formData.name}</strong>. Our technical export team has received your request and will respond to <strong>{formData.email}</strong> with complete pricing and specifications.
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
                  <a
                    href={`mailto:${COMPANY_INFO.contact.salesEmail}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "10px 20px",
                      borderRadius: "9999px",
                      backgroundColor: "#7C3AED",
                      color: "white",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 4px 14px rgba(124, 58, 237, 0.3)",
                    }}
                  >
                    <Mail size={16} /> Email Sales Team
                  </a>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        country: "",
                        selectedProduct: "General Wholesale Inquiry",
                        quantityTier: "1 kg - Formulation / Evaluation Sample",
                        packagingType: "Standard Industrial Bulk (Aluminum / HDPE / Steel Drums)",
                        message: "",
                      });
                    }}
                    style={{
                      padding: "10px 20px",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(124, 58, 237, 0.1)",
                      border: "1px solid rgba(124, 58, 237, 0.25)",
                      color: "#7C3AED",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {errorMessage && (
                  <div
                    style={{
                      padding: "12px 16px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(239, 68, 68, 0.1)",
                      border: "1px solid rgba(239, 68, 68, 0.25)",
                      color: "#DC2626",
                      fontSize: "0.86rem",
                    }}
                  >
                    {errorMessage}
                  </div>
                )}

                {/* Name & Email */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px", minHeight: "18px" }}>
                      Your Full Name <span style={{ color: "#EF4444" }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.22)",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        fontSize: "0.9rem",
                        color: "#180D26",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px", minHeight: "18px" }}>
                      Business Email <span style={{ color: "#EF4444" }}>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.22)",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        fontSize: "0.9rem",
                        color: "#180D26",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>

                {/* Phone & Company (Aligned) */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px", minHeight: "18px", whiteSpace: "nowrap" }}>
                      Phone Number (with Country Code)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.22)",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        fontSize: "0.9rem",
                        color: "#180D26",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px", minHeight: "18px", whiteSpace: "nowrap" }}>
                      Company Name / Brand
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Aromatics LLC"
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.22)",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        fontSize: "0.9rem",
                        color: "#180D26",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>

                {/* Country / Destination */}
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px", minHeight: "18px" }}>
                    Destination Country / Region
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. United States, Australia, Germany, UAE, New Zealand..."
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "12px",
                      border: "1px solid rgba(124, 58, 237, 0.22)",
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      fontSize: "0.9rem",
                      color: "#180D26",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                {/* Product Selection */}
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px", minHeight: "18px" }}>
                    Product of Interest
                  </label>
                  <select
                    value={formData.selectedProduct}
                    onChange={(e) => setFormData({ ...formData, selectedProduct: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "12px",
                      border: "1px solid rgba(124, 58, 237, 0.22)",
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      fontSize: "0.9rem",
                      color: "#180D26",
                      outline: "none",
                      cursor: "pointer",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="General Wholesale Inquiry">General Wholesale / Multi-Product Inquiry</option>
                    <optgroup label="Popular Essential Oils &amp; CO2 Extracts">
                      <option value="Jasmine CO2 Extract (Jasminum sambac)">Jasmine CO₂ Extract</option>
                      <option value="Cardamom CO2 Extract (Elettaria cardamomum)">Cardamom CO₂ Extract</option>
                      <option value="Lavender Essential Oil (Lavandula angustifolia)">Lavender Essential Oil</option>
                      <option value="Indian Sandalwood Oil (Santalum album)">Indian Sandalwood Oil</option>
                      <option value="Peppermint Essential Oil (Mentha piperita)">Peppermint Essential Oil</option>
                      <option value="Tea Tree Essential Oil (Melaleuca alternifolia)">Tea Tree Essential Oil</option>
                      <option value="Frankincense Essential Oil (Boswellia serrata)">Frankincense Essential Oil</option>
                      <option value="Rose Damascena Absolute (Rosa damascena)">Rose Damascena Absolute</option>
                      <option value="Golden Jojoba Carrier Oil (Simmondsia chinensis)">Golden Jojoba Carrier Oil</option>
                      <option value="Virgin Argan Carrier Oil (Argania spinosa)">Virgin Argan Carrier Oil</option>
                      <option value="Kumkumadi Ayurvedic Tailam">Kumkumadi Ayurvedic Tailam</option>
                    </optgroup>
                    <optgroup label="All 238+ Botanical Distillates">
                      {allProducts.map((p) => (
                        <option key={p.slug} value={`${p.name} (${p.botanicalName || "Pure"})`}>
                          {p.name} {p.botanicalName ? `(${p.botanicalName})` : ""}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Quantity Tier & Packaging Preference */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px", minHeight: "18px" }}>
                      Estimated Order Volume
                    </label>
                    <select
                      value={formData.quantityTier}
                      onChange={(e) => setFormData({ ...formData, quantityTier: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.22)",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        fontSize: "0.88rem",
                        color: "#180D26",
                        outline: "none",
                        cursor: "pointer",
                        boxSizing: "border-box",
                      }}
                    >
                      <option value="1 kg - Formulation / Evaluation Sample">1 kg - Formulation / Evaluation Sample</option>
                      <option value="5 kg - 25 kg Aluminum Canisters">5 kg - 25 kg Aluminum Canisters</option>
                      <option value="25 kg - 50 kg HDPE Carboy">25 kg - 50 kg HDPE Carboy</option>
                      <option value="200 kg UN Steel Export Drum">200 kg UN Steel Export Drum</option>
                      <option value="Metric Ton / Multi-Drum Contract">Metric Ton / Multi-Drum Contract</option>
                      <option value="Retail Private Label Droppers (10ml–500ml)">Retail Private Label Droppers (10ml–500ml)</option>
                      <option value="General Corporate Question / Other">General Corporate Question / Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px", minHeight: "18px" }}>
                      Packaging Preference
                    </label>
                    <select
                      value={formData.packagingType}
                      onChange={(e) => setFormData({ ...formData, packagingType: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.22)",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        fontSize: "0.88rem",
                        color: "#180D26",
                        outline: "none",
                        cursor: "pointer",
                        boxSizing: "border-box",
                      }}
                    >
                      <option value="Standard Industrial Bulk (Aluminum / HDPE / Steel Drums)">Standard Industrial Bulk (Aluminum / HDPE / Steel Drums)</option>
                      <option value="Retail Glass Dropper Bottles (10ml–500ml Amber/Clear/Matte)">Retail Glass Dropper Bottles (10ml–500ml Amber/Clear/Matte)</option>
                      <option value="Outer Cushion Box Packing & Secondary Cartons">Outer Cushion Box Packing &amp; Secondary Cartons</option>
                      <option value="Custom OEM Private Labeling & Printing">Custom OEM Private Labeling &amp; Printing</option>
                      <option value="Nitrogen Inerting / Displacement Capping">Nitrogen Inerting / Displacement Capping</option>
                    </select>
                  </div>
                </div>

                {/* Message Details */}
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "6px", minHeight: "18px" }}>
                    Inquiry Details / Specific Requirements
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding target botanical grades, custom labeling specifications, target delivery timeline, or any questions..."
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1px solid rgba(124, 58, 237, 0.22)",
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      fontSize: "0.9rem",
                      color: "#180D26",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-vibrant-primary"
                  style={{
                    padding: "14px 28px",
                    borderRadius: "9999px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    border: "none",
                    cursor: isSubmitting ? "wait" : "pointer",
                    boxShadow: "0 6px 20px rgba(124, 58, 237, 0.4)",
                    marginTop: "6px",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Inquiry &amp; Quote Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Corporate Headquarters & Official Contacts */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            {/* Corporate Headquarters Plaque */}
            <div
              className="liquid-glass"
              style={{
                borderRadius: "28px",
                padding: "36px",
                backgroundColor: "rgba(255, 255, 255, 0.88)",
                border: "1px solid rgba(124, 58, 237, 0.22)",
                boxShadow: "0 16px 48px rgba(24, 13, 38, 0.05)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <Building2 size={24} color="#7C3AED" />
                <h2 style={{ fontSize: "var(--font-size-h2)", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: 0 }}>
                  Corporate Headquarters
                </h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                    Company Structure
                  </div>
                  <div style={{ fontSize: "1.05rem", color: "#180D26", fontWeight: 700 }}>
                    {COMPANY_INFO.name}
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "#5B486E" }}>
                    A Division of {COMPANY_INFO.parentCompany}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                    Plant &amp; Office Location
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "#180D26", display: "flex", alignItems: "flex-start", gap: "8px", lineHeight: 1.5 }}>
                    <MapPin size={18} color="#7C3AED" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span>{COMPANY_INFO.contact.address}</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                    Operating Hours
                  </div>
                  <div style={{ fontSize: "0.92rem", color: "#180D26", display: "flex", alignItems: "center", gap: "8px" }}>
                    <Clock size={16} color="#7C3AED" /> Monday &ndash; Saturday: 9:00 AM &ndash; 6:30 PM (IST)
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                    Official Contacts
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "#180D26", display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <Mail size={16} color="#7C3AED" />
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} style={{ color: "#180D26", textDecoration: "none" }}>
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "#180D26", display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <Mail size={16} color="#7C3AED" />
                    <a href={`mailto:${COMPANY_INFO.contact.salesEmail}`} style={{ color: "#180D26", textDecoration: "none" }}>
                      {COMPANY_INFO.contact.salesEmail}
                    </a>
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "#180D26", display: "flex", alignItems: "center", gap: "8px" }}>
                    <Phone size={16} color="#7C3AED" />
                    <a href={`tel:${COMPANY_INFO.contact.phone}`} style={{ color: "#180D26", textDecoration: "none" }}>
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#FCFAF6" }}>
          <Loader2 size={32} color="#7C3AED" className="animate-spin" />
        </div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}
