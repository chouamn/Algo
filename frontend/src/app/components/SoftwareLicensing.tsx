import { motion } from 'motion/react';
import { ShieldCheck, ShoppingCart, FileCheck, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Service = {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: FileCheck,
    tag: 'Licensing',
    title: 'Enterprise & Government Licensing',
    description:
      'Procure and manage volume licensing agreements through compliant channels with full visibility, cost control, and scalability.',
  },
  {
    icon: ShoppingCart,
    tag: 'Procurement',
    title: 'Software Procurement & Reselling',
    description:
      'Streamline vendor acquisition and purchasing through established procurement channels while we manage contracts, pricing, and renewals.',
  },
  {
    icon: ShieldCheck,
    tag: 'Advisory',
    title: 'IT Consulting & Advisory',
    description:
      'Align software investments with business and technical requirements—without vendor bias or commission-driven recommendations.',
  },
  {
    icon: TrendingUp,
    tag: 'Lifecycle',
    title: 'License Lifecycle Management',
    description:
      'Stay audit-ready with proactive tracking, usage optimization, and renewal planning—eliminating waste and reducing compliance risk.',
  },
];

export function SoftwareLicensing() {
  return (
    <section
      id="licensing"
      aria-labelledby="licensing-heading"
      className="relative pt-8 pb-8 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden min-h-[calc(100vh-88px)] flex flex-col justify-start"
    >
      {/* Decorative ambient blobs — aria-hidden so AT ignores them */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-[var(--cyan)]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] bg-[var(--navy)]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6 max-w-3xl mx-auto"
        >
          <h2
            id="licensing-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--navy)] tracking-tighter leading-[1.15] mb-3"
          >
            Enterprise Software Licensing &amp; Procurement Without the Complexity
          </h2>
          <p className="text-sm sm:text-base text-[var(--navy)]/75 leading-relaxed">
            We help organizations procure, license, and manage software across leading
            vendors—ensuring compliance, cost control, and operational efficiency at
            scale.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-[var(--navy)]/60 leading-relaxed whitespace-nowrap">
            Access to leading enterprise software solutions through our partnership with Carahsoft Technology Corp.
          </p>
        </motion.header>

        {/* Services grid — 1 / 2 / 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                tabIndex={0}
                aria-label={`${service.title}. ${service.description}`}
                className="group relative outline-none"
              >
                {/* Collapsed card shows only icon + tag + title (~half height).
                    On hover/focus it expands in place and reveals the description.
                    Uses max-height transition for smooth expand; absolute positioning
                    on hover prevents row-height jumps in the grid. */}
                <div className="relative bg-white rounded-2xl p-5 border border-[var(--border)] overflow-hidden transition-[max-height,box-shadow,border-color] duration-400 ease-out max-h-[150px] group-hover:max-h-[360px] group-focus:max-h-[360px] group-hover:border-[var(--cyan)]/40 group-focus:border-[var(--cyan)]/40 group-hover:shadow-[0_24px_48px_-20px_rgba(30,39,73,0.2)] group-focus:shadow-[0_24px_48px_-20px_rgba(30,39,73,0.2)] group-hover:z-10 group-focus:z-10">
                  {/* Soft cyan glow on hover */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl bg-[var(--cyan)]/5 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />

                  {/* Icon on the left, tag pill pushed to the right */}
                  <div className="relative flex items-center justify-between gap-3 mb-3">
                    <div className="w-11 h-11 shrink-0 rounded-lg bg-[var(--light-gray)] ring-1 ring-[var(--border)] flex items-center justify-center group-hover:bg-[var(--cyan)]/10 group-hover:ring-[var(--cyan)]/30 group-hover:scale-[1.05] transition-all duration-300">
                      <Icon aria-hidden="true" className="w-5 h-5 text-[var(--cyan)]" strokeWidth={1.75} />
                    </div>
                    <div className="inline-flex items-center bg-[var(--light-gray)] ring-1 ring-[var(--border)] text-[var(--navy)]/60 text-[9px] font-semibold uppercase tracking-widest rounded-full px-2 py-0.5">
                      {service.tag}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="relative text-base font-bold text-[var(--navy)] tracking-tight leading-snug mb-1.5">
                    {service.title}
                  </h3>

                  {/* Description — fades in after the card expands */}
                  <p className="relative text-xs text-[var(--navy)]/70 leading-relaxed opacity-0 translate-y-1 group-hover:opacity-100 group-focus:opacity-100 group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-300 delay-100">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA — centered below the cards, aligned to the grid container */}
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
