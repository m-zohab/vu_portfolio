// Reusable heading block: a title + supporting sentence, centered,
// used consistently across About / Services / Portfolio / Contact.
export default function SectionHeading({ title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
