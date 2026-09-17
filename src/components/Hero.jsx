import { CheckCircle2, MessageCircle, ShieldCheck, Star } from "lucide-react";
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
    <section id="home" className="section-anchor bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="section-container grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* ── Left: copy & CTAs ───────────────────────────────────────── */}
        <div>
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700">
            Virtual University project & academic partners
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Your ultimate academic & project partners
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            We help VU students finish strong — final year project
            development, assignment & quiz solutions, and complete LMS
            handling, all delivered on time and explained clearly so you
            understand every part of the work.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-indigo-200 hover:text-indigo-600"
            >
              View our work
            </a>
          </div>

          {/* Trust stats */}
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-100 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        {/* ── Right: decorative "project tracker" mockup ─────────────── */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Main card */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
            <div className="flex items-center gap-1.5 border-b border-slate-100 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="ml-2 font-mono text-xs text-slate-400">
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
                  className="flex items-center gap-3 rounded-xl bg-slate-50 px-3.5 py-3"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  <span className="text-sm font-medium text-slate-700">
                    {row.label}
                  </span>
                </li>
              ))}

              {/* In-progress row with a small animated bar */}
              <li className="rounded-xl bg-indigo-50 px-3.5 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-indigo-700">
                    LMS assignments
                  </span>
                  <span className="text-xs font-medium text-indigo-500">
                    In progress
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-indigo-100">
                  <div className="h-full w-3/4 rounded-full bg-indigo-500" />
                </div>
              </li>
            </ul>
          </div>

          {/* Floating badge: top-right */}
          <div className="absolute -right-4 -top-6 hidden items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-card sm:flex">
            <ShieldCheck size={20} className="text-indigo-600" />
            <div className="text-xs">
              <p className="font-semibold text-slate-800">100% confidential</p>
              <p className="text-slate-500">Your work stays private</p>
            </div>
          </div>

          {/* Floating badge: bottom-left */}
          <div className="absolute -bottom-6 -left-4 hidden items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-card sm:flex">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-xs font-semibold text-slate-800">
              Trusted by 50+ VU students
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
