import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";

import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import { generateMetadata, SITE } from "@/lib/seo/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  ...generateMetadata(),

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}#organization`,

  name: SITE.name,
  url: SITE.url,

  logo: {
    "@type": "ImageObject",
    url: `${SITE.url}/logo.png`,
    width: 512,
    height: 512,
  },

  image: {
    "@type": "ImageObject",
    url: `${SITE.url}/logo.png`,
    width: 512,
    height: 512,
  },

  description: SITE.description,

  sameAs: [
    // "https://www.facebook.com/naturegren",
    // "https://www.instagram.com/naturegren",
    // "https://www.linkedin.com/company/naturegren",
    // "https://www.pinterest.com/naturegren",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}#website`,

  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  inLanguage: "en-US",

  publisher: {
    "@id": `${SITE.url}#organization`,
  },

  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/shop?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>

      <body className={`${inter.variable} ${cormorant.variable}`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}