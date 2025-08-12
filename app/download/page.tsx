"use client"

import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import type React from "react"
import { Button } from "@/components/ui/button"
import {
  Download,
  ComputerIcon as Windows,
  SmartphoneIcon as Android,
  Globe,
  Shield,
  Zap,
  ComputerIcon,
  SmartphoneIcon,
} from "lucide-react"
import Link from "next/link"
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

export default function DownloadPage() {
  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-infinite-blue-700 mb-6 drop-shadow-lg"
      >
        Download Infinite Storage
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl text-infinite-silver-700 max-w-3xl mx-auto mb-12"
      >
        Get started with <strong>unlimited free storage</strong> today. Download our client for your preferred operating
        system and experience the future of decentralized cloud storage.
      </motion.p>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12"
      >
        <div className="flex items-center gap-2 text-infinite-silver-700 justify-center">
          <Shield className="w-5 h-5 text-infinite-blue-500" />
          <span className="font-semibold">100% Free Forever</span>
        </div>
        <div className="flex items-center gap-2 text-infinite-silver-700 justify-center">
          <Zap className="w-5 h-5 text-infinite-blue-500" />
          <span className="font-semibold">Unlimited Storage</span>
        </div>
        <div className="flex items-center gap-2 text-infinite-silver-700 justify-center">
          <Globe className="w-5 h-5 text-infinite-blue-500" />
          <span className="font-semibold">Decentralized & Secure</span>
        </div>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassmorphicContainer className="p-6 flex flex-col items-center text-center max-w-sm w-full h-full">
            <Windows className="w-12 h-12 text-infinite-blue-500" />
            <CardTitle className="mt-4 text-2xl font-bold text-infinite-blue-700">Windows Client</CardTitle>
            <CardContent className="text-infinite-silver-700 p-0 mt-2">
              <p>
                Seamlessly integrate Infinite Storage with your Windows desktop. Auto-sync, backup, and access unlimited
                storage space.
              </p>
            </CardContent>
            <div className="mt-4 text-sm text-infinite-silver-600">
              <p>• Windows 10/11 Compatible</p>
              <p>• Auto-sync & Backup</p>
              <p>• Offline Access</p>
            </div>
            <Button
              className="mt-6 relative overflow-hidden group text-lg px-6 py-3 rounded-full font-semibold
                bg-infinite-blue-500 text-white shadow-lg hover:bg-infinite-blue-600 transition-all duration-300
                backdrop-blur-sm border border-white/30
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300
                "
              asChild
            >
              <Link href="/downloads/infinite-storage-windows.exe" download aria-label="Download Windows Client">
                <Download className="mr-2 h-5 w-5" /> Download for Windows
              </Link>
            </Button>
          </GlassmorphicContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GlassmorphicContainer className="p-6 flex flex-col items-center text-center max-w-sm w-full h-full">
            <Android className="w-12 h-12 text-infinite-blue-500" />
            <CardTitle className="mt-4 text-2xl font-bold text-infinite-blue-700">Android App</CardTitle>
            <CardContent className="text-infinite-silver-700 p-0 mt-2">
              <p>
                Access your infinite storage on the go from your Android device. Upload photos, videos, and documents
                instantly.
              </p>
            </CardContent>
            <div className="mt-4 text-sm text-infinite-silver-600">
              <p>• Android 8.0+ Compatible</p>
              <p>• Auto Photo Backup</p>
              <p>• Offline File Access</p>
            </div>
            <Button
              className="mt-6 relative overflow-hidden group text-lg px-6 py-3 rounded-full font-semibold
                bg-infinite-blue-500 text-white shadow-lg hover:bg-infinite-blue-600 transition-all duration-300
                backdrop-blur-sm border border-white/30
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300
                "
              asChild
            >
              <Link href="/downloads/infinite-storage-android.apk" download aria-label="Download Android App">
                <Download className="mr-2 h-5 w-5" /> Download for Android
              </Link>
            </Button>
          </GlassmorphicContainer>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6">Coming Soon</h2>
        <div className="grid md:grid-cols-4 gap-4 text-infinite-silver-700">
          <div className="p-4">
            <Globe className="w-8 h-8 text-infinite-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold">Web App</h3>
            <p className="text-sm">Browser-based access</p>
          </div>
          <div className="p-4">
            <ComputerIcon className="w-8 h-8 text-infinite-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold">macOS</h3>
            <p className="text-sm">Native Mac application</p>
          </div>
          <div className="p-4">
            <ComputerIcon className="w-8 h-8 text-infinite-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold">Linux</h3>
            <p className="text-sm">All major distributions</p>
          </div>
          <div className="p-4">
            <SmartphoneIcon className="w-8 h-8 text-infinite-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold">iOS</h3>
            <p className="text-sm">iPhone & iPad support</p>
          </div>
        </div>
        <p className="mt-8 text-lg text-infinite-silver-700">
          Join our newsletter to get notified when new platforms become available!
        </p>
      </motion.div>
    </div>
  )
}
