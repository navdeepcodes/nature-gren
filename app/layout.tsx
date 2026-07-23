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

export const metadata: Metadata = generateMetadata();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: SITE.name,

  url: SITE.url,

  logo: `${SITE.url}/logo.png`,

  image: `${SITE.url}${SITE.image}`,

  description: SITE.description,

  sameAs: [
    // Add your official social URLs when available
    // "https://www.facebook.com/naturegren",
    // "https://www.instagram.com/naturegren",
    // "https://www.linkedin.com/company/naturegren",
    // "https://www.pinterest.com/naturegren",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  name: SITE.name,

  url: SITE.url,

  description: SITE.description,

  inLanguage: "en-US",

  publisher: {
    "@type": "Organization",
    name: SITE.name,
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