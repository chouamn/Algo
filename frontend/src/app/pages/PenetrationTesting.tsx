import { motion } from 'motion/react';
import { BackgroundBlobs } from '../components/BackgroundBlobs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { Globe, Code2, Server, Shield, Cloud, Lock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type CoverageItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const coverageItems: CoverageItem[] = [
  {
    icon: Globe,
    title: 'Web Application Penetration Testing',
    description:
      'Identify injection flaws, authentication bypasses, session management weaknesses, and business logic vulnerabilities across web-facing applications and portals.',
  },
  {
    icon: Code2,
    title: 'API Security Testing',
    description:
      'Assess REST and SOAP API endpoints for improper access controls, data exposure, injection vulnerabilities, and authentication mechanism weaknesses.',
  },
  {
    icon: Server,
    title: 'Internal Network Penetration Testing',
    description:
      'Simulate insider threat scenarios to evaluate lateral movement paths, privilege escalation vectors, and segmentation gaps within internal network environments.',
  },
  {
    icon: Shield,
    title: 'External Network Penetration Testing',
    description:
      'Assess perimeter defenses, publicly exposed services, and remote access infrastructure for exploitable vulnerabilities from an external attacker perspective.',
  },
  {
    icon: Cloud,
    title: 'Cloud Environment Security Testing',
    description:
      'Evaluate cloud configurations (AWS, Azure, GCP) for misconfigured permissions, exposed storage, identity management gaps, and insecure service integrations.',
  },
  {
    icon: Lock,
    title: 'Authentication and Access Control Testing',
    description:
      'Validate authentication flows, multi-factor enforcement, role-based access controls, and session handling to confirm proper authorization boundaries.',
  },
];

export function PenetrationTesting() {
  return (
    <>
      <main id="main-content">
        {/* 1. Hero — Security Risk + Business Impact */}
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
                  Penetration Testing Services to Identify and Eliminate Security Risks
                </h1>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Penetration testing is a controlled, manual simulation of real-world
                  cyberattacks designed to identify exploitable vulnerabilities across
                  applications, infrastructure, APIs, and cloud environments before
                  adversaries do. The objective is to validate the effectiveness of
                  existing security controls and expose gaps that automated scanning alone
                  cannot detect.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  Algotech delivers structured penetration testing engagements for
                  enterprise systems, government environments, and regulated industries —
                  strengthening organizational security posture through evidence-based
                  risk identification and actionable remediation guidance.
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
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80"
                  alt="Cybersecurity analyst conducting penetration testing on enterprise infrastructure"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Manual-First Penetration Testing Methodology */}
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
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80"
                  alt="Security testing methodology with manual exploitation techniques and attack simulation"
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
                  Manual-First Security Testing and Vulnerability Validation
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Our methodology prioritizes manual testing over automated scanning,
                  following a structured process that includes reconnaissance,
                  vulnerability discovery, controlled exploitation, and validation of
                  security controls to identify risks automated tools may miss.
                </p>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Each engagement is executed under defined rules of engagement and scoped
                  boundaries agreed with client security and engineering teams, and
                  performed by experienced security professionals with offensive security
                  expertise.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  Findings are delivered in structured reports with vulnerability
                  classification, exploitation evidence, reproduction steps, risk impact
                  analysis, and prioritized remediation guidance for efficient resolution.
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

        {/* 3. Comprehensive Penetration Testing Coverage (6-card grid) */}
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
                Comprehensive Penetration Testing Coverage
              </h2>
              <p className="text-base text-[var(--navy)]/75 leading-relaxed">
                Structured security assessment across six critical attack surfaces,
                focused on risk exposure and real-world exploitability.
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

        {/* 4. Reporting, Risk Analysis, and Remediation Support */}
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
                Actionable Reporting and Security Remediation Guidance
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Structured Vulnerability Reporting</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Each finding is documented with severity classification (Critical,
                    High, Medium, Low), exploitation evidence including screenshots and
                    reproduction steps, risk impact analysis, and specific remediation
                    recommendations. Reports are structured for consumption by both
                    engineering teams and executive stakeholders.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Compliance Framework Alignment</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Testing methodology and deliverables support compliance with NIST,
                    SOC 2, ISO 27001, HIPAA, and PCI-DSS requirements. Findings are mapped
                    to relevant control frameworks to support audit readiness and
                    regulatory reporting obligations.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">DevSecOps and CI/CD Integration</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Penetration testing findings can be integrated into DevSecOps workflows
                    and CI/CD pipelines to establish security validation gates within the
                    development lifecycle. Optional retesting validates that identified
                    vulnerabilities have been remediated before production deployment.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Measurable Security Outcomes</h3>
                  <ul className="space-y-2">
                    {[
                      'Reduced attack surface across applications and infrastructure',
                      'Improved resilience against real-world threat scenarios',
                      'Stronger compliance readiness for regulatory audits',
                      'Evidence-based security investment prioritization',
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
