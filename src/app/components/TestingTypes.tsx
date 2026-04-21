import { motion } from 'motion/react';
import { BackgroundBlobs } from './BackgroundBlobs';
import { Smartphone, Globe, Glasses, Wifi } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type TestType = {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
};

const testingTypes: TestType[] = [
  {
    icon: Smartphone,
    tag: 'Mobile',
    title: 'Mobile Testing',
    description:
      'Validate mobile applications across iOS and Android platforms to ensure performance, security, and compliance with Section 508 accessibility standards and applicable NIST guidelines across diverse devices and environments.',
  },
  {
    icon: Globe,
    tag: 'Web',
    title: 'Web Testing',
    description:
      'Conduct end-to-end web application testing to ensure cross-browser compatibility, performance optimization, and adherence to Section 508, WCAG, and NIST security standards for enterprise and government systems.',
  },
  {
    icon: Glasses,
    tag: 'AR / VR',
    title: 'Mixed Reality Testing (AR/VR)',
    description:
      'Perform advanced validation of AR/VR applications to ensure operational stability, data integrity, and alignment with emerging accessibility and security frameworks where applicable.',
  },
  {
    icon: Wifi,
    tag: 'IoT',
    title: 'IoT Testing',
    description:
      'Assess IoT ecosystems under real-world conditions to ensure secure data transmission, interoperability, and compliance with NIST cybersecurity frameworks and industry protocols.',
  },
];

export function TestingTypes() {
  return (
    <section
      id="testing"
      aria-labelledby="testing-heading"
      className="relative pt-8 pb-8 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden min-h-[calc(100vh-88px)] flex flex-col justify-start"
    >
      <BackgroundBlobs />

      <div className="relative max-w-6xl mx-auto">

        {/* Header — centered, matching Software Services */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6 max-w-3xl mx-auto"
        >
          <h2
            id="testing-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--navy)] tracking-tighter leading-[1.15] mb-3"
          >
            Every Type of QA Testing, Handled
          </h2>
          <p className="text-sm sm:text-base text-[var(--navy)]/75 leading-relaxed">
            Comprehensive testing coverage across web, mobile, mixed reality, and IoT
            platforms — ensuring quality at every layer of your technology stack.
          </p>
        </motion.header>

        {/* Cards grid — 4 across desktop, 2 tablet, 1 mobile — matches Software Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testingTypes.map((test, index) => {
            const Icon = test.icon;
            return (
              <motion.article
                key={test.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                tabIndex={0}
                aria-label={`${test.title}. ${test.description}`}
                className="group relative outline-none flex flex-col"
              >
                <div className="relative h-full bg-white rounded-2xl p-5 border border-[var(--border)] transition-[box-shadow,border-color] duration-300 group-hover:border-[var(--cyan)]/40 group-hover:shadow-[0_24px_48px_-20px_rgba(30,39,73,0.15)] group-hover:-translate-y-1">
                  {/* Soft cyan glow on hover */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl bg-[var(--cyan)]/5 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />

                  {/* Icon left, tag right */}
                  <div className="relative flex items-center justify-between gap-3 mb-3">
                    <div className="w-11 h-11 shrink-0 rounded-lg bg-[var(--light-gray)] ring-1 ring-[var(--border)] flex items-center justify-center group-hover:bg-[var(--cyan)]/10 group-hover:ring-[var(--cyan)]/30 group-hover:scale-[1.05] transition-all duration-300">
                      <Icon aria-hidden="true" className="w-5 h-5 text-[var(--cyan)]" strokeWidth={1.75} />
                    </div>
                    <div className="inline-flex items-center bg-[var(--light-gray)] ring-1 ring-[var(--border)] text-[var(--navy)]/60 text-[9px] font-semibold uppercase tracking-widest rounded-full px-2 py-0.5">
                      {test.tag}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="relative text-base font-bold text-[var(--navy)] tracking-tight leading-snug mb-1.5">
                    {test.title}
                  </h3>

                  {/* Description — always visible */}
                  <p className="relative text-xs text-[var(--navy)]/70 leading-relaxed">
                    {test.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA — centered below cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mt-6 mb-4"
        >
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

      </div>
    </section>
  );
}
