import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
  images: {
    unoptimized: true, // <-- This is the key fix
  },
};

export default nextConfig;
