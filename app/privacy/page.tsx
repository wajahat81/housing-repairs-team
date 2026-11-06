import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 8, 2026";

  return (
    <main className="bg-[var(--background)]">
      <Section className="pt-24 pb-20">
        <Container className="max-w-3xl">
          <div className="mb-12 border-b border-[var(--border)] pb-8">
            <h1 className="font-editorial text-4xl md:text-5xl text-[var(--primary)] mb-4">
              Privacy Policy
            </h1>
            <p className="text-[var(--foreground-muted)] text-sm">
              Last Updated: {lastUpdated}
            </p>
          </div>

          <div className="prose prose-lg prose-headings:font-editorial prose-headings:text-[var(--primary)] prose-p:text-[var(--foreground-soft)] prose-a:text-[var(--accent)] max-w-none">
            <p>
              Housing Repairs Team ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by us.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you fill out a claims form, request support, or communicate with us. This may include:
            </p>
            <ul>
              <li>Contact information (Name, Email, Phone number)</li>
              <li>Property details and tenancy status</li>
              <li>Photographic evidence of housing disrepair</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              The information we collect is used strictly for the purpose of assessing your housing disrepair claim and introducing you to our panel of specialist solicitors. We do not sell your personal data to third-party marketing companies.
            </p>

            <h2>3. Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information when you submit a claim. All sensitive information and photographic evidence is transmitted via Secure Socket Layer (SSL) technology and securely stored.
            </p>
            
            <h2>4. Contact Us</h2>
            <p>
              If you have any questions regarding this privacy policy, you may contact us using the information on our <a href="/contact">Contact Page</a>.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}