import { motion } from 'motion/react';
import { BackgroundBlobs } from '../components/BackgroundBlobs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function WcagPage() {
  return (
    <>
      <main id="main-content">
        {/* 1. WCAG Overview */}
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
                  WCAG — Web Content Accessibility Guidelines
                </h1>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  The Web Content Accessibility Guidelines (WCAG) are the internationally
                  recognized standard for digital accessibility, published by the World
                  Wide Web Consortium (W3C). WCAG defines how web content should be
                  structured and presented to be usable by people with disabilities,
                  including those who rely on assistive technologies such as screen
                  readers, keyboard navigation, and magnification tools.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  WCAG serves as the technical foundation for accessibility compliance
                  across government requirements (Section 508), enterprise procurement
                  standards, and international accessibility regulations (EN 301 549).
                  Conformance with WCAG is the primary measure by which digital
                  accessibility is evaluated and documented.
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
                  src="/src/imports/WCAG.png"
                  alt="WCAG Web Content Accessibility Guidelines overview"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. WCAG Principles (POUR Model) */}
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
                  src="/src/imports/WCAG Principles.png"
                  alt="WCAG Principles — Perceivable, Operable, Understandable, Robust (POUR model)"
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
                  WCAG Principles — The POUR Model
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-6 leading-relaxed max-w-[60ch]">
                  WCAG is organized around four foundational principles that define the
                  requirements for accessible web content. These principles establish the
                  framework against which all WCAG success criteria are evaluated.
                </p>

                <ul className="space-y-4">
                  {[
                    ['Perceivable', 'Information and interface components must be presentable in ways that users can perceive, regardless of sensory ability.'],
                    ['Operable', 'Interface components and navigation must be operable through multiple input methods, including keyboard-only interaction.'],
                    ['Understandable', 'Information and interface operation must be understandable — content must be readable, predictable, and provide input assistance.'],
                    ['Robust', 'Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.'],
                  ].map(([title, desc]) => (
                    <li key={title} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-[var(--cyan)]" />
                      <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                        <span className="font-bold text-[var(--navy)]">{title}</span> — {desc}
                      </p>
                    </li>
                  ))}
                </ul>

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

        {/* 3. WCAG Conformance Levels */}
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
                WCAG Conformance Levels
              </h2>
              <p className="text-base text-[var(--navy)]/75 leading-relaxed">
                WCAG defines three levels of conformance. Each level builds on the
                previous, with Level AA serving as the standard compliance target for
                most organizations and regulatory requirements.
              </p>
            </motion.header>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  level: 'Level A',
                  label: 'Minimum',
                  description:
                    'Addresses the most fundamental accessibility barriers. Level A criteria represent the baseline requirements that, if unmet, make content inaccessible to some users. All Level A criteria must be satisfied to claim any level of WCAG conformance.',
                },
                {
                  level: 'Level AA',
                  label: 'Standard',
                  description:
                    'The conformance level required by most accessibility regulations, including Section 508 and EN 301 549. Level AA addresses a broader range of accessibility barriers and is the standard target for enterprise and government compliance programs.',
                },
                {
                  level: 'Level AAA',
                  label: 'Advanced',
                  description:
                    'Provides the highest level of accessibility support. Full Level AAA conformance is not always achievable for all content types, but specific AAA criteria may be applied where feasible to improve accessibility beyond the standard compliance baseline.',
                },
              ].map((item, index) => (
                <motion.article
                  key={item.level}
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
                    <div className="relative flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-[var(--navy)] tracking-tight">
                        {item.level}
                      </h3>
                      <span className="inline-flex items-center bg-[var(--light-gray)] ring-1 ring-[var(--border)] text-[var(--navy)]/60 text-[9px] font-semibold uppercase tracking-widest rounded-full px-2.5 py-0.5">
                        {item.label}
                      </span>
                    </div>
                    <p className="relative text-xs text-[var(--navy)]/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WCAG Compliance and Testing Approach */}
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
                WCAG Compliance and Testing Approach
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Manual Accessibility Testing</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    WCAG conformance is validated through manual testing that evaluates
                    content against each applicable success criterion. Manual review
                    identifies barriers that automated tools cannot detect, including
                    logical reading order, context clarity, and keyboard interaction
                    patterns.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Assistive Technology Validation</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Testing is performed using screen readers (JAWS, NVDA, VoiceOver),
                    keyboard-only navigation, and magnification tools to verify that
                    content is accessible through the same technologies that end users
                    with disabilities rely on in real-world usage.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Automated Scanning</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Automated accessibility scanning tools supplement manual testing by
                    identifying common code-level issues across large codebases. Automated
                    results are verified manually to eliminate false positives and confirm
                    the actual impact of flagged issues.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Structured Documentation</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Each finding is mapped to the specific WCAG success criterion it
                    affects, with severity classification, reproduction steps, and
                    remediation guidance. Documentation is structured to support
                    compliance reporting, audit review, and developer resolution
                    workflows.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. Compliance Importance */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <BackgroundBlobs />
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--navy)] tracking-tighter leading-tight mb-5">
                Why WCAG Compliance Matters
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10">
                {[
                  ['Legal Compliance', 'WCAG conformance satisfies Section 508, ADA, and international accessibility regulations.'],
                  ['Procurement Readiness', 'ACRs based on WCAG evaluation are required for government and enterprise vendor selection.'],
                  ['Risk Reduction', 'Proactive WCAG compliance reduces exposure to accessibility-related legal actions and audit findings.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex-1 text-left sm:text-center">
                    <h3 className="text-sm font-bold text-[var(--navy)] mb-1">{title}</h3>
                    <p className="text-xs text-[var(--navy)]/70 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
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
