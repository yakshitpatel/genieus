"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { Underline } from "./Underline";

export function Hero() {
  return (
    <section className="w-full px-3 md:px-5 lg:px-10 relative">
      <div className="flex flex-col items-center justify-center max-w-[1440px] mx-auto relative">
        {/* V Lines */}
        <div className="absolute right-[-1px] w-[1px] h-full bg-neutral-200"></div>
        <div className="absolute left-[-1px] w-[1px] h-full bg-neutral-200"></div>
        {/* Content */}
        <div className="flex flex-col items-center justify-center px-4 md:px-5 lg:px-10 xl:px-15 py-10 md:py-15 lg:py-20 xl:py-25">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-medium text-center text-neutral-900 max-w-[800px]">
            Design & Tech <span className="text-neutral-400 relative inline-block">Agency<Underline className="absolute top-1/2 left-0 w-full -translate-y-1/2" /> <div className="absolute text-blue-600 text-6xl tracking-tight top-[-40px] right-[20px]" style={{ fontFamily: "var(--font-caveat)" }}>Partners</div></span> for Ambitious Brands
          </h1>
          <p className="text-xl text-center text-neutral-500 max-w-[560px] mt-3 md:mt-4 relative">
            Your go-to design and development team. We work with teams who want strategy, execution, and growth in one place.
          </p>
        </div>
      </div>
    </section>
  );
} 