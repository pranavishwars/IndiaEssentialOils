"use client";

import React, { useState } from "react";
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
  Calculator,
  ArrowRight,
  HelpCircle,
  Loader2
} from "lucide-react";
import { ScrollReveal } from "@/components/client/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "General Inquiry & Information",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "CONTACT",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message.");
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
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1140px", margin: "0 auto", width: "100%" }}>

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
            <Building2 size={14} color="#7C3AED" /> Corporate Headquarters & Plant Contacts
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
            Contact India Essential Oils
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "680px", margin: "0 auto", lineHeight: 1.7 }}>
            Connect with our corporate office, distillation distillery facilities, customer support, or technical quality teams in New Delhi, India.
          </p>
        </div>

        {/* Cross-Link Banner: Dedicated Request Quote Redirect */}
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
            <Calculator size={20} color="#7C3AED" />
            <div style={{ fontSize: "0.92rem", color: "#180D26" }}>
              <strong>Looking for Bulk Commercial Pricing, Volume Discounts, or Custom Drum Quotes?</strong>{" "}
              <span style={{ color: "#5B486E" }}>For B2B wholesale price sheets, custom blends, and CoA requests, use our quote desk.</span>
            </div>
          </div>

          <Link
            href="/request-quote"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "#7C3AED",
              color: "white",
              padding: "8px 18px",
              borderRadius: "9999px",
              fontWeight: 700,
              fontSize: "0.85rem",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3)",
              transition: "all 0.2s ease",
            }}
          >
            <span>Commercial Quote Desk</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 2-Column Contact Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "48px", alignItems: "start" }}>

          {/* Left Column: Headquarters & Direct Directory */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            {/* Headquarters Glass Card */}
            <div
              className="liquid-glass"
              style={{
                borderRadius: "28px",
                padding: "36px",
                backgroundColor: "rgba(255, 255, 255, 0.76)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                boxShadow: "0 8px 32px rgba(24, 13, 38, 0.04)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
                <Building2 size={22} color="#7C3AED" />
                <h2 style={{ fontSize: "1.35rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: 0 }}>
                  Corporate Headquarters
                </h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
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
                    Facility Location
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "#180D26", display: "flex", alignItems: "center", gap: "6px" }}>
                    <MapPin size={16} color="#7C3AED" /> {COMPANY_INFO.contact.address}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                    Operating Hours
                  </div>
                  <div style={{ fontSize: "0.92rem", color: "#180D26", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Clock size={16} color="#7C3AED" /> Monday &ndash; Saturday: 9:00 AM &ndash; 6:30 PM (IST)
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                    Official Contacts
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "#180D26", display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                    <Mail size={16} color="#7C3AED" /> {COMPANY_INFO.contact.email}
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "#180D26", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Phone size={16} color="#7C3AED" /> +91-11-27041414 / +91-9810000000
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Support Email Desk Card */}
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
                border: "1px solid rgba(124, 58, 237, 0.18)"
              }}
            >
              <div>
                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#180D26", marginBottom: "2px" }}>
                  Direct Executive Support
                </div>
                <div style={{ fontSize: "0.85rem", color: "#5B486E" }}>
                  Email our corporate team at <strong style={{ color: "#7C3AED" }}>pranavishwars@gmail.com</strong>
                </div>
              </div>

              <a
                href="mailto:pranavishwars@gmail.com?subject=Direct%20Corporate%20Inquiry"
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
                <Mail size={16} /> Email Us
              </a>
            </div>

          </div>

          {/* Right Column: General Contact Form */}
          <div
            className="liquid-glass-elevated"
            style={{
              borderRadius: "28px",
              padding: "36px",
              backgroundColor: "rgba(255, 255, 255, 0.82)",
              border: "1px solid rgba(124, 58, 237, 0.25)",
              boxShadow: "0 16px 48px rgba(24, 13, 38, 0.08)"
            }}
          >
            {isSuccess ? (
              <div style={{ textAlign: "center", padding: "32px 12px" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    color: "#059669",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "8px" }}>
                  Message Transmitted
                </h3>
                <p style={{ fontSize: "0.95rem", color: "#5B486E", lineHeight: 1.6, marginBottom: "24px" }}>
                  Thank you, <strong>{formData.name}</strong>. Your correspondence has been routed to our corporate administration. We will reply to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData(prev => ({ ...prev, message: "" }));
                  }}
                  style={{
                    background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "12px 28px",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(124, 58, 237, 0.4)",
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div>
                <h2 style={{ fontSize: "1.45rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "4px" }}>
                  Send a General Message
                </h2>
                <p style={{ fontSize: "0.88rem", color: "#5B486E", marginBottom: "24px" }}>
                  For general business inquiries, technical questions, or corporate communications.
                </p>

                {errorMessage && (
                  <div style={{ padding: "12px 16px", borderRadius: "12px", backgroundColor: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.25)", color: "#DC2626", fontSize: "0.88rem", marginBottom: "16px" }}>
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.825rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.25)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        fontSize: "0.9rem",
                        color: "#180D26",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.825rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: "12px",
                          border: "1px solid rgba(124, 58, 237, 0.25)",
                          backgroundColor: "rgba(255, 255, 255, 0.9)",
                          fontSize: "0.9rem",
                          color: "#180D26",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.825rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                        Phone / Mobile
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 / +1 ..."
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: "12px",
                          border: "1px solid rgba(124, 58, 237, 0.25)",
                          backgroundColor: "rgba(255, 255, 255, 0.9)",
                          fontSize: "0.9rem",
                          color: "#180D26",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.825rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: "12px",
                          border: "1px solid rgba(124, 58, 237, 0.25)",
                          backgroundColor: "rgba(255, 255, 255, 0.9)",
                          fontSize: "0.9rem",
                          color: "#180D26",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.825rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                        Inquiry Subject *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: "12px",
                          border: "1px solid rgba(124, 58, 237, 0.25)",
                          backgroundColor: "rgba(255, 255, 255, 0.9)",
                          fontSize: "0.85rem",
                          color: "#180D26",
                          outline: "none",
                          cursor: "pointer",
                          boxSizing: "border-box",
                        }}
                      >
                        <option value="General Inquiry & Information">General Inquiry</option>
                        <option value="Customer Support & Order Status">Customer Support & Tracking</option>
                        <option value="Quality Assurance & Lab Audits">Quality & Factory Audits</option>
                        <option value="Partnership, Distribution & Agency">Partnership & Distribution</option>
                        <option value="Media, Press & Corporate Affairs">Media & Press</option>
                        <option value="Career & Research Opportunities">Careers & Research</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.825rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can we assist you today?"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.25)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        fontSize: "0.9rem",
                        color: "#180D26",
                        outline: "none",
                        boxSizing: "border-box",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                      color: "white",
                      border: "none",
                      borderRadius: "9999px",
                      padding: "14px 28px",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      boxShadow: "0 4px 16px rgba(124, 58, 237, 0.4)",
                      transition: "all 0.2s ease",
                      marginTop: "6px",
                    }}
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        <span>Submit General Inquiry</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
