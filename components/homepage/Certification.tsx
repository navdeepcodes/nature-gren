import Image from "next/image";

import Container from "@/components/layout/Container";

export default function Certification() {
  return (
    <section className="border-y border-[#ebe7df] bg-[#fcfcfb]">
      <Container>
        <div className="py-14 lg:py-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#ebe7df] bg-white px-6 py-8 shadow-sm md:px-10 md:py-10 lg:px-14 lg:py-14">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
              {/* Certificate */}

              <div className="flex justify-center lg:w-1/3">
                <div className="rounded-3xl border border-[#ebe7df] bg-[#faf8f3] p-4 lg:p-6 shadow-sm">
                  <Image
                    src="/certifications/iso-9001-2015.png"
                    alt="ISO 9001:2015 Certified"
                    width={170}
                    height={170}
                    priority={false}
                    className="h-auto w-28 sm:w-36 lg:w-40"
                  />
                </div>
              </div>

              {/* Content */}

              <div className="text-center lg:w-2/3 lg:text-left">
                <span className="inline-flex rounded-full bg-[#edf3ea] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2E4B2C] lg:text-xs">
                  International Quality Standard
                </span>

                <h2 className="mt-4 font-serif text-3xl text-[#1f2b1d] sm:text-4xl lg:mt-6 lg:text-5xl">
                  ISO 9001:2015 Certified
                </h2>

                <p className="mt-4 text-base leading-7 text-[#5d6658] lg:mt-6 lg:text-lg lg:leading-8">
                  NatureGren follows internationally recognized quality
                  management standards to deliver consistent craftsmanship,
                  dependable manufacturing processes, and premium jute products
                  trusted by customers worldwide.
                </p>

                {/* Badges */}

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-8 lg:flex lg:flex-wrap lg:justify-start lg:gap-4">
                  {[
                    "Quality Management",
                    "Consistent Manufacturing",
                    "Customer Focused",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-[#ebe7df] bg-[#faf8f3] px-4 py-2 text-sm font-medium text-[#2E4B2C]"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}