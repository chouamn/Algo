// Doubled for seamless infinite loop
const clients = [
  'Healthcare', 'FinTech', 'E-Commerce', 'SaaS Platforms', 'State Government',
  'Insurance', 'EdTech', 'Retail', 'Media & Publishing', 'Logistics',
  'Digital Agencies', 'Enterprise IT', 'Nonprofits', 'Legal Tech',
  'Healthcare', 'FinTech', 'E-Commerce', 'SaaS Platforms', 'State Government',
  'Insurance', 'EdTech', 'Retail', 'Media & Publishing', 'Logistics',
  'Digital Agencies', 'Enterprise IT', 'Nonprofits', 'Legal Tech',
];

export function TrustedBy() {
  return (
    <div className="border-y border-[var(--border)] bg-[var(--light-gray)]">

      {/* Heading strip */}
      <div className="max-w-7xl mx-auto px-8 py-10 text-center">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--navy)]/70">
          Algotech Solutions supports hundreds of satisfied clients including
        </p>
      </div>

      {/* Marquee strip */}
      <div className="border-t border-[var(--border)] overflow-hidden py-4 bg-[var(--light-gray)]">
        <div className="flex gap-0 animate-marquee whitespace-nowrap">
          {clients.map((name, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-8">
              <span className="text-sm font-medium text-[var(--navy)]/50 tracking-wide">{name}</span>
              <span className="w-1 h-1 rounded-full bg-[var(--navy)]/20 shrink-0" />
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
