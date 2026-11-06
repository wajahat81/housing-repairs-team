import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const services = [
  {
    title: "Damp & Mould",
    description: "Persistent dampness and mould can cause severe respiratory issues. We force landlords to eradicate the root cause, not just paint over it.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)]"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
    )
  },
  {
    title: "Structural Defects",
    description: "Cracked walls, subsiding floors, and collapsing ceilings are immediate hazards. We ensure urgent structural assessments and repairs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)]"><path d="M3 21h18"></path><path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2-4h14l2 4"></path><line x1="5" y1="21" x2="5" y2="10"></line><line x1="19" y1="21" x2="19" y2="10"></line><path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"></path></svg>
    )
  },
  {
    title: "Plumbing & Heating",
    description: "Living without hot water or functioning central heating is unacceptable. We expedite claims for critical utility failures.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)]"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    )
  }
];

export function Features() {
  return (
    <Section className="bg-[var(--surface-soft)]">
      <Container>
        <SectionHeading 
          title="Areas of Expertise" 
          subtitle="Landlords are legally obligated to maintain your property. If they fail, we step in. These are the most common issues we resolve."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <Card key={index} hoverable className="flex flex-col h-full">
              <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--background)] flex items-center justify-center mb-6 border border-[var(--border)]">
                {service.icon}
              </div>
              <h3 className="font-editorial text-2xl text-[var(--primary)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--foreground-soft)] leading-relaxed flex-grow">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}