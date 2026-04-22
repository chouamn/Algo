import { motion } from 'motion/react';
import { BackgroundBlobs } from './BackgroundBlobs';
import { TestimonialsColumn, type Testimonial } from './ui/testimonials-columns-1';

const testimonials: Testimonial[] = [
  {
    text: 'Our Microsoft licensing was a disaster — overlapping agreements, shelfware we had been paying for years, renewal dates scattered across a dozen vendors. Algotech consolidated everything and cut our annual software spend by 34%.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'James Okafor',
    role: 'IT Director · Pemberton Financial',
  },
  {
    text: 'We had a WCAG compliance issue blocking our HIPAA-certified portal from launch. Algotech found 23 distinct violations in the first audit and had us compliant in three weeks.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Maria Kovacs',
    role: 'VP Engineering · Centrix Health',
  },
  {
    text: 'Six weeks before launch, Algotech ran a full regression suite across 47 devices in four days and found 11 critical bugs. We shipped on time with zero post-launch tickets.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Leila Nazari',
    role: 'CTO · Forwardly',
  },
  {
    text: 'IoT testing across mixed firmware and protocols was something every other vendor declined. Algotech documented the entire environment and built a repeatable test harness our team now maintains in-house.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Daniel Reyes',
    role: 'Operations Manager · SkyBridge',
  },
  {
    text: 'The penetration testing engagement uncovered a critical OAuth misconfiguration our internal scans missed. Clear remediation guidance, delivered on time, with full retesting support.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Priya Venkatesh',
    role: 'CISO · Northgate Systems',
  },
  {
    text: 'Section 508 compliance was a procurement blocker for three government contracts. Algotech delivered the ACR in VPAT format and we qualified for the RFPs the following month.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Marcus Hale',
    role: 'Program Director · Federal Services',
  },
  {
    text: 'Automation framework design was exactly what we needed. Selenium + CI/CD integration reduced our manual regression cycle by 70% within the first quarter.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Anders Lindqvist',
    role: 'Head of QA · Blueline Retail',
  },
  {
    text: 'Onshore delivery model was the deciding factor. Real-time collaboration with their engineers, secure handling of regulated data, and consistent velocity across six quarters.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Rachel Nwosu',
    role: 'VP Operations · Meridian Health',
  },
  {
    text: 'The payment testing coverage across Stripe, Adyen, and our in-house gateway caught edge cases we would have shipped. Checkout reliability went up and support tickets dropped.',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Kenji Sato',
    role: 'E-Commerce Director · Axis Retail',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section
      id="what-clients-say"
      aria-labelledby="testimonials-heading"
      className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <BackgroundBlobs />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 max-w-3xl mx-auto"
        >
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--navy)] tracking-tighter leading-[1.15] mb-3"
          >
            What Clients Say
          </h2>
          <p className="text-sm sm:text-base text-[var(--navy)]/75 leading-relaxed">
            Trusted by enterprise and government teams to deliver quality, compliance,
            and results — on time and within budget.
          </p>
        </motion.header>

        {/* Vertical scrolling testimonials — 1 col mobile, 2 tablet, 3 desktop */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </div>

      </div>
    </section>
  );
}
