"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProcessSteps } from "./ProcessSteps"; // Your existing animated component

export function ProcessSection({ id }: { id?: string }) {
  return (
    <div id={id}>
      <Section className="bg-[var(--primary)] text-white pt-24 pb-16">
        <Container>
          <FadeIn className="max-w-3xl">
            <h2 className="font-editorial text-5xl md:text-6xl mb-6">The Claims Process</h2>
            <p className="text-xl text-[var(--border-dark)] leading-relaxed">
              We remove the legal complexity from housing disrepair claims. From your initial free assessment to securing your compensation, here is exactly what to expect.
            </p>
          </FadeIn>
        </Container>
      </Section>
      <ProcessSteps />
    </div>
  );
}