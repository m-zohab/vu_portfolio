import { Github, Linkedin } from "lucide-react";

export default function PartnerCard({ partner }) {
  const { name, semester, bio, image, initials, github, linkedin } = partner;

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="flex items-center gap-4">
        {/* Profile picture placeholder: shows a real photo if "image" is
            provided in siteData.js, otherwise falls back to initials. */}
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-20 w-20 rounded-full object-cover ring-4 ring-slate-50"
          />
        ) : (
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500 text-xl font-bold text-white ring-4 ring-slate-50">
            {initials}
          </div>
        )}

        <div>
          <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
          <span className="mt-1 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            {semester}
          </span>
        </div>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-slate-600">{bio}</p>

      {/* ── Conditional social icons ─────────────────────────────────────
          Each icon only renders when its URL is a non-empty string.
          If "github" or "linkedin" is "" or null/undefined in siteData.js,
          that icon is skipped entirely — no broken/empty links. */}
      {(github || linkedin) && (
        <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name}'s GitHub profile`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
            >
              <Github size={18} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name}'s LinkedIn profile`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
