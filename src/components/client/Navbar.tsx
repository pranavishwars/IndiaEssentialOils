"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchBar } from "./SearchBar";
import { LanguageSelector } from "./LanguageSelector";
import { CatalogHoverDropdown } from "./CatalogHoverDropdown";
import { AboutHoverDropdown, ABOUT_SUBMENU } from "./AboutHoverDropdown";
import { PackagingHoverDropdown, PACKAGING_SUBMENU } from "./PackagingHoverDropdown";
import { COMPANY_INFO } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobilePackagingOpen, setMobilePackagingOpen] = useState(false);
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

  const touchStartY = useRef<number | null>(null);
  const touchCurrentY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchCurrentY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (touchStartY.current !== null && touchCurrentY.current !== null) {
      const diff = touchStartY.current - touchCurrentY.current; // upward swipe
      if (diff > 50) {
        setIsOpen(false);
      }
    }
    touchStartY.current = null;
    touchCurrentY.current = null;
  };

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
        zIndex: "var(--z-navbar)" as unknown as number,
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
          minHeight: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* Logo — adapts automatically to dark/light background */}
        <div style={{ marginInlineStart: "max(0px, calc((100vw - 1280px) / 2))", flexShrink: 0, minWidth: 0, maxWidth: "calc(100vw - 80px)" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "clamp(6px, 1.5vw, 10px)",
              fontSize: "clamp(1.02rem, 3.6vw, 1.35rem)",
              fontWeight: 700,
              fontFamily: "var(--font-lora), Georgia, serif",
              color: textColor,
              textDecoration: "none",
              transition: "color 0.3s ease, text-shadow 0.3s ease",
              textShadow,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <img
              src="/images/logo.png"
              alt="India Essential Oils Logo"
              style={{
                width: "clamp(28px, 5vw, 36px)",
                height: "clamp(28px, 5vw, 36px)",
                borderRadius: "50%",
                objectFit: "cover",
                backgroundColor: "#FFFFFF",
                boxShadow: isLightNav ? "0 2px 8px rgba(124, 58, 237, 0.15)" : "0 2px 10px rgba(0, 0, 0, 0.4)",
                border: isLightNav ? "1.5px solid rgba(124, 58, 237, 0.25)" : "1.5px solid rgba(255, 255, 255, 0.4)",
                flexShrink: 0,
              }}
            />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{COMPANY_INFO.name}</span>
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

            {/* Instantaneous Liquid Glass About Dropdown */}
            <AboutHoverDropdown isLightNav={isLightNav} textColor={textColor} textShadow={textShadow} />

            {/* Infrastructure */}
            <Link
              href="/infrastructure"
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
              Infrastructure
            </Link>

            {/* Instantaneous Liquid Glass Packaging Dropdown */}
            <PackagingHoverDropdown isLightNav={isLightNav} textColor={textColor} textShadow={textShadow} />

            {/* Certifications */}
            <Link
              href="/certifications"
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
              Certifications
            </Link>

            {/* Quality */}
            <Link
              href="/quality"
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
              Quality
            </Link>

            {/* FAQs */}
            <Link
              href="/faqs"
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
              FAQs
            </Link>

            <Link
              href="/contact"
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
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(124, 58, 237, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 18px rgba(124, 58, 237, 0.45)";
              }}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Mobile controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="mobile-nav-toggle">
          <button
            onClick={() => setIsOpen(!isOpen)}
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
              minWidth: "44px",
              minHeight: "44px",
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
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            backgroundColor: "rgba(252, 250, 246, 0.94)",
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            padding: "16px 24px 28px",
            borderTop: "1px solid rgba(124, 58, 237, 0.15)",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            maxHeight: "calc(100dvh - 68px)",
            overflowY: "auto",
          }}
        >
          {/* Drag to close indicator handle */}
          <div style={{ width: "100%", display: "flex", justifyContent: "center", paddingBottom: "8px", cursor: "grab" }}>
            <div style={{ width: "36px", height: "4px", borderRadius: "9999px", backgroundColor: "rgba(124, 58, 237, 0.25)" }} />
          </div>

          <div style={{ marginBottom: "6px" }}>
            <SearchBar variant="full" onSelect={() => setIsOpen(false)} />
          </div>

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            style={{
              color: "#180D26",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 600,
              padding: "10px 14px",
              borderRadius: "12px",
            }}
          >
            Home
          </Link>

          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            style={{
              color: "#180D26",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 600,
              padding: "10px 14px",
              borderRadius: "12px",
            }}
          >
            Products
          </Link>

          {/* Mobile About Accordion */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 14px",
                borderRadius: "12px",
                cursor: "pointer",
                backgroundColor: mobileAboutOpen ? "rgba(124, 58, 237, 0.08)" : "transparent",
              }}
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            >
              <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#180D26" }}>About</span>
              <span style={{ fontSize: "0.8rem", color: "#7C3AED", fontWeight: 700 }}>
                {mobileAboutOpen ? "▲" : "▼"}
              </span>
            </div>
            {mobileAboutOpen && (
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "4px", marginTop: "4px" }}>
                {ABOUT_SUBMENU.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      padding: "8px 12px",
                      fontSize: "0.85rem",
                      color: "#5B486E",
                      textDecoration: "none",
                      borderRadius: "8px",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/infrastructure"
            onClick={() => setIsOpen(false)}
            style={{
              color: "#180D26",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 600,
              padding: "10px 14px",
              borderRadius: "12px",
            }}
          >
            Infrastructure
          </Link>

          {/* Mobile Packaging Accordion */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 14px",
                borderRadius: "12px",
                cursor: "pointer",
                backgroundColor: mobilePackagingOpen ? "rgba(124, 58, 237, 0.08)" : "transparent",
              }}
              onClick={() => setMobilePackagingOpen(!mobilePackagingOpen)}
            >
              <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#180D26" }}>Packaging</span>
              <span style={{ fontSize: "0.8rem", color: "#7C3AED", fontWeight: 700 }}>
                {mobilePackagingOpen ? "▲" : "▼"}
              </span>
            </div>
            {mobilePackagingOpen && (
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "4px", marginTop: "4px" }}>
                {PACKAGING_SUBMENU.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      padding: "8px 12px",
                      fontSize: "0.85rem",
                      color: "#5B486E",
                      textDecoration: "none",
                      borderRadius: "8px",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/certifications"
            onClick={() => setIsOpen(false)}
            style={{
              color: "#180D26",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 600,
              padding: "10px 14px",
              borderRadius: "12px",
            }}
          >
            Certifications
          </Link>

          <Link
            href="/quality"
            onClick={() => setIsOpen(false)}
            style={{
              color: "#180D26",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 600,
              padding: "10px 14px",
              borderRadius: "12px",
            }}
          >
            Quality
          </Link>

          <Link
            href="/faqs"
            onClick={() => setIsOpen(false)}
            style={{
              color: "#180D26",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 600,
              padding: "10px 14px",
              borderRadius: "12px",
            }}
          >
            FAQs
          </Link>

          <Link
            href="/contact"
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
              marginTop: "8px",
            }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
