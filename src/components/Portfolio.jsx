import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/siteData.js";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-anchor bg-slate-50 py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          title="Work we're proud of"
          description="A sample of final year projects and freelance builds we've delivered — swap these placeholders for your own screenshots and demos."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
