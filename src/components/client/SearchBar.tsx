"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, Loader2 } from "lucide-react";
import { Product, getCategorySlug } from "@/lib/products-store";

interface SearchBarProps {
  variant?: "navbar" | "full";
  scrolled?: boolean;
  placeholder?: string;
  onSelect?: (product: Product) => void;
}

export function SearchBar({
  variant = "navbar",
  scrolled = false,
  placeholder = "Search 200+ botanical oils...",
  onSelect,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Product[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when expanded in navbar
  useEffect(() => {
    if (variant === "navbar" && isExpanded) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isExpanded, variant]);

  // Debounced search query
  useEffect(() => {
    if (!query.trim()) {
      const resetTimer = setTimeout(() => {
        setResults([]);
        setIsLoading(false);
      }, 0);
      return () => clearTimeout(resetTimer);
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query.trim())}`);
        if (res.ok) {
          const data = await res.json();
          setResults(data.results.slice(0, 6)); // Top 6 matches
        }
      } catch (err) {
        console.error("Search fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        if (variant === "navbar" && !query.trim()) {
          setIsExpanded(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [variant, query]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < results.length) {
        const selected = results[selectedIndex];
        handleSelectProduct(selected);
      } else if (query.trim()) {
        router.push(`/products?q=${encodeURIComponent(query.trim())}`);
        setIsOpen(false);
        if (variant === "navbar") setIsExpanded(false);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      if (variant === "navbar" && !query.trim()) {
        setIsExpanded(false);
      }
    }
  };

  const handleSelectProduct = (product: Product) => {
    fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: product.id, type: "VIEW" }),
    }).catch(() => { });

    if (onSelect) {
      onSelect(product);
    } else {
      router.push(`/products/${getCategorySlug(product.category)}/${product.slug}`);
    }
    setIsOpen(false);
    setQuery("");
    if (variant === "navbar") {
      setIsExpanded(false);
    }
  };

  const isNavbar = variant === "navbar";
  const activeExpanded = !isNavbar || isExpanded || query.length > 0;

  const inputBg = variant === "full"
    ? "rgba(255,255,255,0.75)"
    : scrolled
      ? "rgba(176,152,213,0.12)"
      : "rgba(35, 24, 48, 0.48)";

  const inputBorder = variant === "full"
    ? "1px solid rgba(176,152,213,0.35)"
    : scrolled
      ? "1px solid rgba(176,152,213,0.35)"
      : "1px solid rgba(255,255,255,0.3)";

  const textColor = variant === "full" ? "#180D26" : scrolled ? "#180D26" : "white";
  const iconColor = variant === "full" ? "#7C3AED" : scrolled ? "#7C3AED" : "rgba(255,255,255,0.9)";
  const placeholderColor = variant === "full"
    ? "#5B486E"
    : scrolled
      ? "rgba(91, 72, 110, 0.75)"
      : "rgba(255, 255, 255, 0.75)";
  const textShadow = scrolled || variant === "full" ? "none" : "0 1px 6px rgba(0,0,0,0.35)";

  const inputId = isNavbar ? "navbar-search-input" : "full-search-input";

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: variant === "full" ? "100%" : activeExpanded ? "260px" : "48px",
        transition: "width 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Search Container (Circle when collapsed, Pill when expanded) */}
      <div
        onClick={() => {
          if (isNavbar && !isExpanded) {
            setIsExpanded(true);
            setIsOpen(true);
          }
        }}
        className="liquid-glass-pill"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: activeExpanded ? "flex-start" : "center",
          height: "48px",
          width: variant === "full" ? "100%" : activeExpanded ? "260px" : "48px",
          boxSizing: "border-box",
          backgroundColor: inputBg,
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          border: inputBorder,
          borderRadius: "9999px",
          padding: activeExpanded ? "0 16px" : 0,
          boxShadow: variant === "full"
            ? "0 4px 20px rgba(0,0,0,0.04)"
            : scrolled
              ? "0 2px 8px rgba(74,59,82,0.04)"
              : "0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          cursor: !activeExpanded ? "pointer" : "text",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseEnter={(e) => {
          if (!activeExpanded) {
            e.currentTarget.style.backgroundColor = scrolled
              ? "rgba(176,152,213,0.20)"
              : "rgba(45, 32, 60, 0.70)";
          }
        }}
        onMouseLeave={(e) => {
          if (!activeExpanded) {
            e.currentTarget.style.backgroundColor = inputBg;
          }
        }}
        role={!activeExpanded ? "button" : undefined}
        aria-label={!activeExpanded ? "Open search" : undefined}
      >
        <Search
          size={18}
          color={iconColor}
          style={{
            flexShrink: 0,
            marginRight: activeExpanded ? "8px" : 0,
            transition: "all 0.3s ease",
          }}
        />

        {/* Input field (Visible only when expanded) */}
        {activeExpanded && (
          <>
            <input
              ref={inputRef}
              id={inputId}
              className={inputId}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: textColor,
                textShadow,
                fontFamily: "inherit",
                transition: "color 0.4s ease",
              }}
            />

            {isLoading ? (
              <Loader2 size={16} color="#7C3AED" className="animate-spin" style={{ flexShrink: 0 }} />
            ) : query ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setQuery("");
                  setResults([]);
                  inputRef.current?.focus();
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  padding: "4px",
                  color: iconColor,
                  opacity: 0.8,
                }}
                aria-label="Clear query"
              >
                <X size={15} />
              </button>
            ) : isNavbar ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                  setIsOpen(false);
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  padding: "4px",
                  color: iconColor,
                  opacity: 0.7,
                }}
                aria-label="Close search"
              >
                <X size={14} />
              </button>
            ) : null}
          </>
        )}

        <style>{`
          .${inputId}::placeholder {
            color: ${placeholderColor} !important;
            opacity: 1;
            transition: color 0.4s ease;
          }
        `}</style>
      </div>

      {/* Autocomplete Dropdown with Crisp Vibrant Liquid Glass Theme */}
      {isOpen && query.trim().length > 0 && (
        <div
          className="search-dropdown-glass"
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            insetInlineStart: 0,
            width: "360px",
            maxWidth: "calc(100vw - 32px)",
            backgroundColor: "rgba(252, 250, 246, 0.84)",
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            borderRadius: "20px",
            boxShadow: "0 20px 50px rgba(24, 13, 38, 0.18), 0 2px 10px rgba(255, 255, 255, 0.6) inset",
            padding: "8px",
            zIndex: 10002,
            overflow: "hidden",
            animation: "searchFadeIn 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {results.length > 0 ? (
            <div>
              <div
                style={{
                  padding: "6px 12px 8px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#7C3AED",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Top Matches ({results.length})
              </div>
              {results.map((product, idx) => (
                <div
                  key={product.id}
                  onClick={() => handleSelectProduct(product)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    backgroundColor:
                      selectedIndex === idx
                        ? "rgba(124, 58, 237, 0.12)"
                        : "rgba(255, 255, 255, 0.6)",
                    border: selectedIndex === idx ? "1px solid rgba(124, 58, 237, 0.25)" : "1px solid transparent",
                    backdropFilter: "blur(8px)",
                    transition: "all 0.15s ease",
                    marginBottom: "4px",
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "10px",
                        backgroundColor: "#F7F4EE",
                        border: "1px solid rgba(124, 58, 237, 0.15)",
                        overflow: "hidden",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={product.compositeImageUrl || `/products/${product.slug}.webp`}
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0 }}>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          color: "#180D26",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {product.name}
                      </div>
                      {product.botanicalName && (
                        <div
                          style={{
                            fontSize: "0.74rem",
                            fontStyle: "italic",
                            color: "#5B486E",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {product.botanicalName}
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        backgroundColor: "rgba(124, 58, 237, 0.1)",
                        color: "#7C3AED",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {product.category.replace(/_/g, " ")}
                    </span>
                  </div>
                </div>
              ))}
              <div
                style={{
                  borderTop: "1px solid rgba(124, 58, 237, 0.15)",
                  marginTop: "6px",
                  paddingTop: "6px",
                }}
              >
                <Link
                  href={`/products?q=${encodeURIComponent(query.trim())}`}
                  onClick={() => {
                    setIsOpen(false);
                    if (isNavbar) setIsExpanded(false);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "8px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#7C3AED",
                    textDecoration: "none",
                    borderRadius: "10px",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.1)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  View all results for &ldquo;{query}&rdquo; <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ) : (
            <div style={{ padding: "20px 16px", textAlign: "center", color: "#5B486E", fontSize: "0.875rem" }}>
              No botanical products matching &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes searchFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
