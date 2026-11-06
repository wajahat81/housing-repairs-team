"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

const SERVICES = [
  { 
    title: "Damp & Mould", 
    description: "Persistent dampness causes severe health issues. We compel landlords to fix the structural root cause.",
    image: "/damp&mould.avif", // Make sure this file exists in your public folder
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
  },
  { 
    title: "Structural Defects", 
    description: "Subsidence, severe wall cracks, and collapsing ceilings are urgent safety hazards. We mandate immediate repairs.",
    image: "/structural-defects.avif", // Make sure this file exists
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg>
  },
  { 
    title: "Plumbing & Heating", 
    description: "Living without a functioning boiler or hot water is unacceptable. We prioritize claims for critical utility failures.",
    image: "/plumbing-heating.avif", // Make sure this file exists
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
  },
  { 
    title: "Roofing & Gutters", 
    description: "Missing tiles and blocked guttering lead to extensive internal water damage. We ensure exterior integrity is restored.",
    image: "/roofing-gutters.avif", // Make sure this file exists
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
  }
];

const DISPAIR_ITEMS = [
  "Water damage",
  "Damp or mould",
  "Damaged or leaking roof or guttering",
  "Broken or rotten windows and doors",
  "Broken appliances that were included in your tenancy",
  "Broken bathroom fittings",
  "Internal damage to wallpaper, paint, carpets and curtains (If included in the tenancy)",
  "Damage or faulty electrics",
  "Damage to internal gas and water pipe work",
  "Any other damage to your property"
];

export function ServicesSection({ id }: { id?: string }) {
  return (
    <Section id={id} className="bg-[var(--surface-soft)] py-24 md:py-32 border-t border-[var(--border)]">
      <Container className="space-y-32">
        
        {/* BLOCK 1: Help With Housing Complaints */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[var(--surface)] p-8 md:p-14 rounded-[var(--radius-lg)] border border-[var(--border)] shadow-xl">
            <div className="space-y-6">
              <h2 className="font-editorial text-3xl md:text-4xl text-[var(--primary)] leading-tight">
                Help With Housing Complaints
              </h2>
              <p className="text-lg font-semibold text-[var(--foreground)]">
                Have you contacted your Landlord about repairs that need to be carried out and still haven't had your repairs completed?
              </p>
              <p className="text-[var(--foreground-soft)] leading-relaxed text-sm">
                Our Solicitors will establish whether you could have a successful claim by providing a free assessment of your housing disrepair issues. If they believe you have a good case they will contact you to discuss your housing complaints. The main thing is to ensure all repairs are carried out by your landlord and they will not deduct anything from the cost of repairs, they will also seek to recover any compensation due to you as part of your housing complaint.
              </p>
              <p className="text-sm font-medium text-[var(--primary)]">
                Find out how we can help ensure your disrepair is fixed and recover any compensation due.
              </p>
              <div className="pt-2">
                <Button href="/claim" variant="primary">
                  Make a Housing Complaint
                </Button>
              </div>
            </div>
            
            {/* REMOVED hidden lg:block so it shows on mobile */}
            <div className="relative h-[350px] md:h-[420px] rounded-[var(--radius-md)] overflow-hidden shadow-md border border-[var(--border)] w-full">
              <Image 
                src="/damp&mould.avif" 
                alt="Housing Disrepair Example" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>

        {/* BLOCK 2: What Counts As Housing Disrepair? */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[var(--primary)] text-white p-8 md:p-14 rounded-[var(--radius-lg)] shadow-2xl relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <h2 className="font-editorial text-3xl md:text-4xl text-white leading-tight">
                What Counts As Housing Disrepair?
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                A housing complaint can be made for a range of disrepair issues, the severity of the issues will impact the extent of the housing disrepair claim that can be made.
              </p>
              <p className="text-white/90 font-medium text-sm">
                Have you contacted your Landlord about repairs that need to be carried out and still haven't had your repairs completed?
              </p>
              
              <ul className="space-y-2.5 text-sm text-white/80">
                {DISPAIR_ITEMS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--accent)] font-bold">▪</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-white/70 pt-2 border-t border-white/10 leading-relaxed">
                If you have reported any of these repairs to your landlord and they have not been completed in a timely manner, you can claim. Unfortunately we are unable to assist if your tenancy is currently with a private landlord and not a housing association or council.
              </p>

              <div className="pt-2">
                <Button href="/claim" variant="primary" className="bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]">
                  Start Housing Disrepair Claim
                </Button>
              </div>
            </div>

            {/* REMOVED hidden lg:block so it shows on mobile */}
            <div className="relative h-[350px] md:h-[500px] rounded-[var(--radius-md)] overflow-hidden shadow-2xl border border-white/10 w-full">
              <Image 
                src="/Roofing&Gutters.avif" 
                alt="Housing Maintenance" 
                fill
                className="object-cover opacity-80"
              />
            </div>
          </div>
        </FadeIn>

        {/* BLOCK 3: Our Expertise Grid */}
        <div>
          <FadeIn>
            <SectionHeading 
              title="Our Expertise" 
              subtitle="We specialize in holding local councils and housing associations accountable. If your home suffers from any of these issues, you have a valid claim."
              align="center"
            />
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {SERVICES.map((service, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <Card hoverable className="flex flex-col h-full bg-[var(--surface)] border-t-4 border-t-transparent hover:border-t-[var(--accent)] transition-all duration-300 p-0 overflow-hidden">
                  
                  {/* Fixed Square Image Container - Shows on all screen sizes */}
                  

                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="font-editorial text-xl text-[var(--primary)] mb-3">{service.title}</h3>
                    <p className="text-[var(--foreground-soft)] text-sm leading-relaxed flex-grow">{service.description}</p>
                    <div className="mt-6 pt-6 border-t border-[var(--border)]">
                      <Link href="/claim" className="text-[var(--accent)] text-sm font-medium hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1 group">
                        Claim for this issue 
                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>

      </Container>
    </Section>
  );
}