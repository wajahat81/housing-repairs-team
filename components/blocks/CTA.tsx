// components/blocks/CTA.tsx
"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

interface CTAProps {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export function CTA({ title, description, primaryAction, secondaryAction }: CTAProps) {
  return (
    <Section className="bg-[var(--primary)] text-white relative overflow-hidden py-32 md:py-40">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--accent)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <Container>
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="font-editorial text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-[1.1]">
              {title}
            </h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.15}>
            <p className="text-xl text-[var(--border-dark)] mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              {description}
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center">
              <Button 
                variant="primary" 
                href={primaryAction.href}
                className="bg-[var(--accent)] hover:bg-[#8F7455] text-white h-14 px-8 text-lg transition-colors duration-300 w-full sm:w-auto"
              >
                {primaryAction.label}
              </Button>
              
              {secondaryAction && (
                <Button 
                  variant="ghost" 
                  href={secondaryAction.href}
                  className="text-white hover:text-[var(--accent)] border border-white/20 hover:bg-white/5 h-14 px-8 text-lg transition-all duration-300 w-full sm:w-auto"
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}