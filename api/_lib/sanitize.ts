// api/_lib/sanitize.ts

const TAG_REGEX = /<[^>]*>/g;
const CONTROL_REGEX = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;

export function sanitizeString(value: string): string {
  return value
    .replace(TAG_REGEX, '')
    .replace(CONTROL_REGEX, '')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

export function sanitizeOptional(value: string | undefined | null): string | undefined {
  if (value === undefined || value === null) return undefined;
  const cleaned = sanitizeString(value);
  return cleaned.length > 0 ? cleaned : undefined;
}
