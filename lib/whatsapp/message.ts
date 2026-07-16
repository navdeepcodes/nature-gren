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

  const message = `Hello NatureGren 👋

I'm interested in the following product:

━━━━━━━━━━━━━━━━━━

📦 ${product.name}
🔗 ${productUrl}
📦 Quantity: ${quantity}

━━━━━━━━━━━━━━━━━━

Please share:

• Price
• Delivery Charges
• Estimated Delivery Time

Thank you!`;

  return `https://wa.me/${PHONE}?text=${encodeURIComponent(
    message
  )}`;
}