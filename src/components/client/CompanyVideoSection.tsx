"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, Sparkles, ShieldCheck, Flame, Microscope, Globe, ArrowRight } from "lucide-react";

export function CompanyVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const keyHighlights = [
    {
      icon: <Flame size={20} color="#C4B5FD" />,
      title: "Direct Steam Extraction",
      desc: "316-grade stainless steel stills preserving natural volatile fractions.",
    },
    {
      icon: <Microscope size={20} color="#A7F3D0" />,
      title: "In-House GC-MS Testing",
      desc: "Every batch analyzed on Agilent chromatography systems for 100% purity.",
    },
    {
      icon: <ShieldCheck size={20} color="#FDE68A" />,
      title: "ISO 9001:2015 & GMP",
      desc: "Strict quality management and hygienic manufacturing standards certified internationally.",
    },
    {
      icon: <Globe size={20} color="#BAE6FD" />,
      title: "Global Export Network",
      desc: "Direct customs-cleared freight delivery to partners worldwide.",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        padding: "96px 24px",
        overflow: "hidden",
        backgroundColor: "#130A1F",
        color: "white",
        margin: "0 12px 80px",
        borderRadius: "2.5rem",
        boxShadow: "0 24px 60px rgba(19, 10, 31, 0.4)",
      }}
    >
      {/* Radiant Background Ambiance Glows */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "25%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, rgba(124, 58, 237, 0) 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "15%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(5, 150, 105, 0) 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 10 }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 56px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "9999px",
              backgroundColor: "rgba(139, 92, 246, 0.2)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(167, 139, 250, 0.35)",
              color: "#C4B5FD",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            <Sparkles size={14} color="#C4B5FD" /> Facility Overview &amp; Corporate Film
          </div>

          <h2
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              fontWeight: 700,
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "white",
              lineHeight: 1.15,
              marginBottom: "20px",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            Witness Botanical Distillation<br />&amp; Extraction in Motion
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255, 255, 255, 0.82)",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Take a visual tour inside our manufacturing infrastructure, high-capacity steam stills, cold-pressed expeller mills, and precision analytical testing labs in New Delhi.
          </p>
        </div>

        {/* Elegant Video Player Card */}
        <div
          style={{
            position: "relative",
            borderRadius: "32px",
            overflow: "hidden",
            backgroundColor: "rgba(35, 24, 48, 0.6)",
            backdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 28px 80px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            marginBottom: "48px",
          }}
        >
          {/* 16:9 Video Container */}
          <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
            {!isPlaying ? (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "linear-gradient(rgba(19, 10, 31, 0.4), rgba(19, 10, 31, 0.75)), url('/infrastructure_hero.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={() => setIsPlaying(true)}
              >
                {/* Glowing Play Button Pulse */}
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "110px",
                      height: "110px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(139, 92, 246, 0.4)",
                      animation: "pulse 2s infinite ease-out",
                    }}
                  />
                  <div
                    style={{
                      width: "84px",
                      height: "84px",
                      borderRadius: "50%",
                      backgroundColor: "#8B5CF6",
                      background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 12px 36px rgba(124, 58, 237, 0.6)",
                      border: "2px solid rgba(255, 255, 255, 0.4)",
                      transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
                  >
                    <Play size={32} color="white" style={{ marginLeft: "4px" }} />
                  </div>
                </div>

                <div style={{ marginTop: "24px", textAlign: "center" }}>
                  <div style={{ fontSize: "1.25rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "white" }}>
                    Click to Play Corporate Film (Official Distillation Footage)
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.7)", marginTop: "6px" }}>
                    Produced by India Essential Oils · High Definition
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/FLZivvsO-_Y?autoplay=1&rel=0"
                title="India Essential Oils - Corporate & Distillery Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            )}
          </div>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: "48px" }}>
          {keyHighlights.map((item, index) => (
            <div
              key={index}
              style={{
                borderRadius: "20px",
                padding: "24px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                transition: "transform 0.2s, background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "white", margin: 0 }}>
                  {item.title}
                </h3>
              </div>
              <p style={{ color: "rgba(255, 255, 255, 0.72)", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            padding: "28px 36px",
            borderRadius: "24px",
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.14)",
          }}
        >
          <div>
            <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "white" }}>
              Interested in Custom Extraction or Sourcing at Scale?
            </div>
            <div style={{ fontSize: "0.88rem", color: "rgba(255, 255, 255, 0.7)", marginTop: "4px" }}>
              Our chemical engineers and export documentation team are ready to assist.
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/infrastructure"
              style={{
                padding: "12px 24px",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Explore Full Infrastructure <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="btn-vibrant-primary"
              style={{
                padding: "12px 26px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
