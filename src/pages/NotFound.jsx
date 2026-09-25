import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found"
        description="The page you're looking for doesn't exist."
      />
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[#f3f7fc] py-20">
        {/* Subtle background grid */}
        <div className="grid-texture pointer-events-none absolute inset-0 opacity-50" />

        <div className="section-container relative text-center">
          <p className="font-display text-8xl font-bold tracking-tight text-slate-200/80">
            404
          </p>
          <h1 className="-mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            This page wandered off somewhere
          </h1>
          <p className="mt-3 text-slate-600">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            <Home size={16} />
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
