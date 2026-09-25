```jsx
import { Link } from "react-router-dom";
import { GraduationCap, Mail, MessageCircle } from "lucide-react";
import { navLinks, siteConfig } from "../data/siteData.js";

export default function Footer() {
  const year = new Date().getFullYear();

  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <footer className="relative overflow-hidden border-t border-blue-100 bg-[#eef4fa]">
      {/* Subtle blue grid */}
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-50" />

      {/* Soft background glow */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-blue-400/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-blue-300/10 blur-[100px]" />

      <div className="section-container relative flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        {/* Brand */}
        <div className="max-w-xs">
          <Link to="/" className="group flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5">
              <GraduationCap size={17} strokeWidth={2.25} />
            </span>

            <span className="font-display text-base font-bold text-slate-900">
              {siteConfig.brandName}
            </span>
          </Link>

          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {siteConfig.tagline} — helping Virtual University students with
            FYPs, assignments, quizzes and LMS handling.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Explore
            </p>

            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              {navLinks
                .filter((link) => link.to !== "/")
                .map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="transition-colors duration-200 hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Get in touch
            </p>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-blue-600"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Mail size={14} />
                  </span>
                  Email
                </a>
              </li>

              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-blue-600"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <MessageCircle size={14} />
                  </span>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-blue-100/80 bg-white/30 py-6">
        <p className="section-container text-center text-xs text-slate-500">
          © {year} {siteConfig.brandName}. Built by two VU students, for VU
          students.
        </p>
      </div>
    </footer>
  );
}
```
