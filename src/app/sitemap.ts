import { MetadataRoute } from "next";
import { INITIAL_PRODUCTS, getCategorySlug, CATEGORY_SLUGS } from "@/lib/products-store";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://indiaessentialoils.com";
  const now = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/products",
    "/about",
    "/infrastructure",
    "/packaging",
    "/certifications",
    "/quality",
    "/reviews",
    "/blog",
    "/faqs",
    "/contact",
    "/privacy",
    "/terms",
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/products" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/products" ? 0.9 : 0.8,
  }));

  // Category Hubs
  const categoryRoutes: MetadataRoute.Sitemap = Object.values(CATEGORY_SLUGS).map(slug => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Product detail pages (all 21+ catalog items)
  const productRoutes: MetadataRoute.Sitemap = INITIAL_PRODUCTS.map(product => {
    const catSlug = getCategorySlug(product.category);
    return {
      url: `${baseUrl}/products/${catSlug}/${product.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  // Blog post pages
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate || now),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...blogRoutes];
}
