"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, Loader2, Sparkles, Filter, Package } from "lucide-react";
import { Product, getCategorySlug, CATEGORY_SLUGS } from "@/lib/products-store";

const QUICK_CATEGORY_FILTERS = [
  { label: "All Oils", value: "ALL" },
  { label: "CO2 Oils ✨", value: "CO2_OIL" },
  { label: "Essential Oils", value: "ESSENTIAL_OIL" },
  { label: "Carrier & Base Oils", value: "CARRIER_OIL" },
  { label: "Spice Oils", value: "SPICE_OIL" },
  { label: "Floral Absolutes", value: "FLORAL_ABSOLUTE" },
  { label: "Organic Oils", value: "ORGANIC_OIL" },
  { label: "Ayurvedic Oils", value: "AYURVEDIC" },
];

export function HomeUniversalSearchBar() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [results, setResults] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Debounced live search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setTotalCount(0);
      setIsLoading(false);
      setIsOpen(false);
      return;
    }

    setIsOpen(true);
    setIsLoading(true);

    const timer = setTimeout(async () => {
      try {
        const catParam = selectedCategory !== "ALL" ? `&category=${selectedCategory}` : "";
        const res = await fetch(`/api/search?q=${encodeURIComponent(query.trim())}${catParam}`);
        if (res.ok) {
          const data = await res.json();
          setResults(data.results || []);
          setTotalCount(data.total || 0);
        }
      } catch (err) {
        console.error("Universal search error:", err);
      } finally {
        setIsLoading(false);
      }
    }, 180);

    return () => clearTimeout(timer);
  }, [query, selectedCategory]);

  // Handle keyboard events (Escape to close, Enter to navigate)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    } else if (e.key === "Enter" && query.trim()) {
      e.preventDefault();
      const catParam = selectedCategory !== "ALL" ? `&category=${selectedCategory}` : "";
      router.push(`/products?q=${encodeURIComponent(query.trim())}${catParam}`);
    }
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setTotalCount(0);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleClosePanel = () => {
    setIsOpen(false);
  };

  return (
    <section
      ref={containerRef}
      style={{
        width: "100%",
        maxWidth: "1280px",
        margin: "16px auto 72px",
        padding: "0 24px",
        position: "relative",
        zIndex: 30,
      }}
    >
      {/* Search Input Bar Card */}
      <div
        className="liquid-glass-elevated"
        style={{
          borderRadius: "28px",
          padding: "20px 24px",
          backgroundColor: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          border: isFocused
            ? "1.5px solid rgba(124, 58, 237, 0.6)"
            : "1px solid rgba(124, 58, 237, 0.2)",
          boxShadow: isFocused
            ? "0 20px 50px rgba(124, 58, 237, 0.16), 0 0 0 4px rgba(124, 58, 237, 0.1)"
            : "0 12px 36px rgba(24, 13, 38, 0.08)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Main Search Input Row */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "16px",
              backgroundColor: "rgba(124, 58, 237, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Search size={22} color="#7C3AED" strokeWidth={2.2} />
          </div>

          <div style={{ flex: 1, position: "relative" }}>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => {
                setIsFocused(true);
                if (query.trim()) setIsOpen(true);
              }}
              onBlur={() => setIsFocused(false)}
              onKeyDown={handleKeyDown}
              placeholder="Search 200+ botanical oils, botanical names, carrier oils, CAS numbers..."
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
                fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                fontWeight: 600,
                color: "#180D26",
                fontFamily: "inherit",
              }}
            />
          </div>

          {isLoading && (
            <Loader2
              size={20}
              className="animate-spin"
              style={{ color: "#7C3AED", flexShrink: 0 }}
            />
          )}

          {query && (
            <button
              onClick={handleClear}
              aria-label="Clear search query"
              style={{
                background: "rgba(124, 58, 237, 0.1)",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#5B486E",
                cursor: "pointer",
                flexShrink: 0,
                transition: "all 0.2s",
              }}
            >
              <X size={16} />
            </button>
          )}

          <Link
            href={query.trim() ? `/products?q=${encodeURIComponent(query.trim())}` : "/products"}
            className="btn-vibrant-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "9999px",
              fontSize: "0.95rem",
              fontWeight: 700,
              textDecoration: "none",
              color: "white",
              flexShrink: 0,
              boxShadow: "0 4px 16px rgba(124, 58, 237, 0.35)",
            }}
          >
            <span>Search</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Quick Category Chips */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "16px",
            paddingTop: "14px",
            borderTop: "1px solid rgba(124, 58, 237, 0.12)",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "#7C3AED",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              marginRight: "4px",
              flexShrink: 0,
            }}
          >
            <Filter size={12} /> Filter:
          </span>

          {QUICK_CATEGORY_FILTERS.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                style={{
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: isSelected ? 700 : 600,
                  backgroundColor: isSelected ? "#7C3AED" : "rgba(124, 58, 237, 0.08)",
                  color: isSelected ? "white" : "#5B486E",
                  border: isSelected ? "1px solid #7C3AED" : "1px solid rgba(124, 58, 237, 0.15)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Results Window — In-Flow Document Expansion (Pushes Following Sections Down) */}
      <div
        style={{
          display: isOpen && query.trim() ? "block" : "none",
          marginTop: "20px",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          className="liquid-glass"
          style={{
            borderRadius: "28px",
            padding: "32px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            boxShadow: "0 24px 60px rgba(24, 13, 38, 0.1)",
          }}
        >
          {/* Results Header Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(124, 58, 237, 0.14)",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  color: "#7C3AED",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Live Catalog Matches
              </span>
              <h2
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-lora), Georgia, serif",
                  color: "#180D26",
                  margin: "2px 0 0 0",
                }}
              >
                {isLoading
                  ? `Searching botanical catalog for "${query}"...`
                  : totalCount > 0
                  ? `Found ${totalCount} matching botanical extract${totalCount > 1 ? "s" : ""} for "${query}"`
                  : `No exact matches found for "${query}"`}
              </h2>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {totalCount > 0 && (
                <Link
                  href={`/products?q=${encodeURIComponent(query.trim())}${
                    selectedCategory !== "ALL" ? `&category=${selectedCategory}` : ""
                  }`}
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#7C3AED",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  View Full Catalog Results <ArrowRight size={14} />
                </Link>
              )}

              <button
                onClick={handleClosePanel}
                style={{
                  backgroundColor: "rgba(124, 58, 237, 0.1)",
                  border: "none",
                  borderRadius: "9999px",
                  padding: "6px 14px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#5B486E",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  transition: "all 0.2s",
                }}
              >
                <span>Close Window</span>
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Results Grid */}
          {results.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "20px",
                marginBottom: "24px",
              }}
            >
              {results.slice(0, 8).map((product) => {
                const catSlug = getCategorySlug(product.category);
                return (
                  <Link
                    key={product.id}
                    href={`/products/${catSlug}/${product.slug}`}
                    className="card-interactive liquid-glass"
                    style={{
                      borderRadius: "20px",
                      padding: "18px",
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      border: "1px solid rgba(124, 58, 237, 0.16)",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "150px",
                        borderRadius: "14px",
                        border: "1px solid rgba(124, 58, 237, 0.12)",
                        display: "block",
                        overflow: "hidden",
                        marginBottom: "12px",
                      }}
                    >
                      <img
                        src={product.compositeImageUrl || `/products/${product.slug}.webp`}
                        alt={product.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                      />
                    </div>

                    <div
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        color: "#7C3AED",
                        textTransform: "uppercase",
                        marginBottom: "2px",
                      }}
                    >
                      {product.category.replace(/_/g, " ")}
                    </div>

                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#180D26",
                        marginBottom: "2px",
                        lineHeight: 1.3,
                      }}
                    >
                      {product.name}
                    </h3>

                    {product.botanicalName && (
                      <div
                        style={{
                          fontSize: "0.78rem",
                          color: "#5B486E",
                          fontStyle: "italic",
                          marginBottom: "10px",
                        }}
                      >
                        {product.botanicalName}
                      </div>
                    )}

                    <div
                      style={{
                        marginTop: "auto",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: "10px",
                        borderTop: "1px solid rgba(124, 58, 237, 0.1)",
                        fontSize: "0.78rem",
                        gap: "6px",
                      }}
                    >
                      <span className="notranslate" translate="no" style={{ color: "#180D26", fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0 }}>
                        MOQ: <strong>{product.moq}</strong>
                      </span>
                      <span style={{ color: "#7C3AED", fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>Inspect &rarr;</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : !isLoading ? (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <Package size={40} color="#7C3AED" style={{ margin: "0 auto 12px", opacity: 0.7 }} />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                No direct matches found for &ldquo;{query}&rdquo;
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#5B486E", maxWidth: "480px", margin: "0 auto 20px" }}>
                We distill custom botanical batches and rare chemotypes on demand. Send us your required Latin botanical name or CAS number.
              </p>
              <Link
                href="/request-quote"
                className="btn-vibrant-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 22px",
                  borderRadius: "9999px",
                  color: "white",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                <span>Request Custom Distillation Quote</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ) : null}

          {/* Bottom Action Footer */}
          {results.length > 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "14px",
                borderTop: "1px solid rgba(124, 58, 237, 0.12)",
              }}
            >
              <Link
                href={`/products?q=${encodeURIComponent(query.trim())}${
                  selectedCategory !== "ALL" ? `&category=${selectedCategory}` : ""
                }`}
                className="btn-vibrant-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  borderRadius: "9999px",
                  color: "white",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                <span>Explore All {totalCount} Botanical Results in Full Catalog</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
