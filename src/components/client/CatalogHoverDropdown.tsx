"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Flower2, 
  Flame, 
  Droplet, 
  Flower, 
  Waves, 
  Beaker, 
  Leaf, 
  Sprout, 
  Layers,
  ChevronDown,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface CatalogHoverDropdownProps {
  isLightNav: boolean;
  textColor: string;
  textShadow: string;
}

export const CATALOG_CATEGORIES_MENU = [
  {
    name: "CO2 Oils (Extracts)",
    href: "/products/co2-oils",
    desc: "Supercritical fluid extraction",
    badge: "Trending ✨",
    badgeColor: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
    icon: <Sparkles size={18} color="#EC4899" />,
  },
  {
    name: "Essential Oils",
    href: "/products/essential-oils",
    desc: "100% steam distilled & GC-MS certified",
    icon: <Flower2 size={18} color="#8B5CF6" />,
  },
  {
    name: "Spice Oils",
    href: "/products/spice-oils",
    desc: "Pure Indian spice distillates",
    icon: <Flame size={18} color="#F97316" />,
  },
  {
    name: "Carrier & Base Oils",
    href: "/products/carrier-oils",
    desc: "Cold-pressed cosmetic & expeller grade",
    icon: <Droplet size={18} color="#10B981" />,
  },
  {
    name: "Floral Absolutes",
    href: "/products/floral-absolutes",
    desc: "Luxury perfumery absolutes",
    icon: <Flower size={18} color="#D946EF" />,
  },
  {
    name: "Floral Waters",
    href: "/products/floral-waters",
    desc: "Therapeutic aromatic hydrosols",
    icon: <Waves size={18} color="#06B6D4" />,
  },
  {
    name: "Oleoresins",
    href: "/products/oleoresins",
    desc: "Standardized food & pharma extracts",
    icon: <Beaker size={18} color="#EAB308" />,
  },
  {
    name: "Organic Oils",
    href: "/products/organic-oils",
    desc: "NPOP & USDA certified organic",
    icon: <Leaf size={18} color="#22C55E" />,
  },
  {
    name: "Ayurvedic Oils",
    href: "/products/ayurvedic-oils",
    desc: "Classical tailams & herbal infusions",
    icon: <Sprout size={18} color="#14B8A6" />,
  },
  {
    name: "Batch CoA Lookup",
    href: "/batch-lookup",
    desc: "Instant GC-MS chemical analysis",
    icon: <ShieldCheck size={18} color="#059669" />,
  },
];

export function CatalogHoverDropdown({ isLightNav, textColor, textShadow }: CatalogHoverDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Smooth buffer to prevent flickering across gap
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 220);
  };

  const dropdownBg = isLightNav ? "rgba(255, 255, 255, 0.94)" : "rgba(24, 13, 38, 0.92)";
  const dropdownBorder = isLightNav ? "1px solid rgba(255, 255, 255, 0.95)" : "1px solid rgba(255, 255, 255, 0.35)";
  const itemHoverBg = isLightNav ? "rgba(124, 58, 237, 0.1)" : "rgba(255, 255, 255, 0.18)";
  const itemHoverBorder = isLightNav ? "1px solid rgba(124, 58, 237, 0.22)" : "1px solid rgba(255, 255, 255, 0.35)";
  const itemTitleColor = isLightNav ? "#180D26" : "#FFFFFF";
  const itemSubColor = isLightNav ? "#5B486E" : "rgba(255, 255, 255, 0.88)";
  const shadow = isLightNav
    ? "0 30px 80px rgba(24, 13, 38, 0.18), 0 4px 24px rgba(124, 58, 237, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.98)"
    : "0 30px 80px rgba(0, 0, 0, 0.8), 0 0 40px rgba(124, 58, 237, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.28)";

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/products"
        style={{
          color: textColor,
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "0.875rem",
          padding: "6px 14px",
          borderRadius: "9999px",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          textShadow,
          letterSpacing: "0.01em",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          backgroundColor: isOpen
            ? isLightNav
              ? "rgba(124, 58, 237, 0.12)"
              : "rgba(255, 255, 255, 0.24)"
            : "transparent",
          backdropFilter: isOpen ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: isOpen ? "blur(24px) saturate(180%)" : "none",
          border: isOpen
            ? isLightNav
              ? "1px solid rgba(124, 58, 237, 0.2)"
              : "1px solid rgba(255, 255, 255, 0.35)"
            : "1px solid transparent",
          boxShadow: isOpen ? "0 4px 16px rgba(0, 0, 0, 0.08)" : "none",
        }}
      >
        <span>Catalog</span>
        <ChevronDown
          size={14}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            opacity: 0.85,
          }}
        />
      </Link>

      {/* Liquid Glass Dropdown Menu with Clean Navbar Clearance */}
      {isOpen && (
        <div
          className="liquid-glass-elevated"
          style={{
            position: "absolute",
            top: "calc(100% + 22px)",
            left: "-180px",
            width: "660px",
            maxWidth: "min(660px, calc(100vw - 32px))",
            backgroundColor: dropdownBg,
            backdropFilter: "blur(64px) saturate(210%) brightness(105%)",
            WebkitBackdropFilter: "blur(64px) saturate(210%) brightness(105%)",
            border: dropdownBorder,
            borderRadius: "28px",
            padding: "20px",
            boxShadow: shadow,
            zIndex: 10005,
            animation: "quickFadeIn 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Top Option: All Categories / Full Catalog with Liquid Glass Gradient */}
          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 18px",
              borderRadius: "18px",
              background: isLightNav
                ? "linear-gradient(135deg, rgba(124, 58, 237, 0.16) 0%, rgba(255, 255, 255, 0.85) 100%)"
                : "linear-gradient(135deg, rgba(124, 58, 237, 0.55) 0%, rgba(35, 24, 48, 0.75) 100%)",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
              border: isLightNav
                ? "1px solid rgba(124, 58, 237, 0.28)"
                : "1px solid rgba(255, 255, 255, 0.35)",
              boxShadow: isLightNav
                ? "0 4px 16px rgba(124, 58, 237, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)"
                : "0 4px 16px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
              textDecoration: "none",
              marginBottom: "14px",
              transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = isLightNav
                ? "0 6px 20px rgba(124, 58, 237, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.9)"
                : "0 6px 20px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = isLightNav
                ? "0 4px 16px rgba(124, 58, 237, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)"
                : "0 4px 16px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  backgroundColor: "#7C3AED",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 14px rgba(124, 58, 237, 0.4)",
                  flexShrink: 0,
                }}
              >
                <Layers size={19} />
              </div>
              <div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: itemTitleColor, lineHeight: 1.3 }}>
                  All Categories & Complete Catalog
                </div>
                <div style={{ fontSize: "0.76rem", color: itemSubColor, lineHeight: 1.4, marginTop: "2px" }}>
                  Browse 238+ verified botanical oils & GC-MS reports
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#8B5CF6", fontWeight: 700, fontSize: "0.84rem" }}>
              <span>Explore</span>
              <ArrowRight size={15} />
            </div>
          </Link>

          {/* 2-Column Categories Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 12px" }}>
            {CATALOG_CATEGORIES_MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "10px 14px",
                  borderRadius: "16px",
                  textDecoration: "none",
                  transition: "all 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
                  border: "1px solid transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = itemHoverBg;
                  e.currentTarget.style.borderColor = itemHoverBorder;
                  e.currentTarget.style.transform = "translateX(3px)";
                  e.currentTarget.style.boxShadow = isLightNav
                    ? "0 4px 12px rgba(124, 58, 237, 0.06)"
                    : "0 4px 12px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "11px",
                    backgroundColor: isLightNav ? "rgba(124, 58, 237, 0.08)" : "rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: isLightNav ? "1px solid rgba(124, 58, 237, 0.15)" : "1px solid rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  {item.icon}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", lineHeight: 1.3 }}>
                    <span
                      style={{
                        fontSize: "0.86rem",
                        fontWeight: 700,
                        color: itemTitleColor,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.name}
                    </span>
                    {item.badge && (
                      <span
                        style={{
                          fontSize: "0.66rem",
                          fontWeight: 800,
                          padding: "3px 7px",
                          borderRadius: "9999px",
                          background: item.badgeColor,
                          color: "#FFFFFF",
                          letterSpacing: "0.02em",
                          whiteSpace: "nowrap",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          lineHeight: 1,
                          flexShrink: 0,
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: "0.74rem",
                      color: itemSubColor,
                      lineHeight: 1.35,
                      marginTop: "2px",
                      display: "block",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.desc}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes quickFadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
