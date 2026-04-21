// api/_lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Serverless-safe singleton.
// Vercel may reuse the same Node process across multiple invocations of a
// warm Lambda container. Attaching the client to `globalThis` preserves the
// connection across those warm invocations and prevents pool exhaustion under
// load. When the container is cold-started, a fresh client is created.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'production' ? ['error'] : ['error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
