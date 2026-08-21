import Link from "next/link";

import Container from "@/components/layout/Container";

import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1f2b1d] text-white">
      <Container>
        <div className="grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div className="lg:pr-6">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7d3a5]">
              Sustainable Living
            </span>

            <h2 className="mt-3 font-serif text-4xl">
              NatureGren
            </h2>

            <div className="mt-5 h-1 w-16 rounded-full bg-[#8BB174]" />

            <p className="mt-6 leading-8 text-white/70">
              Premium handcrafted jute products designed for sustainable
              living, custom manufacturing, and environmentally responsible
              businesses.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="https://www.instagram.com/naturegren_inspiredbynature?igsh=MXFuNnNwcGtldzBjZg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#1f2b1d]"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="https://www.facebook.com/share/1DMJsJ8PPG/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#1f2b1d]"
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

            <ul className="space-y-4">
              {[
                ["Home", "/"],
                ["Shop", "/shop"],
                ["About", "/about"],
                ["Custom Orders", "/custom-orders"],
                ["Contact", "/contact"],
                ["Returns & Exchanges", "/return-policy"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {label}

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
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
              <a
                href="https://maps.google.com/?q=Dallas,Texas,USA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 transition-colors duration-300 hover:text-white"
              >
                <MapPin
                  size={18}
                  className="mt-1 shrink-0"
                />

                <p>Dallas, Texas, USA</p>
              </a>

              <a
                href="tel:+14693506400"
                className="flex gap-3 transition-colors duration-300 hover:text-white"
              >
                <Phone
                  size={18}
                  className="mt-1 shrink-0"
                />

                <p>+1 (469) 350-6400</p>
              </a>

              <a
                href="mailto:contact@naturegren.com"
                className="flex gap-3 transition-colors duration-300 hover:text-white"
              >
                <Mail
                  size={18}
                  className="mt-1 shrink-0"
                />

                <p>contact@naturegren.com</p>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-white/50 md:flex-row">
          <p>© 2026 NatureGren. All rights reserved.</p>

          <p>Designed for a more sustainable future.</p>
        </div>
      </Container>
    </footer>
  );
}