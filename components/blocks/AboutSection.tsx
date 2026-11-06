"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Values } from "./Values";

export function AboutSection({ id }: { id?: string }) {
  return (
    <div id={id}>
      <Section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-[var(--background)]">
        <Container>
          {/* Changed to strict Flexbox centering */}
          <FadeIn className="w-full flex flex-col items-center justify-center text-center">
            
            <span className="text-[var(--accent)] font-medium tracking-widest uppercase text-xs mb-6">
              Who We Are
            </span>
            
            <h2 className="font-editorial text-4xl md:text-6xl lg:text-7xl text-[var(--primary)] mb-8 leading-[1.1] max-w-4xl">
              Advocates for safe and <br className="hidden md:block" />
              <span className="italic text-[var(--accent)]">habitable housing.</span>
            </h2>
            
            {/* Removed mx-auto, let Flexbox handle the centering */}
            <p className="text-lg md:text-xl text-[var(--foreground-soft)] font-light leading-relaxed max-w-3xl text-center">
              Housing Repairs Team was founded on a simple principle: nobody should be forced to live in damp, unsafe, or deteriorating conditions while their landlord ignores them.
            </p>
            
          </FadeIn>
        </Container>
      </Section>
      <Values />
    </div>
  );
}