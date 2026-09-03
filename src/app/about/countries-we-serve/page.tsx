import React from "react";
import Link from "next/link";
import { Footer } from "@/components/server/Footer";
import { GlobalPresenceMap } from "@/components/client/GlobalPresenceMap";
import { 
  Globe, 
  ArrowRight,
  ChevronRight
} from "lucide-react";

export const metadata = {
  title: "The Countries We Serve | India Essential Oils",
  description: "Explore our global delivery presence worldwide: USA, Canada, Europe, Middle East, Asia-Pacific, and Oceania.",
};

export default function CountriesWeServePage() {
  const regionalMarkets = [
    {
      region: "North America",
      countries: "United States, Canada",
      description: "Delivering pure essential oils, supercritical CO2 extracts, and cold-pressed carrier oils to leading American and Canadian cosmetic brands, aromatherapy practitioners, and pharmaceutical manufacturers.",
    },
    {
      region: "Europe & United Kingdom",
      countries: "United Kingdom, Germany, France, Netherlands, Latvia, Greece, Bulgaria, Italy, Spain",
      description: "Supplying bulk essential oils and botanical active ingredients complying with strict European pharmacopoeia, REACH, and IFRA analytical standards for fine perfumery and personal care.",
    },
    {
      region: "Middle East",
      countries: "United Arab Emirates, Egypt, Saudi Arabia",
      description: "Trusted supplier of floral absolutes (Jasmine Sambac, Rose Damascena), exotic distillates, and high-potency spice extracts for regional perfumery houses and personal care brands.",
    },
    {
      region: "Asia-Pacific & Oceania",
      countries: "Australia, Singapore, Thailand, South Korea, Taiwan, Philippines, Sri Lanka, New Zealand",
      description: "Supplying therapeutic-grade essential oils, cold-pressed base oils, and cosmetic extracts to formulators across East Asia, Southeast Asia, and Australasia.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1140px", margin: "0 auto", width: "100%" }}>

        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#5B486E", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>Home</Link>
          <ChevronRight size={14} />
          <Link href="/about" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>About</Link>
          <ChevronRight size={14} />
          <span style={{ color: "#180D26", fontWeight: 700 }}>The Countries We Serve</span>
        </div>

        {/* Interactive Global Presence Map Component */}
        <div style={{ marginBottom: "48px" }}>
          <GlobalPresenceMap />
        </div>

        {/* Detailed Regional Markets Section */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Global Geographic Footprint
            </span>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "6px" }}>
              Key Regional Markets We Deliver To
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {regionalMarkets.map((m, idx) => (
              <div
                key={idx}
                className="liquid-glass-elevated"
                style={{
                  borderRadius: "24px",
                  padding: "32px",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid rgba(124, 58, 237, 0.18)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#180D26", marginBottom: "6px" }}>
                    {m.region}
                  </h3>
                  <div style={{ fontSize: "0.88rem", color: "#7C3AED", fontWeight: 700, marginBottom: "14px" }}>
                    {m.countries}
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "#5B486E", lineHeight: 1.7, margin: 0 }}>
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Navigation Strip */}
        <div
          className="liquid-glass-elevated"
          style={{
            borderRadius: "24px",
            padding: "32px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid rgba(124, 58, 237, 0.22)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase" }}>
              Explore Next
            </span>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#180D26", margin: "4px 0 0 0" }}>
              How to Order &bull; Ordering Guidelines
            </h3>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/about/how-to-order"
              className="btn-vibrant-primary"
              style={{
                padding: "12px 24px",
                borderRadius: "9999px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.88rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              How to Order <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
