import { motion } from 'motion/react';
import { BackgroundBlobs } from '../components/BackgroundBlobs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function CompatibilityTesting() {
  return (
    <>
      <main id="main-content">
        {/* Hero */}
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
                  Device Compatibility Testing Services
                </h1>
                <p className="text-base text-[var(--navy)]/75 mb-8 leading-relaxed max-w-[60ch]">
                  Applications and websites don't miraculously work on computers, devices,
                  and other connected objects. You've put in hard work programming them to
                  cohabitate an electronic space. You've tried them out. And they seem to
                  coexist. But you don't really know how your customers will use them
                  together until they've been thoroughly vetted. That's where we come in.
                </p>
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

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden"
              >
                <ImageWithFallback
                  src="/src/imports/Device Compatibility.jpg"
                  alt="Device compatibility testing at Algotech Solutions"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Real People Testing on Real Devices */}
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
                  src="https://cdn.prod.website-files.com/65baee75271125cf196c2056/66299f1a37d7c761e369f2ba_RealPeopleTestingDevices.png"
                  alt="Tester holding an iPad device in front of a couch"
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
                  Real People Testing on Real Devices
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Our analysts specialize in developing scenarios that emulate the
                  situations customers will find themselves in. They're experienced in
                  discovering hard-to-find bugs because they do it every day.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  And they have plenty of toys to work with — more than 600 devices in
                  our test lab library. They make sure you have peace of mind while
                  scanning social media that first day you launch — we make sure the
                  compatibility is in order so you don't trend for the wrong reason.
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

        {/* Safe & Secure Content */}
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
                  Safe &amp; Secure Content
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-8 leading-relaxed max-w-[60ch]">
                  Companies originally hire Algotech because they want their apps and
                  websites to work properly. They come back to us again and again because
                  they know their content is tested in a secure environment by people they
                  trust. We've demonstrated for more than a decade that our clients'
                  products are in safe hands.
                </p>
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden"
              >
                <ImageWithFallback
                  src="/src/imports/Safe & Secure.jpeg"
                  alt="Safe and secure testing environment at Algotech Solutions"
                  className="w-full h-auto object-contain rounded-2xl"
                />
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
