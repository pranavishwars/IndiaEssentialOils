import { LRUCache } from "lru-cache";
import { Redis } from "@upstash/redis";

export interface CacheStats {
  hits: number;
  misses: number;
  stamps: number;
  keysCount: number;
  driver: "memory" | "hybrid-redis";
}

// 1. Process-level LRU In-Memory Cache (persists in Node.js server, warm lambdas, container runtimes)
const memoryCache = new LRUCache<string, any>({
  max: 1500, // Up to 1500 cached entries (covers all 273 products, categories, search queries, etc.)
  ttl: 1000 * 60 * 15, // Default 15 minutes TTL
  allowStale: false,
  updateAgeOnGet: false,
});

// 2. Serverless / Edge distributed Redis fallback (Upstash REST client)
// If UPSTASH_REDIS_REST_URL & UPSTASH_REDIS_REST_TOKEN or KV_REST_API_* are configured,
// it enables distributed cache synchronization across multiple serverless lambda instances.
let redisClient: Redis | null = null;
const redisUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

if (redisUrl && redisToken) {
  try {
    redisClient = new Redis({
      url: redisUrl,
      token: redisToken,
    });
    console.log("[Cache] Initialized Upstash Redis distributed caching driver.");
  } catch (err) {
    console.warn("[Cache] Failed to initialize Upstash Redis, falling back to in-memory:", err);
  }
}

// Runtime metrics tracking
let hits = 0;
let misses = 0;
let stamps = 0;

// Promise deduplication map to prevent cache stampedes / thundering herds
const inflightFetches = new Map<string, Promise<any>>();

/**
 * Executes the Cache-Aside pattern:
 * 1. Checks process-level memory first (0ms latency, 0 compute, 0 network).
 * 2. If Redis is enabled and memory misses, checks external Redis.
 * 3. If missed everywhere, deduplicates concurrent executions with a single DB query (Stampede Protection).
 * 4. Caches result in memory (and Redis) for `ttlSeconds`.
 *
 * @param key Unique cache key (e.g. `product:slug:lavender-essential-oil`)
 * @param ttlSeconds Expiration duration in seconds
 * @param fetchFn Asynchronous fallback query to Neon Postgres
 */
export async function getOrSetCache<T>(
  key: string,
  ttlSeconds: number,
  fetchFn: () => Promise<T>
): Promise<T> {
  // 1. Check in-memory LRU cache
  const cached = memoryCache.get(key) as T | undefined;
  if (cached !== undefined) {
    hits++;
    return cached;
  }

  // 2. Check distributed Redis if available
  if (redisClient) {
    try {
      const redisVal = await redisClient.get<T>(key);
      if (redisVal !== null && redisVal !== undefined) {
        hits++;
        // Populate local memory cache for instant subsequent hits in this process
        memoryCache.set(key, redisVal, { ttl: ttlSeconds * 1000 });
        return redisVal;
      }
    } catch (err) {
      console.warn(`[Cache] Redis read error for key "${key}":`, err);
    }
  }

  // 3. Cache Miss - Apply Singleflight / Stampede protection
  misses++;

  if (inflightFetches.has(key)) {
    stamps++;
    return inflightFetches.get(key) as Promise<T>;
  }

  const fetchPromise = (async () => {
    try {
      const freshData = await fetchFn();
      
      // Store in memory cache
      if (freshData !== undefined) {
        memoryCache.set(key, freshData, { ttl: ttlSeconds * 1000 });
      }

      // Store in Redis in background (non-blocking)
      if (redisClient && freshData !== undefined) {
        redisClient.set(key, freshData, { ex: ttlSeconds }).catch((err) => {
          console.warn(`[Cache] Redis write error for key "${key}":`, err);
        });
      }

      return freshData;
    } finally {
      inflightFetches.delete(key);
    }
  })();

  inflightFetches.set(key, fetchPromise);
  return fetchPromise;
}

/**
 * Manually sets a value in cache.
 */
export async function setCache<T>(key: string, value: T, ttlSeconds: number): Promise<void> {
  memoryCache.set(key, value, { ttl: ttlSeconds * 1000 });
  if (redisClient) {
    try {
      await redisClient.set(key, value, { ex: ttlSeconds });
    } catch (err) {
      console.warn(`[Cache] Redis set error for key "${key}":`, err);
    }
  }
}

/**
 * Deletes a key from cache.
 */
export async function invalidateCacheKey(key: string): Promise<void> {
  memoryCache.delete(key);
  if (redisClient) {
    try {
      await redisClient.del(key);
    } catch (err) {
      console.warn(`[Cache] Redis delete error for key "${key}":`, err);
    }
  }
}

/**
 * Invalidates all keys matching a prefix (e.g. `products:` or `search:`).
 */
export async function invalidateCachePrefix(prefix: string): Promise<void> {
  // Invalidate matching keys in memory
  for (const key of memoryCache.keys()) {
    if (key.startsWith(prefix)) {
      memoryCache.delete(key);
    }
  }

  // Invalidate in Redis if active
  if (redisClient) {
    try {
      const keys = await redisClient.keys(`${prefix}*`);
      if (keys.length > 0) {
        await redisClient.del(...keys);
      }
    } catch (err) {
      console.warn(`[Cache] Redis prefix delete error for "${prefix}":`, err);
    }
  }
}

/**
 * Aliases for uniform naming across service layers
 */
export const invalidateCache = invalidateCacheKey;
export const invalidatePattern = invalidateCachePrefix;

/**
 * Clears the entire cache.
 */
export async function clearEntireCache(): Promise<void> {
  memoryCache.clear();
  inflightFetches.clear();
  if (redisClient) {
    try {
      await redisClient.flushdb();
    } catch (err) {
      console.warn("[Cache] Redis flush error:", err);
    }
  }
}

/**
 * Returns cache diagnostics and efficiency metrics.
 */
export function getCacheDiagnostics(): CacheStats {
  return {
    hits,
    misses,
    stamps,
    keysCount: memoryCache.size,
    driver: redisClient ? "hybrid-redis" : "memory",
  };
}
