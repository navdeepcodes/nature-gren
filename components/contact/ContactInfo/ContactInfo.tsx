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
    value: "+91 XXXXX XXXXX",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@naturegren.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Bengaluru, Karnataka, India",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat • 9:00 AM - 6:00 PM",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-[#fcfaf7] py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {info.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[30px] border border-[#ece6dc] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#edf6e8]">
                  <Icon
                    size={30}
                    className="text-[var(--primary)]"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[var(--text)]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[var(--text-muted)]">
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