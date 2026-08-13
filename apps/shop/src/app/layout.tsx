import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { brand } from "@atelier-inkstar/config/brand";
import { CartProvider } from "@/lib/cart";
import { ShopFooter } from "@/components/shop-footer";
import { ShopHeader } from "@/components/shop-header";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} Shop`,
    template: `%s · ${brand.name} Shop`,
  },
  description: `Shop premium anime vinyl stickers from ${brand.name}.`,
  metadataBase: new URL(`https://${brand.domains.shop}`),
  icons: {
    icon: [{ url: "/icon.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="shop-bg flex min-h-full flex-col antialiased">
        <CartProvider>
          <ShopHeader />
          <main className="flex-1 py-8 md:py-12">{children}</main>
          <ShopFooter />
        </CartProvider>
      </body>
    </html>
  );
}
