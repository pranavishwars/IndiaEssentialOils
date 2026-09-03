"use client";

import React, { useState } from "react";
import { Download, FileText, CheckCircle2, Loader2, Sparkles } from "lucide-react";

interface DownloadCatalogButtonProps {
  variant?: "primary" | "secondary" | "pill" | "banner";
  label?: string;
}

export function DownloadCatalogButton({ variant = "primary", label }: DownloadCatalogButtonProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      // Trigger download
      const res = await fetch("/api/catalog/download");
      const disposition = res.headers.get("Content-Disposition");
      let filename = "India-Essential-Oils-Botanical-Catalog-September-2026.pdf";
      if (disposition && disposition.includes("filename=")) {
        const match = disposition.match(/filename="?([^"]+)"?/);
        if (match && match[1]) filename = match[1];
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 4000);
    } catch (err) {
      console.error("Error downloading catalog:", err);
    } finally {
      setDownloading(false);
    }
  };

  if (variant === "pill") {
    return (
      <button
        onClick={handleDownload}
        disabled={downloading}
        className="liquid-glass-pill"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 18px",
          borderRadius: "9999px",
          fontSize: "0.84rem",
          fontWeight: 700,
          color: "#7C3AED",
          backgroundColor: "rgba(124, 58, 237, 0.1)",
          border: "1px solid rgba(124, 58, 237, 0.28)",
          cursor: downloading ? "wait" : "pointer",
          boxShadow: "0 2px 10px rgba(124, 58, 237, 0.12)",
          transition: "all 0.2s ease",
        }}
      >
        {downloading ? (
          <Loader2 size={15} className="animate-spin" />
        ) : downloaded ? (
          <CheckCircle2 size={15} color="#059669" />
        ) : (
          <Download size={15} />
        )}
        <span>{downloaded ? "Catalog Downloaded!" : (label || "Download Catalog (PDF)")}</span>
      </button>
    );
  }

  if (variant === "banner") {
    return (
      <div
        className="liquid-glass-elevated"
        style={{
          borderRadius: "24px",
          padding: "24px 32px",
          backgroundColor: "rgba(124, 58, 237, 0.08)",
          border: "1px solid rgba(124, 58, 237, 0.22)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          margin: "32px 0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "16px",
              backgroundColor: "#7C3AED",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 16px rgba(124, 58, 237, 0.35)",
              flexShrink: 0,
            }}
          >
            <FileText size={26} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#180D26", margin: 0 }}>
                Official Botanical Wholesale Catalog &amp; Technical Dossier
              </h3>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "9999px",
                  backgroundColor: "#7C3AED",
                  color: "#FFFFFF",
                }}
              >
                2026 EDITION
              </span>
            </div>
            <p style={{ fontSize: "0.88rem", color: "#5B486E", margin: 0 }}>
              Complete index of 273+ steam-distilled oils, floral waters, supercritical CO₂ extracts, carrier oils, CAS numbers, and packaging specifications.
            </p>
          </div>
        </div>

        <button
          onClick={handleDownload}
          disabled={downloading}
          className="btn-vibrant-primary"
          style={{
            padding: "14px 26px",
            borderRadius: "9999px",
            fontWeight: 700,
            fontSize: "0.92rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "none",
            cursor: downloading ? "wait" : "pointer",
            boxShadow: "0 6px 20px rgba(124, 58, 237, 0.4)",
          }}
        >
          {downloading ? (
            <Loader2 size={17} className="animate-spin" />
          ) : downloaded ? (
            <CheckCircle2 size={17} color="#FFFFFF" />
          ) : (
            <Download size={17} />
          )}
          <span>{downloaded ? "Download Complete!" : (label || "Download Complete Catalog (PDF)")}</span>
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleDownload}
      disabled={downloading}
      className={variant === "secondary" ? "liquid-glass-pill" : "btn-vibrant-primary"}
      style={{
        padding: "14px 28px",
        borderRadius: "9999px",
        fontWeight: 700,
        fontSize: "0.95rem",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        border: variant === "secondary" ? "1px solid rgba(124, 58, 237, 0.25)" : "none",
        color: variant === "secondary" ? "#7C3AED" : "#FFFFFF",
        backgroundColor: variant === "secondary" ? "rgba(124, 58, 237, 0.1)" : undefined,
        cursor: downloading ? "wait" : "pointer",
        boxShadow: variant === "secondary" ? "0 4px 14px rgba(124, 58, 237, 0.1)" : "0 6px 20px rgba(124, 58, 237, 0.4)",
        transition: "all 0.2s ease",
      }}
    >
      {downloading ? (
        <Loader2 size={18} className="animate-spin" />
      ) : downloaded ? (
        <CheckCircle2 size={18} color={variant === "secondary" ? "#059669" : "#FFFFFF"} />
      ) : (
        <Download size={18} />
      )}
      <span>{downloaded ? "Catalog Downloaded!" : (label || "Download Full Catalog (PDF)")}</span>
    </button>
  );
}
