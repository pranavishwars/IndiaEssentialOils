import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Footer } from "@/components/server/Footer";
import {
  Flame,
  Droplets,
  Wind,
  ShieldCheck,
  CheckCircle2,
  Warehouse,
  Sparkles,
  Scissors,
  Layers,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing, Distillation & Testing Infrastructure | India Essential Oils",
  description:
    "Explore India Essential Oils world-class manufacturing, research, steam distillation, cold pressed carrier oil units, 1,000 MT closed storage, testing laboratory, and global shipping facilities.",
  keywords: [
    "essential oil distillation plant",
    "steam distillation facility India",
    "cold pressed carrier oil unit",
    "essential oil manufacturing plant",
    "essential oil testing laboratory",
    "1000 MT storage facility",
    "bulk essential oil exporter India",
  ],
  openGraph: {
    title: "Manufacturing, Distillation & Testing Infrastructure | India Essential Oils",
    description:
      "World-class manufacturing, steam distillation facilities, cold pressed carrier oil units, 1,000 MT closed storage, laboratory testing, and worldwide shipping.",
    images: ["/infrastructure_hero.jpg"],
  },
};

export default function InfrastructurePage() {
  const stats = [
    { value: "100+", unit: "Acres", label: "Contract Cultivation" },
    { value: "5,000", unit: "Hectares", label: "Area for Wild Collection" },
    { value: "20+", unit: "Acres", label: "Organic Cultivation" },
    { value: "1,000", unit: "MT", label: "Closed Storage Space" },
    { value: "350+", unit: "Personnel", label: "Dedicated Manpower & Staff" },
  ];

  const processes = [
    {
      num: "01",
      title: "Drying, cutting and pulverizing",
      desc: "Latest drying, cutting, and pulverizing machinery to condition raw botanical materials.",
      icon: <Scissors size={18} color="#7C3AED" />,
      image: "/images/infrastructure/botanical_conditioning.jpg",
    },
    {
      num: "02",
      title: "Cleaning and sorting",
      desc: "Systematic cleaning and sorting to ensure only pristine botanicals enter distillation.",
      icon: <Layers size={18} color="#7C3AED" />,
      image: "/images/infrastructure/proc_cleaning_sorting.jpg",
    },
    {
      num: "03",
      title: "Sterilization",
      desc: "Hygienic sterilization protocols to maintain superior purity and safety standards.",
      icon: <ShieldCheck size={18} color="#7C3AED" />,
      image: "/images/infrastructure/proc_sterilization.jpg",
    },
    {
      num: "04",
      title: "Steam Distillation",
      desc: "A large number of steam distillation facilities configured for different essential oils.",
      icon: <Flame size={18} color="#7C3AED" />,
      image: "/images/infrastructure/steam_distillation.jpg",
    },
    {
      num: "05",
      title: "Cold pressing",
      desc: "Dedicated mechanical cold-pressed unit engineered specifically for carrier oils.",
      icon: <Droplets size={18} color="#7C3AED" />,
      image: "/images/infrastructure/cold_press.jpg",
    },
    {
      num: "06",
      title: "Nitrogen capping",
      desc: "Protective nitrogen flushing and capping to preserve volatile aromatic compounds.",
      icon: <Wind size={18} color="#7C3AED" />,
      image: "/images/infrastructure/proc_nitrogen_capping.jpg",
    },
    {
      num: "07",
      title: "Customized blending",
      desc: "Precision batch blending to client specifications under supervised quality control.",
      icon: <Sparkles size={18} color="#7C3AED" />,
      image: "/images/infrastructure/proc_custom_blending.jpg",
    },
    {
      num: "08",
      title: "Private labeling in small and big bottles",
      desc: "Flexible packaging line handling private labeling across both small and large formats.",
      icon: <FileCheck size={18} color="#7C3AED" />,
      image: "/images/packaging/glass_droppers.jpg",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>

        {/* Hero Section */}
        <section style={{ textAlign: "center", marginBottom: "56px" }}>
          <h1
            style={{
              fontSize: "clamp(2.3rem, 4.5vw, 3.5rem)",
              fontWeight: 700,
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#180D26",
              lineHeight: 1.16,
              marginBottom: "20px",
            }}
          >
            World-Class Manufacturing, Research<br />&amp; Testing Facilities
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#2E1A47", maxWidth: "860px", margin: "0 auto 16px", lineHeight: 1.7, fontWeight: 500 }}>
            India Essential Oils has world class manufacturing, research and testing facilities which enables us to excel ahead.
          </p>

          <p style={{ fontSize: "1.02rem", color: "#5B486E", maxWidth: "860px", margin: "0 auto 36px", lineHeight: 1.7 }}>
            A large number of steam distillation facilities for different essential oils, cold pressed unit for our carrier oils, latest drying &amp; boiling facilities, set up are some of the significant facilities that has helped in India Essential Oils remarkable success.
          </p>

          {/* Hero Banner Image with Stats Overlay */}
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
              alt="India Essential Oils World-Class Manufacturing and Steam Distillation Facility"
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
                background: "linear-gradient(180deg, rgba(24, 13, 38, 0.15) 0%, rgba(24, 13, 38, 0.85) 100%)",
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
                gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                gap: "16px",
                backgroundColor: "rgba(24, 13, 38, 0.68)",
                backdropFilter: "blur(20px)",
                borderTop: "1px solid rgba(255, 255, 255, 0.18)",
              }}
            >
              {stats.map((stat, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)", fontWeight: 800, color: "#C4B5FD", lineHeight: 1 }}>
                    {stat.value} <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#E9D5FF" }}>{stat.unit}</span>
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.85)", marginTop: "6px", fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Contract Cultivation, Wild Sourcing & Dedicated Workforce */}
        <section style={{ marginBottom: "72px" }}>
          <div
            className="liquid-glass-elevated"
            style={{
              borderRadius: "32px",
              padding: "clamp(28px, 4vw, 44px)",
              backgroundColor: "rgba(255, 255, 255, 0.92)",
              border: "1.5px solid rgba(124, 58, 237, 0.18)",
              boxShadow: "0 10px 32px rgba(24, 13, 38, 0.05)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "36px", alignItems: "center" }}>
              <div>
                <h2
                  style={{
                    fontSize: "var(--font-size-h2)",
                    fontWeight: 700,
                    fontFamily: "var(--font-lora), Georgia, serif",
                    color: "#180D26",
                    marginBottom: "18px",
                    lineHeight: 1.25,
                  }}
                >
                  Cultivation, Wild Collection &amp; Dedicated Workforce
                </h2>

                <p style={{ fontSize: "1rem", color: "#5B486E", lineHeight: 1.7, marginBottom: "16px" }}>
                  India Essential Oils is no veteran of Industry, which is ruled by 50-100 year old groups. We are a small 5-year-old startup having great ambitions and we are getting there slowly but steadily. India Essential Oils has more than 100 acres of contract cultivation and 5000 hectares of area for wild collection. We have more then 20 acres of Organic Cultivation. The location of India Essential Oils manufacturing plant has access to best quality raw material at all times.
                </p>

                <p style={{ fontSize: "1rem", color: "#5B486E", lineHeight: 1.7, marginBottom: "20px" }}>
                  We are also continuously keeping on expanding our production facilities to conform to the existing demands of our customers. We have high regards for our dedicated and hard working man power, which is a prominent factor behind our success.
                </p>

                <p style={{ fontSize: "1rem", color: "#5B486E", lineHeight: 1.7, marginBottom: 0 }}>
                  We employ more than 100 permanent and 250 temporary skilled and non-skilled labors and a staff of 20 professionals who are highly proficient and qualified. Many of the oils and Oleoresins in our list are made from wild crafted raw materials from all over India, while few are cultivated by own using advance techniques of farming.
                </p>
              </div>

              <div
                style={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  height: "clamp(300px, 35vw, 420px)",
                  boxShadow: "0 8px 28px rgba(24, 13, 38, 0.08)",
                  border: "1px solid rgba(124, 58, 237, 0.16)",
                }}
              >
                <Image
                  src="/images/infrastructure/cultivation_farm.jpg"
                  alt="Contract Cultivation, Wild Sourcing and Organic Farms"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
            </div>
          </div>
        </section>



        {/* Section: Processes Undertaken at Our Facility */}
        <section style={{ marginBottom: "72px" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <h2
              style={{
                fontSize: "var(--font-size-h2)",
                fontWeight: 700,
                fontFamily: "var(--font-lora), Georgia, serif",
                color: "#180D26",
                marginBottom: "10px",
              }}
            >
              Processes Undertaken at Our Facility
            </h2>
            <p style={{ fontSize: "1rem", color: "#5B486E", margin: 0 }}>
              We undertake following processes at our facility :
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "24px" }}>
            {processes.map((proc, idx) => (
              <div
                key={idx}
                className="liquid-glass-elevated"
                style={{
                  borderRadius: "24px",
                  padding: "18px",
                  backgroundColor: "rgba(255, 255, 255, 0.92)",
                  border: "1.5px solid rgba(124, 58, 237, 0.18)",
                  boxShadow: "0 8px 24px rgba(24, 13, 38, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                <div>
                  {/* Process Image */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "180px",
                      borderRadius: "16px",
                      overflow: "hidden",
                      marginBottom: "16px",
                      border: "1px solid rgba(124, 58, 237, 0.14)",
                    }}
                  >
                    <Image
                      src={proc.image}
                      alt={proc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 280px"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        padding: "3px 10px",
                        borderRadius: "9999px",
                        backgroundColor: "rgba(24, 13, 38, 0.78)",
                        backdropFilter: "blur(8px)",
                        color: "white",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {proc.num}
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(124, 58, 237, 0.08)",
                        border: "1px solid rgba(124, 58, 237, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {proc.icon}
                    </div>
                    <h3 style={{ fontSize: "1.02rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: 0, lineHeight: 1.3 }}>
                      {proc.title}
                    </h3>
                  </div>

                  <p style={{ fontSize: "0.85rem", color: "#5B486E", margin: 0, lineHeight: 1.58 }}>
                    {proc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Storage Facilities & Quality Preservation */}
        <section style={{ marginBottom: "72px" }}>
          <div
            className="liquid-glass-elevated"
            style={{
              borderRadius: "32px",
              padding: "clamp(28px, 4vw, 44px)",
              backgroundColor: "rgba(255, 255, 255, 0.92)",
              border: "1.5px solid rgba(124, 58, 237, 0.18)",
              boxShadow: "0 10px 32px rgba(24, 13, 38, 0.05)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "36px", alignItems: "center" }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  height: "clamp(280px, 35vw, 400px)",
                  boxShadow: "0 8px 28px rgba(24, 13, 38, 0.08)",
                  border: "1px solid rgba(124, 58, 237, 0.16)",
                }}
              >
                <Image
                  src="/images/infrastructure/storage_warehouse.jpg"
                  alt="1000 Metric Tonnes Closed Storage Space"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", backgroundColor: "rgba(124, 58, 237, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Warehouse size={22} color="#7C3AED" />
                  </div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Storage Facilities
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: "var(--font-size-h2)",
                    fontWeight: 700,
                    fontFamily: "var(--font-lora), Georgia, serif",
                    color: "#180D26",
                    marginBottom: "18px",
                    lineHeight: 1.25,
                  }}
                >
                  1,000 Metric Tonnes Closed Storage Space
                </h2>

                <p style={{ fontSize: "1.02rem", color: "#5B486E", lineHeight: 1.7, marginBottom: "18px" }}>
                  We have 1000 metric tones of closed storage space to avoid the products from any kind of unusual atmospheric conditions.
                </p>

                <p style={{ fontSize: "1.02rem", color: "#5B486E", lineHeight: 1.7, marginBottom: "22px" }}>
                  India Essential Oils storage facilities are designed to ensure that the quality standards maintained during production are retained during storage. India essential Oils facilities are designed and maintained to support world class norms for storage of raw and finished products.
                </p>

                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 18px", borderRadius: "9999px", backgroundColor: "rgba(124, 58, 237, 0.08)", border: "1px solid rgba(124, 58, 237, 0.2)", fontSize: "0.85rem", fontWeight: 700, color: "#7C3AED" }}>
                  <CheckCircle2 size={16} /> World-Class Storage Norms for Raw &amp; Finished Products
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
