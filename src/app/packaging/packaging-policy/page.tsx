import React from "react";
import Link from "next/link";
import { Footer } from "@/components/server/Footer";
import { 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  Droplets, 
  Sparkles,
  Gift
} from "lucide-react";

export const metadata = {
  title: "Packaging Policy | India Essential Oils",
  description: "Comprehensive packaging policy: Custom bottling, private labeling, amber/clear glassware, precision droppers, outer cushion packing, and export container sizing.",
};

export default function PackagingPolicyPage() {
  const glassFinishes = [
    {
      name: "Amber Glass",
      desc: "Maximum UV-filtering protection for photosensitive monoterpenes and aromatic volatiles.",
      badge: "Industry Standard",
    },
    {
      name: "Clear Glass",
      desc: "High-clarity optical glass showcasing natural botanical hues and cosmetic clarity.",
      badge: "Cosmetic Grade",
    },
    {
      name: "Matte Finish Glass",
      desc: "Luxury frosted velvet touch finish for premium retail and designer aromatherapy branding.",
      badge: "Luxury Retail",
    },
    {
      name: "Blue & Green Glass",
      desc: "Cobalt Blue and Emerald Green glassware offering tailored aesthetic shelf appeal with UV shielding.",
      badge: "Aesthetic Line",
    },
  ];

  const capOptions = [
    {
      name: "European Dropper Type Dropper",
      desc: "Precision orifice reducer insert allowing controlled drop-by-drop dispensing with tamper-evident seal ring.",
    },
    {
      name: "Calibrated Glass Droppers",
      desc: "Graduated glass pipettes with silicone or rubber bulbs for accurate dosage in serum and therapy use.",
    },
    {
      name: "Sealed Tamper-Evident Caps",
      desc: "Threaded leak-proof closures with breakaway security rings ensuring unadulterated seal integrity.",
    },
    {
      name: "Flip Top Caps",
      desc: "Convenient one-handed opening dispensing caps ideal for carrier oils, massage blends, and floral waters.",
    },
  ];

  const containerFormats = [
    {
      title: "Aluminum Bottles & Canisters",
      subtitle: "1 Kg, 2 Kg, 5 Kg, 10 Kg, 25 Kg and more",
      image: "/images/packaging/aluminum_canisters.jpg",
      desc: "Anodized seamless aluminum canisters engineered specifically for express international freight and precious high-value essential oils, floral absolutes, and aroma chemicals. Features leak-proof plug caps and tamper-evident outer screw seals.",
      badge: "High-Value Distillates",
      color: "#7C3AED",
    },
    {
      title: "HDPE Drums & Barrels",
      subtitle: "5 Kg, 20 Kg, 25 Kg, 50 Kg, 200 Kg (Open Top & Closed Top)",
      image: "/images/packaging/hdpe_drums.jpg",
      desc: "Virgin food-grade High-Density Polyethylene (HDPE) industrial drums designed for standard essential oils, cold-pressed base oils, and floral hydrosols. Available in both narrow-mouth tight-head and wide-mouth open-top formats.",
      badge: "Carrier Oils & Hydrosols",
      color: "#7C3AED",
    },
    {
      title: "Steel & GI Export Drums",
      subtitle: "20 Kg, 40 Kg, 200 Kg (Open Top with Narrow Mouth)",
      image: "/images/packaging/steel_drums.jpg",
      desc: "Heavy-gauge cold-rolled Galvanized Iron (GI) and epoxy-phenolic lined steel drums built for large-volume maritime consignments and industrial fragrance manufacturing. Fitted with 2-inch and 3/4-inch Bung closures with safety tri-sure seals.",
      badge: "Heavy Industrial Export",
      color: "#7C3AED",
    },
    {
      title: "Glass Dropper Bottles & Retail Sizes",
      subtitle: "10 ml, 20 ml, 50 ml, 100 ml, 200 ml, 500 ml",
      image: "/images/packaging/cobalt_droppers.jpg",
      desc: "USP Type III compliant amber, cobalt blue, emerald green, clear, and frosted matte finish glassware with calibrated pipettes, European dropper reducers, and tamper-evident caps for retail and private labeling.",
      badge: "OEM & Private Label",
      color: "#7C3AED",
    },
    {
      title: "PET Bottles & Cosmetic Containers",
      subtitle: "25 ml, 50 ml, 100 ml, 200 ml, 500 ml, 1000 ml",
      image: "/images/packaging/pet_bottles.jpg",
      desc: "High-grade shatterproof PET bottles with flip-top caps, fine mist atomizers, and lotion pumps designed for cosmetic carrier oils, massage blends, and floral hydrosols.",
      badge: "Cosmetics & Hydrosols",
      color: "#7C3AED",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <style>{`
        .packaging-four-col-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .packaging-four-col-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .packaging-four-col-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1240px", margin: "0 auto", width: "100%" }}>

        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#5B486E", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>Home</Link>
          <ChevronRight size={14} />
          <Link href="/packaging" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>Packaging</Link>
          <ChevronRight size={14} />
          <span style={{ color: "#180D26", fontWeight: 700 }}>Packaging Policy</span>
        </div>

        {/* Hero Header */}
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
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
            Packaging Policy
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "800px", margin: "0 auto", lineHeight: 1.7 }}>
            Complete packaging guidelines: Custom bottling and private labeling process, specialized closures, outer cushion packing, and export container sizes.
          </p>
        </div>

        {/* SECTION 1: PACKAGING PROCESS (First - exact visual layout from packaging landing page) */}
        <section id="packaging-process" style={{ scrollMarginTop: "120px", marginBottom: "64px" }}>
          <div
            className="liquid-glass-elevated"
            style={{
              borderRadius: "32px",
              padding: "44px",
              backgroundColor: "rgba(255, 255, 255, 0.88)",
              border: "1px solid rgba(124, 58, 237, 0.22)",
              boxShadow: "0 16px 48px rgba(24, 13, 38, 0.06)",
            }}
          >
            <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 36px" }}>
              <h2 style={{ fontSize: "var(--font-size-h1)", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "6px" }}>
                Packaging Process: Custom Bottling &amp; Private Labeling
              </h2>
              <p style={{ color: "#5B486E", fontSize: "1rem", lineHeight: 1.7, marginTop: "12px" }}>
                India Essential Oils specializes in customized packaging, commonly called private labeling of oils with dropper facilities. We can pack particular materials in customized bottles, barrels, drums, and containers with or without custom printing according to client specifications.
              </p>
            </div>

            {/* Visual Glass Dropper Showcase Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "280px",
                borderRadius: "22px",
                overflow: "hidden",
                marginBottom: "36px",
                border: "1px solid rgba(124, 58, 237, 0.2)",
                boxShadow: "0 8px 24px rgba(24, 13, 38, 0.06)",
              }}
            >
              <img
                src="/images/packaging/glass_droppers_showcase.jpg"
                alt="Luxury Amber, Matte & Clear Glass Dropper Bottles with Pipettes and Outer Box Packaging"
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
                  bottom: "0",
                  left: "0",
                  right: "0",
                  padding: "16px 24px",
                  background: "linear-gradient(to top, rgba(24, 13, 38, 0.85) 0%, rgba(24, 13, 38, 0) 100%)",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif" }}>
                    Private Label Retail Glass Droppers &amp; Cushion Boxes
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.85)", marginTop: "2px" }}>
                    European droppers, calibrated glass pipettes, amber/frosted glassware, and custom printed outer cartons.
                  </div>
                </div>
              </div>
            </div>

            {/* Glass Finishes & Sizes Grid */}
            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#180D26", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Droplets size={22} color="#7C3AED" /> Retail Glass Bottles — Sizes: 10 ml, 20 ml, 50 ml, 100 ml, 200 ml, 500 ml (also 5 ml, 1 kg, 2 kg)
              </h3>
              <div className="packaging-four-col-grid">
                {glassFinishes.map((gf, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "24px",
                      borderRadius: "20px",
                      backgroundColor: "#FCFAF6",
                      border: "1px solid rgba(124, 58, 237, 0.16)",
                    }}
                  >
                    <div style={{ marginBottom: "10px" }}>
                      <h4 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#180D26", lineHeight: 1.3, margin: 0 }}>
                        {gf.name}
                      </h4>
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "#5B486E", lineHeight: 1.6, margin: 0 }}>
                      {gf.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cap & Closure Options */}
            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#180D26", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Sparkles size={22} color="#7C3AED" /> Precision Cap &amp; Dropper Mechanisms
              </h3>
              <div className="packaging-four-col-grid">
                {capOptions.map((cap, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "24px",
                      borderRadius: "20px",
                      backgroundColor: "#FCFAF6",
                      border: "1px solid rgba(124, 58, 237, 0.16)",
                    }}
                  >
                    <div style={{ marginBottom: "10px" }}>
                      <h4 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#180D26", lineHeight: 1.3, margin: 0 }}>
                        {cap.name}
                      </h4>
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "#5B486E", lineHeight: 1.6, margin: 0 }}>
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outer Box & Cushion Box Packing — SEPARATELY HIGHLIGHTED */}
            <div
              style={{
                borderRadius: "24px",
                padding: "32px",
                backgroundColor: "rgba(124, 58, 237, 0.08)",
                border: "1px solid rgba(124, 58, 237, 0.22)",
                display: "flex",
                gap: "24px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "18px",
                  backgroundColor: "#7C3AED",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 14px rgba(24, 13, 38, 0.12)",
                }}
              >
                <Gift size={30} />
              </div>
              <div style={{ flex: 1, minWidth: "280px" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#180D26", margin: "0 0 8px 0" }}>
                  Outer Box &amp; Cushion Box Packing (Gift Packaging Available)
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#4B5563", lineHeight: 1.65, margin: 0 }}>
                  <strong>Outer Box &amp; Cushion Box Packing:</strong> We provide secondary presentation boxes, rigid protective outer cartons, and specialized cushion box packing engineered to absorb mechanical vibrations and impact forces during long-distance domestic and international transit. Custom gift packaging and presentation kits are also designed upon request.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: PACKAGING SIZES (Second) */}
        <section id="packaging-sizes" style={{ scrollMarginTop: "120px", marginBottom: "64px" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <h2 style={{ fontSize: "var(--font-size-h1)", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "6px" }}>
              Packaging Sizes: Oils, Oleoresins &amp; Floral Waters
            </h2>
            <p style={{ color: "#5B486E", fontSize: "1rem", lineHeight: 1.7, marginTop: "12px", maxWidth: "780px", margin: "12px auto 0" }}>
              Standard UN-certified international export packaging formats engineered for maximum transit safety and volatile compound integrity.
            </p>
          </div>

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
                    <h3 style={{ fontSize: "1.45rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: "0 0 4px 0" }}>
                      {format.title}
                    </h3>
                    <span style={{ fontSize: "0.92rem", fontWeight: 700, color: format.color }}>
                      {format.subtitle}
                    </span>
                  </div>

                  <p style={{ fontSize: "0.95rem", color: "#3B284C", lineHeight: 1.7, margin: 0 }}>
                    {format.desc}
                  </p>
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
            }}
          >
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "10px" }}>
              Nitrogen Capping for Oxidation-Sensitive Oils
            </h3>
            <p style={{ fontSize: "1rem", color: "#5B486E", lineHeight: 1.75, margin: 0 }}>
              On special request, we perform inert gas nitrogen purging before final closure sealing. This process displaces atmospheric oxygen from the container headspace, protecting delicate citrus monoterpenes and unrefined polyunsaturated carrier oils against oxidative rancidity throughout long-distance international shipment.
            </p>
          </div>
        </section>

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
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#180D26", margin: 0 }}>
              Shipment Policy &bull; 48h Order Dispatch
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
