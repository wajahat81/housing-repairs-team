"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function ThankYouPage() {
  return (
    <main className="bg-[var(--background)] min-h-screen">
      <section className="py-12 md:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-2xl mx-auto bg-[var(--surface)] p-12 md:p-16 rounded-[var(--radius-lg)] border border-[var(--border)] shadow-xl text-center flex flex-col items-center justify-center min-h-[500px]"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
            className="w-24 h-24 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full flex items-center justify-center mb-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                d="M20 6L9 17l-5-5"
              />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-editorial text-3xl md:text-4xl text-[var(--primary)] mb-4"
          >
            Claim Submitted Successfully
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-[var(--foreground-soft)] text-lg mb-10 max-w-md leading-relaxed"
          >
            Thank you for providing your details. Our legal team will review your evidence and contact you shortly to discuss the next steps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              href="/"
              variant="primary"
              className="h-14 px-10 text-lg text-white bg-[var(--accent)] hover:bg-[#8F7455] shadow-lg shadow-[var(--accent)]/20"
            >
              Return to Homepage
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
