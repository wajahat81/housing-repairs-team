import { z } from "zod";

export const claimFormSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  addressLine1: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  postcode: z.string().min(5, "Postcode is required"),
  landlordType: z.enum(["council", "housing_association", "private"], {
    errorMap: () => ({ message: "Please select your landlord type" }),
  }),
  issues: z.array(z.string()).min(1, "Select at least one issue"),
  additionalDetails: z.string().optional(),
  
  // UPDATED: Now an array of objects
  evidence: z.array(
    z.object({
      name: z.string(),
      data: z.string() 
    })
  ).optional(),
});

export type ClaimFormValues = z.infer<typeof claimFormSchema>;