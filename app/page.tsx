"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Infinity,
  HardDrive,
  Users,
  DollarSign,
  ShoppingCart,
  Upload,
  Search,
  Copy,
  Settings,
  Download,
  ComputerIcon as Windows,
  SmartphoneIcon as Android,
  Shield,
  Zap,
  Globe,
  Star,
  CheckCircle,
  TrendingUp,
  FileText,
  Cloud,
  Database,
  Smartphone,
} from "lucide-react"
import Link from "next/link"
import type React from "react"
import { motion } from "framer-motion"

// Helper component for Glassmorphism and subtle 3D Bezel effect
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

// Reusable Card for sections
interface SectionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

function SectionCard({ icon, title, description, delay = 0 }: SectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      <GlassmorphicContainer className="p-6 flex flex-col items-center text-center h-full">
        <CardHeader className="flex flex-col items-center text-center p-0">
          {icon}
          <CardTitle className="mt-4 text-2xl font-bold text-infinite-blue-700">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-infinite-silver-700 p-0 mt-2">
          <p>{description}</p>
        </CardContent>
      </GlassmorphicContainer>
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Hero Section - Maximum SEO Optimized */}
      <section
        className="w-full py-20 md:py-32 text-center"
        aria-labelledby="hero-heading"
        itemScope
        itemType="https://schema.org/WebPageElement"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <GlassmorphicContainer className="max-w-6xl mx-auto p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center mb-6"
            >
              <Infinity className="w-28 h-28 text-infinite-blue-500 drop-shadow-lg" aria-hidden="true" />
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-6xl md:text-8xl font-extrabold text-infinite-blue-700 tracking-tight leading-tight drop-shadow-lg"
              itemProp="headline"
            >
              Infinite Storage
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-infinite-blue-600 mt-4 mb-6"
            >
              World's First Unlimited Free Cloud Storage Platform
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 text-xl md:text-2xl text-infinite-silver-700 max-w-5xl mx-auto drop-shadow-md"
              itemProp="description"
            >
              Experience revolutionary <strong>unlimited free cloud storage forever</strong> with our groundbreaking
              <strong> decentralized storage network</strong>. Store unlimited files with zero fees, no limits, and
              infinite possibilities. Join over <strong>1 million users</strong> who have stored{" "}
              <strong>petabytes of data</strong> while earning money as
              <strong> storage keepers</strong> and accessing our thriving <strong>digital content marketplace</strong>.
            </motion.p>

            {/* Enhanced Key Benefits with more SEO keywords */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 grid md:grid-cols-4 gap-4 max-w-5xl mx-auto"
            >
              <div className="flex items-center gap-2 text-infinite-silver-700">
                <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                <span className="font-semibold">100% Free Forever</span>
              </div>
              <div className="flex items-center gap-2 text-infinite-silver-700">
                <Infinity className="w-5 h-5 text-infinite-blue-500" aria-hidden="true" />
                <span className="font-semibold">Truly Unlimited Storage</span>
              </div>
              <div className="flex items-center gap-2 text-infinite-silver-700">
                <Globe className="w-5 h-5 text-infinite-blue-500" aria-hidden="true" />
                <span className="font-semibold">Decentralized & Secure</span>
              </div>
              <div className="flex items-center gap-2 text-infinite-silver-700">
                <DollarSign className="w-5 h-5 text-green-500" aria-hidden="true" />
                <span className="font-semibold">Earn Money Sharing</span>
              </div>
            </motion.div>

            {/* Enhanced CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button
                className="text-lg px-10 py-5 rounded-full font-bold
                  bg-infinite-blue-500 hover:bg-infinite-blue-600 text-white 
                  shadow-2xl border-2 border-infinite-blue-400 
                  transition-all duration-300 transform hover:scale-105
                  "
                asChild
              >
                <Link href="/download" aria-label="Download Infinite Storage - Get unlimited free cloud storage now">
                  <Download className="mr-3 h-6 w-6" aria-hidden="true" />
                  Get Unlimited Storage FREE
                </Link>
              </Button>
              <Button
                className="text-lg px-10 py-5 rounded-full font-bold
                  bg-green-500 hover:bg-green-600 text-white 
                  shadow-2xl border-2 border-green-400 
                  transition-all duration-300 transform hover:scale-105
                  "
                asChild
              >
                <Link href="/storage-keepers" aria-label="Start earning money as storage keeper">
                  <DollarSign className="mr-3 h-6 w-6" aria-hidden="true" />
                  Start Earning Money
                </Link>
              </Button>
            </motion.div>

            {/* Enhanced Trust Indicators with more specific numbers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-infinite-silver-600"
            >
              <div className="flex flex-col items-center gap-2">
                <Star className="w-8 h-8 text-yellow-500 fill-current" aria-hidden="true" />
                <span className="font-bold text-lg">4.9/5 Rating</span>
                <span className="text-sm">12,500+ Reviews</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="w-8 h-8 text-infinite-blue-500" aria-hidden="true" />
                <span className="font-bold text-lg">1M+ Users</span>
                <span className="text-sm">Active Worldwide</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Database className="w-8 h-8 text-infinite-blue-500" aria-hidden="true" />
                <span className="font-bold text-lg">Petabytes Stored</span>
                <span className="text-sm">Unlimited Capacity</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TrendingUp className="w-8 h-8 text-green-500" aria-hidden="true" />
                <span className="font-bold text-lg">$2M+ Earned</span>
                <span className="text-sm">By Storage Keepers</span>
              </div>
            </motion.div>
          </GlassmorphicContainer>
        </motion.div>
      </section>

      {/* Why Choose Infinite Storage - New SEO Section */}
      <section className="w-full py-16 md:py-24 container mx-auto px-4" aria-labelledby="why-choose-heading">
        <motion.h2
          id="why-choose-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-infinite-blue-700 mb-6 drop-shadow-lg"
        >
          Why Choose Infinite Storage Over Google Drive, Dropbox & OneDrive?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-center text-infinite-silver-700 max-w-4xl mx-auto mb-12"
        >
          Traditional cloud storage platforms limit your space and charge expensive fees.
          <strong> Infinite Storage is completely different</strong> - offering truly unlimited free storage with
          revolutionary decentralized technology that benefits everyone.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <GlassmorphicContainer className="p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 font-bold text-2xl">×</span>
            </div>
            <h3 className="text-2xl font-bold text-red-600 mb-4">Traditional Cloud Storage</h3>
            <ul className="text-left text-infinite-silver-700 space-y-2">
              <li>• Limited storage space (5-15GB free)</li>
              <li>• Expensive monthly fees ($10-20/month)</li>
              <li>• Centralized servers (single point of failure)</li>
              <li>• No earning opportunities</li>
              <li>• Privacy concerns with data mining</li>
              <li>• Vendor lock-in and price increases</li>
            </ul>
          </GlassmorphicContainer>

          <GlassmorphicContainer className="p-8 text-center border-2 border-infinite-blue-400">
            <div className="w-16 h-16 bg-infinite-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Infinity className="w-8 h-8 text-infinite-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-infinite-blue-700 mb-4">Infinite Storage</h3>
            <ul className="text-left text-infinite-silver-700 space-y-2">
              <li>
                • <strong>Unlimited storage space forever</strong>
              </li>
              <li>
                • <strong>100% free - no hidden fees ever</strong>
              </li>
              <li>
                • <strong>Decentralized network (ultra-reliable)</strong>
              </li>
              <li>
                • <strong>Earn money as storage keeper</strong>
              </li>
              <li>
                • <strong>Zero-knowledge encryption</strong>
              </li>
              <li>
                • <strong>Community-owned platform</strong>
              </li>
            </ul>
          </GlassmorphicContainer>

          <GlassmorphicContainer className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-4">Your Savings</h3>
            <div className="text-left text-infinite-silver-700 space-y-2">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 text-lg">Save $240/year</p>
                <p className="text-sm">vs. Google Drive Premium</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 text-lg">Save $360/year</p>
                <p className="text-sm">vs. Dropbox Plus</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 text-lg">Earn $500+/year</p>
                <p className="text-sm">as Storage Keeper</p>
              </div>
            </div>
          </GlassmorphicContainer>
        </div>
      </section>

      {/* How It Works Section - Enhanced SEO */}
      <section
        id="how-unlimited-free-storage-works"
        className="w-full py-16 md:py-24 container mx-auto px-4"
        aria-labelledby="how-it-works-heading"
      >
        <motion.h2
          id="how-it-works-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-infinite-blue-700 mb-6 drop-shadow-lg"
        >
          How Unlimited Free Storage Actually Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-center text-infinite-silver-700 max-w-4xl mx-auto mb-12"
        >
          Our revolutionary <strong>peer-to-peer decentralized storage network</strong> eliminates the need for
          expensive data centers. Instead, we create a <strong>self-sustaining ecosystem</strong> where users share
          unused storage space, earn money, and everyone benefits from <strong>unlimited free cloud storage</strong>.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SectionCard
            icon={<Cloud className="w-12 h-12 text-infinite-blue-500" />}
            title="Upload Unlimited Files Free"
            description="Store unlimited photos, videos, documents, and any file type forever. No storage limits, no expiration dates, no hidden fees. Your files are automatically encrypted and distributed across our global network."
            delay={0.1}
          />
          <SectionCard
            icon={<Users className="w-12 h-12 text-infinite-blue-500" />}
            title="Decentralized Network Protection"
            description="Files are encrypted, split into chunks, and replicated across thousands of storage keepers worldwide. Even if 90% of nodes go offline, your files remain accessible with 99.99% uptime guarantee."
            delay={0.2}
          />
          <SectionCard
            icon={<DollarSign className="w-12 h-12 text-green-500" />}
            title="Earn Money Sharing Storage"
            description="Turn your unused hard drive space into passive income. Earn from storing encrypted files, marketplace commissions, API revenue sharing, and direct storage deals. Average earnings: $500+/year."
            delay={0.3}
          />
          <SectionCard
            icon={<Shield className="w-12 h-12 text-infinite-blue-500" />}
            title="Zero-Knowledge Encryption"
            description="Your files are encrypted before leaving your device. Even storage keepers can't see your private content. Choose public storage (free forever) or private encrypted storage for maximum security."
            delay={0.4}
          />
          <SectionCard
            icon={<Settings className="w-12 h-12 text-infinite-blue-500" />}
            title="Smart Content Categories"
            description="Storage keepers specialize in content types they're interested in - education, games, media, software. This creates specialized networks and better content discovery for everyone."
            delay={0.5}
          />
          <SectionCard
            icon={<Zap className="w-12 h-12 text-infinite-blue-500" />}
            title="Self-Sustaining Economy"
            description="Platform revenue from API services, premium features, and marketplace transactions funds the network and rewards storage keepers. No ads, no data mining, just mutual benefit."
            delay={0.6}
          />
        </div>
      </section>

      {/* Use Cases Section - New for SEO */}
      <section className="w-full py-16 md:py-24 container mx-auto px-4" aria-labelledby="use-cases-heading">
        <motion.h2
          id="use-cases-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-infinite-blue-700 mb-6 drop-shadow-lg"
        >
          Perfect For Every Storage Need
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-center text-infinite-silver-700 max-w-4xl mx-auto mb-12"
        >
          Whether you're a content creator, business owner, student, or just need reliable backup storage,
          <strong> Infinite Storage</strong> provides the perfect solution for every use case.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GlassmorphicContainer className="p-6 text-center h-full">
            <Smartphone className="w-12 h-12 text-infinite-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-infinite-blue-700 mb-3">Photo & Video Backup</h3>
            <p className="text-infinite-silver-700 text-sm">
              Unlimited photo and video storage. Never delete memories again. Automatic backup from phone and camera.
            </p>
          </GlassmorphicContainer>

          <GlassmorphicContainer className="p-6 text-center h-full">
            <FileText className="w-12 h-12 text-infinite-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-infinite-blue-700 mb-3">Document Storage</h3>
            <p className="text-infinite-silver-700 text-sm">
              Store unlimited documents, PDFs, presentations. Perfect for students, professionals, and businesses.
            </p>
          </GlassmorphicContainer>

          <GlassmorphicContainer className="p-6 text-center h-full">
            <Upload className="w-12 h-12 text-infinite-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-infinite-blue-700 mb-3">Content Creation</h3>
            <p className="text-infinite-silver-700 text-sm">
              Store raw footage, project files, assets. Collaborate with unlimited storage for creative projects.
            </p>
          </GlassmorphicContainer>

          <GlassmorphicContainer className="p-6 text-center h-full">
            <Database className="w-12 h-12 text-infinite-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-infinite-blue-700 mb-3">Business Backup</h3>
            <p className="text-infinite-silver-700 text-sm">
              Enterprise-grade backup solution. Store unlimited business data with encryption and redundancy.
            </p>
          </GlassmorphicContainer>
        </div>
      </section>

      {/* Content Marketplace Section - Enhanced SEO */}
      <section
        id="digital-content-marketplace"
        className="w-full py-16 md:py-24 container mx-auto px-4"
        aria-labelledby="marketplace-heading"
      >
        <motion.h2
          id="marketplace-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-infinite-blue-700 mb-6 drop-shadow-lg"
        >
          Revolutionary Digital Content Marketplace
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-center text-infinite-silver-700 max-w-3xl mx-auto mb-12"
        >
          The world's first <strong>unlimited storage-powered marketplace</strong>. Buy and sell digital content with
          zero storage costs. Creators keep more profits, buyers get better prices, everyone wins with
          <strong> infinite storage capacity</strong>.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <SectionCard
            icon={<Upload className="w-12 h-12 text-infinite-blue-500" />}
            title="Sell Digital Products Without Limits"
            description="Upload unlimited games, software, courses, media, and digital products. No storage fees means higher profits. Set your price and earn directly from every download with secure payment processing."
            delay={0.1}
          />
          <SectionCard
            icon={<Search className="w-12 h-12 text-infinite-blue-500" />}
            title="Discover Exclusive Content"
            description="Browse thousands of unique digital products from indie creators worldwide. Find games, educational resources, software tools, and media content not available on traditional platforms."
            delay={0.2}
          />
        </div>

        {/* Marketplace Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <GlassmorphicContainer className="p-6 text-center">
            <div className="text-3xl font-bold text-infinite-blue-700 mb-2">50K+</div>
            <div className="text-infinite-silver-700">Digital Products</div>
            <div className="text-sm text-infinite-silver-600 mt-1">Games, Software, Media</div>
          </GlassmorphicContainer>
          <GlassmorphicContainer className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$2M+</div>
            <div className="text-infinite-silver-700">Creator Earnings</div>
            <div className="text-sm text-infinite-silver-600 mt-1">Paid to Content Creators</div>
          </GlassmorphicContainer>
          <GlassmorphicContainer className="p-6 text-center">
            <div className="text-3xl font-bold text-infinite-blue-700 mb-2">100K+</div>
            <div className="text-infinite-silver-700">Active Buyers</div>
            <div className="text-sm text-infinite-silver-600 mt-1">Discovering New Content</div>
          </GlassmorphicContainer>
          <GlassmorphicContainer className="p-6 text-center">
            <div className="text-3xl font-bold text-infinite-blue-700 mb-2">∞</div>
            <div className="text-infinite-silver-700">Storage Capacity</div>
            <div className="text-sm text-infinite-silver-600 mt-1">Unlimited for All Creators</div>
          </GlassmorphicContainer>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            className="text-lg px-10 py-5 rounded-full font-bold
              bg-infinite-blue-500 hover:bg-infinite-blue-600 text-white 
              shadow-2xl border-2 border-infinite-blue-400 
              transition-all duration-300 transform hover:scale-105
              "
            asChild
          >
            <Link
              href="/marketplace"
              aria-label="Browse Infinite Storage digital marketplace - Buy and sell digital content"
            >
              <ShoppingCart className="mr-3 h-6 w-6" aria-hidden="true" />
              Explore Marketplace
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Storage Keepers Section - Enhanced SEO */}
      <section
        id="earn-money-storage-keeper"
        className="w-full py-16 md:py-24 container mx-auto px-4"
        aria-labelledby="storage-keepers-heading"
      >
        <motion.h2
          id="storage-keepers-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-infinite-blue-700 mb-6 drop-shadow-lg"
        >
          Turn Unused Storage Into Passive Income
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-center text-infinite-silver-700 max-w-3xl mx-auto mb-12"
        >
          Join thousands of <strong>storage keepers earning $500+ per year</strong> by sharing unused hard drive space.
          Our <strong>decentralized storage network</strong> rewards you for contributing to the future of cloud storage
          while helping provide <strong>unlimited free storage</strong> for everyone.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <SectionCard
            icon={<DollarSign className="w-12 h-12 text-green-500" />}
            title="Multiple Income Streams"
            description="Earn from storing encrypted files ($200/year), API revenue sharing ($150/year), marketplace commissions ($100/year), and premium storage services ($50+/year). Total potential: $500+/year passive income."
            delay={0.1}
          />
          <SectionCard
            icon={<Copy className="w-12 h-12 text-infinite-blue-500" />}
            title="Access Valuable Content"
            description="Get copy-only access to public files you store. Access educational materials, software, games, media, and other valuable digital content as part of your storage keeper rewards."
            delay={0.2}
          />
          <SectionCard
            icon={<HardDrive className="w-12 h-12 text-infinite-blue-500" />}
            title="Flexible Storage Contribution"
            description="Set your storage limits (10GB to 10TB+), choose content categories you want to store, and decide between auto-accept or manual approval for new files. Full control over your participation level."
            delay={0.3}
          />
          <SectionCard
            icon={<Globe className="w-12 h-12 text-infinite-blue-500" />}
            title="Global Network Benefits"
            description="Join a worldwide network of 50,000+ storage providers. Benefit from global demand, automatic redundancy, and the collective strength of decentralized infrastructure."
            delay={0.4}
          />
          <SectionCard
            icon={<Zap className="w-12 h-12 text-infinite-blue-500" />}
            title="Automated Passive Income"
            description="Set it and forget it. Our automated systems handle file management, payments, and network optimization while you earn money 24/7 from your unused storage space."
            delay={0.5}
          />
          <SectionCard
            icon={<Shield className="w-12 h-12 text-infinite-blue-500" />}
            title="Secure & Private Operation"
            description="All stored files are encrypted before reaching your device. You never see private content, ensuring user privacy while you earn from contributing to the decentralized network."
            delay={0.6}
          />
        </div>

        {/* Storage Keeper Earnings Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <GlassmorphicContainer className="p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-infinite-blue-700 mb-6">
              Storage Keeper Earnings Calculator
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-infinite-blue-700 mb-2">100GB Shared</div>
                <div className="text-lg text-green-600 font-semibold">~$50/month</div>
                <div className="text-sm text-infinite-silver-600">Perfect for beginners</div>
              </div>
              <div className="text-center border-2 border-infinite-blue-400 rounded-lg p-4">
                <div className="text-2xl font-bold text-infinite-blue-700 mb-2">1TB Shared</div>
                <div className="text-lg text-green-600 font-semibold">~$150/month</div>
                <div className="text-sm text-infinite-silver-600">Most popular option</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-infinite-blue-700 mb-2">10TB Shared</div>
                <div className="text-lg text-green-600 font-semibold">~$500/month</div>
                <div className="text-sm text-infinite-silver-600">Maximum earnings</div>
              </div>
            </div>
            <p className="text-center text-infinite-silver-700 mt-6 text-sm">
              *Earnings vary based on demand, content type, and network participation. Additional income from
              marketplace and API revenue sharing.
            </p>
          </GlassmorphicContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            className="text-lg px-10 py-5 rounded-full font-bold
              bg-green-500 hover:bg-green-600 text-white 
              shadow-2xl border-2 border-green-400 
              transition-all duration-300 transform hover:scale-105
              "
            asChild
          >
            <Link
              href="/storage-keepers"
              aria-label="Become a storage keeper and start earning passive income from unused storage"
            >
              <DollarSign className="mr-3 h-6 w-6" aria-hidden="true" />
              Start Earning $500+/Year
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Download Section - Enhanced SEO */}
      <section
        id="download-unlimited-storage-app"
        className="w-full py-16 md:py-24 container mx-auto px-4 text-center"
        aria-labelledby="download-heading"
      >
        <motion.h2
          id="download-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-infinite-blue-700 mb-6 drop-shadow-lg"
        >
          Download Infinite Storage - 100% Free Forever
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-center text-infinite-silver-700 max-w-3xl mx-auto mb-12"
        >
          Get started with <strong>unlimited free cloud storage</strong> today. Download our secure, fast, and
          user-friendly app for Windows and Android devices. Join over <strong>1 million users</strong> storing
          unlimited files with zero fees.
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-8 justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassmorphicContainer className="p-8 flex flex-col items-center text-center max-w-md w-full h-full">
              <Windows className="w-16 h-16 text-infinite-blue-500 mb-6" aria-hidden="true" />
              <CardTitle className="text-3xl font-bold text-infinite-blue-700 mb-4">Windows Desktop App</CardTitle>
              <CardContent className="text-infinite-silver-700 p-0 mb-6">
                <p className="mb-4">
                  Seamlessly integrate unlimited storage with your Windows desktop. Sync unlimited files, automatic
                  backup, and access your infinite storage space from File Explorer.
                </p>
                <ul className="text-left space-y-2 text-sm">
                  <li>• Unlimited file sync and backup</li>
                  <li>• File Explorer integration</li>
                  <li>• Offline access to recent files</li>
                  <li>• Automatic photo/video backup</li>
                  <li>• Storage keeper functionality</li>
                </ul>
              </CardContent>
              <Button
                className="text-lg px-8 py-4 rounded-full font-bold
                  bg-infinite-blue-500 hover:bg-infinite-blue-600 text-white 
                  shadow-xl border-2 border-infinite-blue-400 
                  transition-all duration-300 transform hover:scale-105 w-full
                  "
                asChild
              >
                <Link
                  href="/download"
                  aria-label="Download Infinite Storage for Windows - Free unlimited cloud storage"
                >
                  <Download className="mr-3 h-6 w-6" aria-hidden="true" />
                  Download for Windows
                </Link>
              </Button>
            </GlassmorphicContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassmorphicContainer className="p-8 flex flex-col items-center text-center max-w-md w-full h-full">
              <Android className="w-16 h-16 text-infinite-blue-500 mb-6" aria-hidden="true" />
              <CardTitle className="text-3xl font-bold text-infinite-blue-700 mb-4">Android Mobile App</CardTitle>
              <CardContent className="text-infinite-silver-700 p-0 mb-6">
                <p className="mb-4">
                  Access your unlimited storage on the go. Upload unlimited photos, videos, documents from your Android
                  device with automatic backup and real-time sync.
                </p>
                <ul className="text-left space-y-2 text-sm">
                  <li>• Unlimited photo/video backup</li>
                  <li>• Real-time file synchronization</li>
                  <li>• Offline file access</li>
                  <li>• Share files instantly</li>
                  <li>• Mobile storage keeper mode</li>
                </ul>
              </CardContent>
              <Button
                className="text-lg px-8 py-4 rounded-full font-bold
                  bg-infinite-blue-500 hover:bg-infinite-blue-600 text-white 
                  shadow-xl border-2 border-infinite-blue-400 
                  transition-all duration-300 transform hover:scale-105 w-full
                  "
                asChild
              >
                <Link
                  href="/download"
                  aria-label="Download Infinite Storage for Android - Free unlimited cloud storage"
                >
                  <Download className="mr-3 h-6 w-6" aria-hidden="true" />
                  Download for Android
                </Link>
              </Button>
            </GlassmorphicContainer>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg text-infinite-silver-700 mb-6">
            <strong>Coming Soon:</strong> iOS, macOS, Linux, and Web versions.
            <Link href="/blog" className="text-infinite-blue-500 hover:underline ml-2">
              Subscribe to our newsletter
            </Link>{" "}
            to get notified when they're available!
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-infinite-silver-600">
            <span>✓ 100% Free Forever</span>
            <span>✓ No Storage Limits</span>
            <span>✓ No Hidden Fees</span>
            <span>✓ Unlimited File Types</span>
            <span>✓ 99.99% Uptime</span>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section - New for SEO */}
      <section className="w-full py-16 md:py-24 container mx-auto px-4" aria-labelledby="faq-heading">
        <motion.h2
          id="faq-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-infinite-blue-700 mb-12 drop-shadow-lg"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <GlassmorphicContainer className="p-6">
            <h3 className="text-xl font-bold text-infinite-blue-700 mb-3">
              Is Infinite Storage really unlimited and free?
            </h3>
            <p className="text-infinite-silver-700">
              Yes! Unlike traditional cloud storage providers that limit you to 5-15GB, Infinite Storage provides truly
              unlimited storage space forever, completely free. No hidden fees, no expiration dates, no storage limits.
            </p>
          </GlassmorphicContainer>

          <GlassmorphicContainer className="p-6">
            <h3 className="text-xl font-bold text-infinite-blue-700 mb-3">
              How can you offer unlimited storage for free?
            </h3>
            <p className="text-infinite-silver-700">
              Our decentralized network eliminates expensive data centers. Users share unused storage space and earn
              money, creating a self-sustaining ecosystem funded by API services, premium features, and marketplace
              transactions.
            </p>
          </GlassmorphicContainer>

          <GlassmorphicContainer className="p-6">
            <h3 className="text-xl font-bold text-infinite-blue-700 mb-3">How much can I earn as a storage keeper?</h3>
            <p className="text-infinite-silver-700">
              Storage keepers earn $200-500+ per year on average by sharing 100GB-1TB of unused space. Income comes from
              storing encrypted files, marketplace commissions, API revenue sharing, and premium storage services.
            </p>
          </GlassmorphicContainer>

          <GlassmorphicContainer className="p-6">
            <h3 className="text-xl font-bold text-infinite-blue-700 mb-3">Is my data safe and private?</h3>
            <p className="text-infinite-silver-700">
              Absolutely. Files are encrypted before leaving your device, split into chunks, and distributed across
              thousands of nodes. Even storage keepers can't see your private content. Choose public or encrypted
              private storage.
            </p>
          </GlassmorphicContainer>

          <GlassmorphicContainer className="p-6">
            <h3 className="text-xl font-bold text-infinite-blue-700 mb-3">What file types can I store?</h3>
            <p className="text-infinite-silver-700">
              Store any file type - photos, videos, documents, software, games, music, archives, and more. No
              restrictions on file types or sizes. Perfect for personal backup, business storage, and content creation.
            </p>
          </GlassmorphicContainer>

          <GlassmorphicContainer className="p-6">
            <h3 className="text-xl font-bold text-infinite-blue-700 mb-3">
              How does it compare to Google Drive, Dropbox?
            </h3>
            <p className="text-infinite-silver-700">
              Traditional providers limit you to 5-15GB free, then charge $10-20/month. Infinite Storage provides
              unlimited space forever, free. Plus you can earn money as a storage keeper instead of paying fees.
            </p>
          </GlassmorphicContainer>
        </div>
      </section>
    </div>
  )
}
