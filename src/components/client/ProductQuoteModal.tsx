"use client";

import React, { useState } from "react";
import { Product } from "@/lib/products-store";
import { X, Send, CheckCircle2, Building2, Mail, User, Globe, Package } from "lucide-react";

interface ProductQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export function ProductQuoteModal({ isOpen, onClose, product }: ProductQuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    quantity: "1 kg (Formulation & Store MOQ)",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Dispatch full quotation payload to email enquiry route
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "PDP_MODAL",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          country: formData.country,
          productName: `${product.name} (${product.shortSpec || product.botanicalName || ""})`,
          quantity: formData.quantity,
          message: formData.message,
        }),
      });

      // 2. Fire analytics INQUIRY event
      await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          type: "INQUIRY",
        }),
      });
    } catch (err) {
      console.error("Failed to log inquiry event or email dispatch:", err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: "var(--z-modal)" as unknown as number,
        backgroundColor: "rgba(24, 13, 38, 0.7)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        animation: "fadeIn 0.2s ease-out",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "540px",
          backgroundColor: "rgba(252, 250, 246, 0.92)",
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          borderRadius: "28px",
          border: "1px solid rgba(124, 58, 237, 0.25)",
          boxShadow: "0 24px 60px rgba(24, 13, 38, 0.3)",
          padding: "32px",
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            backgroundColor: "rgba(124, 58, 237, 0.1)",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#180D26",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          <div style={{ textAlign: "center", padding: "24px 8px" }}>
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
              Quote Request Received
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#5B486E", lineHeight: 1.6, marginBottom: "24px" }}>
              Thank you! Our wholesale sales desk will send tiered commercial pricing, specifications, and CoA documentation for <strong>{product.name}</strong> to your email within 2 hours.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <button
                onClick={onClose}
                className="btn-vibrant-primary"
                style={{
                  color: "white",
                  border: "none",
                  borderRadius: "9999px",
                  padding: "14px 24px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  boxShadow: "0 4px 18px rgba(124, 58, 237, 0.45)",
                }}
              >
                Back to Product Details
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: "20px" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                B2B Bulk Pricing & CoA Request
              </span>
              <h2 style={{ fontSize: "1.45rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "2px" }}>
                {product.name}
              </h2>
              <div style={{ fontSize: "0.82rem", color: "#5B486E", fontStyle: "italic" }}>
                {product.shortSpec}
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "4px" }}>
                  Your Full Name *
                </label>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <User size={16} color="#7C3AED" style={{ position: "absolute", left: "12px" }} />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Sarah Jenkins"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px 12px 38px",
                      borderRadius: "12px",
                      border: "1px solid rgba(124, 58, 237, 0.25)",
                      backgroundColor: "white",
                      fontSize: "0.9rem",
                      color: "#180D26",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "4px" }}>
                  Business Email *
                </label>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <Mail size={16} color="#7C3AED" style={{ position: "absolute", left: "12px" }} />
                  <input
                    type="email"
                    required
                    placeholder="procurement@brand.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px 12px 38px",
                      borderRadius: "12px",
                      border: "1px solid rgba(124, 58, 237, 0.25)",
                      backgroundColor: "white",
                      fontSize: "0.9rem",
                      color: "#180D26",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "4px" }}>
                    Company / Organization *
                  </label>
                  <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                    <Building2 size={16} color="#7C3AED" style={{ position: "absolute", left: "12px" }} />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Botanica Ltd."
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px 12px 38px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.25)",
                        backgroundColor: "white",
                        fontSize: "0.9rem",
                        color: "#180D26",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "4px" }}>
                    Country / Destination *
                  </label>
                  <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                    <Globe size={16} color="#7C3AED" style={{ position: "absolute", left: "12px" }} />
                    <input
                      type="text"
                      required
                      placeholder="e.g. United States"
                      value={formData.country}
                      onChange={e => setFormData({ ...formData, country: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px 12px 38px",
                        borderRadius: "12px",
                        border: "1px solid rgba(124, 58, 237, 0.25)",
                        backgroundColor: "white",
                        fontSize: "0.9rem",
                        color: "#180D26",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "4px" }}>
                  Estimated Bulk Quantity *
                </label>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <Package size={16} color="#7C3AED" style={{ position: "absolute", left: "12px" }} />
                  <select
                    value={formData.quantity}
                    onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px 12px 38px",
                      borderRadius: "12px",
                      border: "1px solid rgba(124, 58, 237, 0.25)",
                      backgroundColor: "white",
                      fontSize: "0.9rem",
                      color: "#180D26",
                      outline: "none",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    <option value="1 kg (Formulation & Store MOQ)">1 kg (Formulation & Store MOQ)</option>
                    <option value="5 kg (Pilot Batch Canister)">5 kg Pilot Batch Canister</option>
                    <option value="25 kg (Industrial Carboy)">25 kg Industrial Carboy</option>
                    <option value="50 kg (UN Steel Drum)">50 kg UN Steel Drum</option>
                    <option value="100 kg (Dual Drum Lot)">100 kg Dual Drum Lot</option>
                    <option value="200 kg (Full Export Drum)">200 kg Full Export Steel Drum</option>
                    <option value="1,000 kg+ (Metric Ton / FCL)">1,000 kg+ (Metric Ton / FCL Consignment)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#180D26", marginBottom: "4px" }}>
                  Custom Specs & Delivery Target
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention any custom specifications, target delivery month, or documentation needed (CoA, GC-MS, MSDS, Organic Cert)..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    border: "1px solid rgba(124, 58, 237, 0.25)",
                    backgroundColor: "white",
                    fontSize: "0.9rem",
                    color: "#180D26",
                    outline: "none",
                    fontFamily: "inherit",
                    resize: "none",
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "9999px",
                  padding: "14px 28px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  boxShadow: "0 4px 18px rgba(124, 58, 237, 0.45)",
                  marginTop: "6px",
                  transition: "all 0.2s",
                }}
              >
                {isSubmitting ? "Submitting Request..." : <><Send size={16} /> Submit Wholesale Request</>}
              </button>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
