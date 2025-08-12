"use client"

import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Calendar,
  Clock,
  User,
  TrendingUp,
  Star,
  Eye,
  Search,
  Filter,
  ArrowRight,
  BookOpen,
  Zap,
  Award,
  BarChart3,
  Shield,
  Code,
  Users,
  DollarSign,
  Database,
  Globe,
  Cpu,
  Lock,
  Rocket,
  Settings,
  FileText,
  Download,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

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

// Blog post data with comprehensive SEO content
const featuredPosts = [
  {
    id: "ai-prompt-to-reality-blueprint",
    title: "From AI Prompt to Reality: The Complete Technical Blueprint Behind Infinite Storage",
    excerpt:
      "The original AI project brief that sparked Infinite Storage. See the exact technical specifications, revenue models, and architectural decisions that transformed a theoretical concept into the world's most revolutionary storage platform.",
    author: "Technical Architecture Team",
    date: "2024-01-25",
    readTime: "15 min read",
    views: "125K",
    category: "Technical Deep Dives",
    tags: ["Architecture", "AI", "Blueprint", "Technical Specs"],
    featured: true,
    trending: true,
    image: "/blog/ai-prompt-blueprint.jpg",
  },
  {
    id: "eureka-moment-unlimited-storage-discovery",
    title: "The Eureka Moment: How We Discovered the Secret to Unlimited Free Storage",
    excerpt:
      "The breakthrough came at 3 AM in a cramped garage. After months of failed attempts, our founder had an epiphany that changed everything. The untold story of how Infinite Storage was born from one revolutionary insight.",
    author: "Infinite Storage Founder & CEO",
    date: "2024-01-25",
    readTime: "12 min read",
    views: "98K",
    category: "Platform Economics",
    tags: ["Origin Story", "Innovation", "Breakthrough", "Entrepreneurship"],
    featured: true,
    image: "/blog/eureka-moment.jpg",
  },
  {
    id: "decentralized-network-technical-architecture",
    title: "How Infinite Storage's Decentralized Network Actually Works: Complete Technical Architecture",
    excerpt:
      "Deep dive into the revolutionary peer-to-peer storage system that provides unlimited free storage. Learn how file chunking, triple redundancy, automatic recovery, and economic incentives create a self-sustaining storage network.",
    author: "Technical Architecture Team",
    date: "2024-01-25",
    readTime: "18 min read",
    views: "87K",
    category: "Technical Deep Dives",
    tags: ["Decentralized", "P2P", "Architecture", "Network"],
    featured: true,
    image: "/blog/decentralized-architecture.jpg",
  },
]

const allPosts = [
  ...featuredPosts,
  {
    id: "four-revenue-streams-economic-model",
    title: "The Four Revenue Streams: How Infinite Storage Creates Value Without Charging Users",
    excerpt:
      "Explore the innovative economic model that makes unlimited free storage possible. From API services to content marketplace, discover how multiple revenue streams benefit users, storage keepers, and the platform simultaneously.",
    author: "Economics & Strategy Team",
    date: "2024-01-24",
    readTime: "14 min read",
    views: "76K",
    category: "Platform Economics",
    tags: ["Revenue Model", "Economics", "Business Strategy", "Sustainability"],
    image: "/blog/revenue-streams.jpg",
  },
  {
    id: "storage-keeper-economics-guide",
    title: "Storage Keeper Economics: How Users Earn Money by Sharing Unused Space",
    excerpt:
      "Detailed analysis of the storage keeper system - how users contribute unused storage space and earn money through content marketplace sales, API usage, and direct storage deals. Complete guide to maximizing earnings.",
    author: "Storage Keeper Success Team",
    date: "2024-01-23",
    readTime: "16 min read",
    views: "92K",
    category: "Storage Keeper Guide",
    tags: ["Earnings", "Storage Keeper", "Passive Income", "Guide"],
    image: "/blog/storage-keeper-economics.jpg",
  },
  {
    id: "zero-knowledge-encryption-deep-dive",
    title: "Zero-Knowledge Encryption: How We Protect Your Data Without Seeing It",
    excerpt:
      "Technical deep-dive into our zero-knowledge encryption system. Learn how files are encrypted client-side, how storage keepers can't access your private data, and why this approach is superior to traditional cloud storage.",
    author: "Security & Encryption Team",
    date: "2024-01-22",
    readTime: "20 min read",
    views: "68K",
    category: "Security & Privacy",
    tags: ["Encryption", "Security", "Privacy", "Zero-Knowledge"],
    image: "/blog/zero-knowledge-encryption.jpg",
  },
  {
    id: "marketplace-creator-success-stories",
    title: "From Zero to $10K: Digital Creator Success Stories on Infinite Storage Marketplace",
    excerpt:
      "Real stories from creators who built successful businesses selling digital content on our marketplace. Learn their strategies, earnings breakdowns, and tips for maximizing revenue with unlimited storage.",
    author: "Creator Success Team",
    date: "2024-01-21",
    readTime: "13 min read",
    views: "84K",
    category: "Marketplace Technology",
    tags: ["Success Stories", "Creators", "Marketplace", "Revenue"],
    image: "/blog/creator-success-stories.jpg",
  },
  {
    id: "api-integration-developer-guide",
    title: "Building with Infinite Storage API: Complete Developer Integration Guide",
    excerpt:
      "Comprehensive guide for developers integrating unlimited storage into their applications. Code examples, best practices, rate limits, authentication, and real-world implementation strategies.",
    author: "Developer Relations Team",
    date: "2024-01-20",
    readTime: "25 min read",
    views: "45K",
    category: "Developer Resources",
    tags: ["API", "Development", "Integration", "Code Examples"],
    image: "/blog/api-developer-guide.jpg",
  },
  {
    id: "network-performance-benchmarks",
    title: "Performance Benchmarks: How Infinite Storage Compares to Traditional Cloud Providers",
    excerpt:
      "Comprehensive performance analysis comparing Infinite Storage to Google Drive, Dropbox, OneDrive, and other major providers. Upload speeds, download speeds, reliability metrics, and cost analysis.",
    author: "Performance Engineering Team",
    date: "2024-01-19",
    readTime: "17 min read",
    views: "71K",
    category: "System Reliability",
    tags: ["Performance", "Benchmarks", "Comparison", "Speed"],
    image: "/blog/performance-benchmarks.jpg",
  },
]

const categories = [
  { name: "Technical Deep Dives", count: 15, icon: <Code className="w-5 h-5" />, color: "bg-blue-100 text-blue-700" },
  {
    name: "Platform Economics",
    count: 12,
    icon: <BarChart3 className="w-5 h-5" />,
    color: "bg-green-100 text-green-700",
  },
  { name: "Data Reliability", count: 8, icon: <Shield className="w-5 h-5" />, color: "bg-purple-100 text-purple-700" },
  { name: "Security & Privacy", count: 10, icon: <Lock className="w-5 h-5" />, color: "bg-red-100 text-red-700" },
  {
    name: "Storage Keeper Guide",
    count: 14,
    icon: <Users className="w-5 h-5" />,
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "System Reliability",
    count: 9,
    icon: <Database className="w-5 h-5" />,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    name: "Marketplace Technology",
    count: 11,
    icon: <DollarSign className="w-5 h-5" />,
    color: "bg-yellow-100 text-yellow-700",
  },
  { name: "Developer Resources", count: 13, icon: <Cpu className="w-5 h-5" />, color: "bg-teal-100 text-teal-700" },
  { name: "Network Management", count: 7, icon: <Globe className="w-5 h-5" />, color: "bg-pink-100 text-pink-700" },
  { name: "Client Technology", count: 6, icon: <Settings className="w-5 h-5" />, color: "bg-gray-100 text-gray-700" },
]

export default function BlogPageClient() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-infinite-blue-700 mb-6 drop-shadow-lg">
          Infinite Storage Blog
        </h1>
        <p className="text-xl md:text-2xl text-infinite-silver-700 max-w-4xl mx-auto mb-8">
          Inside story of the <strong>unlimited free storage revolution</strong>. Get exclusive insights into
          decentralized storage technology, success stories of users earning thousands, and the future of data
          ownership.
        </p>

        {/* Blog Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-infinite-silver-600">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-infinite-blue-500" />
            <span className="font-semibold">50+ Technical Articles</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-infinite-blue-500" />
            <span className="font-semibold">500K+ Monthly Readers</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-infinite-blue-500" />
            <span className="font-semibold">Industry-Leading Analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-infinite-blue-500" />
            <span className="font-semibold">Expert Contributors</span>
          </div>
        </div>

        {/* Newsletter Signup */}
        <GlassmorphicContainer className="max-w-2xl mx-auto p-6">
          <h3 className="text-2xl font-bold text-infinite-blue-700 mb-4">Get Exclusive Storage Technology Insights</h3>
          <p className="text-infinite-silver-700 mb-4">
            Join 50,000+ developers, entrepreneurs, and tech enthusiasts getting weekly insights into decentralized
            storage, earning strategies, and industry analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Enter your email for exclusive insights"
              className="flex-1 bg-white/40 border-white/60"
            />
            <Button className="bg-infinite-blue-500 hover:bg-infinite-blue-600 text-white px-8">
              <Mail className="w-4 h-4 mr-2" />
              Subscribe Free
            </Button>
          </div>
        </GlassmorphicContainer>
      </motion.section>

      {/* Search and Filter */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <GlassmorphicContainer className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-infinite-silver-500 w-5 h-5" />
              <Input
                placeholder="Search unlimited storage insights, technical guides, success stories..."
                className="pl-10 bg-white/40 border-white/60"
              />
            </div>
            <Button variant="outline" className="bg-white/40 border-white/60">
              <Filter className="w-4 h-4 mr-2" />
              Filter by Category
            </Button>
          </div>
        </GlassmorphicContainer>
      </motion.section>

      {/* Featured Posts */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-8">
          <Star className="w-8 h-8 text-yellow-500 fill-current" />
          <h2 className="text-4xl font-bold text-infinite-blue-700">Featured Articles</h2>
          <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">
            <TrendingUp className="w-4 h-4 mr-1" />
            Trending
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassmorphicContainer className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-infinite-blue-500 to-infinite-blue-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    {post.featured && (
                      <Badge className="bg-yellow-500 text-white border-0">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Featured
                      </Badge>
                    )}
                    {post.trending && (
                      <Badge className="bg-red-500 text-white border-0">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">{post.category}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-infinite-blue-700 mb-3 line-clamp-2 hover:text-infinite-blue-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <p className="text-infinite-silver-700 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-infinite-silver-600 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-infinite-silver-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>

                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-infinite-blue-50 text-infinite-blue-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </GlassmorphicContainer>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Categories */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-infinite-blue-500" />
          <h2 className="text-4xl font-bold text-infinite-blue-700">Browse by Category</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <GlassmorphicContainer className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${category.color} group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-infinite-blue-700 text-sm group-hover:text-infinite-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-infinite-silver-600">{category.count} articles</p>
                  </div>
                </div>
              </GlassmorphicContainer>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* All Posts */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-infinite-blue-500" />
            <h2 className="text-4xl font-bold text-infinite-blue-700">Latest Insights</h2>
          </div>
          <Button variant="outline" className="bg-white/40 border-white/60">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.slice(3).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassmorphicContainer className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-infinite-silver-400 to-infinite-silver-600 relative">
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">{post.category}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-infinite-blue-700 mb-3 line-clamp-2 hover:text-infinite-blue-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <p className="text-infinite-silver-700 mb-4 line-clamp-2 text-sm">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-infinite-silver-600 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-infinite-blue-50 text-infinite-blue-700"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </GlassmorphicContainer>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <GlassmorphicContainer className="p-8 text-center">
          <Rocket className="w-16 h-16 text-infinite-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-infinite-blue-700 mb-4">
            Ready to Experience Unlimited Free Storage?
          </h2>
          <p className="text-xl text-infinite-silver-700 mb-8 max-w-2xl mx-auto">
            Join over 1 million users who have discovered the future of cloud storage. Get unlimited space, earn money
            as a storage keeper, and access our digital marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-infinite-blue-500 hover:bg-infinite-blue-600 text-white px-8 py-3" asChild>
              <Link href="/download">
                <Download className="w-5 h-5 mr-2" />
                Get Unlimited Storage Free
              </Link>
            </Button>
            <Button variant="outline" className="bg-white/40 border-white/60 px-8 py-3" asChild>
              <Link href="/storage-keepers">
                <DollarSign className="w-5 h-5 mr-2" />
                Start Earning Money
              </Link>
            </Button>
          </div>
        </GlassmorphicContainer>
      </motion.section>
    </div>
  )
}
