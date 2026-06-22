export type PolicySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type PolicyDocument = {
  slug: "privacy" | "terms" | "refunds";
  title: string;
  sections: PolicySection[];
};

export const policies: PolicyDocument[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "I operate Atelier Inkstar and run atelierinkstar.com and related brand pages. In this policy, \"I,\" \"me,\" and \"my\" refer to me as the operator of Atelier Inkstar.",
          "This policy explains what information I collect, how I use it, and the choices you have. By using my website, you agree to the practices described here. If you do not agree, please do not use the site.",
        ],
      },
      {
        title: "Information I collect",
        paragraphs: ["I may collect the following types of information:"],
        bullets: [
          "Contact information you send me directly (for example, when you email vesper@atelierinkstar.com).",
          "Newsletter information if you subscribe to Stardust Dispatch (email address and signup date).",
          "Technical data such as browser type, device type, pages visited, and referring URLs, typically collected through hosting and analytics tools.",
          "Cookies and similar technologies used for basic site functionality, performance, and (if enabled) analytics.",
        ],
      },
      {
        title: "How I use information",
        paragraphs: ["I use information to:"],
        bullets: [
          "Operate, maintain, and improve my website and brand experience.",
          "Respond to your questions, support requests, and messages.",
          "Send updates or promotions if you opted in to my mailing list (you can unsubscribe at any time).",
          "Monitor site security, prevent abuse, and understand how visitors use the site.",
        ],
      },
      {
        title: "Purchases on marketplaces",
        paragraphs: [
          "Most purchases are completed on third-party platforms such as Etsy, TikTok Shop, and eBay. Those platforms collect their own customer and payment information under their privacy policies. I do not receive your full payment card details from those platforms.",
          "I may receive order-related information from a marketplace (such as your name, shipping address, and items ordered) so I can fulfill your order.",
        ],
      },
      {
        title: "How I share information",
        paragraphs: [
          "I do not sell your personal information. I may share information with service providers that help me run the site (for example, hosting, email delivery, or analytics), only as needed to provide those services and subject to appropriate safeguards.",
          "I may disclose information if required by law, to protect my rights, or to respond to valid legal requests.",
        ],
      },
      {
        title: "Data retention",
        paragraphs: [
          "I keep information only as long as needed for the purposes described in this policy, unless a longer period is required by law.",
        ],
      },
      {
        title: "Your choices and rights",
        paragraphs: [
          "Depending on where you live, you may have rights to access, correct, delete, or restrict certain uses of your personal information. To make a request, contact me at the email below.",
          "You can unsubscribe from marketing emails using the link in any newsletter message.",
        ],
      },
      {
        title: "Children's privacy",
        paragraphs: [
          "My site is not directed to children under 13, and I do not knowingly collect personal information from children under 13. If you believe I have collected such information, contact me and I will delete it.",
        ],
      },
      {
        title: "Changes to this policy",
        paragraphs: [
          "I may update this policy from time to time. The \"Last updated\" date at the top of this page will reflect the latest version. Continued use of the site after changes means you accept the updated policy.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "Questions about this policy? Email vesper@atelierinkstar.com.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    sections: [
      {
        title: "Agreement",
        paragraphs: [
          "These Terms of Service (\"Terms\") govern your use of atelierinkstar.com and related pages that I operate for Atelier Inkstar. By accessing or using the site, you agree to these Terms.",
        ],
      },
      {
        title: "About this website",
        paragraphs: [
          "This website is a brand and marketing site for Atelier Inkstar, my small independent studio where I create premium anime-inspired stickers and collectibles by hand.",
          "Unless I explicitly state otherwise on a future storefront, purchases are not completed directly on atelierinkstar.com. Checkout happens on third-party marketplaces linked from this site.",
        ],
      },
      {
        title: "Eligibility",
        paragraphs: [
          "You must be at least 13 years old to use this site. If you are under 18, you should use the site only with permission from a parent or guardian.",
        ],
      },
      {
        title: "Intellectual property",
        paragraphs: [
          "The Atelier Inkstar name, logo, emblem, mascot artwork, product photography, and site design are owned by me or used under license. You may not copy, reproduce, or redistribute them without my written permission.",
          "Some products feature fan-art interpretations of characters from third-party franchises. I am not affiliated with, endorsed by, or sponsored by those rights holders. Character names and franchises belong to their respective owners.",
        ],
      },
      {
        title: "Acceptable use",
        paragraphs: ["You agree not to:"],
        bullets: [
          "Use the site for unlawful, harmful, or abusive purposes.",
          "Attempt to interfere with site security or access systems without authorization.",
          "Scrape, copy, or republish large portions of the site without my permission.",
          "Misrepresent your affiliation with Atelier Inkstar.",
        ],
      },
      {
        title: "Third-party links and marketplaces",
        paragraphs: [
          "My site links to Etsy, TikTok Shop, eBay, social media, and other third-party services. Those services have their own terms and policies. I am not responsible for their content, availability, or practices.",
        ],
      },
      {
        title: "Disclaimer",
        paragraphs: [
          "The site and its content are provided \"as is\" and \"as available\" without warranties of any kind, whether express or implied, to the fullest extent permitted by law.",
          "I do not guarantee that the site will be uninterrupted, error-free, or free of harmful components.",
        ],
      },
      {
        title: "Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by law, I will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the site.",
          "My total liability for any claim relating to the site will not exceed the amount you paid to me directly through atelierinkstar.com in the twelve (12) months before the claim, or fifty U.S. dollars (USD $50), whichever is greater.",
        ],
      },
      {
        title: "Changes",
        paragraphs: [
          "I may update these Terms at any time. The \"Last updated\" date shows when they were last revised. Your continued use of the site after changes constitutes acceptance of the updated Terms.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "Questions about these Terms? Email vesper@atelierinkstar.com.",
        ],
      },
    ],
  },
  {
    slug: "refunds",
    title: "Refund Policy",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "I want you to love what you receive from Atelier Inkstar. Because most orders are placed through third-party marketplaces, refund and return rules depend on where you purchased.",
          "Please read this policy together with the return policy on the platform where you checked out.",
        ],
      },
      {
        title: "Where you purchased matters",
        paragraphs: ["I currently sell through:"],
        bullets: [
          "Etsy — atelierinkstar.etsy.com",
          "TikTok Shop — Atelier Inkstar store",
          "eBay — atelierinkstarshop seller profile",
        ],
      },
      {
        title: "Marketplace purchases",
        paragraphs: [
          "If you bought on Etsy, TikTok Shop, or eBay, open a return or refund request through that platform first. Each marketplace has its own timelines, eligibility rules, and dispute process.",
          "I will work with you in good faith within the platform's policies. Messaging me through the marketplace order thread is usually the fastest way to resolve an issue.",
        ],
      },
      {
        title: "Damaged, defective, or incorrect items",
        paragraphs: [
          "If your order arrives damaged, defective, or not what you ordered, contact me within 14 days of delivery with your order number and clear photos of the issue and packaging.",
          "For approved cases, I may offer a replacement, partial refund, or full refund depending on the situation and the platform used for purchase.",
        ],
      },
      {
        title: "Change-of-mind returns",
        paragraphs: [
          "My stickers are small handmade goods. Change-of-mind returns may not always be accepted unless the marketplace requires it or the item is unopened and resellable. Custom or limited drops may be final sale.",
        ],
      },
      {
        title: "Lost or delayed shipments",
        paragraphs: [
          "Once I hand a package to the carrier, delivery times are outside my direct control. If tracking shows an unusual delay or a lost package, contact me and I will help you pursue a claim according to the marketplace and carrier rules.",
        ],
      },
      {
        title: "How to contact me",
        paragraphs: [
          "Email vesper@atelierinkstar.com with your order number, marketplace name, and a short description of the issue. I aim to respond within 2–3 business days.",
        ],
      },
      {
        title: "Policy updates",
        paragraphs: [
          "I may update this Refund Policy as my shop offerings change. The \"Last updated\" date at the top reflects the current version.",
        ],
      },
    ],
  },
];

export function getPolicy(slug: PolicyDocument["slug"]) {
  return policies.find((policy) => policy.slug === slug);
}
