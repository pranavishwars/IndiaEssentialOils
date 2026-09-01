"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchBar } from "./SearchBar";
import { LanguageSelector } from "./LanguageSelector";
import { CatalogHoverDropdown } from "./CatalogHoverDropdown";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On the homepage, unscrolled header sits over the dark hero (white text).
  // When scrolled on home OR on any secondary page (which starts on a light background), use dark theme.
  const isHomePage = pathname === "/";
  const isLightNav = !isHomePage || scrolled;

  const textColor = isLightNav ? "#180D26" : "#FFFFFF";
  const textShadow = isLightNav ? "none" : "0 2px 10px rgba(0,0,0,0.6)";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        backgroundColor: isLightNav ? "rgba(252, 250, 246, 0.82)" : "transparent",
        backdropFilter: isLightNav ? "blur(24px) saturate(180%)" : "none",
        WebkitBackdropFilter: isLightNav ? "blur(24px) saturate(180%)" : "none",
        borderBottom: isLightNav ? "1px solid rgba(124, 58, 237, 0.15)" : "1px solid transparent",
        boxShadow: isLightNav ? "0 4px 30px rgba(24, 13, 38, 0.06)" : "none",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "0 clamp(16px, 4vw, 48px)",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* Logo — adapts automatically to dark/light background */}
        <div style={{ marginInlineStart: "max(0px, calc((100vw - 1280px) / 2))", flexShrink: 0 }}>
          <Link
            href="/"
            style={{
              fontSize: "1.35rem",
              fontWeight: 700,
              fontFamily: "var(--font-lora), Georgia, serif",
              color: textColor,
              textDecoration: "none",
              transition: "color 0.3s ease, text-shadow 0.3s ease",
              textShadow,
              whiteSpace: "nowrap",
            }}
          >
            India Essential Oils
          </Link>
        </div>

        {/* Desktop navigation cluster */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginInlineStart: "auto",
            marginInlineEnd: 0,
          }}
        >
          {/* Main Nav Pill (Home, Catalog Dropdown, Links + Request Quote Button) */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              backgroundColor: isLightNav ? "rgba(124, 58, 237, 0.07)" : "rgba(35, 24, 48, 0.48)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: isLightNav ? "1px solid rgba(124, 58, 237, 0.2)" : "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "9999px",
              padding: "6px 8px",
              boxShadow: isLightNav
                ? "0 2px 8px rgba(24, 13, 38, 0.04)"
                : "0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              transition: "all 0.4s ease",
            }}
          >
            {/* Home Link */}
            <Link
              href="/"
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
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isLightNav ? "rgba(124, 58, 237, 0.12)" : "rgba(255, 255, 255, 0.22)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Home
            </Link>

            {/* Instantaneous Liquid Glass Catalog Dropdown */}
            <CatalogHoverDropdown isLightNav={isLightNav} textColor={textColor} textShadow={textShadow} />

            {[
              ["About", "/about"],
              ["Infrastructure", "/infrastructure"],
              ["Packaging", "/packaging"],
              ["Certifications", "/certifications"],
              ["Quality", "/quality"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
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
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isLightNav ? "rgba(124, 58, 237, 0.12)" : "rgba(255, 255, 255, 0.22)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                {label}
              </Link>
            ))}

            <Link
              href="/request-quote"
              style={{
                background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                color: "white",
                padding: "8px 22px",
                borderRadius: "9999px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.875rem",
                marginInlineStart: "4px",
                boxShadow: "0 4px 18px rgba(124, 58, 237, 0.45)",
                transition: "transform 0.2s, box-shadow 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(124, 58, 237, 0.65)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 18px rgba(124, 58, 237, 0.45)";
              }}
            >
              Request Quote
            </Link>
          </nav>
        </div>

        {/* Mobile Header Right Cluster */}
        <div className="mobile-header-actions" style={{ display: "none", alignItems: "center", gap: "8px" }}>
          <LanguageSelector scrolled={isLightNav} />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            style={{
              background: isLightNav ? "rgba(124, 58, 237, 0.07)" : "rgba(35, 24, 48, 0.48)",
              border: isLightNav ? "1px solid rgba(124, 58, 237, 0.25)" : "1px solid rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              borderRadius: "12px",
              cursor: "pointer",
              padding: "8px",
              color: textColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "40px",
              minHeight: "40px",
            }}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu — glass panel */}
      {isOpen && (
        <div
          style={{
            backgroundColor: "rgba(252, 250, 246, 0.88)",
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            padding: "20px 24px 28px",
            borderTop: "1px solid rgba(124, 58, 237, 0.15)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxHeight: "calc(100dvh - 68px)",
            overflowY: "auto",
          }}
        >
          <div style={{ marginBottom: "6px" }}>
            <SearchBar variant="full" onSelect={() => setIsOpen(false)} />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <LanguageSelector variant="mobile-menu" scrolled={true} />
          </div>

          {[
            ["Botanical Catalog", "/products"],
            ["About Mother Herbs", "/about"],
            ["Distillery & Infrastructure", "/infrastructure"],
            ["Packaging & OEM Bottling", "/packaging"],
            ["International Certifications", "/certifications"],
            ["Quality & GC-MS Testing", "/quality"],
            ["GC-MS Batch Lookup", "/batch-lookup"],
            ["Knowledge Hub & Blog", "/blog"],
            ["Verified Client Reviews", "/reviews"],
            ["Commercial Quote Desk", "/request-quote"],
            ["Corporate Contact & Office", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              style={{
                color: "#180D26",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 600,
                padding: "12px 16px",
                borderRadius: "12px",
                transition: "background 0.2s",
                display: "block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/request-quote"
            onClick={() => setIsOpen(false)}
            style={{
              background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
              color: "white",
              padding: "14px 20px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: 700,
              textAlign: "center",
              fontSize: "1rem",
              boxShadow: "0 4px 18px rgba(124, 58, 237, 0.45)",
            }}
          >
            Request Commercial Quote
          </Link>
        </div>
      )}
    </header>
  );
}
