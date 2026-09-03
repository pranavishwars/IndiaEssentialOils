"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
} from "lucide-react";

export function Co2Sub() {
  return (
    <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
      CO<sub style={{ fontSize: "0.78em", bottom: "-0.16em", position: "relative", verticalAlign: "baseline", lineHeight: 0, fontWeight: "inherit" }}>2</sub>
    </span>
  );
}

function renderWithCo2(text: string): React.ReactNode {
  if (!text) return text;
  if (!text.includes("CO2") && !text.includes("CO₂")) return text;
  const parts = text.split(/CO[2₂]/g);
  return parts.flatMap((part, i) =>
    i < parts.length - 1
      ? [part, <Co2Sub key={i} />]
      : [part]
  );
}

interface Co2Product {
  id: string;
  slug: string;
  name: string;
  botanicalName: string;
  shortSpec: string;
  highlight: string;
  compositeImageUrl: string;
}

const CO2_PAGES: {
  pageTitle: string;
  pageSubtitle: string;
  products: Co2Product[];
}[] = [
  {
    pageTitle: "Spices & Therapeutic Rhizomes",
    pageSubtitle: "Gentle CO2 extraction preserving authentic aromas and active natural richness",
    products: [
      {
        id: "prod-co2-turmeric",
        slug: "turmeric-co2-extract",
        name: "Turmeric CO2 Extract",
        botanicalName: "Curcuma longa",
        shortSpec: "Erode, India · 65% Turmerones",
        highlight: "Rich in natural ar-turmerone & active curcuminoids with 0.00 ppm solvent residue.",
        compositeImageUrl: "/products/turmeric-co2-extract.webp",
      },
      {
        id: "prod-co2-ginger",
        slug: "ginger-co2-extract",
        name: "Ginger CO2 Extract",
        botanicalName: "Zingiber officinale",
        shortSpec: "Cochin, India · Standardized Gingerols",
        highlight: "True-to-nature warmth capturing both volatile zingiberene and non-volatile pungent gingerols.",
        compositeImageUrl: "/products/ginger-co2-extract.webp",
      },
      {
        id: "prod-co2-black-pepper",
        slug: "black-pepper-co2-extract",
        name: "Black Pepper CO2 Extract",
        botanicalName: "Piper nigrum",
        shortSpec: "Malabar, India · Standardized Piperine",
        highlight: "Freshly cracked pepper top-notes combined with bioavailable piperine alkaloids.",
        compositeImageUrl: "/products/black-pepper-co2-extract.webp",
      },
      {
        id: "prod-co2-cardamom",
        slug: "cardamom-co2-extract",
        name: "Cardamom CO2 Extract",
        botanicalName: "Elettaria cardamomum",
        shortSpec: "Idukki, India · High α-Terpinyl Acetate",
        highlight: "Exquisite sweet-balsamic eucalyptus citrus aroma free from burnt thermal degradation.",
        compositeImageUrl: "/products/cardamom-co2-extract.webp",
      },
    ],
  },
  {
    pageTitle: "Aromatics, Buds & Aged Roots",
    pageSubtitle: "Pure low-temperature botanicals for fine fragrance and cosmetics",
    products: [
      {
        id: "prod-co2-clove",
        slug: "clove-co2-extract",
        name: "Clove CO2 Extract",
        botanicalName: "Syzygium aromaticum",
        shortSpec: "Kanyakumari, India · >85% Eugenol",
        highlight: "Dense bud extract yielding exceptional eugenol purity and rich natural eugenyl acetate sweetness.",
        compositeImageUrl: "/products/clove-co2-extract.webp",
      },
      {
        id: "prod-co2-tulsi",
        slug: "tulsi-holy-basil-co2-extract",
        name: "Holy Basil / Tulsi CO2 Extract",
        botanicalName: "Ocimum sanctum",
        shortSpec: "Varanasi, India · Adaptogenic Actives",
        highlight: "Sacred Tulsi extract capturing volatile eugenol-caryophyllene and lipophilic ursolic acid.",
        compositeImageUrl: "/products/tulsi-holy-basil-co2-extract.webp",
      },
      {
        id: "prod-co2-rosemary",
        slug: "rosemary-co2-extract",
        name: "Rosemary CO2 Extract",
        botanicalName: "Salvia rosmarinus",
        shortSpec: "Nilgiris, India · High Carnosic Acid",
        highlight: "Gold-standard natural antioxidant extract for stabilizing cosmetics and high-lipid formulations.",
        compositeImageUrl: "/products/rosemary-co2-extract.webp",
      },
      {
        id: "prod-co2-vetiver",
        slug: "vetiver-co2-extract",
        name: "Vetiver CO2 Extract",
        botanicalName: "Chrysopogon zizanioides",
        shortSpec: "Kannauj, India · High Khusimol",
        highlight: "Smoky-woody, balsamic-earthy longevity from aged wild Ruh Khus roots with dense khusimol.",
        compositeImageUrl: "/products/vetiver-co2-extract.webp",
      },
    ],
  },
  {
    pageTitle: "Precious Woods, Pods & Specialized Alliums",
    pageSubtitle: "Pure heartwood, Bourbon vanilla, and concentrated botanical oils",
    products: [
      {
        id: "prod-co2-sandalwood",
        slug: "sandalwood-co2-extract",
        name: "Sandalwood CO2 Extract",
        botanicalName: "Santalum album",
        shortSpec: "Mysore, India · >90% Santalols",
        highlight: "Aged East Indian Sandalwood heartwood extract with creamy, sacred woody tenacity.",
        compositeImageUrl: "/products/sandalwood-co2-extract.webp",
      },
      {
        id: "prod-co2-vanilla",
        slug: "vanilla-co2-extract",
        name: "Vanilla CO2 Extract",
        botanicalName: "Vanilla planifolia",
        shortSpec: "Pollachi, India · High Natural Vanillin",
        highlight: "Pure Bourbon vanilla bean extract with rich natural vanillin, completely alcohol and solvent-free.",
        compositeImageUrl: "/products/vanilla-co2-extract.webp",
      },
      {
        id: "prod-co2-onion",
        slug: "onion-co2-extract",
        name: "Onion CO2 Extract",
        botanicalName: "Allium cepa",
        shortSpec: "Nashik, India · High Quercetin",
        highlight: "Potent red onion extract rich in organosulfur compounds for clinical hair strengthening.",
        compositeImageUrl: "/products/onion-co2-extract.webp",
      },
      {
        id: "prod-co2-garlic",
        slug: "garlic-co2-extract",
        name: "Garlic CO2 Extract",
        botanicalName: "Allium sativum",
        shortSpec: "Neemuch, India · Standardized Allicin",
        highlight: "100x concentrated garlic extract rich in diallyl disulfides with zero carrier oil dilution.",
        compositeImageUrl: "/products/garlic-co2-extract.webp",
      },
    ],
  },
  {
    pageTitle: "Precious Florals & Botanical Musks",
    pageSubtitle: "Ethereal florals and cruelty-free vegetal musks for luxury perfumery",
    products: [
      {
        id: "prod-co2-jasmine",
        slug: "jasmine-co2-extract",
        name: "Jasmine CO2 Extract",
        botanicalName: "Jasminum sambac",
        shortSpec: "Madurai, India · 0.00 ppm Hexane",
        highlight: "Pre-dawn Madurai Sambac flowers capturing radiant, live floral heart notes without hexane residue.",
        compositeImageUrl: "/products/jasmine-co2-extract.webp",
      },
      {
        id: "prod-co2-ambrette",
        slug: "ambrette-co2-extract",
        name: "Ambrette CO2 Extract",
        botanicalName: "Abelmoschus moschatus",
        shortSpec: "Deccan, India · (E)-Ambrettolide",
        highlight: "Premier 100% natural cruelty-free botanical musk for luxury clean perfumery formulation.",
        compositeImageUrl: "/products/ambrette-co2-extract.webp",
      },
      {
        id: "prod-co2-champaca",
        slug: "champaca-co2-extract",
        name: "Champaca CO2 Extract",
        botanicalName: "Magnolia champaca",
        shortSpec: "Nilgiris, India · True Floral",
        highlight: "Sacred golden flower extract radiating exotic apricot-tea floral sweetness for niche fragrances.",
        compositeImageUrl: "/products/champaca-co2-extract.webp",
      },
      {
        id: "prod-co2-full-catalog",
        slug: "explore-all-co2",
        name: "Complete CO2 Collection",
        botanicalName: "All 15 Botanical Distillates",
        shortSpec: "1kg Canisters · 25kg Drums · Bulk Tankers",
        highlight: "Explore our full range of 15 Supercritical CO2 extracts with full GC-MS dossiers and bulk pricing.",
        compositeImageUrl: "/co2_extracts_collection.jpg",
      },
    ],
  },
];

// Flat array of all products for mobile view
const ALL_CO2_PRODUCTS: Co2Product[] = CO2_PAGES.flatMap((p) => p.products);

// Desktop Slides: 1 Cover + 4 Pages (4 products each)
type DesktopSlideItem =
  | { type: "cover" }
  | { type: "products"; pageIndex: number; pageData: typeof CO2_PAGES[number] };

const DESKTOP_REAL_SLIDES: DesktopSlideItem[] = [
  { type: "cover" },
  { type: "products", pageIndex: 0, pageData: CO2_PAGES[0] },
  { type: "products", pageIndex: 1, pageData: CO2_PAGES[1] },
  { type: "products", pageIndex: 2, pageData: CO2_PAGES[2] },
  { type: "products", pageIndex: 3, pageData: CO2_PAGES[3] },
];

const DESKTOP_TRACK_SLIDES: DesktopSlideItem[] = [
  DESKTOP_REAL_SLIDES[DESKTOP_REAL_SLIDES.length - 1],
  ...DESKTOP_REAL_SLIDES,
  DESKTOP_REAL_SLIDES[0],
];

// Mobile Slides: 1 Cover + 16 Single Product Slides (1 product per slide for vertical aspect ratio)
type MobileSlideItem =
  | { type: "cover" }
  | { type: "single_product"; product: Co2Product; productIndex: number; totalProducts: number };

const MOBILE_REAL_SLIDES: MobileSlideItem[] = [
  { type: "cover" },
  ...ALL_CO2_PRODUCTS.map((prod, idx) => ({
    type: "single_product" as const,
    product: prod,
    productIndex: idx + 1,
    totalProducts: ALL_CO2_PRODUCTS.length,
  })),
];

const MOBILE_TRACK_SLIDES: MobileSlideItem[] = [
  MOBILE_REAL_SLIDES[MOBILE_REAL_SLIDES.length - 1],
  ...MOBILE_REAL_SLIDES,
  MOBILE_REAL_SLIDES[0],
];

export function ExploreLatestLineSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [trackIndex, setTrackIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);

  const isTransitioningRef = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile((prev) => {
        if (prev !== mobile) {
          setWithTransition(false);
          setTrackIndex(1);
        }
        return mobile;
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalRealSlides = isMobile ? MOBILE_REAL_SLIDES.length : DESKTOP_REAL_SLIDES.length;
  const currentTrackSlides = isMobile ? MOBILE_TRACK_SLIDES : DESKTOP_TRACK_SLIDES;

  const goToNext = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setWithTransition(true);
    setTrackIndex((prev) => prev + 1);
  };

  const goToPrev = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setWithTransition(true);
    setTrackIndex((prev) => prev - 1);
  };

  const goToDot = (realIdx: number) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setWithTransition(true);
    setTrackIndex(realIdx + 1);
  };

  // Seamless infinite loop transition reset
  const handleTransitionEnd = () => {
    isTransitioningRef.current = false;
    if (trackIndex === currentTrackSlides.length - 1) {
      setWithTransition(false);
      setTrackIndex(1);
    } else if (trackIndex === 0) {
      setWithTransition(false);
      setTrackIndex(totalRealSlides);
    }
  };

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHoveredRef.current) {
        goToNext();
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [isMobile]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 45) {
        goToNext();
      } else if (diff < -45) {
        goToPrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Compute active dot index
  const activeDotIndex = (trackIndex - 1 + totalRealSlides) % totalRealSlides;

  return (
    <section
      id="explore-latest-line"
      style={{
        padding: "0 clamp(16px, 4vw, 24px) clamp(48px, 8vh, 80px)",
        maxWidth: "1320px",
        margin: "0 auto",
      }}
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >
      {/* Section Header with Simple 3-4 Line Explanation */}
      <div style={{ marginBottom: "clamp(24px, 4vh, 36px)" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: "rgba(124, 58, 237, 0.1)",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            padding: "6px 16px",
            borderRadius: "9999px",
            color: "#7C3AED",
            fontWeight: 800,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "12px",
          }}
        >
          <Sparkles size={14} color="#7C3AED" /> NEW BOTANICAL LINEUP · 100% PURE &amp; CLEAN
        </div>
        
        <div className="co2-section-header-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px" }}>
          <div className="co2-section-header-text" style={{ maxWidth: "860px", flex: 1 }}>
            <h2
              style={{
                fontSize: "var(--font-size-h1)",
                fontWeight: 700,
                fontFamily: "var(--font-lora), Georgia, serif",
                color: "#180D26",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Explore our Latest Line
            </h2>
            
            {/* Simple, Non-Technical 3-4 Line Explanation */}
            <p
              style={{
                fontSize: "clamp(0.95rem, 1.3vw, 1.04rem)",
                color: "#4A3E56",
                margin: "12px 0 0 0",
                lineHeight: 1.7,
              }}
            >
              CO₂ extracts are natural plant oils crafted using clean, gentle carbon dioxide instead of high heat or harsh chemicals. Because no extreme heat is used, the oils retain the true, fresh scent and complete natural richness of the original plant just as found in nature. They are 100% pure and chemical-free, making them the preferred choice for premium skincare, fragrances, and wellness products.
            </p>
          </div>

          <Link
            href="/products/co2-oils"
            className="co2-section-header-btn"
            style={{
              fontSize: "0.88rem",
              fontWeight: 700,
              color: "#7C3AED",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "10px 20px",
              borderRadius: "9999px",
              backgroundColor: "rgba(124, 58, 237, 0.08)",
              border: "1px solid rgba(124, 58, 237, 0.22)",
              transition: "all 0.2s ease",
              flexShrink: 0,
              marginTop: "4px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.16)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.08)";
            }}
          >
            <span>View All <Co2Sub /> Extracts</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Moving Catalog Showcase Container with Outward Flanking Arrows */}
      <div
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <style>{`
          .co2-catalog-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 25;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.94);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1.5px solid rgba(124, 58, 237, 0.35);
            color: "#180D26";
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 8px 24px rgba(24, 13, 38, 0.14);
            transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .co2-catalog-arrow:hover {
            background-color: #7C3AED;
            color: #FFFFFF;
            transform: translateY(-50%) scale(1.1);
            box-shadow: 0 10px 28px rgba(124, 58, 237, 0.4);
          }
          .co2-catalog-arrow-left {
            left: -54px;
          }
          .co2-catalog-arrow-right {
            right: -54px;
          }
          @media (max-width: 1440px) {
            .co2-catalog-arrow-left {
              left: -40px;
            }
            .co2-catalog-arrow-right {
              right: -40px;
            }
          }
          @media (max-width: 1200px) {
            .co2-catalog-arrow-left {
              left: -24px;
            }
            .co2-catalog-arrow-right {
              right: -24px;
            }
          }
          @media (max-width: 768px) {
            .co2-section-header-row {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 16px !important;
            }
            .co2-section-header-text {
              width: 100% !important;
              max-width: 100% !important;
              flex: none !important;
            }
            .co2-section-header-btn {
              align-self: flex-start !important;
              margin-top: 0 !important;
            }
            .co2-catalog-arrow {
              width: 38px;
              height: 38px;
            }
            .co2-catalog-arrow-left {
              left: 6px;
            }
            .co2-catalog-arrow-right {
              right: 6px;
            }
          }
        `}</style>

        {/* Left Side Navigation Arrow */}
        <button
          onClick={goToPrev}
          aria-label="Previous catalog page"
          className="co2-catalog-arrow co2-catalog-arrow-left"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right Side Navigation Arrow */}
        <button
          onClick={goToNext}
          aria-label="Next catalog page"
          className="co2-catalog-arrow co2-catalog-arrow-right"
        >
          <ChevronRight size={22} />
        </button>

        {/* Infinite Looping Slider Viewport (100% Full Width) */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            width: "100%",
            overflow: "hidden",
            borderRadius: "28px",
          }}
        >
          <div
            onTransitionEnd={handleTransitionEnd}
            style={{
              display: "flex",
              width: "100%",
              transform: `translateX(-${trackIndex * 100}%)`,
              transition: withTransition ? "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
              willChange: "transform",
            }}
          >
            {/* MOBILE RENDER: 1 Product Per Slide */}
            {isMobile &&
              (currentTrackSlides as MobileSlideItem[]).map((slide, sIdx) => {
                if (slide.type === "cover") {
                  return (
                    <div
                      key={`slide-mob-cover-${sIdx}`}
                      style={{
                        flex: "0 0 100%",
                        width: "100%",
                        minWidth: "100%",
                        boxSizing: "border-box",
                        padding: "0 4px",
                      }}
                    >
                      <div
                        className="liquid-glass-elevated"
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "clamp(460px, 75vh, 560px)",
                          borderRadius: "24px",
                          overflow: "hidden",
                          border: "1px solid rgba(124, 58, 237, 0.2)",
                          boxShadow: "0 10px 30px rgba(24, 13, 38, 0.06)",
                        }}
                      >
                        <Image
                          src="/co2_extracts_collection.jpg"
                          alt="India Essential Oils Supercritical CO2 Extracts Lineup"
                          fill
                          priority
                          sizes="100vw"
                          style={{ objectFit: "cover", objectPosition: "center" }}
                        />

                        <button
                          onClick={goToNext}
                          className="btn-vibrant-primary"
                          style={{
                            position: "absolute",
                            bottom: "20px",
                            right: "20px",
                            padding: "12px 24px",
                            borderRadius: "9999px",
                            fontWeight: 700,
                            fontSize: "0.88rem",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            border: "none",
                            cursor: "pointer",
                            boxShadow: "0 8px 24px rgba(124, 58, 237, 0.55)",
                            zIndex: 10,
                          }}
                        >
                          <span>Browse Products</span>
                          <ArrowRight size={15} />
                        </button>
                      </div>
                    </div>
                  );
                }

                // Single Product Slide on Mobile
                const prod = slide.product;
                const isFullCatalogCard = prod.slug === "explore-all-co2";
                const targetHref = isFullCatalogCard ? "/products/co2-oils" : `/products/co2-oils/${prod.slug}`;

                return (
                  <div
                    key={`slide-mob-prod-${sIdx}`}
                    style={{
                      flex: "0 0 100%",
                      width: "100%",
                      minWidth: "100%",
                      boxSizing: "border-box",
                      padding: "0 4px",
                    }}
                  >
                    <Link
                      href={targetHref}
                      style={{ textDecoration: "none", display: "block", width: "100%" }}
                    >
                      <div
                        className="liquid-glass-elevated"
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          borderRadius: "24px",
                          padding: "22px",
                          backgroundColor: isFullCatalogCard ? "rgba(24, 13, 38, 0.95)" : "rgba(255, 255, 255, 0.94)",
                          color: isFullCatalogCard ? "#FFFFFF" : "#180D26",
                          border: isFullCatalogCard ? "1px solid rgba(139, 92, 246, 0.4)" : "1px solid rgba(124, 58, 237, 0.22)",
                          boxShadow: "0 10px 32px rgba(24, 13, 38, 0.08)",
                          boxSizing: "border-box",
                          minHeight: "clamp(460px, 75vh, 560px)",
                        }}
                      >
                        <div>
                          {/* Top Status Bar */}
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                              PRODUCT {slide.productIndex} OF {slide.totalProducts}
                            </span>
                            <span
                              style={{
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                padding: "3px 10px",
                                borderRadius: "9999px",
                                backgroundColor: isFullCatalogCard ? "rgba(139, 92, 246, 0.25)" : "rgba(124, 58, 237, 0.1)",
                                color: isFullCatalogCard ? "#DDD6FE" : "#7C3AED",
                              }}
                            >
                              Pure CO₂ Extract
                            </span>
                          </div>

                          {/* Product Image */}
                          <div
                            style={{
                              position: "relative",
                              width: "100%",
                              height: "220px",
                              borderRadius: "16px",
                              overflow: "hidden",
                              marginBottom: "16px",
                              backgroundColor: isFullCatalogCard ? "rgba(255, 255, 255, 0.05)" : "#EDE8DF",
                              border: "1px solid rgba(124, 58, 237, 0.14)",
                            }}
                          >
                            <Image
                              src={prod.compositeImageUrl}
                              alt={prod.name}
                              fill
                              sizes="100vw"
                              style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                          </div>

                          {/* Product Details */}
                          <h3
                            style={{
                              fontSize: "1.3rem",
                              fontWeight: 700,
                              fontFamily: "var(--font-lora), Georgia, serif",
                              color: isFullCatalogCard ? "#FFFFFF" : "#180D26",
                              margin: "0 0 6px 0",
                              lineHeight: 1.25,
                            }}
                          >
                            {renderWithCo2(prod.name)}
                          </h3>

                          <div
                            style={{
                              fontSize: "0.9rem",
                              fontStyle: "italic",
                              color: isFullCatalogCard ? "#C4B5FD" : "#7C3AED",
                              fontWeight: 600,
                              marginBottom: "6px",
                            }}
                          >
                            {prod.botanicalName}
                          </div>

                          <div
                            style={{
                              fontSize: "0.8rem",
                              color: isFullCatalogCard ? "rgba(255, 255, 255, 0.75)" : "#6B7280",
                              fontWeight: 600,
                              marginBottom: "10px",
                            }}
                          >
                            {renderWithCo2(prod.shortSpec)}
                          </div>

                          <p
                            style={{
                              fontSize: "0.88rem",
                              color: isFullCatalogCard ? "rgba(255, 255, 255, 0.9)" : "#4B5563",
                              lineHeight: 1.55,
                              margin: 0,
                            }}
                          >
                            {renderWithCo2(prod.highlight)}
                          </p>
                        </div>

                        {/* Action CTA Link */}
                        <div
                          style={{
                            borderTop: isFullCatalogCard ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(124, 58, 237, 0.14)",
                            paddingTop: "12px",
                            marginTop: "16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: isFullCatalogCard ? "#DDD6FE" : "#7C3AED" }}>
                            {isFullCatalogCard ? "Explore Full CO₂ Catalog" : "View Specifications"}
                          </span>
                          <div
                            style={{
                              width: "28px",
                              height: "28px",
                              borderRadius: "50%",
                              backgroundColor: isFullCatalogCard ? "rgba(139, 92, 246, 0.3)" : "rgba(124, 58, 237, 0.12)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: isFullCatalogCard ? "#FFFFFF" : "#7C3AED",
                            }}
                          >
                            <ArrowRight size={14} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}

            {/* DESKTOP RENDER: 4 Products Per Slide (Unchanged) */}
            {!isMobile &&
              (currentTrackSlides as DesktopSlideItem[]).map((slide, sIdx) => {
                if (slide.type === "cover") {
                  return (
                    <div
                      key={`slide-desk-cover-${sIdx}`}
                      style={{
                        flex: "0 0 100%",
                        width: "100%",
                        minWidth: "100%",
                        boxSizing: "border-box",
                        padding: "0 4px",
                      }}
                    >
                      <div
                        className="liquid-glass-elevated"
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "clamp(540px, 52vw, 680px)",
                          borderRadius: "24px",
                          overflow: "hidden",
                          border: "1px solid rgba(124, 58, 237, 0.2)",
                          boxShadow: "0 10px 30px rgba(24, 13, 38, 0.06)",
                        }}
                      >
                        <Image
                          src="/co2_extracts_collection.jpg"
                          alt="India Essential Oils Supercritical CO2 Extracts Lineup"
                          fill
                          priority
                          sizes="(max-width: 1280px) 100vw, 1280px"
                          style={{ objectFit: "cover", objectPosition: "center" }}
                        />

                        <button
                          onClick={goToNext}
                          className="btn-vibrant-primary"
                          style={{
                            position: "absolute",
                            bottom: "24px",
                            right: "24px",
                            padding: "14px 28px",
                            borderRadius: "9999px",
                            fontWeight: 700,
                            fontSize: "0.92rem",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            border: "none",
                            cursor: "pointer",
                            boxShadow: "0 8px 24px rgba(124, 58, 237, 0.55)",
                            zIndex: 10,
                          }}
                        >
                          <span>Browse Products</span>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  );
                }

                // Desktop Products Slide (4 products per page)
                const page = slide.pageData;
                return (
                  <div
                    key={`slide-desk-prod-${sIdx}`}
                    style={{
                      flex: "0 0 100%",
                      width: "100%",
                      minWidth: "100%",
                      boxSizing: "border-box",
                      padding: "0 4px",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: "18px",
                        minHeight: "clamp(540px, 52vw, 680px)",
                      }}
                    >
                      {page.products.map((prod) => {
                        const isFullCatalogCard = prod.slug === "explore-all-co2";
                        const targetHref = isFullCatalogCard
                          ? "/products/co2-oils"
                          : `/products/co2-oils/${prod.slug}`;

                        return (
                          <Link
                            key={prod.id}
                            href={targetHref}
                            style={{ textDecoration: "none", display: "flex", height: "100%" }}
                          >
                            <div
                              className="liquid-glass-elevated"
                              style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                borderRadius: "22px",
                                padding: "22px",
                                backgroundColor: isFullCatalogCard
                                  ? "rgba(24, 13, 38, 0.95)"
                                  : "rgba(255, 255, 255, 0.88)",
                                color: isFullCatalogCard ? "#FFFFFF" : "#180D26",
                                border: isFullCatalogCard
                                  ? "1px solid rgba(139, 92, 246, 0.4)"
                                  : "1px solid rgba(124, 58, 237, 0.2)",
                                boxShadow: "0 8px 24px rgba(24, 13, 38, 0.05)",
                                transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease",
                                cursor: "pointer",
                                boxSizing: "border-box",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-5px)";
                                e.currentTarget.style.boxShadow = isFullCatalogCard
                                  ? "0 16px 40px rgba(124, 58, 237, 0.4)"
                                  : "0 14px 36px rgba(124, 58, 237, 0.16)";
                                e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.45)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 8px 24px rgba(24, 13, 38, 0.05)";
                                e.currentTarget.style.borderColor = isFullCatalogCard
                                  ? "rgba(139, 92, 246, 0.4)"
                                  : "rgba(124, 58, 237, 0.2)";
                              }}
                            >
                              <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                                <div
                                  style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "260px",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    marginBottom: "20px",
                                    backgroundColor: isFullCatalogCard ? "rgba(255, 255, 255, 0.05)" : "#EDE8DF",
                                    border: "1px solid rgba(124, 58, 237, 0.12)",
                                  }}
                                >
                                  <Image
                                    src={prod.compositeImageUrl}
                                    alt={prod.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 320px"
                                    style={{
                                      objectFit: "cover",
                                      objectPosition: "center",
                                    }}
                                  />
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                                  <div>
                                    <h4
                                      style={{
                                        fontSize: "1.24rem",
                                        fontWeight: 700,
                                        fontFamily: "var(--font-lora), Georgia, serif",
                                        color: isFullCatalogCard ? "#FFFFFF" : "#180D26",
                                        margin: "0 0 8px 0",
                                        lineHeight: 1.3,
                                      }}
                                    >
                                      {renderWithCo2(prod.name)}
                                    </h4>
                                    <div
                                      style={{
                                        fontSize: "0.92rem",
                                        fontStyle: "italic",
                                        color: isFullCatalogCard ? "#C4B5FD" : "#7C3AED",
                                        fontWeight: 600,
                                        marginBottom: "10px",
                                        letterSpacing: "0.01em",
                                      }}
                                    >
                                      {prod.botanicalName}
                                    </div>
                                    <div
                                      style={{
                                        fontSize: "0.82rem",
                                        color: isFullCatalogCard ? "rgba(255, 255, 255, 0.75)" : "#6B7280",
                                        fontWeight: 600,
                                        marginBottom: "14px",
                                      }}
                                    >
                                      {renderWithCo2(prod.shortSpec)}
                                    </div>
                                  </div>
                                  <p
                                    style={{
                                      fontSize: "0.9rem",
                                      color: isFullCatalogCard ? "rgba(255, 255, 255, 0.88)" : "#5B486E",
                                      lineHeight: 1.65,
                                      margin: "0 0 12px 0",
                                    }}
                                  >
                                    {renderWithCo2(prod.highlight)}
                                  </p>
                                </div>
                              </div>

                              <div
                                style={{
                                  borderTop: isFullCatalogCard
                                    ? "1px solid rgba(255, 255, 255, 0.15)"
                                    : "1px solid rgba(124, 58, 237, 0.12)",
                                  paddingTop: "14px",
                                  marginTop: "16px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  gap: "6px",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "0.82rem",
                                    fontWeight: 700,
                                    color: isFullCatalogCard ? "#DDD6FE" : "#7C3AED",
                                  }}
                                >
                                  {isFullCatalogCard ? "Explore All Categories" : "View Specifications"}
                                </span>
                                <div
                                  style={{
                                    width: "26px",
                                    height: "26px",
                                    borderRadius: "50%",
                                    backgroundColor: isFullCatalogCard
                                      ? "rgba(139, 92, 246, 0.3)"
                                      : "rgba(124, 58, 237, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: isFullCatalogCard ? "#FFFFFF" : "#7C3AED",
                                  }}
                                >
                                  <ArrowRight size={13} />
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Slide Navigation Indicator: Smart Counter on Mobile vs Sleek Dots on Desktop */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: isMobile ? "6px" : "10px",
          marginTop: "22px",
          flexWrap: "wrap",
        }}
      >
        {isMobile ? (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              backgroundColor: "rgba(124, 58, 237, 0.08)",
              border: "1px solid rgba(124, 58, 237, 0.22)",
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "#7C3AED",
            }}
          >
            <span>{activeDotIndex === 0 ? "CO₂ Extraction Lineup" : `Product ${activeDotIndex} of ${totalRealSlides - 1}`}</span>
          </div>
        ) : (
          Array.from({ length: totalRealSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToDot(idx)}
              aria-label={`Go to catalog page ${idx + 1}`}
              style={{
                height: "8px",
                width: activeDotIndex === idx ? "32px" : "8px",
                borderRadius: "9999px",
                backgroundColor: activeDotIndex === idx ? "#7C3AED" : "rgba(124, 58, 237, 0.25)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                padding: 0,
              }}
            />
          ))
        )}
      </div>
    </section>
  );
}
