// src/app/about/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About Genieus Studio | Creative Design & Branding",
    description:
      "Learn about Genieus Studio, your global partner for design and branding. We transform ideas into impactful brands.",
    openGraph: {
      title: "About Genieus Studio | Creative Design & Branding",
      description:
        "Learn about Genieus Studio, your global partner for design and branding.",
      url: "https://genieus.studio/about",
      images: [
        {
          url: "https://genieus.studio/images/og-about.jpg",
          width: 1200,
          height: 630,
          alt: "About Genieus Studio",
        },
      ],
    },
};

export default function AboutPage() {
  return (
    <main>
      <h1>About Genieus Studio</h1>
      {/* Add your about page content here */}
    </main>
  );
}