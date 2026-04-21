// api/_lib/inquirySchema.ts
import { z } from 'zod';

const optionalString = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .or(z.literal('').transform(() => undefined));

export const inquirySchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(120),
  email: z.string().trim().email('Invalid email').max(254),
  phone: optionalString(30),
  company: optionalString(200),
  message: z.string().trim().min(1, 'Message is required').max(5000),
  serviceInterest: z
    .string()
    .trim()
    .min(1)
    .max(120)
    .default('General Inquiry'),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
