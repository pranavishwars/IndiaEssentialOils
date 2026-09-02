"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Search, X, Check, Loader2, AlertCircle } from "lucide-react";
import {
  LanguageInfo,
  ALL_LANGUAGES,
  getSuggestedLanguages,
  searchLanguages,
} from "@/lib/languages-data";
import { useLanguage } from "@/lib/language-context";

export function GoogleTranslateIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path
        d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
        fill={color}
      />
    </svg>
  );
}

interface LanguageSelectorProps {
  variant?: "floating" | "navbar" | "mobile-menu";
  scrolled?: boolean;
}

export function LanguageSelector({ variant = "floating" }: LanguageSelectorProps) {
  const { currentLanguage, currentLanguageInfo, isBlocked, isChanging, setLanguage } =
    useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearchQuery("");
  };

  // Check mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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
      const diff = touchCurrentY.current - touchStartY.current;
      if (diff > 50) {
        handleClose();
      }
    }
    touchStartY.current = null;
    touchCurrentY.current = null;
  };

  // Lock body scroll only when mobile sheet is open on phone
  useEffect(() => {
    if (isOpen && (isMobile || variant === "mobile-menu")) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen, isMobile, variant]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        handleClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Keyboard navigation & Focus management
  useEffect(() => {
    if (isOpen) {
      const focusTimer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 40);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          handleClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        clearTimeout(focusTimer);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen]);

  const filteredLanguages = useMemo(() => {
    return searchLanguages(searchQuery);
  }, [searchQuery]);

  const suggestedLanguages = useMemo(() => {
    return getSuggestedLanguages();
  }, []);

  // Group languages alphabetically if no search query
  const groupedLanguages = useMemo(() => {
    if (searchQuery.trim()) return null;
    const groups: { [key: string]: LanguageInfo[] } = {};
    for (const lang of ALL_LANGUAGES) {
      const firstLetter = lang.name.charAt(0).toUpperCase();
      if (!groups[firstLetter]) groups[firstLetter] = [];
      groups[firstLetter].push(lang);
    }
    return groups;
  }, [searchQuery]);

  const handleSelectLanguage = (lang: LanguageInfo) => {
    if (lang.code === currentLanguage && !isChanging) {
      handleClose();
      return;
    }
    setLanguage(lang.code);
    handleClose();
  };

  const textColor = "#180D26";
  const subTextColor = "#5B486E";
  const searchBorder = "1px solid rgba(124, 58, 237, 0.18)";
  const stickyHeaderBg = "rgba(252, 250, 246, 0.9)";
  const stickyHeaderColor = "#7C3AED";

  if (variant === "mobile-menu") {
    return (
      <div style={{ width: "100%" }}>
        <button
          type="button"
          onClick={() => handleOpen()}
          suppressHydrationWarning
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 18px",
            backgroundColor: "rgba(124, 58, 237, 0.08)",
            border: "1px solid rgba(124, 58, 237, 0.2)",
            borderRadius: "16px",
            color: "#180D26",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
            textAlign: "start",
          }}
          aria-label={`Change language, currently ${currentLanguageInfo.name}`}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }} suppressHydrationWarning>
            <GoogleTranslateIcon size={20} color="#7C3AED" />
            <span suppressHydrationWarning>
              Language:{" "}
              <strong className="notranslate" translate="no" suppressHydrationWarning>
                {currentLanguageInfo.nativeName}
              </strong>{" "}
              ({currentLanguageInfo.name})
            </span>
          </div>
          {isChanging ? <Loader2 size={18} color="#7C3AED" className="animate-spin" /> : <GoogleTranslateIcon size={18} color="#7C3AED" />}
        </button>

        {isOpen && renderMobileSheet()}
      </div>
    );
  }

  // Mobile Bottom Sheet (Liquid Glass)
  function renderMobileSheet() {
    return (
      <div
        className="lang-modal-backdrop"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: "var(--z-lang-picker)" as unknown as number,
          backgroundColor: "rgba(24, 13, 38, 0.65)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          animation: "fadeIn 0.2s ease-out",
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) handleClose();
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Select Language"
      >
        <div
          className="lang-modal-card"
          style={{
            width: "100%",
            height: "85dvh",
            maxHeight: "90dvh",
            backgroundColor: "rgba(252, 250, 246, 0.95)",
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            borderTopLeftRadius: "28px",
            borderTopRightRadius: "28px",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            boxShadow: "0 -10px 40px rgba(24, 13, 38, 0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            animation: "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Sheet drag indicator bar */}
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "12px", paddingBottom: "4px" }}>
            <div style={{ width: "40px", height: "4px", backgroundColor: "rgba(124, 58, 237, 0.2)", borderRadius: "9999px" }} />
          </div>

          {/* Header */}
          <div
            style={{
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(124, 58, 237, 0.12)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(124, 58, 237, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7C3AED",
                }}
              >
                <GoogleTranslateIcon size={20} color="#7C3AED" />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700, color: "#180D26" }}>
                  Select Language
                </h3>
                <p style={{ margin: 0, fontSize: "0.72rem", color: "#5B486E" }}>
                  {ALL_LANGUAGES.length} Languages Supported
                </p>
              </div>
            </div>

            <button
              onClick={handleClose}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "rgba(124, 58, 237, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#180D26",
                cursor: "pointer",
              }}
              aria-label="Close language selector"
            >
              <X size={18} />
            </button>
          </div>

          {/* Mobile Search bar */}
          <div style={{ padding: "10px 20px", borderBottom: "1px solid rgba(124, 58, 237, 0.12)" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(124, 58, 237, 0.06)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                borderRadius: "12px",
                padding: "8px 12px",
                gap: "8px",
              }}
            >
              <Search size={16} color="#7C3AED" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search languages (e.g. Hindi, French)..."
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontSize: "0.85rem",
                  color: "#180D26",
                  fontFamily: "inherit",
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  style={{ border: "none", backgroundColor: "transparent", cursor: "pointer", padding: 0, color: "#5B486E" }}
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Ad-blocker banner */}
          {isBlocked && renderAdBlockBanner()}

          {/* Languages list */}
          <div
            ref={listContainerRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "12px 16px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {renderListContent()}
          </div>

          {/* Progress footer */}
          {isChanging && renderChangingFooter()}
        </div>
      </div>
    );
  }

  function renderAdBlockBanner() {
    return (
      <div
        style={{
          margin: "10px 14px 0",
          padding: "10px 12px",
          backgroundColor: "rgba(239, 68, 68, 0.1)",
          border: "1px solid rgba(239, 68, 68, 0.3)",
          borderRadius: "12px",
          display: "flex",
          alignItems: "flex-start",
          gap: "8px",
          fontSize: "0.78rem",
          color: "#DC2626",
          lineHeight: 1.4,
        }}
      >
        <AlertCircle size={15} style={{ flexShrink: 0, marginTop: "2px" }} />
        <span>
          Translation service blocked by browser ad-blocker or privacy extension. Disable ad-blocker on this domain for live translation.
        </span>
      </div>
    );
  }

  function renderChangingFooter() {
    return (
      <div
        style={{
          padding: "8px 16px",
          backgroundColor: "rgba(124, 58, 237, 0.12)",
          borderTop: "1px solid rgba(124, 58, 237, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          fontSize: "0.78rem",
          fontWeight: 700,
          color: stickyHeaderColor,
        }}
      >
        <Loader2 size={14} className="animate-spin" />
        <span>Translating page content...</span>
      </div>
    );
  }

  function renderListContent() {
    return (
      <>
        {/* Suggested / Popular languages in a clean 2-column Grid */}
        {!searchQuery.trim() && (
          <div style={{ marginBottom: "6px" }}>
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: subTextColor,
                marginBottom: "8px",
                paddingLeft: "4px",
              }}
            >
              Suggested Languages
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "6px",
              }}
            >
              {suggestedLanguages.map((lang) => {
                const isSelected = lang.code === currentLanguage;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelectLanguage(lang)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 10px",
                      borderRadius: "10px",
                      border: isSelected ? "1px solid #7C3AED" : searchBorder,
                      backgroundColor: isSelected
                        ? "rgba(124, 58, 237, 0.15)"
                        : "rgba(124, 58, 237, 0.05)",
                      backgroundImage: "none",
                      color: textColor,
                      cursor: "pointer",
                      transition: "background-color 0.15s ease",
                      textAlign: "start",
                      width: "100%",
                      minHeight: "44px",
                      boxSizing: "border-box",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.10)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.05)";
                      }
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", minWidth: 0, paddingRight: "4px" }}>
                      <span
                        className="notranslate"
                        translate="no"
                        style={{
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: textColor,
                          lineHeight: 1.2,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {lang.nativeName}
                      </span>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          color: subTextColor,
                          lineHeight: 1.1,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {lang.name}
                      </span>
                    </div>
                    {isSelected && (
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          backgroundColor: "#7C3AED",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          flexShrink: 0,
                        }}
                      >
                        <Check size={10} strokeWidth={3} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Alphabetical List */}
        {groupedLanguages ? (
          Object.entries(groupedLanguages).map(([letter, langs]) => (
            <div key={letter}>
              <div
                className="notranslate"
                translate="no"
                style={{
                  position: "sticky",
                  top: 0,
                  backgroundColor: stickyHeaderBg,
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  padding: "3px 6px",
                  borderRadius: "6px",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  color: stickyHeaderColor,
                  letterSpacing: "0.06em",
                  zIndex: 2,
                }}
              >
                {letter}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", marginTop: "2px" }}>
                {langs.map((lang) => renderLanguageRow(lang))}
              </div>
            </div>
          ))
        ) : filteredLanguages.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {filteredLanguages.map((lang) => renderLanguageRow(lang))}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "28px 12px",
              color: subTextColor,
              fontSize: "0.85rem",
            }}
          >
            No languages found matching &quot;{searchQuery}&quot;
          </div>
        )}
      </>
    );
  }

  function renderLanguageRow(lang: LanguageInfo) {
    const isSelected = lang.code === currentLanguage;
    return (
      <button
        key={lang.code}
        type="button"
        onClick={() => handleSelectLanguage(lang)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 10px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: isSelected
            ? "rgba(124, 58, 237, 0.15)"
            : "transparent",
          backgroundImage: "none",
          color: textColor,
          cursor: "pointer",
          transition: "background-color 0.15s ease",
          textAlign: "start",
          minHeight: "38px",
        }}
        onMouseEnter={(e) => {
          if (!isSelected) {
            e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.08)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isSelected) e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", minWidth: 0, paddingRight: "8px" }}>
          <span
            className="notranslate"
            translate="no"
            style={{ fontSize: "0.88rem", fontWeight: 600, color: textColor, lineHeight: 1.2 }}
          >
            {lang.nativeName}
          </span>
          <span style={{ fontSize: "0.72rem", color: subTextColor, lineHeight: 1.1 }}>
            {lang.name} {lang.isRTL && <span style={{ fontSize: "0.68rem", opacity: 0.8 }}>(RTL)</span>}
          </span>
        </div>

        {isSelected && (
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "#7C3AED",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              flexShrink: 0,
              boxShadow: "0 2px 8px rgba(124, 58, 237, 0.4)",
            }}
          >
            <Check size={12} strokeWidth={3} />
          </div>
        )}
      </button>
    );
  }

  // Floating Action Button Mode (Positioned next to Chatbot)
  return (
    <div
      ref={containerRef}
      className="language-floating-container"
      style={{
        position: "relative",
      }}
    >
      {/* Tooltip on hover */}
      {isHovered && !isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 10px)",
            right: 0,
            backgroundColor: "rgba(24, 13, 38, 0.94)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            color: "white",
            fontSize: "0.82rem",
            fontWeight: 700,
            padding: "8px 14px",
            borderRadius: "9999px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
            whiteSpace: "nowrap",
            border: "1px solid rgba(124, 58, 237, 0.35)",
            animation: "fadeIn 0.2s ease-out",
            pointerEvents: "none",
            zIndex: "var(--z-modal)" as unknown as number,
          }}
        >
          Select Language ({currentLanguageInfo.name})
        </div>
      )}

      {/* Floating Trigger Button with Official Google Translate Icon */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="language-trigger-btn"
        style={{
          height: "50px",
          padding: "0 18px",
          borderRadius: "9999px",
          backgroundColor: isOpen ? "rgba(24, 13, 38, 0.9)" : "rgba(252, 250, 246, 0.88)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          color: isOpen ? "#FFFFFF" : "#180D26",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          border: "1.5px solid rgba(124, 58, 237, 0.35)",
          boxShadow: isOpen
            ? "0 6px 24px rgba(24, 13, 38, 0.35)"
            : "0 6px 24px rgba(124, 58, 237, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
          cursor: "pointer",
          transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s, background-color 0.2s, border-color 0.2s",
          transform: isHovered ? "scale(1.04) translateY(-1px)" : "scale(1)",
          boxSizing: "border-box",
        }}
        aria-label={`Change language, currently ${currentLanguageInfo.name}`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        {isChanging ? (
          <Loader2 size={20} color="#7C3AED" className="animate-spin" />
        ) : (
          <GoogleTranslateIcon size={22} color={isOpen ? "#C4B5FD" : "#7C3AED"} />
        )}
        <span
          className="notranslate"
          translate="no"
          suppressHydrationWarning
          style={{
            fontSize: "0.88rem",
            fontWeight: 700,
            maxWidth: "70px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            lineHeight: 1,
          }}
        >
          {currentLanguageInfo.nativeName}
        </span>
      </button>

      {/* Floating Popup Card (Liquid Glass anchored above button) */}
      {isOpen && (
        <>
          {isMobile && (
            <div
              onClick={() => setIsOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(24, 13, 38, 0.6)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                zIndex: "var(--z-lang-picker)" as unknown as number,
              }}
            />
          )}

          <div
            className="language-unified-card"
            style={{
              position: "fixed",
              bottom: isMobile ? 0 : "96px",
              insetInlineEnd: isMobile ? 0 : "92px",
              width: isMobile ? "100%" : "360px",
              height: isMobile ? "82dvh" : "480px",
              maxHeight: isMobile ? "90dvh" : "calc(100vh - 120px)",
              borderRadius: isMobile ? "28px 28px 0 0" : "24px",
              boxSizing: "border-box",
              backgroundColor: "rgba(252, 250, 246, 0.94)",
              backdropFilter: "blur(32px) saturate(180%)",
              WebkitBackdropFilter: "blur(32px) saturate(180%)",
              border: "1px solid rgba(124, 58, 237, 0.25)",
              boxShadow: "0 24px 60px rgba(24, 13, 38, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              zIndex: "var(--z-dropdown)" as unknown as number,
              animation: isMobile ? "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)" : "fadeIn 0.2s ease-out",
            }}
            role="dialog"
            aria-label="Select Language"
            aria-modal="true"
          >
            {/* Mobile Drag-to-Dismiss Handle */}
            {isMobile && (
              <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px 0 6px",
                  cursor: "grab",
                  touchAction: "none",
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                }}
              >
                <div style={{ width: "40px", height: "4px", borderRadius: "9999px", backgroundColor: "rgba(124, 58, 237, 0.3)" }} />
              </div>
            )}

            {/* Top Row: Search Bar */}
            <div
              style={{
                height: "52px",
                minHeight: "52px",
                padding: "0 14px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                borderBottom: "1px solid rgba(124, 58, 237, 0.14)",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                boxSizing: "border-box",
              }}
            >
              {isChanging ? (
                <Loader2 size={18} color="#7C3AED" className="animate-spin" style={{ flexShrink: 0 }} />
              ) : (
                <GoogleTranslateIcon size={20} color="#7C3AED" />
              )}

              <input
                ref={searchInputRef}
                className="lang-search-field"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search languages (e.g. Hindi, French)..."
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: textColor,
                  fontFamily: "inherit",
                }}
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    padding: "4px",
                    display: "flex",
                    alignItems: "center",
                    color: subTextColor,
                  }}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}

              <button
                type="button"
                onClick={handleClose}
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "rgba(124, 58, 237, 0.1)",
                  color: textColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  flexShrink: 0,
                }}
                aria-label="Close language selector"
              >
                <X size={15} />
              </button>
            </div>

            {/* Ad-blocker notice */}
            {isBlocked && renderAdBlockBanner()}

            {/* Scrollable Unified Body */}
            <div
              ref={listContainerRef}
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "12px 14px 14px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {renderListContent()}
            </div>

            {/* Translation loading bar */}
            {isChanging && renderChangingFooter()}
          </div>
        </>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
