"use client";

import React, { useState } from "react";
import { 
  Globe, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Star,
  Layers,
  Clock,
  Building2,
  Award
} from "lucide-react";
import { 
  WORLD_COUNTRIES_PATHS, 
  DESTINATIONS_DATA, 
  ORIGIN_HUB, 
  MAJOR_COUNTRY_IDS,
  MapDestination 
} from "@/lib/worldMapData";

export function GlobalPresenceMap() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [hoveredDest, setHoveredDest] = useState<MapDestination | null>(null);
  const [selectedDest, setSelectedDest] = useState<MapDestination | null>(null);

  const filterTabs = [
    { label: "All Destinations", value: "All" },
    { label: "★ Major Partners", value: "Major" },
    { label: "North America", value: "North America" },
    { label: "Europe", value: "Europe" },
    { label: "Middle East", value: "Middle East" },
    { label: "Asia-Pacific", value: "Asia-Pacific" },
    { label: "Oceania", value: "Oceania" },
    { label: "Africa & LATAM", value: "Africa & LATAM" },
  ];

  const filteredDestinations = DESTINATIONS_DATA.filter(dest => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Major") return dest.isMajor;
    return dest.region === activeFilter;
  });

  const currentDisplayDest = hoveredDest || selectedDest;

  return (
    <div
      className="liquid-glass-elevated"
      style={{
        borderRadius: "32px",
        padding: "clamp(24px, 4vw, 44px)",
        backgroundColor: "rgba(255, 255, 255, 0.96)",
        border: "1.5px solid rgba(124, 58, 237, 0.24)",
        boxShadow: "0 24px 70px rgba(24, 13, 38, 0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header Bar */}
      <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 28px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
          <span
            className="liquid-glass-pill"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 18px",
              fontSize: "0.78rem",
              fontWeight: 800,
              color: "#7C3AED",
              backgroundColor: "rgba(124, 58, 237, 0.1)",
              border: "1px solid rgba(124, 58, 237, 0.25)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            <Globe size={14} color="#7C3AED" /> Global Delivery Network
          </span>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              padding: "6px 14px",
              fontSize: "0.78rem",
              fontWeight: 800,
              color: "#D97706",
              backgroundColor: "rgba(217, 119, 6, 0.1)",
              border: "1px solid rgba(217, 119, 6, 0.25)",
              borderRadius: "9999px",
            }}
          >
            <Star size={12} color="#D97706" fill="#D97706" /> Major Partners Highlighted
          </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            fontFamily: "var(--font-lora), Georgia, serif",
            color: "#180D26",
            margin: "0 0 8px 0",
            lineHeight: 1.2,
          }}
        >
          The Countries We Serve
        </h2>

        <p style={{ fontSize: "1.02rem", color: "#5B486E", margin: 0, lineHeight: 1.65 }}>
          Supplying 100% pure essential oils, oleoresins, floral waters, and carrier oils to corporate clients and manufacturers worldwide.
        </p>
      </div>

      {/* Filter Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {filterTabs.map(tab => {
          const isActive = activeFilter === tab.value;
          const isMajorTab = tab.value === "Major";

          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveFilter(tab.value)}
              style={{
                padding: "7px 16px",
                borderRadius: "9999px",
                fontSize: "0.82rem",
                fontWeight: 700,
                cursor: "pointer",
                border: isActive 
                  ? (isMajorTab ? "1px solid #D97706" : "1px solid #7C3AED") 
                  : "1px solid rgba(124, 58, 237, 0.18)",
                backgroundColor: isActive 
                  ? (isMajorTab ? "#D97706" : "#7C3AED") 
                  : (isMajorTab ? "rgba(217, 119, 6, 0.08)" : "rgba(124, 58, 237, 0.06)"),
                color: isActive 
                  ? "#FFFFFF" 
                  : (isMajorTab ? "#B45309" : "#5B486E"),
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Actual High-Precision SVG World Map Canvas */}
      <div
        style={{
          position: "relative",
          width: "100%",
          borderRadius: "24px",
          backgroundColor: "#FBF9F5",
          border: "1.5px solid rgba(124, 58, 237, 0.18)",
          padding: "16px 8px 24px",
          boxShadow: "inset 0 0 40px rgba(24, 13, 38, 0.03)",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 1000 500"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            overflow: "visible",
          }}
        >
          <defs>


            {/* Subtle Country Shadow */}
            <filter id="landDrop" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="rgba(24, 13, 38, 0.08)" />
            </filter>
          </defs>

          {/* Actual Geographic Country Landmasses */}
          <g filter="url(#landDrop)">
            {WORLD_COUNTRIES_PATHS.map(country => {
              const isIndia = country.id === "IND" || country.name === "India";
              const isMajor = MAJOR_COUNTRY_IDS.has(country.id);
              const isHoveredCountry = currentDisplayDest?.countryId === country.id;

              // Color grading
              let fill = "rgba(124, 58, 237, 0.08)";
              let stroke = "rgba(124, 58, 237, 0.22)";
              let strokeWidth = "0.75";

              if (isIndia) {
                fill = "rgba(5, 150, 105, 0.35)";
                stroke = "#059669";
                strokeWidth = "1.8";
              } else if (isHoveredCountry) {
                fill = "rgba(124, 58, 237, 0.45)";
                stroke = "#7C3AED";
                strokeWidth = "2";
              } else if (isMajor) {
                fill = "rgba(124, 58, 237, 0.24)";
                stroke = "rgba(124, 58, 237, 0.65)";
                strokeWidth = "1.2";
              }

              return (
                <path
                  key={country.id}
                  d={country.d}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  style={{
                    transition: "all 0.25s ease",
                  }}
                />
              );
            })}
          </g>

          {/* Highlight indicator at destination point */}
          {currentDisplayDest && (
            <g>
              <circle
                cx={currentDisplayDest.x}
                cy={currentDisplayDest.y}
                r="16"
                fill="rgba(124, 58, 237, 0.2)"
              >
                <animate attributeName="r" values="8;20;8" dur="1.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.8s" repeatCount="indefinite" />
              </circle>
            </g>
          )}

          {/* Origin: New Delhi, India (Pulsing Emerald Anchor Hub) */}
          <g transform={`translate(${ORIGIN_HUB.x}, ${ORIGIN_HUB.y})`}>
            {/* Animated Radar Waves */}
            <circle r="20" fill="rgba(5, 150, 105, 0.2)" opacity="0.8">
              <animate attributeName="r" values="8;28;8" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle r="7.5" fill="#059669" stroke="#FFFFFF" strokeWidth="2.5" />
            <circle r="3" fill="#FFFFFF" />

            {/* Hub Badge Tag */}
            <g transform="translate(10, -14)">
              <rect x="0" y="0" width="138" height="22" rx="6" fill="#059669" />
              <text x="6" y="15" fill="#FFFFFF" fontSize="9" fontWeight="800" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">
                ★ HQ &bull; NEW DELHI (INDIA)
              </text>
            </g>
          </g>

          {/* Plotted Destination Location Pins & Badges */}
          {filteredDestinations.map(dest => {
            const isHovered = currentDisplayDest?.id === dest.id;
            const isMajor = dest.isMajor;

            // Pin styling
            const pinColor = isHovered 
              ? "#D97706" 
              : (isMajor ? "#7C3AED" : "#5B486E");

            return (
              <g
                key={dest.id}
                transform={`translate(${dest.x}, ${dest.y})`}
                style={{ cursor: "pointer", transition: "all 0.2s ease" }}
                onMouseEnter={() => setHoveredDest(dest)}
                onMouseLeave={() => setHoveredDest(null)}
                onClick={() => setSelectedDest(dest)}
              >
                {/* Major Country Special Attention Pulse Beacon */}
                {isMajor && !isHovered && (
                  <circle r="10" fill="rgba(124, 58, 237, 0.22)">
                    <animate attributeName="r" values="6;14;6" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}

                {/* Hover Pulse */}
                {isHovered && (
                  <circle r="14" fill="rgba(217, 119, 6, 0.3)">
                    <animate attributeName="r" values="8;18;8" dur="1.2s" repeatCount="indefinite" />
                  </circle>
                )}

                {/* Drop Pin Icon */}
                <path
                  d="M 0 -18 C -5 -18 -8 -14 -8 -9 C -8 -3 0 0 0 0 C 0 0 8 -3 8 -9 C 8 -14 5 -18 0 -18 Z"
                  fill={pinColor}
                  stroke="#FFFFFF"
                  strokeWidth={isMajor ? "1.8" : "1.2"}
                />
                
                {/* Center Star or Dot */}
                {isMajor ? (
                  <circle cx="0" cy="-9" r="3" fill="#FBBF24" />
                ) : (
                  <circle cx="0" cy="-9" r="2.2" fill="#FFFFFF" />
                )}

                {/* Country Text Tag */}
                <g transform={`translate(${dest.labelOffset.x}, ${dest.labelOffset.y})`}>
                  <rect
                    x={dest.align === "right" ? -dest.name.length * 6.2 - (isMajor ? 18 : 6) : dest.align === "left" ? 0 : -dest.name.length * 3.1 - (isMajor ? 10 : 4)}
                    y="-10"
                    width={dest.name.length * 6.2 + (isMajor ? 20 : 8)}
                    height="15"
                    rx="4"
                    fill={isHovered ? "rgba(255, 255, 255, 0.98)" : isMajor ? "rgba(255, 255, 255, 0.92)" : "rgba(255, 255, 255, 0.82)"}
                    stroke={isHovered ? "#D97706" : isMajor ? "#7C3AED" : "rgba(124, 58, 237, 0.22)"}
                    strokeWidth={isMajor ? "1.2" : "0.8"}
                  />

                  {/* Special Star Icon for Major Partner */}
                  {isMajor && (
                    <text
                      x={dest.align === "right" ? -dest.name.length * 6.2 - 2 : dest.align === "left" ? 4 : -dest.name.length * 3.1 - 4}
                      y="1"
                      fill="#D97706"
                      fontSize="9"
                      fontWeight="900"
                      fontFamily="system-ui, sans-serif"
                    >
                      ★
                    </text>
                  )}

                  <text
                    x={dest.align === "right" ? -4 : dest.align === "left" ? (isMajor ? 14 : 4) : (isMajor ? 4 : 0)}
                    y="1"
                    fill={isHovered ? "#D97706" : isMajor ? "#180D26" : "#4A3B58"}
                    fontSize="7.5"
                    fontWeight={isMajor ? "900" : "700"}
                    letterSpacing="0.04em"
                    textAnchor={dest.align === "right" ? "end" : dest.align === "left" ? "start" : "middle"}
                    fontFamily="system-ui, -apple-system, sans-serif"
                  >
                    {dest.name}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>

        {/* Live Detail Card (STRICTLY COUNTRY & REGION INFO ONLY - NO TRANSPORT METHODS) */}
        {currentDisplayDest && (
          <div
            className="liquid-glass-elevated"
            style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              right: "16px",
              borderRadius: "20px",
              padding: "16px 22px",
              backgroundColor: "rgba(255, 255, 255, 0.98)",
              border: currentDisplayDest.isMajor ? "2px solid #D97706" : "1.5px solid rgba(124, 58, 237, 0.35)",
              boxShadow: "0 14px 36px rgba(24, 13, 38, 0.12)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
              animation: "fadeIn 0.2s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: currentDisplayDest.isMajor ? "rgba(217, 119, 6, 0.12)" : "rgba(124, 58, 237, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {currentDisplayDest.isMajor ? (
                  <Star size={24} color="#D97706" fill="#D97706" />
                ) : (
                  <Globe size={22} color="#7C3AED" />
                )}
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <h4 style={{ fontSize: "1.12rem", fontWeight: 800, color: "#180D26", margin: 0 }}>
                    {currentDisplayDest.name}
                  </h4>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(124, 58, 237, 0.12)",
                      color: "#7C3AED",
                    }}
                  >
                    {currentDisplayDest.region}
                  </span>

                  {currentDisplayDest.isMajor && (
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        padding: "2px 10px",
                        borderRadius: "9999px",
                        backgroundColor: "rgba(217, 119, 6, 0.15)",
                        color: "#D97706",
                        border: "1px solid rgba(217, 119, 6, 0.3)",
                      }}
                    >
                      ★ {currentDisplayDest.tier || "Major Partner"}
                    </span>
                  )}
                </div>

                <p style={{ fontSize: "0.86rem", color: "#5B486E", margin: "4px 0 0 0" }}>
                  {currentDisplayDest.category}
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  color: "#059669",
                  backgroundColor: "rgba(5, 150, 105, 0.1)",
                  border: "1px solid rgba(5, 150, 105, 0.25)",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <CheckCircle2 size={14} color="#059669" /> Verified Delivery Destination
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Major Partners Spotlight Grid */}
      <div style={{ marginTop: "24px", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
          <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#D97706", textTransform: "uppercase", letterSpacing: "0.06em", display: "flex", alignItems: "center", gap: "6px" }}>
            <Star size={14} color="#D97706" fill="#D97706" /> Major Partner Markets
          </span>
          <span style={{ fontSize: "0.75rem", color: "#7C3AED", fontWeight: 700 }}>
            Click or hover on map pins to highlight
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {DESTINATIONS_DATA.filter(d => d.isMajor).map(major => (
            <div
              key={major.id}
              onClick={() => setSelectedDest(major)}
              onMouseEnter={() => setHoveredDest(major)}
              onMouseLeave={() => setHoveredDest(null)}
              style={{
                borderRadius: "14px",
                padding: "12px 14px",
                backgroundColor: currentDisplayDest?.id === major.id ? "rgba(124, 58, 237, 0.12)" : "rgba(255, 255, 255, 0.85)",
                border: currentDisplayDest?.id === major.id ? "1.5px solid #7C3AED" : "1px solid rgba(124, 58, 237, 0.16)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                <strong style={{ fontSize: "0.88rem", color: "#180D26" }}>
                  {major.name}
                </strong>
                <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "#D97706", backgroundColor: "rgba(217, 119, 6, 0.1)", padding: "2px 6px", borderRadius: "9999px" }}>
                  ★ Major
                </span>
              </div>
              <p style={{ fontSize: "0.75rem", color: "#5B486E", margin: 0, lineHeight: 1.35 }}>
                {major.category}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quality & Certification Strip (No transport methods) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginTop: "16px",
        }}
      >
        <div
          style={{
            padding: "16px 18px",
            borderRadius: "16px",
            backgroundColor: "rgba(124, 58, 237, 0.06)",
            border: "1px solid rgba(124, 58, 237, 0.16)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Clock size={20} color="#7C3AED" style={{ flexShrink: 0 }} />
          <div>
            <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#180D26", display: "block" }}>
              48-Hour Order Dispatch
            </span>
            <span style={{ fontSize: "0.75rem", color: "#5B486E" }}>
              Standard warehouse inventory
            </span>
          </div>
        </div>

        <div
          style={{
            padding: "16px 18px",
            borderRadius: "16px",
            backgroundColor: "rgba(5, 150, 105, 0.06)",
            border: "1px solid rgba(5, 150, 105, 0.16)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Award size={20} color="#059669" style={{ flexShrink: 0 }} />
          <div>
            <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#180D26", display: "block" }}>
              ISO 9001:2015 &amp; GMP
            </span>
            <span style={{ fontSize: "0.75rem", color: "#5B486E" }}>
              International quality certified
            </span>
          </div>
        </div>

        <div
          style={{
            padding: "16px 18px",
            borderRadius: "16px",
            backgroundColor: "rgba(2, 132, 199, 0.06)",
            border: "1px solid rgba(2, 132, 199, 0.16)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <ShieldCheck size={20} color="#0284C7" style={{ flexShrink: 0 }} />
          <div>
            <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#180D26", display: "block" }}>
              Export Documentation
            </span>
            <span style={{ fontSize: "0.75rem", color: "#5B486E" }}>
              Dual GC-MS CoA with each lot
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
