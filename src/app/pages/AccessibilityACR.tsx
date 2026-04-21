import { motion } from 'motion/react';
import { BackgroundBlobs } from '../components/BackgroundBlobs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function AccessibilityACR() {
  return (
    <>
      <main id="main-content">
        {/* 1. ACR Services — Definition and Purpose */}
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
                  Accessibility Conformance Report (ACR) Services
                </h1>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  An Accessibility Conformance Report (ACR) is a formal document that
                  records the accessibility conformance status of a digital product
                  against established standards. ACRs are used across procurement
                  processes, enterprise compliance programs, and government accessibility
                  requirements to verify that products meet the access needs of users
                  with disabilities.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  Algotech prepares ACRs aligned to WCAG 2.1/2.2, Section 508, and
                  EN 301 549 standards, providing procurement teams and compliance
                  stakeholders with the structured documentation required for vendor
                  evaluation, contract compliance, and regulatory reporting.
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
                  src="/src/imports/Accessibility Report (ACR) Services.webp"
                  alt="Accessibility Conformance Report (ACR) services documentation"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Accessibility Evaluation and ACR Development */}
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
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
                  alt="Accessibility analyst mapping evaluation findings to WCAG criteria for ACR development"
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
                  Accessibility Evaluation and ACR Development
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  ACR development begins with a structured accessibility evaluation of
                  the target product — web application, mobile application, or enterprise
                  system. Evaluation combines manual testing with assistive technologies,
                  automated scanning, and targeted code review to assess conformance
                  against each applicable WCAG success criterion.
                </p>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Findings are documented using the Voluntary Product Accessibility
                  Template (VPAT) format, recording conformance levels (Supports,
                  Partially Supports, Does Not Support, Not Applicable) for each
                  criterion. This produces a structured, standardized report that
                  procurement reviewers and compliance teams can evaluate consistently.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  All conformance determinations are traceable to specific evaluation
                  evidence, ensuring that the ACR accurately represents the current
                  accessibility state of the product and is defensible under audit review.
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

        {/* 3. Compliance Readiness and Business Impact */}
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
                Compliance Readiness and Business Impact
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Procurement Requirement</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Federal, state, and enterprise procurement processes increasingly
                    require vendors to provide ACRs as part of the evaluation process.
                    A current, accurate ACR demonstrates that a product has been
                    independently assessed for accessibility conformance and meets the
                    access requirements of the acquiring organization.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Legal and Compliance Risk Reduction</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Maintaining a current ACR reduces exposure to accessibility-related
                    legal actions and regulatory findings. It provides documented evidence
                    of conformance status and demonstrates organizational commitment to
                    accessibility compliance under WCAG, Section 508, and applicable
                    international standards.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Standards Alignment</h3>
                  <ul className="space-y-2">
                    {[
                      'WCAG 2.1 / 2.2 (Level A, AA, AAA)',
                      'Section 508 of the Rehabilitation Act',
                      'EN 301 549 (European accessibility standard)',
                      'VPAT 2.x (ITI reporting format)',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-[var(--cyan)]" />
                        <p className="text-sm text-[var(--navy)]/75 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Procurement Eligibility</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    An ACR positions products for eligibility in government and enterprise
                    procurement channels where accessibility documentation is a
                    prerequisite. Without a current ACR, products may be excluded from
                    consideration during vendor selection and contract evaluation
                    processes.
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

        {/* 4. ACR Preparation and Delivery Support */}
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
                ACR Preparation and Delivery Support
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Structured Delivery Process</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    ACR preparation follows a defined process: accessibility testing
                    inputs are collected through manual and automated evaluation,
                    conformance findings are mapped to applicable WCAG criteria, and
                    formal documentation is produced in VPAT format. The deliverable
                    is structured for direct use in procurement submissions and
                    compliance reporting.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Engineering and Compliance Support</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Algotech supports both engineering and compliance teams throughout
                    the ACR process. Engineering teams receive actionable remediation
                    insights for identified conformance gaps. Compliance teams receive
                    structured, audit-ready documentation that satisfies procurement
                    and regulatory review requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Audit and Procurement Readiness</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Completed ACRs are formatted and reviewed to ensure readiness for
                    audit scrutiny and procurement evaluation. Conformance
                    determinations are supported by documented evidence, ensuring that
                    the report withstands independent review and accurately reflects
                    product accessibility status at the time of evaluation.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Deliverables</h3>
                  <ul className="space-y-2">
                    {[
                      'Completed ACR in VPAT 2.x format',
                      'Conformance mapping against WCAG and Section 508',
                      'Remediation recommendations for non-conforming criteria',
                      'Audit-ready documentation for procurement submission',
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
