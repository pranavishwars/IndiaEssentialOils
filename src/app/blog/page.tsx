"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, ArrowRight, User } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", "Formulation", "Quality & Testing", "Sourcing"];

  const filteredPosts = selectedCategory === "ALL"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === selectedCategory);

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", paddingTop: "110px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontFamily: "var(--font-lora), Georgia, serif",
              fontWeight: 700,
              color: "#180D26",
              marginBottom: "16px",
            }}
          >
            Botanical Science & B2B Sourcing
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#5B486E", maxWidth: "680px", margin: "0 auto", lineHeight: 1.6 }}>
            Technical whitepapers, chemical analysis tutorials, IFRA formulation ratios, and extraction science from our senior botanists and quality assurance directors.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "40px", flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)" : "rgba(255,255,255,0.9)",
                color: selectedCategory === cat ? "white" : "#180D26",
                border: selectedCategory === cat ? "1px solid #7C3AED" : "1px solid rgba(124, 58, 237, 0.25)",
                padding: "8px 22px",
                borderRadius: "9999px",
                fontSize: "0.88rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: selectedCategory === cat ? "0 4px 14px rgba(124, 58, 237, 0.35)" : "none",
                transition: "all 0.2s ease",
              }}
            >
              {cat === "ALL" ? "All Articles" : cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "28px" }}>
          {filteredPosts.map(post => (
            <article
              key={post.slug}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.74)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                borderRadius: "24px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 6px 24px rgba(24, 13, 38, 0.04)",
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 18px 45px rgba(124, 58, 237, 0.18)";
                e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.35)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(24, 13, 38, 0.04)";
                e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.18)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <span
                  style={{
                    fontSize: "0.725rem",
                    fontWeight: 800,
                    color: "#7C3AED",
                    backgroundColor: "rgba(124, 58, 237, 0.1)",
                    border: "1px solid rgba(124, 58, 237, 0.2)",
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {post.category}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.75rem", color: "#5B486E" }}>
                  <Clock size={12} color="#7C3AED" /> {post.readTime}
                </div>
              </div>

              <h2 style={{ fontSize: "1.3rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "10px", lineHeight: 1.3 }}>
                <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                  {post.title}
                </Link>
              </h2>

              <p style={{ fontSize: "0.9rem", color: "#5B486E", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
                {post.excerpt}
              </p>

              <div style={{ borderTop: "1px solid rgba(124, 58, 237, 0.12)", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#180D26", fontWeight: 700 }}>
                  <User size={14} color="#7C3AED" /> {post.author.name}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#7C3AED",
                    textDecoration: "none",
                    transition: "gap 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.gap = "7px")}
                  onMouseLeave={e => (e.currentTarget.style.gap = "4px")}
                >
                  Read Guide <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
