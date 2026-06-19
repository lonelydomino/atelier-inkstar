import { brand } from "@atelier-inkstar/config/brand";
import { SectionHeading } from "@/components/ui/primitives";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Our Story"
          title="An atelier born under starlight"
          description="Atelier Inkstar began as a passion project — transforming beloved characters into premium vinyl art with obsessive attention to color, finish, and presentation."
        />
        <div className="glass-panel rounded-3xl p-8 md:p-10">
          <p className="text-base leading-8 text-ink-muted">
            Every sticker is designed like a miniature collectible: layered inks,
            celestial palettes, and finishes that feel luxurious in hand. We
            believe fandom deserves boutique craftsmanship — not generic
            marketplace clutter.
          </p>
          <p className="mt-6 text-base leading-8 text-ink-muted">
            From limited drops to franchise favorites, {brand.name} is building a
            long-term platform for artists and collectors who want something
            unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
}
