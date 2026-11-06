"use client";

import { Container } from "@/components/layout/Container";

export default function Loading() {
  return (
    <main className="flex-1 bg-[var(--background)] flex flex-col items-center justify-center min-h-[70vh]">
      <Container className="flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 border-4 border-[var(--border)] border-t-[var(--accent)] rounded-full animate-spin mb-6" />
        <h2 className="font-editorial text-2xl text-[var(--primary)] animate-pulse">
          Loading...
        </h2>
      </Container>
    </main>
  );
}