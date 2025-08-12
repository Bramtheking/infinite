"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Activity, Clock, Wrench } from "lucide-react"

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

export default function StatusPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center text-infinite-blue-700 mb-6 drop-shadow-lg"
      >
        System Status
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl text-center text-infinite-silver-700 max-w-3xl mx-auto mb-12"
      >
        Monitor the health and performance of our <strong>decentralized storage network</strong> in real-time. Stay
        informed about system availability and maintenance updates.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <GlassmorphicContainer className="p-12 text-center">
          <div className="mb-8">
            <Activity className="w-24 h-24 text-infinite-blue-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-infinite-blue-700 mb-4">Coming Soon</h2>
            <p className="text-xl text-infinite-silver-700 mb-6">
              We're building a comprehensive system status dashboard to provide real-time insights into our network
              health and performance metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold text-infinite-blue-700 mb-2">Network Health</h3>
              <p className="text-infinite-silver-700">Real-time monitoring of storage keeper nodes</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-infinite-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-infinite-blue-700 mb-2">Performance Metrics</h3>
              <p className="text-infinite-silver-700">Upload/download speeds and response times</p>
            </div>
            <div className="text-center">
              <Wrench className="w-12 h-12 text-infinite-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-infinite-blue-700 mb-2">Maintenance Updates</h3>
              <p className="text-infinite-silver-700">Scheduled maintenance and system updates</p>
            </div>
          </div>

          <div className="bg-infinite-blue-50 rounded-2xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-infinite-blue-700 mb-4">What You'll See</h3>
            <ul className="text-left text-infinite-silver-700 space-y-2 max-w-2xl mx-auto">
              <li>
                • <strong>System Uptime:</strong> Current and historical availability statistics
              </li>
              <li>
                • <strong>Network Status:</strong> Health of storage keeper nodes worldwide
              </li>
              <li>
                • <strong>Performance Metrics:</strong> Real-time speed and latency data
              </li>
              <li>
                • <strong>Incident Reports:</strong> Detailed information about any issues
              </li>
              <li>
                • <strong>Maintenance Schedule:</strong> Planned updates and improvements
              </li>
              <li>
                • <strong>Regional Status:</strong> Performance by geographic region
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-green-700 mb-2">Current Status: All Systems Operational</h3>
            <p className="text-green-600">
              Our decentralized network is running smoothly with 99.99% uptime. All storage and retrieval operations are
              functioning normally.
            </p>
          </div>

          <p className="text-lg text-infinite-silver-700 mb-6">
            Subscribe to status updates to get notified immediately of any system changes or maintenance windows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-infinite-blue-500 text-white rounded-full font-semibold hover:bg-infinite-blue-600 transition-colors">
              Subscribe to Updates
            </button>
            <button className="px-8 py-3 bg-white/40 text-infinite-blue-700 rounded-full font-semibold hover:bg-white/60 transition-colors border border-white/60">
              View Historical Data
            </button>
          </div>
        </GlassmorphicContainer>
      </motion.div>
    </div>
  )
}
