import type { Metadata } from "next"
import BlogPostClient from "./BlogPostClient"

export const metadata: Metadata = {
  title: "The Four Revenue Streams: How Infinite Storage Creates Value Without Charging Users",
  description:
    "Explore the innovative economic model that makes unlimited free storage possible. From API services to content marketplace, discover how multiple revenue streams benefit users, storage keepers, and the platform simultaneously.",
  keywords: [
    "infinite storage revenue model",
    "decentralized storage economics",
    "storage keeper earnings",
    "content marketplace revenue",
    "API services storage",
    "guaranteed storage pricing",
    "direct storage deals",
    "storage platform economics",
  ],
}

export default function BlogPostPage() {
  return <BlogPostClient />
}
