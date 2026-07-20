const PHONE = "917019493960";

export interface WhatsAppProduct {
  name: string;
  slug: string;
}

export function createWhatsAppLink(
  product: WhatsAppProduct,
  quantity = 1
) {
  const website =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000";

  const productUrl = `${website}/shop/${product.slug}`;

  const message = `Hello NatureGren,

I'm interested in purchasing the following product:

Product: ${product.name}
Quantity: ${quantity}

Product Link:
${productUrl}

Could you please provide more information about this product, including its price, availability, specifications, delivery charges, and estimated delivery time?

Thank you. I look forward to your response.`;

  return `https://wa.me/${PHONE}?text=${encodeURIComponent(
    message
  )}`;
}