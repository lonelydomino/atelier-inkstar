import { brand } from "@atelier-inkstar/config/brand";
import { SectionHeading } from "@/components/ui/primitives";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <SectionHeading
          eyebrow={brand.about.eyebrow}
          title={brand.about.title}
          description={brand.about.lead}
        />
        <div className="glass-panel rounded-3xl p-8 md:p-10">
          {brand.about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-base leading-8 text-ink-muted${index > 0 ? " mt-6" : ""}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
