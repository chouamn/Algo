import { motion } from 'motion/react';
import { BackgroundBlobs } from '../components/BackgroundBlobs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function SoftwareLicensingServices() {
  return (
    <>
      <main id="main-content">
        {/* 1. Software Licensing Services Overview */}
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
                  Software Licensing Services
                </h1>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Algotech Solutions provides software licensing services encompassing
                  the procurement, management, and distribution of enterprise software
                  licenses for government agencies and enterprise organizations. Our
                  services support compliance with procurement regulations, vendor
                  licensing agreements, and organizational software governance policies.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  As a Carahsoft Technology Corp. reseller channel partner, Algotech
                  enables access to government-approved software vendors and compliant
                  purchasing pathways — supporting federal, state, and enterprise
                  procurement requirements through authorized distribution channels.
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
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80"
                  alt="Enterprise software licensing procurement and vendor management"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Enterprise Software Procurement and Vendor Access */}
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
                  alt="Procurement workflow management and vendor access through authorized channels"
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
                  Enterprise Software Procurement and Vendor Access
                </h2>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Algotech facilitates access to enterprise software vendors through
                  Carahsoft distribution channels, enabling streamlined procurement
                  workflows for government and enterprise buyers. License acquisition,
                  renewal management, and vendor coordination are managed through
                  structured processes aligned to procurement lifecycle requirements.
                </p>
                <p className="text-base text-[var(--navy)]/75 mb-5 leading-relaxed max-w-[60ch]">
                  Procurement support includes alignment with SAM.gov contracting
                  workflows, contract vehicle compliance, and coordination with
                  procurement officers to ensure that software acquisitions follow
                  authorized purchasing pathways and satisfy organizational sourcing
                  requirements.
                </p>
                <p className="text-base text-[var(--navy)]/75 leading-relaxed max-w-[60ch]">
                  This structured approach reduces procurement friction, ensures vendor
                  accountability, and provides organizations with documented, compliant
                  acquisition records for audit and governance purposes.
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

        {/* 3. Licensing Management and Optimization */}
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
                Licensing Management and Optimization
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">License Lifecycle Management</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Software licenses are tracked across the full procurement lifecycle —
                    from initial acquisition through renewal and retirement. Centralized
                    license tracking provides visibility into active agreements, renewal
                    dates, and usage status, ensuring that organizations maintain
                    compliance with vendor terms and avoid lapses in coverage.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Cost Optimization</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    License cost optimization identifies underutilized licenses,
                    consolidation opportunities, and volume pricing eligibility. By
                    aligning license inventory to actual usage, organizations reduce
                    unnecessary spend and allocate software budgets more effectively
                    across departments and programs.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Compliance and Governance</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    License compliance monitoring ensures adherence to vendor agreements,
                    usage policies, and organizational governance standards. Proactive
                    compliance management reduces the risk of audit findings, licensing
                    overages, and non-conformance with contractual obligations.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Enterprise Asset Visibility</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Structured reporting provides procurement and IT leadership with
                    clear visibility into the organization's software asset portfolio —
                    supporting informed decision-making for renewals, upgrades, and new
                    acquisitions across the enterprise technology stack.
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

        {/* 4. Government and Enterprise Procurement Support */}
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
                Government and Enterprise Procurement Support
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Government Contracting Alignment</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Algotech supports government contracting environments by aligning
                    software procurement with SAM.gov workflows, contract vehicle
                    requirements, and agency-specific acquisition processes. Procurement
                    coordination ensures that software sourcing follows authorized
                    channels and satisfies federal and state purchasing regulations.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Vendor Fulfillment Through Carahsoft</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Software fulfillment is executed through the Carahsoft reseller
                    ecosystem, providing access to an established network of
                    government-approved vendors. This channel ensures that procurement
                    transactions are processed through authorized distribution pathways
                    with proper documentation and vendor accountability.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Procurement Team Coordination</h3>
                  <p className="text-sm text-[var(--navy)]/75 leading-relaxed">
                    Algotech coordinates directly with procurement officers, contracting
                    officers, and IT teams to ensure that licensing requirements are
                    accurately scoped, quotes are aligned to budget authority, and
                    fulfillment timelines meet project schedules and contract milestones.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--navy)] mb-3">Measurable Outcomes</h3>
                  <ul className="space-y-2">
                    {[
                      'Faster procurement cycles through structured vendor channels',
                      'Reduced licensing complexity and administrative overhead',
                      'Documented acquisition records for audit and governance review',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-[var(--cyan)]" />
                        <p className="text-sm text-[var(--navy)]/75 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
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
