"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HardDrive, Lock, Users, DollarSign, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center text-infinite-blue-700 mb-6 drop-shadow-lg"
      >
        How Infinite Storage Works
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl text-center text-infinite-silver-700 max-w-4xl mx-auto mb-12"
      >
        Discover how our revolutionary <strong>decentralized storage network</strong> provides unlimited free storage
        through innovative peer-to-peer technology.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GlassmorphicCard
          icon={<HardDrive className="w-10 h-10 text-infinite-blue-500" />}
          title="Limitless Free Storage"
          description="Store as much as you need, forever. Our decentralized network ensures your data is always available, without any hidden fees or storage limits. Upload unlimited files with 99.99% uptime guarantee."
        />
        <GlassmorphicCard
          icon={<Users className="w-10 h-10 text-infinite-blue-500" />}
          title="Decentralized & Resilient"
          description="Your files are broken into small chunks and replicated across multiple storage keepers globally. If a keeper goes offline, your data is automatically re-replicated, ensuring constant availability."
        />
        <GlassmorphicCard
          icon={<DollarSign className="w-10 h-10 text-infinite-blue-500" />}
          title="Earn as a Storage Keeper"
          description="Contribute your spare storage space and earn money. For public files, keepers can copy and use the content, creating a mutual benefit. For private files, keepers are paid directly."
        />
        <GlassmorphicCard
          icon={<Lock className="w-10 h-10 text-infinite-blue-500" />}
          title="Public vs. Encrypted Storage"
          description="By default, files are public and accessible to storage keepers (copy-only). For ultimate privacy, opt for our paid encrypted storage, ensuring your data is fully private and secure."
        />
        <GlassmorphicCard
          icon={<Shield className="w-10 h-10 text-infinite-blue-500" />}
          title="Content Categories"
          description="Storage keepers can choose to store specific categories of content (e.g., educational, games, media). This allows for specialized networks and better content discovery."
        />
        <GlassmorphicCard
          icon={<Zap className="w-10 h-10 text-infinite-blue-500" />}
          title="Sustainable Ecosystem"
          description="Our platform generates revenue through API services, guaranteed storage premiums, and a content marketplace. This revenue funds the network and compensates storage keepers, ensuring a thriving, self-sustaining ecosystem."
        />
      </div>
    </div>
  )
}

interface GlassmorphicCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function GlassmorphicCard({ icon, title, description }: GlassmorphicCardProps) {
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
