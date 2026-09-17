import { CheckCircle2, FileText, GraduationCap, LayoutDashboard } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { services } from "../data/siteData.js";

// Maps each service id (from siteData.js) to an icon component.
// Kept separate from the data file so siteData.js stays plain data/JSON-like.
const ICONS = {
  fyp: GraduationCap,
  assignments: FileText,
  lms: LayoutDashboard,
};

export default function Services() {
  return (
    <section id="services" className="section-anchor bg-white py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          title="What we offer"
          description="Three ways we help you stay on top of Virtual University coursework — pick one, or let us handle all three."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = ICONS[service.id];
            return (
              <div
                key={service.id}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon size={24} strokeWidth={2} />
                </span>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-emerald-500"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
