"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    src: "/hero_saffron_v2.jpg",
    alt: "Kashmir saffron crocus agricultural plantation in full purple bloom with red stigmas",
  },
  {
    src: "/hero_chamomile_v2.jpg",
    alt: "German chamomile blooming meadow with crisp white petals and golden yellow flower heads",
  },
  {
    src: "/hero_blue_v2.jpg",
    alt: "Vibrant blue cornflower field with natural pathway through lush green agricultural meadow",
  },
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "hidden" }}>
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          style={{
            position: "absolute",
            inset: 0,
            opacity: index === currentIndex ? 1 : 0,
            transform: index === currentIndex ? "scale(1.03)" : "scale(1.0)",
            transition: "opacity 1.4s cubic-bezier(0.22, 1, 0.36, 1), transform 6s cubic-bezier(0.22, 1, 0.36, 1)",
            pointerEvents: "none",
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      ))}

      {/* Dark gradient on the left for text legibility — hero text is always white */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(105deg, rgba(45,36,56,0.82) 0%, rgba(45,36,56,0.55) 45%, rgba(45,36,56,0.1) 75%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* Downward Scroll Action Button */}
      <button
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
        aria-label="Scroll down to explore catalog"
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: "rgba(35, 24, 48, 0.48)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.38)",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: "var(--z-hero)" as unknown as number,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
          transition: "transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateX(-50%) translateY(3px) scale(1.08)";
          e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.75)";
          e.currentTarget.style.boxShadow = "0 12px 36px rgba(124, 58, 237, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(-50%) translateY(0) scale(1.0)";
          e.currentTarget.style.backgroundColor = "rgba(35, 24, 48, 0.48)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.25)";
        }}
      >
        <ChevronDown size={24} strokeWidth={2.4} />
      </button>
    </div>
  );
}
