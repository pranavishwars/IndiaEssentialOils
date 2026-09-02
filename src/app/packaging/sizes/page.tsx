import React from "react";
import Link from "next/link";
import { Footer } from "@/components/server/Footer";
import { 
  Package, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight,
  Droplets,
  Box,
  Truck,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Packaging Sizes | India Essential Oils",
  description: "Bulk packaging sizes for pure essential oils, oleoresins, and carrier oils: Aluminum bottles, HDPE drums, Steel GI export barrels, Glass dropper bottles, and PET containers.",
};

export default function PackagingSizesPage() {
  const containerFormats = [
    {
      title: "Aluminum Bottles & Canisters",
      subtitle: "1 Kg, 2 Kg, 5 Kg, 10 Kg, 25 Kg and more",
      image: "/images/packaging/aluminum_canisters.jpg",
      desc: "Anodized seamless aluminum canisters engineered specifically for express international freight and precious high-value essential oils, floral absolutes, and aroma chemicals. Features leak-proof plug caps and tamper-evident outer screw seals.",
      advantages: [
        "Lightweight construction reduces international air freight weight",
        "100% lightproof, airtight, and shatterproof for maximum transit safety",
        "Food-grade internal epoxy barrier lacquer prevents metal interaction",
      ],
      badge: "High-Value Distillates",
      color: "#7C3AED",
    },
    {
      title: "HDPE Drums & Barrels",
      subtitle: "5 Kg, 20 Kg, 25 Kg, 50 Kg, 200 Kg (Open Top & Closed Top)",
      image: "/images/packaging/hdpe_drums.jpg",
      desc: "Virgin food-grade High-Density Polyethylene (HDPE) industrial drums designed for standard essential oils, cold-pressed base oils, and floral hydrosols. Available in both narrow-mouth tight-head and wide-mouth open-top formats.",
      advantages: [
        "UN-certified for hazardous and non-hazardous chemical transport",
        "Impermeable to moisture and extreme international humidity variations",
        "Stackable interlocking rigid geometry optimized for ocean palletization",
      ],
      badge: "Carrier Oils & Hydrosols",
      color: "#059669",
    },
    {
      title: "Steel & GI Export Drums",
      subtitle: "20 Kg, 40 Kg, 200 Kg (Open Top with Narrow Mouth)",
      image: "/images/packaging/steel_drums.jpg",
      desc: "Heavy-gauge cold-rolled Galvanized Iron (GI) and epoxy-phenolic lined steel drums built for large-volume maritime consignments and industrial fragrance manufacturing. Fitted with 2-inch and 3/4-inch Bung closures with safety tri-sure seals.",
      advantages: [
        "Maximum structural rigidity for multi-tier ocean container stacking",
        "Epoxy-phenolic lining ensures zero interaction with volatile terpenes",
        "Full IATA/IMDG/DOT compliance for hazardous international ocean freight",
      ],
      badge: "Heavy Industrial Export",
      color: "#D97706",
    },
    {
      title: "Glass Dropper Bottles & Retail Sizes",
      subtitle: "5 ml, 10 ml, 15 ml, 20 ml, 30 ml, 50 ml, 100 ml, 200 ml, 500 ml",
      image: "/images/packaging/glass_droppers.jpg",
      desc: "USP Type III compliant amber, cobalt blue, emerald green, clear, and frosted matte finish glassware with calibrated pipettes, European dropper reducers, and tamper-evident caps for retail and private labeling.",
      advantages: [
        "Amber and cobalt glass provide superior UV protection against light degradation",
        "Tested compatibility with European drop-by-drop orifice reducers and glass pipettes",
        "Custom branded outer cartons and cushion box packing available",
      ],
      badge: "OEM & Private Label",
      color: "#EC4899",
    },
    {
      title: "PET Bottles & Cosmetic Containers",
      subtitle: "25 ml, 50 ml, 100 ml, 200 ml, 500 ml, 1000 ml",
      image: "/images/packaging/pet_bottles.jpg",
      desc: "High-grade shatterproof PET bottles with flip-top caps, fine mist atomizers, and lotion pumps designed for cosmetic carrier oils, massage blends, and floral hydrosols.",
      advantages: [
        "Ultra-clear lightweight shatterproof construction ideal for consumer retail",
        "Compatible with flip-tops, treatment pumps, and fine mist sprayers",
        "Recyclable food-grade polymer compliant with international cosmetic regulations",
      ],
      badge: "Cosmetics & Hydrosols",
      color: "#0284C7",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1140px", margin: "0 auto", width: "100%" }}>

        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#5B486E", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>Home</Link>
          <ChevronRight size={14} />
          <Link href="/packaging" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>Packaging</Link>
          <ChevronRight size={14} />
          <span style={{ color: "#180D26", fontWeight: 700 }}>Packaging Sizes</span>
        </div>

        {/* Hero Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div
            className="liquid-glass-pill"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 18px",
              fontSize: "0.8rem",
              fontWeight: 800,
              color: "#7C3AED",
              marginBottom: "16px",
              backgroundColor: "rgba(124, 58, 237, 0.1)",
              border: "1px solid rgba(124, 58, 237, 0.25)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            <Layers size={14} color="#7C3AED" /> Wholesale &amp; Retail Container Formats
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
              fontWeight: 700,
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#180D26",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Packaging Sizes &amp; Containers
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "800px", margin: "0 auto", lineHeight: 1.7 }}>
            UN-certified export containers from 5ml retail glass droppers to 200kg industrial steel drums.
          </p>
        </div>

        {/* Container Formats Grid with Reference Images */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))", gap: "32px", marginBottom: "48px" }}>
          {containerFormats.map((format, idx) => (
            <div
              key={idx}
              className="liquid-glass-elevated"
              style={{
                borderRadius: "28px",
                padding: "28px",
                backgroundColor: "rgba(255, 255, 255, 0.94)",
                border: "1.5px solid rgba(124, 58, 237, 0.18)",
                boxShadow: "0 12px 36px rgba(24, 13, 38, 0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* Visual Container Reference Image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "260px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    marginBottom: "20px",
                    border: "1px solid rgba(124, 58, 237, 0.16)",
                    background: "linear-gradient(135deg, #FBF8F3 0%, #EFE9E0 100%)",
                    boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.02)",
                  }}
                >
                  <img
                    src={format.image}
                    alt={format.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      backgroundColor: "rgba(24, 13, 38, 0.75)",
                      backdropFilter: "blur(8px)",
                      color: "#FFFFFF",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    {format.badge}
                  </div>
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <h2 style={{ fontSize: "1.45rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: "0 0 4px 0" }}>
                    {format.title}
                  </h2>
                  <span style={{ fontSize: "0.92rem", fontWeight: 700, color: format.color }}>
                    {format.subtitle}
                  </span>
                </div>

                <p style={{ fontSize: "0.95rem", color: "#3B284C", lineHeight: 1.7, marginBottom: "20px" }}>
                  {format.desc}
                </p>
              </div>

              <div style={{ backgroundColor: "#FCFAF6", borderRadius: "18px", padding: "18px", border: "1px solid rgba(124, 58, 237, 0.12)" }}>
                <span style={{ fontSize: "0.76rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "10px" }}>
                  Key Engineering Advantages
                </span>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {format.advantages.map((adv, aIdx) => (
                    <li key={aIdx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "#180D26", lineHeight: 1.45 }}>
                      <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Nitrogen Capping Section */}
        <div
          className="liquid-glass-elevated"
          style={{
            borderRadius: "28px",
            padding: "36px",
            backgroundColor: "rgba(255, 255, 255, 0.94)",
            border: "1.5px solid rgba(124, 58, 237, 0.22)",
            marginBottom: "48px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#059669", textTransform: "uppercase", backgroundColor: "rgba(5, 150, 105, 0.1)", padding: "4px 10px", borderRadius: "9999px" }}>
              Optional Service
            </span>
          </div>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "10px" }}>
            Nitrogen Capping for Oxidation-Sensitive Oils
          </h3>
          <p style={{ fontSize: "1rem", color: "#5B486E", lineHeight: 1.75, margin: 0 }}>
            On special request, we perform inert gas nitrogen purging before final closure sealing. This process displaces atmospheric oxygen from the container headspace, protecting delicate citrus monoterpenes and unrefined polyunsaturated carrier oils against oxidative rancidity throughout long-distance international shipment.
          </p>
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
              Shipment Policy &bull; 48h Dispatch
            </h3>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/packaging/shipment-policy"
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
              Shipment Policy <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
