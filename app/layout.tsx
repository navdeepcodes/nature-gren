import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";

import "./globals.css";

import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://naturegren.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NatureGren",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description:
    "Premium handcrafted eco-friendly jute products.",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default:
      "NatureGren | Premium Handcrafted Jute Products",
    template: "%s | NatureGren",
  },

  description:
    "Discover premium handcrafted jute bags, home décor, lifestyle products and eco-friendly solutions made with sustainability and timeless craftsmanship.",

  keywords: [
    "NatureGren",
    "Jute Bags",
    "Handcrafted Jute Products",
    "Eco Friendly Products",
    "Sustainable Bags",
    "Jute Shopping Bags",
    "Jute Home Decor",
    "Natural Fiber Products",
    "Reusable Bags",
    "India",
  ],

  authors: [
    {
      name: "NatureGren",
    },
  ],

  creator: "NatureGren",

  publisher: "NatureGren",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "NatureGren",

    title:
      "NatureGren | Premium Handcrafted Jute Products",

    description:
      "Premium handcrafted jute products designed with sustainability, elegance and everyday functionality.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NatureGren",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "NatureGren",

    description:
      "Premium handcrafted eco-friendly jute products.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              organizationSchema
            ),
          }}
        />
      </head>

      <body
        className={`${inter.variable} ${cormorant.variable}`}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}