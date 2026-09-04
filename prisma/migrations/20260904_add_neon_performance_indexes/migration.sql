-- Migration: 20260904_add_neon_performance_indexes
-- Description: Adds strategic B-tree and composite indexes to eliminate full table scans,
-- optimize foreign key joins, and reduce Neon Compute Unit (CU) hours.

-- 1. Product Indexes for Sorting and Filtering
CREATE INDEX IF NOT EXISTS "Product_popularityScore_idx" ON "Product"("popularityScore" DESC);
CREATE INDEX IF NOT EXISTS "Product_category_popularityScore_idx" ON "Product"("category", "popularityScore" DESC);
CREATE INDEX IF NOT EXISTS "Product_featured_idx" ON "Product"("featured");

-- 2. ProductEvent Indexes for Foreign Keys and 90-Day Analytics Window
CREATE INDEX IF NOT EXISTS "ProductEvent_productId_idx" ON "ProductEvent"("productId");
CREATE INDEX IF NOT EXISTS "ProductEvent_createdAt_idx" ON "ProductEvent"("createdAt" DESC);
CREATE INDEX IF NOT EXISTS "ProductEvent_productId_type_createdAt_idx" ON "ProductEvent"("productId", "type", "createdAt" DESC);

-- 3. Inquiry Indexes for Cron Queue Processing and Audits
CREATE INDEX IF NOT EXISTS "Inquiry_emailStatus_createdAt_idx" ON "Inquiry"("emailStatus", "createdAt" ASC);
CREATE INDEX IF NOT EXISTS "Inquiry_createdAt_idx" ON "Inquiry"("createdAt" DESC);
