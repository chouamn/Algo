// api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { inquirySchema } from './_lib/inquirySchema';
import { createInquiry } from './_lib/contactService';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const parsed = inquirySchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      error: 'Validation failed',
      details: parsed.error.flatten().fieldErrors,
    });
  }

  try {
    const inquiry = await createInquiry(parsed.data);
    return res.status(201).json({
      ok: true,
      data: { id: inquiry.id, createdAt: inquiry.createdAt },
    });
  } catch (error) {
    console.error(JSON.stringify({
      level: 'error',
      msg: 'Failed to create inquiry',
      message: (error as Error).message,
    }));
    return res.status(500).json({
      ok: false,
      error: 'Unable to process inquiry at this time.',
    });
  }
}
