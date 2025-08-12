import type { Metadata } from "next"
import BlogPostClient from "./BlogPostClient"

export const metadata: Metadata = {
  title: "How Infinite Storage's Decentralized Network Actually Works: Complete Technical Architecture",
  description:
    "Deep dive into the revolutionary peer-to-peer storage system that provides unlimited free storage. Learn how file chunking, triple redundancy, automatic recovery, and economic incentives create a self-sustaining storage network.",
  keywords: [
    "decentralized storage architecture",
    "peer to peer storage system",
    "file chunking technology",
    "triple redundancy storage",
    "distributed storage network",
    "unlimited storage technical",
    "storage keeper system",
    "automatic recovery storage",
    "decentralized file system",
    "storage network architecture",
  ],
  authors: [{ name: "Technical Architecture Team" }],
  openGraph: {
    title: "How Infinite Storage's Decentralized Network Actually Works",
    description: "Complete technical breakdown of the revolutionary decentralized storage architecture",
    type: "article",
    publishedTime: "2024-01-25T00:00:00.000Z",
  },
}

export default function BlogPostPage() {
  return <BlogPostClient />
}
