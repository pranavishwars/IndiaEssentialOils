import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export function Footer() {
  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Catalog", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Packaging", href: "/packaging" },
    { label: "Certifications", href: "/certifications" },
    { label: "Quality", href: "/quality" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact Us", href: "/contact" },
  ];

  const catalogLinks = [
    { name: "CO2 Oils (Extracts)", href: "/products/co2-oils", badge: "Trending ✨" },
    { name: "Essential Oils", href: "/products/essential-oils" },
    { name: "Spice Oils", href: "/products/spice-oils" },
    { name: "Carrier & Base Oils", href: "/products/carrier-oils" },
    { name: "Floral Absolutes", href: "/products/floral-absolutes" },
    { name: "Floral Waters (Hydrosols)", href: "/products/floral-waters" },
    { name: "Oleoresins", href: "/products/oleoresins" },
    { name: "Organic Oils", href: "/products/organic-oils" },
    { name: "Ayurvedic Oils", href: "/products/ayurvedic-oils" },
  ];

  // Only the exact elements present in the About dropdown menu
  const aboutLinks = [
    { label: "Profile", href: "/about/profile" },
    { label: "The Trust We've Built", href: "/about/trust-we-built" },
    { label: "Why Us", href: "/about/why-us" },
    { label: "Industries We Serve", href: "/about/industries-we-serve" },
    { label: "The Countries We Serve", href: "/about/countries-we-serve" },
    { label: "How to Order", href: "/about/how-to-order" },
    { label: "Founders Note", href: "/about/founders-note" },
  ];

  // Only the exact elements present in the Packaging dropdown menu
  const packagingLinks = [
    { label: "Packaging Process", href: "/packaging/process" },
    { label: "Packaging Sizes", href: "/packaging/sizes" },
    { label: "Shipment Policy", href: "/packaging/shipment-policy" },
  ];

  return (
    <footer style={{ margin: "0 12px 12px", borderRadius: "2.5rem", overflow: "hidden", backgroundColor: "#180D26", boxShadow: "0 -4px 30px rgba(0, 0, 0, 0.08)" }}>
      <div style={{ padding: "64px 36px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "36px" }}>

          {/* Brand Column */}
          <div style={{ maxWidth: "320px" }}>
            <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <img
                src="/images/logo.png"
                alt="India Essential Oils Logo"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  backgroundColor: "#FFFFFF",
                  padding: "2px",
                  border: "1.5px solid rgba(196, 181, 253, 0.4)",
                  flexShrink: 0,
                }}
              />
              <h2 style={{ fontSize: "var(--font-size-h2)", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#C4B5FD", margin: 0 }}>
                {COMPANY_INFO.name}
              </h2>
            </Link>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "20px" }}>
              A Division of Mother Herbs Pvt. Ltd. Premier WHO-GMP &amp; ISO 22000 certified steam distillation distillery and bulk wholesale exporter of pure botanical oils.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              <a
                href={`mailto:${COMPANY_INFO.contact.salesEmail}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#C4B5FD",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <Mail size={16} color="#A855F7" />
                <span>{COMPANY_INFO.contact.salesEmail}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                }}
              >
                <Phone size={16} color="#A855F7" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </a>

              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.65)", fontSize: "0.85rem" }}>
                <MapPin size={16} color="#A855F7" />
                <span>New Delhi, India &bull; Global Bulk Export</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
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
                <ShieldCheck size={16} /> TrustSeal Verified
              </a>

              <Link
                href="/contact"
                style={{
                  height: "38px",
                  padding: "0 16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(124, 58, 237, 0.22)",
                  border: "1px solid rgba(124, 58, 237, 0.4)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#FFFFFF",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                <span>Contact Us</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 style={{ fontSize: "0.75rem", fontWeight: 800, color: "#A855F7", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "20px" }}>
              Navigation
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalog Column */}
          <div>
            <h3 style={{ fontSize: "0.75rem", fontWeight: 800, color: "#A855F7", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "20px" }}>
              Catalog
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
              {catalogLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "color 0.2s",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 800,
                          padding: "3px 7px",
                          borderRadius: "9999px",
                          background: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
                          color: "#FFFFFF",
                          whiteSpace: "nowrap",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          lineHeight: 1,
                          flexShrink: 0,
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: "4px" }}>
                <Link
                  href="/products"
                  style={{ color: "#C4B5FD", textDecoration: "none", fontSize: "0.85rem", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "4px" }}
                >
                  View Complete Catalog <ArrowRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column (Strictly matching dropdown menu) */}
          <div>
            <h3 style={{ fontSize: "0.75rem", fontWeight: 800, color: "#A855F7", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "20px" }}>
              About
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
              {aboutLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packaging Column (Strictly matching dropdown menu) */}
          <div>
            <h3 style={{ fontSize: "0.75rem", fontWeight: 800, color: "#A855F7", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "20px" }}>
              Packaging
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
              {packagingLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
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
          &copy; {new Date().getFullYear()} {COMPANY_INFO.name} ({COMPANY_INFO.parentCompany}). All rights reserved. &bull; Contact: <a href={`mailto:${COMPANY_INFO.contact.salesEmail}`} style={{ color: "#C4B5FD", textDecoration: "none" }}>{COMPANY_INFO.contact.salesEmail}</a>
        </p>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <Link href="/privacy" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Privacy Policy
          </Link>
          <Link href="/terms" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Terms of Service
          </Link>
          <Link href="/faqs" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            FAQs
          </Link>
          <Link href="/contact" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
