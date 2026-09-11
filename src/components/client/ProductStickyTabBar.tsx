"use client";

import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "overview", label: "Overview" },
];

export function ProductStickyTabBar() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;

      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div
      style={{
        position: "sticky",
        top: "68px",
        zIndex: "var(--z-sticky-tab)" as unknown as number,
        width: "100%",
        padding: "12px 0",
        marginBottom: "36px",
        backgroundColor: "rgba(252, 250, 246, 0.78)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        borderBottom: "1px solid rgba(124, 58, 237, 0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {SECTIONS.map(s => {
          const isActive = activeSection === s.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              style={{
                backgroundColor: isActive ? "#7C3AED" : "rgba(255, 255, 255, 0.85)",
                backgroundImage: isActive ? "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)" : "none",
                color: isActive ? "white" : "#180D26",
                border: isActive ? "1px solid #7C3AED" : "1px solid rgba(124, 58, 237, 0.2)",
                padding: "8px 20px",
                borderRadius: "9999px",
                fontSize: "0.88rem",
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.25s ease",
                boxShadow: isActive ? "0 2px 8px rgba(24, 13, 38, 0.12)" : "none",
              }}
            >
              {s.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
