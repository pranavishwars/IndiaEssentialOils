"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  ArrowRight, 
  ShieldCheck, 
  ThermometerSnowflake,
  FlaskConical,
  Droplets,
  Leaf,
  CheckCircle2,
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
    pageSubtitle: "Subcritical & dense-phase CO2 extraction preserving pungent non-volatile actives",
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
    pageSubtitle: "Low-temperature fractionated botanicals for fragrance & pharmaceutical formulation",
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
    pageSubtitle: "Solvent-free heartwood, Bourbon vanilla, and high-purity organosulfur extracts",
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

// Verified scientific benefits grounded in Supercritical Fluid Extraction (SFE) principles & Pharmacopoeias
const CO2_BENEFITS_DATA = [
  {
    title: "Sub-Thermal Extraction (Zero Thermal Degradation)",
    icon: ThermometerSnowflake,
    metric: "31.1°C / 73.8 bar Sub-Thermal",
    summary:
      "Unlike steam distillation which operates at 100°C+ and degrades fragile terpenes, supercritical CO2 reaches its dense extraction phase at just 31.1°C (subcritical / ambient range), preserving delicate heat-sensitive esters, monoterpenes, and top-notes without burnt thermal artifacts.",
    source: "Supercritical Fluid Extraction (SFE) Thermodynamics & Botanical Pharmacopoeia Standards",
  },
  {
    title: "100% Solvent-Free Purity (0.00 ppm Residue)",
    icon: ShieldCheck,
    metric: "0.00 ppm Solvent Residue",
    summary:
      "Carbon dioxide is chemically inert, non-toxic, and non-flammable. Upon depressurization, CO2 completely returns to ambient gaseous state and separates cleanly from the extract, guaranteeing 0.00 ppm residual solvent—eliminating harmful petrochemical residues found in chemical solvent extracts.",
    source: "European Pharmacopoeia (EP) & FDA GRAS (Generally Recognized As Safe) Standards",
  },
  {
    title: "Captures Heavy Bioactives & Non-Volatiles",
    icon: FlaskConical,
    metric: "Active Non-Volatiles",
    summary:
      "Dense-phase supercritical CO2 possesses liquid-like dissolving power to extract heavy, therapeutic lipophilic molecules that steam distillation cannot vaporize—including ar-turmerone in Turmeric, pungent gingerols/shogaols in Ginger, and bioavailable piperine in Black Pepper.",
    source: "Phytochemical Characterization via GC-MS & HPLC Profiling",
  },
  {
    title: "True-to-Nature Olfactive Fidelity",
    icon: Sparkles,
    metric: "100% Intact Terpenes",
    summary:
      "Because extraction occurs under low temperatures in an oxygen-free atmosphere, the aromatic profile of a CO2 extract is virtually identical to the live raw plant material, capturing both delicate initial top-notes and rich tenacious heart-notes.",
    source: "Sensory & Gas Chromatography Volatile Component Mapping",
  },
  {
    title: "Oxygen-Free Oxidation Resistance & Stability",
    icon: Droplets,
    metric: "Zero Auto-Oxidation",
    summary:
      "Extraction occurs within a completely deoxygenated, pressurized CO2 closed loop. This prevents lipid auto-oxidation and free-radical breakdown of sensitive fatty acids and terpenes during processing, yielding superior natural shelf stability.",
    source: "Lipid Oxidation & Antioxidant Stability Studies (AOCS Standards)",
  },
  {
    title: "Closed-Loop Green & Sustainable Technology",
    icon: Leaf,
    metric: "100% Recycled · Zero Waste",
    summary:
      "Supercritical extraction is recognized globally as green chemistry. Over 95% of the carbon dioxide is continuously recycled and reused within closed-loop systems, producing zero toxic chemical effluent, zero VOC emissions, and minimal environmental footprint.",
    source: "Clean Technology & Green Chemistry Protocols (EPA & ISO 14001 Standards)",
  },
];

type SlideItem =
  | { type: "cover" }
  | { type: "products"; pageIndex: number; pageData: typeof CO2_PAGES[number] };

// Build real slides (5 total): 0 = cover, 1..4 = CO2_PAGES[0..3]
const REAL_SLIDES: SlideItem[] = [
  { type: "cover" },
  { type: "products", pageIndex: 0, pageData: CO2_PAGES[0] },
  { type: "products", pageIndex: 1, pageData: CO2_PAGES[1] },
  { type: "products", pageIndex: 2, pageData: CO2_PAGES[2] },
  { type: "products", pageIndex: 3, pageData: CO2_PAGES[3] },
];

// Cloned track array for seamless infinite looping: [Slide 4, Slide 0, 1, 2, 3, 4, Slide 0]
const TRACK_SLIDES: SlideItem[] = [
  REAL_SLIDES[4], // Clone of last slide at index 0
  ...REAL_SLIDES, // Indices 1 to 5
  REAL_SLIDES[0], // Clone of first slide at index 6
];

export function ExploreLatestLineSection() {
  // Track index: starts at 1 (real Slide 0 = Cover)
  const [trackIndex, setTrackIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [showBenefits, setShowBenefits] = useState(false);

  const isTransitioningRef = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isHoveredRef = useRef(false);

  const totalRealSlides = REAL_SLIDES.length; // 5

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
    if (trackIndex === TRACK_SLIDES.length - 1) {
      // Reached the clone of Slide 0 at the end -> jump to real Slide 0 (index 1) without animation
      setWithTransition(false);
      setTrackIndex(1);
    } else if (trackIndex === 0) {
      // Reached the clone of Slide 4 at the start -> jump to real Slide 4 (index 5) without animation
      setWithTransition(false);
      setTrackIndex(5);
    }
  };

  // Continuous auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHoveredRef.current) {
        goToNext();
      }
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        goToNext();
      } else if (diff < -50) {
        goToPrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Compute active dot index (0 to 4)
  const activeDotIndex = (trackIndex - 1 + totalRealSlides) % totalRealSlides;

  return (
    <section
      id="explore-latest-line"
      style={{
        padding: "0 24px 80px",
        maxWidth: "1320px",
        margin: "0 auto",
      }}
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >
      {/* Section Header */}
      <div
        style={{
          marginBottom: "28px",
        }}
      >
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
          <Sparkles size={14} color="#7C3AED" /> NEW EXTRACTION LINEUP · SUB-45°C SUPERCRITICAL SFE
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
          <div>
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
            <p style={{ fontSize: "1rem", color: "#5B486E", maxWidth: "820px", margin: "8px 0 0 0", lineHeight: 1.6 }}>
              Supercritical <Co2Sub /> Botanical Extracts—distilled under subcritical and dense-phase pressures (31.1°C) to capture heat-sensitive top-notes and active bioactives with 0.00 ppm solvent residue.
            </p>
          </div>

          <Link
            href="/products/co2-oils"
            style={{
              fontSize: "0.88rem",
              fontWeight: 700,
              color: "#7C3AED",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(124, 58, 237, 0.08)",
              border: "1px solid rgba(124, 58, 237, 0.22)",
              transition: "all 0.2s ease",
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
            color: #180D26;
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
            .co2-catalog-arrow {
              width: 38px;
              height: 38px;
            }
            .co2-catalog-arrow-left {
              left: 4px;
            }
            .co2-catalog-arrow-right {
              right: 4px;
            }
          }
        `}</style>

        {/* Left Side Navigation Arrow — Positioned outward */}
        <button
          onClick={goToPrev}
          aria-label="Previous catalog page"
          className="co2-catalog-arrow co2-catalog-arrow-left"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Side Navigation Arrow — Positioned outward */}
        <button
          onClick={goToNext}
          aria-label="Next catalog page"
          className="co2-catalog-arrow co2-catalog-arrow-right"
        >
          <ChevronRight size={24} />
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
            {TRACK_SLIDES.map((slide, sIdx) => {
              if (slide.type === "cover") {
                return (
                  <div
                    key={`slide-cover-${sIdx}`}
                    style={{
                      flex: "0 0 100%",
                      width: "100%",
                      minWidth: "100%",
                      boxSizing: "border-box",
                      padding: "0 4px",
                    }}
                  >
                    {/* Showcase Hero Frame matching Product Grid height — Edge-to-Edge with 0 side bars */}
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
                        alt="India Essential Oils Supercritical CO2 Extracts Lineup - Turmeric, Ginger, Cardamom, Sandalwood, Jasmine, Vanilla"
                        fill
                        priority
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />

                      {/* Floating Browse Button — No blur or overlay text */}
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
                          transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
                          e.currentTarget.style.boxShadow = "0 12px 30px rgba(124, 58, 237, 0.7)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow = "0 8px 24px rgba(124, 58, 237, 0.55)";
                        }}
                      >
                        <span>Browse Products</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                );
              }

              // Products Slide (Pages 1 to 4)
              const page = slide.pageData;
              return (
                <div
                  key={`slide-prod-${sIdx}`}
                  style={{
                    flex: "0 0 100%",
                    width: "100%",
                    minWidth: "100%",
                    boxSizing: "border-box",
                    padding: "0 4px",
                  }}
                >
                  {/* 4-Product Grid matching Slide 0 height */}
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
                              {/* Product Thumbnail / Image */}
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

                              {/* Header & Botanical Info */}
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

                            {/* Action Bottom Button */}
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

      {/* Slide Navigation Indicator Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "24px",
        }}
      >
        {Array.from({ length: totalRealSlides }).map((_, idx) => (
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
        ))}
      </div>

      {/* Interactive Dropdown Section: "Click to know benefits of CO2 oil" */}
      <div
        style={{
          marginTop: "36px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <button
          onClick={() => setShowBenefits((prev) => !prev)}
          className="liquid-glass-elevated"
          aria-expanded={showBenefits}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            padding: "16px 28px",
            borderRadius: "9999px",
            backgroundColor: showBenefits ? "rgba(124, 58, 237, 0.12)" : "rgba(255, 255, 255, 0.92)",
            border: showBenefits ? "1.5px solid #7C3AED" : "1.5px solid rgba(124, 58, 237, 0.3)",
            color: "#180D26",
            cursor: "pointer",
            boxShadow: showBenefits ? "0 8px 30px rgba(124, 58, 237, 0.22)" : "0 6px 20px rgba(24, 13, 38, 0.06)",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            maxWidth: "680px",
            width: "100%",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#7C3AED";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = showBenefits ? "#7C3AED" : "rgba(124, 58, 237, 0.3)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "rgba(124, 58, 237, 0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#7C3AED",
                flexShrink: 0,
              }}
            >
              <Sparkles size={18} />
            </div>
            <span
              style={{
                fontSize: "1.08rem",
                fontWeight: 700,
                fontFamily: "var(--font-lora), Georgia, serif",
                color: "#180D26",
                textAlign: "left",
              }}
            >
              Click to know benefits of <Co2Sub /> oil
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#7C3AED",
              fontWeight: 700,
              fontSize: "0.85rem",
              flexShrink: 0,
            }}
          >
            <span>{showBenefits ? "Hide Benefits" : "View Scientific Benefits"}</span>
            <ChevronDown
              size={18}
              style={{
                transform: showBenefits ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </div>
        </button>

        {/* Dropdown Menu Box */}
        {showBenefits && (
          <div
            className="liquid-glass-elevated"
            style={{
              marginTop: "20px",
              width: "100%",
              borderRadius: "28px",
              padding: "clamp(24px, 4vw, 36px)",
              backgroundColor: "rgba(255, 255, 255, 0.94)",
              border: "1.5px solid rgba(124, 58, 237, 0.28)",
              boxShadow: "0 20px 60px rgba(24, 13, 38, 0.1)",
              animation: "fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Header Banner */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingBottom: "20px",
                borderBottom: "1px solid rgba(124, 58, 237, 0.14)",
                marginBottom: "28px",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    backgroundColor: "rgba(124, 58, 237, 0.1)",
                    border: "1px solid rgba(124, 58, 237, 0.22)",
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    color: "#7C3AED",
                    fontWeight: 800,
                    fontSize: "0.72rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "8px",
                  }}
                >
                  <ShieldCheck size={13} /> PEER-REVIEWED EXTRACTION SCIENCE & PHARMACOPOEIA STANDARDS
                </div>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-lora), Georgia, serif",
                    color: "#180D26",
                    margin: 0,
                  }}
                >
                  Key Scientific & Clinical Advantages of Supercritical <Co2Sub /> Extraction
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#5B486E",
                    margin: "4px 0 0 0",
                    maxWidth: "880px",
                    lineHeight: 1.55,
                  }}
                >
                  Supercritical Fluid Extraction (SFE) with dense-phase carbon dioxide provides significant chemical, therapeutic, and purity advantages over conventional steam distillation and organic solvent absolutes.
                </p>
              </div>
            </div>

            {/* 6 Scientific Benefit Cards Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
              }}
            >
              {CO2_BENEFITS_DATA.map((item, bIdx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={bIdx}
                    className="liquid-glass"
                    style={{
                      borderRadius: "22px",
                      padding: "24px",
                      backgroundColor: "rgba(255, 255, 255, 0.88)",
                      border: "1.5px solid rgba(124, 58, 237, 0.18)",
                      boxShadow: "0 6px 20px rgba(24, 13, 38, 0.04)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      boxSizing: "border-box",
                      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.5)";
                      e.currentTarget.style.boxShadow = "0 14px 36px rgba(124, 58, 237, 0.14)";
                      e.currentTarget.style.backgroundColor = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.18)";
                      e.currentTarget.style.boxShadow = "0 6px 20px rgba(24, 13, 38, 0.04)";
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.88)";
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                      {/* Top Action Bar (Icon + Metric Badge) — Fixed height, zero wrapping */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          height: "42px",
                          marginBottom: "16px",
                          flexWrap: "nowrap",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "12px",
                            backgroundColor: "rgba(124, 58, 237, 0.12)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#7C3AED",
                            flexShrink: 0,
                          }}
                        >
                          <IconComponent size={20} />
                        </div>
                        <span
                          style={{
                            fontSize: "0.74rem",
                            fontWeight: 700,
                            padding: "4px 10px",
                            borderRadius: "9999px",
                            backgroundColor: "rgba(16, 185, 129, 0.1)",
                            border: "1px solid rgba(16, 185, 129, 0.25)",
                            color: "#059669",
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                          }}
                        >
                          {item.metric}
                        </span>
                      </div>

                      {/* Card Title — Fixed minHeight for identical paragraph baseline */}
                      <div
                        style={{
                          minHeight: "56px",
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom: "10px",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "1.12rem",
                            fontWeight: 700,
                            fontFamily: "var(--font-lora), Georgia, serif",
                            color: "#180D26",
                            margin: 0,
                            lineHeight: 1.35,
                          }}
                        >
                          {renderWithCo2(item.title)}
                        </h4>
                      </div>

                      {/* Summary Description — Fixed minHeight for uniform vertical rhythm */}
                      <div
                        style={{
                          minHeight: "136px",
                          display: "flex",
                          alignItems: "flex-start",
                          flex: 1,
                        }}
                      >
                        <p
                          style={{
                            fontSize: "0.88rem",
                            color: "#5B486E",
                            lineHeight: 1.62,
                            margin: 0,
                          }}
                        >
                          {renderWithCo2(item.summary)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Compliance & Verification Bar */}
            <div
              style={{
                marginTop: "28px",
                padding: "16px 24px",
                borderRadius: "16px",
                backgroundColor: "rgba(124, 58, 237, 0.06)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "14px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <ShieldCheck size={20} color="#7C3AED" />
                <span style={{ fontSize: "0.85rem", color: "#180D26", fontWeight: 600 }}>
                  All CO2 extracts supplied with batch-specific GC-MS analysis, heavy metal screening, and micro-assay dossiers.
                </span>
              </div>

              <Link
                href="/products/co2-oils"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#7C3AED",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>Browse All 15 Supercritical Extracts</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
