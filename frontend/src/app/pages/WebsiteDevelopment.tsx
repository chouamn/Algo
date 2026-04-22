import { motion } from 'motion/react';
import { BackgroundBlobs } from '../components/BackgroundBlobs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function WebsiteDevelopment() {
  return (
    <>
      <main id="main-content">
        {/* 1. Website Development Services Overview */}
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
                  Website Development Services
                </h1>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Algotech Solutions provides website development services encompassing
                  the design, development, and deployment of modern web applications and
                  websites for government agencies and enterprise organizations. Solutions
                  are built to be secure, scalable, and high-performance — supporting
                  operational requirements across regulated and public-facing environments.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  All web development follows responsive design principles with
                  cross-browser compatibility validation and alignment to WCAG
                  accessibility standards, ensuring that delivered systems are usable
                  across devices, platforms, and assistive technologies.
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
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80"
                  alt="Modern web application development on a desktop workstation"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Custom Web Development and Architecture */}
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
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                  alt="Software architect designing custom web application architecture"
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
                  Custom Web Development and Architecture
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Web solutions are developed with custom front-end and back-end
                  architectures selected to meet the specific technical requirements of
                  each engagement. Development utilizes modern frameworks and modular
                  codebases designed for long-term maintainability and scalability as
                  organizational needs evolve.
                </p>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Integration capabilities include API connectivity with enterprise
                  systems, content management through traditional or headless CMS
                  platforms, and structured data exchange with third-party services.
                  Architecture decisions are documented and aligned to client
                  infrastructure and deployment requirements.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  Development follows a structured approach — from requirements analysis
                  and technical specification through implementation, testing, and
                  delivery — ensuring that each phase produces traceable, reviewable
                  outputs aligned to project objectives.
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

        {/* 3. Accessibility, Performance, and Security */}
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
                Accessibility, Performance, and Security
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Accessibility Compliance</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Web solutions are developed with WCAG 2.1/2.2 and Section 508
                    accessibility considerations integrated into the design and
                    development process. Semantic HTML, keyboard operability, screen
                    reader compatibility, and color contrast requirements are addressed
                    as part of standard delivery.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Performance Optimization</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Applications are optimized for load speed, rendering performance, and
                    scalability under concurrent usage. Performance validation includes
                    asset optimization, lazy loading strategies, and server response
                    benchmarking to ensure consistent user experience across traffic
                    conditions.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Secure Development Practices</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Development follows secure coding practices including input
                    validation, output encoding, authentication hardening, and protection
                    against OWASP Top 10 vulnerabilities. Security considerations are
                    integrated throughout the development lifecycle, not applied as a
                    post-deployment retrofit.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Cross-Platform Compatibility</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Solutions are validated across desktop, tablet, and mobile devices
                    and tested on major browsers (Chrome, Firefox, Safari, Edge) to
                    confirm consistent rendering and functional behavior. QA and
                    accessibility testing workflows are integrated into the delivery
                    process.
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

        {/* 4. Deployment, Maintenance, and Support */}
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
                Deployment, Maintenance, and Support
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Structured Deployment Workflows</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Deployment follows a structured staging-to-production workflow with
                    environment-specific validation at each stage. Configuration
                    management, release documentation, and rollback procedures are
                    established to support controlled, repeatable deployment processes.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Ongoing Maintenance and Updates</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Post-deployment support includes ongoing maintenance, security
                    patching, dependency updates, and feature enhancements. Maintenance
                    schedules are aligned to organizational change management processes
                    and release cadences.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Performance Monitoring</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Application performance is monitored to identify availability issues,
                    response time degradation, and error conditions. Issue resolution
                    follows documented escalation procedures with defined response and
                    resolution targets.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Evolving Requirements Support</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Web solutions are maintained to accommodate evolving business needs,
                    compliance requirements, and technology updates. Architecture
                    decisions made during initial development are designed to support
                    incremental enhancement without requiring full system redesign.
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
