import type { CSSProperties } from 'react';
import { motion, type Variants } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BackgroundBlobs } from './BackgroundBlobs';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  })
};

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-white">
      <BackgroundBlobs />
      {/* Subtle grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
          opacity: 0.025
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
<motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-[2.25rem] xl:text-[2.5rem] font-bold text-[var(--navy)] tracking-tight leading-[1.15] mb-6"
            >
              <span className="block lg:whitespace-nowrap">End-to-End Software Solutions,</span>
              <span className="block lg:whitespace-nowrap">Built for Performance</span>
              <span className="block lg:whitespace-nowrap">and Compliance</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg text-[var(--navy)]/70 mb-10 leading-[1.7] max-w-[58ch]"
              style={{ textWrap: 'pretty' } as CSSProperties}
            >
              Algotech Solutions delivers robust QA automation, software licensing, and
              compliance-driven IT services for government and private sector clients.
              We architect scalable, enterprise-grade solutions that ensure system
              reliability, Section 508 accessibility, and seamless software procurement
              for hundreds of satisfied organizations.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a href="#contact-us" className="bg-[var(--navy)] text-white px-8 py-4 rounded-full hover:bg-[var(--cyan)] transition-all duration-300 active:scale-[0.98] shadow-[0_4px_20px_rgba(30,39,73,0.2)] font-semibold inline-block text-center">
                Contact Us to Learn More
              </a>
              <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="bg-[var(--navy)] text-white px-8 py-4 rounded-full hover:bg-[var(--cyan)] transition-all duration-300 active:scale-[0.98] shadow-[0_4px_20px_rgba(30,39,73,0.2)] font-semibold inline-block text-center">
                Explore Our Services
              </Link>
            </motion.div>

            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-base text-[var(--navy)]/85 mt-10 leading-relaxed font-medium"
            >
              <span aria-hidden="true" className="inline-block w-2 h-2 rounded-full bg-[var(--cyan)] mr-2 align-middle" />
              100% U.S.-based experts supporting federal and enterprise environments
            </motion.p>
          </div>

          {/* Right — image + floating stat cards */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden h-[580px] shadow-[0_32px_64px_-20px_rgba(30,39,73,0.25)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                alt="IT consulting team collaborating at laptops"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/40 to-transparent" />
            </div>

            {/* Stat: years */}
            <div className="absolute -left-10 bottom-20 bg-white rounded-2xl p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-[var(--border)]">
              <div className="text-3xl font-bold text-[var(--navy)] font-mono tracking-tighter">17+</div>
              <div className="text-sm text-[var(--navy)]/70 mt-0.5">years of experience</div>
            </div>

            {/* Stat: devices */}
            <div className="absolute -right-6 top-20 bg-white rounded-2xl p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-[var(--border)]">
              <div className="text-3xl font-bold text-[var(--navy)] font-mono tracking-tighter">600+</div>
              <div className="text-sm text-[var(--navy)]/70 mt-0.5">devices in test lab</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
