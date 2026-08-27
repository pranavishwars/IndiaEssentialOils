import { NextRequest, NextResponse } from "next/server";
import { getProductsFromDb } from "@/lib/products-db";
import { Product, SLUG_TO_CATEGORY, productStore } from "@/lib/products-store";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const q = (searchParams.get("q") || "").trim().toLowerCase();
  const category = searchParams.get("category");
  const sort = searchParams.get("sort") || "relevance"; // relevance | popularity | name

  // Fetch all products from Postgres with in-memory fallback
  let products = await getProductsFromDb();

  // Filter by category if specified and not "ALL"
  if (category && category !== "ALL") {
    const normalizedCategory = SLUG_TO_CATEGORY[category] || category;
    products = products.filter(p => p.category === normalizedCategory);
  }

  // If no query string, sort according to parameter and return
  if (!q) {
    const sorted = [...products];
    if (sort === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "name_desc") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      // Default relevance
      sorted.sort((a, b) => b.popularityScore - a.popularityScore);
    }
    return NextResponse.json({
      results: sorted,
      total: sorted.length,
    });
  }

  // Split query into search terms
  const terms = q.split(/\s+/).filter(Boolean);

  // Score each product based on text relevance + popularity boost
  interface ScoredProduct {
    product: Product;
    textScore: number;
    totalScore: number;
  }

  const scoredList: ScoredProduct[] = [];

  for (const product of products) {
    const nameLower = product.name.toLowerCase();
    const botLower = (product.botanicalName || "").toLowerCase();
    const descLower = product.description.toLowerCase();
    const specLower = product.shortSpec.toLowerCase();
    const catLower = product.category.toLowerCase().replace(/_/g, " ");

    let textScore = 0;
    let matchesAllTerms = true;

    for (const term of terms) {
      let termMatched = false;

      // Exact name match or prefix
      if (nameLower.startsWith(term)) {
        textScore += 100;
        termMatched = true;
      } else if (nameLower.includes(term)) {
        textScore += 60;
        termMatched = true;
      }

      // Botanical name match
      if (botLower.includes(term)) {
        textScore += 50;
        termMatched = true;
      }

      // Category match
      if (catLower.includes(term)) {
        textScore += 30;
        termMatched = true;
      }

      // Short spec / origin match
      if (specLower.includes(term)) {
        textScore += 25;
        termMatched = true;
      }

      // Description match
      if (descLower.includes(term)) {
        textScore += 15;
        termMatched = true;
      }

      if (!termMatched) {
        matchesAllTerms = false;
      }
    }

    // Only include products that match all search terms
    if (matchesAllTerms && textScore > 0) {
      const popularityBoost = (product.popularityScore / 100) * 20; // Up to 20 boost points
      const totalScore = textScore + popularityBoost;

      scoredList.push({
        product,
        textScore,
        totalScore,
      });

      // Fire search impression for matched products
      productStore.logEvent(product.id, "SEARCH_IMPRESSION");
    }
  }

  // Sort results based on selected sort option
  if (sort === "name") {
    scoredList.sort((a, b) => a.product.name.localeCompare(b.product.name));
  } else if (sort === "name_desc") {
    scoredList.sort((a, b) => b.product.name.localeCompare(a.product.name));
  } else {
    // Relevance (default)
    scoredList.sort((a, b) => b.totalScore - a.totalScore);
  }

  return NextResponse.json({
    results: scoredList.map(s => s.product),
    total: scoredList.length,
    query: q,
  });
}
