import { ImageWithFallback } from './figma/ImageWithFallback';
import { BackgroundBlobs } from './BackgroundBlobs';

export function QAProcess() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden min-h-[calc(100vh-88px)]">
      <BackgroundBlobs />
      <div className="relative max-w-7xl mx-auto">

        {/* On-time, In-house, Onshore */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="relative rounded-2xl overflow-hidden h-96 shadow-[0_20px_40px_-15px_rgba(30,39,73,0.15)]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
              alt="Software engineer reviewing code on laptop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--navy)]/20 to-transparent" />
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--navy)] tracking-tighter leading-tight mb-5" id="how">
              QA testing completed on-time, in-house, and onshore
            </h2>
            <p className="text-base text-[var(--navy)]/70 mb-5 leading-relaxed max-w-[60ch]">
              Algotech has become a leading QA outsource partner by helping customers and
              digital agencies sharpen their quality processes — for projects of every size.
              Streamlined work delivers higher-quality products and better ROI, on time and
              within budget.
            </p>
            <p className="text-base text-[var(--navy)]/70 mb-8 leading-relaxed max-w-[60ch]">
              All testing is performed on-site by our highest-caliber engineers in the USA.
              Each engagement is personally assigned to a certified professional quality
              engineer with years of hands-on experience.
            </p>
            <a href="#contact-us" className="bg-[var(--navy)] text-white px-7 py-3.5 rounded-full hover:bg-[var(--cyan)] transition-all duration-300 active:scale-[0.98] shadow-[0_4px_16px_rgba(30,39,73,0.2)] font-semibold text-sm inline-block text-center">
              Contact Us to Learn More
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
