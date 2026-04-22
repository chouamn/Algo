import { motion } from 'motion/react';
import { BackgroundBlobs } from '../components/BackgroundBlobs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function FunctionalityTesting() {
  return (
    <>
      <main id="main-content">
        {/* Section 1 — Functional Testing Services for Enterprise and Public Sector Systems */}
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
                  Functional Testing Services for Enterprise and Public Sector Systems
                </h1>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Algotech Solutions provides structured functionality testing services
                  designed for enterprise platforms, regulated environments, and public
                  sector systems. Our methodology ensures that every application component
                  operates in accordance with documented requirements, supporting system
                  reliability and operational integrity across all deployment targets.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  Functionality testing is executed against defined acceptance criteria to
                  validate expected behavior under standard and edge-case conditions. This
                  includes input validation, workflow execution, data processing accuracy,
                  and interface state management — ensuring systems perform as specified
                  prior to release authorization.
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
                  src="https://cdn.prod.website-files.com/65baee75271125cf196c2056/66298a1cb9f6fe0e9d674889_Functionality_Hero.png"
                  alt="Quality assurance engineer conducting functional testing at a multi-monitor workstation"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2 — Requirements Traceability and Structured Test Execution */}
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
                  src="https://cdn.prod.website-files.com/65baee75271125cf196c2056/66298ad145cf0f8951766942_HowDoWeTest.png"
                  alt="Test engineer reviewing requirements traceability documentation"
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
                  Requirements Traceability and Structured Test Execution
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Each engagement begins with a formal requirements analysis. Test cases
                  are derived from documented functional specifications and mapped to
                  individual requirements through a traceability matrix, ensuring complete
                  coverage and audit-ready documentation at every stage of execution.
                </p>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Test planning includes scope definition, risk-based prioritization,
                  environment configuration, and entry/exit criteria aligned with the
                  project's release schedule. Where applicable, Algotech collaborates
                  directly with client engineering and QA teams to integrate test suites
                  into existing workflows and CI/CD pipelines.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  With over 17 years of structured test execution across e-commerce
                  platforms, web applications, mobile systems (iOS and Android), streaming
                  services, and IoT environments, our methodology is proven across diverse
                  technology stacks and compliance requirements.
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

        {/* Section 3 — Onshore Testing Infrastructure and Secure Execution Environments */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <BackgroundBlobs />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] tracking-tighter leading-tight mb-5">
                  Onshore Testing Infrastructure and Secure Execution Environments
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  All testing is conducted onshore at our U.S.-based facility by
                  credentialed quality assurance engineers. The test environment includes
                  over 600 physical mobile devices and dedicated PC labs supporting
                  Windows, macOS, and Linux configurations. No virtual machines are
                  used — all validation is performed on real hardware to ensure
                  production-representative results.
                </p>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Our facility operates under controlled access protocols appropriate for
                  regulated industries, including financial services and healthcare. Each
                  engagement is assigned to a certified quality engineer with direct
                  accountability for test execution, defect reporting, and results
                  documentation.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  The onshore delivery model eliminates time-zone coordination overhead,
                  supports real-time communication with client teams, and ensures that
                  sensitive application data remains within a secured, U.S.-based
                  environment throughout the engagement lifecycle.
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden"
              >
                <ImageWithFallback
                  src="/src/imports/security-gets-real.jpg"
                  alt="Secure onshore testing facility with real device infrastructure"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 4 — Continuous Quality Assurance and Release Validation */}
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
                  src="/src/imports/Continuous Testing.png"
                  alt="Continuous quality assurance and release validation workflow"
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
                  Continuous Quality Assurance and Release Validation
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Algotech supports continuous testing within CI/CD and DevSecOps
                  workflows to maintain system stability across iterative release cycles.
                  Regression test suites are executed against each build to identify
                  functional regressions, integration failures, and configuration drift
                  before deployment authorization.
                </p>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Testing scope is adapted per release based on change-impact analysis,
                  combining cross-browser validation, cross-device compatibility checks,
                  and targeted automation where test stability and ROI justify it. Manual
                  exploratory testing supplements automated coverage to identify issues
                  that scripted tests cannot surface.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  The objective is release readiness — verified through documented test
                  results, defect trend analysis, and go/no-go reporting that provides
                  stakeholders with clear, evidence-based confidence in system quality
                  prior to production deployment.
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

        {/* Contact */}
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
