"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Product, INITIAL_PRODUCTS, getCategorySlug } from "@/lib/products-store";
import { ProductImageGallery } from "@/components/client/ProductImageGallery";
import { ProductPurchasePanel } from "@/components/client/ProductPurchasePanel";
import { ProductStickyTabBar } from "@/components/client/ProductStickyTabBar";
import { ProductQuoteModal } from "@/components/client/ProductQuoteModal";
import { ProductMobileStickyBar } from "@/components/client/ProductMobileStickyBar";
import {
  ShieldCheck,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  AlertCircle
} from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";

interface ProductDetailViewProps {
  product: Product;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const categorySlug = getCategorySlug(product.category);

  useEffect(() => {
    // Log VIEW event for popularity engine
    fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: product.id, type: "VIEW" }),
    }).catch(() => { });
  }, [product.id]);

  // Related products from same category (excluding current)
  const relatedProducts = INITIAL_PRODUCTS
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  // Fallback if less than 4 in same category: grab top popular oils
  const finalRelated = relatedProducts.length >= 3
    ? relatedProducts
    : [
      ...relatedProducts,
      ...INITIAL_PRODUCTS.filter(p => p.id !== product.id && !relatedProducts.some(r => r.id === p.id)).slice(0, 4 - relatedProducts.length)
    ];

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", paddingTop: "100px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 28px" }}>

        {/* Back Button Navigation */}
        <div style={{ marginBottom: "20px" }}>
          <Link
            href={`/products/${categorySlug}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              color: "#5B486E",
              fontSize: "0.85rem",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 2px 10px rgba(24, 13, 38, 0.03)",
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateX(-3px)";
              e.currentTarget.style.color = "#7C3AED";
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.4)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(124, 58, 237, 0.12)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.color = "#5B486E";
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.2)";
              e.currentTarget.style.boxShadow = "0 2px 10px rgba(24, 13, 38, 0.03)";
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to {product.category.replace(/_/g, " ").toLowerCase().replace(/\b\w/g, c => c.toUpperCase())}</span>
          </Link>
        </div>

        {/* ZONE 1: Above-the-fold */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "48px",
            marginBottom: "50px",
            alignItems: "start",
          }}
        >
          {/* Left Column: Image Gallery */}
          <div>
            <ProductImageGallery product={product} />
          </div>

          {/* Right Column: Purchase Decision Panel */}
          <div>
            <ProductPurchasePanel
              product={product}
              onOpenQuote={() => setIsQuoteOpen(true)}
            />
          </div>
        </div>

        {/* Sticky Section Tab Bar */}
        <ProductStickyTabBar />

        {/* ZONE 2: Deep Content Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "56px", maxWidth: "980px" }}>

          {/* 5.1 Overview Section */}
          <section id="overview" style={{ scrollMarginTop: "140px" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "14px" }}>
              Product Overview & Botanical Profile
            </h2>
            <div style={{ backgroundColor: "white", borderRadius: "24px", padding: "32px", border: "1px solid rgba(124, 58, 237, 0.18)", boxShadow: "0 8px 30px rgba(24, 13, 38, 0.04)" }}>
              <p style={{ fontSize: "1.05rem", color: "#180D26", lineHeight: 1.8, marginBottom: "20px" }}>
                {product.overview || product.description}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", backgroundColor: "rgba(124, 58, 237, 0.06)", border: "1px solid rgba(124, 58, 237, 0.15)", padding: "20px", borderRadius: "16px" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#7C3AED", fontWeight: 800, textTransform: "uppercase" }}>Botanical Name</div>
                  <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "#180D26", fontStyle: "italic", marginTop: "2px" }}>
                    {product.botanicalName || "Pure Botanical Extract"}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "0.75rem", color: "#7C3AED", fontWeight: 800, textTransform: "uppercase" }}>Primary Processing</div>
                  <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "#180D26", marginTop: "2px" }}>
                    {product.shortSpec?.split("·")[0]?.trim() || "Steam Distillation"}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "0.75rem", color: "#7C3AED", fontWeight: 800, textTransform: "uppercase" }}>Sourcing Origin</div>
                  <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "#180D26", marginTop: "2px" }}>
                    {product.shortSpec?.split("·")[1]?.trim() || "India"}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5.2 History & Origin Section */}
          <section id="history" style={{ scrollMarginTop: "140px" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "14px" }}>
              Origin, Terroir & Cultural Heritage
            </h2>
            <div style={{ backgroundColor: "white", borderRadius: "24px", padding: "32px", border: "1px solid rgba(124, 58, 237, 0.18)", boxShadow: "0 8px 30px rgba(24, 13, 38, 0.04)" }}>
              <p style={{ fontSize: "1.05rem", color: "#3E2E50", lineHeight: 1.8 }}>
                {product.history || "Cultivated and distilled under generational agricultural traditions across India's most celebrated botanical belts. Mother Herbs Pvt. Ltd. oversees strict soil monitoring, harvest timing, and fair-trade partnerships to ensure batch-to-batch chemical continuity."}
              </p>
            </div>
          </section>

          {/* 5.3 Benefits & Formulator Guide */}
          <section id="benefits" style={{ scrollMarginTop: "140px" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "14px" }}>
              Therapeutic Benefits & Commercial Applications
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "20px" }}>
              {(product.benefits || [
                { title: "Cosmetic & Skincare Formulations", description: "Formulates cleanly into facial serums, moisturizers, cleansing oils, and anti-aging lotions." },
                { title: "Aromatherapy & Olfactory Depth", description: "Natural volatile profile supports sensory calmness, cognitive focus, and balanced fragrance." },
                { title: "Industrial & Personal Care", description: "Pure active botanical compounds enhance stability and natural plant aroma in commercial bases." },
              ]).map((b, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    padding: "24px",
                    border: "1px solid rgba(124, 58, 237, 0.18)",
                    boxShadow: "0 6px 20px rgba(24, 13, 38, 0.03)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <CheckCircle2 size={18} color="#059669" />
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#180D26", margin: 0 }}>
                      {b.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "#5B486E", lineHeight: 1.6, margin: 0 }}>
                    {b.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", backgroundColor: "rgba(124, 58, 237, 0.08)", border: "1px solid rgba(124, 58, 237, 0.18)", padding: "14px 18px", borderRadius: "14px", fontSize: "0.82rem", color: "#5B486E", lineHeight: 1.5 }}>
              <AlertCircle size={16} color="#7C3AED" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong style={{ color: "#180D26" }}>Formulator Disclaimer:</strong> Statements regarding botanical benefits are based on traditional pharmacopoeias and biochemical literature. These ingredients are supplied for cosmetic, aromatic, and industrial manufacturing and are not intended to diagnose, treat, cure, or prevent any medical condition.
              </div>
            </div>
          </section>

          {/* 5.4 How It's Made Section */}
          <section id="manufacturing" style={{ scrollMarginTop: "140px" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "14px" }}>
              Manufacturing & Quality Control Sequence
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "16px" }}>
              {(product.manufacturingSteps || [
                { stepNumber: 1, title: "Raw Material Sourcing", description: "Harvested at peak seasonal maturity from verified contract farms." },
                { stepNumber: 2, title: "Steam Distillation", description: "Steam extracted in 316-grade stainless steel distillation stills." },
                { stepNumber: 3, title: "Clarification & Filtration", description: "Gravity decanted and filtered to remove condensation moisture." },
                { stepNumber: 4, title: "GC-MS Laboratory Analysis", description: "Batch tested to verify physical constants and chemical purity." },
              ]).map(step => (
                <div
                  key={step.stepNumber}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    padding: "24px",
                    border: "1px solid rgba(124, 58, 237, 0.18)",
                    boxShadow: "0 6px 20px rgba(24, 13, 38, 0.03)",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                      color: "white",
                      fontWeight: 800,
                      fontSize: "0.875rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                      boxShadow: "0 2px 8px rgba(124, 58, 237, 0.3)",
                    }}
                  >
                    {step.stepNumber}
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#5B486E", lineHeight: 1.5, margin: 0 }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 5.5 Certifications & Lab Reports */}
          <section id="certifications" style={{ scrollMarginTop: "140px" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "14px" }}>
              International Certifications & Lab Verification
            </h2>

            {/* Certifications Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "18px", marginBottom: "24px" }}>
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    padding: "22px",
                    border: "1px solid rgba(124, 58, 237, 0.18)",
                    boxShadow: "0 6px 20px rgba(24, 13, 38, 0.03)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <ShieldCheck size={22} color="#059669" />
                    <div>
                      <div style={{ fontWeight: 700, color: "#180D26", fontSize: "0.98rem" }}>{cert.name}</div>
                      <div style={{ fontSize: "0.75rem", color: "#5B486E" }}>Registrar: {cert.issuer}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#059669", backgroundColor: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.2)", padding: "4px 10px", borderRadius: "6px", width: "fit-content", marginTop: "8px", fontWeight: 700 }}>
                    Cert No: {cert.licenseNo}
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle Link to Official Certificate Scans */}
            <div style={{ textAlign: "right", marginTop: "-12px", marginBottom: "20px" }}>
              <Link
                href="/certifications"
                style={{
                  fontSize: "0.84rem",
                  color: "#7C3AED",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Inspect Official Accredited Document Scans <ArrowRight size={14} />
              </Link>
            </div>

            {/* Batch Report Callout Card */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.74)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                borderRadius: "24px",
                padding: "28px",
                border: "1px solid rgba(124, 58, 237, 0.25)",
                boxShadow: "0 12px 36px rgba(24, 13, 38, 0.06)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "18px",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase" }}>
                  <FlaskConical size={16} /> GC-MS Purity Standards
                </div>
                <h3 style={{ fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#180D26", marginTop: "4px", marginBottom: "4px" }}>
                  In-House Analytical Laboratory Testing
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#5B486E", margin: 0 }}>
                  Explore our Shimadzu GC-MS assays, optical rotation verifications, and strict purity protocols.
                </p>
              </div>

              <Link
                href="/quality"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                  color: "white",
                  padding: "13px 26px",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 16px rgba(124, 58, 237, 0.4)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-1.5px)";
                  e.currentTarget.style.boxShadow = "0 6px 22px rgba(124, 58, 237, 0.6)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(124, 58, 237, 0.4)";
                }}
              >
                Explore Quality Standards <ArrowRight size={15} />
              </Link>
            </div>
          </section>

          {/* 5.6 Verified B2B Reviews Section */}
          <section id="reviews" style={{ scrollMarginTop: "140px" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "14px" }}>
              Verified B2B Client Reviews & Audits
            </h2>            <div
              style={{
                backgroundColor: "white",
                borderRadius: "24px",
                padding: "36px 28px",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                boxShadow: "0 6px 24px rgba(24, 13, 38, 0.04)",
                textAlign: "center",
              }}
            >
              <div style={{ display: "inline-flex", padding: "12px", borderRadius: "50%", backgroundColor: "rgba(124, 58, 237, 0.08)", marginBottom: "12px" }}>
                <CheckCircle2 size={24} color="#7C3AED" />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontFamily: "var(--font-lora), Georgia, serif", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                Client Reviews Coming Soon
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#5B486E", margin: 0, maxWidth: "520px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.55 }}>
                Verified customer audits, formulation feedback, and laboratory testimonials for this botanical extract will be published here shortly.
              </p>
            </div>
          </section>

        </div>

        {/* ZONE 3: Related Botanical Products */}
        <div style={{ marginTop: "72px", borderTop: "1px solid rgba(124, 58, 237, 0.2)", paddingTop: "48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Complementary Botanical Extracts
              </span>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "2px" }}>
                Frequently Sourced Together
              </h2>
            </div>
            <Link
              href="/products"
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#7C3AED",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                transition: "gap 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.gap = "7px")}
              onMouseLeave={e => (e.currentTarget.style.gap = "4px")}
            >
              View Full Catalog <ArrowRight size={15} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
            {finalRelated.map(rel => {
              const relCatSlug = getCategorySlug(rel.category);
              return (
                <Link
                  key={rel.id}
                  href={`/products/${relCatSlug}/${rel.slug}`}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "24px",
                    padding: "20px",
                    border: "1px solid rgba(124, 58, 237, 0.18)",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 6px 20px rgba(24, 13, 38, 0.04)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 16px 36px rgba(124, 58, 237, 0.18)";
                    e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.35)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(24, 13, 38, 0.04)";
                    e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.18)";
                  }}
                >
                  <div style={{ width: "100%", height: "180px", borderRadius: "14px", border: "1px solid rgba(124, 58, 237, 0.12)", display: "block", overflow: "hidden", marginBottom: "14px" }}>
                    <img
                      src={rel.compositeImageUrl || `/products/${rel.slug}.webp`}
                      alt={rel.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                    />
                  </div>

                  <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", marginBottom: "2px" }}>
                    {rel.category.replace(/_/g, " ")}
                  </div>
                  <h3 style={{ fontSize: "1.08rem", fontWeight: 700, color: "#180D26", marginBottom: "4px" }}>
                    {rel.name}
                  </h3>
                  <div style={{ fontSize: "0.78rem", color: "#5B486E", fontStyle: "italic", marginBottom: "12px" }}>
                    {rel.botanicalName}
                  </div>

                  <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(124, 58, 237, 0.12)", paddingTop: "10px", fontSize: "0.78rem", color: "#180D26", gap: "6px" }}>
                    <span className="notranslate" translate="no" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>MOQ: <strong>{rel.moq}</strong></span>
                    <span style={{ color: "#7C3AED", fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>Inspect &rarr;</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>

      {/* Mobile Floating Sticky Enquire Bar */}
      <ProductMobileStickyBar
        product={product}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Pre-filled B2B Quote Modal */}
      <ProductQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        product={product}
      />
    </div>
  );
}
