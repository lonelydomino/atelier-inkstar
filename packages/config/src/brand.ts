export const brand = {
  name: "Atelier Inkstar",
  tagline: "Ink, passion, and stardust.",
  description:
    "Premium anime stickers & collectibles crafted with ink, passion, and stardust.",
  founder: {
    /** Public alias for Atelier Inkstar — used on site copy and customer-facing text */
    alias: "Vesper",
  },
  mascot: {
    name: "Chizuru",
    title: "The Muse of Atelier Inkstar",
    lore:
      "Dreamer. Creator. Keeper of inspiration. A visionary artist who weaves magic, constellations, and ink into every creation at the celestial atelier.",
  },
  domains: {
    marketing: "atelierinkstar.com",
    shop: "atelierinkstar.shop",
    admin: "admin.atelierinkstar.shop",
  },
  contact: {
    /** Domain alias → forwards to atelierinkstar@gmail.com */
    email: "vesper@atelierinkstar.com",
  },
  about: {
    eyebrow: "My Story",
    title: "One atelier, built by hand",
    lead:
      "Atelier Inkstar started as a love letter to the characters and art I grew up with, and grew into something I run myself, sticker by sticker.",
    paragraphs: [
      "Every design starts with refining and editing until it feels worthy of your collection. Then I print, laminate, and cut each vinyl sticker myself. No mass production, no shortcuts. Just the work it takes to make something that actually feels premium in your hand.",
      "I'm {founder}, and I love to make cool, cute and spicy art.",
      "I'm building this brand for collectors who care about finish, color, and character. If a sticker carries my name, I made sure it earned it.",
    ],
  },
} as const;
