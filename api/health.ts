// api/health.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from './_lib/prisma';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  const start = Date.now();
  try {
    await prisma.$queryRaw`SELECT 1`;
    return res.status(200).json({
      ok: true,
      connected: true,
      latencyMs: Date.now() - start,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return res.status(503).json({
      ok: false,
      connected: false,
      error: 'Database unreachable',
      message: (error as Error).message,
      timestamp: new Date().toISOString(),
    });
  }
}
