"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";

export function HomeLeadForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    issues: [] as string[],
    duration: "6 months plus",
    reported: "",
    existingClaim: "",
    tenantType: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  });

  const handleIssueToggle = (issue: string) => {
    setFormData(prev => ({
      ...prev,
      issues: prev.issues.includes(issue) 
        ? prev.issues.filter(i => i !== issue)
        : [...prev.issues, issue]
    }));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/send-home-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) setIsSuccess(true);
    } catch (error) {
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
        <div className="w-16 h-16 bg-[var(--success)]/10 text-[var(--success)] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 className="text-2xl text-[var(--primary)] font-editorial mb-2">Claim Submitted Successfully</h3>
        <p className="text-gray-500 text-sm mb-6">Our legal team will review your evidence and contact you shortly.</p>
        <button onClick={() => window.location.reload()} className="bg-[var(--primary)] text-white px-6 py-3 rounded-md w-full font-medium">
          Return to Homepage
        </button>
      </div>
    );
  }

  const progress = step === 1 ? 33 : step === 2 ? 66 : 100;

  return (
    <div className="bg-[#f0f2f5] rounded-xl shadow-2xl overflow-hidden p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-sm font-bold text-[#455a64] uppercase tracking-wide mb-4">
          Find out if you are eligible to claim for repairs and compensation
        </h3>
        <p className="text-xs text-gray-500 mb-2">Step {step} of 3</p>
        <div className="w-full bg-white rounded-full h-4 relative overflow-hidden">
          <div className="bg-[#1976d2] h-4 text-[10px] text-white flex items-center justify-center font-bold transition-all duration-500" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      </div>

      <form onSubmit={step === 3 ? submitForm : (e) => { e.preventDefault(); setStep(step + 1); }}>
        <AnimatePresence mode="wait">
          
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
              <h2 className="text-3xl font-bold text-[#455a64] border-b pb-4 border-gray-300">Tell Us About Your Disrepair</h2>
              
              <div className="space-y-3">
                <p className="font-bold text-[#455a64] text-sm">Disrepair details that are still ongoing <span className="text-red-500 italic font-normal">(Required)</span></p>
                {["Mould, fungus or dampness", "Leaks, flooding or water damage", "Cracks", "Defective roofing or gutters", "Defective brickwork", "Insect infestation"].map(issue => (
                  <Checkbox key={issue} id={issue} label={issue} checked={formData.issues.includes(issue)} onChange={() => handleIssueToggle(issue)} />
                ))}
              </div>

              <div className="space-y-2">
                <p className="font-bold text-[#455a64] text-sm">How long have you been suffering with the disrepair? <span className="text-red-500 italic font-normal">(Required)</span></p>
                <select 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#60878a] bg-white"
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                >
                  <option value="Less than 6 months">Less than 6 months</option>
                  <option value="6 months plus">6 months plus</option>
                  <option value="12 months plus">12 months plus</option>
                </select>
              </div>
              
              <button type="submit" disabled={formData.issues.length === 0} className="w-full bg-[#759a9c] hover:bg-[#60878a] text-white font-bold py-4 rounded disabled:opacity-50 transition-colors">
                Next
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
              <h2 className="text-2xl font-bold text-[#455a64] border-b pb-4 border-gray-300">Eligibility Check</h2>
              
              <Input label={<span>Have you been reporting the issues to your landlord for 3 months or more <span className="text-red-500 italic font-normal">(Required)</span></span> as any} placeholder="Yes / No" value={formData.reported} onChange={(e) => setFormData({...formData, reported: e.target.value})} required />
              <Input label={<span>Have you already started a disrepair claim in the past 12 months? <span className="text-red-500 italic font-normal">(Required)</span></span> as any} placeholder="Yes / No" value={formData.existingClaim} onChange={(e) => setFormData({...formData, existingClaim: e.target.value})} required />
              <Input label={<span>What type of tenant are you? <span className="text-red-500 italic font-normal">(Required)</span></span> as any} placeholder="Council / Housing Association" value={formData.tenantType} onChange={(e) => setFormData({...formData, tenantType: e.target.value})} required />
              
              <div className="flex gap-4">
                <button type="button" onClick={() => setStep(1)} className="w-1/3 bg-white text-[#455a64] font-bold py-4 rounded border border-gray-300 hover:bg-gray-50">Previous</button>
                <button type="submit" className="w-2/3 bg-[#759a9c] hover:bg-[#60878a] text-white font-bold py-4 rounded transition-colors">Next</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
              <h2 className="text-3xl font-bold text-[#455a64] border-b pb-4 border-gray-300">Your Details</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <Input label={<span>Name <span className="text-red-500 italic font-normal">(Required)</span></span> as any} placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} required />
                <Input label={<span>Surname <span className="text-red-500 italic font-normal">(Required)</span></span> as any} placeholder="Surname" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input label={<span>Mobile Number <span className="text-red-500 italic font-normal">(Required)</span></span> as any} type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
                <Input label={<span>Email <span className="text-red-500 italic font-normal">(Required)</span></span> as any} type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              </div>
              
              <p className="text-sm text-[#455a64]">By submitting my enquiry, I confirm I have read and agree with the terms of the privacy policy and I consent to Premier Legal Assist contacting me by either phone, email, SMS or post in relation to this enquiry.</p>

              <div className="flex gap-4">
                <button type="button" onClick={() => setStep(2)} className="w-1/3 bg-white text-[#455a64] font-bold py-4 rounded border border-gray-300 hover:bg-gray-50">Previous</button>
                <button type="submit" disabled={isSubmitting} className="w-2/3 bg-[#759a9c] hover:bg-[#60878a] text-white font-bold py-4 rounded transition-colors">
                  {isSubmitting ? "Sending..." : "Send for Review"}
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </form>
    </div>
  );
}