"use client";

import { ShoppingBag } from "lucide-react";

import WhatsAppButton from "@/components/common/WhatsAppButton";
import { useCart } from "@/context/CartContext";

interface ProductActionsProps {
  productId: string;
  productName: string;
  productSlug: string;
  imageUrl: string | null;
}

export default function ProductActions({
  productId,
  productName,
  productSlug,
  imageUrl,
}: ProductActionsProps) {
  const { addItem } = useCart();

  function handleAddToCart() {
    addItem({
      id: productId,
      name: productName,
      slug: productSlug,
      image_url: imageUrl,
    });
  }

  return (
    <div className="mt-10 space-y-4">
      <button
        onClick={handleAddToCart}
        className="
          flex
          h-14
          w-full
          items-center
          justify-center
          gap-3
          rounded-full
          bg-[var(--primary)]
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:bg-[var(--primary-hover)]
        "
      >
        <ShoppingBag size={18} />

        Add to Cart
      </button>

      <WhatsAppButton
        name={productName}
        slug={productSlug}
      />

      <p className="text-center text-sm leading-6 text-[var(--text-muted)]">
        Looking for bulk orders, custom branding, or wholesale pricing?
        Contact us directly on WhatsApp for a personalized quotation.
      </p>
    </div>
  );
}