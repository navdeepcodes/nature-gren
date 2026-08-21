import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/homepage/Footer";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Returns & Exchanges",
  description:
    "Learn about NatureGren's return, refund, and exchange policy for handcrafted jute products.",
  alternates: {
    canonical: "/return-policy",
  },
};

/*
 * The provided return-settings screenshot confirms:
 * - Returns are accepted for defective and non-defective products.
 * - Exchanges are accepted.
 *
 * The screenshot does not specify the return window or return-shipping fees.
 * Update these values after completing the remaining return-policy settings.
 */
const RETURN_WINDOW = "the return period stated on your order confirmation";

const RETURN_SHIPPING =
  "Return shipping arrangements and any applicable fees will be communicated when your return request is approved.";

export default function ReturnPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#faf9f6]">
        <section className="border-b border-[#e8e4dc] bg-[#eef4e9]">
          <Container>
            <div className="mx-auto max-w-4xl py-24 text-center lg:py-32">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#507b44]">
                NatureGren
              </p>

              <h1 className="mt-5 font-serif text-5xl leading-tight text-[#1f2b1d] md:text-6xl">
                Returns &amp; Exchanges
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                We want you to be happy with your NatureGren purchase. This
                policy explains how returns, refunds, and exchanges are handled.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-4xl space-y-12">
              <PolicySection title="Our Return Policy">
                <p>
                  NatureGren accepts returns for both defective and
                  non-defective products, subject to the conditions described
                  below.
                </p>

                <p>
                  Return requests should be submitted within{" "}
                  <strong>{RETURN_WINDOW}</strong>. Please contact us before
                  sending any product back so that we can provide the
                  appropriate return instructions.
                </p>
              </PolicySection>

              <PolicySection title="Eligibility">
                <p>
                  To help us process your return, products should be returned
                  in their original condition and with the original packaging
                  and proof of purchase where applicable.
                </p>

                <p>
                  Because NatureGren products are handcrafted, minor variations
                  in texture, weave, colour, or finish may occur naturally and
                  are not necessarily considered defects.
                </p>
              </PolicySection>

              <PolicySection title="Defective or Damaged Products">
                <p>
                  If your product arrives damaged or has a manufacturing
                  defect, please contact NatureGren as soon as possible with
                  your order details and clear photographs of the product and
                  packaging.
                </p>

                <p>
                  We will review the issue and, where the claim is approved,
                  arrange an appropriate resolution, which may include a
                  replacement, exchange, or refund.
                </p>
              </PolicySection>

              <PolicySection title="Non-Defective Returns">
                <p>
                  We also accept eligible returns for non-defective products.
                  The product must meet the return conditions above and be
                  returned within the applicable return window.
                </p>
              </PolicySection>

              <PolicySection title="Exchanges">
                <p>
                  NatureGren accepts exchanges for eligible products. Please
                  contact us before returning an item so we can confirm
                  availability and provide the exchange instructions.
                </p>
              </PolicySection>

              <PolicySection title="Return Shipping">
                <p>{RETURN_SHIPPING}</p>
              </PolicySection>

              <PolicySection title="Refunds">
                <p>
                  Once a returned product has been received and inspected, we
                  will confirm whether the return has been approved. Approved
                  refunds will be processed using the applicable original
                  payment method, subject to the payment provider&apos;s
                  processing time.
                </p>
              </PolicySection>

              <PolicySection title="How to Request a Return or Exchange">
                <ol className="list-decimal space-y-3 pl-6">
                  <li>Keep your order details or proof of purchase ready.</li>
                  <li>
                    Contact NatureGren with your order number and the reason
                    for the return or exchange.
                  </li>
                  <li>
                    For damaged or defective products, include clear
                    photographs.
                  </li>
                  <li>
                    Wait for our confirmation and return instructions before
                    shipping the product back.
                  </li>
                </ol>
              </PolicySection>

              <PolicySection title="Contact Us">
                <p>
                  For return or exchange requests, please use the contact
                  details provided on our Contact page or in your order
                  confirmation.
                </p>
              </PolicySection>

              <div className="rounded-3xl border border-[#e7e1d7] bg-white p-6 text-sm leading-7 text-gray-500">
                <strong className="text-[#1f2b1d]">Important:</strong>{" "}
                NatureGren should update the return window, shipping-fee
                treatment, and any country-specific conditions on this page
                before publishing the final policy. The current values
                intentionally avoid inventing those business terms because
                they were not specified in the provided return-settings
                screenshot.
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-3xl text-[#1f2b1d] md:text-4xl">
        {title}
      </h2>

      <div className="mt-5 space-y-4 text-base leading-8 text-gray-600">
        {children}
      </div>
    </section>
  );
}
