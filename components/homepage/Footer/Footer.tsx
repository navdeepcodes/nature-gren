import Link from "next/link";

import Container from "@/components/layout/Container";

import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#1f2b1d] text-white">
      <Container>
        <div className="grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <h2 className="font-serif text-4xl">NatureGren</h2>

            <p className="mt-5 leading-7 text-white/70">
              Premium handcrafted jute products designed for sustainable living
              and modern businesses.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="https://www.instagram.com/naturegren_inspiredbynature?igsh=MXFuNnNwcGtldzBjZg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:bg-white hover:text-[#1f2b1d]"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="https://www.facebook.com/share/1DMJsJ8PPG/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:bg-white hover:text-[#1f2b1d]"
              >
                <FaFacebookF size={16} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white/70">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/shop" className="transition hover:text-white">
                  Shop
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/custom-orders"
                  className="transition hover:text-white"
                >
                  Custom Orders
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}

          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Categories
            </h3>

            <ul className="space-y-4 text-white/70">
              <li>Shopping Bags</li>
              <li>Gift Bags</li>
              <li>Wine Bags</li>
              <li>Storage Baskets</li>
              <li>Custom Products</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-5 text-white/70">
              <div className="flex gap-3">
                <MapPin size={18} className="mt-1 shrink-0" />
                <p>
                  Dallas
                  <br />
                  Irving, Texas, 75038
                </p>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="mt-1 shrink-0" />
                <p>+1 (469) 350-6400</p>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="mt-1 shrink-0" />
                <p>contact@naturegren.com</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-white/10
            py-8
            text-sm
            text-white/50
            md:flex-row
          "
        >
          <p>© 2026 NatureGren. All rights reserved.</p>

          <p>Handcrafted with ❤️ in USA.</p>
        </div>
      </Container>
    </footer>
  );
}