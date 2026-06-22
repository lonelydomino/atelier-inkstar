import type { Metadata } from "next";
import { brand } from "@atelier-inkstar/config/brand";
import { getPolicy } from "@atelier-inkstar/config/policies";
import { PolicyDocumentView } from "@/components/policy-document";
import { notFound } from "next/navigation";

const policy = getPolicy("terms");

export const metadata: Metadata = {
  title: `Terms of Service — ${brand.name}`,
  description: `Terms for using ${brand.name} and our website.`,
};

export default function TermsPage() {
  if (!policy) notFound();
  return <PolicyDocumentView policy={policy} />;
}
