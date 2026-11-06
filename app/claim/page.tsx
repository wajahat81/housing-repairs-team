import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ClaimForm } from "@/components/forms/ClaimForm";

export default function ClaimPage() {
    return (
        <main className="bg-[var(--background)] min-h-screen">
            <Section className="py-12 md:py-20">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h1 className="font-editorial text-4xl md:text-5xl text-[var(--primary)] mb-4">
                            Start Your Free Evaluation
                        </h1>
                        <p className="text-lg text-[var(--foreground-soft)]">
                            Complete the form below to help us understand your situation. Our legal experts will review your details and contact you within 24 hours.
                        </p>
                    </div>

                    <ClaimForm />

                    <div className="mt-8 text-center max-w-xl mx-auto text-sm text-[var(--foreground-muted)]">
                        <p>
                            By submitting this form, you agree to our Privacy Policy. We keep all your information strictly confidential and secure.
                        </p>
                    </div>
                </Container>
            </Section>
        </main>
    );
}