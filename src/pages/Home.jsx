import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  ClipboardCheck,
  Code2,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MessagesSquare,
  MessageCircle,
  Mic,
} from "lucide-react";
import Hero from "../components/Hero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { services, projects, siteConfig } from "../data/siteData.js";

const ICONS = {
  FileText,
  MessagesSquare,
  ClipboardCheck,
  LayoutDashboard,
  GraduationCap,
  Code2,
  BrainCircuit,
};

export default function Home() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <SEO
        title="Home"
        description={siteConfig.defaultDescription}
      />
      <Hero />

      {/* ── Services preview ─────────────────────────────────────────── */}
      <section className="bg-paper-deep py-20 lg:py-28">
        <div className="section-container">
          <Reveal>
            <SectionHeading
              title="What we offer"
              description="Seven ways we help you stay on top of Virtual University coursework — pick one, or let us handle all of it."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = ICONS[service.icon] ?? FileText;
              return (
                <Reveal key={service.id} delay={index * 60}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-ink-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-gold-400">
                      <Icon size={20} strokeWidth={2} />
                    </span>
                    <h3 className="font-display text-base font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-200">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200} className="mt-10 flex justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
            >
              See all services
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Projects preview ─────────────────────────────────────────── */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="section-container">
          <Reveal>
            <SectionHeading
              title="Work we're proud of"
              description="A sample of final year projects and freelance builds we've delivered across web, mobile, AI/ML and more."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-10 flex justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
            >
              See all projects
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Final Viva Prep highlight ────────────────────────────────── */}
      <section className="bg-paper-deep py-20 lg:py-28">
        <div className="section-container grid items-center gap-10 lg:grid-cols-2">
          <Reveal direction="left">
            <span className="inline-flex items-center rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-medium text-gold-300">
              For your FYP defense
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Final Viva Preparation
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-200">
              A live mock viva on your own project, an expected question
              bank, and honest feedback — so you walk into your real defense
              having already done it once.
            </p>
            <Link
              to="/viva-preparation"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-500"
            >
              How viva prep works
              <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className="rounded-2xl border border-white/10 bg-ink-800 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-ink-950">
                <Mic size={22} />
              </div>
              <p className="mt-5 text-lg font-semibold text-white">
                "The mock viva caught three questions my actual committee
                asked."
              </p>
              <p className="mt-2 text-sm text-ink-300">
                What most VU students tell us after their real defense.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="bg-paper py-16 lg:py-20">
        <div className="section-container">
          <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-ink-800 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Tell us about your deadline
              </h2>
              <p className="mt-2 max-w-md text-ink-200">
                Most conversations start on WhatsApp and get a reply within a
                few hours.
              </p>
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-sage-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-sage-600 hover:shadow-lift"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
