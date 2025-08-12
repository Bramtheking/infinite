import type { Metadata } from "next"
import BlogPostClient from "./BlogPostClient"

export const metadata: Metadata = {
  title: "From AI Prompt to Reality: The Complete Technical Blueprint Behind Infinite Storage",
  description:
    "The original AI project brief that sparked Infinite Storage. See the exact technical specifications, revenue models, and architectural decisions that transformed a theoretical concept into the world's most revolutionary storage platform.",
  keywords: [
    "infinite storage origin story",
    "AI prompt storage platform",
    "decentralized storage blueprint",
    "unlimited storage technical specs",
    "storage platform architecture",
    "peer to peer storage design",
    "content marketplace revenue model",
    "distributed storage network",
    "storage keeper economics",
    "blockchain storage innovation",
    "cloud storage disruption",
    "decentralized storage startup",
    "unlimited free storage concept",
    "storage platform business model",
    "peer to peer file sharing",
  ],
  authors: [{ name: "Infinite Storage Technical Architecture Team" }],
  openGraph: {
    title: "From AI Prompt to Reality: The Complete Technical Blueprint Behind Infinite Storage",
    description:
      "The original AI project brief that sparked Infinite Storage. See the exact technical specifications and architectural decisions.",
    url: "https://infinitestorage.com/blog/ai-prompt-to-reality-blueprint",
    type: "article",
    publishedTime: "2024-01-25T00:00:00.000Z",
    authors: ["Technical Architecture Team"],
    images: [
      {
        url: "/blog/ai-prompt-blueprint-og.jpg",
        width: 1200,
        height: 630,
        alt: "From AI Prompt to Reality - Infinite Storage Blueprint",
      },
    ],
  },
  alternates: {
    canonical: "https://infinitestorage.com/blog/ai-prompt-to-reality-blueprint",
  },
}

export default function BlogPostPage() {
  return <BlogPostClient />
}
