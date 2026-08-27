import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export function Footer() {
  const productLinks = [
    { name: "Essential Oils", href: "/products?category=ESSENTIAL_OIL" },
    { name: "Spice Oils", href: "/products?category=SPICE_OIL" },
    { name: "Carrier & Base Oils", href: "/products?category=CARRIER_OIL" },
    { name: "Floral Absolutes", href: "/products?category=FLORAL_ABSOLUTE" },
    { name: "Floral Waters (Hydrosols)", href: "/products?category=FLORAL_WATER" },
    { name: "Organic Oils", href: "/products?category=ORGANIC_OIL" },
    { name: "Ayurvedic Oils", href: "/products?category=AYURVEDIC" },
  ];

  const trustLinks = [
    { label: "GC-MS Batch Lookup", href: "/batch-lookup" },
    { label: "Infrastructure & Distilleries", href: "/infrastructure" },
    { label: "Verified Client Reviews", href: "/reviews" },
    { label: "Knowledge Hub & Blog", href: "/blog" },
    { label: "Quality & Testing Protocol", href: "/quality" },
    { label: "International Certifications", href: "/certifications" },
    { label: "About Mother Herbs", href: "/about" },
    { label: "Commercial Quote Desk", href: "/request-quote" },
    { label: "Corporate Contact", href: "/contact" },
  ];

  return (
    <footer style={{ margin: "0 12px 12px", borderRadius: "2.5rem", overflow: "hidden", backgroundColor: "#180D26", boxShadow: "0 -4px 30px rgba(0, 0, 0, 0.08)" }}>
      <div style={{ padding: "64px 48px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "48px", marginBottom: "64px" }}>

          {/* Brand Column */}
          <div style={{ maxWidth: "320px" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#C4B5FD", marginBottom: "16px" }}>
              {COMPANY_INFO.name}
            </h2>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "24px" }}>
              A Division of Mother Herbs Private Limited. Leading manufacturer, exporter, and distiller of GC-MS verified botanical oils since 1999.
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href={COMPANY_INFO.contact.indiamart}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IndiaMART TrustSeal"
                style={{
                  height: "38px",
                  padding: "0 14px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#C4B5FD",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                <ShieldCheck size={16} /> TrustSeal
              </a>
            </div>
          </div>

          {/* Botanical Products Column */}
          <div>
            <h3 style={{ fontSize: "0.75rem", fontWeight: 800, color: "#A855F7", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "20px" }}>
              Botanical Catalog
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {productLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: "4px" }}>
                <Link
                  href="/products"
                  style={{ color: "#C4B5FD", textDecoration: "none", fontSize: "0.875rem", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "4px" }}
                >
                  View Complete Catalog <ArrowRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Verification & Trust Column */}
          <div>
            <h3 style={{ fontSize: "0.75rem", fontWeight: 800, color: "#A855F7", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "20px" }}>
              Verification & Trust
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {trustLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Bulletin */}
          <div>
            <h3 style={{ fontSize: "0.75rem", fontWeight: 800, color: "#A855F7", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "20px" }}>
              Export Market Bulletin
            </h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", marginBottom: "16px", lineHeight: 1.6 }}>
              Receive seasonal harvest yields, crop pricing advisories, and GC-MS compliance updates.
            </p>
            <form action="/api/subscribe" method="POST" style={{ display: "flex", gap: "8px" }}>
              <input
                type="email"
                name="email"
                required
                placeholder="procurement@brand.com"
                style={{
                  flex: 1,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "14px",
                  padding: "12px 16px",
                  fontSize: "0.875rem",
                  color: "white",
                  outline: "none",
                  backdropFilter: "blur(8px)",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "14px",
                  padding: "12px 22px",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 14px rgba(124, 58, 237, 0.4)",
                  transition: "transform 0.2s",
                }}
              >
                Join
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "20px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", margin: 0 }}>
          &copy; {new Date().getFullYear()} {COMPANY_INFO.name} ({COMPANY_INFO.parentCompany}). All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          <Link href="/privacy" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Privacy Policy
          </Link>
          <Link href="/terms" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Terms of Service
          </Link>
          <Link href="/contact" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
