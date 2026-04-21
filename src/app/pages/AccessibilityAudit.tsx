import { motion } from 'motion/react';
import { BackgroundBlobs } from '../components/BackgroundBlobs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { Globe, Smartphone, Monitor, Palette } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type CoverageItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const coverageItems: CoverageItem[] = [
  {
    icon: Globe,
    title: 'Website Accessibility Audits',
    description:
      'Evaluate public-facing and internal websites against WCAG and Section 508 criteria, covering navigation, content structure, forms, multimedia, and interactive components.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Application Accessibility Audits',
    description:
      'Assess native iOS and Android applications for accessibility conformance, including touch target sizing, gesture alternatives, screen reader compatibility, and platform-specific guidelines.',
  },
  {
    icon: Monitor,
    title: 'Web Application Accessibility Audits',
    description:
      'Audit complex web applications, enterprise portals, and SaaS platforms for accessible interaction patterns, dynamic content updates, ARIA implementation, and keyboard operability.',
  },
  {
    icon: Palette,
    title: 'Design and Prototype Accessibility Reviews',
    description:
      'Review wireframes, design mockups, and functional prototypes for accessibility compliance before development begins — identifying barriers early to reduce remediation cost.',
  },
];

export function AccessibilityAudit() {
  return (
    <>
      <main id="main-content">
        {/* 1. Hero — Audit + Real User Focus */}
        <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <BackgroundBlobs />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--navy)] tracking-tighter leading-[1.1] mb-6">
                  Accessibility Audit for Compliance and Usability
                </h1>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  An accessibility audit evaluates digital products to identify barriers
                  affecting users with disabilities and assess conformance with WCAG and
                  Section 508 standards. It focuses on both compliance and real-world
                  usability beyond automated scanning.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  Audits combine manual testing, assistive technology validation, and
                  targeted code review to deliver findings that improve accessibility and
                  overall user experience.
                </p>
                <a
                  href="#contact-us"
                  className="inline-flex items-center gap-3 bg-[var(--navy)] text-white px-7 py-3.5 rounded-full hover:bg-[var(--cyan)] transition-all duration-300 active:scale-[0.98] font-semibold text-sm shadow-[0_4px_16px_rgba(30,39,73,0.2)] mt-5"
                >
                  Contact Us to Learn More
                  <span aria-hidden="true" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                    <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden aspect-video bg-[var(--light-gray)]"
              >
                <ImageWithFallback
                  src="/src/imports/Accessibility Audit.webp"
                  alt="Accessibility audit for compliance and usability validation"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Manual Accessibility Audit Approach */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <BackgroundBlobs />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden aspect-video bg-[var(--light-gray)]"
              >
                <ImageWithFallback
                  src="/src/imports/Manual Accessibility Audit.webp"
                  alt="Manual accessibility audit and validation using assistive technologies"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] tracking-tighter leading-tight mb-5">
                  Manual Accessibility Audit and Validation
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Auditing is performed using assistive technologies, including screen
                  readers (JAWS, NVDA, VoiceOver), keyboard-only navigation, and
                  magnification tools, to validate usability under real-world conditions.
                </p>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Manual evaluation identifies issues not detectable through automation,
                  such as reading order errors, missing context, and interaction failures.
                  Automated scanning is used to supplement coverage across larger
                  codebases.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  Each finding is mapped to the relevant WCAG success criterion, with
                  severity classification and clear remediation guidance to support
                  efficient resolution.
                </p>
                <a
                  href="#contact-us"
                  className="inline-flex items-center gap-3 bg-[var(--navy)] text-white px-7 py-3.5 rounded-full hover:bg-[var(--cyan)] transition-all duration-300 active:scale-[0.98] font-semibold text-sm shadow-[0_4px_16px_rgba(30,39,73,0.2)] mt-5"
                >
                  Contact Us to Learn More
                  <span aria-hidden="true" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                    <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Comprehensive Accessibility Audit Coverage (4-card grid) */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <BackgroundBlobs />
          <div className="relative max-w-6xl mx-auto">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-10 max-w-3xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] tracking-tighter leading-[1.15] mb-3">
                Comprehensive Accessibility Audit Coverage
              </h2>
              <p className="text-base text-[var(--navy)]/75 leading-relaxed">
                Structured audits across websites, mobile applications, web platforms,
                and design artifacts — ensuring accessibility is validated at every stage
                of the product lifecycle.
              </p>
            </motion.header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {coverageItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative"
                  >
                    <div className="relative h-full bg-white rounded-2xl p-6 border border-[var(--border)] group-hover:border-[var(--cyan)]/40 group-hover:shadow-[0_24px_48px_-20px_rgba(30,39,73,0.15)] group-hover:-translate-y-1 transition-all duration-300">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 rounded-2xl bg-[var(--cyan)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      />
                      <div className="relative w-11 h-11 rounded-lg bg-[var(--light-gray)] ring-1 ring-[var(--border)] flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/10 group-hover:ring-[var(--cyan)]/30 transition-all duration-300">
                        <Icon aria-hidden="true" className="w-5 h-5 text-[var(--cyan)]" strokeWidth={1.75} />
                      </div>
                      <h3 className="relative text-base font-bold text-[var(--navy)] tracking-tight leading-snug mb-2">
                        {item.title}
                      </h3>
                      <p className="relative text-xs text-[var(--navy)]/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Structured Reporting and Compliance Support */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <BackgroundBlobs />
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] tracking-tighter leading-tight mb-6 text-center">
                Structured Reporting and Compliance Support
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Clear and Prioritized Audit Reports</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Audit findings are organized by severity — critical, major, and
                    minor — with each issue mapped to the specific WCAG success criterion
                    it violates. Reports include screenshots, reproduction steps, and
                    affected user populations to provide full context for remediation
                    prioritization.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Remediation Guidance for Development Teams</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Each finding includes specific, actionable remediation recommendations
                    written for developers — including code-level guidance, ARIA pattern
                    corrections, and semantic HTML improvements that resolve the identified
                    barrier while maintaining application functionality.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Compliance Documentation</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Audit deliverables support WCAG 2.1/2.2 and Section 508 compliance
                    requirements, providing audit-ready documentation suitable for
                    procurement reviews, regulatory reporting, and internal accessibility
                    governance programs.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Audit Outcomes</h3>
                  <ul className="space-y-2">
                    {[
                      'Clear inventory of accessibility barriers with severity ratings',
                      'Prioritized remediation roadmap for development teams',
                      'Compliance-ready documentation for WCAG and Section 508',
                      'Reduced legal and regulatory risk exposure',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-[var(--cyan)]" />
                        <p className="text-sm text-[var(--navy)]/75 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-center">
                <a
                  href="#contact-us"
                  className="inline-flex items-center gap-3 bg-[var(--navy)] text-white px-7 py-3.5 rounded-full hover:bg-[var(--cyan)] transition-all duration-300 active:scale-[0.98] font-semibold text-sm shadow-[0_4px_16px_rgba(30,39,73,0.2)]"
                >
                  Contact Us to Learn More
                  <span aria-hidden="true" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                    <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
