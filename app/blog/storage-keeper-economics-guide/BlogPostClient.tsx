"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, Share2, Bookmark, ArrowLeft, Eye } from "lucide-react"
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
            Storage Keeper Guide
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-infinite-blue-700 mb-6 leading-tight">
          Storage Keeper Economics: How Users Earn Money by Sharing Unused Space
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-infinite-silver-600 mb-6">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span className="font-medium">Storage Keeper Success Team</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>January 15, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>11 min read</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            <span>35.7K views</span>
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
              Most people have hundreds of gigabytes of unused storage space on their devices. Storage Keepers turn this
              unused capacity into a steady income stream while helping power the world's most advanced decentralized
              storage network.
            </p>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">What is a Storage Keeper?</h2>
            <p>
              A Storage Keeper is a user who contributes unused storage space from their devices (computers, external
              drives, servers) to the Infinite Storage network. In return, they earn money through multiple revenue
              streams while helping provide unlimited free storage to millions of users worldwide.
            </p>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
              <h3 className="text-xl font-bold text-green-700 mb-3">Average Storage Keeper Earnings</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">$127/month</div>
                  <div className="text-sm text-green-600">Casual (500GB shared)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">$485/month</div>
                  <div className="text-sm text-green-600">Active (2TB shared)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">$1,247/month</div>
                  <div className="text-sm text-green-600">Power User (5TB+ shared)</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">How Storage Keepers Earn Money</h2>
            <p>Storage Keepers earn through four distinct revenue streams:</p>

            <h3 className="text-xl font-bold text-infinite-blue-700 mt-6 mb-3">1. Content Marketplace Revenue</h3>
            <p>
              When users sell digital content (games, software, media) through our marketplace, Storage Keepers who host
              that content earn a percentage of each sale.
            </p>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-700 mb-2">Example: $20 Game Sale</h4>
              <ul className="text-sm space-y-1">
                <li>• Creator earns: $10.00 (50%)</li>
                <li>• Platform commission: $6.00 (30%)</li>
                <li>• Storage Keepers earn: $4.00 (20% - split among 3 hosting keepers = $1.33 each)</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-infinite-blue-700 mt-6 mb-3">2. API Usage Revenue</h3>
            <p>
              Developers pay monthly fees to integrate Infinite Storage into their applications. Storage Keepers earn a
              share of this revenue based on how much API data they host.
            </p>
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-700 mb-2">Monthly API Revenue Share</h4>
              <ul className="text-sm space-y-1">
                <li>• 35% of all API revenue goes to Storage Keepers</li>
                <li>• Distributed based on storage contribution</li>
                <li>• Average: $0.15-0.45 per GB hosted per month</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-infinite-blue-700 mt-6 mb-3">3. Direct Storage Deals</h3>
            <p>
              Storage Keepers can set their own prices and sell storage space directly to users who need dedicated,
              reliable storage.
            </p>
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
              <h4 className="font-bold text-orange-700 mb-2">Typical Direct Deal Pricing</h4>
              <ul className="text-sm space-y-1">
                <li>• Basic storage: $3-6 per TB per month</li>
                <li>• High-speed storage: $8-15 per TB per month</li>
                <li>• Enterprise SLA: $20-50 per TB per month</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-infinite-blue-700 mt-6 mb-3">4. Network Incentive Rewards</h3>
            <p>
              The platform rewards reliable Storage Keepers with bonus payments for maintaining high uptime,
              participating in network recovery, and contributing to network stability.
            </p>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">Real Storage Keeper Case Studies</h2>

            <div className="space-y-6">
              <div className="bg-white/60 p-6 rounded-2xl border border-white/80">
                <h4 className="font-bold text-infinite-blue-700 mb-2">Sarah - College Student</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-2">
                      <strong>Setup:</strong> 1TB external drive, dorm room internet
                    </p>
                    <p className="text-sm mb-2">
                      <strong>Storage Shared:</strong> 800GB
                    </p>
                    <p className="text-sm">
                      <strong>Monthly Earnings:</strong> $156
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">
                      "I use the money to pay for textbooks and coffee. It's completely passive income - I just leave my
                      computer on and earn money while I study."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 p-6 rounded-2xl border border-white/80">
                <h4 className="font-bold text-infinite-blue-700 mb-2">Mike - IT Professional</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-2">
                      <strong>Setup:</strong> Home server with 8TB RAID array
                    </p>
                    <p className="text-sm mb-2">
                      <strong>Storage Shared:</strong> 6TB
                    </p>
                    <p className="text-sm">
                      <strong>Monthly Earnings:</strong> $1,847
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">
                      "I was already running a home server for personal use. Now it pays for itself and then some. The
                      earnings cover my entire home internet bill plus extra."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 p-6 rounded-2xl border border-white/80">
                <h4 className="font-bold text-infinite-blue-700 mb-2">Lisa - Small Business Owner</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-2">
                      <strong>Setup:</strong> Office computers with unused space
                    </p>
                    <p className="text-sm mb-2">
                      <strong>Storage Shared:</strong> 3.2TB across 5 machines
                    </p>
                    <p className="text-sm">
                      <strong>Monthly Earnings:</strong> $923
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">
                      "My office computers were sitting idle after hours anyway. Now they're generating revenue 24/7.
                      It's like having a second income stream for my business."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">Getting Started as a Storage Keeper</h2>

            <h3 className="text-xl font-bold text-infinite-blue-700 mt-6 mb-3">Minimum Requirements</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>At least 100GB of unused storage space</li>
              <li>Reliable internet connection (minimum 10 Mbps upload)</li>
              <li>Device that can run 24/7 (computer, NAS, server)</li>
              <li>Stable power supply (UPS recommended)</li>
            </ul>

            <h3 className="text-xl font-bold text-infinite-blue-700 mt-6 mb-3">Setup Process</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Download and install the Infinite Storage client</li>
              <li>Create your Storage Keeper account</li>
              <li>Configure how much storage space to share</li>
              <li>Set your availability preferences (24/7 recommended)</li>
              <li>Complete the network verification process</li>
              <li>Start earning within 24 hours</li>
            </ol>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">Maximizing Your Earnings</h2>

            <h3 className="text-xl font-bold text-infinite-blue-700 mt-6 mb-3">Best Practices for Higher Income</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-infinite-blue-700 mb-2">Technical Optimization</h4>
                <ul className="text-sm space-y-1">
                  <li>• Maintain 99%+ uptime</li>
                  <li>• Use fast SSD storage when possible</li>
                  <li>• Ensure stable internet connection</li>
                  <li>• Keep client software updated</li>
                  <li>• Monitor performance metrics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-infinite-blue-700 mb-2">Strategic Approaches</h4>
                <ul className="text-sm space-y-1">
                  <li>• Share more storage space</li>
                  <li>• Participate in direct storage deals</li>
                  <li>• Host popular marketplace content</li>
                  <li>• Maintain high reliability ratings</li>
                  <li>• Join the Storage Keeper community</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">Payment and Rewards</h2>
            <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
              <h3 className="text-xl font-bold text-green-700 mb-4">Payment Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-green-700 mb-2">Payment Schedule</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Monthly payments on the 1st</li>
                    <li>• Minimum payout: $25</li>
                    <li>• Multiple payment methods available</li>
                    <li>• Detailed earnings reports provided</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 mb-2">Payment Methods</h4>
                  <ul className="text-sm space-y-1">
                    <li>• PayPal</li>
                    <li>• Bank transfer</li>
                    <li>• Cryptocurrency</li>
                    <li>• Platform credits</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">The Future of Storage Keeping</h2>
            <p>
              As the network grows, Storage Keeper earnings are expected to increase significantly. With more developers
              using our API, more content being sold in the marketplace, and more users joining the network, the revenue
              pool continues to expand.
            </p>
            <p className="text-lg font-medium text-infinite-blue-700 mt-6">
              Storage Keepers aren't just earning money - they're building the future of decentralized storage and
              helping democratize access to unlimited storage worldwide.
            </p>
          </div>
        </GlassmorphicContainer>

        {/* Call to Action */}
        <GlassmorphicContainer className="p-8 text-center">
          <h3 className="text-2xl font-bold text-infinite-blue-700 mb-4">Ready to Start Earning?</h3>
          <p className="text-infinite-silver-700 mb-6">
            Join thousands of Storage Keepers already earning money by sharing unused storage space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/storage-keepers"
              className="bg-infinite-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-infinite-blue-600 transition-colors"
            >
              Become a Storage Keeper
            </Link>
            <Link
              href="/download"
              className="bg-white/40 backdrop-blur-sm border border-white/60 text-infinite-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-infinite-blue-100 transition-colors"
            >
              Download Client
            </Link>
          </div>
        </GlassmorphicContainer>
      </motion.article>
    </div>
  )
}
