"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, Filter, ArrowRight, Loader2 } from "lucide-react";
import { Product, getCategorySlug, SLUG_TO_CATEGORY } from "@/lib/products-store";
import { DownloadCatalogButton } from "@/components/client/DownloadCatalogButton";

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

interface CatalogViewProps {
  preselectedCategory?: string; // Enum key like "ESSENTIAL_OIL", or slug like "essential-oils"
}

export function CatalogView({ preselectedCategory }: CatalogViewProps = {}) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const rawInitialCat = searchParams.get("category") || "ALL";
  const fromQueryParam = SLUG_TO_CATEGORY[rawInitialCat] || rawInitialCat;

  // Resolve the category: path-based preselection wins over query param
  const resolvedInitial = preselectedCategory
    ? (SLUG_TO_CATEGORY[preselectedCategory] || preselectedCategory)
    : fromQueryParam;

  const initialSort = searchParams.get("sort") || "relevance";

  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState(resolvedInitial);
  const [sortOption, setSortOption] = useState(initialSort);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sync with searchParams on URL change
  useEffect(() => {
    if (searchParams.get("q") !== null) {
      setQuery(searchParams.get("q") || "");
    }
    if (searchParams.get("category")) {
      const rawCat = searchParams.get("category") || "ALL";
      setActiveCategory(SLUG_TO_CATEGORY[rawCat] || rawCat);
    }
    if (searchParams.get("sort")) {
      setSortOption(searchParams.get("sort") || "relevance");
    }
  }, [searchParams]);

  // Client-side cache for instant 0ms category switching
  const cacheRef = React.useRef<Map<string, Product[]>>(new Map());
  const prevQueryRef = React.useRef(query);

  // Fetch search / filtered results with instant caching & smart debouncing
  useEffect(() => {
    const cacheKey = `${query.trim()}|${activeCategory}|${sortOption}`;
    if (cacheRef.current.has(cacheKey)) {
      setProducts(cacheRef.current.get(cacheKey)!);
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
          cacheRef.current.set(cacheKey, data.results);
          setProducts(data.results);
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          console.error("Failed to fetch products:", err);
        }
      } finally {
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

  const router = useRouter();

  const handleProductView = (product: Product) => {
    fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: product.id, type: "VIEW" }),
    }).catch(() => { });
    router.push(`/products/${getCategorySlug(product.category)}/${product.slug}`);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "36px", alignItems: "start" }}>
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
                onClick={() => setActiveCategory(cat.id)}
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
                  boxShadow: isActive ? "0 4px 14px rgba(124, 58, 237, 0.35)" : "none",
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
                <option value="name_desc">Alphabetical (Z - A)</option>
              </select>
            </div>

            <DownloadCatalogButton variant="pill" label="Download Catalog" />
          </div>
        </div>

        {/* Results Info */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", padding: "0 4px" }}>
          <div style={{ fontSize: "0.875rem", color: "#5B486E" }}>
            Showing <strong style={{ color: "#180D26" }}>{products.length}</strong> botanical products
            {query ? ` for "${query}"` : ""}
          </div>
          {isLoading && (
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#7C3AED", fontWeight: 600 }}>
              <Loader2 size={14} className="animate-spin" /> Updating results...
            </div>
          )}
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
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
                  boxShadow: "0 6px 24px rgba(24, 13, 38, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                  transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 18px 45px rgba(124, 58, 237, 0.18)";
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

                <h3 style={{ fontSize: "1.18rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "4px" }}>
                  {product.name}
                </h3>
                {product.botanicalName && (
                  <div style={{ fontSize: "0.8rem", fontStyle: "italic", color: "#5B486E", marginBottom: "12px" }}>
                    {product.botanicalName}
                  </div>
                )}

                <p style={{ fontSize: "0.85rem", color: "#5B486E", lineHeight: 1.6, marginBottom: "16px", flexGrow: 1 }}>
                  {product.description}
                </p>

                <div style={{ fontSize: "0.78rem", color: "#180D26", backgroundColor: "rgba(124, 58, 237, 0.08)", border: "1px solid rgba(124, 58, 237, 0.15)", padding: "8px 12px", borderRadius: "8px", marginBottom: "16px" }}>
                  {product.shortSpec}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(124, 58, 237, 0.15)",
                    gap: "8px",
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
                    href="/request-quote"
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
                setActiveCategory("ALL");
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
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
