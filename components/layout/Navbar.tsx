"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  ShoppingBag,
} from "lucide-react";

import Container from "./Container";
import Logo from "./Logo";

import SearchModal from "@/components/search/SearchModal";
import MobileMenu from "@/components/mobile/MobileMenu";

import { NAVIGATION } from "@/constants/navigation";
import { useCart } from "@/context/CartContext";

import type { SearchProduct } from "@/lib/search/products";

export default function Navbar() {
  const { items } = useCart();

  const [searchOpen, setSearchOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [products, setProducts] = useState<SearchProduct[]>([]);

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    if (!searchOpen || products.length > 0) {
      return;
    }

    async function loadProducts() {
      try {
        const response = await fetch("/api/search");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadProducts();
  }, [searchOpen, products.length]);

  return (
    <>
      <header
        className="
          sticky
          top-0
          z-50
          border-b
          border-[var(--border)]
          bg-[rgba(248,244,238,0.94)]
          backdrop-blur-xl
        "
      >
        <Container>
          <div
            className="
              flex
              h-[72px]
              lg:h-[88px]
              items-center
              justify-between
            "
          >
            {/* Left */}

            <div className="flex items-center gap-3 lg:gap-4">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  transition-colors
                  hover:bg-black/5
                  hover:text-[var(--primary)]
                  lg:hidden
                "
                aria-label="Open menu"
              >
                <Menu size={21} strokeWidth={2} />
              </button>

              <Logo />
            </div>

            {/* Desktop Navigation */}

            <nav className="hidden items-center gap-10 lg:flex">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    text-[14px]
                    font-medium
                    text-[var(--text)]
                    transition-colors
                    hover:text-[var(--primary)]
                  "
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right */}

            <div className="flex items-center gap-2 lg:gap-6">
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  transition-colors
                  hover:bg-black/5
                  hover:text-[var(--primary)]
                "
              >
                <Search size={20} strokeWidth={2} />
              </button>

              <Link
                href="/cart"
                aria-label="Cart"
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  transition-colors
                  hover:bg-black/5
                  hover:text-[var(--primary)]
                "
              >
                <ShoppingBag size={20} strokeWidth={2} />

                {cartCount > 0 && (
                  <span
                    className="
                      absolute
                      right-1
                      top-1
                      flex
                      h-[18px]
                      min-w-[18px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--primary)]
                      px-1
                      text-[9px]
                      font-bold
                      text-white
                    "
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </Container>
      </header>

      <SearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={products}
      />

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}