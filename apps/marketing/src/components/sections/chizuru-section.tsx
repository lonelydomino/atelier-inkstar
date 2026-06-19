"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brand } from "@atelier-inkstar/config/brand";
import { SectionHeading } from "@/components/ui/primitives";
import { brandAssets } from "@/lib/brand-assets";

export function ChizuruSection() {
  return (
    <section id="chizuru" className="py-24 md:py-32">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="gold-border-glow glass-panel relative overflow-hidden rounded-[2rem] p-4 md:p-6"
        >
          <Image
            src={brandAssets.chizuruHero}
            alt={`${brand.mascot.name} — official mascot artwork`}
            width={1024}
            height={1536}
            className="h-auto w-full rounded-[1.25rem]"
            sizes="(max-width: 1024px) 90vw, 480px"
          />
        </motion.div>
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Mascot"
            title={`Meet ${brand.mascot.name} — ${brand.mascot.title}`}
            description={brand.mascot.lore}
          />
          <p className="max-w-xl text-sm leading-7 text-ink-muted">
            Dreamer. Creator. Keeper of inspiration. Chizuru guides the atelier
            with confident elegance — weaving constellations, ink, and stardust
            into every sticker the shop releases.
          </p>
        </div>
      </div>
    </section>
  );
}
