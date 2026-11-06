"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production, send this to Sentry or another error tracking service
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="flex-1 bg-[var(--background)]">
      <Section className="min-h-[70vh] flex flex-col justify-center">
        <Container className="max-w-2xl text-center">
          <div className="w-16 h-16 bg-[var(--error)]/10 text-[var(--error)] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <h1 className="font-editorial text-4xl text-[var(--primary)] mb-4">
            Something went wrong
          </h1>
          <p className="text-lg text-[var(--foreground-soft)] mb-10">
            We apologize for the inconvenience. An unexpected error has occurred on this page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={() => reset()}>
              Try Again
            </Button>
            <Button variant="secondary" href="/">
              Return to Homepage
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}