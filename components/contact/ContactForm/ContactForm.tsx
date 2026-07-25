"use client";

import { useState } from "react";

import Container from "@/components/layout/Container";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    // TODO:
    // Send to Supabase / Email API

    setTimeout(() => {
      alert("Inquiry submitted successfully!");

      setLoading(false);

      (e.target as HTMLFormElement).reset();
    }, 1200);
  }

  return (
    <section
      id="contact-form"
      className="bg-white py-16 md:py-20 lg:py-28"
    >
      <Container>
        <div className="grid gap-10 md:gap-12 lg:gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left */}

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)] md:text-sm">
              Send Inquiry
            </span>

            <h2 className="mt-4 font-serif text-[2.5rem] leading-[1.08] text-[var(--text)] sm:text-5xl">
              Let's Start
              <br />
              A Conversation
            </h2>

            <p className="mt-6 text-base leading-7 text-[var(--text-muted)] md:mt-8 md:text-lg md:leading-8">
              Have questions about our handcrafted jute products,
              wholesale pricing, exports or custom manufacturing?
              Fill out the form and our team will respond shortly.
            </p>

            <div className="mt-8 rounded-[24px] bg-[#fcfaf7] p-6 md:mt-12 md:rounded-[28px] md:p-8">
              <h3 className="text-lg font-semibold md:text-xl">
                Why Contact NatureGren?
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-[var(--text-muted)] md:mt-6 md:space-y-4 md:text-base">
                <li>✓ Bulk & Wholesale Orders</li>
                <li>✓ Export Partnerships</li>
                <li>✓ Corporate Gifting</li>
                <li>✓ Custom Product Development</li>
              </ul>
            </div>
          </div>

          {/* Right */}

          <form
            onSubmit={handleSubmit}
            className="rounded-[26px] border border-[#ece6dc] bg-[#fcfaf7] p-6 shadow-lg md:rounded-[32px] md:p-10"
          >
            <div className="grid gap-4 md:gap-6 md:grid-cols-2">
              <input
                placeholder="Full Name"
                required
                className="h-12 rounded-xl border px-4 outline-none transition focus:border-[var(--primary)] md:h-14 md:px-5"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="h-12 rounded-xl border px-4 outline-none transition focus:border-[var(--primary)] md:h-14 md:px-5"
              />

              <input
                placeholder="Phone Number"
                className="h-12 rounded-xl border px-4 outline-none transition focus:border-[var(--primary)] md:h-14 md:px-5"
              />

              <input
                placeholder="Company"
                className="h-12 rounded-xl border px-4 outline-none transition focus:border-[var(--primary)] md:h-14 md:px-5"
              />
            </div>

            <input
              placeholder="Subject"
              className="mt-4 h-12 w-full rounded-xl border px-4 outline-none transition focus:border-[var(--primary)] md:mt-6 md:h-14 md:px-5"
            />

            <textarea
              rows={6}
              placeholder="Tell us about your requirements..."
              className="mt-4 w-full rounded-xl border p-4 outline-none transition focus:border-[var(--primary)] md:mt-6 md:p-5"
            />

            <button
              type="submit"
              disabled={loading}
              className="
                mt-6
                h-12
                w-full
                rounded-full
                bg-[var(--primary)]
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[var(--primary-hover)]
                disabled:opacity-60
                md:mt-8
                md:h-14
                md:text-base
              "
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>
          </form>

        </div>
      </Container>
    </section>
  );
}