import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Footer } from "@/components/server/Footer";
import {
  Flame,
  Droplets,
  TreePine,
  Wind,
  Boxes,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing & Distillation Infrastructure | India Essential Oils",
  description:
    "Explore our world-class botanical extraction infrastructure: multi-boiler steam distillation stills, supercritical CO2 SFE extraction autoclaves, mechanical cold-pressing units, 1,000 MT climate-controlled storage, and in-house GC-MS testing laboratory.",
  keywords: [
    "essential oil distillation plant",
    "steam distillation facility India",
    "supercritical CO2 extraction facility",
    "cold pressed carrier oil unit",
    "botanical extraction infrastructure",
    "essential oil manufacturer Delhi",
    "bulk essential oil exporter India",
  ],
  openGraph: {
    title: "World-Class Distillation & Extraction Infrastructure | India Essential Oils",
    description:
      "Modern 316-grade stainless steel steam distillation columns, supercritical CO2 extractors, expellers, 1,000 MT warehousing, and ISO 9001:2015 & GMP certified processing plants.",
    images: ["/infrastructure_hero.jpg"],
  },
};

export default function InfrastructurePage() {
  const stats = [
    { value: "5,000+", unit: "Hectares", label: "Wild Flora Foraging Range" },
    { value: "100+", unit: "Acres", label: "Contract Cultivation" },
    { value: "1,000", unit: "MT", label: "Climate-Controlled Storage" },
    { value: "316", unit: "SS Grade", label: "Sanitary Distillation Stills" },
  ];

  const facilities = [
    {
      title: "1. Multi-Boiler Steam Distillation Bay",
      subtitle: "Low-Pressure Hydro-Thermal Distillation",
      desc: "Our primary processing bays feature computer-regulated low-pressure steam injection systems linked to 316-grade stainless steel stills. Low vapor velocity prevents thermal degradation of volatile monoterpenes and sesquiterpenes, yielding uncharred, aromatic profiles.",
      image: "/images/infrastructure/steam_distillation.jpg",
      icon: <Flame size={24} color="#7C3AED" />,
      bg: "rgba(124, 58, 237, 0.08)",
      border: "rgba(124, 58, 237, 0.2)",
      features: [
        "Vacuum-assisted fractional distillation columns",
        "Dual condenser chilling loops for maximum volatile capture",
        "Continuous aromatic hydrolat / floral water separation",
      ],
    },
    {
      title: "2. Mechanical Cold-Pressed Expeller Units",
      subtitle: "Solvent-Free Virgin Seed & Kernel Extraction",
      desc: "Dedicated virgin cold-pressing expellers extract nutrient-dense carrier oils from seeds, nuts, and kernels without external heat or petrochemical solvents. Temperatures are maintained strictly below 45°C to preserve natural tocopherols, essential fatty acids, and active sterols.",
      image: "/images/infrastructure/cold_press.jpg",
      icon: <Droplets size={24} color="#7C3AED" />,
      bg: "rgba(124, 58, 237, 0.08)",
      border: "rgba(124, 58, 237, 0.2)",
      features: [
        "Heavy-duty hydraulic and screw expeller press bays",
        "Multi-stage fine particulate sedimentation and polishing",
        "Raw unrefined virgin grades (Moringa, Jojoba, Neem, Pumpkin)",
      ],
    },
    {
      title: "3. Botanical Conditioning & Milling",
      subtitle: "Pre-Distillation Harvest Optimization",
      desc: "Raw botanical foliage, roots, barks, and seeds are conditioned immediately post-harvest. Solar-assisted hygienic drying tunnels, multi-tier cleaning screens, and cryogenic pulverizers ensure optimal surface area exposure for homogenous steam percolation.",
      image: "/images/infrastructure/botanical_conditioning.jpg",
      icon: <TreePine size={24} color="#7C3AED" />,
      bg: "rgba(124, 58, 237, 0.08)",
      border: "rgba(124, 58, 237, 0.2)",
      features: [
        "Vibratory foreign-matter destoning and air-sorting",
        "Uniform size-reduction milling without friction heating",
        "Moisture equilibrium balancing across raw batches",
      ],
    },
    {
      title: "4. Supercritical CO₂ Fluid Extraction (SFE)",
      subtitle: "Sub-Zero Thermal & Solvent-Free Bioactive Recovery",
      desc: "Our high-pressure supercritical CO₂ extraction bays operate at physiological temperatures (31.1°C), recovering pristine volatile monoterpenes, top-note aromatics, and lipophilic spice fractions with zero petrochemical solvents or thermal scorching.",
      image: "/images/infrastructure/co2_supercritical.jpg",
      icon: <Wind size={24} color="#7C3AED" />,
      bg: "rgba(124, 58, 237, 0.08)",
      border: "rgba(124, 58, 237, 0.2)",
      features: [
        "Dual-vessel high-pressure extraction autoclaves (up to 500 bar)",
        "Closed-loop 99.5% food-grade CO₂ solvent recycling system",
        "Select botanical extracts, oleoresins, and delicate floral isolates",
      ],
    },
  ];


  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>

        {/* Hero Section */}
        <section style={{ textAlign: "center", marginBottom: "56px" }}>
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
            Pioneering Botanical Distillation<br />&amp; Industrial Infrastructure
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "780px", margin: "0 auto 36px", lineHeight: 1.7 }}>
            Operating advanced multi-boiler steam distillation batteries, cold-pressing mills, and climate-controlled bulk warehousing to supply pure, GC-MS verified essential oils to global pharmaceutical and cosmetic industries.
          </p>

          {/* Hero Banner Image with Live Telemetry Overlay */}
          <div
            style={{
              position: "relative",
              borderRadius: "32px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(24, 13, 38, 0.12)",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              height: "clamp(320px, 45vw, 540px)",
              marginBottom: "40px",
            }}
          >
            <Image
              src="/infrastructure_hero.jpg"
              alt="India Essential Oils State of the Art Steam Distillation Plant"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1200px) 100vw, 1200px"
            />

            {/* Gradient Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(24, 13, 38, 0.2) 0%, rgba(24, 13, 38, 0.85) 100%)",
              }}
            />

            {/* In-Image Live Stats Overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "24px 32px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "20px",
                backgroundColor: "rgba(24, 13, 38, 0.65)",
                backdropFilter: "blur(20px)",
                borderTop: "1px solid rgba(255, 255, 255, 0.18)",
              }}
            >
              {stats.map((stat, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#C4B5FD", lineHeight: 1 }}>
                    {stat.value} <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#E9D5FF" }}>{stat.unit}</span>
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.75)", marginTop: "4px", fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Four Key Infrastructure Units — 2x2 Grid */}
        <section style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "var(--font-size-h1)", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "6px" }}>
              Engineered for Botanical Purity
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "28px" }}>
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="liquid-glass-elevated"
                style={{
                  borderRadius: "28px",
                  padding: "clamp(24px, 3vw, 32px)",
                  backgroundColor: "rgba(255, 255, 255, 0.92)",
                  border: "1.5px solid rgba(124, 58, 237, 0.18)",
                  boxShadow: "0 10px 32px rgba(24, 13, 38, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                <div>
                  {/* Step Image Banner */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "230px",
                      borderRadius: "18px",
                      overflow: "hidden",
                      marginBottom: "22px",
                      backgroundColor: "#EDE8DF",
                      border: "1px solid rgba(124, 58, 237, 0.14)",
                    }}
                  >
                    <Image
                      src={fac.image}
                      alt={fac.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 560px"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        padding: "4px 12px",
                        borderRadius: "9999px",
                        backgroundColor: "rgba(24, 13, 38, 0.8)",
                        backdropFilter: "blur(12px)",
                        color: "white",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      Step {idx + 1}
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px",
                        backgroundColor: fac.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        border: `1px solid ${fac.border}`,
                      }}
                    >
                      {fac.icon}
                    </div>
                    <div>
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        {fac.subtitle}
                      </span>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: 0 }}>
                        {fac.title}
                      </h3>
                    </div>
                  </div>

                  <p style={{ color: "#5B486E", lineHeight: 1.65, fontSize: "0.92rem", marginBottom: "20px" }}>
                    {fac.desc}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid rgba(124, 58, 237, 0.12)", paddingTop: "16px" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {fac.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#2E1A47", fontWeight: 500 }}>
                        <CheckCircle2 size={15} color="#7C3AED" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Packaging & Bottling Dedicated Callout */}
          <div
            className="liquid-glass-elevated"
            style={{
              marginTop: "32px",
              borderRadius: "24px",
              padding: "24px 32px",
              backgroundColor: "rgba(124, 58, 237, 0.08)",
              border: "1px solid rgba(124, 58, 237, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  backgroundColor: "#7C3AED",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(124, 58, 237, 0.35)",
                }}
              >
                <Boxes size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#180D26", margin: "0 0 4px 0" }}>
                  Looking for Custom Bottling, Private Labeling &amp; Export Packaging?
                </h4>
                <p style={{ fontSize: "0.88rem", color: "#5B486E", margin: 0 }}>
                  Explore cleanroom nitrogen inerting, retail dropper formats (5ml–200ml), and UN-certified wholesale drums.
                </p>
              </div>
            </div>

            <Link
              href="/packaging"
              className="btn-vibrant-primary"
              style={{
                padding: "12px 24px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.88rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 16px rgba(124, 58, 237, 0.4)",
              }}
            >
              <span>Explore Packaging &amp; OEM</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>




      </main>

      <Footer />
    </div>
  );
}
