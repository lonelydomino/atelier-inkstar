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
      "The atelier's muse — slow smiles, midnight ink, and constellations that linger exactly where your eyes wander.",
    blurb:
      "She doesn't chase the spotlight. She holds it. Every drop carries her touch: bold color, unapologetic charm, and just enough heat to make a sticker feel like a secret worth keeping.",
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
  social: {
    instagram: "https://www.instagram.com/atelierinkstar/",
    tiktokShop:
      "https://shop.tiktok.com/us/store/atelierinkstar/7494648125875652077",
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
