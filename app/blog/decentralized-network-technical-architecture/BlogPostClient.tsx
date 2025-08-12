"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, Share2, Bookmark, ArrowLeft, Eye, TrendingUp } from "lucide-react"
import Link from "next/link"

function GlassmorphicContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl shadow-lg backdrop-blur-md bg-white/25 border border-white/50
      before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/10 before:to-transparent before:z-[-1]
      after:absolute after:inset-0 before:rounded-3xl after:bg-gradient-to-tl after:from-white/10 after:to-transparent after:z-[-1]
      ${className}
      `}
    >
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none
        shadow-[inset_0_0_15px_rgba(255,255,255,0.15),inset_0_0_30px_rgba(0,0,0,0.1)]
        border-[1px] border-white/60
      "
      ></div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default function BlogPostClient() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      {/* Back to Blog */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-infinite-blue-600 hover:text-infinite-blue-700 font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </motion.div>

      {/* Article Header */}
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-bold text-sm">FEATURED</span>
          <span className="bg-infinite-blue-100 text-infinite-blue-700 px-3 py-1 rounded-full font-semibold text-sm">
            Technical Deep Dive
          </span>
          <div className="flex items-center gap-2 text-sm text-infinite-silver-600">
            <TrendingUp className="w-4 h-4 text-red-500" />
            <span className="text-red-600 font-bold">TRENDING</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-infinite-blue-700 mb-6 leading-tight">
          How Infinite Storage's Decentralized Network Actually Works: Complete Technical Architecture
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-infinite-silver-600 mb-6">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span className="font-medium">Technical Architecture Team</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>January 25, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>18 min read</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            <span>52.3K views</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="inline-flex items-center gap-2 bg-infinite-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-infinite-blue-600 transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm border border-white/60 text-infinite-blue-700 px-4 py-2 rounded-full font-semibold hover:bg-infinite-blue-100 transition-colors">
            <Bookmark className="w-4 h-4" />
            Bookmark
          </button>
        </div>
      </motion.header>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="prose prose-lg max-w-none"
      >
        <GlassmorphicContainer className="p-8 mb-8">
          <div className="text-infinite-silver-700 space-y-6">
            <p className="text-xl font-medium text-infinite-blue-700 mb-6">
              Ever wondered how Infinite Storage provides truly unlimited free storage without massive data centers? The
              answer lies in our revolutionary decentralized network architecture that turns every user into both a
              storage consumer and provider.
            </p>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">The Core Architecture</h2>
            <p>
              Infinite Storage operates on a peer-to-peer network where users contribute unused storage space from their
              devices to create a massive, distributed storage cloud. Unlike traditional cloud storage that relies on
              expensive data centers, our system leverages the collective unused storage capacity of millions of devices
              worldwide.
            </p>

            <h3 className="text-xl font-bold text-infinite-blue-700 mt-6 mb-3">How File Storage Actually Works</h3>
            <p>When you upload a file to Infinite Storage, here's exactly what happens:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Client-Side Encryption:</strong> Your file is encrypted using AES-256 encryption on your device
                before it ever leaves your computer
              </li>
              <li>
                <strong>File Chunking:</strong> The encrypted file is split into 1GB chunks for optimal distribution and
                retrieval
              </li>
              <li>
                <strong>Triple Redundancy:</strong> Each chunk is replicated 3 times and distributed to different
                storage keepers across the network
              </li>
              <li>
                <strong>Metadata Storage:</strong> A secure index tracks where each chunk is stored, encrypted with your
                private key
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">The Storage Keeper System</h2>
            <p>
              Storage Keepers are users who contribute their unused storage space to the network. They earn money
              through multiple revenue streams while helping maintain the decentralized infrastructure.
            </p>

            <h3 className="text-xl font-bold text-infinite-blue-700 mt-6 mb-3">How Storage Keepers Earn Money</h3>
            <div className="bg-infinite-blue-50 p-6 rounded-2xl border border-infinite-blue-200">
              <h4 className="font-bold text-infinite-blue-700 mb-3">Revenue Distribution Example:</h4>
              <p className="mb-2">
                <strong>Content Marketplace Sale ($5.00):</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Content Creator: $2.50 (50%)</li>
                <li>Platform Commission: $1.50 (30%)</li>
                <li>Storage Keepers: $1.00 (20% - split among hosting keepers)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">Triple Redundancy System</h2>
            <p>
              To ensure 99.99% uptime, every file chunk is stored on three different storage keepers. This means even if
              two storage keepers go offline simultaneously, your data remains accessible.
            </p>

            <h3 className="text-xl font-bold text-infinite-blue-700 mt-6 mb-3">Automatic Recovery Process</h3>
            <p>When a storage keeper goes offline, our network automatically:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Detects the offline keeper within 30 seconds using heartbeat monitoring</li>
              <li>Identifies all chunks stored on that keeper</li>
              <li>Retrieves chunks from the remaining two redundant copies</li>
              <li>Creates new copies on available storage keepers</li>
              <li>Updates the metadata index with new locations</li>
            </ol>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">Four Revenue Streams</h2>
            <p>
              Our economic model creates value through four distinct revenue streams, ensuring the platform remains
              profitable while providing free storage to users:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white/40 p-6 rounded-2xl border border-white/60">
                <h4 className="font-bold text-infinite-blue-700 mb-2">1. API Services</h4>
                <p className="text-sm">
                  Developers pay monthly fees to integrate unlimited storage into their applications, with revenue
                  shared across the network.
                </p>
              </div>
              <div className="bg-white/40 p-6 rounded-2xl border border-white/60">
                <h4 className="font-bold text-infinite-blue-700 mb-2">2. Guaranteed Storage</h4>
                <p className="text-sm">
                  Users pay premium fees for guaranteed storage with SLA commitments on critical files.
                </p>
              </div>
              <div className="bg-white/40 p-6 rounded-2xl border border-white/60">
                <h4 className="font-bold text-infinite-blue-700 mb-2">3. Content Marketplace</h4>
                <p className="text-sm">
                  Users sell digital content (games, software, media) with revenue split between creator, platform, and
                  storage keepers.
                </p>
              </div>
              <div className="bg-white/40 p-6 rounded-2xl border border-white/60">
                <h4 className="font-bold text-infinite-blue-700 mb-2">4. Direct Storage Deals</h4>
                <p className="text-sm">
                  Users can pay other users directly for dedicated storage space, with the platform taking a small
                  transaction fee.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">Security & Encryption</h2>
            <p>
              Security is built into every layer of our architecture. All files are encrypted client-side using AES-256
              encryption before leaving your device. Even storage keepers cannot access the content they're storing.
            </p>

            <h3 className="text-xl font-bold text-infinite-blue-700 mt-6 mb-3">Hybrid Encryption System</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>AES-256:</strong> Used for encrypting file content with symmetric keys for fast
                encryption/decryption
              </li>
              <li>
                <strong>RSA:</strong> Used for secure key exchange and protecting the AES keys
              </li>
              <li>
                <strong>Client-Side Control:</strong> You control your encryption keys - we never see your unencrypted
                data
              </li>
              <li>
                <strong>Optional Key Escrow:</strong> Premium users can opt for secure key backup service
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">Network Balance & Ratio System</h2>
            <p>
              To maintain network sustainability, we use a ratio-based system where users must contribute storage space
              proportional to what they use. This ensures the network remains balanced and prevents abuse.
            </p>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-200 mt-6">
              <h4 className="font-bold text-green-700 mb-3">Example Ratio Calculation:</h4>
              <p className="text-green-700">
                If you store 100GB of files, you need to contribute at least 100GB of storage space to other users. The
                more you contribute, the more you can store and the more you can earn as a storage keeper.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">Performance & Scalability</h2>
            <p>Our decentralized architecture provides several performance advantages:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Geographic Distribution:</strong> Files are stored closer to users, reducing latency
              </li>
              <li>
                <strong>Parallel Downloads:</strong> Chunks can be downloaded simultaneously from multiple sources
              </li>
              <li>
                <strong>Load Balancing:</strong> Popular files are automatically replicated more widely
              </li>
              <li>
                <strong>Infinite Scalability:</strong> Network capacity grows with user adoption
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">The Future of Decentralized Storage</h2>
            <p>
              This architecture represents a fundamental shift from centralized to decentralized storage. By leveraging
              unused storage capacity worldwide and creating economic incentives for participation, we've built a system
              that becomes more powerful and cost-effective as it grows.
            </p>

            <p className="text-lg font-medium text-infinite-blue-700 mt-6">
              The result? Truly unlimited free storage that's more secure, more private, and more sustainable than
              traditional cloud storage solutions.
            </p>
          </div>
        </GlassmorphicContainer>

        {/* Call to Action */}
        <GlassmorphicContainer className="p-8 text-center">
          <h3 className="text-2xl font-bold text-infinite-blue-700 mb-4">Ready to Experience Unlimited Storage?</h3>
          <p className="text-infinite-silver-700 mb-6">
            Join millions of users already benefiting from decentralized storage technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/download"
              className="bg-infinite-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-infinite-blue-600 transition-colors"
            >
              Download Infinite Storage
            </Link>
            <Link
              href="/storage-keepers"
              className="bg-white/40 backdrop-blur-sm border border-white/60 text-infinite-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-infinite-blue-100 transition-colors"
            >
              Become a Storage Keeper
            </Link>
          </div>
        </GlassmorphicContainer>
      </motion.article>

      {/* Related Articles */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <h3 className="text-2xl font-bold text-infinite-blue-700 mb-8">Related Technical Articles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <GlassmorphicContainer className="p-6">
            <h4 className="text-xl font-bold text-infinite-blue-700 mb-3">
              Client-Side Encryption: How Your Data Stays Private
            </h4>
            <p className="text-infinite-silver-700 mb-4">
              Deep dive into our AES-256 and RSA encryption implementation that ensures only you can access your data.
            </p>
            <Link
              href="/blog/client-side-encryption-privacy"
              className="text-infinite-blue-600 hover:text-infinite-blue-700 font-semibold"
            >
              Read More →
            </Link>
          </GlassmorphicContainer>
          <GlassmorphicContainer className="p-6">
            <h4 className="text-xl font-bold text-infinite-blue-700 mb-3">
              Storage Keeper Economics: Earning Money from Unused Space
            </h4>
            <p className="text-infinite-silver-700 mb-4">
              Learn how storage keepers earn $500-2000+ monthly by contributing unused storage space to the network.
            </p>
            <Link
              href="/blog/storage-keeper-economics-guide"
              className="text-infinite-blue-600 hover:text-infinite-blue-700 font-semibold"
            >
              Read More →
            </Link>
          </GlassmorphicContainer>
        </div>
      </motion.section>
    </div>
  )
}
