"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { src: "/hero_background.jpg", alt: "Lavender field at sunrise" },
  { src: "/hero_background_2.jpg", alt: "Botanical distillation apparatus" },
  { src: "/hero_background_3.jpg", alt: "Essential oils in a greenhouse" },
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          style={{
            objectFit: "cover",
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1.2s ease",
          }}
        />
      ))}

      {/* Dark gradient on the left for text legibility — hero text is always white */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(105deg, rgba(45,36,56,0.82) 0%, rgba(45,36,56,0.55) 45%, rgba(45,36,56,0.1) 75%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* Slide indicators */}
      <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "10px", zIndex: 20 }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: index === currentIndex ? "28px" : "8px",
              height: "8px",
              borderRadius: "9999px",
              backgroundColor: index === currentIndex ? "white" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              transition: "width 0.3s ease, background-color 0.3s ease",
              padding: 0,
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
