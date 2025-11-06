import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tech-futura-solutions-portfolio.vercel.app"),
  title: {
    default: "TechFutura Solutions | Web & App Development Company in India",
    template: "%s | TechFutura Solutions",
  },
  description:
    "TechFutura Solutions is an award-winning IT company specializing in web development, mobile app development, and SEO services. Build your digital presence with scalable technology and stunning design.",
  keywords: [
    "TechFutura Solutions",
    "web development company",
    "app development company",
    "IT company India",
    "Next.js development",
    "React development",
    "mobile app development",
    "SEO services",
    "UI/UX design",
    "digital marketing",
    "software development",
    "custom web solutions",
    "enterprise web development",
  ],
  authors: [
    {
      name: "TechFutura Solutions",
      url: "https://tech-futura-solutions-portfolio.vercel.app",
    },
  ],
  creator: "TechFutura Solutions",
  publisher: "TechFutura Solutions",
  alternates: {
    canonical: "https://tech-futura-solutions-portfolio.vercel.app",
  },
  openGraph: {
    title: "TechFutura Solutions | Innovative Web & App Development Company",
    description:
      "We create high-performance websites, mobile apps, and digital platforms to accelerate business success. Partner with TechFutura Solutions for innovative IT solutions.",
    url: "https://tech-futura-solutions-portfolio.vercel.app",
    siteName: "TechFutura Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://tech-futura-solutions-portfolio.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechFutura Solutions - Web & App Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@techfuturasolutions",
    creator: "@techfuturasolutions",
    title: "TechFutura Solutions | Web & App Development Experts",
    description:
      "Custom web and mobile development solutions that drive business growth and innovation.",
    images: ["https://tech-futura-solutions-portfolio.vercel.app/favicon.ico"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "technology",
  applicationName: "TechFutura Solutions",
  referrer: "origin-when-cross-origin",
  generator: "Next.js 15",
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
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* ✅ Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TechFutura Solutions",
              url: "https://tech-futura-solutions-portfolio.vercel.app",
              logo: "https://tech-futura-solutions-portfolio.vercel.app/favicon.ico",
              sameAs: [
                "https://www.facebook.com/techfuturasolutions",
                "https://twitter.com/techfuturasolutions",
                "https://www.linkedin.com/company/techfuturasolutions/",
                "https://www.instagram.com/techfuturasolutions/",
              ],
              description:
                "TechFutura Solutions provides professional web, app, and SEO services for modern businesses worldwide.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi NCR",
                addressCountry: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8882138411",
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: "English",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
