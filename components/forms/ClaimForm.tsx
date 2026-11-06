"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Checkbox } from "@/components/ui/Checkbox";
import { FormProgress } from "@/components/ui/FormProgress";
import { FileUpload } from "@/components/ui/FileUpload";
import { claimFormSchema, type ClaimFormValues } from "@/lib/validations/claim";

const STEPS = ["Personal Details", "Property Info", "Disrepair Details"];

export function ClaimForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, control, trigger, watch, formState: { errors } } = useForm<ClaimFormValues>({
    resolver: zodResolver(claimFormSchema),
    defaultValues: { issues: [] },
    mode: "onTouched",
  });

  const isPrivate = watch("landlordType") === "private";

  const processNextStep = async () => {
    if (currentStep === 0) {
      const isValid = await trigger(["firstName", "lastName", "email", "phone"]);
      if (isValid) setCurrentStep(1);
    } else if (currentStep === 1) {
      const isValid = await trigger(["addressLine1", "city", "postcode", "landlordType"]);
      if (isPrivate) return; 
      if (isValid) setCurrentStep(2);
    }
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const onSubmit = async (data: ClaimFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to send");
      
      router.replace("/thank-you");
      
    } catch (error) {
      console.error(error);
      alert("Error submitting claim. Please check your network or server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------------------------------------------------------------------------
  // FORM RENDERING
  // ---------------------------------------------------------------------------
  return (
    <div className="w-full max-w-2xl mx-auto bg-[var(--surface)] p-8 md:p-12 rounded-[var(--radius-lg)] border border-[var(--border)] shadow-xl overflow-hidden relative">
      <FormProgress steps={STEPS} currentStep={currentStep} className="mb-10" />

      <form onSubmit={handleSubmit(onSubmit)} className="min-h-[400px] flex flex-col">
        <div className="flex-grow relative">
          <AnimatePresence mode="wait">
            
            {currentStep === 0 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <h3 className="font-editorial text-3xl text-[var(--primary)] mb-2">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input label="First Name" {...register("firstName")} error={errors.firstName?.message} />
                  <Input label="Last Name" {...register("lastName")} error={errors.lastName?.message} />
                </div>
                <Input label="Email Address" type="email" {...register("email")} error={errors.email?.message} />
                <Input label="Phone Number" type="tel" {...register("phone")} error={errors.phone?.message} />
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <h3 className="font-editorial text-3xl text-[var(--primary)] mb-2">Property Information</h3>
                <Input label="First Line of Address" {...register("addressLine1")} error={errors.addressLine1?.message} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input label="City" {...register("city")} error={errors.city?.message} />
                  <Input label="Postcode" {...register("postcode")} error={errors.postcode?.message} />
                </div>
                
                <div className="pt-4 space-y-4">
                  <p className="text-sm font-medium border-b border-[var(--border)] pb-2">Who is your landlord?</p>
                  <Controller
                    name="landlordType"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-3">
                        <Checkbox id="council" label="Local Council" checked={field.value === "council"} onChange={() => field.onChange("council")} />
                        <Checkbox id="housing-assoc" label="Housing Association" checked={field.value === "housing_association"} onChange={() => field.onChange("housing_association")} />
                        <Checkbox id="private" label="Private Landlord (We currently do not accept private cases)" checked={field.value === "private"} onChange={() => field.onChange("private")} />
                      </div>
                    )}
                  />
                  {errors.landlordType && <p className="text-xs text-[var(--error)] mt-1">{errors.landlordType.message}</p>}
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <h3 className="font-editorial text-3xl text-[var(--primary)] mb-2">Disrepair Details</h3>
                
                <div className="space-y-4 mb-6">
                  <p className="text-sm font-medium border-b border-[var(--border)] pb-2">Select all that apply:</p>
                  <Controller
                    name="issues"
                    control={control}
                    render={({ field }) => (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {["Damp & Mould", "Water Leaks", "No Heating/Hot Water", "Structural Cracks", "Roof Damage", "Pest Infestation"].map(issue => (
                          <Checkbox 
                            key={issue} id={issue} label={issue} 
                            checked={field.value?.includes(issue)}
                            onChange={() => {
                              const current = field.value || [];
                              field.onChange(current.includes(issue) ? current.filter(i => i !== issue) : [...current, issue]);
                            }} 
                          />
                        ))}
                      </div>
                    )}
                  />
                  {errors.issues && <p className="text-xs text-[var(--error)] mt-1">{errors.issues.message}</p>}
                </div>
                
                <Textarea label="Additional Details" {...register("additionalDetails")} />
                
                <div className="pt-6 border-t border-[var(--border)]">
                  <Controller
                    name="evidence"
                    control={control}
                    render={({ field }) => (
                      <FileUpload 
                        label="Upload Evidence (Optional)" 
                        accept="image/*" 
                        onChange={field.onChange} 
                      />
                    )}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-between items-center mt-10 pt-6 border-t border-[var(--border)]">
          <Button type="button" variant="ghost" onClick={prevStep} className={currentStep === 0 ? "invisible" : ""}>Back</Button>
          
          {currentStep === STEPS.length - 1 ? (
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Claim"}
            </Button>
          ) : isPrivate ? (
            <div className="px-6 h-12 flex items-center justify-center bg-[var(--error)]/10 text-[var(--error)] border border-[var(--error)]/20 rounded-md font-medium text-sm">
              We cannot process private claims.
            </div>
          ) : (
            <Button type="button" variant="primary" onClick={processNextStep}>
              Continue
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}