'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coming Soon | Genieus Studio",
  description: "Your global strategic design and branding partner, transforming ideas into impactful brands.",
  keywords: ["Branding", "Design Studio", "Genieus Studio", "Web Design"],
  openGraph: {
    title: "Coming Soon | Genieus Studio",
    description: "Your global strategic design and branding partner, transforming ideas into impactful brands.",
    images: "/brand/genieus-logo-white.png",
  },
};

const launchDate = new Date('2025-05-19T00:00:00');

function getTimeLeft() {
  const now = new Date();
  const diff = launchDate.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    // Optionally, render a placeholder or nothing on the server
    return null;
  }

  // For mailto fallback
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    window.location.href = `mailto:hello@genieus.studio?subject=Notify me on launch&body=Please notify me at ${email} when you launch!`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center">
      {/* Logo (optional) */}
      <div className="absolute top-8 left-8">
          <Image
            src="/brand/genieus-logo-white.png"
            alt="Genieus Studio Logo"
            width={120}
            height={32}
            priority
          />
        </div>
      {/* Countdown */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-white text-[10vw] font-extrabold tracking-tight flex items-end leading-none select-none">
          <span>{timeLeft.days}</span>
          <span className="text-[4vw] font-normal mx-2 mb-[1vw]">:</span>
          <span>{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="text-[4vw] font-normal mx-2 mb-[1vw]">:</span>
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="text-[4vw] font-normal mx-2 mb-[1vw]">:</span>
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
        {/* Notify Button */}
        <button
          className="mt-8 px-8 py-3 bg-white text-black rounded-full text-lg font-medium shadow transition hover:bg-gray-200"
          onClick={() => setShowModal(true)}
        >
          Notify on release <span aria-hidden>→</span>
        </button>
      </div>
      {/* Footer Nav */}
      <div className="absolute bottom-8 left-0 w-full flex justify-between px-8 text-white text-base">
        <a href="https://x.com/genieusstudio" target="_blank" rel="noopener noreferrer" className="hover:underline">X (Twitter)</a>
        <a href="https://instagram.com/genieusstudio" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
        <a href="mailto:hello@genieus.studio" className="hover:underline">Contact</a>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-sm shadow-lg flex flex-col items-center">
            <button
              className="absolute top-4 right-4 text-black text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-black">Get Notified</h2>
            {submitted ? (
              <div className="text-black text-center">
                Thank you! We&apos;ll notify you on launch.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="mb-4 px-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black text-black"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-black text-white rounded font-medium hover:bg-gray-800 transition"
                >
                  Get notified
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
