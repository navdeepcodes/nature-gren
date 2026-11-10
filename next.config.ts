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

  // www.naturegren.com is the canonical host; send the bare domain there.
  // The host value must be anchored: OpenNext tests it as an unanchored
  // regex, so a plain "naturegren.com" also matches www. The root path gets
  // its own rule because "/:path*" leaves a literal ":path*" for "/".
  async redirects() {
    const apex = [{ type: "host" as const, value: "^naturegren\\.com$" }];
    return [
      {
        source: "/",
        has: apex,
        destination: "https://www.naturegren.com/",
        permanent: true,
      },
      {
        source: "/:path+",
        has: apex,
        destination: "https://www.naturegren.com/:path+",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;