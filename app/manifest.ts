import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NatureGren",
    short_name: "NatureGren",

    description:
      "Premium handcrafted sustainable jute products.",

    start_url: "/",

    display: "standalone",

    background_color: "#F6F2EC",

    theme_color: "#1F2B1D",

    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}