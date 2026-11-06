import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const VALUES = [
  {
    title: "Tenant First Approach",
    description: "We believe every tenant has the fundamental right to a safe, warm, and secure home. Your wellbeing is the driving force behind everything we do."
  },
  {
    title: "No Win, No Fee",
    description: "Access to justice shouldn't depend on your financial situation. Our panel of solicitors operates entirely on a conditional fee agreement, meaning zero upfront costs."
  },
  {
    title: "Specialist Expertise",
    description: "Housing disrepair is a highly specific area of law. We strictly partner with solicitors who specialize in this exact field to ensure the highest chance of success."
  },
  {
    title: "Complete Transparency",
    description: "Legal processes can be confusing. We guarantee clear, jargon-free communication at every stage of your claim, from initial assessment to final compensation."
  }
];

export function Values() {
  return (
    <Section className="bg-[var(--surface-soft)] border-y border-[var(--border)]">
      <Container>
        <SectionHeading 
          title="Our Commitments" 
          subtitle="We exist to level the playing field between tenants and neglectful landlords."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
          {VALUES.map((value, index) => (
            <Card key={index} className="flex flex-col h-full bg-[var(--surface)]">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mb-6">
                <span className="text-[var(--accent)] font-editorial text-xl">{index + 1}</span>
              </div>
              <h3 className="font-editorial text-2xl text-[var(--primary)] mb-3">
                {value.title}
              </h3>
              <p className="text-[var(--foreground-soft)] leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}