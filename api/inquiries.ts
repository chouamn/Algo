// api/inquiries.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

// TODO: Implement authenticated admin listing with pagination. Must be wired
// behind an auth middleware (e.g. NextAuth, Clerk, or a signed JWT) before
// removing this 501 stub — the raw table contains personally identifiable
// information and cannot be exposed publicly.
export default function handler(_req: VercelRequest, res: VercelResponse) {
  return res.status(501).json({
    ok: false,
    error: 'Not implemented',
    message:
      'GET /api/inquiries is reserved for a future authenticated admin endpoint.',
  });
}
