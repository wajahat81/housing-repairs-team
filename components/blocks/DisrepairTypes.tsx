// components/blocks/DisrepairTypes.tsx
"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

const DISREPAIR_ISSUES = [
  "Water damage",
  "Damp or mould",
  "Damaged or leaking roof or guttering",
  "Broken or rotten windows and doors",
  "Broken appliances that were included in your tenancy",
  "Broken bathroom fittings",
  "Internal damage to wallpaper, paint, carpets and curtains (If included in the tenancy)",
  "Damage or faulty electrics",
  "Damage to internal gas and water pipe work",
  "Any other damage to your property"
];

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function DisrepairTypes() {
  return (
    <Section className="bg-[var(--surface-soft)] border-y border-[var(--border)] py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="right">
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--primary)] mb-8 leading-tight">
              What Counts As Housing Disrepair?
            </h2>
            <div className="space-y-6 text-lg text-[var(--foreground-soft)] font-light leading-relaxed">
              <p>
                Have you contacted your Landlord about repairs that need to be carried out and still haven't had your repairs completed?
              </p>
              <p>
                As a tenant of any rented property from the local council or housing association, you have the right to live in a safe and well-maintained home. Your landlord has a legal responsibility to carry out repairs you have reported to them in a satisfactory and timely manner.
              </p>
              <p className="font-medium text-[var(--primary)] border-l-2 border-[var(--accent)] pl-4">
                If you've complained about any of the repairs listed and they've still not been completed, we could help by ensuring your landlord carries out the repairs!
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="bg-[var(--surface)] p-8 md:p-12 rounded-[var(--radius-lg)] shadow-xl shadow-[var(--shadow-sm)] border border-[var(--border)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <motion.ul 
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10%" }}
                className="space-y-5 relative z-10"
              >
                {DISREPAIR_ISSUES.map((issue, index) => (
                  <motion.li key={index} variants={itemVariants} className="flex items-start gap-4 group">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--surface-soft)] text-[var(--accent)] flex items-center justify-center mt-0.5 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-300">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5L5.25001 9.91667L2.33334 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-[var(--foreground)] font-medium text-sm md:text-base tracking-wide">{issue}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </FadeIn>

        </div>
      </Container>
    </Section>
  );
}