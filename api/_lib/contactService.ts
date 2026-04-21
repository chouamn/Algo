// api/_lib/contactService.ts
import type { Inquiry } from '@prisma/client';
import { prisma } from './prisma';
import { sanitizeString, sanitizeOptional } from './sanitize';
import { sendInquiryNotification } from './email';
import type { InquiryInput } from './inquirySchema';

export async function createInquiry(input: InquiryInput): Promise<Inquiry> {
  const data = {
    name: sanitizeString(input.name),
    email: sanitizeString(input.email).toLowerCase(),
    phone: sanitizeOptional(input.phone),
    company: sanitizeOptional(input.company),
    message: sanitizeString(input.message),
    serviceInterest: sanitizeString(input.serviceInterest),
  };

  const inquiry = await prisma.inquiry.create({ data });

  // Email is awaited but self-isolating — sendInquiryNotification handles
  // its own errors. The HTTP response is never a 5xx due to SendGrid infra.
  await sendInquiryNotification(inquiry);

  return inquiry;
}
