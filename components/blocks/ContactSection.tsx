"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/forms/ContactForm";

export function ContactSection({ id }: { id?: string }) {
  return (
    <Section id={id} className="pt-24 pb-32 bg-[var(--background)] border-t border-[var(--border)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn direction="right">
            <span className="text-[var(--accent)] font-medium tracking-wide uppercase text-sm mb-4 block">Get in Touch</span>
            <h2 className="font-editorial text-5xl md:text-6xl text-[var(--primary)] mb-6">Contact Our Team</h2>
            <p className="text-lg text-[var(--foreground-soft)] mb-12 max-w-md">
              Have a question about the process, or need an update on an existing inquiry? Reach out to our support team.
            </p>
            <br />
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-medium text-[var(--foreground-muted)] uppercase tracking-wider mb-2">Email</h4>
                <p className="text-xl text-[var(--primary)]">info@housingrepairsteam.co.uk</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[var(--foreground-muted)] uppercase tracking-wider mb-2">Office</h4>
                <p className="text-lg text-[var(--primary)] leading-relaxed">
                  <b>Housing Repairs Team Ltd<br />Office 20839, 182-184 High Street North
                    East Ham<br />London, UK<br />E6 2JA<br />Phone: +44 330 174 7690</b>
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.2} className="lg:mt-12">
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
