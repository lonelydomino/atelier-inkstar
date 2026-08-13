import { brand } from "@atelier-inkstar/config/brand";

export function ShopFooter() {
  return (
    <footer className="mt-auto border-t border-white/8 py-10">
      <div className="shop-shell flex flex-col gap-4 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {brand.name} · Handmade by {brand.founder.alias}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`https://${brand.domains.marketing}/privacy`}
            className="hover:text-white"
          >
            Privacy
          </a>
          <a
            href={`https://${brand.domains.marketing}/terms`}
            className="hover:text-white"
          >
            Terms
          </a>
          <a
            href={`https://${brand.domains.marketing}/refunds`}
            className="hover:text-white"
          >
            Refunds
          </a>
          <a href={`mailto:${brand.contact.email}`} className="hover:text-white">
            {brand.contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
