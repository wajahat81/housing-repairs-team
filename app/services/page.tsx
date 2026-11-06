import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CTA } from "@/components/blocks/CTA";
import Link from "next/link";
import Image from "next/image"; // 1. Import Next.js Image component

const SERVICES = [
  {
    title: "Damp & Mould",
    // 2. Removed "/public". Corrected extension to match your file explorer (.avif)
    image: "/damp&mould.avif", 
    description: "Persistent dampness causes severe health issues and ruins personal property. We compel landlords to fix the structural root cause, not just apply a temporary aesthetic fix."
  },
  {
    title: "Structural Defects",
    // Make sure a file with this EXACT name exists in your public folder
    image: "/structural-defects.jpg",
    description: "Subsidence, severe wall cracks, and collapsing ceilings are urgent safety hazards. We mandate immediate structural surveys and repairs."
  },
  {
    title: "Plumbing & Heating",
    image: "/plumbing-heating.jpg",
    description: "Living without a functioning boiler, hot water, or dealing with chronic pipe leaks is unacceptable. We prioritize claims for critical utility failures."
  },
  {
    title: "Roofing & Gutters",
    image: "/roofing-gutters.jpg",
    description: "Missing tiles, rotten roof timbers, and blocked guttering lead to extensive internal water damage. We ensure exterior integrity is restored."
  },
  {
    title: "Defective Brickwork",
    image: "/brickwork.jpg",
    description: "Crumbling mortar and damaged external walls compromise your home's insulation and security. We hold landlords accountable for exterior maintenance."
  },
  {
    title: "Pest Infestations",
    image: "/pest-infestations.jpg",
    description: "If an infestation is caused by gaps in the property's structure or prolonged neglect by the landlord, you have grounds to force pest control and repairs."
  }
];

export default function ServicesPage() {
  return (
    <main>
      <Section className="bg-[var(--background)] pt-32 pb-20">
        <Container>
          <div className="max-w-3xl mb-16">
            <h1 className="font-editorial text-5xl md:text-6xl text-[var(--primary)] mb-6">
              Our Expertise
            </h1>
            <p className="text-xl text-[var(--foreground-soft)] leading-relaxed">
              We specialize in holding local councils and housing associations accountable. If your home suffers from any of these issues and your complaints have been ignored, you have a valid claim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <Card key={index} hoverable className="flex flex-col h-full p-0 overflow-hidden">
                
                {/* Fixed Square Image Container */}
                <div className="w-full aspect-square bg-[var(--foreground-soft)]/10 relative">
                  {/* 3. Use Next.js Image component with the 'fill' prop */}
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Text Content Wrapper */}
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="font-editorial text-2xl text-[var(--primary)] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[var(--foreground-soft)] leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-8 pt-6 border-t border-[var(--border)]">
                    <Link href="/claim" className="text-[var(--accent)] font-medium hover:text-[var(--primary)] transition-colors">
                      Claim for this issue →
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTA 
        title="Unsure if your issue qualifies?"
        description="Submit your details for a free, no-obligation assessment. Our experts will let you know immediately if you have a case."
        primaryAction={{
          label: "Start Free Assessment",
          href: "/claim"
        }}
      />
    </main>
  );
}