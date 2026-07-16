"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/layout/Container";

const faqs = [
  {
    question: "Do you accept bulk and wholesale orders?",
    answer:
      "Yes. We manufacture and supply bulk quantities for wholesalers, retailers, exporters and corporate clients.",
  },
  {
    question: "Can I customize products with my own branding?",
    answer:
      "Absolutely. We provide custom sizes, colors, printing, branding and packaging for businesses and corporate gifting.",
  },
  {
    question: "Do you export internationally?",
    answer:
      "Yes. NatureGren works with international buyers and export partners across multiple markets.",
  },
  {
    question: "What materials do you use?",
    answer:
      "We primarily use premium natural jute along with carefully selected eco-friendly materials to ensure durability and sustainability.",
  },
  {
    question: "How long does production take?",
    answer:
      "Production timelines depend on the order quantity and customization requirements. We'll provide an estimated schedule after reviewing your inquiry.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-28">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              FAQ
            </span>

            <h2 className="mt-5 font-serif text-5xl text-[var(--text)]">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              Answers to the questions we receive most often from our
              customers and business partners.
            </p>
          </div>

          <div className="mt-16 space-y-5">
            {faqs.map((faq, index) => {
              const active = open === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[24px] border border-[#ece6dc] bg-[#fcfaf7]"
                >
                  <button
                    onClick={() =>
                      setOpen(active ? null : index)
                    }
                    className="flex w-full items-center justify-between p-7 text-left"
                  >
                    <h3 className="text-lg font-semibold text-[var(--text)]">
                      {faq.question}
                    </h3>

                    <ChevronDown
                      size={22}
                      className={`transition-transform duration-300 ${
                        active ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {active && (
                    <div className="px-7 pb-7">
                      <p className="leading-8 text-[var(--text-muted)]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}