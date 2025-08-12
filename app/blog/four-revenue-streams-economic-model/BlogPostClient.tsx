"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, Share2, Bookmark, ArrowLeft, Eye, DollarSign, TrendingUp } from "lucide-react"
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
            Platform Economics
          </span>
          <div className="flex items-center gap-2 text-sm text-infinite-silver-600">
            <TrendingUp className="w-4 h-4 text-red-500" />
            <span className="text-red-600 font-bold">TRENDING</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-infinite-blue-700 mb-6 leading-tight">
          The Four Revenue Streams: How Infinite Storage Creates Value Without Charging Users
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-infinite-silver-600 mb-6">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span className="font-medium">Economics & Platform Team</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>January 22, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>14 min read</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            <span>47.8K views</span>
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
              How can Infinite Storage provide unlimited free storage while remaining profitable? The answer lies in our
              innovative four-stream revenue model that creates value for everyone in the ecosystem - users, storage
              keepers, and the platform itself.
            </p>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">The Economic Challenge</h2>
            <p>
              Traditional cloud storage companies face a fundamental problem: they need massive data centers, expensive
              infrastructure, and ongoing operational costs. These costs are passed directly to users through monthly
              subscription fees and storage limits.
            </p>
            <p>
              Infinite Storage solves this by eliminating infrastructure costs entirely. We don't own a single server -
              instead, we coordinate a network of user-contributed storage space, creating value through multiple
              revenue streams that benefit the entire ecosystem.
            </p>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">Revenue Stream #1: API Services</h2>
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-700">Developer Integration Revenue</h3>
              </div>
              <p className="mb-4">
                Developers and companies pay monthly fees to integrate unlimited storage into their applications. This
                creates a steady revenue stream while providing developers with storage solutions at a fraction of
                traditional cloud costs.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-blue-700 mb-2">Pricing Tiers:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Starter: $29/month (1TB API usage)</li>
                    <li>• Professional: $99/month (10TB API usage)</li>
                    <li>• Enterprise: $299/month (Unlimited API usage)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 mb-2">Revenue Distribution:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Platform: 60% (operations, development)</li>
                    <li>• Storage Keepers: 35% (hosting API data)</li>
                    <li>• Network Maintenance: 5% (infrastructure)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">
              Revenue Stream #2: Guaranteed Storage
            </h2>
            <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-700">Premium Reliability Services</h3>
              </div>
              <p className="mb-4">
                While basic storage is free, users can pay for guaranteed storage with SLA commitments on critical
                files. This premium service ensures enterprise-grade reliability for important data.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-green-700 mb-2">Service Levels:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Basic: Free (99.9% uptime, best effort)</li>
                    <li>• Premium: $5/TB/month (99.99% uptime, SLA)</li>
                    <li>• Enterprise: $15/TB/month (99.999% uptime, priority)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 mb-2">What You Get:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Guaranteed uptime SLA</li>
                    <li>• Priority recovery on failures</li>
                    <li>• Dedicated storage keeper pools</li>
                    <li>• 24/7 monitoring and support</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">
              Revenue Stream #3: Content Marketplace
            </h2>
            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-purple-700">Digital Content Sales</h3>
              </div>
              <p className="mb-4">
                Users can sell their stored files (games, software, media, courses) through our integrated marketplace.
                Revenue is split between the content creator, platform, and storage keepers who host the content.
              </p>
              <div className="bg-white p-4 rounded-xl border border-purple-200 mb-4">
                <h4 className="font-bold text-purple-700 mb-3">Revenue Split Example ($10 Sale):</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Content Creator (50%)</span>
                    <span className="font-bold">$5.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Commission (30%)</span>
                    <span className="font-bold">$3.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Storage Keepers (20%)</span>
                    <span className="font-bold">$2.00</span>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-purple-700 mb-2">Popular Content Types:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Software and applications</li>
                    <li>• Digital art and media</li>
                    <li>• Educational courses</li>
                    <li>• Game assets and mods</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-700 mb-2">Creator Benefits:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• No upfront hosting costs</li>
                    <li>• Global distribution network</li>
                    <li>• Built-in payment processing</li>
                    <li>• Detailed analytics and insights</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">
              Revenue Stream #4: Direct Storage Deals
            </h2>
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-orange-700">Peer-to-Peer Storage Marketplace</h3>
              </div>
              <p className="mb-4">
                Users can pay other users directly for dedicated storage space, creating a peer-to-peer storage
                marketplace. The platform facilitates these transactions and takes a small commission.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-orange-700 mb-2">How It Works:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Storage keepers set their own prices</li>
                    <li>• Users browse and select providers</li>
                    <li>• Smart contracts handle payments</li>
                    <li>• Platform takes 10% transaction fee</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-orange-700 mb-2">Typical Pricing:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Basic storage: $2-5/TB/month</li>
                    <li>• High-speed storage: $8-15/TB/month</li>
                    <li>• Premium locations: $10-25/TB/month</li>
                    <li>• Enterprise SLA: $20-50/TB/month</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">The Network Effect</h2>
            <p>
              What makes this model revolutionary is how each revenue stream reinforces the others, creating a powerful
              network effect:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>More Users = More Storage Keepers:</strong> As user demand grows, more people become storage
                keepers to earn money
              </li>
              <li>
                <strong>More Storage Keepers = Better Service:</strong> More storage capacity means faster speeds and
                higher reliability
              </li>
              <li>
                <strong>Better Service = More Developers:</strong> Improved performance attracts more API customers
              </li>
              <li>
                <strong>More Revenue = Better Platform:</strong> Higher revenue enables better features and user
                experience
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">Real-World Impact</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white/60 p-6 rounded-2xl border border-white/80 text-center">
                <div className="text-3xl font-bold text-infinite-blue-700 mb-2">$2.3M+</div>
                <div className="text-sm text-infinite-silver-600">Total Earned by Storage Keepers</div>
              </div>
              <div className="bg-white/60 p-6 rounded-2xl border border-white/80 text-center">
                <div className="text-3xl font-bold text-infinite-blue-700 mb-2">15,000+</div>
                <div className="text-sm text-infinite-silver-600">Active Storage Keepers</div>
              </div>
              <div className="bg-white/60 p-6 rounded-2xl border border-white/80 text-center">
                <div className="text-3xl font-bold text-infinite-blue-700 mb-2">500+</div>
                <div className="text-sm text-infinite-silver-600">Developer API Customers</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">Why This Model Works</h2>
            <p>
              Traditional cloud storage creates a zero-sum game where the company's profit comes directly from user
              payments. Our model creates a positive-sum game where everyone benefits:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <h4 className="font-bold text-blue-700 mb-3">Users Win</h4>
                <ul className="text-sm space-y-1">
                  <li>• Unlimited free storage</li>
                  <li>• Earn money as storage keepers</li>
                  <li>• Sell content in marketplace</li>
                  <li>• Lower costs than traditional cloud</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                <h4 className="font-bold text-green-700 mb-3">Storage Keepers Win</h4>
                <ul className="text-sm space-y-1">
                  <li>• Monetize unused storage space</li>
                  <li>• Multiple income streams</li>
                  <li>• Passive income potential</li>
                  <li>• Help build the future of storage</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                <h4 className="font-bold text-purple-700 mb-3">Platform Wins</h4>
                <ul className="text-sm space-y-1">
                  <li>• Zero infrastructure costs</li>
                  <li>• Multiple revenue streams</li>
                  <li>• Scalable business model</li>
                  <li>• Network effects drive growth</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-infinite-blue-700 mt-8 mb-4">The Future of Storage Economics</h2>
            <p>
              This economic model represents a fundamental shift from scarcity-based to abundance-based storage
              economics. Instead of artificial limits and high prices, we create value through coordination, efficiency,
              and network effects.
            </p>
            <p className="text-lg font-medium text-infinite-blue-700 mt-6">
              The result is a sustainable, profitable platform that provides unlimited free storage while creating
              economic opportunities for millions of users worldwide.
            </p>
          </div>
        </GlassmorphicContainer>

        {/* Call to Action */}
        <GlassmorphicContainer className="p-8 text-center">
          <h3 className="text-2xl font-bold text-infinite-blue-700 mb-4">Start Earning with Infinite Storage</h3>
          <p className="text-infinite-silver-700 mb-6">
            Join thousands of storage keepers already earning money by sharing unused storage space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/storage-keepers"
              className="bg-infinite-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-infinite-blue-600 transition-colors"
            >
              Become a Storage Keeper
            </Link>
            <Link
              href="/marketplace"
              className="bg-white/40 backdrop-blur-sm border border-white/60 text-infinite-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-infinite-blue-100 transition-colors"
            >
              Explore Marketplace
            </Link>
          </div>
        </GlassmorphicContainer>
      </motion.article>
    </div>
  )
}
