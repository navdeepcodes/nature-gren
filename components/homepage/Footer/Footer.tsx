import Image from "next/image";

import Container from "@/components/layout/Container";

export default function Certification() {
  return (
    <section className="border-t border-b border-[#ebe7df] bg-[#fcfcfb]">
      <Container>
        <div className="flex flex-col items-center py-16 text-center">
          <Image
            src="/certifications/iso-9001-2015.png"
            alt="ISO 9001:2015 Certification"
            width={120}
            height={120}
            className="h-auto w-28 md:w-32"
          />

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#7d8a76]">
            Trusted Manufacturing Standards
          </p>

          <h2 className="mt-3 font-serif text-3xl text-[#1f2b1d] md:text-4xl">
            ISO 9001:2015 Certified
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5b6557]">
            NatureGren operates under internationally recognized quality
            management standards, ensuring consistent craftsmanship, reliable
            production processes, and products that meet the expectations of
            customers worldwide.
          </p>
        </div>
      </Container>
    </section>
  );
}