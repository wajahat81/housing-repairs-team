import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function TermsPage() {
  const lastUpdated = "September 8, 2026";

  return (
    <main className="bg-[var(--background)]">
      <Section className="pt-24 pb-20">
        <Container className="max-w-3xl">
          <div className="mb-12 border-b border-[var(--border)] pb-8">
            <h1 className="font-editorial text-4xl md:text-5xl text-[var(--primary)] mb-4">
              Terms of Service
            </h1>
            <p className="text-[var(--foreground-muted)] text-sm">
              Last Updated: {lastUpdated}
            </p>
          </div>

          <div className="prose prose-lg prose-headings:font-editorial prose-headings:text-[var(--primary)] prose-p:text-[var(--foreground-soft)] max-w-none">
            <p>
              Please read these Terms of Service carefully before using the Housing Repairs Team website.
            </p>

            <h2>1. Our Service</h2>
            <p>
               Housing Repairs Team acts as a claims management and introductory service. We assess initial inquiries regarding housing disrepair and introduce prospective clients to our panel of independent, regulated solicitors. We do not provide direct legal advice.
            </p>

            <h2>2. No Win, No Fee</h2>
            <p>
              Any legal representation undertaken by our partner solicitors will be subject to a Conditional Fee Agreement (No Win, No Fee). The specific terms, including any success fees deducted from compensation, will be agreed directly between you and the appointed solicitor before legal action begins.
            </p>

            <h2>3. User Obligations</h2>
            <p>
              By submitting a claim through our platform, you confirm that you are a tenant of a local council or housing association, and that the information provided is accurate to the best of your knowledge.
            </p>
            
            <h2>4. Limitation of Liability</h2>
            <p>
              While we strive to ensure all information on this website is accurate, we cannot guarantee specific outcomes for any legal claims. Liability for legal proceedings rests solely with the appointed legal representatives.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}