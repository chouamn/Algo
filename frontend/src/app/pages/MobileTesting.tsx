import { motion } from 'motion/react';
import { BackgroundBlobs } from '../components/BackgroundBlobs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function MobileTesting() {
  return (
    <>
      <main id="main-content">
        {/* 1. Mobile Testing Overview */}
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
                  Mobile Testing Services
                </h1>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Mobile testing validates the functionality, performance, and usability
                  of mobile applications across devices, operating systems, and user
                  environments. Algotech Solutions provides structured mobile QA for
                  enterprise and government applications on both iOS and Android
                  platforms, identifying defects before production release.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  Validation is performed on real physical devices — not emulators —
                  ensuring that test results accurately reflect the behavior users will
                  experience on actual hardware across different manufacturers, OS
                  versions, and network conditions.
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
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80"
                  alt="Mobile application testing on real iOS and Android devices"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Functional Mobile Testing */}
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
                  src="https://images.unsplash.com/photo-1533228100845-08145b01de14?auto=format&fit=crop&w=900&q=80"
                  alt="QA tester validating mobile application workflows on a smartphone"
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
                  Functional Mobile Testing
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Functional testing validates core application behavior across user
                  workflows — including authentication, navigation, content interaction,
                  form submission, and transaction completion. Test cases are derived
                  from documented requirements and executed against defined acceptance
                  criteria.
                </p>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Scope includes validation of form inputs and data persistence, API
                  integration behavior under varying response conditions, push
                  notification handling, deep linking, and platform-specific interaction
                  patterns such as gestures, haptic feedback, and native component
                  behavior.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  This ensures that core functionality performs consistently across
                  device types and OS versions, supporting reliable delivery of the
                  intended user experience.
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

        {/* 3. Device, OS, and Compatibility Testing */}
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
                  Device, OS, and Compatibility Testing
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Compatibility testing is executed across a broad matrix of mobile
                  devices — including phones and tablets — spanning multiple
                  manufacturers, form factors, and screen resolutions. Test coverage
                  adapts to the target audience of each application to prioritize the
                  most relevant device configurations.
                </p>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  OS version coverage includes current and prior-generation releases of
                  iOS and Android, ensuring that applications perform correctly for
                  users who have not yet upgraded to the latest platform versions.
                  Device-specific behaviors — permission handling, background execution,
                  and hardware interaction — are validated per platform.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  Real-device testing is used in place of emulators for accurate
                  results. Our device lab maintains a current inventory of physical
                  hardware representative of the production user base, eliminating
                  discrepancies that emulator-only testing can introduce.
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden aspect-video bg-[var(--light-gray)]"
              >
                <ImageWithFallback
                  src="/src/imports/Quick.png"
                  alt="Mobile device compatibility testing across iOS and Android devices"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Performance and Usability on Mobile */}
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
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80"
                  alt="Mobile application performance testing under varying network conditions"
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
                  Performance and Usability on Mobile
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Performance testing measures application launch time, screen
                  transition responsiveness, and stability under extended use.
                  Evaluation includes memory utilization, CPU behavior, and battery
                  consumption patterns to identify optimization opportunities that
                  preserve device resources.
                </p>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Network condition testing validates application behavior across
                  WiFi, LTE, and 5G connections, as well as degraded or offline
                  scenarios. This ensures that data loading, synchronization, and
                  error handling perform reliably under the variable conditions users
                  encounter in real-world usage.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  Usability validation assesses the mobile experience from an
                  end-user perspective — touch target sizing, navigation efficiency,
                  content readability, and interaction feedback — providing
                  evidence-based recommendations for optimizing mobile engagement.
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

        {/* 5. Test Execution and Reporting */}
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
                Test Execution and Reporting
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Structured Test Case Execution</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Mobile test cases are mapped to platform-specific requirements and
                    executed on real devices with documented environment configuration.
                    Pass/fail status, device details, and OS version are recorded for
                    each test run to support reproducibility and traceability.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Defect Tracking with Severity Classification</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Defects are logged with severity classification (Critical, High,
                    Medium, Low), reproduction steps, device context, screenshots, and
                    system logs. This provides engineering teams with the full context
                    required for efficient defect investigation and resolution.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Agile and CI/CD Workflow Support</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Mobile testing integrates into agile sprint cycles and CI/CD
                    pipelines, supporting continuous validation on each build. Test
                    execution adapts to release cadence, providing rapid feedback for
                    both iterative development and major version releases.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Engineering Team Collaboration</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Test engineers collaborate directly with client mobile engineering
                    teams — participating in requirements reviews, platform decision
                    discussions, and defect triage. This coordination ensures QA
                    activities align with development priorities and release objectives.
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
