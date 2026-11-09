import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export: the site has no server features (no API routes, no DB),
  // so it can be built into plain HTML/CSS/JS and hosted on GitHub Pages
  // or any static host.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
