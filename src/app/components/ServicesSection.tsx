import { ImageWithFallback } from './figma/ImageWithFallback';
import { BackgroundBlobs } from './BackgroundBlobs';

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <BackgroundBlobs />
      <div className="relative max-w-7xl mx-auto">

        {/* Web & Mobile QA */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
          <div className="relative rounded-2xl overflow-hidden h-96 shadow-[0_20px_40px_-15px_rgba(30,39,73,0.15)]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80"
              alt="Software developer typing on laptop with mobile device nearby"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--navy)]/20 to-transparent" />
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--navy)] tracking-tighter leading-tight mb-5">
              Quality assurance for web and mobile platforms
            </h2>
            <p className="text-base text-[var(--navy)]/70 mb-5 leading-relaxed max-w-[60ch]">
              With over 10 years of experience in web and mobile application testing, we
              provide comprehensive QA services using modern automation tools and
              established testing practices. We ensure consistent performance and
              compatibility across all major devices and browsers.
            </p>
            <p className="text-base text-[var(--navy)]/70 mb-8 leading-relaxed max-w-[60ch]">
              Our QA services ensure application reliability, cross-platform functionality,
              and a consistent user experience across web and mobile systems.
            </p>
            <a href="#contact-us" className="bg-[var(--navy)] text-white px-7 py-3.5 rounded-full hover:bg-[var(--cyan)] transition-all duration-300 active:scale-[0.98] shadow-[0_4px_16px_rgba(30,39,73,0.2)] font-semibold text-sm inline-block text-center">
              Contact Us to Learn More
            </a>
          </div>
        </div>

        {/* Accessibility — styled to match Software Services section */}
        <div id="accessibility" className="relative grid md:grid-cols-2 gap-14 items-center bg-white rounded-3xl overflow-hidden p-10 shadow-[0_20px_48px_-16px_rgba(30,39,73,0.08)]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-[var(--cyan)]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] bg-[var(--navy)]/10 rounded-full blur-3xl" />
          </div>
          <div className="relative order-2 md:order-1">
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--navy)] tracking-tighter leading-tight mb-5">
              Accessibility testing experts
            </h2>
            <p className="text-base text-[var(--navy)]/70 mb-5 leading-relaxed max-w-[60ch]">
              Since 2015, we have delivered comprehensive accessibility audits across web,
              mobile, and desktop. Our experts cover automated browser testing, manual
              evaluations, and real assistive technology testing.
            </p>
            <p className="text-base text-[var(--navy)]/70 mb-8 leading-relaxed max-w-[60ch]">
              We report every barrier against WCAG 2.2 and Section 508 standards, then
              provide actionable remediation guidance so your team can fix issues fast.
            </p>
            <a href="#contact-us" className="bg-[var(--navy)] text-white px-7 py-3.5 rounded-full hover:bg-[var(--cyan)] transition-all duration-300 active:scale-[0.98] shadow-[0_4px_16px_rgba(30,39,73,0.2)] font-semibold text-sm inline-block text-center">
              Contact Us to Learn More
            </a>
          </div>

          <div className="relative flex items-center justify-center rounded-2xl overflow-hidden order-1 md:order-2">
            <ImageWithFallback
              src="/src/imports/accessibility image.jpg"
              alt="Hand holding smartphone displaying Algotech accessibility testing interface"
              className="w-full h-auto object-contain rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-[var(--navy)]/20 to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
}
