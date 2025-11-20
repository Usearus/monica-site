import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Explicitly using webpack (Turbopack is not enabled)
  eslint: {
    // Ignore ESLint errors during builds to avoid rushstack patching issues with ESLint 9
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
