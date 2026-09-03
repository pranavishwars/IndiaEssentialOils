"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { 
  Boxes, 
  Package, 
  Truck, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface PackagingHoverDropdownProps {
  isLightNav: boolean;
  textColor: string;
  textShadow: string;
}

export const PACKAGING_SUBMENU = [
  {
    name: "Packaging Process",
    href: "/packaging/process",
    desc: "Amber/Clear glassware, European droppers & custom closures",
    icon: <Boxes size={18} color="#7C3AED" />,
  },
  {
    name: "Packaging Sizes",
    href: "/packaging/sizes",
    desc: "10ml–500ml glass, 1kg–25kg aluminum & 200kg steel drums",
    icon: <Package size={18} color="#059669" />,
  },
  {
    name: "Shipment Policy",
    href: "/packaging/shipment-policy",
    desc: "48-hour order dispatch, hazmat air express & ocean freight",
    icon: <Truck size={18} color="#0284C7" />,
  },
];

export function PackagingHoverDropdown({ isLightNav, textColor, textShadow }: PackagingHoverDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 220);
  };

  const dropdownBg = isLightNav ? "rgba(255, 255, 255, 0.96)" : "rgba(24, 13, 38, 0.94)";
  const dropdownBorder = isLightNav ? "1px solid rgba(124, 58, 237, 0.22)" : "1px solid rgba(255, 255, 255, 0.35)";
  const itemHoverBg = isLightNav ? "rgba(124, 58, 237, 0.08)" : "rgba(255, 255, 255, 0.16)";
  const itemHoverBorder = isLightNav ? "1px solid rgba(124, 58, 237, 0.25)" : "1px solid rgba(255, 255, 255, 0.35)";
  const itemTitleColor = isLightNav ? "#180D26" : "#FFFFFF";
  const itemSubColor = isLightNav ? "#5B486E" : "rgba(255, 255, 255, 0.82)";
  const shadow = isLightNav
    ? "0 30px 80px rgba(24, 13, 38, 0.16), 0 4px 24px rgba(124, 58, 237, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.98)"
    : "0 30px 80px rgba(0, 0, 0, 0.85), 0 0 40px rgba(124, 58, 237, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.28)";

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/packaging"
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
            ? (isLightNav ? "rgba(124, 58, 237, 0.12)" : "rgba(255, 255, 255, 0.22)")
            : "transparent",
        }}
      >
        <span>Packaging</span>
        <ChevronDown
          size={14}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            opacity: 0.85,
          }}
        />
      </Link>

      {/* Invisible Hover Buffer to bridge gap between pill and dropdown */}
      <div
        style={{
          position: "absolute",
          top: "100%",
          left: "-20px",
          right: "-20px",
          height: "26px",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      />

      {/* Dropdown Menu Box */}
      <div
        style={{
          position: "absolute",
          top: "calc(100% + 20px)",
          left: "50%",
          transform: `translateX(-50%) translateY(${isOpen ? "0px" : "10px"})`,
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.2s",
          width: "360px",
          backgroundColor: dropdownBg,
          backdropFilter: "blur(64px) saturate(210%) brightness(105%)",
          WebkitBackdropFilter: "blur(64px) saturate(210%) brightness(105%)",
          border: dropdownBorder,
          borderRadius: "24px",
          boxShadow: shadow,
          padding: "16px",
          zIndex: 1000,
        }}
      >
        {/* Header Ribbon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "4px 8px 12px",
            borderBottom: isLightNav ? "1px solid rgba(124, 58, 237, 0.12)" : "1px solid rgba(255, 255, 255, 0.12)",
            marginBottom: "8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <ShieldCheck size={14} color="#7C3AED" />
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                color: "#7C3AED",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Packaging &amp; Logistics
            </span>
          </div>
          <Link
            href="/packaging"
            onClick={() => setIsOpen(false)}
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#7C3AED",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            All Packaging <ArrowRight size={12} />
          </Link>
        </div>

        {/* Navigation Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {PACKAGING_SUBMENU.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                padding: "10px 12px",
                borderRadius: "14px",
                textDecoration: "none",
                backgroundColor: "transparent",
                border: "1px solid transparent",
                transition: "all 0.18s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = itemHoverBg;
                e.currentTarget.style.borderColor = itemHoverBorder;
                e.currentTarget.style.transform = "translateX(3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "10px",
                  backgroundColor: isLightNav ? "rgba(124, 58, 237, 0.08)" : "rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                {item.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: itemTitleColor,
                    lineHeight: 1.25,
                    marginBottom: "2px",
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: itemSubColor,
                    lineHeight: 1.35,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
