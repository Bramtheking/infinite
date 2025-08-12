"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

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

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center text-infinite-blue-700 mb-6 drop-shadow-lg"
      >
        Contact Infinite Storage
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl text-center text-infinite-silver-700 max-w-3xl mx-auto mb-12"
      >
        Have questions about <strong>unlimited storage</strong>, need technical support, or want to discuss partnership
        opportunities? We're here to help!
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassmorphicContainer className="p-8 h-full">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6">Get in Touch</h2>
            <p className="text-infinite-silver-700 mb-6">
              Have questions, feedback, or partnership inquiries? We'd love to hear from you. Fill out the form or use
              the contact details below.
            </p>
            <div className="space-y-4 text-infinite-silver-700">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-infinite-blue-500" />
                <span className="font-medium">support@infinitestorage.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-infinite-blue-500" />
                <span className="font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-infinite-blue-500" />
                <span className="font-medium">123 Decentralized Way, Cloud City, 90210</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-infinite-blue-500" />
                <span className="font-medium">24/7 Support Available</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-infinite-blue-500" />
                <span className="font-medium">Global Support Team</span>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassmorphicContainer className="p-8 h-full">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6">Send Us a Message</h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.target as HTMLFormElement)
                const name = formData.get("name")
                const email = formData.get("email")
                const subject = formData.get("subject")
                const message = formData.get("message")

                const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                const mailtoLink = `mailto:bramwela8@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(emailBody)}`

                window.location.href = mailtoLink
              }}
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="bg-white/40 border-white/60 text-infinite-silver-900 placeholder:text-infinite-silver-600 focus:ring-infinite-blue-500 focus:border-infinite-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="bg-white/40 border-white/60 text-infinite-silver-900 placeholder:text-infinite-silver-600 focus:ring-infinite-blue-500 focus:border-infinite-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="bg-white/40 border-white/60 text-infinite-silver-900 placeholder:text-infinite-silver-600 focus:ring-infinite-blue-500 focus:border-infinite-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                  rows={5}
                  className="bg-white/40 border-white/60 text-infinite-silver-900 placeholder:text-infinite-silver-600 focus:ring-infinite-blue-500 focus:border-infinite-blue-500"
                />
              </div>
              <Button
                type="submit"
                className="relative overflow-hidden group text-lg px-8 py-4 rounded-full font-semibold
                  bg-infinite-blue-500 text-white shadow-lg hover:bg-infinite-blue-600 transition-all duration-300
                  backdrop-blur-sm border border-white/30 w-full
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300
                  "
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </GlassmorphicContainer>
        </motion.div>
      </div>

      {/* Support Options */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center text-infinite-blue-700 mb-8">Support Options</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <GlassmorphicContainer className="p-6 text-center">
            <MessageCircle className="w-8 h-8 text-infinite-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-infinite-blue-700 mb-2">Live Chat</h3>
            <p className="text-infinite-silver-700 text-sm">
              Get instant help with our 24/7 live chat support for urgent issues.
            </p>
          </GlassmorphicContainer>
          <GlassmorphicContainer className="p-6 text-center">
            <Mail className="w-8 h-8 text-infinite-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-infinite-blue-700 mb-2">Email Support</h3>
            <p className="text-infinite-silver-700 text-sm">
              Send detailed questions and get comprehensive responses within 24 hours.
            </p>
          </GlassmorphicContainer>
          <GlassmorphicContainer className="p-6 text-center">
            <Globe className="w-8 h-8 text-infinite-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-infinite-blue-700 mb-2">Help Center</h3>
            <p className="text-infinite-silver-700 text-sm">
              Browse our comprehensive knowledge base and FAQ for quick answers.
            </p>
          </GlassmorphicContainer>
        </div>
      </motion.section>
    </div>
  )
}
