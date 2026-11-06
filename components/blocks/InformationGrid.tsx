// components/blocks/InformationGrid.tsx
"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

const INFO_CARDS = [
  {
    title: "How can we help?",
    content: [
      "Our expert housing repair solicitors are dedicated to clients, ensuring the best outcome is made available to you and support is given every step of the way!",
      "Each client will be provided with their own housing disrepair specialist who will carry out their case from beginning to completion.",
      "They will work on your behalf to ensure your landlord carries out any necessary repairs and recover any compensation due."
    ]
  },
  {
    title: "Who can I claim against?",
    content: [
      "As a tenant of any house you have certain rights. One of those is that your landlord has an obligation to keep your home safe and in a reasonable state of repair.",
      "Latest reports evidence that 525,000 social homes are currently being rented at sub-standard living conditions. That is nearly 1 in 7 of all social homes across England. 244,000 of these homes are deemed to have a category one safety hazard."
    ]
  },
  {
    title: "The Housing Ombudsman",
    content: [
      "The Housing Ombudsman is an independent body that handles complaints and disputes related to housing in the United Kingdom. They serve as a neutral party, offering an alternative to costly and time-consuming court proceedings.",
      "Alternatively, we can introduce you to a professional, expert legal service to review your case and present your claim on your behalf."
    ]
  },
  {
    title: "Housing complaints",
    content: [
      "Housing complaints and home disrepair issues are prevalent concerns among tenants. Common grievances include faulty plumbing, inadequate heating, mold infestations, and structural damages.",
      "Addressing these complaints promptly is crucial to ensure safe, healthy, and habitable living environments. Tenants have legal rights to demand repairs."
    ]
  }
];

export function InformationGrid() {
  return (
    <Section className="bg-[var(--background)] py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INFO_CARDS.map((card, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <Card hoverable className="flex flex-col h-full bg-[var(--surface)]">
                <h3 className="font-editorial text-2xl text-[var(--primary)] mb-6">{card.title}</h3>
                <div className="space-y-4 text-[var(--foreground-soft)] flex-grow font-light leading-relaxed">
                  {card.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
                <Link href="/claim" className="mt-8 font-medium text-[var(--accent)] hover:text-[#8F7455] transition-colors inline-flex items-center gap-2 group">
                  Start your claim 
                  <span aria-hidden="true" className="transform transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}