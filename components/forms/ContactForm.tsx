"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { AnimatePresence, motion } from "framer-motion";

interface ContactFormValues {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send");
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-[var(--surface)] p-8 rounded-[var(--radius-lg)] border border-[var(--border)] shadow-[var(--shadow-sm)] text-center">
        <div className="w-12 h-12 bg-[var(--success)]/10 text-[var(--success)] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 className="font-editorial text-2xl text-[var(--primary)] mb-2">Message Sent</h3>
        <p className="text-[var(--foreground-soft)] text-sm">Thank you for reaching out. We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-[var(--surface)] p-8 rounded-[var(--radius-lg)] border border-[var(--border)] shadow-[var(--shadow-sm)] space-y-6">
      <h3 className="font-editorial text-2xl text-[var(--primary)] mb-4">Send us a message</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input 
          label="Full Name" 
          placeholder="Full Name" 
          {...register("fullName", { required: "Name is required" })} 
          error={errors.fullName?.message}
        />
        <Input 
          label="Email Address" 
          type="email" 
          placeholder="your-email@example.com" 
          {...register("email", { required: "Email is required" })} 
          error={errors.email?.message}
        />
      </div>
      
      <Input 
        label="Phone Number" 
        type="tel" 
        placeholder="+44 1234 567890" 
        {...register("phone")} 
      />
      
      <Textarea 
        label="How can we help?" 
        placeholder="Please leave your message here. If you are looking to start a claim, please use our Start Claim form for faster processing." 
        {...register("message", { required: "Message is required" })}
        error={errors.message?.message}
      />
      
      {submitStatus === "error" && (
        <p className="text-sm text-[var(--error)]">Failed to send message. Please try again.</p>
      )}

      <Button type="submit" variant="primary" className="w-full h-12" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}