import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Values } from "@/components/blocks/Values";
import { CTA } from "@/components/blocks/CTA";

export default function AboutPage() {
  return (
    <main>
      <Section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[var(--background)]">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[var(--accent)] font-medium tracking-wide uppercase text-sm mb-6 block">
              Who We Are
            </span>
            <h1 className="font-editorial text-5xl md:text-7xl text-[var(--primary)] mb-8 leading-[1.1]">
              Advocates for safe and<br className="hidden md:block" />
              <span className="italic text-[var(--accent)]">habitable housing.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--foreground-soft)] leading-relaxed max-w-2xl mx-auto">
              Housing Repairs Team was founded on a simple principle: nobody should be forced to live in damp, unsafe, or deteriorating conditions while their landlord ignores them. We bridge the gap between frustrated tenants and expert legal resolution.
            </p>
          </div>
        </Container>
      </Section>

      <Values />

      <CTA 
        title="Stop waiting for repairs."
        description="Let our experts force your landlord to take action. The assessment is completely free."
        primaryAction={{
          label: "Check Your Eligibility",
          href: "/claim"
        }}
      />
    </main>
  );
}