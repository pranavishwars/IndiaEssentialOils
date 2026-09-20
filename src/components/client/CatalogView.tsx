"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, Filter, ArrowRight, Loader2 } from "lucide-react";
import { Product, getCategorySlug, SLUG_TO_CATEGORY } from "@/lib/products-store";
import { DownloadCatalogButton } from "@/components/client/DownloadCatalogButton";

interface CategoryMeta {
  title: string;
  description: string;
  slug: string;
}

export function getCatalogShortDesc(desc?: string): string {
  if (!desc) return "";
  const words = desc.trim().split(/\s+/);
  if (words.length <= 25) return desc.trim();
  return words.slice(0, 25).join(" ").replace(/[,;:\s]+$/, "") + "...";
}

export const CATEGORY_DETAILS: Record<string, CategoryMeta> = {
  ALL: {
    title: "Botanical Catalog & Search",
    description: "Explore pure, lab-tested botanical extracts across 8 specialized categories with comprehensive chemical analysis and GC-MS documentation.",
    slug: "",
  },
  CO2_OIL: {
    title: "CO2 Oils (Extracts)",
    description: "Supercritical fluid CO2 extracted botanical oils capturing full-spectrum, pristine aromatic profiles without thermal degradation or solvent residue.",
    slug: "co2-oils",
  },
  ESSENTIAL_OIL: {
    title: "Essential Oils",
    description: "Pure steam distilled and cold pressed essential oils. Available in bulk from 1kg to 200kg drums.",
    slug: "essential-oils",
  },
  SPICE_OIL: {
    title: "Spice Oils",
    description: "Authentic spice essential oils steam distilled from the finest quality spices with dual GC-MS batch verification.",
    slug: "spice-oils",
  },
  CARRIER_OIL: {
    title: "Carrier & Base Oils",
    description: "Premium cold-pressed carrier oils used for diluting essential oils in aromatherapy, massage therapy, and cosmetic formulations.",
    slug: "carrier-oils",
  },
  FLORAL_ABSOLUTE: {
    title: "Floral Absolutes",
    description: "Solvent-extracted floral absolutes capturing the true fragrance of flowers, used in high-end perfumery and luxury cosmetics.",
    slug: "floral-absolutes",
  },
  FLORAL_WATER: {
    title: "Floral Waters (Hydrosols)",
    description: "Pure hydrosols and floral waters — the water-based byproduct of steam distillation, rich in therapeutic compounds.",
    slug: "floral-waters",
  },
  OLEORESIN: {
    title: "Oleoresins",
    description: "Concentrated plant extracts combining essential oil and resinous matter, widely used in food flavouring, pharmaceuticals, and industrial applications.",
    slug: "oleoresins",
  },
  ORGANIC_OIL: {
    title: "Organic Oils",
    description: "Certified organic essential and carrier oils grown without synthetic pesticides or fertilizers. USDA and EU organic certified.",
    slug: "organic-oils",
  },
  AYURVEDIC: {
    title: "Ayurvedic Oils",
    description: "Traditional Indian Ayurvedic herbal oils formulated following ancient Ayurvedic texts, used in holistic wellness and therapeutic massage.",
    slug: "ayurvedic-oils",
  },
};

const CATEGORIES = [
  { id: "ALL", label: "All Categories" },
  { id: "CO2_OIL", label: "CO2 Oils (Extracts)" },
  { id: "ESSENTIAL_OIL", label: "Essential Oils" },
  { id: "SPICE_OIL", label: "Spice Oils" },
  { id: "CARRIER_OIL", label: "Carrier & Base Oils" },
  { id: "FLORAL_ABSOLUTE", label: "Floral Absolutes" },
  { id: "FLORAL_WATER", label: "Floral Waters (Hydrosols)" },
  { id: "OLEORESIN", label: "Oleoresins" },
  { id: "ORGANIC_OIL", label: "Organic Oils" },
  { id: "AYURVEDIC", label: "Ayurvedic Oils" },
];

function ProductCardSkeleton() {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.74)",
        backdropFilter: "blur(24px) saturate(160%)",
        WebkitBackdropFilter: "blur(24px) saturate(160%)",
        border: "1px solid rgba(124, 58, 237, 0.1)",
        borderRadius: "24px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 6px 24px rgba(24, 13, 38, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
      }}
    >
      {/* Category badge */}
      <div style={{ marginBottom: "12px" }}>
        <div className="skel" style={{ height: "22px", width: "88px", borderRadius: "6px" }} />
      </div>

      {/* Image */}
      <div className="skel" style={{ width: "100%", height: "230px", borderRadius: "16px", marginBottom: "16px" }} />

      {/* Title — two lines */}
      <div className="skel" style={{ height: "1.15rem", width: "88%", borderRadius: "5px", marginBottom: "7px" }} />
      <div className="skel" style={{ height: "1.15rem", width: "55%", borderRadius: "5px", marginBottom: "10px" }} />

      {/* Botanical name */}
      <div className="skel" style={{ height: "0.85rem", width: "52%", borderRadius: "4px", marginBottom: "14px" }} />

      {/* Description — 3 lines */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
        <div className="skel" style={{ height: "0.78rem", width: "100%", borderRadius: "4px" }} />
        <div className="skel" style={{ height: "0.78rem", width: "93%", borderRadius: "4px" }} />
        <div className="skel" style={{ height: "0.78rem", width: "68%", borderRadius: "4px" }} />
      </div>

      {/* Spec strip */}
      <div className="skel" style={{ height: "36px", width: "100%", borderRadius: "8px", marginBottom: "16px" }} />

      {/* Footer row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "14px",
          borderTop: "1px solid rgba(124, 58, 237, 0.08)",
          marginTop: "auto",
        }}
      >
        <div className="skel" style={{ height: "0.85rem", width: "58px", borderRadius: "4px" }} />
        <div className="skel" style={{ height: "0.85rem", width: "92px", borderRadius: "4px" }} />
      </div>
    </div>
  );
}

// Module-scope cache — persists across category switches, Back/Forward navigation,
// and component remounts (key={category}). Lives for the entire browser session.
const clientProductCache = new Map<string, Product[]>();

interface CatalogViewProps {
  preselectedCategory?: string; // Enum key like "ESSENTIAL_OIL", or slug like "essential-oils"
  initialProducts?: Product[];  // SSR-prefetched products — skips the first client fetch
}

export function CatalogView({ preselectedCategory, initialProducts }: CatalogViewProps = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const rawInitialCat = searchParams.get("category") || "ALL";
  const fromQueryParam = SLUG_TO_CATEGORY[rawInitialCat] || rawInitialCat;

  // Resolve the category: path-based preselection wins over query param
  const resolvedInitial = preselectedCategory
    ? (SLUG_TO_CATEGORY[preselectedCategory] || preselectedCategory)
    : fromQueryParam;

  const initialSort = searchParams.get("sort") || "relevance";

  // Pre-compute the cache key for SSR data so we can seed the client cache
  const initialCacheKey = `${initialQuery.trim()}|${resolvedInitial}|${initialSort}`;

  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState(resolvedInitial);
  const [sortOption, setSortOption] = useState(initialSort);
  // If SSR data is provided, start with it immediately — no skeleton, no fetch
  const [products, setProducts] = useState<Product[]>(initialProducts ?? []);
  const [isLoading, setIsLoading] = useState(initialProducts === undefined);

  // Sync with searchParams or preselectedCategory on change
  useEffect(() => {
    if (searchParams.get("q") !== null) {
      setQuery(searchParams.get("q") || "");
    }
    if (searchParams.get("category")) {
      const rawCat = searchParams.get("category") || "ALL";
      setActiveCategory(SLUG_TO_CATEGORY[rawCat] || rawCat);
    } else if (preselectedCategory) {
      const resolved = SLUG_TO_CATEGORY[preselectedCategory] || preselectedCategory;
      setActiveCategory(resolved);
    } else {
      setActiveCategory("ALL");
    }
    if (searchParams.get("sort")) {
      setSortOption(searchParams.get("sort") || "relevance");
    }
  }, [searchParams, preselectedCategory]);

  // Uses module-scope cache — survives remounts and client-side navigations
  const prevQueryRef = React.useRef(query);

  // Fetch search / filtered results with instant caching & smart debouncing
  useEffect(() => {
    // Pre-seed the module cache with SSR data on first mount
    if (initialProducts && !clientProductCache.has(initialCacheKey)) {
      clientProductCache.set(initialCacheKey, initialProducts);
    }

    const cacheKey = `${query.trim()}|${activeCategory}|${sortOption}`;
    if (clientProductCache.has(cacheKey)) {
      setProducts(clientProductCache.get(cacheKey)!);
      setIsLoading(false);
      return;
    }

    // Only debounce if the search text query itself changed (user is typing)
    const isTyping = prevQueryRef.current !== query;
    prevQueryRef.current = query;
    const debounceMs = isTyping ? 150 : 0;

    setIsLoading(true);
    const controller = new AbortController();

    async function fetchResults() {
      try {
        const params = new URLSearchParams();
        if (query.trim()) params.set("q", query.trim());
        if (activeCategory !== "ALL") params.set("category", activeCategory);
        params.set("sort", sortOption);

        const res = await fetch(`/api/search?${params.toString()}`, {
          signal: controller.signal,
        });

        if (res.ok) {
          const data = await res.json();
          clientProductCache.set(cacheKey, data.results);
          setProducts(data.results);
        }
      } catch (err: unknown) {
        // AbortError is expected when cleanup cancels the request — don't touch state
        if (err instanceof Error && err.name !== "AbortError") {
          console.error("Failed to fetch products:", err);
          // Genuine network error: clear loading so the empty state is shown
          if (!controller.signal.aborted) setIsLoading(false);
        }
        return; // don't run finally state updates on abort
      }
      // Only clear loading when the fetch actually completed (not aborted)
      if (!controller.signal.aborted) {
        setIsLoading(false);
      }
    }

    if (debounceMs === 0) {
      fetchResults();
      return () => controller.abort();
    }

    const timer = setTimeout(() => {
      fetchResults();
    }, debounceMs);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, activeCategory, sortOption]);

  const handleProductView = (product: Product) => {
    fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: product.id, type: "VIEW" }),
    }).catch(() => { });
    router.push(`/products/${getCategorySlug(product.category)}/${product.slug}`);
  };

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId);
    const meta = CATEGORY_DETAILS[categoryId];
    const targetUrl = meta && meta.slug ? `/products/${meta.slug}` : "/products";
    router.push(targetUrl, { scroll: false });
  };

  const currentMeta = CATEGORY_DETAILS[activeCategory] || CATEGORY_DETAILS.ALL;

  return (
    <>
    <style>{`
      @keyframes skel-sweep {
        0%   { background-position: -700px 0; }
        100% { background-position: 700px 0; }
      }
      .skel {
        background: linear-gradient(
          90deg,
          rgba(240, 230, 255, 0.75) 25%,
          rgba(220, 200, 255, 0.90) 50%,
          rgba(240, 230, 255, 0.75) 75%
        );
        background-size: 1400px 100%;
        animation: skel-sweep 1.7s ease-in-out infinite;
        border-radius: 4px;
      }
    `}</style>
    <div>
      {/* Dynamic Category Header */}
      <div style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "12px" }}>
          {currentMeta.title}
        </h1>
        <p style={{ fontSize: "1.05rem", color: "#5B486E", maxWidth: "680px", lineHeight: 1.7 }}>
          {currentMeta.description}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "clamp(220px, 22%, 280px) 1fr", gap: "36px", alignItems: "start" }} className="catalog-layout">
        {/* Left Sidebar Filter — Vibrant Liquid Glass */}
        <aside
          style={{
            position: "sticky",
            top: "96px",
            backgroundColor: "rgba(255, 255, 255, 0.74)",
            backdropFilter: "blur(24px) saturate(160%)",
            WebkitBackdropFilter: "blur(24px) saturate(160%)",
            border: "1px solid rgba(124, 58, 237, 0.2)",
            borderRadius: "24px",
            padding: "24px 16px",
            boxShadow: "0 8px 30px rgba(24, 13, 38, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px", color: "#180D26", paddingLeft: "6px" }}>
            <Filter size={18} color="#7C3AED" />
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", margin: 0, color: "#180D26" }}>
              Categories
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {CATEGORIES.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "9px 12px",
                  borderRadius: "14px",
                  fontSize: "0.875rem",
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? "white" : "#180D26",
                  backgroundColor: isActive ? "#7C3AED" : "transparent",
                  backgroundImage: isActive ? "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)" : "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  transition: "background-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease",
                  boxShadow: isActive ? "0 2px 10px rgba(24, 13, 38, 0.12)" : "none",
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.08)";
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", flex: 1 }}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main Results Column */}
      <section>
        {/* Search & Sort Controls Bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.76)",
            backdropFilter: "blur(24px) saturate(160%)",
            WebkitBackdropFilter: "blur(24px) saturate(160%)",
            border: "1px solid rgba(124, 58, 237, 0.2)",
            borderRadius: "20px",
            padding: "12px 20px",
            marginBottom: "28px",
            boxShadow: "0 4px 20px rgba(24, 13, 38, 0.03)",
          }}
        >
          {/* Search Box */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, minWidth: "240px" }}>
            <Search size={16} color="#7C3AED" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by name, botanical source, aroma..."
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                fontSize: "0.9rem",
                color: "#180D26",
                fontWeight: 500,
              }}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                style={{ background: "transparent", border: "none", color: "#5B486E", cursor: "pointer", fontSize: "0.8rem", fontWeight: 600 }}
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort Selector & Download Catalog Action */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.825rem", color: "#5B486E", fontWeight: 600 }}>Sort by:</span>
              <select
                value={sortOption}
                onChange={e => setSortOption(e.target.value)}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  border: "1px solid rgba(124, 58, 237, 0.25)",
                  borderRadius: "12px",
                  padding: "6px 14px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#180D26",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <option value="relevance">Relevance</option>
                <option value="name">Alphabetical (A - Z)</option>
              </select>
            </div>

            <DownloadCatalogButton variant="pill" label="Download Catalog" />
          </div>
        </div>

        {/* Results Info */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", padding: "0 4px" }}>
          <div style={{ fontSize: "0.875rem", color: "#5B486E", display: "flex", alignItems: "center" }}>
            {isLoading && products.length === 0 ? (
              <div className="skel" style={{ height: "1rem", width: "170px", borderRadius: "5px" }} />
            ) : (
              <>
                Showing <strong style={{ color: "#180D26", margin: "0 3px" }}>{products.length}</strong> botanical products
                {query ? ` for "${query}"` : ""}
              </>
            )}
          </div>
          {isLoading && products.length > 0 && (
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#7C3AED", fontWeight: 600 }}>
              <Loader2 size={14} className="animate-spin" /> Updating results...
            </div>
          )}
        </div>

        {/* Product Grid */}
        {isLoading && products.length === 0 ? (
          /* ── Skeleton loading grid ── */
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", containerType: "inline-size" } as React.CSSProperties}>
            {Array.from({ length: 12 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : products.length > 0 ? (
          /* ── Real product grid ── */
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", containerType: "inline-size" } as React.CSSProperties}>
            {products.map(product => (
              <div
                key={product.id}
                onClick={() => handleProductView(product)}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.74)",
                  backdropFilter: "blur(24px) saturate(160%)",
                  WebkitBackdropFilter: "blur(24px) saturate(160%)",
                  border: "1px solid rgba(124, 58, 237, 0.15)",
                  borderRadius: "24px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "0 6px 24px rgba(24, 13, 38, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                  transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 18px 45px rgba(24, 13, 38, 0.12)";
                  e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.35)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 6px 24px rgba(24, 13, 38, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)";
                  e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.15)";
                }}
              >
                {/* Header tag and Popularity badge */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "#7C3AED",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      backgroundColor: "rgba(124, 58, 237, 0.08)",
                      padding: "3px 8px",
                      borderRadius: "6px",
                    }}
                  >
                    {product.category.replace(/_/g, " ")}
                  </span>
                </div>

                {/* Product Composite Studio Image */}
                <div style={{ position: "relative", width: "100%", height: "230px", borderRadius: "16px", overflow: "hidden", marginBottom: "16px", border: "1px solid rgba(124, 58, 237, 0.12)", display: "block" }}>
                  <img
                    src={product.compositeImageUrl || `/products/${product.slug}.webp`}
                    alt={product.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transition: "transform 0.4s ease", display: "block" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    loading="lazy"
                  />
                </div>

                <h3
                  style={{
                    fontSize: "1.18rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-lora), Georgia, serif",
                    color: "#180D26",
                    marginBottom: "4px",
                    height: "2.8rem",
                    lineHeight: 1.3,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title={product.name}
                >
                  {product.name}
                </h3>

                <div
                  style={{
                    fontSize: "0.8rem",
                    fontStyle: "italic",
                    color: "#5B486E",
                    marginBottom: "12px",
                    height: "1.2rem",
                    lineHeight: "1.2rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {product.botanicalName || "\u00A0"}
                </div>

                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#5B486E",
                    lineHeight: 1.55,
                    marginBottom: "16px",
                    height: "3.95rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title={product.description}
                >
                  {getCatalogShortDesc(product.description)}
                </p>

                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "#180D26",
                    backgroundColor: "rgba(124, 58, 237, 0.08)",
                    border: "1px solid rgba(124, 58, 237, 0.15)",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    marginBottom: "16px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                  title={product.shortSpec}
                >
                  <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {product.shortSpec}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(124, 58, 237, 0.15)",
                    gap: "8px",
                    marginTop: "auto",
                  }}
                >
                  <div
                    className="notranslate"
                    translate="no"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "0.82rem",
                      color: "#5B486E",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontWeight: 600, opacity: 0.85 }}>MOQ:</span>
                    <strong style={{ color: "#180D26", fontWeight: 700 }}>{product.moq}</strong>
                  </div>

                  <Link
                    href={`/contact?product=${encodeURIComponent(product.slug)}`}
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "#7C3AED",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "#6D28D9";
                      e.currentTarget.style.transform = "translateX(2px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "#7C3AED";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <span>Request Quote</span>
                    <ArrowRight size={13} style={{ flexShrink: 0 }} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.74)",
              backdropFilter: "blur(24px) saturate(160%)",
              WebkitBackdropFilter: "blur(24px) saturate(160%)",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              borderRadius: "24px",
              padding: "64px 32px",
              textAlign: "center",
            }}
          >
            <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#180D26", marginBottom: "8px" }}>
              No products found
            </h4>
            <p style={{ color: "#5B486E", fontSize: "0.9rem", marginBottom: "20px" }}>
              We couldn&rsquo;t find any oils matching your current filters.
            </p>
            <button
              onClick={() => {
                setQuery("");
                handleCategorySelect("ALL");
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
                boxShadow: "0 4px 14px rgba(24, 13, 38, 0.16)",
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
      </div>
    </div>
  </>
  );
}
