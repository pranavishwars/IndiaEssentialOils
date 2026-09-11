import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blog-data";
import { ArrowLeft, Clock, Calendar, User, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", paddingTop: "110px", paddingBottom: "90px" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>

        {/* Back Link */}
        <Link
          href="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: "#7C3AED",
            fontSize: "0.88rem",
            fontWeight: 700,
            textDecoration: "none",
            marginBottom: "24px",
            transition: "gap 0.2s",
          }}
        >
          <ArrowLeft size={16} /> Back to Knowledge Hub
        </Link>

        {/* Article Container */}
        <article
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.80)",
            backdropFilter: "blur(24px) saturate(160%)",
            WebkitBackdropFilter: "blur(24px) saturate(160%)",
            border: "1px solid rgba(124, 58, 237, 0.2)",
            borderRadius: "28px",
            padding: "48px",
            boxShadow: "0 12px 40px rgba(24, 13, 38, 0.06)",
            marginBottom: "40px",
          }}
        >
          {/* Category & Time */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "0.75rem",
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
            <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.82rem", color: "#5B486E" }}>
              <Clock size={13} color="#7C3AED" /> {post.readTime}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.82rem", color: "#5B486E" }}>
              <Calendar size={13} color="#7C3AED" /> {post.publishedDate}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontFamily: "var(--font-lora), Georgia, serif",
              fontWeight: 700,
              color: "#180D26",
              lineHeight: 1.25,
              marginBottom: "20px",
            }}
          >
            {post.title}
          </h1>

          {/* Author Card */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", borderBottom: "1px solid rgba(124, 58, 237, 0.15)", paddingBottom: "24px", marginBottom: "32px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", boxShadow: "0 2px 8px rgba(24, 13, 38, 0.15)" }}>
              <User size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "#180D26", fontSize: "0.98rem" }}>{post.author.name}</div>
              <div style={{ fontSize: "0.8rem", color: "#5B486E" }}>{post.author.role} · Mother Herbs Pvt. Ltd.</div>
            </div>
          </div>

          {/* Article HTML Content */}
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#180D26",
            }}
          />

          <style>{`
            .article-body h2 {
              font-family: var(--font-lora), Georgia, serif;
              color: #180D26;
              font-size: 1.5rem;
              margin-top: 36px;
              margin-bottom: 14px;
              font-weight: 700;
            }
            .article-body h3 {
              font-family: var(--font-lora), Georgia, serif;
              color: #180D26;
              font-size: 1.2rem;
              margin-top: 24px;
              margin-bottom: 10px;
              font-weight: 700;
            }
            .article-body p {
              margin-bottom: 18px;
              color: #3B2A4E;
            }
            .article-body ul {
              margin-bottom: 24px;
              padding-left: 24px;
            }
            .article-body li {
              margin-bottom: 10px;
              line-height: 1.7;
              color: #3B2A4E;
            }
          `}</style>
        </article>

        {/* Bottom CTA Card */}
        <div
          style={{
            backgroundColor: "#180D26",
            borderRadius: "24px",
            padding: "36px 40px",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            boxShadow: "0 14px 44px rgba(24, 13, 38, 0.25)",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", marginBottom: "6px", color: "#C4B5FD" }}>
              Need Custom Formulation or Bulk Sourcing?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.92rem", margin: 0 }}>
              Speak with our botanical lab experts to request custom GC-MS specs and wholesale quotes.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-vibrant-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              textDecoration: "none",
              fontWeight: 700,
              padding: "12px 28px",
              borderRadius: "9999px",
              fontSize: "0.9rem",
              whiteSpace: "nowrap",
            }}
          >
            Contact Us <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  );
}
