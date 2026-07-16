import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qyfntagbyxvfxjnkbarr.supabase.co",
      },
    ],
  },
};

export default nextConfig;