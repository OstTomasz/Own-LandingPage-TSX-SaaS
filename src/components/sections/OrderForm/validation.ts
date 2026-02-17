import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),

  // Regex akceptuje opcjonalny +, cyfry i spacje (standard dla numerów tel.)
  phone: z
    .string()
    .min(7, "Phone number is too short")
    .regex(/^[0-9+ ]+$/, "Invalid phone number format"),

  email: z.string().min(1, "Email is required").email("Invalid email address"),

  comment: z
    .string()
    .max(1000, "Comment is too long")
    .optional()
    .or(z.literal("")), // Pozwala na pusty string bez błędów walidacji

  policy: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
