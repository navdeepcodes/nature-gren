"use client";

import Link from "next/link";
import { X, ShoppingBag } from "lucide-react";

import { NAVIGATION } from "@/constants/navigation";
import { useCart } from "@/context/CartContext";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const { items } = useCart();

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[100]
        bg-black/40
        backdrop-blur-sm
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          absolute
          right-0
          top-0
          flex
          h-full
          w-[320px]
          flex-col
          bg-white
          shadow-2xl
        "
      >
        <div className="flex items-center justify-between border-b p-6">
          <h2 className="font-serif text-2xl">
            Menu
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 px-6 py-8">
          <div className="space-y-6">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="
                  block
                  text-lg
                  font-medium
                  transition-colors
                  hover:text-[var(--primary)]
                "
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/cart"
              onClick={onClose}
              className="
                flex
                items-center
                gap-3
                pt-6
                text-lg
                font-medium
              "
            >
              <ShoppingBag size={20} />

              Cart

              {cartCount > 0 && (
                <span
                  className="
                    rounded-full
                    bg-[var(--primary)]
                    px-2
                    py-0.5
                    text-xs
                    font-semibold
                    text-white
                  "
                >
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </nav>

        <div className="border-t p-6">
          <p className="text-sm text-gray-500">
            Premium handcrafted jute products.
          </p>
        </div>
      </div>
    </div>
  );
}