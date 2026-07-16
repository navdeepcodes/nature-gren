"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function CartBadge() {
  const { items } = useCart();

  const count = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Link
      href="/cart"
      className="relative"
    >
      <ShoppingBag size={20} />

      {count > 0 && (
        <span
          className="
            absolute
            -right-2
            -top-2
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            bg-[var(--primary)]
            text-[10px]
            font-bold
            text-white
          "
        >
          {count}
        </span>
      )}
    </Link>
  );
}