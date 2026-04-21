import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BackgroundBlobs } from './BackgroundBlobs';

const blogPosts = [
  {
    date: 'March 18, 2026',
    category: 'Automation',
    title: 'The future of QA: AI-assisted testing in practice',
    excerpt: 'How machine learning is changing defect detection — without replacing human judgment.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80'
  },
  {
    date: 'March 4, 2026',
    category: 'Accessibility',
    title: 'WCAG 2.2: what changed and what it means for your product',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=600&q=80'
  },
  {
    date: 'February 21, 2026',
    category: 'Strategy',
    title: 'Is manual testing still relevant in 2026?',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80'
  },
  {
    date: 'February 7, 2026',
    category: 'Mobile',
    title: '10 things a mobile accessibility audit will find on your app',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80'
  }
];

export function BlogSection() {
  const [featured, ...rest] = blogPosts;

  return (
    <section id="resources" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <BackgroundBlobs />
      <div className="relative max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--navy)] tracking-tighter leading-tight">
              From the blog
            </h2>
          </div>
          <a href="#resources" className="text-sm font-semibold text-[var(--navy)]/60 hover:text-[var(--navy)] transition-colors shrink-0">
            View all posts →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">

          {/* Featured post */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 group cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[16/9]">
              <ImageWithFallback
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/40 to-transparent" />
              <span className="absolute top-4 left-4 bg-[var(--cyan)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {featured.category}
              </span>
            </div>
            <time className="text-xs text-[var(--navy)]/70 tracking-wide">{featured.date}</time>
            <h3 className="text-xl font-bold text-[var(--navy)] mt-1.5 mb-2 tracking-tight group-hover:text-[var(--cyan)] transition-colors duration-300 leading-snug">
              {featured.title}
            </h3>
            {featured.excerpt && (
              <p className="text-[var(--navy)]/70 text-sm leading-relaxed max-w-[52ch]">{featured.excerpt}</p>
            )}
          </motion.article>

          {/* Secondary posts */}
          <div className="flex flex-col gap-5">
            {rest.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i + 1) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer flex gap-4 items-start"
              >
                <div className="relative rounded-xl overflow-hidden w-24 h-20 shrink-0">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-[1.05] transition-transform duration-500"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-semibold text-[var(--cyan)] uppercase tracking-widest">{post.category}</span>
                    <span className="text-[var(--border)] text-xs">·</span>
                    <time className="text-xs text-[var(--navy)]/70">{post.date}</time>
                  </div>
                  <h3 className="text-sm font-bold text-[var(--navy)] leading-snug group-hover:text-[var(--cyan)] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
