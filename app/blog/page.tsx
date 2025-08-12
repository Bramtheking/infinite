import type { Metadata } from "next"
import BlogPageClient from "./BlogPageClient"

export const metadata: Metadata = {
  title: "Infinite Storage Blog - Inside Story of Unlimited Free Storage Revolution",
  description:
    "Discover how we built the world's first unlimited free storage platform. Get exclusive insights into decentralized storage technology, success stories of users earning thousands, and the future of data ownership. Read industry-leading analysis and technical deep-dives.",
  keywords: [
    "infinite storage blog",
    "unlimited storage technology",
    "decentralized storage insights",
    "free cloud storage revolution",
    "storage keeper success stories",
    "blockchain storage technology",
    "data ownership rights",
    "cloud storage industry analysis",
    "unlimited storage economics",
    "decentralized network architecture",
    "storage monopoly breaking",
    "digital content marketplace",
    "peer to peer storage",
    "storage keeper earnings",
    "free unlimited cloud storage",
    "decentralized storage security",
    "infinite storage case studies",
    "cloud storage disruption",
    "storage technology innovation",
    "unlimited storage platform",
  ],
  authors: [{ name: "Infinite Storage Editorial Team" }],
  creator: "Infinite Storage",
  publisher: "Infinite Storage",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://infinitestorage.com/blog",
    siteName: "Infinite Storage Blog",
    title: "Infinite Storage Blog - Inside Story of Unlimited Free Storage Revolution",
    description:
      "Exclusive insights into how we built the world's first unlimited free storage platform. Technical deep-dives, success stories, and industry analysis from the storage revolution leaders.",
    images: [
      {
        url: "/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Infinite Storage Blog - Unlimited Storage Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinite Storage Blog - Inside Story of Unlimited Free Storage Revolution",
    description:
      "Exclusive insights into building unlimited free storage. Technical deep-dives, success stories, and industry analysis.",
    images: ["/blog-twitter-image.jpg"],
    creator: "@InfiniteStorage",
    site: "@InfiniteStorage",
  },
  alternates: {
    canonical: "https://infinitestorage.com/blog",
    types: {
      "application/rss+xml": [
        {
          url: "https://infinitestorage.com/blog/rss.xml",
          title: "Infinite Storage Blog RSS Feed",
        },
      ],
    },
  },
  category: "technology",
  classification: "Technology Blog, Cloud Storage, Decentralized Systems",
  other: {
    "article:publisher": "https://www.facebook.com/InfiniteStorage",
    "article:author": "https://www.linkedin.com/company/infinite-storage",
  },
}

export default function BlogPage() {
  return <BlogPageClient />
}
