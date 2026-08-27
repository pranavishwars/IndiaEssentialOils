import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Footer } from "@/components/server/Footer";
import {
  Factory,
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
    "Explore our world-class botanical extraction infrastructure: multi-boiler steam distillation stills, mechanical cold-pressing units, 1,000 MT climate-controlled storage, 5,000+ hectares wild collection, and in-house GC-MS testing laboratory.",
  keywords: [
    "essential oil distillation plant",
    "steam distillation facility India",
    "cold pressed carrier oil unit",
    "botanical extraction infrastructure",
    "essential oil manufacturer Delhi",
    "bulk essential oil exporter India",
  ],
  openGraph: {
    title: "World-Class Distillation & Extraction Infrastructure | India Essential Oils",
    description:
      "Modern 316-grade stainless steel steam distillation columns, expellers, 1,000 MT warehousing, and ISO 22000/GMP certified processing plants.",
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
      title: "1. Multi-Stage Steam Distillation Stills",
      subtitle: "Low-Pressure Hydro-Thermal Distillation",
      desc: "Our primary processing bays feature computer-regulated low-pressure steam injection systems linked to 316-grade stainless steel stills. Low vapor velocity prevents thermal degradation of volatile monoterpenes and sesquiterpenes, yielding uncharred, aromatic profiles.",
      icon: <Flame size={28} color="#7C3AED" />,
      bg: "rgba(124, 58, 237, 0.12)",
      border: "rgba(124, 58, 237, 0.25)",
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
      icon: <Droplets size={28} color="#059669" />,
      bg: "rgba(16, 185, 129, 0.12)",
      border: "rgba(16, 185, 129, 0.25)",
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
      icon: <TreePine size={28} color="#D97706" />,
      bg: "rgba(245, 158, 11, 0.12)",
      border: "rgba(245, 158, 11, 0.25)",
      features: [
        "Vibratory foreign-matter destoning and air-sorting",
        "Uniform size-reduction milling without friction heating",
        "Moisture equilibrium balancing across raw batches",
      ],
    },
    {
      title: "4. Cleanroom Nitrogen Inerting & Bottling",
      subtitle: "Oxidation-Free Automated Packaging",
      desc: "Our cleanroom bottling lines utilize 99.999% ultra-pure nitrogen gas displacement capping. By purging atmospheric oxygen from the headspace of every amber bottle, canister, and drum, sensitive unsaturated oils are protected from oxidative rancidity during transit.",
      icon: <Wind size={28} color="#0284C7" />,
      bg: "rgba(2, 132, 199, 0.12)",
      border: "rgba(2, 132, 199, 0.25)",
      features: [
        "Automated volumetric piston liquid dispensers",
        "Nitrogen purge and positive-pressure capping hoods",
        "Private label retail formats (5ml–200ml) & bulk drums (25kg–200kg)",
      ],
    },
  ];

  const flagshipOils = {
    essentials: [
      { name: "Lemongrass Oil", region: "Kerala / Assam", note: "High Citral Content (>80%)" },
      { name: "Himalayan Cedarwood", region: "Himachal Pradesh", note: "Rich Cedrol & Himachalenes" },
      { name: "Citronella Oil (Java)", region: "Northeast India", note: "High Citronellal & Geraniol" },
      { name: "Palmarosa Oil", region: "Central India", note: "Pure Geraniol (>85%)" },
      { name: "Holy Basil (Tulsi)", region: "Uttar Pradesh", note: "High Eugenol Fraction" },
      { name: "Vetiver (Khus) Oil", region: "Kannauj Terroir", note: "Traditional Hydro-Distilled" },
      { name: "Cinnamon Bark & Leaf", region: "Western Ghats", note: "High Cinnamaldehyde" },
      { name: "Ajowan Seed Oil", region: "Rajasthan", note: "Natural Thymol Content (>50%)" },
    ],
    carriers: [
      { name: "Virgin Moringa Seed Oil", note: "High Oleic Acid / Behenic Acid" },
      { name: "Cold-Pressed Pumpkin Seed", note: "Phytosterol & Zinc Rich" },
      { name: "Wild Apricot Kernel Oil", note: "Himalayan Cold-Pressed Guti" },
      { name: "Golden Virgin Jojoba Oil", note: "Natural Liquid Wax Esters" },
      { name: "Pomegranate Seed Oil", note: "Punicic Acid Super-Antioxidant" },
      { name: "Pure Cold-Pressed Neem Oil", note: "High Azadirachtin Content" },
    ],
  };

  const logisticsPillars = [
    {
      title: "1,000 MT Climate-Controlled Storage",
      desc: "Closed warehouse facilities maintaining standardized 18°C–22°C temperatures and controlled relative humidity, safeguarding delicate aroma compounds from atmospheric fluctuation.",
    },
    {
      title: "Phytosanitary & Custom Regulatory Clearance",
      desc: "Full pre-clearance facilitation including Certificates of Analysis (CoA), MSDS, Certificate of Origin (COO), CITES declarations, and specialized country-specific import compliance.",
    },
    {
      title: "Direct Shipping Line & Air Freight Tie-Ups",
      desc: "Long-standing agreements with major ocean freight carriers and air cargo express networks ensure preferential shipping rates, temperature-controlled cargo handling, and live GPS consignment tracking.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>

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
            <Factory size={14} color="#7C3AED" /> Manufacturing &amp; Distillation Infrastructure
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

        {/* Four Key Infrastructure Units */}
        <section style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              Core Technical Capabilities
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "6px" }}>
              Engineered for Botanical Purity
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "28px" }}>
            {facilities.map((fac, idx) => (
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
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "16px",
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
                      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: 0 }}>
                        {fac.title}
                      </h3>
                    </div>
                  </div>

                  <p style={{ color: "#5B486E", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "24px" }}>
                    {fac.desc}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid rgba(124, 58, 237, 0.12)", paddingTop: "18px" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {fac.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.88rem", color: "#2E1A47", fontWeight: 500 }}>
                        <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Agricultural Sourcing & Flagship Crop Yields */}
        <section style={{ marginBottom: "80px" }}>
          <div
            className="liquid-glass-elevated"
            style={{
              borderRadius: "32px",
              padding: "48px 40px",
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              boxShadow: "0 16px 48px rgba(24, 13, 38, 0.06)",
            }}
          >
            <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 40px" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                Agronomic Terroir &amp; Direct Crop Control
              </span>
              <h2 style={{ fontSize: "2rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "6px" }}>
                Flagship Distillation Capacities
              </h2>
              <p style={{ color: "#5B486E", fontSize: "0.95rem", lineHeight: 1.6, marginTop: "8px" }}>
                With over 100 acres of contract cultivation and 5,000 hectares of sustainable wild harvesting rights across the Indian subcontinent, we maintain direct pipeline stability for the world's most demanded natural oils.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
              {/* Signature Essential Oils */}
              <div style={{ backgroundColor: "#FCFAF6", borderRadius: "20px", padding: "28px", border: "1px solid rgba(124, 58, 237, 0.12)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#180D26", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Flame size={20} color="#7C3AED" /> Signature Essential Oils
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  {flagshipOils.essentials.map((oil, i) => (
                    <div key={i} style={{ padding: "10px 14px", borderRadius: "12px", backgroundColor: "white", border: "1px solid rgba(0,0,0,0.06)" }}>
                      <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#180D26" }}>{oil.name}</div>
                      <div style={{ fontSize: "0.75rem", color: "#7C3AED", fontWeight: 600 }}>{oil.region}</div>
                      <div style={{ fontSize: "0.72rem", color: "#6B7280" }}>{oil.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signature Carrier Oils */}
              <div style={{ backgroundColor: "#FCFAF6", borderRadius: "20px", padding: "28px", border: "1px solid rgba(16, 185, 129, 0.15)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#180D26", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Droplets size={20} color="#059669" /> Signature Virgin Carrier Oils
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  {flagshipOils.carriers.map((oil, i) => (
                    <div key={i} style={{ padding: "10px 14px", borderRadius: "12px", backgroundColor: "white", border: "1px solid rgba(0,0,0,0.06)" }}>
                      <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#180D26" }}>{oil.name}</div>
                      <div style={{ fontSize: "0.75rem", color: "#059669", fontWeight: 600 }}>{oil.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Logistics & Warehousing Section */}
        <section style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              Fulfillment &amp; Export Reach
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "6px" }}>
              Global Cold-Chain &amp; Warehouse Network
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {logisticsPillars.map((item, i) => (
              <div
                key={i}
                className="liquid-glass"
                style={{
                  borderRadius: "24px",
                  padding: "32px",
                  backgroundColor: "rgba(255, 255, 255, 0.75)",
                  border: "1px solid rgba(124, 58, 237, 0.16)",
                }}
              >
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", backgroundColor: "rgba(124, 58, 237, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  {i === 0 ? <Boxes size={24} color="#7C3AED" /> : i === 1 ? <ShieldCheck size={24} color="#7C3AED" /> : <Truck size={24} color="#7C3AED" />}
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#5B486E", fontSize: "0.92rem", lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Audit & Commercial Inquiries CTA */}
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
              Direct Distillery Access
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "white", lineHeight: 1.2, marginBottom: "12px" }}>
              Request a Technical Facility Audit or Commercial Quote
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.82)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
              Connect directly with our head of distillation and regulatory affairs for custom production runs, contract farming partnerships, and bulk container pricing.
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
              Request Wholesale Quote <ArrowRight size={18} />
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
              Schedule Facility Visit
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
