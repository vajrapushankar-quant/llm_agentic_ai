import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed 'output: export' to enable API routes and server-side features
  // This allows the app to run as a Node.js web application
  images: {
    unoptimized: true, // Keep unoptimized for Digital Ocean compatibility
  },
};

export default nextConfig;
