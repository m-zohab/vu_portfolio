import { ImageIcon, PlayCircle } from "lucide-react";

// A rotating set of soft gradient backgrounds for the thumbnail placeholders,
// so the grid doesn't look flat when there's no real screenshot yet.
const GRADIENTS = [
  "from-indigo-100 to-indigo-50",
  "from-emerald-100 to-emerald-50",
  "from-slate-200 to-slate-100",
];

export default function ProjectCard({ project, index }) {
  const { title, description, tags, type } = project;
  const gradient = GRADIENTS[index % GRADIENTS.length];

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      {/* Thumbnail placeholder — swap for a real <img> or <video> poster
          once you have project screenshots. */}
      <div
        className={`flex h-44 items-center justify-center bg-gradient-to-br ${gradient}`}
      >
        {type === "video" ? (
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-indigo-600 shadow-sm transition-transform duration-300 group-hover:scale-110">
            <PlayCircle size={28} strokeWidth={1.75} />
          </div>
        ) : (
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-slate-500 shadow-sm transition-transform duration-300 group-hover:scale-110">
            <ImageIcon size={24} strokeWidth={1.75} />
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}
