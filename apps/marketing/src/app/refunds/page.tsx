import type { Metadata } from "next";
import { brand } from "@atelier-inkstar/config/brand";
import { getPolicy } from "@atelier-inkstar/config/policies";
import { PolicyDocumentView } from "@/components/policy-document";
import { notFound } from "next/navigation";

const policy = getPolicy("refunds");

export const metadata: Metadata = {
  title: `Refund Policy — ${brand.name}`,
  description: `Returns and refunds for ${brand.name} orders on Etsy, TikTok Shop, and eBay.`,
};

export default function RefundsPage() {
  if (!policy) notFound();
  return <PolicyDocumentView policy={policy} />;
}
