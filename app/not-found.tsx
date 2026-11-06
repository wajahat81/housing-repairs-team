import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex-1 bg-[var(--background)] flex flex-col justify-center min-h-[70vh]">
      <Section>
        <Container className="text-center max-w-2xl mx-auto">
          <h1 className="font-editorial text-8xl text-[var(--accent)] mb-4">404</h1>
          <h2 className="font-editorial text-3xl md:text-4xl text-[var(--primary)] mb-6">
            Page not found
          </h2>
          <p className="text-lg text-[var(--foreground-soft)] mb-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="/">
              Return Home
            </Button>
            <Button variant="secondary" href="/claim">
              Start a Claim
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}