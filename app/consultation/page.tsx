import { Container } from "@/components/layout/Container";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

export default function ConsultationPage() {
     return (
          <main className="bg-[var(--background)] min-h-screen">

               {/* Navy Header Section matching screenshot */}
               <section className="bg-[var(--primary)] py-16 md:py-24 text-center px-4">
                    <Container>
                         <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                              Request a Free Claim Consultation
                         </h1>
                         <p className="text-[var(--border-dark)] text-lg md:text-xl">
                              Get Compensation with FREE repairs if you are living in a rented property.
                         </p>
                    </Container>
               </section>

               {/* Form Section */}
               <section className="relative -mt-10 pb-20 px-4">
                    <Container className="max-w-3xl">
                         <ConsultationForm />
                    </Container>
               </section>

          </main>
     );
}