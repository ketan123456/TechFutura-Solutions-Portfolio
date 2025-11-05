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
  title: "TechFutura Solutions | Web & App Development Company in India",
  description:
    "TechFutura Solutions is a leading IT company offering web development, mobile app development, and digital solutions for businesses worldwide. We help you grow online with scalable technology and smart design.",
  keywords: [
    "TechFutura Solutions",
    "web development company",
    "app development services",
    "IT company India",
    "Next.js development",
    "React development",
    "mobile app development",
    "SEO services",
    "UI/UX design",
  ],
  authors: [{ name: "TechFutura Solutions", url: "https://techfutura.in" }],
  creator: "TechFutura Solutions",
  publisher: "TechFutura Solutions",
  metadataBase: new URL("https://techfutura.in"),
  openGraph: {
    title: "TechFutura Solutions | Innovative Web & App Development Company",
    description:
      "We design and develop high-performance websites and mobile apps to accelerate your digital success. Partner with TechFutura Solutions for modern IT solutions.",
    url: "https://techfutura.in",
    siteName: "TechFutura Solutions",
    images: [
      {
        url: "https://techfutura.in/og-image.jpg", // Replace with your real image
        width: 1200,
        height: 630,
        alt: "TechFutura Solutions - Web & App Development",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechFutura Solutions | Web & App Development Experts",
    description:
      "Custom web and mobile development solutions that drive business growth.",
    images: ["https://techfutura.in/og-image.jpg"], // Replace with your real image
    creator: "@techfuturasolutions", // Replace with your Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://techfutura.in",
  },
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
