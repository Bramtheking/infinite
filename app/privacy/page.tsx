import type { Metadata } from "next"
import PrivacyPageClient from "./PrivacyPageClient"

export const metadata: Metadata = {
  title: "Privacy Policy | Infinite Storage - Your Data, Your Control",
  description:
    "Learn how Infinite Storage protects your privacy with zero-knowledge encryption, transparent data practices, and user-first policies. GDPR and CCPA compliant.",
  keywords: "privacy policy, data protection, zero-knowledge encryption, GDPR, CCPA, user rights, data security",
  openGraph: {
    title: "Privacy Policy | Infinite Storage",
    description: "Transparent privacy practices with zero-knowledge encryption and user-first data protection.",
    type: "website",
  },
}

export default function PrivacyPage() {
  return <PrivacyPageClient />
}
