import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Infinity } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://infinitestorage.com"),
  title: {
    default: "Infinite Storage - World's First Unlimited Free Cloud Storage Platform | Store Files Forever",
    template: "%s | Infinite Storage - Unlimited Free Cloud Storage Platform",
  },
  description:
    "Get unlimited free cloud storage forever with Infinite Storage - the revolutionary decentralized storage network. Store unlimited files, earn money as storage keeper, access digital marketplace. No limits, no fees, infinite possibilities. Join 1M+ users storing petabytes of data.",
  keywords: [
    // Primary keywords
    "unlimited free cloud storage",
    "infinite storage",
    "free cloud storage unlimited",
    "unlimited storage free",
    "free unlimited cloud storage",
    "unlimited cloud storage free",
    "infinite cloud storage",
    "free storage unlimited",

    // Decentralized storage keywords
    "decentralized storage",
    "decentralized cloud storage",
    "peer to peer storage",
    "distributed storage network",
    "blockchain storage",
    "decentralized file storage",
    "p2p storage network",
    "distributed cloud storage",

    // Storage keeper keywords
    "earn money storage",
    "storage keeper",
    "monetize storage space",
    "earn from unused storage",
    "storage sharing income",
    "passive income storage",
    "storage space rental",
    "earn money hosting files",

    // Marketplace keywords
    "digital content marketplace",
    "content marketplace",
    "digital marketplace",
    "sell digital content",
    "buy digital files",
    "digital asset marketplace",
    "content creator platform",
    "digital goods marketplace",

    // Technical keywords
    "zero knowledge encryption",
    "file encryption storage",
    "secure cloud storage",
    "private cloud storage",
    "encrypted file storage",
    "secure file sharing",
    "privacy focused storage",
    "anonymous file storage",

    // Comparison keywords
    "google drive alternative",
    "dropbox alternative",
    "onedrive alternative",
    "icloud alternative",
    "free dropbox alternative",
    "unlimited google drive",
    "better than dropbox",
    "replace google drive",

    // Use case keywords
    "backup files free",
    "file backup unlimited",
    "photo storage unlimited",
    "video storage unlimited",
    "document storage free",
    "media storage unlimited",
    "file sync unlimited",
    "cloud backup free",

    // Long-tail keywords
    "how to get unlimited cloud storage free",
    "best free unlimited cloud storage",
    "unlimited cloud storage no limits",
    "free cloud storage that never expires",
    "earn money sharing storage space",
    "decentralized storage platform",
    "blockchain based storage",
    "peer to peer file sharing",
  ],
  authors: [{ name: "Infinite Storage Team" }],
  creator: "Infinite Storage",
  publisher: "Infinite Storage",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://infinitestorage.com",
    siteName: "Infinite Storage - Unlimited Free Cloud Storage",
    title: "Infinite Storage - World's First Unlimited Free Cloud Storage Platform",
    description:
      "Revolutionary decentralized storage platform offering unlimited free cloud storage forever. Store unlimited files, earn money as storage keeper, access digital marketplace. Join 1M+ users with petabytes stored.",
    images: [
      {
        url: "/og-image-main.jpg",
        width: 1200,
        height: 630,
        alt: "Infinite Storage - Unlimited Free Cloud Storage Platform",
      },
      {
        url: "/og-image-features.jpg",
        width: 1200,
        height: 630,
        alt: "Unlimited Storage Features - Decentralized Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinite Storage - World's First Unlimited Free Cloud Storage Platform",
    description:
      "Get unlimited free cloud storage forever. Revolutionary decentralized platform. Store unlimited files, earn money, access marketplace. Join 1M+ users.",
    images: ["/twitter-image-main.jpg"],
    creator: "@InfiniteStorage",
    site: "@InfiniteStorage",
  },
  alternates: {
    canonical: "https://infinitestorage.com",
    languages: {
      "en-US": "https://infinitestorage.com",
      "en-GB": "https://infinitestorage.com/en-gb",
      es: "https://infinitestorage.com/es",
      fr: "https://infinitestorage.com/fr",
      de: "https://infinitestorage.com/de",
    },
  },
  category: "technology",
  classification: "Cloud Storage, Decentralized Technology, File Storage, Data Management",
  generator: "Next.js",
  applicationName: "Infinite Storage",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#03a9f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0288d1" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  verification: {
    google: "infinite-storage-google-verification",
    yandex: "infinite-storage-yandex-verification",
    yahoo: "infinite-storage-yahoo-verification",
    other: {
      bing: "infinite-storage-bing-verification",
    },
  },
  other: {
    "msapplication-TileColor": "#03a9f4",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
  },
}

// Enhanced JSON-LD structured data for maximum SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://infinitestorage.com/#software",
      name: "Infinite Storage",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Cloud Storage",
      operatingSystem: ["Windows", "Android", "Web", "iOS", "macOS", "Linux"],
      description:
        "Revolutionary decentralized storage platform offering unlimited free cloud storage, earning opportunities for storage keepers, and a thriving digital content marketplace.",
      url: "https://infinitestorage.com",
      downloadUrl: "https://infinitestorage.com/download",
      softwareVersion: "2.0",
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString(),
      author: {
        "@type": "Organization",
        "@id": "https://infinitestorage.com/#organization",
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://infinitestorage.com/#organization",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2030-12-31",
        description: "Unlimited free cloud storage forever",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "12500",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "Unlimited free storage space",
        "Decentralized peer-to-peer network",
        "Earn money as storage keeper",
        "Digital content marketplace",
        "Cross-platform compatibility",
        "Automatic file replication and backup",
        "Public and private storage options",
        "Zero-knowledge encryption",
        "API access for developers",
        "Real-time file synchronization",
      ],
      screenshot: "https://infinitestorage.com/app-screenshot.jpg",
      softwareHelp: "https://infinitestorage.com/help",
      installUrl: "https://infinitestorage.com/download",
      memoryRequirements: "2GB RAM minimum",
      storageRequirements: "100MB installation space",
      processorRequirements: "1GHz processor minimum",
    },
    {
      "@type": "Organization",
      "@id": "https://infinitestorage.com/#organization",
      name: "Infinite Storage",
      alternateName: ["Infinite Storage Platform", "Infinite Storage Network"],
      url: "https://infinitestorage.com",
      logo: {
        "@type": "ImageObject",
        url: "https://infinitestorage.com/logo-512.png",
        width: 512,
        height: 512,
      },
      image: "https://infinitestorage.com/company-image.jpg",
      description: "Leading provider of unlimited free decentralized cloud storage solutions",
      foundingDate: "2024-01-01",
      founders: [
        {
          "@type": "Person",
          name: "Infinite Storage Founder",
        },
      ],
      numberOfEmployees: "50-100",
      slogan: "Infinite possibilities, unlimited storage",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-555-123-4567",
          contactType: "customer service",
          availableLanguage: ["English", "Spanish", "French", "German"],
          areaServed: "Worldwide",
        },
        {
          "@type": "ContactPoint",
          email: "support@infinitestorage.com",
          contactType: "technical support",
          availableLanguage: "English",
          areaServed: "Worldwide",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Decentralized Way",
        addressLocality: "Cloud City",
        addressRegion: "CA",
        postalCode: "90210",
        addressCountry: "US",
      },
      sameAs: [
        "https://twitter.com/InfiniteStorage",
        "https://facebook.com/InfiniteStorage",
        "https://linkedin.com/company/infinite-storage",
        "https://github.com/infinite-storage",
        "https://youtube.com/c/InfiniteStorage",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Infinite Storage Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Unlimited Free Storage",
              description: "Unlimited cloud storage space forever",
            },
            price: "0",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Storage Keeper Program",
              description: "Earn money by sharing unused storage space",
            },
            price: "Variable",
            priceCurrency: "USD",
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://infinitestorage.com/#website",
      url: "https://infinitestorage.com",
      name: "Infinite Storage - Unlimited Free Cloud Storage",
      description: "World's first unlimited free decentralized cloud storage platform",
      publisher: {
        "@id": "https://infinitestorage.com/#organization",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://infinitestorage.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://infinitestorage.com",
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" itemScope itemType="https://schema.org/WebSite">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Favicon and Icons - Multiple sizes for better SEO */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-152x152.png" sizes="152x152" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-144x144.png" sizes="144x144" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" sizes="120x120" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-114x114.png" sizes="114x114" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-76x76.png" sizes="76x76" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-72x72.png" sizes="72x72" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-60x60.png" sizes="60x60" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-57x57.png" sizes="57x57" />

        {/* Manifest and PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.infinitestorage.com" />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//api.infinitestorage.com" />

        {/* Additional meta tags for SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Infinite Storage" />
        <meta name="application-name" content="Infinite Storage" />
        <meta name="msapplication-tooltip" content="Unlimited Free Cloud Storage" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="37.7749;-122.4194" />
        <meta name="ICBM" content="37.7749, -122.4194" />

        {/* Additional Open Graph tags */}
        <meta property="og:site_name" content="Infinite Storage" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="de_DE" />

        {/* Twitter Card additional tags */}
        <meta name="twitter:domain" content="infinitestorage.com" />
        <meta name="twitter:url" content="https://infinitestorage.com" />

        {/* Additional structured data hints */}
        <meta itemProp="name" content="Infinite Storage - Unlimited Free Cloud Storage" />
        <meta
          itemProp="description"
          content="Revolutionary decentralized storage platform offering unlimited free cloud storage forever"
        />
        <meta itemProp="image" content="https://infinitestorage.com/og-image-main.jpg" />

        {/* Canonical link */}
        <link rel="canonical" href="https://infinitestorage.com" />

        {/* Alternate language versions */}
        <link rel="alternate" hrefLang="en" href="https://infinitestorage.com" />
        <link rel="alternate" hrefLang="es" href="https://infinitestorage.com/es" />
        <link rel="alternate" hrefLang="fr" href="https://infinitestorage.com/fr" />
        <link rel="alternate" hrefLang="de" href="https://infinitestorage.com/de" />
        <link rel="alternate" hrefLang="x-default" href="https://infinitestorage.com" />

        {/* RSS Feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Infinite Storage Blog RSS"
          href="https://infinitestorage.com/blog/rss.xml"
        />

        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="https://infinitestorage.com/sitemap.xml" />
      </head>
      <body
        className={`${inter.className} bg-gradient-to-br from-infinite-silver-50 to-infinite-silver-100 text-infinite-silver-900 min-h-screen`}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-grow" role="main" itemScope itemType="https://schema.org/WebPageElement">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

function Header() {
  return (
    <header
      className="w-full p-4 backdrop-blur-md bg-white/40 border-b border-white/60 shadow-lg sticky top-0 z-50"
      role="banner"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <nav
        className="container mx-auto flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-infinite-blue-700 text-2xl font-bold"
          aria-label="Infinite Storage - Unlimited Free Cloud Storage Platform Home"
          itemProp="url"
        >
          <Infinity className="w-8 h-8 text-infinite-blue-500" aria-hidden="true" />
          <span itemProp="name">Infinite Storage</span>
        </Link>
        <ul className="flex gap-6" role="menubar">
          <li role="none">
            <Link
              href="/how-it-works"
              className="text-infinite-silver-700 hover:text-infinite-blue-500 transition-colors"
              role="menuitem"
              aria-label="Learn how unlimited free storage works - Technical details"
            >
              How It Works
            </Link>
          </li>
          <li role="none">
            <Link
              href="/marketplace"
              className="text-infinite-silver-700 hover:text-infinite-blue-500 transition-colors"
              role="menuitem"
              aria-label="Browse digital content marketplace - Buy and sell digital files"
            >
              Marketplace
            </Link>
          </li>
          <li role="none">
            <Link
              href="/storage-keepers"
              className="text-infinite-silver-700 hover:text-infinite-blue-500 transition-colors"
              role="menuitem"
              aria-label="Become a storage keeper and earn money from unused storage space"
            >
              Storage Keepers
            </Link>
          </li>
          <li role="none">
            <Link
              href="/about"
              className="text-infinite-silver-700 hover:text-infinite-blue-500 transition-colors"
              role="menuitem"
              aria-label="About Infinite Storage company - Revolutionary decentralized storage"
            >
              About Us
            </Link>
          </li>
          <li role="none">
            <Link
              href="/blog"
              className="text-infinite-silver-700 hover:text-infinite-blue-500 transition-colors"
              role="menuitem"
              aria-label="Infinite Storage Blog - Technical insights and industry analysis"
            >
              Blog
            </Link>
          </li>
          <li role="none">
            <Link
              href="/contact"
              className="text-infinite-silver-700 hover:text-infinite-blue-500 transition-colors"
              role="menuitem"
              aria-label="Contact Infinite Storage support - 24/7 customer service"
            >
              Contact
            </Link>
          </li>
          <li role="none">
            <Link
              href="/download"
              className="text-infinite-silver-700 hover:text-infinite-blue-500 transition-colors font-semibold"
              role="menuitem"
              aria-label="Download Infinite Storage app - Free unlimited cloud storage"
            >
              Download Free
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer
      className="w-full p-6 backdrop-blur-md bg-white/40 border-t border-white/60 shadow-lg mt-12"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-6">
          <div itemScope itemType="https://schema.org/Organization">
            <h3 className="font-bold text-infinite-blue-700 mb-4" itemProp="name">
              Infinite Storage
            </h3>
            <p className="text-infinite-silver-700 text-sm" itemProp="description">
              Revolutionary decentralized storage platform offering unlimited free cloud storage, earning opportunities
              for storage keepers, and thriving digital content marketplace.
            </p>
            <div className="mt-4 space-y-2 text-sm text-infinite-silver-600">
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="streetAddress">123 Decentralized Way</span>
                <br />
                <span itemProp="addressLocality">Cloud City</span>,<span itemProp="addressRegion">CA</span>
                <span itemProp="postalCode">90210</span>
              </div>
              <div>
                <span itemProp="telephone">+1 (555) 123-4567</span>
              </div>
              <div>
                <span itemProp="email">support@infinitestorage.com</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-infinite-silver-800 mb-3">Free Storage Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-it-works" className="text-infinite-silver-600 hover:text-infinite-blue-500">
                  Unlimited Free Storage
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-infinite-silver-600 hover:text-infinite-blue-500">
                  Download Free App
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-infinite-silver-600 hover:text-infinite-blue-500">
                  Digital Marketplace
                </Link>
              </li>
              <li>
                <Link href="/storage-keepers" className="text-infinite-silver-600 hover:text-infinite-blue-500">
                  Earn Money Storage
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-infinite-silver-600 hover:text-infinite-blue-500">
                  Developer API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-infinite-silver-800 mb-3">Company Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-infinite-silver-600 hover:text-infinite-blue-500">
                  About Infinite Storage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-infinite-silver-600 hover:text-infinite-blue-500">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-infinite-silver-600 hover:text-infinite-blue-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-infinite-silver-600 hover:text-infinite-blue-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-infinite-silver-600 hover:text-infinite-blue-500">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-infinite-silver-800 mb-3">Resources & Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-infinite-silver-600 hover:text-infinite-blue-500">
                  Storage Technology Blog
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-infinite-silver-600 hover:text-infinite-blue-500">
                  Help Center & FAQ
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-infinite-silver-600 hover:text-infinite-blue-500">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-infinite-silver-600 hover:text-infinite-blue-500">
                  System Status
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-infinite-silver-600 hover:text-infinite-blue-500">
                  Security & Encryption
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links for SEO */}
        <div className="border-t border-infinite-silver-200 pt-6 mb-6">
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com/InfiniteStorage"
              className="text-infinite-silver-600 hover:text-infinite-blue-500"
              aria-label="Follow Infinite Storage on Twitter"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com/InfiniteStorage"
              className="text-infinite-silver-600 hover:text-infinite-blue-500"
              aria-label="Like Infinite Storage on Facebook"
              rel="noopener noreferrer"
              target="_blank"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com/company/infinite-storage"
              className="text-infinite-silver-600 hover:text-infinite-blue-500"
              aria-label="Connect with Infinite Storage on LinkedIn"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/infinite-storage"
              className="text-infinite-silver-600 hover:text-infinite-blue-500"
              aria-label="View Infinite Storage on GitHub"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://youtube.com/c/InfiniteStorage"
              className="text-infinite-silver-600 hover:text-infinite-blue-500"
              aria-label="Subscribe to Infinite Storage on YouTube"
              rel="noopener noreferrer"
              target="_blank"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="border-t border-infinite-silver-200 pt-6 text-center">
          <p className="text-infinite-silver-700 text-sm mb-2">
            &copy; {new Date().getFullYear()} Infinite Storage. All rights reserved. |
            <span className="ml-2">Revolutionizing data storage with unlimited free cloud storage for everyone.</span>
          </p>
          <p className="text-infinite-silver-600 text-xs">
            Unlimited Free Cloud Storage • Decentralized Storage Network • Earn Money Storage Keeper • Digital Content
            Marketplace
          </p>
        </div>
      </div>
    </footer>
  )
}
