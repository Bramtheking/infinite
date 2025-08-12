"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Scale, FileText, CreditCard, Shield, Users, AlertTriangle, Gavel, Mail } from "lucide-react"
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

export default function TermsPageClient() {
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
          Terms of Service - User Agreement
        </h1>
        <p className="text-xl text-infinite-silver-700 max-w-4xl mx-auto mb-4">
          Welcome to <strong>Infinite Storage</strong> - the world's first{" "}
          <strong>unlimited free storage platform</strong>. These terms govern your use of our{" "}
          <strong>decentralized storage network</strong>,<strong>Storage Keeper program</strong>, and{" "}
          <strong>content marketplace</strong>. By using our service, you agree to these terms and join our
          revolutionary storage ecosystem.
        </p>
        <div className="flex items-center justify-center gap-4 text-infinite-silver-600 text-sm">
          <span>Last Updated: January 25, 2024</span>
          <span>•</span>
          <span>Effective Date: January 25, 2024</span>
          <span>•</span>
          <span>Version 2.1</span>
        </div>
      </motion.header>

      {/* Table of Contents */}
      <motion.nav
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12"
        aria-label="Terms of Service Navigation"
      >
        <GlassmorphicContainer className="p-8">
          <h2 className="text-2xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Terms of Service Contents
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "#acceptance-eligibility", title: "Acceptance & Eligibility", icon: "✅" },
              { href: "#service-description", title: "Service Description", icon: "🌐" },
              { href: "#user-responsibilities", title: "User Responsibilities", icon: "👤" },
              { href: "#payment-terms", title: "Payment Terms", icon: "💳" },
              { href: "#intellectual-property", title: "Intellectual Property", icon: "©️" },
              { href: "#limitation-liability", title: "Limitation of Liability", icon: "⚖️" },
              { href: "#termination", title: "Termination", icon: "🚪" },
              { href: "#dispute-resolution", title: "Dispute Resolution", icon: "🤝" },
              { href: "#contact-legal", title: "Legal Contact", icon: "📧" },
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
        {/* Acceptance & Eligibility */}
        <motion.section
          id="acceptance-eligibility"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8" />
              Acceptance of Terms & Eligibility
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <div className="bg-infinite-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Agreement to Terms</h3>
                <p className="mb-4">
                  By accessing or using <strong>Infinite Storage</strong>, you agree to be bound by these Terms of
                  Service and our Privacy Policy. If you disagree with any part of these terms, you may not access the
                  service.
                </p>
                <ul className="space-y-2">
                  <li>
                    • These terms constitute a <strong>legally binding agreement</strong>
                  </li>
                  <li>• You must read and understand all terms before using the service</li>
                  <li>• Continued use indicates ongoing acceptance of terms</li>
                  <li>• Updates to terms will be communicated with 30 days notice</li>
                </ul>
              </div>

              <div className="bg-infinite-silver-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Eligibility Requirements</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-infinite-silver-800 mb-2">General Users</h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • Must be at least <strong>13 years old</strong>
                      </li>
                      <li>• Must provide accurate registration information</li>
                      <li>• Must have legal capacity to enter contracts</li>
                      <li>• Must comply with local laws and regulations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-infinite-silver-800 mb-2">Storage Keepers</h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • Must be at least <strong>18 years old</strong>
                      </li>
                      <li>• Must have reliable internet connection</li>
                      <li>• Must provide valid payment information</li>
                      <li>• Must meet minimum storage requirements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-red-800 mb-3">🚫 Prohibited Users</h3>
                <p className="text-red-700">
                  You may not use Infinite Storage if you are located in a country subject to US embargo, or if you are
                  listed on any US government list of prohibited or restricted parties.
                </p>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* Service Description */}
        <motion.section
          id="service-description"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <Users className="w-8 h-8" />
              Service Description
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <p className="text-lg">
                <strong>Infinite Storage</strong> provides a <strong>decentralized storage network</strong> that offers
                <strong> unlimited free storage</strong> through innovative peer-to-peer technology and economic
                incentives.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-infinite-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Core Storage Service</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Unlimited free storage</strong> for all users
                    </li>
                    <li>
                      • <strong>File encryption</strong> and secure transmission
                    </li>
                    <li>
                      • <strong>Cross-platform access</strong> (Windows, Android, Web)
                    </li>
                    <li>
                      • <strong>Automatic backup</strong> and synchronization
                    </li>
                    <li>
                      • <strong>File sharing</strong> and collaboration tools
                    </li>
                  </ul>
                </div>

                <div className="bg-infinite-silver-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Storage Keeper Network</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Earn money</strong> by providing storage space
                    </li>
                    <li>
                      • <strong>Decentralized infrastructure</strong> participation
                    </li>
                    <li>
                      • <strong>Content access</strong> for public files
                    </li>
                    <li>
                      • <strong>Revenue sharing</strong> from platform services
                    </li>
                    <li>
                      • <strong>Flexible participation</strong> options
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-3">Content Marketplace</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Buy and sell</strong> digital content
                    </li>
                    <li>
                      • <strong>Creator monetization</strong> platform
                    </li>
                    <li>
                      • <strong>Secure transactions</strong> and payments
                    </li>
                    <li>
                      • <strong>Content discovery</strong> and browsing
                    </li>
                    <li>
                      • <strong>Digital rights</strong> management
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Service Availability</h3>
                <p className="text-yellow-700">
                  While we strive for 99.99% uptime, Infinite Storage is provided "as is" and we cannot guarantee
                  uninterrupted service. We may temporarily suspend service for maintenance, updates, or security
                  reasons.
                </p>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* User Responsibilities */}
        <motion.section
          id="user-responsibilities"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8" />
              User Responsibilities
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-infinite-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Account Security</h3>
                  <ul className="space-y-2">
                    <li>
                      • Maintain <strong>strong, unique passwords</strong>
                    </li>
                    <li>
                      • Enable <strong>two-factor authentication</strong>
                    </li>
                    <li>
                      • Keep login credentials <strong>confidential</strong>
                    </li>
                    <li>
                      • Report suspicious activity <strong>immediately</strong>
                    </li>
                    <li>
                      • Update contact information <strong>promptly</strong>
                    </li>
                  </ul>
                </div>

                <div className="bg-infinite-silver-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Acceptable Use</h3>
                  <ul className="space-y-2">
                    <li>
                      • Use service for <strong>lawful purposes only</strong>
                    </li>
                    <li>
                      • Respect <strong>intellectual property rights</strong>
                    </li>
                    <li>
                      • No harassment, abuse, or <strong>harmful content</strong>
                    </li>
                    <li>
                      • No attempts to <strong>compromise security</strong>
                    </li>
                    <li>
                      • Follow <strong>community guidelines</strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-red-800 mb-3">🚫 Prohibited Content & Activities</h3>
                <div className="grid md:grid-cols-2 gap-4 text-red-700">
                  <div>
                    <h4 className="font-bold mb-2">Prohibited Content:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Illegal, harmful, or offensive material</li>
                      <li>• Copyrighted content without permission</li>
                      <li>• Malware, viruses, or malicious code</li>
                      <li>• Personal information of others</li>
                      <li>• Content that violates privacy rights</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Prohibited Activities:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Reverse engineering or hacking attempts</li>
                      <li>• Creating multiple accounts to abuse service</li>
                      <li>• Interfering with other users' access</li>
                      <li>• Commercial use without authorization</li>
                      <li>• Automated data collection or scraping</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-infinite-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Content Responsibility</h3>
                <p className="mb-4">
                  You are solely responsible for all content you upload, store, or share through Infinite Storage. You
                  represent and warrant that you have all necessary rights to your content.
                </p>
                <ul className="space-y-2">
                  <li>
                    • You retain <strong>ownership</strong> of your content
                  </li>
                  <li>
                    • You grant us <strong>limited license</strong> to provide the service
                  </li>
                  <li>
                    • You're responsible for <strong>backup copies</strong> of important data
                  </li>
                  <li>
                    • You must comply with <strong>applicable laws</strong> in your jurisdiction
                  </li>
                </ul>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* Payment Terms */}
        <motion.section
          id="payment-terms"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <CreditCard className="w-8 h-8" />
              Payment Terms & Billing
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-green-800 mb-3">🆓 Free Service</h3>
                <p className="text-green-700">
                  <strong>Infinite Storage is completely free</strong> for all users. There are no hidden fees,
                  subscription charges, or storage limits. Our decentralized model makes unlimited free storage
                  possible.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-infinite-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Premium Services (Optional)</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Private encryption:</strong> Enhanced privacy features
                    </li>
                    <li>
                      • <strong>Priority support:</strong> Faster response times
                    </li>
                    <li>
                      • <strong>Advanced analytics:</strong> Detailed usage insights
                    </li>
                    <li>
                      • <strong>API access:</strong> Developer integration tools
                    </li>
                    <li>
                      • <strong>Custom branding:</strong> White-label solutions
                    </li>
                  </ul>
                  <p className="mt-4 text-sm">
                    <strong>Pricing:</strong> Starting at $9.99/month, billed monthly or annually
                  </p>
                </div>

                <div className="bg-infinite-silver-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Storage Keeper Payments</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Monthly payouts:</strong> Earnings paid by 5th of each month
                    </li>
                    <li>
                      • <strong>Minimum threshold:</strong> $10 minimum for payout
                    </li>
                    <li>
                      • <strong>Payment methods:</strong> PayPal, bank transfer, crypto
                    </li>
                    <li>
                      • <strong>Tax responsibility:</strong> You're responsible for taxes
                    </li>
                    <li>
                      • <strong>Earnings tracking:</strong> Real-time dashboard available
                    </li>
                  </ul>
                  <p className="mt-4 text-sm">
                    <strong>Average earnings:</strong> $50-500/month depending on storage contribution
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Billing & Refunds</h3>
                <div className="text-yellow-700">
                  <p className="mb-4">
                    For premium services, billing occurs monthly or annually based on your selection. All sales are
                    final, but you may cancel anytime.
                  </p>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Cancellation:</strong> Cancel anytime, service continues until period end
                    </li>
                    <li>
                      • <strong>Refunds:</strong> Pro-rated refunds for annual plans within 30 days
                    </li>
                    <li>
                      • <strong>Price changes:</strong> 30 days notice for any price increases
                    </li>
                    <li>
                      • <strong>Failed payments:</strong> Service suspended after 7 days
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* Intellectual Property */}
        <motion.section
          id="intellectual-property"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8" />
              Intellectual Property Rights
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-infinite-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Your Content Rights</h3>
                  <ul className="space-y-2">
                    <li>
                      • You <strong>retain full ownership</strong> of your content
                    </li>
                    <li>
                      • You control <strong>access and sharing</strong> permissions
                    </li>
                    <li>
                      • You can <strong>delete content</strong> at any time
                    </li>
                    <li>
                      • You're responsible for <strong>copyright compliance</strong>
                    </li>
                    <li>
                      • You grant us <strong>limited license</strong> to provide service
                    </li>
                  </ul>
                </div>

                <div className="bg-infinite-silver-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Our Platform Rights</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Infinite Storage</strong> trademark and branding
                    </li>
                    <li>
                      • <strong>Software and technology</strong> proprietary rights
                    </li>
                    <li>
                      • <strong>Platform design</strong> and user interface
                    </li>
                    <li>
                      • <strong>Documentation</strong> and educational materials
                    </li>
                    <li>
                      • <strong>API and integration</strong> technologies
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-red-800 mb-3">🚫 Copyright Infringement Policy</h3>
                <div className="text-red-700">
                  <p className="mb-4">
                    We respect intellectual property rights and comply with the Digital Millennium Copyright Act (DMCA).
                    If you believe your copyright has been infringed:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      • Send a <strong>DMCA takedown notice</strong> to dmca@infinitestorage.com
                    </li>
                    <li>
                      • Include <strong>specific identification</strong> of copyrighted work
                    </li>
                    <li>
                      • Provide <strong>contact information</strong> and good faith statement
                    </li>
                    <li>
                      • We'll investigate and respond <strong>within 24-48 hours</strong>
                    </li>
                    <li>
                      • Repeat infringers will have <strong>accounts terminated</strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-infinite-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">License Grant to Us</h3>
                <p className="mb-4">
                  By uploading content, you grant Infinite Storage a limited, non-exclusive, royalty-free license to:
                </p>
                <ul className="space-y-2">
                  <li>
                    • <strong>Store and transmit</strong> your content through our network
                  </li>
                  <li>
                    • <strong>Create backups</strong> and ensure data redundancy
                  </li>
                  <li>
                    • <strong>Display content</strong> as directed by your sharing settings
                  </li>
                  <li>
                    • <strong>Provide technical support</strong> and troubleshooting
                  </li>
                  <li>
                    • <strong>Improve our service</strong> through anonymized analytics
                  </li>
                </ul>
                <p className="mt-4 text-sm font-medium">
                  This license terminates when you delete content or close your account.
                </p>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* Limitation of Liability */}
        <motion.section
          id="limitation-liability"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8" />
              Limitation of Liability & Disclaimers
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-red-800 mb-3">⚠️ Service Disclaimers</h3>
                <div className="text-red-700">
                  <p className="mb-4">
                    <strong>INFINITE STORAGE IS PROVIDED "AS IS" AND "AS AVAILABLE"</strong> without warranties of any
                    kind, either express or implied.
                  </p>
                  <ul className="space-y-2">
                    <li>
                      • We <strong>do not guarantee</strong> uninterrupted or error-free service
                    </li>
                    <li>
                      • We <strong>cannot ensure</strong> complete security against all threats
                    </li>
                    <li>
                      • We <strong>are not responsible</strong> for third-party content or actions
                    </li>
                    <li>
                      • We <strong>disclaim warranties</strong> of merchantability and fitness
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-infinite-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Liability Limitations</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Maximum liability:</strong> $100 or fees paid in last 12 months
                    </li>
                    <li>
                      • <strong>No consequential damages:</strong> Lost profits, data, or business
                    </li>
                    <li>
                      • <strong>No indirect damages:</strong> Punitive or exemplary damages
                    </li>
                    <li>
                      • <strong>Time limit:</strong> Claims must be filed within 1 year
                    </li>
                  </ul>
                </div>

                <div className="bg-infinite-silver-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Your Responsibilities</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Backup important data:</strong> We're not your only backup
                    </li>
                    <li>
                      • <strong>Use appropriate security:</strong> Strong passwords, 2FA
                    </li>
                    <li>
                      • <strong>Monitor your account:</strong> Report issues promptly
                    </li>
                    <li>
                      • <strong>Comply with terms:</strong> Follow all service agreements
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">⚖️ Indemnification</h3>
                <p className="text-yellow-700">
                  You agree to indemnify and hold harmless Infinite Storage from any claims, damages, or expenses
                  arising from your use of the service, violation of these terms, or infringement of third-party rights.
                </p>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* Termination */}
        <motion.section
          id="termination"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <Gavel className="w-8 h-8" />
              Account Termination
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-infinite-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Termination by You</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Cancel anytime:</strong> No penalties or fees
                    </li>
                    <li>
                      • <strong>Data export:</strong> Download your files before closing
                    </li>
                    <li>
                      • <strong>30-day grace period:</strong> Account recoverable for 30 days
                    </li>
                    <li>
                      • <strong>Permanent deletion:</strong> All data removed after grace period
                    </li>
                    <li>
                      • <strong>Storage Keeper earnings:</strong> Final payout processed
                    </li>
                  </ul>
                </div>

                <div className="bg-infinite-silver-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Termination by Us</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Terms violation:</strong> Immediate suspension possible
                    </li>
                    <li>
                      • <strong>Illegal activity:</strong> Account terminated without notice
                    </li>
                    <li>
                      • <strong>Abuse or harassment:</strong> Zero tolerance policy
                    </li>
                    <li>
                      • <strong>Non-payment:</strong> Premium services suspended
                    </li>
                    <li>
                      • <strong>Inactive accounts:</strong> Deleted after 2 years of inactivity
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-red-800 mb-3">🚨 Immediate Termination Reasons</h3>
                <div className="text-red-700">
                  <p className="mb-4">We may immediately terminate accounts for:</p>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Illegal content:</strong> Child exploitation, terrorism, etc.
                    </li>
                    <li>
                      • <strong>Security threats:</strong> Malware distribution, hacking attempts
                    </li>
                    <li>
                      • <strong>Copyright infringement:</strong> Repeated DMCA violations
                    </li>
                    <li>
                      • <strong>Platform abuse:</strong> Attempts to compromise our systems
                    </li>
                    <li>
                      • <strong>Fraudulent activity:</strong> False information, payment fraud
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">✅ Account Recovery Process</h3>
                <p className="text-green-700 mb-4">
                  If your account is suspended or terminated, you may appeal the decision:
                </p>
                <ul className="space-y-2 text-green-700">
                  <li>
                    • <strong>Contact support:</strong> Email appeals@infinitestorage.com
                  </li>
                  <li>
                    • <strong>Provide explanation:</strong> Detail why termination was incorrect
                  </li>
                  <li>
                    • <strong>Review process:</strong> We'll investigate within 5 business days
                  </li>
                  <li>
                    • <strong>Final decision:</strong> Our decision on appeals is final
                  </li>
                </ul>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* Dispute Resolution */}
        <motion.section
          id="dispute-resolution"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8" />
              Dispute Resolution & Governing Law
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <div className="bg-infinite-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Governing Law</h3>
                <p className="mb-4">
                  These Terms of Service are governed by the laws of <strong>[Your State/Country]</strong>, without
                  regard to conflict of law principles.
                </p>
                <ul className="space-y-2">
                  <li>
                    • <strong>Jurisdiction:</strong> Courts of [Your City, State/Country]
                  </li>
                  <li>
                    • <strong>Applicable law:</strong> [State/Country] law governs all disputes
                  </li>
                  <li>
                    • <strong>Language:</strong> English is the controlling language
                  </li>
                  <li>
                    • <strong>Severability:</strong> Invalid provisions don't affect remaining terms
                  </li>
                </ul>
              </div>

              <div className="bg-infinite-silver-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Dispute Resolution Process</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-infinite-silver-800 mb-2">1. Direct Communication</h4>
                    <p className="text-sm">
                      Contact our support team first. Most issues can be resolved quickly through direct communication.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-infinite-silver-800 mb-2">2. Mediation</h4>
                    <p className="text-sm">
                      If direct communication fails, we'll attempt mediation through a neutral third party.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-infinite-silver-800 mb-2">3. Binding Arbitration</h4>
                    <p className="text-sm">
                      Final disputes will be resolved through binding arbitration under [Arbitration Rules].
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">⚖️ Class Action Waiver</h3>
                <p className="text-yellow-700">
                  You agree to resolve disputes individually and waive the right to participate in class actions,
                  collective actions, or representative proceedings against Infinite Storage.
                </p>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* Changes to Terms */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8" />
              Changes to Terms of Service
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <div className="bg-infinite-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">How We Update Terms</h3>
                <ul className="space-y-2">
                  <li>
                    • <strong>30 days notice:</strong> Major changes announced in advance
                  </li>
                  <li>
                    • <strong>Email notification:</strong> Sent to all registered users
                  </li>
                  <li>
                    • <strong>Website posting:</strong> Updated terms posted prominently
                  </li>
                  <li>
                    • <strong>Version tracking:</strong> All changes documented with dates
                  </li>
                  <li>
                    • <strong>Continued use:</strong> Constitutes acceptance of new terms
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Your Options</h3>
                <p className="text-green-700 mb-4">If you disagree with updated terms, you may:</p>
                <ul className="space-y-2 text-green-700">
                  <li>
                    • <strong>Close your account</strong> before the effective date
                  </li>
                  <li>
                    • <strong>Export your data</strong> and discontinue service use
                  </li>
                  <li>
                    • <strong>Contact us</strong> with specific concerns or questions
                  </li>
                </ul>
              </div>
            </div>
          </GlassmorphicContainer>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact-legal"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicContainer className="p-8">
            <h2 className="text-3xl font-bold text-infinite-blue-700 mb-6 flex items-center gap-3">
              <Mail className="w-8 h-8" />
              Legal Contact Information
            </h2>
            <div className="space-y-6 text-infinite-silver-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-infinite-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-blue-800 mb-3">Legal Department</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-infinite-blue-600" />
                      <span>legal@infinitestorage.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-infinite-blue-600" />
                      <span>DMCA: dmca@infinitestorage.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Scale className="w-5 h-5 text-infinite-blue-600" />
                      <span>Appeals: appeals@infinitestorage.com</span>
                    </div>
                  </div>
                </div>

                <div className="bg-infinite-silver-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-infinite-silver-800 mb-3">Business Information</h3>
                  <div className="space-y-2">
                    <p>
                      <strong>Company:</strong> Infinite Storage, Inc.
                    </p>
                    <p>
                      <strong>Address:</strong> [Your Business Address]
                    </p>
                    <p>
                      <strong>Registration:</strong> [Business Registration Number]
                    </p>
                    <p>
                      <strong>Tax ID:</strong> [Tax Identification Number]
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Quick Legal Actions</h3>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-infinite-blue-500 text-white rounded-full font-semibold hover:bg-infinite-blue-600 transition-colors"
                  >
                    Contact Legal Team
                  </Link>
                  <button className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors">
                    Report Copyright Infringement
                  </button>
                  <button className="px-6 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition-colors">
                    Appeal Account Action
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
            <p className="text-infinite-silver-600 text-sm mb-4">
              <strong>Legal Notice:</strong> These terms of service should be reviewed by qualified legal counsel before
              implementation. Laws vary by jurisdiction and this template may not cover all requirements.
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-infinite-silver-500">
              <span>© 2024 Infinite Storage, Inc.</span>
              <span>•</span>
              <Link href="/privacy" className="hover:text-infinite-blue-500">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-infinite-blue-500">
                Contact Us
              </Link>
              <span>•</span>
              <span>Version 2.1</span>
            </div>
          </GlassmorphicContainer>
        </motion.section>
      </div>
    </div>
  )
}
