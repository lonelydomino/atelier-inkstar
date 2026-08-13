import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["@atelier-inkstar/catalog", "@atelier-inkstar/config"],
  turbopack: {
    root: path.join(__dirname, "../.."),
  },
};

export default nextConfig;
