import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { CTA } from "@/components/blocks/CTA";

export default function ProcessPage() {
  return (
    <main>
      <Section className="bg-[var(--primary)] text-white pt-32 pb-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-editorial text-5xl md:text-6xl mb-6">
              The Claims Process
            </h1>
            <p className="text-xl text-[var(--border-dark)] leading-relaxed">
              We remove the legal complexity from housing disrepair claims. From your initial free assessment to securing your compensation, here is exactly what to expect.
            </p>
          </div>
        </Container>
      </Section>

      <ProcessSteps />

      <CTA 
        title="Begin your assessment today."
        description="It takes less than 5 minutes to submit your details and find out if you have a valid claim."
        primaryAction={{
          label: "Start Your Claim",
          href: "/claim"
        }}
        secondaryAction={{
          label: "Contact Us",
          href: "/contact"
        }}
      />
    </main>
  );
}