import { Link } from 'react-router';

type FooterLink = { label: string; route?: string; href?: string };

const qaServices: FooterLink[] = [
  { label: 'Automation Testing',          route: '/qa-services/test-automation-services' },
  { label: 'Functional Testing',          route: '/qa-services/functionality-testing' },
  { label: 'Accessibility Testing',       route: '/accessibility/accessibility-testing' },
  { label: 'Device Compatibility Testing', route: '/qa-services/compatibility-testing' },
];

const licensingSoftware: FooterLink[] = [
  { label: 'Volume Licensing',              route: '/software-services/licensing' },
  { label: 'Software Procurement',          route: '/software-services/licensing' },
  { label: 'License Lifecycle Management',  route: '/software-services/licensing' },
  { label: 'IT Consulting',                 route: '/software-services/licensing' },
];

const company: FooterLink[] = [
  { label: 'About',           route: '/about' },
  { label: 'Careers',         href: '#careers' },
  { label: 'Contact',         href: '#contact-us' },
  { label: 'Privacy Policy',  href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  const className =
    'block text-white/60 hover:text-white transition-colors duration-200 text-sm py-1.5';

  if (link.route) {
    return (
      <Link to={link.route} onClick={() => window.scrollTo(0, 0)} className={className}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} className={className}>
      {link.label}
    </a>
  );
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-xs font-semibold tracking-widest text-white uppercase mb-6">
      {children}
    </h4>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[var(--navy)] to-[#141b3a] text-white overflow-hidden">
      {/* Subtle top divider — gradient rule */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan)]/40 to-transparent"
      />

      {/* Ambient accent */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 w-[32rem] h-[32rem] bg-[var(--cyan)]/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Top — 4-column grid, all columns aligned to same baseline via items-start */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 items-start pb-12">

          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/src/imports/logo.jpeg"
                alt="Algotech Solutions logo"
                className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
              />
              <span className="font-bold text-base leading-tight tracking-tight">
                Algotech<br />Solutions
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-[30ch] mb-6">
              Enterprise QA, accessibility, security, and software services —
              U.S.-based, onshore, compliance-ready.
            </p>

            {/* Social row */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[var(--cyan)]/15 ring-1 ring-white/10 hover:ring-[var(--cyan)]/40 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              >
                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="X (formerly Twitter)"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[var(--cyan)]/15 ring-1 ring-white/10 hover:ring-[var(--cyan)]/40 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              >
                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[var(--cyan)]/15 ring-1 ring-white/10 hover:ring-[var(--cyan)]/40 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              >
                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — QA Services */}
          <nav aria-label="QA Services">
            <ColumnHeading>QA Services</ColumnHeading>
            <ul className="space-y-1">
              {qaServices.map((link) => (
                <li key={link.label}>
                  <FooterLinkItem link={link} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — Licensing & Software */}
          <nav aria-label="Licensing and Software">
            <ColumnHeading>Licensing &amp; Software</ColumnHeading>
            <ul className="space-y-1">
              {licensingSoftware.map((link) => (
                <li key={link.label}>
                  <FooterLinkItem link={link} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4 — Company & Navigation */}
          <nav aria-label="Company">
            <ColumnHeading>Company</ColumnHeading>
            <ul className="space-y-1">
              {company.map((link) => (
                <li key={link.label}>
                  <FooterLinkItem link={link} />
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Soft divider */}
        <div
          aria-hidden="true"
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-white/40 text-xs">
            © 2026 Algotech Solutions LLC. All rights reserved.
          </p>
          <p className="text-white/30 text-xs tracking-wide">
            Enterprise QA · Accessibility · Security · Software Services
          </p>
        </div>

      </div>
    </footer>
  );
}
