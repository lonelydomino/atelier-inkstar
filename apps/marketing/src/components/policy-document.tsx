import Link from "next/link";
import type { PolicyDocument } from "@atelier-inkstar/config/policies";
import { brand } from "@atelier-inkstar/config/brand";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StarfieldBackground } from "@/components/visual/starfield-background";

const LAST_UPDATED = "June 22, 2026";

type PolicyDocumentViewProps = {
  policy: PolicyDocument;
};

function applyContactTokens(text: string) {
  return text.replaceAll("vesper@atelierinkstar.com", brand.contact.email);
}

export function PolicyDocumentView({ policy }: PolicyDocumentViewProps) {
  return (
    <div className="relative overflow-x-hidden">
      <StarfieldBackground />
      <div className="relative z-10">
        <SiteHeader />
        <main className="section-shell py-28 md:py-32">
          <article className="glass-panel gold-border-glow mx-auto max-w-3xl rounded-[2rem] p-8 md:p-12">
            <p className="text-xs font-semibold tracking-[0.25em] text-ink-gold uppercase">
              Legal
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold text-white md:text-5xl">
              {policy.title}
            </h1>
            <p className="mt-3 text-sm text-ink-muted">
              Last updated: {LAST_UPDATED}
            </p>
            <div className="mt-10 space-y-10">
              {policy.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base leading-8 text-ink-muted"
                      >
                        {applyContactTokens(paragraph)}
                      </p>
                    ))}
                    {section.bullets ? (
                      <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-ink-muted">
                        {section.bullets.map((item) => (
                          <li key={item}>{applyContactTokens(item)}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>
            <p className="mt-12 border-t border-white/8 pt-8 text-sm leading-7 text-ink-muted">
              These policies are provided for general information about how I run{" "}
              {brand.name}. They are not legal advice. For questions, email{" "}
              <Link
                href={`mailto:${brand.contact.email}`}
                className="text-ink-gold hover:text-white"
              >
                {brand.contact.email}
              </Link>
              .
            </p>
            <Link
              href="/"
              className="mt-6 inline-block text-sm font-medium text-ink-gold transition hover:text-white"
            >
              ← Back to home
            </Link>
          </article>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
