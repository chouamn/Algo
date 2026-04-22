import { motion } from 'motion/react';
import { BackgroundBlobs } from '../components/BackgroundBlobs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { ShieldCheck, FileCheck, Lock, AlertTriangle, TrendingUp, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type CoverageItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const coverageItems: CoverageItem[] = [
  {
    icon: FileCheck,
    title: 'Functional API Validation',
    description:
      'Verify endpoint behavior against documented specifications, validating request/response payloads, status codes, and data accuracy across all supported methods.',
  },
  {
    icon: Search,
    title: 'Schema and Contract Testing',
    description:
      'Validate API contracts and schema definitions (JSON/XML) to ensure structural consistency and prevent breaking changes across service versions.',
  },
  {
    icon: Lock,
    title: 'Authentication and Authorization Testing',
    description:
      'Assess OAuth, JWT, API key, and token-based authentication flows to confirm proper access control enforcement and session management.',
  },
  {
    icon: AlertTriangle,
    title: 'Error Handling and Edge Case Validation',
    description:
      'Evaluate API behavior under malformed requests, boundary conditions, and unexpected inputs to verify graceful degradation and accurate error responses.',
  },
  {
    icon: TrendingUp,
    title: 'Performance and Load Testing',
    description:
      'Measure API throughput, response latency, and system behavior under concurrent load to identify bottlenecks and validate scalability requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Security and Vulnerability Assessment',
    description:
      'Identify injection vulnerabilities, data exposure risks, and misconfigured headers through structured API security testing aligned to OWASP API guidelines.',
  },
];

export function ApiTesting() {
  return (
    <>
      <main id="main-content">
        {/* Section 1 — Hero: API Testing Services */}
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
                  API Testing Services for Enterprise and Public Sector Systems
                </h1>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Algotech Solutions provides structured API testing services that validate
                  the reliability, data integrity, and interoperability of application
                  programming interfaces across enterprise platforms, government systems,
                  and regulated environments. APIs serve as the integration layer connecting
                  web applications, mobile clients, microservices, and third-party systems —
                  making their validation a critical component of system-level quality
                  assurance.
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
                className="relative rounded-2xl overflow-hidden aspect-video bg-[var(--light-gray)] flex items-center justify-center"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80"
                  alt="Developer reviewing API code and integration test results on a monitor"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2 — Requirements-Based API Validation */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <BackgroundBlobs />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden aspect-video bg-[var(--light-gray)] flex items-center justify-center"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80"
                  alt="Engineer reviewing API specification documentation and test execution results"
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
                  Requirements-Based API Validation and Execution
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Each API testing engagement begins with analysis of REST and SOAP
                  specifications, including contract validation against JSON and XML
                  schemas. Test cases are mapped to individual endpoints to validate
                  request and response behavior, status codes, and payload structure.
                  Testing includes authentication and authorization flows (OAuth, JWT, API
                  keys), error handling, and integration across dependent systems, with
                  edge cases evaluated to ensure reliability under non-standard conditions.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  We collaborate with engineering teams to integrate API test suites into
                  CI/CD pipelines, enabling automated execution with each build. Defects
                  are reported with full traceability, including endpoint details, request
                  payloads, expected versus actual results, and severity classification,
                  supporting structured resolution and continuous improvement.
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

        {/* Section 3 — Comprehensive API Testing Coverage (6-card grid) */}
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
                Comprehensive API Testing Coverage
              </h2>
              <p className="text-base text-[var(--navy)]/75 leading-relaxed">
                Structured validation across six critical API testing dimensions,
                ensuring integration reliability and data integrity at every layer.
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

        {/* Section 4 — Secure Testing Infrastructure and Continuous Validation */}
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
                Secure API Testing Infrastructure and Continuous Validation
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Onshore Delivery and Secure Execution</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    All API testing is executed onshore at our U.S.-based facility by
                    credentialed quality assurance engineers. Test environments are
                    configured under controlled access protocols to ensure that API
                    endpoints, authentication credentials, and data payloads are not
                    exposed to unauthorized access during the validation lifecycle.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">CI/CD Integration and Regression Validation</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    API test suites are designed for integration into continuous
                    integration and continuous delivery pipelines, enabling automated
                    regression validation on each build. This ensures that API changes,
                    dependency updates, and configuration modifications are validated
                    before reaching staging or production environments.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Measurable Outcomes</h3>
                  <ul className="space-y-2">
                    {[
                      'Reduced integration failures across dependent systems',
                      'Improved system stability through proactive regression coverage',
                      'Faster release cycles with automated API validation gates',
                      'Audit-ready documentation for compliance and traceability',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-[var(--cyan)]" />
                        <p className="text-sm text-[var(--navy)]/75 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Continuous Quality Assurance</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    API testing is maintained as a continuous quality function across the
                    full release lifecycle — not a one-time activity. Test coverage evolves
                    with each sprint, ensuring that new endpoints, modified schemas, and
                    deprecated services are systematically validated against current
                    requirements.
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
