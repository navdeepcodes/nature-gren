import { MapPin, Navigation } from "lucide-react";

import Container from "@/components/layout/Container";

export default function Map() {
  return (
    <section className="bg-[#fcfaf7] py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.45fr_0.55fr]">
          {/* Left */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Visit Us
            </span>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[var(--text)]">
              Our Office &
              <br />
              Manufacturing Hub
            </h2>

            <p className="mt-8 text-lg leading-8 text-[var(--text-muted)]">
              We'd love to welcome you. Schedule a visit to discuss
              wholesale orders, exports, custom manufacturing or explore
              our handcrafted jute collections.
            </p>

            <div className="mt-10 rounded-[28px] bg-white p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-[#edf6e8] p-4">
                  <MapPin
                    size={24}
                    className="text-[var(--primary)]"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    NatureGren
                  </h3>

                  <p className="mt-2 leading-7 text-[var(--text-muted)]">
                    Bengaluru,
                    <br />
                    Karnataka,
                    <br />
                    India
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[var(--primary)]
                  px-6
                  py-3
                  text-white
                  transition
                  hover:bg-[var(--primary-hover)]
                "
              >
                <Navigation size={18} />
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Right */}

          <div className="overflow-hidden rounded-[32px] shadow-xl">
            <iframe
              title="NatureGren Location"
              src="https://www.google.com/maps?q=Bengaluru,Karnataka&output=embed"
              className="h-[520px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}