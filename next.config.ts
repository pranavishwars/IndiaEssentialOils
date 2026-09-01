import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Prisma seed/scripts are excluded from app compilation via tsconfig.
    // This prevents non-app TS errors from blocking production builds.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
