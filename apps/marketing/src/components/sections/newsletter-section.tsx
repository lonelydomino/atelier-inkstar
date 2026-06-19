"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/primitives";

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="pb-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gold-border-glow glass-panel rounded-[2rem] px-8 py-12 md:px-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <SectionHeading
              eyebrow="Stardust Dispatch"
              title="Join the celestial mailing list"
              description="Be first to know about new releases, limited drops, and exclusive promotions."
            />
            {submitted ? (
              <p className="text-base text-ink-gold">
                You&apos;re on the list. Watch the skies for the next drop.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4 sm:flex-row">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@domain.com"
                  className="h-12 flex-1 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white outline-none transition placeholder:text-ink-muted focus:border-ink-gold/50"
                />
                <button
                  type="submit"
                  className="h-12 rounded-full bg-ink-gold px-6 text-sm font-semibold text-ink-navy transition hover:brightness-110"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
