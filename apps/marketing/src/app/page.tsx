import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ChizuruSection } from "@/components/sections/chizuru-section";
import { FeaturedCollectionSection } from "@/components/sections/featured-collection-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SaleBanner } from "@/components/sale-banner";
// NewsletterSection — hidden until provider is wired (see .cursor/rules/newsletter-pending.mdc)
import { StarfieldBackground } from "@/components/visual/starfield-background";
import { animeExpoSale2026, isPromotionActive } from "@/lib/promotions";

export default function Home() {
  const saleActive = isPromotionActive(animeExpoSale2026);

  return (
    <div className="relative overflow-x-hidden">
      <StarfieldBackground />
      <div className="relative z-10">
        <SiteHeader />
        <SaleBanner />
        <main>
          <HeroSection saleBannerActive={saleActive} />
          <FeaturedCollectionSection />
          <AboutSection />
          <ChizuruSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
