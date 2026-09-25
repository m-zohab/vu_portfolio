### `Hero.jsx`

```jsx
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, ShieldCheck, Star } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { siteConfig } from "../data/siteData.js";

const STATS = [
  { value: "50+", label: "Projects delivered" },
  { value: "200+", label: "Assignments solved" },
  { value: "24/7", label: "Support on WhatsApp" },
];

export default function Hero() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <section className="relative isolate overflow-hidden bg-transparent pb-20 pt-14 lg:pb-28 lg:pt-20">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-90" />
      <div className="blue-grid-glow pointer-events-none absolute inset-0 opacity-60" />

      <div className="blue-glow -right-40 -top-32 h-[32rem] w-[32rem]" />
      <div className="blue-glow -left-40 top-40 h-[28rem] w-[28rem]" />

      <div className="section-container relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <Reveal direction="up">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-sm font-medium text-blue-700 backdrop-blur-md">
              Virtual University project & academic partners
            </span>
          </Reveal>

          <Reveal direction="up" delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Your ultimate academic & project partners
            </h1>
          </Reveal>

          <Reveal direction="up" delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              We help VU students finish strong — final year project
              development, assignment & quiz solutions, and complete LMS
              handling, all delivered on time and explained clearly so you
              understand every part of the work.
            </p>
          </Reveal>

          <Reveal direction="up" delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50"
              >
                View our work
              </Link>
            </div>
          </Reveal>

          <Reveal direction="up" delay={320}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-blue-200/70 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold text-slate-950 sm:text-3xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal
          direction="right"
          delay={160}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="glass-panel rounded-3xl p-6">
            <div className="flex items-center gap-1.5 border-b border-blue-100 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

              <span className="ml-2 text-xs font-medium text-slate-500">
                project-tracker.vu
              </span>
            </div>

            <ul className="mt-4 space-y-3">
              {[
                { label: "FYP documentation", done: true },
                { label: "Database schema", done: true },
                { label: "Quiz bank updated", done: true },
              ].map((row) => (
                <li
                  key={row.label}
                  className="flex items-center gap-3 rounded-xl border border-blue-100 bg-white/90 px-3.5 py-3 transition-colors hover:border-blue-200 hover:bg-blue-50/50"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-blue-600" />
                  <span className="text-sm font-medium text-slate-800">
                    {row.label}
                  </span>
                </li>
              ))}

              <li className="rounded-xl border border-blue-100 bg-white/90 px-3.5 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-800">
                    LMS assignments
                  </span>

                  <span className="text-xs font-semibold text-blue-600">
                    In progress
                  </span>
                </div>

                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-blue-50">
                  <div className="h-full animate-fill-bar rounded-full bg-blue-600" />
                </div>
              </li>
            </ul>
          </div>

          <div className="glass-panel absolute -right-4 -top-6 hidden animate-float items-center gap-2 rounded-2xl px-4 py-3 sm:flex">
            <ShieldCheck size={20} className="text-blue-600" />

            <div className="text-xs">
              <p className="font-semibold text-slate-900">
                100% confidential
              </p>
              <p className="text-slate-500">Your work stays private</p>
            </div>
          </div>

          <div
            className="glass-panel absolute -bottom-6 -left-4 hidden animate-float items-center gap-2 rounded-2xl px-4 py-3 sm:flex"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  fill="currentColor"
                  strokeWidth={0}
                />
              ))}
            </div>

            <p className="text-xs font-semibold text-slate-900">
              Trusted by 50+ VU students
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
```

### `Navbar.jsx`

```jsx
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "../data/siteData.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  const linkClasses = ({ isActive }) =>
    `relative text-sm font-medium transition-colors ${
      isActive
        ? "text-blue-600"
        : "text-slate-600 hover:text-blue-600"
    } after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-blue-600 after:transition-all after:duration-300 ${
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  const mobileLinkClasses = ({ isActive }) =>
    `rounded-lg px-3 py-2.5 text-sm font-medium ${
      isActive
        ? "bg-blue-50 text-blue-700"
        : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-blue-100/80 bg-[#f3f7fc]/90 backdrop-blur-xl transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between lg:h-20">
        <NavLink to="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <GraduationCap size={20} strokeWidth={2.25} />
          </span>

          <span className="font-display text-lg font-bold text-slate-900">
            {siteConfig.brandName}
          </span>
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClasses}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 md:inline-flex"
        >
          Contact
        </NavLink>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-blue-50 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-white/95 transition-[max-height] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 border-t border-blue-100" : "max-h-0"
        }`}
      >
        <div className="section-container flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={handleLinkClick}
              className={mobileLinkClasses}
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={handleLinkClick}
            className="mt-2 rounded-full bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
}
```

### Baaki components mein main theme changes

**`PageHero.jsx`**:

```jsx
<section className="section-anchor relative overflow-hidden border-b border-blue-100 bg-[#eef4fa] py-16 lg:py-20">
```

Aur existing glows ko:

```jsx
<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
<div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-blue-300/10 blur-3xl" />
<div className="grid-texture pointer-events-none absolute inset-0 opacity-70" />
```

`PartnerCard` ka outer card:

```jsx
<div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
```

Accent stripe:

```jsx
<span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-blue-500 to-blue-700" />
```

`ProjectCard` outer card:

```jsx
<div className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
```

Tags:

```jsx
className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700"
```

Social buttons:

```jsx
className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors hover:bg-blue-100 hover:text-blue-700"
```

`Reveal.jsx` **bilkul same rehne do**. Usko change karne ki zaroorat nahi.
