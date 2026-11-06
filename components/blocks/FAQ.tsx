// components/blocks/FAQ.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

interface FAQProps {
  id?: string;
}

const FAQS = [
  {
    question: "I'm not sure if I have a claim?",
    answer: "If you have any problems with your local council or housing association property, such as internal or external damage or disrepair and your landlord has failed to put it right, you may have a claim. You should contact your landlord to make the repairs and if they ignore you, fail to fix the issue or the problem re-occurs, you can report them to the Housing Ombudsman for free, or contact us for a free assessment."
  },
  {
    question: "What is the process of a claim?",
    answer: "Once you submit your details, our expert legal panel will review your case. If accepted, a dedicated solicitor will contact your landlord to enforce the required repairs and negotiate any compensation you are owed for the period you lived in disrepair."
  },
  {
    question: "Why choose us?",
    answer: "We act as a seamless introducer to specialized housing disrepair solicitors. We take the stress out of the initial process, ensuring your case is paired with legal experts who operate on a strict no-win, no-fee basis."
  },
  {
    question: "What will it cost?",
    answer: "Our partner solicitors operate on a Conditional Fee Agreement (commonly known as No Win, No Fee). This means you will not pay any upfront costs, and you only pay a pre-agreed percentage of your compensation if your claim is successful."
  }
];

export function FAQ({ id }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <Section id={id} className="bg-[var(--surface-soft)] py-24 md:py-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-editorial text-4xl md:text-5xl text-[var(--primary)] mb-12 text-center">
              FAQs
            </h2>
          </FadeIn>
          
          <div className="space-y-4 mb-16">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] shadow-sm hover:border-[var(--accent)]/50 transition-colors duration-300">
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left focus-visible:outline-none focus-visible:bg-[var(--surface-soft)] rounded-[var(--radius-md)]"
                      aria-expanded={isOpen}
                    >
                      <span className="font-editorial text-[var(--primary)] text-xl md:text-2xl">
                        {faq.question}
                      </span>
                      <motion.span 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="text-[var(--accent)] text-2xl font-light ml-4 flex-shrink-0"
                      >
                        {isOpen ? "−" : "+"}
                      </motion.span>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-6 md:pb-8">
                            <p className="text-[var(--foreground-soft)] font-light leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.4} className="text-center">
            <Button variant="primary" href="/claim" className="h-14 px-8 text-lg bg-[var(--accent)] hover:bg-[#8F7455] text-white">
              Start Your Claim
            </Button>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}