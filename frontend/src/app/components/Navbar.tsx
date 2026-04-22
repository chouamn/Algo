import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router';

type NavChild = { label: string; href: string; route?: string };
type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

const navLinks: NavLink[] = [
  {
    label: 'Software Services',
    href: '#licensing',
    children: [
      { label: 'Software Licensing Services',       href: '#sw-licensing', route: '/software-services/licensing' },
      { label: 'Website Development Services',      href: '#sw-webdev', route: '/software-services/website-development' },
      { label: 'Software Support & Maintenance',    href: '#sw-support', route: '/software-services/support-maintenance' },
    ],
  },
  {
    label: 'QA Services',
    href: '#services',
    children: [
      { label: 'Functionality Testing',       href: '#qa-functionality', route: '/qa-services/functionality-testing' },
      { label: 'Device Compatibility Testing', href: '#qa-device-compatibility', route: '/qa-services/compatibility-testing' },
      { label: 'Usability Testing',           href: '#qa-usability', route: '/qa-services/usability-testing' },
      { label: 'API Testing',                 href: '#qa-api', route: '/qa-services/api-testing' },
      { label: 'Payment Testing',             href: '#qa-payment', route: '/qa-services/payment-testing' },
      { label: 'Test Automation Services',    href: '#qa-automation', route: '/qa-services/test-automation-services' },
      { label: 'Penetration Testing',         href: '#qa-pentest', route: '/qa-services/penetration-testing' },
    ],
  },
  {
    label: 'Accessibility',
    href: '#accessibility',
    children: [
      { label: 'Accessibility Testing',                         href: '#a11y-testing', route: '/accessibility/accessibility-testing' },
      { label: 'Accessibility Audit',                           href: '#a11y-audit', route: '/accessibility/accessibility-audit' },
      { label: 'ACR Services', href: '#a11y-acr', route: '/accessibility/accessibility-conformance-report-acr-services' },
      { label: 'WCAG',                                          href: '#a11y-wcag', route: '/accessibility/wcag' },
    ],
  },
  {
    label: 'What We Test',
    href: '#testing',
    children: [
      { label: 'Website Testing',    href: '#wt-website', route: '/what-we-test/website-testing' },
      { label: 'Mobile App Testing', href: '#wt-mobile', route: '/what-we-test/mobile-app-testing' },
      { label: 'Data Collection',    href: '#wt-data', route: '/what-we-test/data-collection' },
      { label: 'E-Commerce Testing', href: '#wt-ecommerce', route: '/what-we-test/ecommerce-testing' },
    ],
  },
  {
    label: 'About',
    href: '#what-clients-say',
    children: [
      { label: 'About Us', href: '#what-clients-say', route: '/about' },
      { label: 'Careers', href: '#careers' },
    ],
  },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.scrollY + window.innerHeight * 0.35;
      let best = '';
      let bestTop = -Infinity;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= threshold && top > bestTop) {
          bestTop = top;
          best = id;
        }
      });
      setActive(best);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids]);

  return active;
}

const sectionIds = navLinks.map((l) => l.href.slice(1));

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [navBg, setNavBg] = useState<string>('transparent');
  const navRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const active = useActiveSection(sectionIds);

  // Match the navbar outer-wrapper bg to whichever section is currently under
  // the navbar boundary. This gives the "floating pill" illusion while still
  // masking any content that would otherwise peek through at the top.
  useEffect(() => {
    const main = document.getElementById('main-content');
    if (!main) return;

    let raf = 0;
    const updateBg = () => {
      const navHeight = navRef.current?.offsetHeight ?? 88;
      const probeY = navHeight + 1; // just below the navbar
      const children = Array.from(main.children) as HTMLElement[];
      const current = children.find((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= probeY && r.bottom > probeY;
      });
      if (!current) return;
      const bg = getComputedStyle(current).backgroundColor;
      // Ignore fully transparent backgrounds (walk up to a painted ancestor)
      if (!bg || bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') return;
      setNavBg(bg);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateBg);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateBg();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Intercept in-page anchor navigation and scroll with an offset equal to the
  // live navbar height + a visual buffer. Works for mouse, touch, and keyboard
  // (Enter) activation; respects prefers-reduced-motion.
  const scrollToHash = (hash: string) => {
    const id = hash.replace('#', '');
    const target = document.getElementById(id);
    if (!target) return;

    const navEl = document.querySelector('nav[aria-label="Primary"]') as HTMLElement | null;
    const navHeight = Math.max(navEl?.offsetHeight ?? 0, 88);
    const buffer = 0;
    const targetY = target.getBoundingClientRect().top + window.scrollY - navHeight - buffer;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: Math.max(targetY, 0), behavior: reduced ? 'auto' : 'smooth' });
  };

  const handleAnchorClick = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith('#') || href === '#') return;
    e.preventDefault();

    // Close mobile menu + any open dropdowns
    setIsOpen(false);
    setOpenMenu(null);
    setMobileExpanded(null);

    // If we're NOT on the homepage, navigate there first then scroll
    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }

    // On the homepage — scroll directly
    scrollToHash(href);
    history.pushState(null, '', href);
  };

  // Apply the same offset when a page loads with a hash (e.g., refreshing on
  // Handle hash scrolling on page load AND after route changes (e.g.,
  // navigating from /qa-services/functionality-testing back to /#services).
  useEffect(() => {
    if (!location.hash) return;

    // Defer two frames so the new route's DOM is fully rendered
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToHash(location.hash);
      });
    });
  }, [location]);

  return (
    <>
      {/* Floating pill */}
      <nav
        ref={navRef}
        aria-label="Primary"
        style={{ backgroundColor: navBg, transition: 'background-color 250ms ease' }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pointer-events-none"
      >
        <div className="max-w-5xl mx-auto pointer-events-auto pb-4">
          <div className="bg-white border border-[var(--border)] rounded-full px-5 h-14 flex items-center justify-between shadow-[0_4px_24px_rgba(30,39,73,0.07)]">

            {/* Logo */}
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2.5 shrink-0">
              <img
                src="/src/imports/logo.jpeg"
                alt="Algotech Solutions logo"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="font-bold text-sm text-[var(--navy)] tracking-tight hidden sm:block">
                Algotech Solutions
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-4 ml-3 whitespace-nowrap">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1);
                const hasChildren = !!link.children?.length;
                const isMenuOpen = openMenu === link.href;

                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => hasChildren && setOpenMenu(link.href)}
                    onMouseLeave={() => hasChildren && setOpenMenu(null)}
                  >
                    <a
                      href={link.href}
                      onClick={handleAnchorClick(link.href)}
                      className={`text-sm font-medium transition-colors duration-200 relative inline-flex items-center gap-1 ${
                        isActive ? 'text-[var(--navy)]' : 'text-[var(--navy)]/50 hover:text-[var(--navy)]'
                      }`}
                      aria-haspopup={hasChildren || undefined}
                      aria-expanded={hasChildren ? isMenuOpen : undefined}
                    >
                      {link.label}
                      {hasChildren && (
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--cyan)] rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>

                    {/* Dropdown */}
                    {hasChildren && (
                      <AnimatePresence>
                        {isMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                          >
                            <div className="w-64 bg-white border border-[var(--border)] rounded-2xl shadow-[0_20px_40px_-15px_rgba(30,39,73,0.18)] py-2 overflow-hidden">
                              {link.children!.map((child) =>
                                child.route ? (
                                  <Link
                                    key={child.route}
                                    to={child.route}
                                    onClick={() => { setOpenMenu(null); window.scrollTo(0, 0); }}
                                    className="block px-4 py-2.5 text-sm text-[var(--navy)]/75 hover:text-[var(--cyan)] hover:bg-[var(--light-gray)] transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                ) : (
                                  <a
                                    key={child.href}
                                    href={child.href}
                                    onClick={handleAnchorClick(child.href)}
                                    className="block px-4 py-2.5 text-sm text-[var(--navy)]/75 hover:text-[var(--cyan)] hover:bg-[var(--light-gray)] transition-colors"
                                  >
                                    {child.label}
                                  </a>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#contact-us"
                onClick={handleAnchorClick('#contact-us')}
                className="hidden sm:inline-flex items-center gap-2.5 bg-[var(--navy)] text-white text-sm px-4 py-2 rounded-full hover:bg-[var(--cyan)] transition-all duration-300 active:scale-[0.98] font-semibold"
              >
                Contact us
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                  <svg aria-hidden="true" className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>

              <button
                className="lg:hidden w-9 h-9 rounded-full bg-[var(--light-gray)] flex items-center justify-center text-[var(--navy)] hover:bg-[var(--border)] transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/96 backdrop-blur-xl flex flex-col px-6 pt-28 pb-10 overflow-y-auto"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const hasChildren = !!link.children?.length;
                const isExpanded = mobileExpanded === link.href;

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + i * 0.055, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-[var(--border)]"
                  >
                    <div className="flex items-center justify-between">
                      <a
                        href={link.href}
                        onClick={handleAnchorClick(link.href)}
                        className={`flex-1 text-2xl font-bold py-3 transition-colors ${
                          active === link.href.slice(1) ? 'text-[var(--cyan)]' : 'text-[var(--navy)] hover:text-[var(--cyan)]'
                        }`}
                      >
                        {link.label}
                      </a>
                      {hasChildren && (
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : link.href)}
                          aria-label={isExpanded ? 'Collapse submenu' : 'Expand submenu'}
                          className="p-2 text-[var(--navy)]"
                        >
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>

                    <AnimatePresence initial={false}>
                      {hasChildren && isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-1 pl-3 pb-3">
                            {link.children!.map((child) =>
                              child.route ? (
                                <Link
                                  key={child.route}
                                  to={child.route}
                                  onClick={() => { setIsOpen(false); setMobileExpanded(null); window.scrollTo(0, 0); }}
                                  className="text-base font-medium text-[var(--navy)]/70 hover:text-[var(--cyan)] py-1.5 transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ) : (
                                <a
                                  key={child.href}
                                  href={child.href}
                                  onClick={handleAnchorClick(child.href)}
                                  className="text-base font-medium text-[var(--navy)]/70 hover:text-[var(--cyan)] py-1.5 transition-colors"
                                >
                                  {child.label}
                                </a>
                              )
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8"
            >
              <a
                href="#contact-us"
                onClick={handleAnchorClick('#contact-us')}
                className="block w-full text-center bg-[var(--navy)] text-white py-4 rounded-full hover:bg-[var(--cyan)] transition-all duration-300 font-semibold"
              >
                Contact us
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
