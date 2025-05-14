import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  siteUrl: "https://genieus.studio",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/_static/", "/_vercel/"],
      },
    ],
    additionalSitemaps: [
      "https://genieus.studio/sitemap.xml",
    ],
  },
};

export default nextConfig;
