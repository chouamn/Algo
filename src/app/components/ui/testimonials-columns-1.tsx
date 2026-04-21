import React from 'react';
import { motion } from 'motion/react';

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

type TestimonialsColumnProps = {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
};

export function TestimonialsColumn({ className, testimonials, duration = 10 }: TestimonialsColumnProps) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6 bg-white"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-8 rounded-3xl border border-[var(--border)] bg-white shadow-[0_20px_40px_-15px_rgba(30,39,73,0.08)] hover:shadow-[0_24px_48px_-20px_rgba(30,39,73,0.15)] hover:border-[var(--cyan)]/40 transition-all duration-300 max-w-xs w-full"
                key={i}
              >
                <div className="text-sm text-[var(--navy)]/80 leading-relaxed">{text}</div>
                <div className="flex items-center gap-3 mt-6">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover ring-1 ring-[var(--border)]"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold text-sm text-[var(--navy)] tracking-tight leading-5">{name}</div>
                    <div className="text-xs text-[var(--navy)]/60 tracking-tight leading-5">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
