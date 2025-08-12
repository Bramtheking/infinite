"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Upload, Search, Star, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function MarketplacePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center text-infinite-blue-700 mb-6 drop-shadow-lg"
      >
        The Infinite Content Marketplace
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl text-center text-infinite-silver-700 max-w-3xl mx-auto mb-12"
      >
        Discover, share, and monetize digital content like never before. Our marketplace connects creators directly with
        their audience, powered by <strong>unlimited decentralized storage</strong>.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <GlassmorphicCardMarketplace
          icon={<Upload className="w-10 h-10 text-infinite-blue-500" />}
          title="Sell Your Creations"
          description="Upload your games, software, media, or any digital product. Set your price and earn directly from every download. We handle the secure storage and payment processing with unlimited storage space."
        />
        <GlassmorphicCardMarketplace
          icon={<Search className="w-10 h-10 text-infinite-blue-500" />}
          title="Explore Unique Content"
          description="Browse a vast library of user-generated content. From indie games to educational resources, find unique digital products not available anywhere else, all stored on our infinite network."
        />
      </div>

      {/* Marketplace Stats */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-center text-infinite-blue-700 mb-8">Marketplace Statistics</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <GlassmorphicCardMarketplace
            icon={<Star className="w-8 h-8 text-infinite-blue-500" />}
            title="50K+ Products"
            description="Thousands of digital products from creators worldwide, all stored with unlimited capacity."
          />
          <GlassmorphicCardMarketplace
            icon={<TrendingUp className="w-8 h-8 text-infinite-blue-500" />}
            title="$2M+ Earned"
            description="Total earnings by creators selling their digital content through our platform."
          />
          <GlassmorphicCardMarketplace
            icon={<Users className="w-8 h-8 text-infinite-blue-500" />}
            title="100K+ Buyers"
            description="Active community of buyers discovering and purchasing unique digital content."
          />
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-12"
      >
        <Button
          className="relative overflow-hidden group text-lg px-8 py-4 rounded-full font-semibold
            bg-infinite-blue-500 text-white shadow-lg hover:bg-infinite-blue-600 transition-all duration-300
            backdrop-blur-sm border border-white/30
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300
            "
          asChild
        >
          <Link href="#" aria-label="Browse Infinite Storage Marketplace">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Browse Marketplace
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}

interface GlassmorphicCardMarketplaceProps {
  icon: React.ReactNode
  title: string
  description: string
}

function GlassmorphicCardMarketplace({ icon, title, description }: GlassmorphicCardMarketplaceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <Card
        className="relative overflow-hidden rounded-3xl shadow-2xl backdrop-blur-xl bg-white/25 border border-white/50
        before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/10 before:to-transparent before:z-[-1]
        after:absolute after:inset-0 before:rounded-3xl after:bg-gradient-to-tl after:from-white/10 after:to-transparent after:z-[-1]
        h-full
        "
      >
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none
          shadow-[inset_0_0_15px_rgba(255,255,255,0.15),inset_0_0_30px_rgba(0,0,0,0.1)]
          border-[1px] border-white/60
        "
        ></div>
        <CardHeader className="flex flex-col items-center text-center p-6 relative z-10">
          {icon}
          <CardTitle className="mt-4 text-2xl font-bold text-infinite-blue-700">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center text-infinite-silver-700 p-6 pt-0 relative z-10">
          <p>{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
