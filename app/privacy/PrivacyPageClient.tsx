"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, Users, Globe, FileText, Mail, Phone } from "lucide-react"
import Link from "next/link"

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

export default function PrivacyPageClient() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* SEO-Optimized Header */}
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold text-infinite-blue-700 mb-6 drop-shadow-lg">
          Privacy Policy - Your Data, Your Control
        </h1>
        <p className="text-xl text-infinite-silver-700 max-w-4xl mx-auto mb-4">
          At <strong>Infinite Storage</strong>, we believe in <strong>complete data privacy</strong> and{" "}
          <strong>user control</strong>. Our <strong>zero-knowledge encryption</strong> ensures that even we cannot
          access your files. Learn how we protect your privacy with <strong>military-grade security</strong> and{" "}
          <strong>transparent practices</strong>.
        </p>
        <div className="flex items-center justify-center gap-4 text-infinite-silver-600 text-sm">
          <span>Last Updated: January 25, 2024</span>
          <span>•</span>
          <span>Effective Date: January 25, 2024</span>
          <span>•</span>
          <span>GDPR & CCPA Compliant</span>
        </div>
      </motion.header>

      {/* Table of Contents - SEO Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12"
        aria-label="Privacy Policy Navigation"
      >
        <GlassmorphicContainer className="p-8">
          <h2 className="text-2xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Privacy Policy Contents
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "#information-collection", title: "Information We Collect", icon: "📊" },
              { href: "#zero-knowledge-encryption", title: "Zero-Knowledge Encryption", icon: "🔐" },
              { href: "#data-usage", title: "How We Use Your Data", icon: "⚙️" },
              { href: "#data-sharing", title: "Data Sharing Policies", icon: "🤝" },
              { href: "#user-rights", title: "Your Privacy Rights", icon: "👤" },
              { href: "#security-measures", title: "Security Measures", icon: "🛡️" },
              { href: "#cookies-tracking", title: "Cookies & Tracking", icon: "🍪" },
              { href: "#international-transfers", title: "International Transfers", icon: "🌍" },
              { href: "#contact-privacy", title: "Privacy Contact", icon: "📧" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-300 text-infinite-silver-700 hover:text-infinite-blue-600"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.title}</span>
              </a>
            ))}
          </div>
        </GlassmorphicContainer>
      </motion.nav>

      {/* Main Content Sections */}
      <div className="space-y-12">
        {/* Information Collection Section */}
        <motion.section
          id="information-collection"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8" />
              Information We Collect
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <div className="bg-infinite-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Personal Information</h3>
                <ul className="space-y-2">
                  <li>
                    • <strong>Account Information:</strong> Email address, username, password (encrypted)
                  </li>
                  <li>
                    • <strong>Profile Data:</strong> Display name, profile picture (optional)
                  </li>
                  <li>
                    • <strong>Contact Details:</strong> For customer support and important notifications
                  </li>
                  <li>
                    • <strong>Payment Information:</strong> For premium services (processed by secure third parties)
                  </li>
                </ul>
              </div>

              <div className="bg-infinite-silver-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Technical Information</h3>
                <ul className="space-y-2">
                  <li>
                    • <strong>Device Information:</strong> Operating system, browser type, device identifiers
                  </li>
                  <li>
                    • <strong>Usage Analytics:</strong> Feature usage, performance metrics, error logs
                  </li>
                  <li>
                    • <strong>Network Data:</strong> IP address, connection quality, bandwidth usage
                  </li>
                  <li>
                    • <strong>Storage Metrics:</strong> File sizes, upload/download statistics (not file contents)
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">What We DON'T Collect</h3>
                <ul className="space-y-2">
                  <li>
                    • <strong>File Contents:</strong> We cannot see, read, or access your stored files
                  </li>
                  <li>
                    • <strong>File Names:</strong> All file metadata is encrypted client-side
                  </li>
                  <li>
                    • <strong>Browsing History:</strong> We don't track your web browsing
                  </li>
                  <li>
                    • <strong>Personal Communications:</strong> No access to emails, messages, or calls
                  </li>
                </ul>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* Zero-Knowledge Encryption Section */}
        <motion.section
          id="zero-knowledge-encryption"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <Lock className="w-8 h-8" />
              Zero-Knowledge Encryption Architecture
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <p className="text-lg">
                <strong>Infinite Storage</strong> uses <strong>zero-knowledge encryption</strong>, meaning we have
                <strong> absolutely no access</strong> to your files, even if we wanted to. Here's how it works:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-infinite-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Client-Side Encryption</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>AES-256 encryption</strong> applied before upload
                    </li>
                    <li>
                      • <strong>Unique encryption keys</strong> generated on your device
                    </li>
                    <li>
                      • <strong>Keys never transmitted</strong> to our servers
                    </li>
                    <li>
                      • <strong>File chunking</strong> with individual chunk encryption
                    </li>
                  </ul>
                </div>

                <div className="bg-infinite-silver-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Decentralized Storage</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Encrypted chunks</strong> distributed across network
                    </li>
                    <li>
                      • <strong>No single point</strong> contains complete files
                    </li>
                    <li>
                      • <strong>Storage Keepers</strong> only see encrypted data
                    </li>
                    <li>
                      • <strong>Triple redundancy</strong> ensures availability
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">🔒 What This Means for You</h3>
                <p className="text-yellow-700">
                  Even if our servers were compromised, hackers would only find encrypted chunks that are
                  <strong> mathematically impossible to decrypt</strong> without your personal keys. Your data remains{" "}
                  <strong>100% private and secure</strong>.
                </p>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* Data Usage Section */}
        <motion.section
          id="data-usage"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <Eye className="w-8 h-8" />
              How We Use Your Data
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-infinite-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Service Provision</h3>
                  <ul className="space-y-2">
                    <li>• Account management and authentication</li>
                    <li>• File storage and retrieval operations</li>
                    <li>• Network optimization and performance</li>
                    <li>• Storage Keeper coordination</li>
                  </ul>
                </div>

                <div className="bg-infinite-silver-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Communication</h3>
                  <ul className="space-y-2">
                    <li>• Important service notifications</li>
                    <li>• Security alerts and updates</li>
                    <li>• Customer support responses</li>
                    <li>• Optional marketing (with consent)</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-3">Improvement</h3>
                  <ul className="space-y-2">
                    <li>• Anonymous usage analytics</li>
                    <li>• Performance optimization</li>
                    <li>• Bug fixes and improvements</li>
                    <li>• New feature development</li>
                  </ul>
                </div>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* Data Sharing Section */}
        <motion.section
          id="data-sharing"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <Users className="w-8 h-8" />
              Data Sharing Policies
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-red-800 mb-3">🚫 We NEVER Share</h3>
                <ul className="space-y-2 text-red-700">
                  <li>
                    • <strong>Your files or file contents</strong> (impossible due to encryption)
                  </li>
                  <li>
                    • <strong>Personal information</strong> for marketing purposes
                  </li>
                  <li>
                    • <strong>User data</strong> with advertisers or data brokers
                  </li>
                  <li>
                    • <strong>Account information</strong> with unauthorized parties
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Limited Sharing (Only When Required)</h3>
                <ul className="space-y-2 text-yellow-700">
                  <li>
                    • <strong>Legal compliance:</strong> When required by valid legal process
                  </li>
                  <li>
                    • <strong>Service providers:</strong> Trusted partners who help operate our service
                  </li>
                  <li>
                    • <strong>Security threats:</strong> To protect users from fraud or abuse
                  </li>
                  <li>
                    • <strong>Business transfers:</strong> In case of merger or acquisition (with notice)
                  </li>
                </ul>
              </div>

              <div className="bg-infinite-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">🤝 Storage Keeper Network</h3>
                <p className="text-infinite-blue-700">
                  Storage Keepers in our network only receive <strong>encrypted file chunks</strong> and cannot access
                  your actual files. They help provide the decentralized storage infrastructure but have{" "}
                  <strong>zero access to your personal data</strong>.
                </p>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* User Rights Section */}
        <motion.section
          id="user-rights"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8" />
              Your Privacy Rights (GDPR & CCPA Compliant)
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-infinite-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Access & Control Rights</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Access:</strong> Request copies of your personal data
                    </li>
                    <li>
                      • <strong>Rectification:</strong> Correct inaccurate information
                    </li>
                    <li>
                      • <strong>Erasure:</strong> Delete your account and data
                    </li>
                    <li>
                      • <strong>Portability:</strong> Export your data in standard formats
                    </li>
                  </ul>
                </div>

                <div className="bg-infinite-silver-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Legal Rights</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Opt-out:</strong> Refuse marketing communications
                    </li>
                    <li>
                      • <strong>Restrict processing:</strong> Limit how we use your data
                    </li>
                    <li>
                      • <strong>Object:</strong> Oppose certain data processing
                    </li>
                    <li>
                      • <strong>Complain:</strong> File complaints with data authorities
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">How to Exercise Your Rights</h3>
                <p className="text-green-700 mb-4">
                  Contact our Privacy Team at <strong>privacy@infinitestorage.com</strong> or use the contact form
                  below. We'll respond within <strong>30 days</strong> and verify your identity before processing
                  requests.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-infinite-blue-500 text-white rounded-full font-semibold hover:bg-infinite-blue-600 transition-colors"
                  >
                    Contact Privacy Team
                  </Link>
                  <Link
                    href="#contact-privacy"
                    className="px-6 py-3 bg-white/40 text-infinite-blue-700 rounded-full font-semibold hover:bg-white/60 transition-colors border border-white/60"
                  >
                    Privacy Contact Form
                  </Link>
                </div>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* Security Measures Section */}
        <motion.section
          id="security-measures"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <Lock className="w-8 h-8" />
              Advanced Security Measures
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-infinite-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Encryption</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>AES-256</strong> file encryption
                    </li>
                    <li>
                      • <strong>RSA-4096</strong> key exchange
                    </li>
                    <li>
                      • <strong>TLS 1.3</strong> data transmission
                    </li>
                    <li>
                      • <strong>End-to-end</strong> encryption
                    </li>
                  </ul>
                </div>

                <div className="bg-infinite-silver-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Infrastructure</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>SOC 2 Type II</strong> compliance
                    </li>
                    <li>
                      • <strong>ISO 27001</strong> certified facilities
                    </li>
                    <li>
                      • <strong>24/7 monitoring</strong> systems
                    </li>
                    <li>
                      • <strong>Regular audits</strong> and testing
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-3">Access Control</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Multi-factor</strong> authentication
                    </li>
                    <li>
                      • <strong>Role-based</strong> access control
                    </li>
                    <li>
                      • <strong>Zero-trust</strong> architecture
                    </li>
                    <li>
                      • <strong>Audit logging</strong> all access
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-red-800 mb-3">🚨 Security Incident Response</h3>
                <p className="text-red-700">
                  In the unlikely event of a security incident, we'll notify affected users within
                  <strong> 72 hours</strong> and provide detailed information about what happened, what data was
                  involved, and what steps we're taking to prevent future incidents.
                </p>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* Cookies & Tracking Section */}
        <motion.section
          id="cookies-tracking"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <Globe className="w-8 h-8" />
              Cookies & Tracking Technologies
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-infinite-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Essential Cookies</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Authentication:</strong> Keep you logged in securely
                    </li>
                    <li>
                      • <strong>Security:</strong> Prevent fraud and abuse
                    </li>
                    <li>
                      • <strong>Preferences:</strong> Remember your settings
                    </li>
                    <li>
                      • <strong>Performance:</strong> Optimize loading times
                    </li>
                  </ul>
                </div>

                <div className="bg-infinite-silver-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Optional Cookies</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Analytics:</strong> Understand usage patterns (anonymized)
                    </li>
                    <li>
                      • <strong>Marketing:</strong> Show relevant content (with consent)
                    </li>
                    <li>
                      • <strong>Social Media:</strong> Enable sharing features
                    </li>
                    <li>
                      • <strong>Third-party:</strong> Integrated services (with permission)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">🍪 Cookie Control</h3>
                <p className="text-yellow-700 mb-4">
                  You can control cookies through your browser settings or our cookie preference center. Disabling
                  certain cookies may affect site functionality.
                </p>
                <button className="px-6 py-3 bg-infinite-blue-500 text-white rounded-full font-semibold hover:bg-infinite-blue-600 transition-colors">
                  Manage Cookie Preferences
                </button>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* International Transfers Section */}
        <motion.section
          id="international-transfers"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <Globe className="w-8 h-8" />
              International Data Transfers
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <p className="text-lg">
                <strong>Infinite Storage</strong> operates globally with <strong>Storage Keepers worldwide</strong>.
                Your encrypted data chunks may be stored in different countries, but remember -
                <strong> all data is encrypted</strong> and we cannot access it regardless of location.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-infinite-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Transfer Safeguards</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Standard Contractual Clauses</strong> (SCCs)
                    </li>
                    <li>
                      • <strong>Adequacy decisions</strong> where available
                    </li>
                    <li>
                      • <strong>Binding Corporate Rules</strong> (BCRs)
                    </li>
                    <li>
                      • <strong>Encryption in transit and at rest</strong>
                    </li>
                  </ul>
                </div>

                <div className="bg-infinite-silver-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Data Localization</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>EU data</strong> primarily stored in EU
                    </li>
                    <li>
                      • <strong>US data</strong> primarily stored in US
                    </li>
                    <li>
                      • <strong>Regional preferences</strong> respected
                    </li>
                    <li>
                      • <strong>Compliance</strong> with local laws
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact-privacy"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <Mail className="w-8 h-8" />
              Privacy Contact Information
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-infinite-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Privacy Team</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-infinite-blue-600" />
                      <span>privacy@infinitestorage.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-infinite-blue-600" />
                      <span>+1 (555) 123-PRIVACY</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-infinite-blue-600" />
                      <span>24/7 Privacy Support</span>
                    </div>
                  </div>
                </div>

                <div className="bg-infinite-silver-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Data Protection Officer</h3>
                  <p className="mb-4">For GDPR-related inquiries and data protection matters:</p>
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong> dpo@infinitestorage.com
                    </p>
                    <p>
                      <strong>Response Time:</strong> Within 30 days
                    </p>
                    <p>
                      <strong>Languages:</strong> English, Spanish, French, German
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Quick Actions</h3>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-infinite-blue-500 text-white rounded-full font-semibold hover:bg-infinite-blue-600 transition-colors"
                  >
                    Contact Privacy Team
                  </Link>
                  <button className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors">
                    Request Data Export
                  </button>
                  <button className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors">
                    Delete My Account
                  </button>
                </div>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* Legal Notice */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-6 text-center">
            <p className="text-infinite-silver-600 text-sm">
              <strong>Legal Notice:</strong> This privacy policy should be reviewed by qualified legal counsel before
              implementation. Laws vary by jurisdiction and this template may not cover all requirements.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-infinite-silver-500">
              <span>© 2024 Infinite Storage</span>
              <span>•</span>
              <Link href="/terms" className="hover:text-infinite-blue-500">
                Terms of Service
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-infinite-blue-500">
                Contact Us
              </Link>
            </div>
          </GlassmorphicContainer>
        </motion.section>
      </div>
    </div>
  )
}
