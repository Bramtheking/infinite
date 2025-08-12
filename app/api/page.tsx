"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Code, Clock, Wrench } from "lucide-react"

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

export default function APIPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center text-infinite-blue-700 mb-6 drop-shadow-lg"
      >
        Infinite Storage API
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl text-center text-infinite-silver-700 max-w-3xl mx-auto mb-12"
      >
        Integrate <strong>unlimited storage</strong> into your applications with our powerful API. Build the next
        generation of data-driven applications with infinite possibilities.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <GlassmorphicContainer className="p-12 text-center">
          <div className="mb-8">
            <Wrench className="w-24 h-24 text-infinite-blue-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-infinite-blue-700 mb-4">Coming Soon</h2>
            <p className="text-xl text-infinite-silver-700 mb-6">
              We're working hard to bring you a comprehensive API that will revolutionize how developers integrate
              unlimited storage into their applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Code className="w-12 h-12 text-infinite-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-infinite-blue-700 mb-2">RESTful API</h3>
              <p className="text-infinite-silver-700">Simple, intuitive REST endpoints for all storage operations</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-infinite-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-infinite-blue-700 mb-2">Real-time Updates</h3>
              <p className="text-infinite-silver-700">WebSocket support for real-time file synchronization</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-infinite-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">∞</span>
              </div>
              <h3 className="text-xl font-bold text-infinite-blue-700 mb-2">Unlimited Scale</h3>
              <p className="text-infinite-silver-700">No limits on storage, bandwidth, or API calls</p>
            </div>
          </div>

          <div className="bg-infinite-blue-50 rounded-2xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-infinite-blue-700 mb-4">What to Expect</h3>
            <ul className="text-left text-infinite-silver-700 space-y-2 max-w-2xl mx-auto">
              <li>
                • <strong>File Management:</strong> Upload, download, delete, and organize files
              </li>
              <li>
                • <strong>Metadata Operations:</strong> Search, tag, and categorize your content
              </li>
              <li>
                • <strong>Access Control:</strong> Manage permissions and sharing settings
              </li>
              <li>
                • <strong>Analytics:</strong> Track usage, performance, and storage metrics
              </li>
              <li>
                • <strong>Webhooks:</strong> Get notified of file changes and events
              </li>
              <li>
                • <strong>SDKs:</strong> Native libraries for popular programming languages
              </li>
            </ul>
          </div>

          <p className="text-lg text-infinite-silver-700 mb-6">
            Want to be notified when our API launches? Join our developer newsletter for early access and exclusive
            updates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-infinite-blue-500 text-white rounded-full font-semibold hover:bg-infinite-blue-600 transition-colors">
              Join Developer Newsletter
            </button>
            <button className="px-8 py-3 bg-white/40 text-infinite-blue-700 rounded-full font-semibold hover:bg-white/60 transition-colors border border-white/60">
              Request Early Access
            </button>
          </div>
        </GlassmorphicContainer>
      </motion.div>
    </div>
  )
}
