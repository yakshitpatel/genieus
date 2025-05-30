import Link from "next/link";
import NavItem from "./NavItem";
import { Button } from "./Button";

export default function Header() {
  return (
    <header className="w-full px-3 md:px-5 lg:px-10 relative">
      {/* H Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-200"></div>
      <nav className="flex items-center max-w-[1440px] mx-auto px-5 py-5 relative gap-8">
        {/* V Lines */}
        <div className="absolute right-[-1px] w-[1px] h-full bg-neutral-200"></div>
        <div className="absolute left-[-1px] w-[1px] h-full bg-neutral-200"></div>
        {/* Logo */}
        <Link href="/">
          <img src="/genieus-logo.svg" alt="Genieus Studio" />
        </Link>
        {/* Navigation */}
        <nav className="flex items-center flex-1 space-x-4">
          <div className="w-[1px] h-[20px] bg-neutral-200"></div>
          <NavItem href="/" label="Home" />
          <NavItem href="/services" label="Services" />
          <NavItem href="/projects" label="Projects" />
          <NavItem href="/about" label="About" />
          <NavItem href="/subscription" label="Subscription" />
          <NavItem href="/resources" label="Resources" />
        </nav>
        {/* Actions */}
        <div className="flex gap-3 items-center">
          <Button href="/brand-audit" variant="outline">Get Brand Audit</Button>
          <Button href="/contact" variant="solid">Get Started</Button>
        </div>
      </nav>
    </header>
  );
}
