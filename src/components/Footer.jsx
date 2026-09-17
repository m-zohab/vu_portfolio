import { GraduationCap, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "../data/siteData.js";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="section-container flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <GraduationCap size={16} strokeWidth={2.25} />
            </span>
            <span className="font-display text-base font-bold text-slate-900">
              {siteConfig.brandName}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            {siteConfig.tagline} — helping Virtual University students with
            FYPs, assignments, quizzes and LMS handling.
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <p className="text-sm font-semibold text-slate-900">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li>
                <a href="#about" className="hover:text-indigo-600">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-indigo-600">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Get in touch</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-indigo-600"
                >
                  <Mail size={14} /> Email
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-indigo-600"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 py-6">
        <p className="section-container text-center text-xs text-slate-400">
          © {year} {siteConfig.brandName}. Built by two VU students, for VU
          students.
        </p>
      </div>
    </footer>
  );
}
