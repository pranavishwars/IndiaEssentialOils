import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Footer } from "@/components/server/Footer";
import { DownloadCatalogButton } from "@/components/client/DownloadCatalogButton";
import {
  Boxes,
  Wind,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Package,
  Layers,
  Sparkles,
  Truck,
  Droplets,
  Tag,
  Clock,
  HelpCircle,
  Gift,
  Feather,
  BoxSelect,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Packaging & OEM Private Label Solutions | India Essential Oils",
  description:
    "Explore our climate-controlled packaging suites: amber, clear, and matte finish glass bottles (10ml–500ml), European droppers, glass pipettes, sealed caps, aluminum canisters (1kg–25kg), HDPE/Steel drums (20kg–200kg), outer cushion box packing, and 48-hour prompt dispatch.",
  keywords: [
    "essential oil packaging",
    "private label essential oils",
    "amber glass dropper bottles bulk",
    "clear matte glass bottles 100ml 200ml",
    "European dropper cap essential oil",
    "cushion box packaging essential oils",
    "aluminum bottles 1kg 5kg 10kg",
    "HDPE drums 200kg essential oils",
    "nitrogen capping essential oils",
    "OEM essential oil bottling India",
  ],
  openGraph: {
    title: "Precision Export Packaging & OEM Bottling | India Essential Oils",
    description:
      "Climate-controlled packaging suites, private labeling with European droppers, cushion box packing, aluminum canisters, and UN-certified 200kg drums with 48h dispatch.",
    images: ["/essential_oil_bottle.jpg"],
  },
};

export default function PackagingPage() {
  const stats = [
    { value: "10ml–500ml", label: "Amber, Clear & Matte Glassware" },
    { value: "1kg–25kg", label: "Aluminum Bottles & Canisters" },
    { value: "20kg–200kg", label: "HDPE & Steel GI Export Drums" },
    { value: "48 Hours", label: "Standard Prompt Order Dispatch" },
  ];

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
      icon: <Droplets size={20} color="#7C3AED" />,
    },
    {
      name: "Calibrated Glass Droppers",
      desc: "Graduated glass pipettes with silicone or rubber bulbs for accurate dosage in serum and therapy use.",
      icon: <Layers size={20} color="#059669" />,
    },
    {
      name: "Sealed Tamper-Evident Caps",
      desc: "Threaded leak-proof closures with breakaway security rings ensuring unadulterated seal integrity.",
      icon: <ShieldCheck size={20} color="#D97706" />,
    },
    {
      name: "Flip Top Caps",
      desc: "Convenient one-handed opening dispensing caps ideal for carrier oils, massage blends, and floral waters.",
      icon: <Sparkles size={20} color="#0284C7" />,
    },
  ];

  const bulkCategories = [
    {
      title: "Aluminum Bottles & Canisters",
      sizes: "1 Kg, 2 Kg, 5 Kg, 10 Kg, 25 Kg and more",
      desc: "Ideal for high-value floral absolutes, rare essential oils, and supercritical CO₂ extracts. Puncture-resistant with food-grade epoxy barrier linings.",
      icon: <Layers size={24} color="#EC4899" />,
      features: [
        "100% light-proof & vapor-tight seal",
        "Threaded security cap with internal sealing plug",
        "Custom colors, shapes, and finishes available",
      ],
    },
    {
      title: "HDPE Drums & Barrels",
      sizes: "5 kg, 20 Kg, 25 Kg, 50 kg, 200 kg (Open Top & Closed Top)",
      desc: "Virgin food-grade high-density polyethylene drums and 200kg barrels engineered for safe domestic transit and international sea freight.",
      icon: <Package size={24} color="#059669" />,
      features: [
        "Induction heat-sealed foil membrane option",
        "Stackable interlocking bases with carry handles",
        "200kg open top and 200kg closed top barrels",
      ],
    },
    {
      title: "STEEL & GI Drums",
      sizes: "20 Kg, 40 Kg, 200 Kg (Open Top with Narrow Mouth)",
      desc: "Heavy-duty cold-rolled steel and galvanized iron drums with internal epoxy-phenolic coatings for large-volume industrial chemical compatibility.",
      icon: <Truck size={24} color="#D97706" />,
      features: [
        "UN-certified heavy gauge steel construction",
        "Dual 2\" and 3/4\" bung closures with nitrile gaskets",
        "Narrow mouth and full removable open top options",
      ],
    },
    {
      title: "Plastic PET Bottles (Retail)",
      sizes: "10 ml, 20 ml, 50 ml, 1 kg, 2 kg and more",
      desc: "Versatile lightweight plastic PET bottles in a wide selection of custom colors for cosmetics, bath products, and floral waters.",
      icon: <BoxSelect size={24} color="#7C3AED" />,
      features: [
        "Colors: Natural, White, Clear, Blue, Amber, Green, Black, Purple",
        "Variety of shapes, neck sizes, and wall thicknesses",
        "Lightweight and shatterproof for express air shipping",
      ],
    },
  ];

  const faqs = [
    {
      q: "What glass bottle sizes and finishes do you supply for private labeling?",
      a: "We offer 5 ml, 10 ml, 20 ml, 50 ml, 100 ml, 200 ml, 500 ml, 1 kg, and 2 kg glass bottles. Available finishes include Amber Glass (maximum UV protection), Clear Glass (high optical clarity), Matte Finish Glass (frosted luxury velvet touch), as well as Cobalt Blue and Emerald Green glass.",
    },
    {
      q: "What cap and dropper mechanisms are available?",
      a: "Our closures include European dropper type droppers (controlled drop-by-drop orifice reducers), calibrated glass droppers (pipettes), tamper-evident sealed caps with breakaway rings, flip top caps, fine mist atomizers, treatment pumps, and stainless steel rollerballs.",
    },
    {
      q: "Do you offer Outer Box and Cushion Box packing?",
      a: "Yes! We specialize in customized outer box packaging and cushion box packing. Our cushion box packing utilizes molded shock-absorbing internal padding to protect bottles from vibrations and compression during domestic and international transit. We also design bespoke gift packaging and presentation boxes on request.",
    },
    {
      q: "What are your bulk packaging sizes for essential oils, oleoresins, and floral waters?",
      a: "Our bulk range includes Aluminum Bottles (1kg, 2kg, 5kg, 10kg, 25kg+), HDPE Drums (5kg, 20kg, 25kg, 50kg, 200kg+), HDPE Barrels (200kg open top & 200kg closed top), and Steel & GI Drums (20kg, 40kg, 200kg open top with narrow mouth).",
    },
    {
      q: "Is Nitrogen capping available for oxidation protection?",
      a: "Yes. We offer Nitrogen capping for specific oils on special requests. Our automated cleanroom capping line purges atmospheric oxygen from the container headspace with ultra-pure nitrogen gas before sealing, safeguarding sensitive botanical oils against oxidative rancidity.",
    },
    {
      q: "What is your standard order dispatch and delivery turnaround?",
      a: "Our specialty is promptness in service. We maintain substantial bulk stocks of regular products in our climate-controlled warehouse, which enables us to despatch orders within 48 hours of payment unless custom manufacturing or urgent priority is requested.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1240px", margin: "0 auto", width: "100%" }}>

        {/* Hero Section */}
        <section style={{ textAlign: "center", marginBottom: "56px" }}>
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
            }}
          >
            <Boxes size={14} color="#7C3AED" /> PACKAGING &amp; PRIVATE LABELING
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
              fontWeight: 700,
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#180D26",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}
          >
            Climate-Controlled Packaging Suites<br />&amp; Turnkey Private Labeling
          </h1>

          <p style={{ fontSize: "1.12rem", color: "#5B486E", maxWidth: "860px", margin: "0 auto 28px", lineHeight: 1.75 }}>
            India Essential Oils is compliant with climate-controlled packaging suites where oils are packaged or repackaged under strict quality control. Our location is equipped with state-of-the-art packing technologies to keep contents clean, fresh, and safe with specialized protection against vibrations, temperature variations, and compression during transportation across India and overseas.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", marginBottom: "36px" }}>
            <DownloadCatalogButton variant="primary" label="Download Botanical Catalog (PDF/Spec)" />
            <Link
              href="/request-quote"
              className="liquid-glass-pill"
              style={{
                padding: "14px 28px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                color: "#7C3AED",
                backgroundColor: "rgba(124, 58, 237, 0.1)",
                border: "1px solid rgba(124, 58, 237, 0.25)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>Request Packaging Quote</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Stats Bar */}
          <div
            className="liquid-glass-elevated"
            style={{
              borderRadius: "28px",
              padding: "24px 32px",
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
              boxShadow: "0 12px 36px rgba(24, 13, 38, 0.05)",
            }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#7C3AED", lineHeight: 1.2 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#5B486E", fontWeight: 600, marginTop: "4px" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Highlighted Section: Customized Packaging & Private Labeling */}
        <section style={{ marginBottom: "64px" }}>
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
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                OEM Contract Manufacturing
              </span>
              <h2 style={{ fontSize: "2.1rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "6px" }}>
                Customized Packaging &amp; Private Labeling
              </h2>
              <p style={{ color: "#5B486E", fontSize: "1rem", lineHeight: 1.7, marginTop: "12px" }}>
                India Essential Oils specializes in customized packaging, commonly called private labeling of oils with dropper facilities. We can pack particular materials in customized bottles, barrels, drums, and containers with or without custom printing according to client specifications.
              </p>
            </div>

            {/* Glass Finishes & Sizes Grid */}
            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#180D26", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Droplets size={22} color="#7C3AED" /> Retail Glass Bottles — Sizes: 10 ml, 20 ml, 50 ml, 100 ml, 200 ml, 500 ml (also 5 ml, 1 kg, 2 kg)
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
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
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px", minHeight: "52px", marginBottom: "12px" }}>
                      <span style={{ fontWeight: 800, fontSize: "1.05rem", color: "#180D26", lineHeight: 1.3 }}>{gf.name}</span>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          padding: "4px 10px",
                          borderRadius: "9999px",
                          backgroundColor: "rgba(124, 58, 237, 0.12)",
                          border: "1px solid rgba(124, 58, 237, 0.22)",
                          color: "#7C3AED",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          lineHeight: 1,
                        }}
                      >
                        {gf.badge}
                      </span>
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
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
                {capOptions.map((cap, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "22px",
                      borderRadius: "18px",
                      backgroundColor: "#FCFAF6",
                      border: "1px solid rgba(124, 58, 237, 0.14)",
                      display: "flex",
                      gap: "14px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ width: "42px", height: "42px", borderRadius: "12px", backgroundColor: "rgba(124, 58, 237, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {cap.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: "0.96rem", color: "#180D26", marginBottom: "4px", minHeight: "44px", lineHeight: 1.3 }}>
                        {cap.name}
                      </div>
                      <p style={{ fontSize: "0.85rem", color: "#5B486E", lineHeight: 1.55, margin: 0 }}>
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outer Box & Cushion Box Packing — SEPARATELY HIGHLIGHTED */}
            <div
              style={{
                borderRadius: "24px",
                padding: "32px",
                background: "linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(236, 72, 153, 0.08) 100%)",
                border: "1px solid rgba(124, 58, 237, 0.28)",
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
                  boxShadow: "0 6px 20px rgba(124, 58, 237, 0.4)",
                }}
              >
                <Gift size={30} />
              </div>
              <div style={{ flex: 1, minWidth: "280px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "8px" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#180D26", margin: 0 }}>
                    Outer Box &amp; Cushion Box Packing (Gift Packaging Available)
                  </h3>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "#059669",
                      color: "#FFFFFF",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      lineHeight: 1,
                    }}
                  >
                    Break-Proof Protection
                  </span>
                </div>
                <p style={{ fontSize: "0.92rem", color: "#4B5563", lineHeight: 1.65, margin: 0 }}>
                  <strong>Outer Box &amp; Cushion Box Packing:</strong> We provide secondary presentation boxes, rigid protective outer cartons, and specialized cushion box packing engineered to absorb mechanical vibrations and impact forces during long-distance domestic and international transit. Custom gift packaging and presentation kits are also designed upon request.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Complete Packing Range for Bulk Oils, Oleoresins & Floral Water */}
        <section style={{ marginBottom: "64px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              Commercial &amp; Wholesale Formats
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "6px" }}>
              Packing Range for Oils, Oleoresins &amp; Floral Waters
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "28px" }}>
            {bulkCategories.map((item, idx) => (
              <div
                key={idx}
                className="liquid-glass"
                style={{
                  borderRadius: "28px",
                  padding: "36px",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  border: "1px solid rgba(124, 58, 237, 0.18)",
                  boxShadow: "0 8px 32px rgba(24, 13, 38, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                    <div style={{ width: "52px", height: "52px", borderRadius: "14px", backgroundColor: "rgba(124, 58, 237, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: 0 }}>
                        {item.title}
                      </h3>
                      <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#7C3AED" }}>
                        {item.sizes}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: "#5B486E", lineHeight: 1.65, fontSize: "0.92rem", marginBottom: "20px" }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid rgba(124, 58, 237, 0.12)", paddingTop: "16px" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.86rem", color: "#2E1A47", fontWeight: 500 }}>
                        <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Nitrogen Capping Highlight Callout */}
          <div
            className="liquid-glass"
            style={{
              marginTop: "28px",
              borderRadius: "20px",
              padding: "20px 28px",
              backgroundColor: "rgba(2, 132, 199, 0.08)",
              border: "1px solid rgba(2, 132, 199, 0.25)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Wind size={26} color="#0284C7" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ color: "#0369A1", fontSize: "0.95rem" }}>Specialized Nitrogen Capping:</strong>
              <span style={{ color: "#334155", fontSize: "0.9rem", marginLeft: "6px" }}>
                We offer ultra-pure Nitrogen capping for specific oils on special requests to purge atmospheric oxygen from container headspaces and prevent oxidation during overseas shipping.
              </span>
            </div>
          </div>
        </section>

        {/* Shipping, Logistics & 48h Prompt Delivery Period */}
        <section style={{ marginBottom: "64px" }}>
          <div
            className="liquid-glass-elevated"
            style={{
              borderRadius: "32px",
              padding: "44px",
              backgroundColor: "rgba(255, 255, 255, 0.88)",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              boxShadow: "0 16px 48px rgba(24, 13, 38, 0.06)",
            }}
          >
            <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 36px" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                Global Fulfillment &amp; Supply Security
              </span>
              <h2 style={{ fontSize: "2.1rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "6px" }}>
                Economical Shipping &amp; 48-Hour Dispatch
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
              {/* Shipping Service Pillars */}
              <div style={{ backgroundColor: "#FCFAF6", borderRadius: "24px", padding: "32px", border: "1px solid rgba(124, 58, 237, 0.15)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                  <Truck size={24} color="#7C3AED" />
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#180D26", margin: 0 }}>
                    Global Shipping &amp; Post-Shipment Support
                  </h3>
                </div>
                <p style={{ color: "#5B486E", fontSize: "0.92rem", lineHeight: 1.7, margin: "0 0 14px 0" }}>
                  India Essential Oils considers shipping as one of the most vital functions (accounting for 5–20% of total business cost). Timely and economical shipment movement is as important as quality.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.86rem", color: "#180D26" }}>
                    <CheckCircle2 size={16} color="#059669" /> Best shipping rates for all major destinations worldwide
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.86rem", color: "#180D26" }}>
                    <CheckCircle2 size={16} color="#059669" /> Real-time consignment movement tracking &amp; status updates
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.86rem", color: "#180D26" }}>
                    <CheckCircle2 size={16} color="#059669" /> Country-specific regulatory documentation &amp; phytosanitary clearance
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.86rem", color: "#180D26" }}>
                    <CheckCircle2 size={16} color="#059669" /> Direct tie-ups with major shipping lines &amp; reputed clearing agents
                  </li>
                </ul>
              </div>

              {/* Prompt Delivery Period */}
              <div style={{ backgroundColor: "#FCFAF6", borderRadius: "24px", padding: "32px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                  <Clock size={24} color="#059669" />
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#180D26", margin: 0 }}>
                    Prompt Delivery Period — Dispatch in 48 Hours
                  </h3>
                </div>
                <p style={{ color: "#5B486E", fontSize: "0.92rem", lineHeight: 1.7, margin: "0 0 14px 0" }}>
                  Our speciality is our promptness in service. We always have most botanical oils available in stock in bulk quantities.
                </p>
                <div style={{ padding: "16px", borderRadius: "14px", backgroundColor: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.25)", marginBottom: "14px" }}>
                  <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#065F46" }}>
                    ⚡ 48-Hour Standard Order Dispatch
                  </span>
                  <p style={{ fontSize: "0.84rem", color: "#047857", margin: "4px 0 0 0", lineHeight: 1.5 }}>
                    We usually despatch all orders within 48 hours of payment unless custom packaging or urgent rush handling is requested.
                  </p>
                </div>
                <p style={{ fontSize: "0.86rem", color: "#5B486E", margin: 0, lineHeight: 1.6 }}>
                  Substantial bulk warehouse inventory guarantees ample continuous supply for contract manufacturing partners worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Full Catalog Banner */}
        <DownloadCatalogButton variant="banner" label="Download Full Botanical Catalog" />

        {/* Frequently Asked Questions (FAQ) Section */}
        <section style={{ marginBottom: "64px" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              Frequently Asked Questions
            </span>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "6px" }}>
              Packaging &amp; Private Label FAQ
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px", margin: "0 auto" }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="liquid-glass"
                style={{
                  borderRadius: "20px",
                  padding: "24px 28px",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  border: "1px solid rgba(124, 58, 237, 0.16)",
                }}
              >
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#180D26", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <HelpCircle size={18} color="#7C3AED" style={{ flexShrink: 0 }} />
                  {faq.q}
                </h3>
                <p style={{ color: "#5B486E", fontSize: "0.92rem", lineHeight: 1.65, margin: "0 0 0 28px" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Commercial Packaging Quotation CTA */}
        <section
          className="liquid-glass-elevated"
          style={{
            borderRadius: "32px",
            padding: "48px",
            background: "linear-gradient(135deg, #2A1744 0%, #180D26 100%)",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "32px",
            boxShadow: "0 20px 60px rgba(24, 13, 38, 0.35)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <div style={{ maxWidth: "640px" }}>
            <span
              style={{
                display: "inline-block",
                padding: "6px 14px",
                borderRadius: "9999px",
                backgroundColor: "rgba(139, 92, 246, 0.25)",
                border: "1px solid rgba(139, 92, 246, 0.4)",
                color: "#C4B5FD",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Turnkey OEM &amp; Private Label
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "white", lineHeight: 1.2, marginBottom: "12px" }}>
              Request Custom Packaging &amp; Volume Pricing
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.82)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
              Connect with our packaging engineers for custom dropper bottle sampling, cushion box outer packing, and direct factory drum pricing.
            </p>
          </div>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link
              href="/request-quote"
              className="btn-vibrant-primary"
              style={{
                padding: "16px 32px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 8px 24px rgba(124, 58, 237, 0.5)",
              }}
            >
              Request Custom Quote <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              style={{
                padding: "16px 28px",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "background 0.2s",
              }}
            >
              Contact Packaging Desk
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
