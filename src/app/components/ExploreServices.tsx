import { motion } from 'motion/react';
import { BackgroundBlobs } from './BackgroundBlobs';

const services = [
  {
    title: 'Device compatibility testing',
    description: 'Comprehensive testing across desktop and mobile devices to ensure consistent performance and user experience on every screen.',
    tag: 'Hardware',
    icon: (
      <svg aria-hidden="true" className="w-7 h-7" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="8" y="36" width="32" height="2" fill="currentColor"/>
        <rect x="40" y="18" width="16" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="46" y="40" width="4" height="2" rx="1" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: 'Accessibility testing',
    description: 'Ensure your platform is inclusive and compliant with WCAG 2.2 and Section 508 standards, tested with real assistive technologies.',
    tag: 'Compliance',
    icon: (
      <svg aria-hidden="true" className="w-7 h-7" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="18" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 30 L32 28 L44 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 28 L32 42" stroke="currentColor" strokeWidth="2"/>
        <path d="M32 42 L24 54" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 42 L40 54" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: 'Managed testing services',
    description: 'End-to-end test management from planning through execution — so your team focuses on building while we own coverage.',
    tag: 'Full-service',
    icon: (
      <svg aria-hidden="true" className="w-7 h-7" viewBox="0 0 64 64" fill="none">
        <rect x="12" y="16" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="12" y="36" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="38" y="16" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="38" y="36" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <line x1="26" y1="23" x2="38" y2="23" stroke="currentColor" strokeWidth="2"/>
        <line x1="26" y1="43" x2="38" y2="43" stroke="currentColor" strokeWidth="2"/>
        <line x1="19" y1="30" x2="19" y2="36" stroke="currentColor" strokeWidth="2"/>
        <line x1="45" y1="30" x2="45" y2="36" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: 'Localization testing',
    description: 'Validate your application across languages, regions, and cultural contexts — covering both functional and linguistic accuracy.',
    tag: 'Global',
    icon: (
      <svg aria-hidden="true" className="w-7 h-7" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2"/>
        <ellipse cx="32" cy="32" rx="8" ry="20" stroke="currentColor" strokeWidth="2"/>
        <line x1="12" y1="32" x2="52" y2="32" stroke="currentColor" strokeWidth="2"/>
        <path d="M22 20 Q32 24 42 20" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M22 44 Q32 40 42 44" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    )
  }
];

export function ExploreServices() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <BackgroundBlobs />
      <div className="relative max-w-7xl mx-auto">

        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-[var(--cyan)] uppercase mb-3 block">Services</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--navy)] tracking-tighter leading-tight max-w-md">
            Explore our QA capabilities
          </h2>
        </div>

        {/* 2-col zig-zag: left large, right stack; then right large, left stack */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* Row 1 — left featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[var(--navy)] rounded-3xl p-10 row-span-2 flex flex-col justify-between min-h-[300px] group hover:shadow-[0_24px_48px_-16px_rgba(30,39,73,0.35)] transition-shadow duration-500"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white/10 text-white/70 text-xs font-medium rounded-full px-3 py-1 mb-8">
                {services[0].tag}
              </div>
              <div className="text-[var(--cyan)] mb-5">{services[0].icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{services[0].title}</h3>
              <p className="text-white/60 leading-relaxed">{services[0].description}</p>
            </div>
            <a href="#contact-us" className="mt-8 inline-flex items-center gap-2 text-[var(--cyan)] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
              Get started
              <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Row 1 — right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-8 group border border-[var(--border)] hover:shadow-[0_20px_40px_-15px_rgba(30,39,73,0.1)] transition-shadow duration-500"
          >
            <div className="inline-flex items-center gap-1.5 bg-[var(--light-gray)] text-[var(--navy)]/60 text-xs font-medium rounded-full px-3 py-1 mb-6">
              {services[1].tag}
            </div>
            <div className="text-[var(--cyan)] mb-5">{services[1].icon}</div>
            <h3 className="text-xl font-bold text-[var(--navy)] mb-3 tracking-tight">{services[1].title}</h3>
            <p className="text-[var(--navy)]/70 leading-relaxed text-sm">{services[1].description}</p>
          </motion.div>

          {/* Row 2 — right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-8 group border border-[var(--border)] hover:shadow-[0_20px_40px_-15px_rgba(30,39,73,0.1)] transition-shadow duration-500"
          >
            <div className="inline-flex items-center gap-1.5 bg-[var(--light-gray)] text-[var(--navy)]/60 text-xs font-medium rounded-full px-3 py-1 mb-6">
              {services[2].tag}
            </div>
            <div className="text-[var(--cyan)] mb-5">{services[2].icon}</div>
            <h3 className="text-xl font-bold text-[var(--navy)] mb-3 tracking-tight">{services[2].title}</h3>
            <p className="text-[var(--navy)]/70 leading-relaxed text-sm">{services[2].description}</p>
          </motion.div>

          {/* Bottom full-width card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 bg-white rounded-3xl p-10 group border border-[var(--border)] hover:shadow-[0_20px_40px_-15px_rgba(30,39,73,0.1)] transition-shadow duration-500"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-6">
                <div className="text-[var(--cyan)] mt-1">{services[3].icon}</div>
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-[var(--light-gray)] text-[var(--navy)]/60 text-xs font-medium rounded-full px-3 py-1 mb-3">
                    {services[3].tag}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--navy)] mb-2 tracking-tight">{services[3].title}</h3>
                  <p className="text-[var(--navy)]/70 leading-relaxed text-sm max-w-[56ch]">{services[3].description}</p>
                </div>
              </div>
              <a href="#contact-us" className="shrink-0 inline-flex items-center gap-2 bg-[var(--navy)] text-white px-6 py-3 rounded-full hover:bg-[var(--cyan)] transition-all duration-300 active:scale-[0.98] text-sm font-semibold">
                Learn more
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
