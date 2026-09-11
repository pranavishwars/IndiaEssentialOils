import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/data";
import { Footer } from "@/components/server/Footer";

import { 
  ShieldCheck, 
  Globe, 
  Leaf, 
  FlaskConical, 
  ArrowRight,
  Quote,
  CheckCircle2,
  Award,
  Clock,
  TrendingUp,
  Activity,
  HeartPulse,
  Apple,
  Flower,
  Sparkle,
  Phone,
  Mail,
  HelpCircle,
  TreeDeciduous,
  ChevronRight
} from "lucide-react";

export const metadata = {
  title: "About Us | India Essential Oils (Mother Herbs)",
  description: "Learn about India Essential Oils, a division of Mother Herbs Pvt. Ltd. 100% Pure & Natural Essential Oils, Oleoresins & Carrier Oils supplier worldwide.",
};

function SectionDivider() {
  return (
    <div
      style={{
        height: "1px",
        width: "100%",
        maxWidth: "1140px",
        margin: "64px auto",
        background: "linear-gradient(90deg, transparent 0%, rgba(124, 58, 237, 0.15) 12%, rgba(124, 58, 237, 0.35) 50%, rgba(124, 58, 237, 0.15) 88%, transparent 100%)",
      }}
      aria-hidden="true"
    />
  );
}

export default function AboutPage() {
  const trustPillars = [
    {
      title: "Established in the Industry",
      subtitle: "95% Buyer Retention & 90% Repeat Orders",
      desc: "As a premier division of Mother Herbs Pvt. Ltd., we have built an enduring global reputation supplying 100% Pure & Natural Essential Oils and Oleoresins to corporate clients and international formulators worldwide.",
      icon: <Award size={24} color="#7C3AED" />,
    },
    {
      title: "Dynamic in Nature",
      subtitle: "Advanced Extraction & Trained Technical Team",
      desc: "We operate on the solid foundation of the latest extraction technologies and state-of-the-art distillation equipment, supported by an agile team of highly qualified, well-trained chemists and process engineers.",
      icon: <Activity size={24} color="#7C3AED" />,
    },
    {
      title: "Adapting to Changing Markets",
      subtitle: "Continuous R&D & Custom Regional Cultivation",
      desc: "Our industrial R&D team strives daily for process up-gradation, product improvisation, and development of new botanical lines. We identify optimal micro-climates and promote customized cultivation in specified areas as per customer requirements.",
      icon: <TrendingUp size={24} color="#7C3AED" />,
    },
    {
      title: "Providing Uncompromising Quality",
      subtitle: "Farm-to-Factory Potency & Dual GC-MS Verification",
      desc: "We monitor raw materials from field to factory to protect active ingredient potency, guide farmers on approved eco-friendly agricultural practices, and verify every batch with dual GC-MS chromatography and accredited ISO/GMP certifications.",
      icon: <ShieldCheck size={24} color="#7C3AED" />,
    },
  ];

  const industries = [
    {
      title: "Cosmetics & Personal Care",
      desc: "Cold-pressed virgin carrier oils, floral hydrosols, and therapeutic essential oils for clean beauty, anti-aging skincare, serums, and luxury cosmetic formulations.",
      image: "/images/industries/cosmetics_personal_care.jpg",
      icon: <Sparkle size={24} color="#7C3AED" />,
      examples: "Rosehip, Jojoba, Argan, Lavender, Tea Tree, Rose Water",
    },
    {
      title: "Food, Beverage & Flavoring",
      desc: "Standardized spice oils and oleoresins delivering authentic aromatic flavor profiles for food manufacturing, confectioneries, savory seasonings, and beverages.",
      image: "/images/industries/food_beverage_flavor.jpg",
      icon: <Apple size={24} color="#7C3AED" />,
      examples: "Cardamom, Black Pepper, Ginger, Clove, Cinnamon, Nutmeg Oleoresins",
    },
    {
      title: "Pharmaceutical & Healthcare",
      desc: "High-purity botanical extracts and therapeutic-grade distillates complying with rigorous international pharmacopoeia standards and GMP documentation.",
      image: "/images/industries/pharmaceutical_healthcare.jpg",
      icon: <HeartPulse size={24} color="#7C3AED" />,
      examples: "Turmeric Extract, Eucalyptus, Peppermint, Frankincense CO2, Wintergreen",
    },
    {
      title: "Perfumery & Fine Fragrance",
      desc: "Solvent-extracted floral absolutes, rare attars, and exquisite aromatic compounds crafted for fine fragrance houses and luxury artisanal perfumers.",
      image: "/images/industries/perfumery_fine_fragrance.jpg",
      icon: <Flower size={24} color="#7C3AED" />,
      examples: "Jasmine Sambac, Rose Damascena, Lotus Absolute, Champaca, Oudh",
    },
    {
      title: "Aromatherapy & Holistic Wellness",
      desc: "100% natural, unadulterated essential oils and custom therapeutic blends with dual GC-MS verification for wellness practitioners and diffusions.",
      image: "/images/industries/aromatherapy_wellness.jpg",
      icon: <Leaf size={24} color="#7C3AED" />,
      examples: "German Chamomile, Clary Sage, Bergamot, Rosemary, Vetiver",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1140px", margin: "0 auto", width: "100%" }}>

        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
            About {COMPANY_INFO.name}
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "760px", margin: "0 auto", lineHeight: 1.7 }}>
            A premier division of Mother Herbs Pvt. Ltd., supplying 100% pure &amp; natural essential oils, spice distillates, cold-pressed carrier oils, and oleoresins to global industries.
          </p>
        </div>

        {/* Section 1: Company Profile (FIRST SECTION) */}
        <section id="profile" style={{ scrollMarginTop: "120px", marginBottom: "64px" }}>
          <div
            className="liquid-glass-elevated"
            style={{
              borderRadius: "32px",
              padding: "clamp(32px, 5vw, 52px)",
              backgroundColor: "rgba(255, 255, 255, 0.94)",
              border: "1.5px solid rgba(124, 58, 237, 0.25)",
              boxShadow: "0 20px 60px rgba(24, 13, 38, 0.08)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
              <Link
                href="/about/profile"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#7C3AED",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Read Dedicated Profile Page <ArrowRight size={14} />
              </Link>
            </div>

            <h2
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                fontFamily: "var(--font-lora), Georgia, serif",
                color: "#180D26",
                lineHeight: 1.2,
                marginBottom: "24px",
              }}
            >
              India Essential Oils &bull; Division of Mother Herbs
            </h2>

            <div style={{ fontSize: "1.04rem", color: "#3B284C", lineHeight: 1.85, display: "flex", flexDirection: "column", gap: "18px" }}>
              <p style={{ margin: 0 }}>
                <strong>India Essential Oils is a Division of Mother Herbs Pvt. Ltd.</strong> Mother Herbs has been involved in almost every aspect of Herbal supply chain, from agricultural production to International Commodity Trading. We are one of India&apos;s leading Natural Medicinal, Cosmetic Herbs &amp; Extract Suppliers. We are committed to offering the highest quality, therapeutic-grade, 100% natural botanicals &amp; innovative range of Essential oils, Aromatherapy products, Oleoresins to real seekers of purity. Essential Oils was a natural gateway for Mother Herbs, in command of vast Natural Resources of India. Mother Herbs promises to offer Natures best in value added form, still maintaining the purity and sanctity of Natural Materials.
              </p>
              <p style={{ margin: 0 }}>
                India Essential Oils was started 5 years ago as a company identified with our capabilities to meet the increasing demands for Essential Oils &amp; Oleoresins Products of Food, Pharmaceutical, Perfumery, Flavor and Cosmetic industry in India and Overseas. With a view to preserve the environment by sustained efforts in pollution control and conservation.
              </p>
              <p style={{ margin: 0 }}>
                We are the India Essential Oils was established with a view to prove itself as one of the India&apos;s leading names in the field of Herbal &amp; Essential Oils, Carrier Oils, Floral Water &amp; Spices Oils &amp; Oleoresins with our promise of quality products that stay ahead of time.
              </p>
              <p style={{ margin: 0 }}>
                Now we have built a solid reputation in supplying 100% Pure &amp; Natural Essential Oils &amp; Oleoresins worldwide which resulted having business with several corporate and good clients overseas with <strong>almost 95% buyer retention</strong> and <strong>90% repeat orders</strong>.
              </p>
              <p style={{ margin: 0 }}>
                India Essential Oils work on the solid foundation of the very latest technology and the best equipment, supported by a team of highly qualified and well-trained personnel.
              </p>
              <p style={{ margin: 0 }}>
                Our industries R&amp;D team strive everyday for process up-gradation, product improvisation and development of new products. They have sharp eye to identify the perfect location for the cultivation of crops based on suitable climatic and soil conditions. We also carefully monitor the transit of raw materials from field to factory to ensure that the freshness and potency of active ingredients are preserved.
              </p>
              <p style={{ margin: 0 }}>
                India Essential Oils promotes cultivation of raw material in specified areas as per customer requirements. The company provides technical guidance to farmers and directs them on the usage of approved pesticides and fertilizers. The impetus has always been on eco friendly practices and reduction of harmful chemical usage during cultivation.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Section 2: The Trust We've Built */}
        <section id="trust-we-built" style={{ scrollMarginTop: "120px", marginBottom: "0" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.3rem)",
                fontWeight: 700,
                fontFamily: "var(--font-lora), Georgia, serif",
                color: "#180D26",
                margin: "4px 0 0 0",
              }}
            >
              Why Global Formulators Rely on India Essential Oils
            </h2>
            <p style={{ fontSize: "1.02rem", color: "#5B486E", maxWidth: "760px", margin: "10px auto 0", lineHeight: 1.7 }}>
              From established market presence to dynamic technological agility, our customer-centric ethos has resulted in almost <strong>95% buyer retention</strong> and <strong>90% repeat orders</strong> worldwide.
            </p>
          </div>

          {/* 4 Core Pillars of Trust 2x2 Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "24px", marginBottom: "36px" }}>
            {trustPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="liquid-glass"
                style={{
                  borderRadius: "24px",
                  padding: "30px 24px",
                  backgroundColor: "rgba(255, 255, 255, 0.82)",
                  border: "1px solid rgba(124, 58, 237, 0.18)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "14px", backgroundColor: "rgba(124, 58, 237, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {pillar.icon}
                    </div>
                  </div>

                  <h3 style={{ fontSize: "1.18rem", fontWeight: 700, color: "#180D26", marginBottom: "4px", lineHeight: 1.3 }}>
                    {pillar.title}
                  </h3>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#7C3AED", marginBottom: "12px" }}>
                    {pillar.subtitle}
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "#5B486E", lineHeight: 1.65, margin: 0 }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              href="/about/trust-we-built"
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#7C3AED",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              Learn More About Our Accreditations &amp; Trust &rarr;
            </Link>
          </div>
        </section>

        <SectionDivider />

        {/* Section 3: Why Us (Our Foundations) */}
        <section id="why-us" style={{ scrollMarginTop: "120px", marginBottom: "0" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <h2 style={{ fontSize: "var(--font-size-h1)", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "4px" }}>
              Why Global Brands Choose Us
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "24px" }}>
            <div className="liquid-glass" style={{ borderRadius: "24px", padding: "32px", border: "1px solid rgba(124, 58, 237, 0.18)" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", backgroundColor: "rgba(124, 58, 237, 0.1)", border: "1px solid rgba(124, 58, 237, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Leaf size={26} color="#7C3AED" />
              </div>
              <h3 style={{ fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
                Authentic Terroir Sourcing
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#5B486E", lineHeight: 1.65, margin: 0 }}>
                Direct partnerships with multi-generational cultivators across Kashmir, the Western Ghats, Uttar Pradesh, and Rajasthan for uncontaminated botanical inputs.
              </p>
            </div>

            <div className="liquid-glass" style={{ borderRadius: "24px", padding: "32px", border: "1px solid rgba(124, 58, 237, 0.18)" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", backgroundColor: "rgba(124, 58, 237, 0.14)", border: "1px solid rgba(124, 58, 237, 0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <FlaskConical size={26} color="#7C3AED" />
              </div>
              <h3 style={{ fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
                Batch Analytical Transparency
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#5B486E", lineHeight: 1.65, margin: 0 }}>
                Every production lot is subjected to dual GC-MS chromatography, optical rotation, and specific gravity verification before release.
              </p>
            </div>

            <div className="liquid-glass" style={{ borderRadius: "24px", padding: "32px", border: "1px solid rgba(124, 58, 237, 0.18)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", backgroundColor: "rgba(124, 58, 237, 0.1)", border: "1px solid rgba(124, 58, 237, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <Globe size={26} color="#7C3AED" />
                </div>
                <h3 style={{ fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#180D26", marginBottom: "10px" }}>
                  Global Export Compliance
                </h3>
                <p style={{ fontSize: "0.95rem", color: "#5B486E", lineHeight: 1.65, margin: 0 }}>
                  Full documentation suite provided with every shipment: Certificates of Analysis (CoA), MSDS, Non-GMO declarations, and IFRA compliance statements.
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              href="/about/why-us"
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#7C3AED",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              Read Why Global Brands Choose Us &rarr;
            </Link>
          </div>
        </section>

        <SectionDivider />

        {/* Section 4: Industries We Serve */}
        <section id="industries-we-serve" style={{ scrollMarginTop: "120px", marginBottom: "0" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                fontFamily: "var(--font-lora), Georgia, serif",
                color: "#180D26",
                marginTop: "4px",
                lineHeight: 1.2,
              }}
            >
              Industries We Serve
            </h2>

            <p style={{ fontSize: "1.02rem", color: "#5B486E", maxWidth: "760px", margin: "12px auto 0", lineHeight: 1.7 }}>
              Supplying verified B2B formulators, commercial manufacturers, and global wholesale brands with custom tailored botanical inputs across 5 primary industrial sectors.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "28px", marginBottom: "32px" }}>
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="liquid-glass-elevated"
                style={{
                  borderRadius: "28px",
                  padding: "clamp(22px, 3vw, 28px)",
                  backgroundColor: "rgba(255, 255, 255, 0.92)",
                  border: "1.5px solid rgba(124, 58, 237, 0.18)",
                  boxShadow: "0 10px 30px rgba(24, 13, 38, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                <div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "210px",
                      borderRadius: "18px",
                      overflow: "hidden",
                      marginBottom: "18px",
                      backgroundColor: "#EDE8DF",
                      border: "1px solid rgba(124, 58, 237, 0.14)",
                    }}
                  >
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 540px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "14px", backgroundColor: "rgba(124, 58, 237, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {ind.icon}
                    </div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", margin: 0 }}>
                      {ind.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: "0.92rem", color: "#4A3E56", lineHeight: 1.65, marginBottom: "16px" }}>
                    {ind.desc}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid rgba(124, 58, 237, 0.12)", paddingTop: "14px" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "4px" }}>
                    Key Ingredients
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#180D26", fontWeight: 600 }}>
                    {ind.examples}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              href="/about/industries-we-serve"
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#7C3AED",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              Explore All 5 Industry Formulations &rarr;
            </Link>
          </div>
        </section>

        <SectionDivider />

        {/* Section 6: How to Order & Ordering Guidelines */}
        <section id="how-to-order" style={{ scrollMarginTop: "120px", marginBottom: "0" }}>
          <div
            className="liquid-glass-elevated"
            style={{
              borderRadius: "32px",
              padding: "44px",
              backgroundColor: "rgba(255, 255, 255, 0.92)",
              border: "1.5px solid rgba(124, 58, 237, 0.22)",
              boxShadow: "0 16px 48px rgba(24, 13, 38, 0.06)",
            }}
          >
            <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 36px" }}>
              <h2 style={{ fontSize: "var(--font-size-h1)", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginTop: "0" }}>
                How to Order
              </h2>
              <p style={{ color: "#5B486E", fontSize: "1rem", lineHeight: 1.7, marginTop: "12px" }}>
                We are committed to rapid response times and smooth global procurement for all wholesale essential oil requirements.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "20px", marginBottom: "32px" }}>
              
              {/* Step 1: Send Enquiry */}
              <div style={{ backgroundColor: "#FCFAF6", borderRadius: "20px", padding: "24px 22px", border: "1px solid rgba(124, 58, 237, 0.16)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", backgroundColor: "rgba(124, 58, 237, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <Mail size={19} color="#7C3AED" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: "0.98rem", fontWeight: 700, color: "#180D26", margin: "0 0 3px 0", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                      1. Submit Enquiry
                    </h3>
                    <span style={{ fontSize: "0.78rem", color: "#7C3AED", fontWeight: 700, display: "block" }}>
                      Online Request Form
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: "0.88rem", color: "#5B486E", lineHeight: 1.6, margin: 0 }}>
                  Send your product requirements (botanical name, quantity in kg/drums, destination port) via our online customized inquiry form.
                </p>
              </div>

              {/* Step 2: Quotation & Technical Verification */}
              <div style={{ backgroundColor: "#FCFAF6", borderRadius: "20px", padding: "24px 22px", border: "1px solid rgba(124, 58, 237, 0.16)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", backgroundColor: "rgba(124, 58, 237, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <Clock size={19} color="#7C3AED" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: "0.98rem", fontWeight: 700, color: "#180D26", margin: "0 0 3px 0", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                      2. Quotation &amp; Verification
                    </h3>
                    <span style={{ fontSize: "0.78rem", color: "#7C3AED", fontWeight: 700, display: "block" }}>
                      Pricing &amp; CoA Dossiers
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: "0.88rem", color: "#5B486E", lineHeight: 1.6, margin: 0 }}>
                  Receive comprehensive lot pricing, Certificates of Analysis (CoA), and pre-shipment evaluation samples for technical verification.
                </p>
              </div>

              {/* Step 3: Confirmation & 48-Hour Dispatch */}
              <div style={{ backgroundColor: "#FCFAF6", borderRadius: "20px", padding: "24px 22px", border: "1px solid rgba(124, 58, 237, 0.16)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", backgroundColor: "rgba(124, 58, 237, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <CheckCircle2 size={19} color="#7C3AED" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: "0.98rem", fontWeight: 700, color: "#180D26", margin: "0 0 3px 0", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                      3. Confirmation &amp; Dispatch
                    </h3>
                    <span style={{ fontSize: "0.78rem", color: "#7C3AED", fontWeight: 700, display: "block" }}>
                      ⚡ 48-Hour Order Dispatch
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: "0.88rem", color: "#5B486E", lineHeight: 1.6, margin: 0 }}>
                  Confirm your order through a formal Proforma Invoice. Consignments are packaged in UN-certified drums and dispatched within 48 hours.
                </p>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <Link
                href="/about/why-us"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#7C3AED",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                View Full Ordering Procedure &rarr;
              </Link>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* CTA Banner */}
        <div
          className="liquid-glass-elevated"
          style={{
            borderRadius: "28px",
            padding: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            boxShadow: "0 16px 48px rgba(24, 13, 38, 0.08)",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "6px" }}>
              Ready to Formulate with Pure Botanicals?
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#5B486E", margin: 0 }}>
              Speak with our technical sales team for custom specifications and container lot quotes.
            </p>
          </div>

          <Link
            href="/contact"
            className="btn-vibrant-primary"
            style={{
              padding: "16px 32px",
              borderRadius: "9999px",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.95rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  );
}
