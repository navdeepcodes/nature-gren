import Image from "next/image";

import Container from "@/components/layout/Container";

export default function Certification() {
  return (
    <section className="border-y border-[#ebe7df] bg-[#fcfcfb]">
      <Container>
        <div className="py-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#ebe7df] bg-white px-8 py-14 shadow-sm md:px-14">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
              <div className="flex justify-center lg:w-1/3">
                <div className="rounded-3xl border border-[#ebe7df] bg-[#faf8f3] p-6 shadow-sm">
                  <Image
                    src="/certifications/iso-9001-2015.png"
                    alt="ISO 9001:2015 Certified"
                    width={170}
                    height={170}
                    className="h-auto w-40"
                    priority={false}
                  />
                </div>
              </div>

              <div className="text-center lg:w-2/3 lg:text-left">
                <span className="inline-flex rounded-full bg-[#edf3ea] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#2E4B2C]">
                  International Quality Standard
                </span>

                <h2 className="mt-6 font-serif text-4xl text-[#1f2b1d] md:text-5xl">
                  ISO 9001:2015 Certified
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#5d6658]">
                  NatureGren follows internationally recognized quality
                  management standards to deliver consistent craftsmanship,
                  dependable manufacturing processes, and premium jute products
                  trusted by customers around the world.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <div className="rounded-full border border-[#ebe7df] bg-[#faf8f3] px-5 py-3 text-sm font-medium text-[#2E4B2C]">
                    ✓ Quality Management
                  </div>

                  <div className="rounded-full border border-[#ebe7df] bg-[#faf8f3] px-5 py-3 text-sm font-medium text-[#2E4B2C]">
                    ✓ Consistent Manufacturing
                  </div>

                  <div className="rounded-full border border-[#ebe7df] bg-[#faf8f3] px-5 py-3 text-sm font-medium text-[#2E4B2C]">
                    ✓ Customer Focused
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}