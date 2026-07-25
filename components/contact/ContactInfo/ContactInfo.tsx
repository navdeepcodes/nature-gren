import {
  Mail,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

import Container from "@/components/layout/Container";

const info = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (469) 350-6400",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@naturegren.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Dallas, Irving, Texas, USA",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "24/7 Support",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-[#fcfaf7] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {info.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[24px] border border-[#ece6dc] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:rounded-[30px] md:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf6e8] md:h-16 md:w-16">
                  <Icon
                    size={26}
                    className="text-[var(--primary)] md:h-[30px] md:w-[30px]"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[var(--text)] md:mt-8 md:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)] md:mt-4 md:text-base md:leading-7">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}