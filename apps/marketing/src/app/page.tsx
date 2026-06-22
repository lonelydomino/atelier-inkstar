import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ChizuruSection } from "@/components/sections/chizuru-section";
import { FeaturedCollectionSection } from "@/components/sections/featured-collection-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MarketplaceSection } from "@/components/sections/marketplace-section";
// NewsletterSection — hidden until provider is wired (see .cursor/rules/newsletter-pending.mdc)
import { StarfieldBackground } from "@/components/visual/starfield-background";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <StarfieldBackground />
      <div className="relative z-10">
        <SiteHeader />
        <main>
          <HeroSection />
          <FeaturedCollectionSection />
          <MarketplaceSection />
          <AboutSection />
          <ChizuruSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
