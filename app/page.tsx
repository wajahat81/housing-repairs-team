import { Hero } from "@/components/blocks/Hero";
import { ServicesSection } from "@/components/blocks/ServicesSection";
import { ProcessSection } from "@/components/blocks/ProcessSection";
import { AboutSection } from "@/components/blocks/AboutSection";
import { ContactSection } from "@/components/blocks/ContactSection";
import { FAQ } from "@/components/blocks/FAQ";
import { CTA } from "@/components/blocks/CTA";

export default function Home() {
  return (
    <main>
      <Hero id="home" />
      <ServicesSection id="services" />
      <ProcessSection id="process" />
      <AboutSection id="about" />
      <ContactSection id="contact" />
      <FAQ id="faqs" />
      <CTA 
        title="Ready to enforce your rights?"
        description="Our expert housing repair solicitors are dedicated to clients, ensuring the best outcome is made available to you and support is given every step of the way."
        primaryAction={{
          label: "Start Your Claim",
          href: "/claim"
        }}
      />
    </main>
  );
}