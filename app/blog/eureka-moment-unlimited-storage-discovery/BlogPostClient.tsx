"use client"

import type React from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  TrendingUp,
  Lightbulb,
  Zap,
  DollarSign,
  Users,
  Target,
  Coffee,
  Laptop,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Helper component for Glassmorphism
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
    <div className="min-h-screen bg-gradient-to-br from-infinite-silver-50 to-infinite-silver-100">
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
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
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <GlassmorphicContainer className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold text-sm">FEATURED STORY</span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                TRENDING
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-infinite-blue-700 mb-6 leading-tight">
              The Eureka Moment: How We Discovered the Secret to Unlimited Free Storage
            </h1>

            <p className="text-xl text-infinite-silver-700 mb-8 leading-relaxed">
              The breakthrough came at 3 AM in a cramped garage. After months of failed attempts to solve the storage
              crisis, our founder had an epiphany that would change everything. This is the untold story of how Infinite
              Storage was born from frustration, determination, and one revolutionary insight.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-infinite-silver-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">Infinite Storage Founder & CEO</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>January 25, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>16 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <span>48.7K views</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-infinite-blue-500 hover:bg-infinite-blue-600 text-white">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
              <Button
                variant="outline"
                className="border-infinite-blue-500 text-infinite-blue-600 hover:bg-infinite-blue-50 bg-transparent"
              >
                <Bookmark className="w-4 h-4 mr-2" />
                Save for Later
              </Button>
            </div>
          </GlassmorphicContainer>
        </motion.header>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <GlassmorphicContainer className="p-8 md:p-12">
            <div className="text-infinite-silver-800 leading-relaxed space-y-8">
              {/* Introduction */}
              <div className="bg-infinite-blue-50 border-l-4 border-infinite-blue-500 p-6 rounded-r-2xl">
                <p className="text-lg font-semibold text-infinite-blue-700 mb-3">
                  <Coffee className="w-6 h-6 inline mr-2" />
                  3:17 AM, March 15th, 2023
                </p>
                <p className="text-infinite-blue-800">
                  "I was on my fourth cup of coffee, surrounded by whiteboards covered in failed equations, when it hit
                  me. What if we've been thinking about storage completely wrong? What if the solution wasn't about
                  building bigger servers, but about not needing servers at all?"
                </p>
              </div>

              <h2 className="text-3xl font-bold text-infinite-blue-700 mt-12 mb-6">The Problem That Kept Me Awake</h2>

              <p className="text-lg">
                It started with a simple frustration. I was a software engineer at a major tech company, watching
                millions of users hit storage limits every day. "Upgrade to premium," we'd tell them. "Pay $9.99 for
                100GB more." But I knew the dirty secret - storage was cheap. Incredibly cheap. We were charging users
                premium prices for something that cost us pennies.
              </p>

              <p className="text-lg">
                The math was infuriating. A 1TB hard drive cost $50. We were charging users $120 per year for the same
                amount of cloud storage. The markup was obscene, but worse - it was artificial scarcity. We were
                limiting people's digital lives for profit.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl my-8">
                <h4 className="font-bold text-red-800 mb-3">The Breaking Point</h4>
                <p className="text-red-800">
                  "My grandmother called me crying because she couldn't save more photos of her grandchildren. Google
                  wanted $2.99/month for 100GB. She was on a fixed income. That night, I decided to solve this problem
                  once and for all."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-infinite-blue-700 mt-12 mb-6">The Garage Experiments</h2>

              <p className="text-lg">
                I quit my job and moved into my parents' garage. For six months, I tried everything. Compression
                algorithms, deduplication, blockchain storage, distributed databases. Nothing worked at scale. The
                fundamental problem remained: someone had to pay for the servers.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-12">
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <Laptop className="w-8 h-8 text-gray-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-700 mb-3">Failed Attempt #1</h3>
                  <p className="text-gray-800">
                    <strong>Blockchain Storage:</strong> Too slow, too expensive. Gas fees made it unusable for regular
                    people.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <Laptop className="w-8 h-8 text-gray-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-700 mb-3">Failed Attempt #2</h3>
                  <p className="text-gray-800">
                    <strong>P2P Networks:</strong> No incentives. People would take storage but not give it back.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <Laptop className="w-8 h-8 text-gray-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-700 mb-3">Failed Attempt #3</h3>
                  <p className="text-gray-800">
                    <strong>Compression Focus:</strong> Could save 30-40% space, but still needed massive server farms.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <Laptop className="w-8 h-8 text-gray-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-700 mb-3">Failed Attempt #4</h3>
                  <p className="text-gray-800">
                    <strong>Freemium Model:</strong> Just another way to limit users and push them toward paid plans.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-infinite-blue-700 mt-12 mb-6">The 3 AM Breakthrough</h2>

              <p className="text-lg">
                I was debugging a peer-to-peer file sharing prototype when I noticed something interesting. My laptop
                had 500GB of free space. My neighbor's computer probably had 300GB unused. My friend across town had a
                1TB drive that was barely half full.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-2xl my-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-8 h-8 text-yellow-600" />
                  <h4 className="text-2xl font-bold text-yellow-800">The Eureka Moment</h4>
                </div>
                <p className="text-yellow-800 text-lg">
                  "What if unused storage space was like unused hotel rooms? Hotels don't build new buildings when
                  they're at 60% capacity - they optimize what they have. What if we could do the same with storage?"
                </p>
              </div>

              <p className="text-lg">
                The insight was simple but revolutionary: <strong>There's already enough storage in the world.</strong>{" "}
                Billions of devices with terabytes of unused space. We didn't need to build more infrastructure - we
                needed to connect what already existed.
              </p>

              <h2 className="text-3xl font-bold text-infinite-blue-700 mt-12 mb-6">The Economic Breakthrough</h2>

              <p className="text-lg">
                But connecting unused storage was only half the puzzle. The other half was economics. Why would people
                share their storage space? And how could we make it sustainable without charging users?
              </p>

              <p className="text-lg">
                The answer came from studying successful platforms like Uber and Airbnb. They didn't own cars or hotels
                - they connected people who had excess capacity with people who needed it. But storage was different. It
                wasn't a one-time transaction.
              </p>

              <div className="bg-green-50 p-8 rounded-2xl my-8">
                <h4 className="text-2xl font-bold text-green-700 mb-4">The Four-Stream Revenue Model</h4>
                <p className="text-green-800 text-lg mb-6">
                  Instead of charging users for storage, we'd create multiple revenue streams that benefited everyone:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/50 p-4 rounded-xl">
                    <h5 className="font-bold text-green-700 mb-2">1. API Services</h5>
                    <p className="text-green-800 text-sm">
                      Developers pay to integrate unlimited storage into their apps
                    </p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-xl">
                    <h5 className="font-bold text-green-700 mb-2">2. Content Marketplace</h5>
                    <p className="text-green-800 text-sm">Creators sell content, everyone gets a cut</p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-xl">
                    <h5 className="font-bold text-green-700 mb-2">3. Premium Guarantees</h5>
                    <p className="text-green-800 text-sm">Pay for extra reliability on critical files</p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-xl">
                    <h5 className="font-bold text-green-700 mb-2">4. Direct Deals</h5>
                    <p className="text-green-800 text-sm">Users can rent dedicated space from each other</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-infinite-blue-700 mt-12 mb-6">Building the Prototype</h2>

              <p className="text-lg">
                With the economic model figured out, I spent the next three months building the first prototype. The
                technical challenges were immense:
              </p>

              <ul className="list-disc list-inside space-y-3 text-lg ml-6">
                <li>
                  <strong>File Chunking:</strong> Breaking files into 1GB pieces that could be distributed across
                  multiple storage keepers
                </li>
                <li>
                  <strong>Redundancy:</strong> Ensuring every file was stored in at least 3 different locations
                </li>
                <li>
                  <strong>Encryption:</strong> Client-side AES-256 encryption so users controlled their own keys
                </li>
                <li>
                  <strong>Automatic Recovery:</strong> When storage keepers went offline, files automatically moved to
                  new locations
                </li>
                <li>
                  <strong>Incentive Balance:</strong> Making sure people contributed as much storage as they used
                </li>
              </ul>

              <div className="bg-infinite-blue-50 p-8 rounded-2xl my-8">
                <h4 className="text-2xl font-bold text-infinite-blue-700 mb-4">The First Test</h4>
                <p className="text-infinite-blue-800 text-lg">
                  I convinced 10 friends to install the prototype. Within a week, we had created a network with 5TB of
                  shared storage. Everyone could store unlimited files for free, and the system was completely
                  self-sustaining. It worked.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-infinite-blue-700 mt-12 mb-6">From Garage to Global</h2>

              <p className="text-lg">
                Word spread quickly. Tech blogs picked up the story. "Unlimited Free Storage - Too Good to Be True?" But
                it wasn't too good to be true. It was just a better way of thinking about a fundamental problem.
              </p>

              {/* Success Metrics */}
              <div className="grid md:grid-cols-4 gap-4 my-12">
                <div className="text-center bg-infinite-blue-50 p-6 rounded-2xl">
                  <Users className="w-8 h-8 text-infinite-blue-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-infinite-blue-700">1M+</div>
                  <div className="text-infinite-blue-600">Active Users</div>
                </div>
                <div className="text-center bg-green-50 p-6 rounded-2xl">
                  <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-green-700">50K+</div>
                  <div className="text-green-600">Storage Keepers</div>
                </div>
                <div className="text-center bg-purple-50 p-6 rounded-2xl">
                  <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-purple-700">10PB+</div>
                  <div className="text-purple-600">Data Stored</div>
                </div>
                <div className="text-center bg-orange-50 p-6 rounded-2xl">
                  <DollarSign className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-orange-700">$2M+</div>
                  <div className="text-orange-600">Earned by Keepers</div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-infinite-blue-700 mt-12 mb-6">The Bigger Impact</h2>

              <p className="text-lg">
                What started as a solution to help my grandmother save more photos has become something much bigger.
                We've proven that artificial scarcity isn't necessary. That technology can be used to help people
                instead of extract money from them.
              </p>

              <div className="bg-purple-50 p-8 rounded-2xl my-8">
                <h4 className="text-2xl font-bold text-purple-700 mb-4">Beyond Storage</h4>
                <p className="text-purple-800 text-lg">
                  The model we created for storage is now being applied to other industries. Unused computing power,
                  bandwidth, even renewable energy. When you align incentives correctly, abundance becomes possible.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-infinite-blue-700 mt-12 mb-6">What's Next</h2>

              <p className="text-lg">
                Every day, I get messages from users who tell me how Infinite Storage has changed their lives. Students
                who can now backup all their research. Artists who can store their entire portfolios. Families who never
                have to delete precious memories.
              </p>

              <p className="text-lg">
                But we're just getting started. The vision is bigger than storage. It's about creating a digital economy
                where everyone benefits, where technology serves people instead of exploiting them.
              </p>

              <div className="bg-gradient-to-r from-infinite-blue-500 to-infinite-blue-600 text-white p-8 rounded-2xl my-12 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Heart className="w-8 h-8" />
                  <h4 className="text-2xl font-bold">Join the Revolution</h4>
                </div>
                <p className="text-lg mb-6">
                  That 3 AM breakthrough in a garage has become a movement. Every new user proves that unlimited free
                  storage isn't just possible - it's inevitable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-infinite-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
                    Get Unlimited Storage Free
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 bg-transparent"
                  >
                    Become a Storage Keeper
                  </Button>
                </div>
              </div>

              <hr className="border-infinite-silver-300 my-12" />

              <div className="text-center text-infinite-silver-600">
                <p className="text-sm">
                  <strong>About the Author:</strong> Our founder started Infinite Storage after experiencing firsthand
                  the frustration of artificial storage limits. What began as a personal mission to help his grandmother
                  save more photos has become a global movement toward unlimited free storage for everyone.
                </p>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.article>

        {/* Related Articles */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-infinite-blue-700 mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassmorphicContainer className="p-6">
              <h4 className="text-xl font-bold text-infinite-blue-700 mb-3">
                How We Built the World's First Truly Unlimited Free Storage Platform
              </h4>
              <p className="text-infinite-silver-700 mb-4">
                The complete technical story behind Infinite Storage - from concept to reality.
              </p>
              <Link
                href="/blog/how-we-built-unlimited-free-storage"
                className="text-infinite-blue-600 font-semibold hover:text-infinite-blue-700"
              >
                Read More →
              </Link>
            </GlassmorphicContainer>
            <GlassmorphicContainer className="p-6">
              <h4 className="text-xl font-bold text-infinite-blue-700 mb-3">
                Why Storage Keepers Are Making $500-2000+ Monthly
              </h4>
              <p className="text-infinite-silver-700 mb-4">
                Real case studies and earnings reports from our top storage keepers.
              </p>
              <Link
                href="/blog/storage-keepers-earning-guide"
                className="text-infinite-blue-600 font-semibold hover:text-infinite-blue-700"
              >
                Read More →
              </Link>
            </GlassmorphicContainer>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
