import type { Metadata } from "next"
import TermsPageClient from "./TermsPageClient"

export const metadata: Metadata = {
  title: "Terms of Service | Infinite Storage - User Agreement",
  description:
    "Read Infinite Storage's Terms of Service covering user rights, responsibilities, payment terms, and service agreements for our decentralized storage platform.",
  keywords: "terms of service, user agreement, legal terms, service agreement, user rights, responsibilities",
  openGraph: {
    title: "Terms of Service | Infinite Storage",
    description: "Comprehensive terms governing the use of Infinite Storage's decentralized storage platform.",
    type: "website",
  },
}

export default function TermsPage() {
  return <TermsPageClient />
}
