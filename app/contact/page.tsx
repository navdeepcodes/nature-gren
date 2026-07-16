import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/homepage/Footer";
import AnimatedBackground from "@/components/background/AnimatedBackground";

import Hero from "@/components/contact/Hero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import Map from "@/components/contact/Map";
import FAQ from "@/components/contact/FAQ";
import CTA from "@/components/contact/CTA";

export default function ContactPage() {
  return (
    <>
      <AnimatedBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        <ContactInfo />

        <ContactForm />

        <Map />

        <FAQ />

        <CTA />
      </main>

      <Footer />
    </>
  );
}