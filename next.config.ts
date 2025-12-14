import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable system TLS certificates for Turbopack to fix Google Fonts loading
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
