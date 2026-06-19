"use client";

import { motion } from "framer-motion";
import type { FeaturedProduct } from "@atelier-inkstar/catalog";
import { featuredProducts } from "@atelier-inkstar/catalog";
import { SectionHeading } from "@/components/ui/primitives";

export function FeaturedCollectionSection() {
  return (
    <section id="collection" className="py-24 md:py-32">
      <div className="section-shell flex flex-col gap-12">
        <SectionHeading
          eyebrow="Featured Collection"
          title="Stickers that feel like treasure"
          description="A curated glimpse of the atelier — each design crafted for premium finish, color depth, and collector appeal."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: FeaturedProduct;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="gold-border-glow group glass-panel overflow-hidden rounded-3xl"
    >
      <div
        className="relative aspect-square overflow-hidden"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${product.accent}55, transparent 55%), linear-gradient(160deg, #191b2e, #081020)`,
        }}
      >
        <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.18),transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#081020] to-transparent" />
        <div className="absolute inset-0 flex items-end p-5">
          <div>
            <p className="text-xs tracking-[0.2em] text-white/70 uppercase">
              {product.franchise}
            </p>
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
              {product.character}
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-1 p-5">
        <p className="text-sm font-medium text-white">{product.name}</p>
        <p className="text-xs tracking-wide text-ink-muted uppercase">
          {product.baseSku}
        </p>
      </div>
    </motion.article>
  );
}
