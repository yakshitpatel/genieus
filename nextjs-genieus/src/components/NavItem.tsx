"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

export default function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={clsx(
        "relative group px-4 py-2 text-md text-neutral-600 hover:text-neutral-900 transition-colors duration-300",
        isActive && "nav-active"
      )}
    >
      <span className="relative z-10">{label}</span>

      {/* SVG curve animation */}
      <svg
        viewBox="0 0 68 30"
        preserveAspectRatio="none"
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-[95%] max-h-[35px] z-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M33.9789 1C22.8388 1.16089 0.647761 4.28224 1.00424 15.4805C1.36073 26.6787 21.3326 28.9024 33.9789 28.9955C46.6251 29.0887 67 27.8195 67 15.656C67 3.49238 39.2621 1.96536 25.958 5.82682"
            stroke="#5476FE"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="stroke-path"
        />
      </svg>
    </Link>
  )
}
