import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Infinite Storage - Revolutionary Decentralized Cloud Storage Company",
  description:
    "Learn about Infinite Storage, the pioneering company behind unlimited free decentralized cloud storage. Our mission is to democratize data storage through innovative blockchain technology and peer-to-peer networks.",
  keywords: [
    "about infinite storage",
    "decentralized storage company",
    "unlimited storage company",
    "cloud storage startup",
    "blockchain storage company",
    "peer to peer storage",
    "free storage company",
    "storage innovation",
    "decentralized technology",
    "infinite storage team",
    "storage revolution",
    "cloud storage mission",
  ],
  openGraph: {
    title: "About Infinite Storage - Revolutionary Decentralized Cloud Storage Company",
    description:
      "Discover the story behind Infinite Storage, the company revolutionizing cloud storage with unlimited free decentralized solutions.",
    url: "https://infinitestorage.com/about",
  },
  alternates: {
    canonical: "https://infinitestorage.com/about",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
