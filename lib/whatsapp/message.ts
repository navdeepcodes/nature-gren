/** NatureGren's WhatsApp number (+1 469 350 6400), digits only. */
export const WHATSAPP_NUMBER = "14693506400";

/** wa.me link to NatureGren, optionally with a prefilled message. */
export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

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

I'm interested in the following product:

Product: ${product.name}
Quantity: ${quantity}

Product Link:
${productUrl}

Could you please provide more information about this product, including its price, availability, specifications, delivery charges, and estimated delivery time?

Thank you. I look forward to your response.`;

  const params = new URLSearchParams({
    phone: WHATSAPP_NUMBER,
    text: message,
  });

  return `https://api.whatsapp.com/send?${params.toString()}`;
}