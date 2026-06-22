import type { Metadata } from "next";
import { brand } from "@atelier-inkstar/config/brand";
import { getPolicy } from "@atelier-inkstar/config/policies";
import { PolicyDocumentView } from "@/components/policy-document";
import { notFound } from "next/navigation";

const policy = getPolicy("privacy");

export const metadata: Metadata = {
  title: `Privacy Policy — ${brand.name}`,
  description: `How ${brand.name} collects, uses, and protects your information.`,
};

export default function PrivacyPolicyPage() {
  if (!policy) notFound();
  return <PolicyDocumentView policy={policy} />;
}
