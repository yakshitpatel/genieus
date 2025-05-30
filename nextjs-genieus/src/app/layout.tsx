import type { Metadata } from "next"
import localFont from "next/font/local"
import "../styles/globals.css"
import Header from "../components/Header"

const brittiSans = localFont({
  src: "../fonts/britti-sans-variable.ttf",
  variable: "--font-britti-sans",
  display: "swap",
  preload: true,
})

const caveat = localFont({
  src: "../fonts/Caveat-VariableFont_wght.ttf",
  variable: "--font-caveat",
  display: "swap",
  preload: true,
})

// Site metadata for SEO, OpenGraph, and PWA
export const metadata: Metadata = {
  title: {
    default: "Strategic Design & Development Services | Genieus Studio",
    template: "%s | Genieus",
  },
  description:
    "Genieus Studio is a global branding, web design, and marketing partner for startups, small businesses, and growing brands. We design brands, build high-performance websites, and launch them with clarity and speed.",
  keywords: [
  "branding for startups",
  "web design agency for small businesses",
  "Next.js development agency",
  "design and development studio",
  "branding subscription service",
  "digital agency in India",
  "custom website design",
  "growth marketing partner",
],
  metadataBase: new URL("https://genieus.studio"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Strategic Design & Development Services | Genieus Studio",
    description:
      "Genieus Studio is a global branding, web design, and marketing partner for startups, small businesses, and growing brands. We design brands, build high-performance websites, and launch them with clarity and speed.",
    url: "https://genieus.studio",
    siteName: "Genieus Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Genieus Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genieus Studio",
    description:
      "Design, development, and marketing — all in one strategic partner.",
    creator: "@itsyakshit",
    images: ["/og-image.jpg"],
  },
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
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#F5F5F7",
  alternates: {
    canonical: "https://genieus.studio",
    languages: {
      "en-US": "https://genieus.studio",
      "en-IN": "https://genieus.studio/in",
      "en-AE": "https://genieus.studio/ae",
    },
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${brittiSans.variable} ${caveat.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  )
}
