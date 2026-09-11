"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";

export function CompanyVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

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


      <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 10 }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 56px" }}>

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
            marginBottom: 0,
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
                {/* Play Button */}
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
                      width: "84px",
                      height: "84px",
                      borderRadius: "50%",
                      backgroundColor: "#7C3AED",
                      background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                      border: "2px solid rgba(255, 255, 255, 0.4)",
                      transition: "transform 0.25s ease",
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

      </div>
    </section>
  );
}
