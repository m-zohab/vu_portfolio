import { useMemo, useState } from "react";
import PageHero from "../components/PageHero.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { projectCategories, projects } from "../data/siteData.js";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEO
        title="Projects"
        description="Mobile apps, web development, AI/ML, programming and database projects delivered for Virtual University students."
      />
      <PageHero
        eyebrow="Projects"
        title="Work we're proud of"
        description="A sample of final year projects and freelance builds across mobile, web, AI/ML, programming and databases."
      />

      <section className="relative overflow-hidden bg-[#f3f7fc] py-16 lg:py-24">
        {/* Subtle background grid */}
        <div className="grid-texture pointer-events-none absolute inset-0 opacity-50" />

        <div className="section-container relative">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                    : "border-blue-100 bg-white text-slate-600 hover:border-blue-300 hover:text-slate-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid — re-keyed by category so cards replay their entrance
              animation each time the filter changes. */}
          <div
            key={activeCategory}
            className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 70}>
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="mt-10 text-center text-slate-500">
              No projects in this category yet — check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
