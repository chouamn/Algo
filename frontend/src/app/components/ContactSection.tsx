import { useState } from 'react';
import { BackgroundBlobs } from './BackgroundBlobs';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const benefits = [
  '17 years of experience in software testing',
  'US-based company and engineering team',
  'Secure, NDA-protected testing environment',
  '600+ desktop and mobile devices on-site',
  'Custom quality assurance teams per project',
  'Reduce engineering costs without cutting quality',
];

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [formState, setFormState] = useState<FormState>('idle');

  const validate = () => {
    const next: Partial<typeof formData> = {};
    if (!formData.name.trim()) next.name = 'Name is required.';
    if (!formData.email.trim()) {
      next.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = 'Enter a valid email address.';
    }
    return next;
  };

  const handleSubmit: NonNullable<React.ComponentProps<'form'>['onSubmit']> = async (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setFormState('loading');
    try {
      const API_URL = import.meta.env.VITE_API_URL ?? '';
      const response = await fetch(`${API_URL}/api/v1/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        setFormState('error');
        if (result.details) {
          setErrors({
            name: result.details.name,
            email: result.details.email,
          });
        }
        return;
      }

      setFormState('success');
    } catch {
      setFormState('error');
    }
  };

  return (
    <section id="contact-us" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <BackgroundBlobs />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — benefits */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--navy)] tracking-tighter leading-tight mb-6">
              Ready to start testing?
            </h2>
            <p className="text-base text-[var(--navy)]/70 mb-10 leading-relaxed max-w-[52ch]">
              See why hundreds of businesses choose to test their products with{' '}
              <span className="text-[var(--navy)] font-semibold">Algotech Solutions</span>.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-[var(--navy)] flex items-center justify-center mt-0.5">
                    <svg aria-hidden="true" className="w-4 h-4 text-[var(--cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[var(--navy)] text-sm font-medium pt-0.5">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-3xl shadow-[0_20px_48px_-16px_rgba(30,39,73,0.12)] border border-[var(--border)] p-8">
            <h3 className="text-2xl font-bold text-[var(--navy)] tracking-tight mb-1">Contact us</h3>
            <p className="text-[var(--navy)]/70 text-sm mb-8">
              Complete the form and our team will be in touch within one business day.
            </p>

            {formState === 'success' ? (
              <div role="status" aria-live="polite" className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
                  <svg aria-hidden="true" className="w-7 h-7 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[var(--navy)] text-lg">Message sent.</p>
                  <p className="text-[var(--navy)]/70 text-sm mt-1">We will reach out to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--navy)]">
                    Name <span className="text-[var(--cyan)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: undefined }); }}
                    className={`w-full px-4 py-3 bg-[var(--light-gray)] rounded-lg text-sm transition-colors outline-none focus:ring-2 focus:ring-[var(--cyan)]/40 ${errors.name ? 'ring-2 ring-red-400' : 'border border-transparent'}`}
                    placeholder="Your full name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p id="name-error" role="alert" className="text-xs text-red-600">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--navy)]">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--light-gray)] rounded-lg text-sm transition-colors outline-none focus:ring-2 focus:ring-[var(--cyan)]/40 border border-transparent"
                    placeholder="+1 (312) 847-0291"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--navy)]">
                    Email address <span className="text-[var(--cyan)]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors({ ...errors, email: undefined }); }}
                    className={`w-full px-4 py-3 bg-[var(--light-gray)] rounded-lg text-sm transition-colors outline-none focus:ring-2 focus:ring-[var(--cyan)]/40 ${errors.email ? 'ring-2 ring-red-400' : 'border border-transparent'}`}
                    placeholder="you@company.com"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <p id="email-error" role="alert" className="text-xs text-red-600">{errors.email}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--navy)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--light-gray)] rounded-lg text-sm transition-colors outline-none focus:ring-2 focus:ring-[var(--cyan)]/40 resize-none border border-transparent"
                    placeholder="Tell us about your project, timeline, and what you need from a testing partner..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full bg-[var(--navy)] text-white py-4 rounded-full hover:bg-[var(--cyan)] transition-all duration-300 active:scale-[0.98] font-semibold text-sm disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_4px_16px_rgba(30,39,73,0.2)]"
                >
                  {formState === 'loading' ? 'Sending…' : 'Send message'}
                </button>

                <p className="text-xs text-[var(--navy)]/70 text-center">
                  Fields marked <span className="text-[var(--cyan)]">*</span> are required
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
