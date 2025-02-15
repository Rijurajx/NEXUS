import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["assets.aceternity.com"], // ✅ Add external image domain
  },
};

export default nextConfig;
