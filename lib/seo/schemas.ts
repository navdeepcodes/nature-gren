import { SITE } from "./metadata";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: SITE.name,

    url: SITE.url,

    logo: `${SITE.url}/logo.png`,

    image: `${SITE.url}${SITE.image}`,

    description: SITE.description,
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: SITE.name,

    url: SITE.url,

    description: SITE.description,

    publisher: {
      "@type": "Organization",
      name: SITE.name,
    },

    inLanguage: "en-US",

    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/shop?search={search_term_string}`,
      "query-input":
        "required name=search_term_string",
    },
  };
}