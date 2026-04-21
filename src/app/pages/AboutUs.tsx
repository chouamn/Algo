import { motion } from 'motion/react';
import { BackgroundBlobs } from '../components/BackgroundBlobs';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { CheckCircle2, ShieldCheck, Accessibility, Code2, Building2, HeartPulse, Landmark, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    icon: CheckCircle2,
    title: 'QA Services',
    description:
      'Functional, API, automation, and performance testing to ensure system reliability and release readiness.',
  },
  {
    icon: Accessibility,
    title: 'Accessibility Services',
    description:
      'WCAG and Section 508 aligned testing, audits, and compliance validation for inclusive digital experiences.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Testing Services',
    description:
      'Controlled penetration testing and vulnerability validation to identify and mitigate security risks.',
  },
  {
    icon: Code2,
    title: 'Software Services',
    description:
      'Software licensing, website development, and ongoing support for enterprise digital platforms.',
  },
];

type Industry = {
  icon: LucideIcon;
  label: string;
};

const industries: Industry[] = [
  { icon: Landmark, label: 'Government & Public Sector' },
  { icon: HeartPulse, label: 'Healthcare Systems' },
  { icon: Briefcase, label: 'Financial Services' },
  { icon: Building2, label: 'Enterprise Software Platforms' },
];

export function AboutUs() {
  return (
    <>
      <main id="main-content">
        {/* 1. Hero */}
        <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <BackgroundBlobs />
          <div className="relative max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--navy)] tracking-tighter leading-[1.1] mb-6">
                About Algotech Solutions
              </h1>
              <p className="text-lg text-[var(--navy)]/75 mb-4 leading-relaxed max-w-[70ch] mx-auto">
                Enterprise QA and Digital Services Company
              </p>
              <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[70ch] mx-auto">
                Algotech Solutions is an enterprise IT services provider delivering
                structured quality assurance, accessibility compliance, security testing,
                and software services for enterprise and government environments. Our
                delivery model is designed for regulated, high-reliability systems
                requiring consistency, security, and operational control.
              </p>
              <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[70ch] mx-auto">
                We support organizations in validating, securing, and maintaining digital
                platforms across web, mobile, and enterprise applications through
                structured engineering and testing practices.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. Company Overview */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <BackgroundBlobs />
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] tracking-tighter leading-tight mb-6 text-center">
                Company Overview
              </h2>
              <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed">
                Algotech Solutions operates as a structured technology services provider
                focused on quality assurance and digital system validation. Our services
                span functional testing, test automation, API validation, performance
                testing, accessibility compliance, penetration testing, and software
                lifecycle support.
              </p>
              <p className="text-base text-[var(--navy)]/75 leading-relaxed">
                We work with enterprise and government clients that require disciplined
                QA processes, secure execution environments, and measurable delivery
                outcomes across complex digital systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. Core Capabilities */}
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
                Core Capabilities
              </h2>
              <p className="text-base text-[var(--navy)]/75 leading-relaxed">
                Structured service coverage across four enterprise capability areas.
              </p>
            </motion.header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {capabilities.map((item, index) => {
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

        {/* 4. Delivery Model */}
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
                Delivery Model
              </h2>
              <p className="text-base text-[var(--navy)]/75 mb-6 leading-relaxed text-center max-w-[70ch] mx-auto">
                Algotech Solutions follows a structured, onshore delivery model with
                U.S.-based QA and engineering resources operating within secure testing
                environments.
              </p>

              <ul className="max-w-2xl mx-auto space-y-3 mb-6">
                {[
                  'Real-device and real-environment testing',
                  'Controlled QA execution workflows',
                  'Collaboration with client engineering teams',
                  'Structured defect tracking and reporting',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-[var(--cyan)]" />
                    <p className="text-base text-[var(--navy)]/80 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>

              <p className="text-base text-[var(--navy)]/75 leading-relaxed text-center max-w-[70ch] mx-auto">
                This model ensures consistency, traceability, and operational reliability
                across all engagements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 5. Industries Served */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <BackgroundBlobs />
          <div className="relative max-w-5xl mx-auto">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-10 max-w-3xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] tracking-tighter leading-[1.15] mb-3">
                Industries Served
              </h2>
              <p className="text-base text-[var(--navy)]/75 leading-relaxed">
                We support organizations operating in regulated and high-compliance
                environments where system reliability and security are critical.
              </p>
            </motion.header>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {industries.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center bg-[var(--light-gray)] border border-[var(--border)] rounded-2xl p-6 hover:shadow-[0_12px_32px_-10px_rgba(30,39,73,0.1)] transition-shadow duration-300"
                  >
                    <div className="w-11 h-11 rounded-lg bg-white ring-1 ring-[var(--border)] flex items-center justify-center mb-3">
                      <Icon aria-hidden="true" className="w-5 h-5 text-[var(--cyan)]" strokeWidth={1.75} />
                    </div>
                    <p className="text-sm font-bold text-[var(--navy)] tracking-tight leading-snug">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. Compliance & Standards */}
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
                Compliance &amp; Standards
              </h2>
              <p className="text-base text-[var(--navy)]/75 mb-6 leading-relaxed text-center max-w-[70ch] mx-auto">
                Our delivery practices align with industry-recognized accessibility and
                security standards, including:
              </p>

              <ul className="max-w-2xl mx-auto space-y-3 mb-6">
                {[
                  'Section 508 Compliance',
                  'WCAG Accessibility Standards',
                  'Secure QA and testing environments',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-[var(--cyan)]" />
                    <p className="text-base text-[var(--navy)]/80 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>

              <p className="text-base text-[var(--navy)]/75 leading-relaxed text-center max-w-[70ch] mx-auto">
                We support organizations requiring structured validation processes for
                compliance-driven systems and procurement readiness.
              </p>

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

        {/* 7. Contact */}
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
