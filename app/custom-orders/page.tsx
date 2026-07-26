import Hero from "@/components/custom-orders/Hero";
import WhyCustom from "@/components/custom-orders/WhyCustom";
import Customization from "@/components/custom-orders/Customization";
import Industries from "@/components/custom-orders/Industries";
import Process from "@/components/custom-orders/Process";
import CTA from "@/components/custom-orders/CTA";

export default function CustomOrdersPage() {
  return (
    <main className="overflow-hidden bg-[var(--background)]">
      <Hero />
      <WhyCustom />
      <Customization />
      <Industries />
      <Process />
      <CTA />
    </main>
  );
}