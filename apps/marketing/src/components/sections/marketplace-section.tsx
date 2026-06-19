"use client";

import { motion } from "framer-motion";
import { marketplaceLinks } from "@atelier-inkstar/catalog";
import { SectionHeading } from "@/components/ui/primitives";

export function MarketplaceSection() {
  return (
    <section id="marketplaces" className="py-24 md:py-32">
      <div className="section-shell flex flex-col gap-12">
        <SectionHeading
          eyebrow="Shop the Atelier"
          title="Find us across the galaxy"
          description="Shop our current releases on trusted marketplaces while the custom .shop experience comes online."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {marketplaceLinks.map((marketplace, index) => (
            <motion.a
              key={marketplace.id}
              href={marketplace.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel group rounded-3xl p-8 transition hover:border-ink-gold/40"
            >
              <div
                className="mb-6 h-1.5 w-16 rounded-full"
                style={{ backgroundColor: marketplace.accent }}
              />
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
                {marketplace.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                {marketplace.description}
              </p>
              <p className="mt-6 text-sm font-semibold text-ink-gold transition group-hover:translate-x-1">
                Visit storefront →
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
