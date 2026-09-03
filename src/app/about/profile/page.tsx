import React from "react";
import Link from "next/link";
import { Footer } from "@/components/server/Footer";
import { 
  Building2, 
  ArrowRight,
  ChevronRight
} from "lucide-react";

export const metadata = {
  title: "Company Profile | India Essential Oils (Mother Herbs)",
  description: "Company Profile of India Essential Oils, a division of Mother Herbs Pvt. Ltd. Leading Natural Medicinal & Cosmetic Herbs, Essential Oils & Oleoresins supplier.",
};

export default function ProfilePage() {
  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <main style={{ flex: 1, padding: "20px 24px 80px", maxWidth: "1040px", margin: "0 auto", width: "100%" }}>

        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#5B486E", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>Home</Link>
          <ChevronRight size={14} />
          <Link href="/about" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: 600 }}>About</Link>
          <ChevronRight size={14} />
          <span style={{ color: "#180D26", fontWeight: 700 }}>Profile</span>
        </div>

        {/* Hero Header */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
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
            <Building2 size={14} color="#7C3AED" /> Corporate Profile
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
            Company Profile
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#5B486E", maxWidth: "800px", margin: "0 auto", lineHeight: 1.7 }}>
            A Division of <strong>Mother Herbs Pvt. Ltd.</strong>
          </p>
        </div>

        {/* Main Company Profile Card (Using Only the Specified Information) */}
        <div
          className="liquid-glass-elevated"
          style={{
            borderRadius: "32px",
            padding: "clamp(32px, 5vw, 56px)",
            backgroundColor: "rgba(255, 255, 255, 0.94)",
            border: "1.5px solid rgba(124, 58, 237, 0.22)",
            boxShadow: "0 20px 60px rgba(24, 13, 38, 0.08)",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              fontSize: "1.08rem",
              color: "#3B284C",
              lineHeight: 1.9,
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <p style={{ margin: 0 }}>
              India Essential Oils is a Division of Mother Herbs Pvt. Ltd. Mother Herbs has been involved in almost every aspect of Herbal supply chain, from agricultural production to International Commodity Trading. We are one of India&apos;s leading Natural Medicinal, Cosmetic Herbs &amp; Extract Suppliers. We are committed to offering the highest quality, therapeutic-grade, 100% natural botanicals &amp; innovative range of Essential oils, Aromatherapy products, Oleoresins to real seekers of purity. Essential Oils was a natural gateway for Mother Herbs, in command of vast Natural Resources of India. Mother Herbs promises to offer Natures best in value added form, still maintaining the purity and sanctity of Natural Materials.
            </p>

            <p style={{ margin: 0 }}>
              India Essential Oils was started 5 years ago as a company identified with our capabilities to meet the increasing demands for Essential Oils &amp; Oleoresins Products of Food, Pharmaceutical, Perfumery, Flavor and Cosmetic industry in India and Overseas. With a view to preserve the environment by sustained efforts in pollution control and conservation.
            </p>

            <p style={{ margin: 0 }}>
              We are the India Essential Oils was established with a view to prove itself as one of the India&apos;s leading names in the field of Herbal &amp; Essential Oils, Carrier Oils, Floral Water &amp; Spices Oils &amp; Oleoresins with our promise of quality products that stay ahead of time.
            </p>

            <p style={{ margin: 0 }}>
              Now we have built a solid reputation in supplying 100% Pure &amp; Natural Essential Oils &amp; Oleoresins worldwide which resulted having business with several corporate and good clients overseas with almost 95% buyer retention and 90% repeat orders.
            </p>

            <p style={{ margin: 0 }}>
              India Essential Oils work on the solid foundation of the very latest technology and the best equipment, supported by a team of highly qualified and well-trained personnel.
            </p>

            <p style={{ margin: 0 }}>
              Our industries R&amp;D team strive everyday for process up-gradation, product improvisation and development of new products. They have sharp eye to identify the perfect location for the cultivation of crops based on suitable climatic and soil conditions. we also carefully monitor the transit of raw materials from field to factory to ensure that the freshness and potency of active ingredients are preserved.
            </p>

            <p style={{ margin: 0 }}>
              India Essential Oils promotes cultivation of raw material in specified areas as per customer requirements. The company provides technical guidance to farmers and directs them on the usage of approved pesticides and fertilizers.
            </p>

            <p style={{ margin: 0 }}>
              The impetus has always been on eco friendly practices and reduction of harmful chemical usage during cultivation.
            </p>
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
              The Trust We&apos;ve Built
            </h3>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/about/trust-we-built"
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
              The Trust We&apos;ve Built <ArrowRight size={14} />
            </Link>

            <Link
              href="/about"
              style={{
                padding: "12px 20px",
                borderRadius: "9999px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.88rem",
                color: "#7C3AED",
                backgroundColor: "rgba(124, 58, 237, 0.1)",
                border: "1px solid rgba(124, 58, 237, 0.25)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              All About Sections
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
