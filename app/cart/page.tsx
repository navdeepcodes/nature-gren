"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Minus,
  Plus,
  Trash2,
  ArrowLeft,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/homepage/Footer";
import Container from "@/components/layout/Container";

import { useCart } from "@/context/CartContext";

const PHONE = "917019493960";

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    clear,
  } = useCart();

  function sendInquiry() {
    if (items.length === 0) return;

    const base =
      process.env.NEXT_PUBLIC_SITE_URL ??
      window.location.origin;

    let message = `Hello NatureGren 👋

I'd like to enquire about the following products:

━━━━━━━━━━━━━━━━━━

`;

    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}

Quantity: ${item.quantity}

${base}/shop/${item.slug}

━━━━━━━━━━━━━━━━━━

`;
    });

    message += `Please share:

• Pricing
• Delivery Charges
• Estimated Delivery Time

Thank you.`;

    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#fcfaf7] py-16 lg:py-20">
        <Container>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--primary)]">
                Shopping Cart
              </p>

              <h1 className="mt-3 font-serif text-4xl text-[var(--text)] md:text-5xl">
                Your Selected Products
              </h1>

              <p className="mt-4 text-[var(--text-muted)]">
                {items.length} Product
                {items.length !== 1 && "s"} in your cart
              </p>
            </div>

            {items.length > 0 && (
              <button
                onClick={clear}
                className="text-sm font-medium text-red-500 transition hover:text-red-700"
              >
                Clear Cart
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="mt-16 rounded-[32px] border border-dashed border-[var(--border)] bg-white px-8 py-24 text-center">
              <ShoppingBag
                size={56}
                className="mx-auto text-[var(--primary)]"
              />

              <h2 className="mt-6 text-3xl font-semibold">
                Your cart is empty
              </h2>

              <p className="mx-auto mt-4 max-w-md text-[var(--text-muted)]">
                Browse our handcrafted collection and add your favourite
                products before sending your inquiry.
              </p>

              <Link
                href="/shop"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 font-medium text-white transition hover:opacity-90"
              >
                <ArrowLeft size={18} />

                Explore Products
              </Link>
            </div>
          ) : (
            <div className="mt-14 grid gap-10 lg:grid-cols-[1.7fr_0.8fr]">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-sm transition hover:shadow-lg"
                  >
                    <div className="flex flex-col gap-6 sm:flex-row">
                      <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-[#f5f1ea] sm:w-32">
                        {item.image_url && (
                          <Image
                            src={item.image_url}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>

                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-semibold text-[var(--text)]">
                            {item.name}
                          </h3>

                          <Link
                            href={`/shop/${item.slug}`}
                            className="mt-2 inline-block text-sm font-medium text-[var(--primary)] hover:underline"
                          >
                            View Product →
                          </Link>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center rounded-full border border-[var(--border)]">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity - 1
                                )
                              }
                              className="px-4 py-3 transition hover:bg-[#f4efe8]"
                            >
                              <Minus size={16} />
                            </button>

                            <span className="min-w-[40px] text-center font-semibold">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity + 1
                                )
                              }
                              className="px-4 py-3 transition hover:bg-[#f4efe8]"
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          <button
                            onClick={() =>
                              removeItem(item.id)
                            }
                            className="inline-flex items-center gap-2 text-sm font-medium text-red-500 transition hover:text-red-700"
                          >
                            <Trash2 size={17} />

                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-fit rounded-[30px] border border-[var(--border)] bg-white p-8 shadow-sm lg:sticky lg:top-28">
                <h2 className="text-2xl font-semibold">
                  Ready to Enquire?
                </h2>

                <p className="mt-4 leading-7 text-[var(--text-muted)]">
                  We'll send your selected products directly to WhatsApp so
                  NatureGren can share pricing, delivery details and bulk order
                  information.
                </p>

                <div className="mt-8 space-y-4">
                  <button
                    onClick={sendInquiry}
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-white transition hover:brightness-95"
                  >
                    <MessageCircle size={20} />

                    Send Inquiry on WhatsApp
                  </button>

                  <Link
                    href="/shop"
                    className="flex w-full items-center justify-center rounded-full border border-[var(--border)] px-6 py-4 font-medium transition hover:bg-[#f8f5ef]"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Container>
      </main>

      <Footer />
    </>
  );
}