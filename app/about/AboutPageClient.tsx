"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Infinity, Lightbulb, Handshake, Users, Globe, Award } from "lucide-react"

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

export default function AboutPageClient() {
  return (
    <div className="container mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center text-infinite-blue-700 mb-6 drop-shadow-lg"
      >
        About Infinite Storage
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl font-bold text-center text-infinite-blue-600 mb-12"
      >
        Revolutionizing Cloud Storage Through Decentralization
      </motion.h2>

      <GlassmorphicContainer className="max-w-4xl mx-auto p-8 md:p-12 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-infinite-silver-700 text-center mb-6"
        >
          At <strong>Infinite Storage</strong>, we believe in a future where <strong>unlimited cloud storage</strong> is
          truly limitless, accessible, and mutually beneficial for everyone. We're building a revolutionary{" "}
          <strong>decentralized storage network</strong> that redefines how we store, share, and monetize digital
          content through innovative blockchain technology.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-infinite-silver-700 text-center mb-6"
        >
          Our mission is to democratize data storage by empowering users with <strong>infinite free storage</strong>,
          while simultaneously creating a sustainable ecosystem where individuals can earn by contributing their unused
          storage space. We're fostering a global community where innovation thrives and digital content finds its true
          value.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-infinite-silver-700 text-center"
        >
          Founded by a team of blockchain experts, distributed systems engineers, and storage technology pioneers,{" "}
          <strong>Infinite Storage</strong> represents the next evolution in cloud storage - where users, creators, and
          storage providers all benefit from a truly decentralized, peer-to-peer network.
        </motion.p>
      </GlassmorphicContainer>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <GlassmorphicContainer className="p-6 flex flex-col items-center text-center h-full">
            <Lightbulb className="w-12 h-12 text-infinite-blue-500" />
            <h3 className="mt-4 text-2xl font-bold text-infinite-blue-700">Our Vision</h3>
            <p className="mt-2 text-infinite-silver-700">
              To create a world where <strong>unlimited data storage</strong> is no longer a barrier, but a shared
              resource that fuels creativity, innovation, and global collaboration through decentralized technology.
            </p>
          </GlassmorphicContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GlassmorphicContainer className="p-6 flex flex-col items-center text-center h-full">
            <Handshake className="w-12 h-12 text-infinite-blue-500" />
            <h3 className="mt-4 text-2xl font-bold text-infinite-blue-700">Mutual Benefit Model</h3>
            <p className="mt-2 text-infinite-silver-700">
              We're built on a unique economic model where users get <strong>free unlimited storage</strong>, storage
              keepers earn money and access valuable content, creating a truly sustainable ecosystem.
            </p>
          </GlassmorphicContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <GlassmorphicContainer className="p-6 flex flex-col items-center text-center h-full">
            <Infinity className="w-12 h-12 text-infinite-blue-500" />
            <h3 className="mt-4 text-2xl font-bold text-infinite-blue-700">Decentralized Future</h3>
            <p className="mt-2 text-infinite-silver-700">
              Join us in building a robust, resilient, and truly <strong>decentralized internet infrastructure</strong>{" "}
              that puts control back in the hands of users and communities worldwide.
            </p>
          </GlassmorphicContainer>
        </motion.div>
      </div>

      {/* Company Stats */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center text-infinite-blue-700 mb-8">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <GlassmorphicContainer className="p-6 text-center">
            <Users className="w-8 h-8 text-infinite-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-infinite-blue-700">1M+</div>
            <div className="text-infinite-silver-700">Active Users</div>
          </GlassmorphicContainer>
          <GlassmorphicContainer className="p-6 text-center">
            <Globe className="w-8 h-8 text-infinite-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-infinite-blue-700">50K+</div>
            <div className="text-infinite-silver-700">Storage Keepers</div>
          </GlassmorphicContainer>
          <GlassmorphicContainer className="p-6 text-center">
            <Award className="w-8 h-8 text-infinite-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-infinite-blue-700">10PB+</div>
            <div className="text-infinite-silver-700">Data Stored</div>
          </GlassmorphicContainer>
          <GlassmorphicContainer className="p-6 text-center">
            <Infinity className="w-8 h-8 text-infinite-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-infinite-blue-700">99.99%</div>
            <div className="text-infinite-silver-700">Uptime</div>
          </GlassmorphicContainer>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-infinite-blue-700 mb-8">Leadership Team</h2>
        <GlassmorphicContainer className="max-w-4xl mx-auto p-8">
          <p className="text-lg text-infinite-silver-700 text-center mb-6">
            Our team consists of industry veterans from leading technology companies, blockchain pioneers, and
            distributed systems experts who share a common vision of democratizing data storage.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-bold text-infinite-blue-700 mb-2">Engineering Excellence</h4>
              <p className="text-infinite-silver-700 text-sm">
                Former engineers from Google, Amazon, and Microsoft leading our technical innovation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-infinite-blue-700 mb-2">Blockchain Expertise</h4>
              <p className="text-infinite-silver-700 text-sm">
                Cryptocurrency and blockchain veterans building the future of decentralized storage.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-infinite-blue-700 mb-2">Storage Innovation</h4>
              <p className="text-infinite-silver-700 text-sm">
                Storage industry experts with decades of experience in enterprise and consumer solutions.
              </p>
            </div>
          </div>
        </GlassmorphicContainer>
      </motion.section>
    </div>
  )
}
