"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, Eye, Download, X, ExternalLink } from "lucide-react";

export interface CertificateItem {
  id: string;
  name: string;
  subtitle: string;
  scope?: string;
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
    scope: "Manufacturing of Herbs, Spices, Ayurvedic Herbal Powders, Teas, Essential Oils, Carrier Oils, Oleoresins, Nutraceuticals, Protein Powders & Herbal Extracts",
    description: "Assessed and certified by QAMS Certification under UKAF accreditation (London, UK). Confirms internationally standardized quality management, batch verification, distillation control, and global B2B supply chain integrity.",
    issuer: "QAMS Certification / UKAF (UK)",
    license: "23UQBJ2932",
    validity: "Valid through 27 July 2029 (Issued 28 July 2026)",
    imageSrc: "/certificates/iso_9001_2015_certificate.jpg",
    entityName: "Mother Herbs Private Limited",
    badgeColor: "#7C3AED",
    accentBg: "rgba(124, 58, 237, 0.08)",
  },
  {
    id: "gmp-compliance",
    name: "GMP (Good Manufacturing Practices)",
    subtitle: "Certificate of Compliance",
    scope: "Manufacturing of Herbs, Spices, Ayurvedic Herbal Powders, Teas, Essential Oils, Carrier Oils, Oleoresins, Nutraceuticals, Protein Powders & Herbal Extracts",
    description: "Certified by QAMS under UKAF accreditation guidelines. Validates hygienic distillation, climate-controlled packaging suites, cleanroom bottling, and prevention of cross-contamination.",
    issuer: "QAMS Certification / UKAF (UK)",
    license: "23UGBJ3032",
    validity: "Valid through 27 July 2029 (Issued 28 July 2026)",
    imageSrc: "/certificates/gmp_compliance_certificate.jpg",
    entityName: "Mother Herbs Private Limited",
    badgeColor: "#7C3AED",
    accentBg: "rgba(124, 58, 237, 0.08)",
  },
  {
    id: "udyam-registration",
    name: "Udyam Registration Certificate",
    subtitle: "Ministry of MSME · Government of India",
    scope: "Manufacturing of Essential Oils, Carrier Oils, Herbal Articles & Botanical Formulations",
    description: "Official enterprise recognition by the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India. Authorizes manufacturing operations at Patparganj, East Delhi.",
    issuer: "Ministry of Micro, Small and Medium Enterprises, Govt. of India",
    license: "UDYAM-DL-02-0101578",
    validity: "Registered Enterprise · Active Classification 2025-26",
    imageSrc: "/certificates/udyam_registration_certificate.jpg",
    entityName: "Mother Herbs Private Limited",
    badgeColor: "#7C3AED",
    accentBg: "rgba(124, 58, 237, 0.08)",
  },
  {
    id: "certificate-of-incorporation",
    name: "Certificate of Incorporation",
    subtitle: "Registrar of Companies · Ministry of Corporate Affairs",
    scope: "Corporate Incorporation under the Companies Act, 1956 (No. 1 of 1956)",
    description: "Official statutory incorporation charter issued by the Registrar of Companies, National Capital Territory of Delhi and Haryana, establishing legal corporate governance and perpetual succession since 2006.",
    issuer: "Registrar of Companies, NCT of Delhi & Haryana",
    license: "U01122DL2006PTC145334",
    validity: "Statutory Incorporation · Established 24 January 2006",
    imageSrc: "/certificates/certificate_of_incorporation.jpg",
    entityName: "Mother Herbs Private Limited",
    badgeColor: "#7C3AED",
    accentBg: "rgba(124, 58, 237, 0.08)",
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
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
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

            {/* Description */}
            <p style={{ fontSize: "0.92rem", color: "#5B486E", lineHeight: 1.65, marginBottom: "20px", flexGrow: 1 }}>
              {cert.description}
            </p>

            {/* View Audit Document Action Button */}
            <div style={{ marginTop: "auto", paddingTop: "8px" }}>
              <button
                onClick={() => setSelectedCert(cert)}
                style={{
                  width: "100%",
                  padding: "11px 20px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(124, 58, 237, 0.08)",
                  border: "1px solid rgba(124, 58, 237, 0.22)",
                  color: "#7C3AED",
                  fontWeight: 700,
                  fontSize: "0.86rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                  transition: "all 0.2s ease",
                  boxShadow: "0 2px 8px rgba(124, 58, 237, 0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#7C3AED";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(124, 58, 237, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.08)";
                  e.currentTarget.style.color = "#7C3AED";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(124, 58, 237, 0.05)";
                }}
              >
                <Eye size={15} /> View Audit Doc
              </button>
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
