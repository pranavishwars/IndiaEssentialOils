import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Google-Extended", "Applebot-Extended", "CCBot"],
        allow: ["/", "/llms.txt", "/llms-full.txt", "/products", "/batch-lookup", "/about", "/certifications", "/quality"],
        disallow: ["/admin", "/api/"],
      },
    ],
    sitemap: "https://indiaessentialoils.com/sitemap.xml",
  };
}
