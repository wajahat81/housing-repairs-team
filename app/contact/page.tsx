import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-[var(--background)] min-h-screen">
      <Section className="pt-32 pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Information */}
            <div>
              <span className="text-[var(--accent)] font-medium tracking-wide uppercase text-sm mb-4 block">
                Get in Touch
              </span>
              <h1 className="font-editorial text-5xl md:text-6xl text-[var(--primary)] mb-6">
                Contact Our Team
              </h1>
              <p className="text-lg text-[var(--foreground-soft)] mb-12 max-w-md">
                Have a question about the process, or need an update on an existing inquiry? Reach out to our support team.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium text-[var(--foreground-muted)] uppercase tracking-wider mb-2">Phone</h4>
                  <p className="text-2xl font-editorial text-[var(--primary)]">0800 123 4567</p>
                  <p className="text-sm text-[var(--foreground-soft)] mt-1">Monday – Friday, 9am – 5pm</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-[var(--foreground-muted)] uppercase tracking-wider mb-2">Email</h4>
                  <p className="text-xl text-[var(--primary)]">help@housingrepairsteam.co.uk</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-[var(--foreground-muted)] uppercase tracking-wider mb-2">Office</h4>
                  <p className="text-lg text-[var(--primary)] leading-relaxed">
                    Housing Repairs Team Legal Support<br />
                    123 Business Center<br />
                    London, UK<br />
                    SW1A 1AA
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:mt-12">
              <ContactForm />
            </div>

          </div>
        </Container>
      </Section>
    </main>
  );
}