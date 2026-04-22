import { motion } from 'motion/react';
import { BackgroundBlobs } from '../components/BackgroundBlobs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { RefreshCw, Code2, Monitor, Globe, Smartphone, GitBranch } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type CoverageItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const coverageItems: CoverageItem[] = [
  {
    icon: RefreshCw,
    title: 'Functional Regression Automation',
    description:
      'Automated regression suites validate core application functionality on each build, ensuring that new changes do not introduce defects into existing workflows.',
  },
  {
    icon: Code2,
    title: 'API Test Automation',
    description:
      'Automated validation of REST and SOAP endpoints, covering request/response integrity, schema conformance, and authentication flows across service layers.',
  },
  {
    icon: Monitor,
    title: 'UI / End-to-End Automation',
    description:
      'Full user-journey automation from login through transaction completion, validating interface behavior, state management, and cross-component integration.',
  },
  {
    icon: Globe,
    title: 'Cross-Browser Testing',
    description:
      'Automated execution across Chrome, Firefox, Safari, and Edge to verify rendering consistency, functional parity, and responsive behavior across browsers.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Automation Testing',
    description:
      'Automated validation on iOS and Android platforms using real devices, covering native, hybrid, and mobile web applications across OS versions and screen sizes.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipeline Integration',
    description:
      'Test suites integrated into continuous integration workflows for automated execution on each commit, pull request, or scheduled build — enabling gate-based release validation.',
  },
];

export function TestAutomation() {
  return (
    <>
      <main id="main-content">
        {/* 1. Hero — Value + Business Impact */}
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
                  Test Automation Services for Faster, More Reliable Software Delivery
                </h1>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Test automation reduces manual regression effort, accelerates release
                  cycles, and increases test coverage across enterprise systems and
                  continuous delivery environments. Automated validation on each build
                  ensures that functional regressions are identified before they reach
                  production.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  Algotech designs and maintains automation frameworks that integrate
                  directly into CI/CD pipelines, providing repeatable, scalable test
                  execution aligned to your release cadence and quality requirements.
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
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80"
                  alt="Software engineer developing test automation framework on a multi-monitor setup"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Automation Strategy and Framework Design */}
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
                  src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=900&q=80"
                  alt="Test automation framework architecture and strategy planning"
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
                  Structured Test Automation Strategy and Framework Design
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Automation frameworks are designed based on application architecture,
                  test coverage requirements, and system complexity. Tool selection —
                  including Selenium, Playwright, Appium, and Cypress — is determined by
                  the target platform, browser matrix, and integration requirements of the
                  project.
                </p>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Test suites are built with modular, reusable component structures that
                  support long-term maintainability as the application evolves. Framework
                  architecture is designed for direct integration into CI/CD pipelines,
                  enabling automated execution without manual intervention.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  Algotech collaborates with client engineering teams throughout framework
                  development to ensure alignment with existing development workflows,
                  branching strategies, and deployment processes — producing automation
                  assets that are sustainable, scalable, and owned by the client.
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

        {/* 3. Comprehensive Test Automation Coverage (6-card grid) */}
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
                Comprehensive Test Automation Coverage
              </h2>
              <p className="text-base text-[var(--navy)]/75 leading-relaxed">
                Structured automation across six critical testing dimensions, ensuring
                consistent quality and rapid feedback across every release cycle.
              </p>
            </motion.header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

        {/* 4. Continuous Testing and Scalable Automation Execution */}
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
                Continuous Testing and Scalable Automation Execution
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">CI/CD Pipeline Execution</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Automated test suites execute within continuous integration workflows
                    on each commit, pull request, or scheduled build. Regression
                    validation runs in parallel with development, providing immediate
                    feedback on code changes without manual test coordination.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Regression and Release Validation</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Automated regression coverage is maintained and updated with each
                    sprint, ensuring that test suites evolve alongside the application.
                    Release validation gates provide go/no-go signals based on automated
                    test results and pass/fail thresholds.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Measurable Outcomes</h3>
                  <ul className="space-y-2">
                    {[
                      'Reduced manual regression effort by 60–80%',
                      'Faster release cycles with automated quality gates',
                      'Improved defect detection before staging and production',
                      'Scalable test execution across parallel environments',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-[var(--cyan)]" />
                        <p className="text-sm text-[var(--navy)]/75 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Onshore Collaboration and Reporting</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    All automation engineering and execution is performed onshore by our
                    U.S.-based QA team. Test results, coverage reports, and defect
                    documentation are delivered through structured reporting aligned to
                    client release management processes.
                  </p>
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
