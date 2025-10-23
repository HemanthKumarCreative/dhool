import type { Metadata, Viewport } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default:
      "Dhool - FROM DUST TO DAWN | Sustainable Marketplace | Artisanal Crafts & Eco-Friendly Products",
    template: "%s | Dhool - FROM DUST TO DAWN",
  },
  description:
    "Dhool is a sustainable marketplace celebrating conscious creation through artisanal crafts and eco-friendly products from around the world. Discover extraordinary creations from skilled artisans, traditional crafts, and innovative eco-friendly products. Join our movement from dust to dawn.",
  keywords: [
    "dhool",
    "sustainable marketplace",
    "artisanal crafts",
    "eco-friendly products",
    "conscious creation",
    "traditional crafts",
    "handmade products",
    "sustainable living",
    "ethical shopping",
    "artisan marketplace",
    "eco crafts",
    "sustainable brands",
    "handcrafted items",
    "environmentally friendly",
    "cultural heritage",
    "skilled artisans",
    "conscious consumption",
    "earth-friendly products",
    "traditional techniques",
    "sustainable lifestyle",
    "FROM DUST TO DAWN",
  ],
  authors: [{ name: "Dhool Team", url: "https://www.dhool.org" }],
  creator: "Dhool",
  publisher: "Veeville",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.dhool.org"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/DhoolLogo.png", sizes: "32x32", type: "image/png" },
      { url: "/DhoolLogo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/DhoolLogo.png",
    apple: [{ url: "/DhoolLogo.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/DhoolLogo.png",
        color: "#C06B3F",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dhool.org",
    siteName: "Dhool - FROM DUST TO DAWN",
    title:
      "Dhool - FROM DUST TO DAWN | Sustainable Marketplace | Artisanal Crafts & Eco-Friendly Products",
    description:
      "Discover extraordinary artisanal crafts and eco-friendly products from skilled artisans worldwide. Join Dhool's sustainable marketplace celebrating conscious creation from dust to dawn.",
    images: [
      {
        url: "/images/2-01.jpg",
        width: 1200,
        height: 630,
        alt: "Dhool - Sustainable Artisanal Marketplace",
        type: "image/jpeg",
      },
      {
        url: "/images/2-02.jpg",
        width: 1200,
        height: 630,
        alt: "Traditional Crafts and Eco-Friendly Products",
        type: "image/jpeg",
      },
    ],
    countryName: "India",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  category: "E-commerce, Sustainable Living, Artisanal Crafts",
  classification: "Sustainable Marketplace",
  referrer: "origin-when-cross-origin",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Dhool",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#C06B3F",
    "msapplication-config": "/browserconfig.xml",
    "application-name": "Dhool",
    "msapplication-tooltip": "Dhool - Sustainable Marketplace",
    "msapplication-starturl": "/",
    "msapplication-tap-highlight": "no",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#C06B3F" },
    { media: "(prefers-color-scheme: dark)", color: "#d97757" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.dhool.org/#organization",
        name: "Dhool",
        alternateName: "FROM DUST TO DAWN",
        url: "https://www.dhool.org",
        logo: {
          "@type": "ImageObject",
          url: "https://www.dhool.org/DhoolLogo.png",
          width: 512,
          height: 512,
        },
        description:
          "A sustainable marketplace celebrating conscious creation through artisanal crafts and eco-friendly products from around the world.",
        foundingDate: "2024",
        founder: {
          "@type": "Organization",
          name: "Veeville",
        },
        sameAs: [
          "https://veeville.com/",
          "https://www.linkedin.com/company/dhool-from-dust-to-dawn/?viewAsMember=true",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["English"],
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.dhool.org/#website",
        url: "https://www.dhool.org",
        name: "Dhool - FROM DUST TO DAWN",
        description:
          "Sustainable marketplace for artisanal crafts and eco-friendly products",
        publisher: {
          "@id": "https://www.dhool.org/#organization",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://www.dhool.org/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.dhool.org/#webpage",
        url: "https://www.dhool.org",
        name: "Dhool - Sustainable Marketplace | Artisanal Crafts & Eco-Friendly Products",
        isPartOf: {
          "@id": "https://www.dhool.org/#website",
        },
        about: {
          "@id": "https://www.dhool.org/#organization",
        },
        description:
          "Discover extraordinary artisanal crafts and eco-friendly products from skilled artisans worldwide. Join Dhool's sustainable marketplace celebrating conscious creation from dust to dawn.",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.dhool.org",
            },
          ],
        },
      },
      {
        "@type": "Store",
        "@id": "https://www.dhool.org/#store",
        name: "Dhool Marketplace",
        description:
          "Sustainable marketplace featuring artisanal crafts and eco-friendly products",
        url: "https://www.dhool.org",
        image: [
          "https://www.dhool.org/images/2-01.jpg",
          "https://www.dhool.org/images/2-02.jpg",
          "https://www.dhool.org/images/2-03.jpg",
        ],
        email: "dhool@veeville.com",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "300, 3rd Floor, 3rd Main Rd, opposite BDA Complex, 1st Block, Matadahalli, Extn, RT Nagar",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560032",
          addressCountry: "IN",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        paymentAccepted: [
          "Cash",
          "Credit Card",
          "Debit Card",
          "UPI",
          "Net Banking",
        ],
        currenciesAccepted: "INR",
        priceRange: "₹₹",
      },
      {
        "@type": "Product",
        name: "Artisanal Crafts Collection",
        description:
          "Handcrafted sustainable products from skilled artisans worldwide",
        brand: {
          "@type": "Brand",
          name: "Dhool",
        },
        category: "Sustainable Artisanal Crafts",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: "https://www.dhool.org",
        },
      },
      {
        "@type": "Service",
        name: "Sustainable Marketplace Platform",
        description:
          "Platform connecting conscious consumers with skilled artisans and sustainable product creators",
        provider: {
          "@type": "Organization",
          name: "Dhool",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        serviceType: "E-commerce Marketplace",
        category: "Sustainable Shopping",
      },
    ],
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="apple-mobile-web-app-title" content="Dhool" />
        <meta name="application-name" content="Dhool" />
        <meta
          name="msapplication-tooltip"
          content="Dhool - Sustainable Marketplace"
        />
        <meta name="msapplication-starturl" content="/" />

        {/* Structured Data for AI Crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="20.5937;78.9629" />
        <meta name="ICBM" content="20.5937, 78.9629" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//veeville.com" />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />

        {/* Performance Hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />

        {/* Additional AI Crawler Permissions */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="bingbot" content="index, follow" />

        {/* AI Crawler Specific Meta Tags */}
        <meta name="ai-crawler" content="allow" />
        <meta name="GPTBot" content="allow" />
        <meta name="CCBot" content="allow" />
        <meta name="anthropic-ai" content="allow" />
        <meta name="Claude-Web" content="allow" />
        <meta name="PerplexityBot" content="allow" />
        <meta name="YouBot" content="allow" />

        {/* Content Language and Direction */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="language" content="English" />

        {/* Cache Control */}
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=31536000, immutable"
        />
      </head>
      <body
        className={`${montserrat.variable} ${raleway.variable} antialiased`}
        style={{ fontFamily: "var(--font-montserrat), Helvetica, sans-serif" }}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {children}

        {/* Structured Data for FAQ (if needed) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Dhool?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dhool is a sustainable marketplace celebrating conscious creation through artisanal crafts and eco-friendly products from around the world. We transform fundamental elements of Earth into extraordinary creations, bridging the gap between extraordinary makers and mindful consumers.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What does 'FROM DUST TO DAWN' mean?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "FROM DUST TO DAWN represents our mission to transform raw materials (dust) into beautiful, sustainable products while ushering in a new dawn of responsible living. It symbolizes our commitment to preserving traditional crafts while protecting our planet.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What types of products does Dhool offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dhool offers artisanal crafts, traditional handmade products, eco-friendly items, and sustainable goods from skilled artisans worldwide. We curate products that tell stories of skilled hands preserving centuries-old techniques and visionaries reimagining waste into wonder.",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
