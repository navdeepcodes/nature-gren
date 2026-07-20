interface Breadcrumb {
  name: string;
  url: string;
}

export function createBreadcrumbSchema(
  items: Breadcrumb[]
) {
  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: items.map(
      (item, index) => ({
        "@type": "ListItem",

        position: index + 1,

        name: item.name,

        item: item.url,
      })
    ),
  };
}