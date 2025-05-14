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
  title: { default: "Genieus | Global Strategic Design & Branding Partner", template: "%s | Genieus" },
  description: "Genieus is your global strategic design and branding partner, transforming ideas into impactful brands through design and strategy.",
  keywords: ["design", "branding", "strategy", "creative", "innovation", "branding agency", "design agency", "branding partner", "design partner", "branding agency", "design agency", "branding partner", "design partner", "best design agency", "best branding agency", "best design partner", "best branding partner", "best design agency in the world", "best branding agency in the world", "best design partner in the world", "best branding partner in the world"],
  authors: [{ name: "Genieus", url: "https://genieus.studio" }],
  creator: "Yakshit Patel",
  openGraph: {
    type: "website",
    url: "https://genieus.studio",
    title: "Genieus | Global Strategic Design & Branding Partner",
    description: "Genieus is your global strategic design and branding partner, transforming ideas into impactful brands through design and strategy.",
    siteName: "Genieus",
    images: [
      {
        url: "https://genieus.studio/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Genieus | Global Strategic Design & Branding Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GenieusStudio",
    title: "Genieus | Global Strategic Design & Branding Partner",
    description: "Genieus is your global strategic design and branding partner, transforming ideas into impactful brands through design and strategy.",
    images: "https://genieus.studio/images/og-image.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": 100,
      "max-image-preview": "large",
      "max-video-preview": 100,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://genieus.studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Genieus Studio",
              url: "https://genieus.studio",
              logo: "https://genieus.studio/images/logo.png",
              sameAs: [
                "https://x.com/genieusstudio",
                "https://www.instagram.com/genieusstudio/",
                "https://www.linkedin.com/company/genieus-studio/",
              ],
            })}
        </script>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/brand/fevicon-dark.png" />
        <link rel="icon" type="image/png" href="/brand/fevicon-light.png" media="(prefers-color-scheme: dark)" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
