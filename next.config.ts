import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Explicitly using webpack (Turbopack is not enabled)
  // @ts-expect-error - eslint property exists at runtime but not in NextConfig type
  eslint: {
    // Ignore ESLint errors during builds to avoid rushstack patching issues with ESLint 9
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
