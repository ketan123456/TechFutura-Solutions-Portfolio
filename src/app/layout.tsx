import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techfutura.in"),

  title: {
    default: "TechFutura Solutions | Web & App Development Company in India",
    template: "%s | TechFutura Solutions",
  },

  description:
    "TechFutura Solutions is a leading IT company offering web development, mobile app development, and digital solutions for businesses worldwide. Partner with us to grow your business with scalable technology and smart design.",

  keywords: [
    "TechFutura Solutions",
    "web development company",
    "app development services",
    "mobile app development",
    "Next.js",
    "React.js",
    "UI/UX design",
    "digital transformation",
    "SEO optimization",
    "software company India",
  ],

  authors: [{ name: "TechFutura Solutions", url: "https://techfutura.in" }],
  creator: "TechFutura Solutions",
  publisher: "TechFutura Solutions",

  alternates: {
    canonical: "https://techfutura.in",
  },

  // ✅ Open Graph — for Facebook, LinkedIn, WhatsApp, Gmail previews, etc.
  openGraph: {
    title:
      "TechFutura Solutions | Innovative Web & App Development Company in India",
    description:
      "We design and develop high-performance websites and mobile apps to accelerate your digital success. Partner with TechFutura Solutions for modern IT solutions.",
    url: "https://techfutura.in",
    siteName: "TechFutura Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://techfutura.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechFutura Solutions - Web & App Development",
      },
    ],
  },

  // ✅ Twitter (X) Card — for Twitter / X sharing
  twitter: {
    card: "summary_large_image",
    title: "TechFutura Solutions | Web & App Development Experts",
    description:
      "Custom web and mobile development solutions that drive business growth and scalability.",
    site: "@techfuturasolutions", // Replace with your X handle
    creator: "@techfuturasolutions",
    images: ["https://techfutura.in/og-image.jpg"],
  },

  // ✅ Additional SEO Enhancements
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // ✅ Favicons and App icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // ✅ Optional theme color (for mobile browsers)
  themeColor: "#0a0a0a",

  // ✅ Optional application info
  applicationName: "TechFutura Solutions",
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
