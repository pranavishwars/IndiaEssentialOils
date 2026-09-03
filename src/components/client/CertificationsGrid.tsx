"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Award, Eye, Download, X, CheckCircle2, ExternalLink, FileText } from "lucide-react";

export interface CertificateItem {
  id: string;
  name: string;
  subtitle: string;
  scope: string;
  description: string;
  issuer: string;
  license: string;
  validity: string;
  imageSrc: string;
  entityName: string;
  badgeColor: string;
  accentBg: string;
}

const CERTIFICATES: CertificateItem[] = [
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    subtitle: "Quality Management System (QMS)",
    scope: "Manufacturing & Packing of Essential & Carrier Oils, Herbal Extracts & Wellness Products",
    description: "Certified by QAMS and accredited by UKAF (London, UK). Guarantees international standardization across processing, quality auditing, batch verification, and global supply chain logistics.",
    issuer: "QAMS Certification / UKAF (UK)",
    license: "23UQAA0704",
    validity: "Valid through July 2026",
    imageSrc: "/certificates/iso_9001_2015_certificate.jpg",
    entityName: "Gingerly Naturals Pvt. Ltd. (Parent Group)",
    badgeColor: "#7C3AED",
    accentBg: "rgba(124, 58, 237, 0.12)",
  },
  {
    id: "iso-22000",
    name: "ISO 22000:2005",
    subtitle: "Food Safety Management System (FSMS)",
    scope: "Processing & Manufacturing of Essential Oils, Carrier Oils, Oleoresins & Herbal Extracts",
    description: "Assessed and registered by UDEM International Certification (Category E). Certifies entire distillation and storage facilities against food safety, non-contamination, and hygienic standards.",
    issuer: "UDEM Uluslararası Belgelendirme (Turkey)",
    license: "70427",
    validity: "Multi-Year Audited System",
    imageSrc: "/certificates/iso_22000_2005_certificate.jpg",
    entityName: "Mother Herbs Pvt. Ltd.",
    badgeColor: "#059669",
    accentBg: "rgba(16, 185, 129, 0.12)",
  },
  {
    id: "gmp-compliance",
    name: "GMP (Good Manufacturing Practices)",
    subtitle: "Certificate of Compliance",
    scope: "Hygienic Distillation, Processing & Packaging of Pure Essential & Carrier Oils",
    description: "Certified by QAMS under UKAF accreditation guidelines. Assures strict sanitary protocols, climate-controlled packaging suites, cleanroom bottling, and prevention of adulteration.",
    issuer: "QAMS Certification / UKAF (UK)",
    license: "23UGAA0804",
    validity: "Valid through July 2026",
    imageSrc: "/certificates/gmp_compliance_certificate.jpg",
    entityName: "Gingerly Naturals Pvt. Ltd. (Parent Group)",
    badgeColor: "#D97706",
    accentBg: "rgba(245, 158, 11, 0.12)",
  },
  {
    id: "npop-organic",
    name: "India Organic (NPOP)",
    subtitle: "Scope Certificate · RSOCA",
    scope: "Certified Organic Botanical Products (Equiv. EU Council Reg. EC 834/2007 & Swiss Organic)",
    description: "Authorized by Rajasthan State Organic Certification Agency (RSOCA) under India's National Programme for Organic Production. Certified equivalent to EU Category A & F regulations.",
    issuer: "RSOCA (Rajasthan State Organic Agency)",
    license: "ORG/SC/2202/000426",
    validity: "Annual Surveillance & Renewal",
    imageSrc: "/certificates/npop_india_organic_certificate.jpg",
    entityName: "Mother Herbs Pvt. Ltd.",
    badgeColor: "#0284C7",
    accentBg: "rgba(2, 132, 199, 0.12)",
  },
];

export function CertificationsGrid() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <>
      {/* 2x2 Grid on Desktop & Tablet */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
          gap: "28px",
          marginBottom: "64px",
        }}
      >
        {CERTIFICATES.map((cert) => (
          <div
            key={cert.id}
            className="liquid-glass"
            style={{
              borderRadius: "28px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              border: "1px solid rgba(124, 58, 237, 0.18)",
              boxShadow: "0 8px 32px rgba(24, 13, 38, 0.04)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Header / Badges */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "16px",
                    backgroundColor: cert.accentBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1px solid ${cert.badgeColor}33`,
                    flexShrink: 0,
                  }}
                >
                  <Award size={26} color={cert.badgeColor} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-lora), Georgia, serif",
                      color: "#180D26",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {cert.name}
                  </h3>
                  <span style={{ fontSize: "0.8rem", color: cert.badgeColor, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {cert.subtitle}
                  </span>
                </div>
              </div>

              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#059669",
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  whiteSpace: "nowrap",
                }}
              >
                <CheckCircle2 size={12} /> Verified
              </span>
            </div>

            {/* Scope Box */}
            <div
              style={{
                backgroundColor: "#FCFAF6",
                borderRadius: "14px",
                padding: "12px 16px",
                border: "1px solid rgba(124, 58, 237, 0.1)",
                marginBottom: "16px",
              }}
            >
              <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2px" }}>
                Certified Scope &amp; Activities
              </div>
              <div style={{ fontSize: "0.85rem", color: "#2E1A47", fontWeight: 600, lineHeight: 1.4 }}>
                {cert.scope}
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: "0.92rem", color: "#5B486E", lineHeight: 1.65, marginBottom: "20px", flexGrow: 1 }}>
              {cert.description}
            </p>

            {/* Compact Document Thumbnail Bar with Interactive View Action */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                padding: "12px 16px",
                borderRadius: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(124, 58, 237, 0.15)",
                marginTop: "auto",
              }}
            >
              {/* Mini Thumbnail */}
              <div
                onClick={() => setSelectedCert(cert)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "36px",
                    height: "48px",
                    borderRadius: "6px",
                    overflow: "hidden",
                    border: "1px solid rgba(0, 0, 0, 0.15)",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={cert.imageSrc}
                    alt={`${cert.name} Certificate Document Scan`}
                    fill
                    sizes="36px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#180D26", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    Cert No: {cert.license}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#7A6985", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {cert.issuer}
                  </div>
                </div>
              </div>

              {/* View Document Button */}
              <button
                onClick={() => setSelectedCert(cert)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(124, 58, 237, 0.1)",
                  border: "1px solid rgba(124, 58, 237, 0.25)",
                  color: "#7C3AED",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s ease",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#7C3AED";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.1)";
                  e.currentTarget.style.color = "#7C3AED";
                }}
              >
                <Eye size={14} /> View Audit Doc
              </button>
            </div>

            {/* Entity Footer Details */}
            <div style={{ marginTop: "12px", display: "flex", justifyContent: "space-between", fontSize: "0.74rem", color: "#8C7A9C" }}>
              <span>Registered to: <strong style={{ color: "#4A3B5E" }}>{cert.entityName}</strong></span>
              <span>{cert.validity}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Document Lightbox Modal */}
      {selectedCert && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: "var(--z-modal)" as unknown as number,
            backgroundColor: "rgba(18, 10, 30, 0.82)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeIn 0.2s ease",
          }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              maxWidth: "680px",
              width: "100%",
              maxHeight: "92vh",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 24px 80px rgba(0, 0, 0, 0.4)",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: "16px 24px",
                borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#FCFAF6",
              }}
            >
              <div>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: 0 }}>
                  {selectedCert.name} Official Audit Certificate
                </h4>
                <div style={{ fontSize: "0.78rem", color: "#7C3AED", fontWeight: 600 }}>
                  Registration / Certificate ID: {selectedCert.license} · {selectedCert.issuer}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <a
                  href={selectedCert.imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "8px 12px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(124, 58, 237, 0.08)",
                    color: "#7C3AED",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                  title="Open Full Resolution"
                >
                  <ExternalLink size={14} /> Full Image
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 0, 0, 0.06)",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#180D26",
                  }}
                  aria-label="Close certificate preview"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Document Image Frame */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#F3EFE6",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "520px",
                  height: "720px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                  backgroundColor: "white",
                }}
              >
                <Image
                  src={selectedCert.imageSrc}
                  alt={`${selectedCert.name} Certificate Document`}
                  fill
                  sizes="(max-width: 680px) 100vw, 520px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div
              style={{
                padding: "14px 24px",
                borderTop: "1px solid rgba(0, 0, 0, 0.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#FCFAF6",
                fontSize: "0.8rem",
                color: "#5B486E",
              }}
            >
              <div>
                Issued to: <strong style={{ color: "#180D26" }}>{selectedCert.entityName}</strong>
              </div>
              <a
                href={selectedCert.imageSrc}
                download={`${selectedCert.id}-certificate.jpg`}
                style={{
                  padding: "8px 16px",
                  borderRadius: "9999px",
                  backgroundColor: "#7C3AED",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Download size={14} /> Download Certificate Copy
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
