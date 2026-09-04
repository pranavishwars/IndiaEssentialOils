"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Product } from "@/lib/products-store";
import {
  ShieldCheck,
  Award,
  FlaskConical,
  CheckCircle2,
  Eye,
  Box,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";

interface ProductImageGalleryProps {
  product: Product;
}

export function ProductImageGallery({ product }: ProductImageGalleryProps) {
  const [activeTab, setActiveTab] = useState<"BOTTLE" | "LABEL">("BOTTLE");
  const [zoomScale, setZoomScale] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [isHoverZooming, setIsHoverZooming] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartDistRef = useRef<number | null>(null);
  const touchStartScaleRef = useRef<number>(1);
  const lastTouchPosRef = useRef<{ x: number; y: number } | null>(null);
  const lastTapTimeRef = useRef<number>(0);

  const bottleSrc = product.compositeImageUrl || `/products/${product.slug}.webp`;
  const labelSrc = product.labelImageUrl || `/labels/${product.slug}.png`;
  const currentSrc = activeTab === "BOTTLE" ? bottleSrc : labelSrc;
  const signatureColor = product.signatureColor || "#275A38";

  // Desktop Mouse Movement (smooth hover zoom when at 1x)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin({ x, y });
  };

  // Mouse Wheel Zoom Support
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(3.5, Math.round((prev + 0.4) * 10) / 10));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => {
      const next = Math.max(1, Math.round((prev - 0.4) * 10) / 10);
      if (next <= 1) {
        setPanOffset({ x: 0, y: 0 });
        setOrigin({ x: 50, y: 50 });
      }
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
    setOrigin({ x: 50, y: 50 });
    setIsHoverZooming(false);
  };

  // Touch Screen Gestures: Double-Tap & Pinch-to-Zoom
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    // 2-Finger Pinch Initiation
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStartDistRef.current = dist;
      touchStartScaleRef.current = zoomScale;

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        setOrigin({
          x: Math.max(0, Math.min(100, ((midX - rect.left) / rect.width) * 100)),
          y: Math.max(0, Math.min(100, ((midY - rect.top) / rect.height) * 100)),
        });
      }
      return;
    }

    // 1-Finger Double-Tap to Zoom In / Zoom Out
    if (e.touches.length === 1) {
      const now = Date.now();
      const touch = e.touches[0];

      if (now - lastTapTimeRef.current < 300) {
        // Double tap confirmed!
        if (zoomScale > 1.05) {
          handleResetZoom();
        } else {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = ((touch.clientX - rect.left) / rect.width) * 100;
            const y = ((touch.clientY - rect.top) / rect.height) * 100;
            setOrigin({ x, y });
            setZoomScale(activeTab === "LABEL" ? 2.5 : 2.0);
          }
        }
        lastTapTimeRef.current = 0;
      } else {
        lastTapTimeRef.current = now;
        lastTouchPosRef.current = { x: touch.clientX, y: touch.clientY };
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    // 2-Finger Pinch Zooming
    if (e.touches.length === 2 && touchStartDistRef.current !== null) {
      if (e.cancelable) e.preventDefault();
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const scaleFactor = dist / touchStartDistRef.current;
      const newScale = Math.min(3.5, Math.max(1, touchStartScaleRef.current * scaleFactor));
      setZoomScale(Math.round(newScale * 10) / 10);
      if (newScale <= 1) {
        setPanOffset({ x: 0, y: 0 });
      }
      return;
    }

    // 1-Finger Pan/Drag when Zoomed
    if (e.touches.length === 1 && zoomScale > 1.05 && lastTouchPosRef.current) {
      if (e.cancelable) e.preventDefault();
      const touch = e.touches[0];
      const dx = touch.clientX - lastTouchPosRef.current.x;
      const dy = touch.clientY - lastTouchPosRef.current.y;

      // Bound pan to keep image comfortably in view
      const maxPan = 140 * zoomScale;
      setPanOffset((prev) => ({
        x: Math.max(-maxPan, Math.min(maxPan, prev.x + dx)),
        y: Math.max(-maxPan, Math.min(maxPan, prev.y + dy)),
      }));

      lastTouchPosRef.current = { x: touch.clientX, y: touch.clientY };
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length < 2) {
      touchStartDistRef.current = null;
    }
    if (e.touches.length === 0) {
      lastTouchPosRef.current = null;
    }
  };

  // Switch tabs (reset zoom when switching between bottle and label)
  const handleTabSwitch = (tab: "BOTTLE" | "LABEL") => {
    setActiveTab(tab);
    handleResetZoom();
  };

  const effectiveScale =
    isHoverZooming && zoomScale === 1
      ? activeTab === "LABEL"
        ? 2.2
        : 1.85
      : zoomScale;

  const isZoomed = effectiveScale > 1.05;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
      {/* Primary Gallery Container */}
      <div
        ref={containerRef}
        onMouseEnter={() => {
          if (zoomScale === 1) setIsHoverZooming(true);
        }}
        onMouseLeave={() => {
          setIsHoverZooming(false);
          if (zoomScale === 1) {
            setPanOffset({ x: 0, y: 0 });
            setOrigin({ x: 50, y: 50 });
          }
        }}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        style={{
          position: "relative",
          width: "100%",
          height: "520px",
          backgroundColor: "#F7F4EE",
          borderRadius: "28px",
          border: "1px solid rgba(124, 58, 237, 0.2)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: isZoomed ? "grab" : "crosshair",
          touchAction: isZoomed ? "none" : "pan-y",
          boxShadow: "0 10px 36px rgba(24, 13, 38, 0.06)",
          userSelect: "none",
        }}
      >
        {/* Main Image with Smooth Touch & Mouse Zoom */}
        <img
          src={currentSrc}
          alt={product.name}
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: activeTab === "BOTTLE" ? "cover" : "contain",
            objectPosition: "center",
            padding: activeTab === "LABEL" ? "28px" : "0px",
            transformOrigin: `${origin.x}% ${origin.y}%`,
            transform: isZoomed
              ? `translate3d(${panOffset.x}px, ${panOffset.y}px, 0) scale(${effectiveScale})`
              : "scale(1)",
            transition:
              touchStartDistRef.current !== null
                ? "none"
                : isHoverZooming
                ? "transform 0.08s ease-out"
                : "transform 0.25s cubic-bezier(0.2, 0, 0, 1)",
            pointerEvents: "none",
            display: "block",
            willChange: "transform",
          }}
        />

        {/* View Mode Toggle Pill (Top-Right) */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            display: "flex",
            gap: "6px",
            backgroundColor: "rgba(255, 255, 255, 0.86)",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            padding: "4px",
            borderRadius: "9999px",
            border: "1px solid rgba(124, 58, 237, 0.22)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            zIndex: 15,
          }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleTabSwitch("BOTTLE");
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              padding: "6px 14px",
              borderRadius: "9999px",
              fontSize: "0.78rem",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              backgroundColor: activeTab === "BOTTLE" ? "#180D26" : "transparent",
              color: activeTab === "BOTTLE" ? "#FFFFFF" : "#5B486E",
            }}
          >
            <Box size={14} /> 3D Bottle
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleTabSwitch("LABEL");
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              padding: "6px 14px",
              borderRadius: "9999px",
              fontSize: "0.78rem",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              backgroundColor: activeTab === "LABEL" ? "#180D26" : "transparent",
              color: activeTab === "LABEL" ? "#FFFFFF" : "#5B486E",
            }}
          >
            <Eye size={14} /> Flat Label
          </button>
        </div>

        {/* Floating Authentic GC-MS Seal Badge */}
        <div
          style={{
            position: "absolute",
            top: "18px",
            left: "18px",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: "rgba(255, 255, 255, 0.86)",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            borderRadius: "9999px",
            padding: "5px 14px",
            fontSize: "0.75rem",
            fontWeight: 800,
            color: "#059669",
            boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
            zIndex: 15,
          }}
        >
          <ShieldCheck size={14} color="#059669" />
          <span>GC-MS Authenticated</span>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: signatureColor,
              display: "inline-block",
              marginLeft: "4px",
              border: "1px solid rgba(0,0,0,0.15)",
            }}
            title={`Signature Botanical Accent: ${signatureColor}`}
          />
        </div>

        {/* Touch & Desktop Interactive Zoom Controls Dock (Bottom-Left) */}
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "16px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            padding: "4px 6px",
            borderRadius: "9999px",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            boxShadow: "0 4px 16px rgba(24, 13, 38, 0.12)",
            zIndex: 15,
            userSelect: "none",
          }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleZoomOut();
            }}
            disabled={zoomScale <= 1}
            title="Zoom Out"
            aria-label="Zoom out"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: zoomScale <= 1 ? "transparent" : "rgba(124, 58, 237, 0.1)",
              color: zoomScale <= 1 ? "#A092B0" : "#7C3AED",
              cursor: zoomScale <= 1 ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.15s ease",
            }}
          >
            <ZoomOut size={16} />
          </button>

          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "#2E1A47",
              minWidth: "42px",
              textAlign: "center",
            }}
          >
            {Math.round(effectiveScale * 100)}%
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleZoomIn();
            }}
            disabled={zoomScale >= 3.5}
            title="Zoom In"
            aria-label="Zoom in"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: zoomScale >= 3.5 ? "transparent" : "rgba(124, 58, 237, 0.1)",
              color: zoomScale >= 3.5 ? "#A092B0" : "#7C3AED",
              cursor: zoomScale >= 3.5 ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.15s ease",
            }}
          >
            <ZoomIn size={16} />
          </button>

          {isZoomed && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleResetZoom();
              }}
              title="Reset Zoom to 100%"
              aria-label="Reset zoom"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "5px 11px",
                borderRadius: "9999px",
                border: "none",
                backgroundColor: "#7C3AED",
                color: "#FFFFFF",
                fontSize: "0.72rem",
                fontWeight: 700,
                cursor: "pointer",
                marginLeft: "2px",
                transition: "background-color 0.15s ease",
              }}
            >
              <RotateCcw size={12} />
              Reset
            </button>
          )}
        </div>

        {/* Dynamic Zoom Hint Badge (Bottom-Right) */}
        <div
          style={{
            position: "absolute",
            bottom: "18px",
            right: "18px",
            backgroundColor: "rgba(255, 255, 255, 0.82)",
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
            color: "#5B486E",
            fontSize: "0.74rem",
            fontWeight: 700,
            padding: "5px 12px",
            borderRadius: "9999px",
            border: "1px solid rgba(124, 58, 237, 0.2)",
            pointerEvents: "none",
            zIndex: 12,
            boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
          }}
        >
          {isZoomed
            ? "Drag to pan · Double-tap or Reset to exit"
            : "Pinch, double-tap, or + / - to zoom"}
        </div>
      </div>

      {/* Quality Feature Badges Strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        <Link
          href="/certifications"
          title="View accredited ISO 9001:2015, GMP, Udyam & Statutory Certificates"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.72)",
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
            border: "1px solid rgba(124, 58, 237, 0.18)",
            borderRadius: "14px",
            padding: "12px 10px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            textDecoration: "none",
            transition: "transform 0.2s, background-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.12)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.72)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <Award size={18} color="#7C3AED" />
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#180D26" }}>ISO 9001 &amp; GMP</span>
        </Link>

        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.72)",
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
            border: "1px solid rgba(124, 58, 237, 0.18)",
            borderRadius: "14px",
            padding: "12px 10px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <FlaskConical size={18} color="#059669" />
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#180D26" }}>100% Pure & Uncut</span>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.72)",
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
            border: "1px solid rgba(124, 58, 237, 0.18)",
            borderRadius: "14px",
            padding: "12px 10px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <CheckCircle2 size={18} color="#D97706" />
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#180D26" }}>Batch Traceable</span>
        </div>
      </div>
    </div>
  );
}
