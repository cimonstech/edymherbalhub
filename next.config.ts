import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Completely disable image optimization
    unoptimized: true,
  },
  // Disable the image optimization route entirely
  async rewrites() {
    return [];
  },
};

export default nextConfig;
