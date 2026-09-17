export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  name: "NatureGren",

  url: "https://www.naturegren.com",

  potentialAction: {
    "@type": "SearchAction",
    target:
      "https://www.naturegren.com/shop?search={search_term_string}",

    "query-input":
      "required name=search_term_string",
  },
};