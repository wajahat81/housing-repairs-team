import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Free Initial Assessment",
    description: "Complete our simple online form or call our team. We will briefly review your tenancy status and the disrepair issues to determine if you have a valid claim against your local council or housing association."
  },
  {
    number: "02",
    title: "Solicitor Allocation",
    description: "If your claim is viable, we will introduce you to our panel of expert housing disrepair solicitors. They will take on your case on a strictly No Win, No Fee basis, meaning no upfront costs for you."
  },
  {
    number: "03",
    title: "Survey & Evidence Gathering",
    description: "Your solicitor will arrange for an independent surveyor to visit your property. They will document the damage, assess the health risks, and compile a formal report to be used as evidence."
  },
  {
    number: "04",
    title: "Legal Action & Repairs",
    description: "Your legal team will serve formal notice to your landlord, legally compelling them to carry out the necessary repairs to bring your home back to a safe, habitable standard."
  },
  {
    number: "05",
    title: "Compensation Recovery",
    description: "Alongside forcing the repairs, your solicitor will negotiate compensation for the stress, inconvenience, and any damaged personal property you endured during the period of disrepair."
  }
];

export function ProcessSteps() {
  return (
    <Section className="bg-[var(--surface-soft)]">
      <Container>
        <SectionHeading 
          title="How It Works" 
          subtitle="A transparent, stress-free path to securing the repairs and compensation you deserve."
          align="center"
        />

        <div className="max-w-4xl mx-auto mt-16 space-y-12 relative">
          {/* Vertical connecting line for desktop */}
          <div className="hidden md:block absolute left-[2.25rem] top-4 bottom-4 w-px bg-[var(--border-dark)] z-0" />

          {STEPS.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-12 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[var(--surface)] border-2 border-[var(--border-dark)] flex items-center justify-center font-editorial text-2xl text-[var(--accent)] group-hover:border-[var(--accent)] group-hover:bg-[var(--primary)] transition-all duration-300">
                  {step.number}
                </div>
              </div>
              <div className="bg-[var(--surface)] p-6 md:p-8 rounded-[var(--radius-lg)] border border-[var(--border)] shadow-[var(--shadow-sm)] flex-grow transition-all duration-300 group-hover:shadow-[var(--shadow-md)] group-hover:border-[var(--border-dark)]">
                <h3 className="font-editorial text-2xl text-[var(--primary)] mb-3">
                  {step.title}
                </h3>
                <p className="text-[var(--foreground-soft)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}