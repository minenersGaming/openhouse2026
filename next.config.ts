import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "**",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "**",
      },
      {
        protocol: "https",
        hostname: "i.im.ge",
        port: "**",
      },
      {
        protocol: "https",
        hostname: "static-clubreg.tucm.cc",
        port: "**",
      }
    ]
  }
};

export default nextConfig
