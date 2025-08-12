import type { Metadata } from "next"
import BlogPostClient from "./BlogPostClient"

export const metadata: Metadata = {
  title: "Storage Keeper Economics: How Users Earn Money by Sharing Unused Space",
  description:
    "Detailed analysis of the storage keeper system - how users contribute unused storage space and earn money through content marketplace sales, API usage, and direct storage deals.",
  keywords: [
    "storage keeper earnings",
    "earn money storage space",
    "unused storage monetization",
    "storage keeper guide",
    "decentralized storage income",
    "storage sharing profits",
  ],
}

export default function BlogPostPage() {
  return <BlogPostClient />
}
