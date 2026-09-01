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
  ArrowRight
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
];

export function CatalogHoverDropdown({ isLightNav, textColor, textShadow }: CatalogHoverDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Instantaneous close or minimal buffer to prevent flickering
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 80);
  };

  const dropdownBg = isLightNav ? "rgba(252, 250, 246, 0.95)" : "rgba(24, 13, 38, 0.94)";
  const dropdownBorder = isLightNav ? "1px solid rgba(124, 58, 237, 0.22)" : "1px solid rgba(255, 255, 255, 0.25)";
  const itemHoverBg = isLightNav ? "rgba(124, 58, 237, 0.08)" : "rgba(255, 255, 255, 0.12)";
  const itemTitleColor = isLightNav ? "#180D26" : "#FFFFFF";
  const itemSubColor = isLightNav ? "#5B486E" : "rgba(255, 255, 255, 0.65)";
  const shadow = isLightNav
    ? "0 24px 60px rgba(24, 13, 38, 0.16), 0 4px 16px rgba(124, 58, 237, 0.08)"
    : "0 24px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(124, 58, 237, 0.25)";

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
          transition: "background 0.2s, color 0.4s",
          textShadow,
          letterSpacing: "0.01em",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          backgroundColor: isOpen
            ? isLightNav
              ? "rgba(124, 58, 237, 0.14)"
              : "rgba(255, 255, 255, 0.25)"
            : "transparent",
        }}
      >
        <span>Catalog</span>
        <ChevronDown
          size={14}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            opacity: 0.8,
          }}
        />
      </Link>

      {/* Instantaneous Liquid Glass Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            left: "-120px",
            width: "560px",
            backgroundColor: dropdownBg,
            backdropFilter: "blur(32px) saturate(190%)",
            WebkitBackdropFilter: "blur(32px) saturate(190%)",
            border: dropdownBorder,
            borderRadius: "24px",
            padding: "18px",
            boxShadow: shadow,
            zIndex: 10005,
            animation: "quickFadeIn 0.12s ease-out",
          }}
        >
          {/* Top Option: All Categories / Full Catalog */}
          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
              borderRadius: "16px",
              background: isLightNav
                ? "linear-gradient(135deg, rgba(124, 58, 237, 0.12) 0%, rgba(139, 92, 246, 0.06) 100%)"
                : "linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(124, 58, 237, 0.15) 100%)",
              border: isLightNav ? "1px solid rgba(124, 58, 237, 0.25)" : "1px solid rgba(255, 255, 255, 0.25)",
              textDecoration: "none",
              marginBottom: "12px",
              transition: "transform 0.15s ease, background 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "#7C3AED",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(124, 58, 237, 0.35)",
                }}
              >
                <Layers size={18} />
              </div>
              <div>
                <div style={{ fontSize: "0.92rem", fontWeight: 700, color: itemTitleColor }}>
                  All Categories & Complete Catalog
                </div>
                <div style={{ fontSize: "0.75rem", color: itemSubColor }}>
                  Browse 220+ verified botanical oils & GC-MS reports
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#8B5CF6", fontWeight: 700, fontSize: "0.82rem" }}>
              <span>Explore</span>
              <ArrowRight size={14} />
            </div>
          </Link>

          {/* 2-Column Categories Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
            {CATALOG_CATEGORIES_MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 12px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  transition: "background 0.12s ease, transform 0.12s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = itemHoverBg;
                  e.currentTarget.style.transform = "translateX(2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "10px",
                    backgroundColor: isLightNav ? "rgba(124, 58, 237, 0.08)" : "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span
                      style={{
                        fontSize: "0.84rem",
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
                          fontSize: "0.65rem",
                          fontWeight: 800,
                          padding: "2px 6px",
                          borderRadius: "9999px",
                          background: item.badgeColor,
                          color: "#FFFFFF",
                          letterSpacing: "0.02em",
                          flexShrink: 0,
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: itemSubColor,
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
