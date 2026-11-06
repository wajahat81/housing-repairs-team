"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";

interface HeroProps {
  id?: string;
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const } }
};

export function Hero({ id }: HeroProps) {
  return (
    <Section id={id} className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden text-white min-h-[90vh] flex items-center">
      
      {/* Background Image & Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2560" 
          alt="Premium UK Housing" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/95 via-[var(--primary)]/80 to-[var(--primary)]/30" />
        <div className="absolute inset-0 bg-[var(--primary)]/20" /> 
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            animate="show" 
            className="lg:col-span-7 max-w-2xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[var(--accent)]"></span>
              <span className="text-[var(--accent)] font-medium tracking-widest uppercase text-xs">
                Housing Repairs Team
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl text-white mb-6 font-editorial leading-[1.1]">
              Are you a Housing Association or Council tenant?
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light max-w-xl">
              You have the fundamental right to live in a safe, well-maintained home. Force your landlord to make repairs with zero upfront costs.
            </motion.p>
            
            {/* Continuously Animated Compensation Box pointing closer to the form */}
            
          </motion.div>

          {/* Right Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 bg-[var(--surface)] p-8 md:p-10 rounded-[var(--radius-lg)] shadow-2xl shadow-black/40 text-[var(--foreground)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[var(--accent)]" />
            
            <div className="mb-8 mt-2">
              <h2 className="font-editorial text-2xl md:text-3xl text-[var(--primary)] mb-2">
                Start Your Claim
              </h2>
              <p className="text-sm text-[var(--foreground-soft)]">
                Select your ongoing issues to see if you qualify for free representation.
              </p>
            </div>

            <form className="space-y-8">
              <div className="space-y-4">
                <div className="space-y-3">
                  <Checkbox id="mould" label="Mould, fungus or dampness" />
                  <Checkbox id="leaks" label="Leaks, flooding or water damage" />
                  <Checkbox id="cracks" label="Cracks" />
                  <Checkbox id="roofing" label="Defective roofing or gutters" />
                  <Checkbox id="brickwork" label="Defective brickwork" />
                  <Checkbox id="insects" label="Insect infestation" />
                </div>
              </div>
              
              <Button href="/claim" variant="primary" className="w-full h-14 text-lg shadow-lg">
                Check Eligibility
              </Button>
            </form>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}