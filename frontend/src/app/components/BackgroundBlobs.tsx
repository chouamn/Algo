/**
 * Decorative ambient blobs used across all sections for visual consistency.
 * Matches the Software Services section styling: cyan top-right, navy bottom-left.
 * aria-hidden so assistive tech skips it entirely.
 */
export function BackgroundBlobs() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-[var(--cyan)]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] bg-[var(--navy)]/10 rounded-full blur-3xl" />
    </div>
  );
}
