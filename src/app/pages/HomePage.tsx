import { Hero } from '../components/Hero';
import { SoftwareLicensing } from '../components/SoftwareLicensing';
import { ServicesSection } from '../components/ServicesSection';
import { TestingTypes } from '../components/TestingTypes';
import { QAProcess } from '../components/QAProcess';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function HomePage() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <SoftwareLicensing />
        <ServicesSection />
        <TestingTypes />
        <QAProcess />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
