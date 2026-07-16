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
      className="bg-white py-28"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Send Inquiry
            </span>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[var(--text)]">
              Let's Start
              <br />
              A Conversation
            </h2>

            <p className="mt-8 text-lg leading-8 text-[var(--text-muted)]">
              Have questions about our handcrafted jute products,
              wholesale pricing, exports or custom manufacturing?
              Fill out the form and our team will respond shortly.
            </p>

            <div className="mt-12 rounded-[28px] bg-[#fcfaf7] p-8">
              <h3 className="text-xl font-semibold">
                Why Contact NatureGren?
              </h3>

              <ul className="mt-6 space-y-4 text-[var(--text-muted)]">
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
            className="rounded-[32px] border border-[#ece6dc] bg-[#fcfaf7] p-10 shadow-lg"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <input
                placeholder="Full Name"
                required
                className="h-14 rounded-xl border px-5 outline-none focus:border-[var(--primary)]"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="h-14 rounded-xl border px-5 outline-none focus:border-[var(--primary)]"
              />

              <input
                placeholder="Phone Number"
                className="h-14 rounded-xl border px-5 outline-none focus:border-[var(--primary)]"
              />

              <input
                placeholder="Company"
                className="h-14 rounded-xl border px-5 outline-none focus:border-[var(--primary)]"
              />
            </div>

            <input
              placeholder="Subject"
              className="mt-6 h-14 w-full rounded-xl border px-5 outline-none focus:border-[var(--primary)]"
            />

            <textarea
              rows={7}
              placeholder="Tell us about your requirements..."
              className="mt-6 w-full rounded-xl border p-5 outline-none focus:border-[var(--primary)]"
            />

            <button
              type="submit"
              disabled={loading}
              className="
                mt-8
                h-14
                w-full
                rounded-full
                bg-[var(--primary)]
                font-semibold
                text-white
                transition
                hover:bg-[var(--primary-hover)]
                disabled:opacity-60
              "
            >
              {loading
                ? "Sending..."
                : "Send Inquiry"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}