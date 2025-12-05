import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for static site deployment on Digital Ocean
  // Use default 'out' directory for static export (Digital Ocean expects this)
  // distDir: 'dist', // Commented out to use default 'out' directory
  trailingSlash: true, // Ensure trailing slashes for static export
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
