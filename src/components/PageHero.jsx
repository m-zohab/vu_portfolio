import Reveal from "./Reveal.jsx";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="section-anchor relative overflow-hidden border-b border-blue-100 bg-[#f3f7fc] py-16 lg:py-20">
      {/* Subtle blue background grid */}
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-50" />

      {/* Soft blue colour accents */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-blue-300/10 blur-3xl" />

      <div className="section-container relative">
        <Reveal>
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-sm font-medium text-blue-700 backdrop-blur-md">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
