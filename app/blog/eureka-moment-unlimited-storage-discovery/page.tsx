import type { Metadata } from "next"
import BlogPostClient from "./BlogPostClient"

export const metadata: Metadata = {
  title: "The Eureka Moment: How We Discovered the Secret to Unlimited Free Storage",
  description:
    "The breakthrough came at 3 AM in a cramped garage. After months of failed attempts, our founder had an epiphany that changed everything. The untold story of how Infinite Storage was born.",
  keywords: [
    "infinite storage origin story",
    "unlimited storage breakthrough",
    "decentralized storage innovation",
    "storage platform founding story",
    "free storage discovery",
    "peer to peer storage revolution",
    "storage startup journey",
    "cloud storage disruption",
    "unlimited storage secret",
    "storage platform creation",
    "decentralized network founding",
    "storage keeper economics",
    "content marketplace innovation",
    "distributed storage breakthrough",
    "storage revolution story",
  ],
  authors: [{ name: "Infinite Storage Founder & CEO" }],
  openGraph: {
    title: "The Eureka Moment: How We Discovered the Secret to Unlimited Free Storage",
    description:
      "The breakthrough came at 3 AM in a cramped garage. The untold story of how Infinite Storage was born from one revolutionary insight.",
    url: "https://infinitestorage.com/blog/eureka-moment-unlimited-storage-discovery",
    type: "article",
    publishedTime: "2024-01-25T00:00:00.000Z",
    authors: ["Infinite Storage Founder & CEO"],
    images: [
      {
        url: "/blog/eureka-moment-og.jpg",
        width: 1200,
        height: 630,
        alt: "The Eureka Moment - Infinite Storage Origin Story",
      },
    ],
  },
  alternates: {
    canonical: "https://infinitestorage.com/blog/eureka-moment-unlimited-storage-discovery",
  },
}

export default function BlogPostPage() {
  return <BlogPostClient />
}
