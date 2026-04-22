import { motion } from 'motion/react';
import { BackgroundBlobs } from '../components/BackgroundBlobs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function UsabilityTesting() {
  return (
    <>
      <main id="main-content">
        {/* Section 1 — Usability Testing Services */}
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
                  Usability Testing Services for Enterprise and Public Sector Systems
                </h1>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Algotech Solutions provides structured usability testing services
                  designed to evaluate how end users interact with enterprise applications,
                  public sector platforms, and regulated systems under real-world
                  conditions. Our methodology measures task success rates, navigation
                  efficiency, error frequency, and user satisfaction against defined
                  usability benchmarks.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  Usability testing functions as a risk-reduction mechanism — identifying
                  interface deficiencies, workflow friction, and user comprehension gaps
                  before they result in operational inefficiency, support escalation, or
                  failed user adoption. Findings are documented with severity
                  classifications and actionable remediation guidance aligned to system
                  requirements.
                </p>
                <a
                  href="#contact-us"
                  className="inline-flex items-center gap-3 bg-[var(--navy)] text-white px-7 py-3.5 rounded-full hover:bg-[var(--cyan)] transition-all duration-300 active:scale-[0.98] font-semibold text-sm shadow-[0_4px_16px_rgba(30,39,73,0.2)] mt-3"
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
                className="relative rounded-2xl overflow-hidden"
              >
                <ImageWithFallback
                  src="https://cdn.prod.website-files.com/65baee75271125cf196c2056/662ad8ee78dd003808b85fbe_UsabilityHero.png"
                  alt="Quality assurance team conducting a structured usability testing session in a conference room"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2 — Methodology and Approach Selection */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <BackgroundBlobs />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden"
              >
                <ImageWithFallback
                  src="https://cdn.prod.website-files.com/65baee75271125cf196c2056/662ada45e6b071f0d77de5d9_UsabilityApproach.png"
                  alt="Analyst evaluating usability testing methodology on a desktop workstation"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] tracking-tighter leading-tight mb-5">
                  Methodology-Driven Approach Selection
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Usability testing approaches are selected based on a structured
                  assessment of system type, user workflow complexity, product maturity,
                  and associated risk level. Each engagement begins with a scoping review
                  to determine which evaluation methods will yield the highest-value
                  findings for the specific platform and user population.
                </p>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Evaluation methods include both qualitative and quantitative
                  techniques — task completion analysis, time-on-task measurement, error
                  rate tracking, System Usability Scale (SUS) scoring, and structured
                  observation of user behavior. These methods are combined to produce a
                  comprehensive usability assessment with prioritized findings.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  The approach framework ensures that testing resources are allocated to
                  the highest-risk interaction patterns, providing evidence-based
                  recommendations for interface refinement, navigation restructuring, and
                  workflow optimization — aligned to user requirements and accessibility
                  standards.
                </p>
                <a
                  href="#contact-us"
                  className="inline-flex items-center gap-3 bg-[var(--navy)] text-white px-7 py-3.5 rounded-full hover:bg-[var(--cyan)] transition-all duration-300 active:scale-[0.98] font-semibold text-sm shadow-[0_4px_16px_rgba(30,39,73,0.2)] mt-3"
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

        {/* Section 3 — Testing Types and Supported Platforms */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <BackgroundBlobs />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] tracking-tighter leading-tight mb-5">
                  Usability Testing Types
                </h2>

                <h3 className="text-lg font-bold text-[var(--navy)] mb-3">Testing Types</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    ['Task-Based Usability Testing', 'Participants complete defined tasks to evaluate workflow efficiency, error rates, and task success.'],
                    ['Scenario-Based Testing', 'Realistic use-case scenarios assess user decision-making and navigation under representative conditions.'],
                    ['Tree Testing (Navigation Validation)', 'Evaluates information architecture by measuring how effectively users locate content without visual design influence.'],
                    ['Preference Testing', 'Compares interface variants to determine user preference across layout, terminology, and interaction patterns.'],
                    ['Feedback and Survey-Based Testing', 'Structured post-task questionnaires and SUS scoring capture subjective user satisfaction and perceived usability.'],
                  ].map(([title, desc]) => (
                    <li key={title} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-[var(--cyan)]" />
                      <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                        <span className="font-semibold text-[var(--navy)]">{title}</span> — {desc}
                      </p>
                    </li>
                  ))}
                </ul>

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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden md:sticky md:top-28"
              >
                <ImageWithFallback
                  src="https://cdn.prod.website-files.com/65baee75271125cf196c2056/663a5fcb59c4e47b0c739cd3_UsabilityTestingOptions.png"
                  alt="Two testers conducting usability testing at a table with a phone and laptop"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </motion.div>
            </div>
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
