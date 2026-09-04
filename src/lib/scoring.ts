import { productStore, Product } from "./products-store";
import prisma from "./prisma";

export interface ScoringResult {
  productId: string;
  productName: string;
  views90d: number;
  searchImpressions90d: number;
  inquiries90d: number;
  quotes90d: number;
  rawScore: number;
  normalizedScore: number;
}

/**
 * Calculates popularity scores across all products according to Section 6.1 of the Build Spec:
 * score = (0.5 * inquiries_90d) + (0.3 * quotes_90d) + (0.2 * views_90d)
 * normalized 0-100 across catalog.
 */
export async function calculatePopularityScores(): Promise<{
  timestamp: string;
  productsUpdated: number;
  results: ScoringResult[];
}> {
  const products = productStore.getAll();
  const events = productStore.getEventsTrailing90Days();

  // Aggregate counts per product
  const counts: Record<string, { views: number; impressions: number; inquiries: number; quotes: number }> = {};

  products.forEach(p => {
    counts[p.id] = { views: 0, impressions: 0, inquiries: 0, quotes: 0 };
  });

  events.forEach(e => {
    if (!counts[e.productId]) {
      counts[e.productId] = { views: 0, impressions: 0, inquiries: 0, quotes: 0 };
    }
    if (e.type === "VIEW") counts[e.productId].views++;
    if (e.type === "SEARCH_IMPRESSION") counts[e.productId].impressions++;
    if (e.type === "INQUIRY") counts[e.productId].inquiries++;
    if (e.type === "ADD_TO_QUOTE") counts[e.productId].quotes++;
  });

  // Calculate raw scores
  const rawResults = products.map(product => {
    const stat = counts[product.id] || { views: 0, impressions: 0, inquiries: 0, quotes: 0 };
    // Weightings: 0.5 * inquiries + 0.3 * quotes + 0.2 * views
    const rawScore = (0.5 * stat.inquiries) + (0.3 * stat.quotes) + (0.2 * stat.views);
    return {
      productId: product.id,
      productName: product.name,
      views90d: stat.views,
      searchImpressions90d: stat.impressions,
      inquiries90d: stat.inquiries,
      quotes90d: stat.quotes,
      rawScore,
      normalizedScore: 0,
    };
  });

  // Find max score for normalization
  const maxRawScore = Math.max(...rawResults.map(r => r.rawScore), 1);

  // Normalize to 0-100 range and round
  const finalResults: ScoringResult[] = rawResults.map(r => ({
    ...r,
    normalizedScore: Math.round((r.rawScore / maxRawScore) * 100),
  }));

  // Update in-memory product store
  const scoreMap: Record<string, number> = {};
  finalResults.forEach(r => {
    scoreMap[r.productId] = r.normalizedScore;
  });
  productStore.updatePopularityScores(scoreMap);

  // Attempt database sync if connected (batched in single transaction for zero redundant CU)
  try {
    if (prisma) {
      const updates = finalResults
        .filter(res => {
          const prod = products.find(p => p.id === res.productId);
          return prod && prod.popularityScore !== res.normalizedScore;
        })
        .map(res => {
          const slug = products.find(p => p.id === res.productId)?.slug;
          return prisma!.product.updateMany({
            where: { slug },
            data: { popularityScore: res.normalizedScore },
          });
        });

      if (updates.length > 0) {
        await prisma.$transaction(updates).catch(() => {});
        // Invalidate cached product queries so updated scores are immediately visible
        const { invalidateProductsCache } = await import("./products-db");
        await invalidateProductsCache();
      }
    }
  } catch (err) {
    // Graceful offline fallback
  }

  return {
    timestamp: new Date().toISOString(),
    productsUpdated: finalResults.length,
    results: finalResults.sort((a, b) => b.normalizedScore - a.normalizedScore),
  };
}
