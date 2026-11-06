"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Checkbox } from "@/components/ui/Checkbox";
import { motion, AnimatePresence } from "framer-motion";

interface ConsultationFormValues {
     fullName: string;
     email: string;
     phone: string;
     tenantType: string;
     message: string;
     consent: boolean;
}

export function ConsultationForm() {
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

     const { register, handleSubmit, formState: { errors }, reset } = useForm<ConsultationFormValues>();

     const onSubmit = async (data: ConsultationFormValues) => {
          if (!data.consent) {
               alert("You must provide consent to proceed.");
               return;
          }

          setIsSubmitting(true);
          setSubmitStatus("idle");

          try {
               const response = await fetch("/api/send-consultation", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
               });

               if (!response.ok) throw new Error("Failed to send");

               setSubmitStatus("success");
               reset(); // Clear form on success
          } catch (error) {
               setSubmitStatus("error");
          } finally {
               setIsSubmitting(false);
          }
     };

     if (submitStatus === "success") {
          return (
               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[var(--surface)] p-8 rounded-[var(--radius-lg)] border border-[var(--border)] shadow-[var(--shadow-sm)] text-center"
               >
                    <div className="w-12 h-12 bg-[var(--success)]/10 text-[var(--success)] rounded-full flex items-center justify-center mx-auto mb-4">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <h3 className="font-editorial text-2xl text-[var(--primary)] mb-2">Request Received</h3>
                    <p className="text-[var(--foreground-soft)] text-sm">Thank you for reaching out. Our team will review your details and contact you shortly.</p>
               </motion.div>
          );
     }

     return (
          <form onSubmit={handleSubmit(onSubmit)} className="bg-[var(--surface)] p-8 md:p-10 rounded-[var(--radius-lg)] border border-[var(--border)] shadow-[var(--shadow-md)] space-y-6">
               <div className="text-center mb-8">
                    <h2 className="font-editorial text-3xl text-[var(--primary)] mb-2">Book A Free Consultation</h2>
                    <div className="w-12 h-1 bg-[var(--accent)] mx-auto"></div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                         label="Full Name *"
                         placeholder="Full Name"
                         {...register("fullName", { required: "Name is required" })}
                         error={errors.fullName?.message}
                    />
                    <Input
                         label="Email Address *"
                         type="email"
                         placeholder="Email Address"
                         {...register("email", { required: "Email is required" })}
                         error={errors.email?.message}
                    />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                         label="Phone Number *"
                         type="tel"
                         placeholder="Phone Number"
                         {...register("phone", { required: "Phone number is required" })}
                         error={errors.phone?.message}
                    />

                    <div className="flex flex-col gap-1.5 w-full">
                         <label className="text-sm font-medium text-[var(--foreground)]">Are you a Tenant with *</label>
                         <select
                              {...register("tenantType", { required: "Please select a tenant type" })}
                              className="flex h-12 w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm transition-colors placeholder:text-[var(--foreground-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:border-transparent"
                         >
                              <option value="" disabled selected>Select Council Type...</option>
                              <option value="Local Council">Local Council</option>
                              <option value="Housing Association">Housing Association</option>
                         </select>
                         {errors.tenantType && <span className="text-xs text-[var(--error)]">{errors.tenantType.message}</span>}
                    </div>
               </div>

               <Textarea
                    label="Your Message *"
                    placeholder="Briefly describe your property damages..."
                    {...register("message", { required: "Message is required" })}
                    error={errors.message?.message}
               />

               <div className="pt-2">
                    <Checkbox
                         id="consent"
                         label="I consent to having this website store my submitted information so they can respond to my inquiry. *"
                         {...register("consent", { required: "You must provide consent" })}
                    />
                    {errors.consent && <span className="text-xs text-[var(--error)] mt-1 block">{errors.consent.message}</span>}
               </div>

               {submitStatus === "error" && (
                    <p className="text-sm text-[var(--error)]">Failed to send request. Please try again.</p>
               )}

               <Button type="submit" variant="primary" className="w-full h-14 text-lg bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Request a Claim"}
               </Button>
          </form>
     );
}