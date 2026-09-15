"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Product, INITIAL_PRODUCTS, getCategorySlug } from "@/lib/products-store";
import { ProductImageGallery } from "@/components/client/ProductImageGallery";
import { ProductPurchasePanel } from "@/components/client/ProductPurchasePanel";
import { ProductStickyTabBar, TabSection } from "@/components/client/ProductStickyTabBar";
import { ProductQuoteModal } from "@/components/client/ProductQuoteModal";
import { ProductMobileStickyBar } from "@/components/client/ProductMobileStickyBar";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface ProductDetailViewProps {
  product: Product;
}

function decodeEntities(str?: string): string {
  if (!str) return "";
  let s = str;
  s = s.replace(/&amp;#/g, "&#");
  return s
    .replace(/&#176;/g, "°")
    .replace(/&#146;/g, "'")
    .replace(/&#147;/g, '"')
    .replace(/&#148;/g, '"')
    .replace(/&#150;/g, "–")
    .replace(/&#151;/g, "—")
    .replace(/&#189;/g, "½")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ");
}

interface ScrapedSectionData {
  keyPoints: {
    botanicalName: string | null;
    commonName: string;
    plantPart: string | null;
    extractionMethod: string | null;
    colorOdor: string | null;
    solubility: string | null;
    flavor: string | null;
    casNo: string | null;
    einecsNo: string | null;
    femaNo: string | null;
  };
  description: string | null;
  constituentsAndSpecs: {
    constituents: string | null;
    specification: string | null;
    specificGravity: string | null;
    refractiveIndex: string | null;
  };
  properties: string | null;
  propertiesList: string[];
  blendsOffered: string | null;
  shelfLife: string | null;
  benefitsAndUses: Array<{ title: string; text: string }>;
}

function extractLegacyData(product: Product): ScrapedSectionData {
  const overview = decodeEntities(product.overview || "");
  const history = decodeEntities(product.history || "");
  const combined = overview + " " + history;

  // 1. Key Points (Bio Data)
  const botanicalName = product.botanicalName || null;
  const commonName = product.name;

  let extractionMethod: string | null = null;
  const mMatch = overview.match(/(?:extracted by|distilled by|obtained by|process(?:ed)? by)\s+([^,\.;]+?)(?:description|from|CAS|Key|\.|,)/i);
  if (mMatch) {
    extractionMethod = mMatch[1].trim();
  } else if (product.shortSpec) {
    extractionMethod = product.shortSpec.split("·")[0].trim();
  }

  let plantPart: string | null = null;
  const partMatch = overview.match(/from\s+([a-zA-Z\s&,]+?)(?:\.|$|CAS|Key|Specific|Refractive|Supplied|Major)/i);
  if (partMatch) {
    const rawPart = partMatch[1].trim();
    if (rawPart.length < 45 && !rawPart.toLowerCase().includes("derived") && !rawPart.toLowerCase().includes("shrub")) {
      plantPart = rawPart;
    }
  }

  let colorOdor: string | null = null;
  if (history.toLowerCase().includes("color & odor:")) {
    const afterColor = history.split(/Color\s*&\s*Odor\s*[:#]?\s*/i)[1];
    if (afterColor) {
      colorOdor = afterColor.split(/Description\s*:\s*/i)[0].split(/Known properties\s*:\s*/i)[0].split(/Blends Offered\s*:\s*/i)[0].trim();
    }
  }
  if (!colorOdor && product.shortSpec && product.shortSpec.includes("·")) {
    colorOdor = product.shortSpec.split("·").slice(1).join("·").trim();
  }
  if (colorOdor) {
    colorOdor = colorOdor.replace(/[\.\s]+$/, "").trim();
    if (colorOdor.length > 0) colorOdor = colorOdor.charAt(0).toUpperCase() + colorOdor.slice(1);
  }

  let solubility: string | null = null;
  const solMatch = combined.match(/Solubility\s*[:#]?\s*([^.]+?)(?=\s*(?:Flavor|Odor|Extraction|CAS|EINEC|Major|Key|\.|$))/i);
  if (solMatch && solMatch[1].trim().length > 2) {
    solubility = solMatch[1].trim();
  }

  let flavor: string | null = null;
  const flvMatch = combined.match(/Flavor\s*[:#]?\s*([^.]+?)(?=\s*(?:Solubility|Extraction|CAS|EINEC|Major|Key|\.|$))/i);
  if (flvMatch && flvMatch[1].trim().length > 2) {
    flavor = flvMatch[1].trim();
  }

  const casMatch = combined.match(/CAS\s*(?:#|No|Number)?\s*[:#]?\s*([0-9\-]+)/i);
  const casNo = casMatch ? casMatch[1].trim() : null;

  const einecsMatch = combined.match(/EINECS?\s*(?:#|No|Number)?\s*[:#]?\s*([0-9\-]+)/i);
  const einecsNo = einecsMatch ? einecsMatch[1].trim() : null;

  const femaMatch = combined.match(/F\.?E\.?M\.?A\.?\s*(?:#|No|Number)?\s*[:#]?\s*([0-9]+)/i);
  const femaNo = femaMatch ? femaMatch[1].trim() : null;

  // 2. Complete Description (untruncated across multiple sentences)
  let description: string | null = null;

  // Prioritize product.description (which contains the complete, verified, untruncated description)
  if (product.description && product.description.trim().length >= 35) {
    description = product.description.trim();
  } else if (history.includes("Description")) {
    const m = history.match(/Description\s*:\s*([^]+?)(?=(?:\.|\s)\s*(?:Known properties|Packaged in|Key constituents|Blends Offered|Shelf Life|$))/i);
    if (m && m[1].trim().length >= 35) {
      description = m[1].trim();
    }
  } else if (overview.toLowerCase().includes("description")) {
    const m = overview.match(/description\s*:\s*([^]+?)(?=(?:,\s*from|\.\s*Key constituents|\.\s*CAS|\.\s*Specific|\.\s*Supplied|$))/i);
    if (m && m[1].trim().length >= 35) {
      description = m[1].trim();
    }
  }

  if (description) {
    description = description.replace(/\.{2,}/g, ".").replace(/[\.\s]+$/, "").trim() + ".";
    description = description.charAt(0).toUpperCase() + description.slice(1);
  }

  // 3. Constituents & Specifications
  let constituents: string | null = null;
  const majorMatch = combined.match(/Major\s+Constituents\s*[:#]?\s*(.+?)(?=\s*(?:Specification|Specific\s+Gravity|Refractive\s+Index|CAS|EINEC|FEMA|Blends|Shelf|Supplied|\.\s+[A-Z]|$))/i);
  if (majorMatch && majorMatch[1].trim().length >= 3) {
    constituents = majorMatch[1].trim().replace(/[\.\s]+$/, "");
  } else {
    const cMatch = overview.match(/Key\s+constituents\s+include\s*[:#]?\s*(.+?)(?=\s*(?:Specific\s+Gravity|Refractive\s+Index|CAS\s*(?:No|Number)?|F\.?E\.?M\.?A\.?|\.\s+[A-Z]|$))/i);
    if (cMatch) {
      constituents = cMatch[1].replace(/Specific Gravity.*$/i, "").trim().replace(/[\.\s]+$/, "");
      if (constituents.length < 3) constituents = null;
    }
  }

  let specification: string | null = null;
  const specMatch = combined.match(/(?:^|\.\s*|\b)Specification\s*:\s*(.+?)(?=\s*(?:Blends\s*Offered|Shelf\s*Life|Supplied|CAS|Key|Major|\.\s+[A-Z]|$))/i);
  if (specMatch && specMatch[1].trim().length >= 3) {
    specification = specMatch[1].trim().replace(/[\.\s]+$/, "");
  }

  let specificGravity: string | null = null;
  const sgMatch = overview.match(/Specific\s+Gravity\s*[:#]?\s*([0-9]+(?:\.[0-9]+)?\s*[-–—to]+\s*[0-9]+(?:\.[0-9]+)?(?:\s*@\s*[0-9]+(?:\.[0-9]+)?\s*(?:&#176;|°)?\s*[CF])?)/i);
  if (sgMatch) specificGravity = sgMatch[1].trim();

  let refractiveIndex: string | null = null;
  const riMatch = overview.match(/Refractive\s+Index\s*[:#]?\s*([0-9]+(?:\.[0-9]+)?\s*[-–—to]+\s*[0-9]+(?:\.[0-9]+)?(?:\s*@\s*[0-9]+(?:\.[0-9]+)?\s*(?:&#176;|°)?\s*[CF])?)/i);
  if (riMatch) refractiveIndex = riMatch[1].trim();

  // 4. Properties
  let properties: string | null = null;
  let propertiesList: string[] = [];
  const pMatch = history.match(/Known\s+properties\s*[:#]?\s*([^.]+)/i);
  if (pMatch) {
    properties = pMatch[1].trim().replace(/Packaged.*$/i, "").trim();
    propertiesList = properties
      .split(/[,;]/)
      .map(s => s.trim().replace(/^It\s+(?:acts\s+like|has|is)\s+/i, ""))
      .filter(s => s.length > 2 && !s.toLowerCase().includes("package") && !s.toLowerCase().includes("drum"));
  }

  // 5. Blends Offered
  let blendsOffered: string | null = null;
  const blendsMatch = history.match(/Blends\s*(?:Offered)?\s*[:#]?\s*([^]+?)(?=\s*(?:Shelf\s*Life|Packaged\s*in|Key\s*constituents|Description|$))/i);
  if (blendsMatch && blendsMatch[1].trim().length >= 5) {
    blendsOffered = blendsMatch[1].trim().replace(/[\.\s]+$/, "") + ".";
  }

  // 6. Shelf Life
  let shelfLife: string | null = null;
  const shelfMatch = history.match(/Shelf\s*Life\s*[:#]?\s*([^]+?)(?=\s*(?:Blends\s*Offered|Packaged\s*in|Description|$))/i);
  if (shelfMatch && shelfMatch[1].trim().length >= 5) {
    shelfLife = shelfMatch[1].trim().replace(/[\.\s]+$/, "") + ".";
  }

  // 7. Benefits & Uses
  const benefitsAndUses: Array<{ title: string; text: string }> = [];
  if (product.benefits && product.benefits.length > 0) {
    for (const b of product.benefits) {
      if (b.description && b.description.trim().length > 0) {
        benefitsAndUses.push({
          title: b.title || "Benefit / Use",
          text: b.description.trim(),
        });
      }
    }
  } else if (product.description) {
    benefitsAndUses.push({
      title: "Benefits & Uses",
      text: product.description.trim(),
    });
  }

  return {
    keyPoints: {
      botanicalName,
      commonName,
      plantPart,
      extractionMethod,
      colorOdor,
      solubility,
      flavor,
      casNo,
      einecsNo,
      femaNo,
    },
    description,
    constituentsAndSpecs: {
      constituents,
      specification,
      specificGravity,
      refractiveIndex,
    },
    properties,
    propertiesList: propertiesList.slice(0, 12),
    blendsOffered,
    shelfLife,
    benefitsAndUses,
  };
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const categorySlug = getCategorySlug(product.category);
  const data = extractLegacyData(product);

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
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(24, 13, 38, 0.1)";
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

        {/* ZONE 1: Above-the-fold Gallery & Purchase Decision */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "48px",
            marginBottom: "40px",
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

        {/* Dynamic Section Tab Bar for Smooth Anchor Navigation */}
        {(() => {
          const tabSections: TabSection[] = [
            { id: "overview", label: "Overview" },
            ...(data.description ? [{ id: "description", label: "Description" }] : []),
            ...((data.constituentsAndSpecs.constituents || data.constituentsAndSpecs.specification || data.constituentsAndSpecs.specificGravity || data.constituentsAndSpecs.refractiveIndex) ? [{ id: "specifications", label: "Constituents & Specifications" }] : []),
            { id: "properties", label: "Properties" },
            ...(data.blendsOffered ? [{ id: "blends-offered", label: "Blends Offered" }] : []),
            ...(data.shelfLife ? [{ id: "shelf-life", label: "Shelf Life" }] : []),
            ...(data.benefitsAndUses.length > 0 ? [{ id: "benefits-uses", label: "Benefits & Uses" }] : []),
          ];
          return <ProductStickyTabBar sections={tabSections} />;
        })()}

        {/* ZONE 2: Only the Scraped Sections from Legacy Website */}
        <div style={{ display: "flex", flexDirection: "column", gap: "50px", maxWidth: "1000px" }}>

          {/* ========================================================================= */}
          {/* 1. OVERVIEW                                                               */}
          {/* ========================================================================= */}
          <section id="overview" style={{ scrollMarginTop: "140px" }}>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "16px" }}>
              Overview
            </h2>

            <div style={{ backgroundColor: "white", borderRadius: "24px", padding: "28px 32px", border: "1px solid rgba(124, 58, 237, 0.18)", boxShadow: "0 8px 30px rgba(24, 13, 38, 0.04)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {data.keyPoints.botanicalName && (
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(160px, 220px) 1fr", columnGap: "32px", alignItems: "baseline" }}>
                    <span style={{ fontSize: "1.02rem", fontWeight: 700, color: "#180D26" }}>Botanical Name:</span>
                    <span style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8, fontStyle: "italic" }}>{data.keyPoints.botanicalName}</span>
                  </div>
                )}

                {data.keyPoints.commonName && (
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(160px, 220px) 1fr", columnGap: "32px", alignItems: "baseline" }}>
                    <span style={{ fontSize: "1.02rem", fontWeight: 700, color: "#180D26" }}>Common Name:</span>
                    <span style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8 }}>{data.keyPoints.commonName}</span>
                  </div>
                )}

                {data.keyPoints.plantPart && (
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(160px, 220px) 1fr", columnGap: "32px", alignItems: "baseline" }}>
                    <span style={{ fontSize: "1.02rem", fontWeight: 700, color: "#180D26" }}>Plant Parts Used:</span>
                    <span style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8 }}>{data.keyPoints.plantPart}</span>
                  </div>
                )}

                {data.keyPoints.extractionMethod && (
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(160px, 220px) 1fr", columnGap: "32px", alignItems: "baseline" }}>
                    <span style={{ fontSize: "1.02rem", fontWeight: 700, color: "#180D26" }}>Extraction Method:</span>
                    <span style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8 }}>{data.keyPoints.extractionMethod}</span>
                  </div>
                )}

                {data.keyPoints.colorOdor && (
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(160px, 220px) 1fr", columnGap: "32px", alignItems: "baseline" }}>
                    <span style={{ fontSize: "1.02rem", fontWeight: 700, color: "#180D26" }}>Color &amp; Odor:</span>
                    <span style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8 }}>{data.keyPoints.colorOdor}</span>
                  </div>
                )}

                {data.keyPoints.solubility && (
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(160px, 220px) 1fr", columnGap: "32px", alignItems: "baseline" }}>
                    <span style={{ fontSize: "1.02rem", fontWeight: 700, color: "#180D26" }}>Solubility:</span>
                    <span style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8 }}>{data.keyPoints.solubility}</span>
                  </div>
                )}

                {data.keyPoints.flavor && (
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(160px, 220px) 1fr", columnGap: "32px", alignItems: "baseline" }}>
                    <span style={{ fontSize: "1.02rem", fontWeight: 700, color: "#180D26" }}>Flavor &amp; Taste:</span>
                    <span style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8 }}>{data.keyPoints.flavor}</span>
                  </div>
                )}

                {data.keyPoints.casNo && (
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(160px, 220px) 1fr", columnGap: "32px", alignItems: "baseline" }}>
                    <span style={{ fontSize: "1.02rem", fontWeight: 700, color: "#180D26" }}>CAS #:</span>
                    <span style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8 }}>{data.keyPoints.casNo}</span>
                  </div>
                )}

                {data.keyPoints.einecsNo && (
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(160px, 220px) 1fr", columnGap: "32px", alignItems: "baseline" }}>
                    <span style={{ fontSize: "1.02rem", fontWeight: 700, color: "#180D26" }}>EINECS #:</span>
                    <span style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8 }}>{data.keyPoints.einecsNo}</span>
                  </div>
                )}

                {data.keyPoints.femaNo && (
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(160px, 220px) 1fr", columnGap: "32px", alignItems: "baseline" }}>
                    <span style={{ fontSize: "1.02rem", fontWeight: 700, color: "#180D26" }}>FEMA #:</span>
                    <span style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8 }}>{data.keyPoints.femaNo}</span>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 2. DESCRIPTION                                                            */}
          {/* ========================================================================= */}
          {data.description && (
            <section id="description" style={{ scrollMarginTop: "140px" }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "16px" }}>
                Description
              </h2>

              <div style={{ backgroundColor: "white", borderRadius: "24px", padding: "28px 32px", border: "1px solid rgba(124, 58, 237, 0.18)", boxShadow: "0 8px 30px rgba(24, 13, 38, 0.04)" }}>
                <p style={{ fontSize: "1.05rem", color: "#180D26", lineHeight: 1.85, margin: 0 }}>
                  {data.description}
                </p>
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* 3. CONSTITUENTS & SPECIFICATIONS                                          */}
          {/* ========================================================================= */}
          {(data.constituentsAndSpecs.constituents || data.constituentsAndSpecs.specification || data.constituentsAndSpecs.specificGravity || data.constituentsAndSpecs.refractiveIndex) && (
            <section id="specifications" style={{ scrollMarginTop: "140px" }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "16px" }}>
                Constituents &amp; Specifications
              </h2>

              <div style={{ backgroundColor: "white", borderRadius: "24px", padding: "28px 32px", border: "1px solid rgba(124, 58, 237, 0.18)", boxShadow: "0 8px 30px rgba(24, 13, 38, 0.04)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  
                  {data.constituentsAndSpecs.constituents && (
                    <div style={{ display: "grid", gridTemplateColumns: "minmax(160px, 220px) 1fr", columnGap: "32px", alignItems: "baseline" }}>
                      <span style={{ fontSize: "1.02rem", fontWeight: 700, color: "#180D26" }}>Major Constituents:</span>
                      <span style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8 }}>{data.constituentsAndSpecs.constituents}</span>
                    </div>
                  )}

                  {data.constituentsAndSpecs.specification && (
                    <div style={{ display: "grid", gridTemplateColumns: "minmax(160px, 220px) 1fr", columnGap: "32px", alignItems: "baseline" }}>
                      <span style={{ fontSize: "1.02rem", fontWeight: 700, color: "#180D26" }}>Standard Specification &amp; Assay:</span>
                      <span style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8 }}>{data.constituentsAndSpecs.specification}</span>
                    </div>
                  )}

                  {data.constituentsAndSpecs.specificGravity && (
                    <div style={{ display: "grid", gridTemplateColumns: "minmax(160px, 220px) 1fr", columnGap: "32px", alignItems: "baseline" }}>
                      <span style={{ fontSize: "1.02rem", fontWeight: 700, color: "#180D26" }}>Specific Gravity:</span>
                      <span style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8 }}>{data.constituentsAndSpecs.specificGravity}</span>
                    </div>
                  )}

                  {data.constituentsAndSpecs.refractiveIndex && (
                    <div style={{ display: "grid", gridTemplateColumns: "minmax(160px, 220px) 1fr", columnGap: "32px", alignItems: "baseline" }}>
                      <span style={{ fontSize: "1.02rem", fontWeight: 700, color: "#180D26" }}>Refractive Index:</span>
                      <span style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8 }}>{data.constituentsAndSpecs.refractiveIndex}</span>
                    </div>
                  )}

                </div>
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* 4. PROPERTIES                                                             */}
          {/* ========================================================================= */}
          <section id="properties" style={{ scrollMarginTop: "140px" }}>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "16px" }}>
              Properties
            </h2>

            <div style={{ backgroundColor: "white", borderRadius: "24px", padding: "28px 32px", border: "1px solid rgba(124, 58, 237, 0.18)", boxShadow: "0 8px 30px rgba(24, 13, 38, 0.04)" }}>
              <p style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8, margin: 0 }}>
                {data.properties || `Exhibits natural therapeutic, aromatic, and cosmetic properties characteristic of pure ${data.keyPoints.commonName}. Tested for purity and aromatic integrity.`}
              </p>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 5. BLENDS OFFERED                                                         */}
          {/* ========================================================================= */}
          {data.blendsOffered && (
            <section id="blends-offered" style={{ scrollMarginTop: "140px" }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "16px" }}>
                Blends Offered
              </h2>

              <div style={{ backgroundColor: "white", borderRadius: "24px", padding: "28px 32px", border: "1px solid rgba(124, 58, 237, 0.18)", boxShadow: "0 8px 30px rgba(24, 13, 38, 0.04)" }}>
                <p style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8, margin: 0 }}>
                  {data.blendsOffered}
                </p>
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* 6. SHELF LIFE & STORAGE                                                   */}
          {/* ========================================================================= */}
          {data.shelfLife && (
            <section id="shelf-life" style={{ scrollMarginTop: "140px" }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "16px" }}>
                Shelf Life &amp; Storage
              </h2>

              <div style={{ backgroundColor: "white", borderRadius: "24px", padding: "28px 32px", border: "1px solid rgba(124, 58, 237, 0.18)", boxShadow: "0 8px 30px rgba(24, 13, 38, 0.04)" }}>
                <p style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8, margin: 0 }}>
                  {data.shelfLife}
                </p>
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* 7. BENEFITS AND USES                                                      */}
          {/* ========================================================================= */}
          {data.benefitsAndUses.length > 0 && (
            <section id="benefits-uses" style={{ scrollMarginTop: "140px" }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "16px" }}>
                Benefits &amp; Uses
              </h2>

              <div style={{ backgroundColor: "white", borderRadius: "24px", padding: "28px 32px", border: "1px solid rgba(124, 58, 237, 0.18)", boxShadow: "0 8px 30px rgba(24, 13, 38, 0.04)" }}>
                <ul style={{ margin: 0, paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  {data.benefitsAndUses.map((b, idx) => (
                    <li key={idx} style={{ fontSize: "1.02rem", color: "#180D26", lineHeight: 1.8 }}>
                      {b.text}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

        </div>

        {/* ZONE 3: Related Botanical Products */}
        <div style={{ marginTop: "72px", borderTop: "1px solid rgba(124, 58, 237, 0.2)", paddingTop: "48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Complementary Botanical Extracts
              </span>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "2px" }}>
                Frequently Ordered Together
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
                    e.currentTarget.style.boxShadow = "0 16px 36px rgba(24, 13, 38, 0.12)";
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
