import { useEffect, useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { siteConfig } from "../data/siteData.js";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a subtle shadow once the page has scrolled past the hero,
  // so the bar reads as "docked" rather than floating on white.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever a link is tapped.
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? "shadow-soft" : ""
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between lg:h-20">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <GraduationCap size={20} strokeWidth={2.25} />
          </span>
          <span className="font-display text-lg font-bold text-slate-900">
            {siteConfig.brandName}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 md:inline-flex"
        >
          Contact
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden bg-white transition-[max-height] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 border-t border-slate-100" : "max-h-0"
        }`}
      >
        <div className="section-container flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-2 rounded-full bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
