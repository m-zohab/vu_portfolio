import { useState } from "react";
import { CheckCircle2, Mail, MapPin, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { siteConfig } from "../data/siteData.js";

const INITIAL_FORM = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New inquiry from ${form.name || "the website"}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with VU Services on WhatsApp or email to discuss your assignment, project or LMS course."
      />
      <PageHero
        eyebrow="Contact"
        title="Let's work together"
        description="Tell us about your project, assignment or LMS course — we usually reply within a few hours."
      />

      <section className="relative overflow-hidden bg-[#f3f7fc] py-16 lg:py-24">
        {/* Subtle background grid */}
        <div className="grid-texture pointer-events-none absolute inset-0 opacity-50" />

        <div className="section-container relative grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ── Direct contact info ─────────────────────────────────── */}
          <Reveal direction="left" className="space-y-5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Mail size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">Email us</p>
                <p className="text-sm text-slate-600">{siteConfig.email}</p>
              </div>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <MessageCircle size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Message us on WhatsApp
                </p>
                <p className="text-sm text-slate-600">Fastest way to reach us</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <MapPin size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Virtual University of Pakistan
                </p>
                <p className="text-sm text-slate-600">Remote — we work online</p>
              </div>
            </div>
          </Reveal>

          {/* ── Contact form ────────────────────────────────────────── */}
          <Reveal direction="right" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-slate-800"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-blue-100 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-slate-800"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-blue-100 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-slate-800"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, course, or deadline..."
                    className="w-full resize-none rounded-xl border border-blue-100 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  Send message
                </button>

                {submitted && (
                  <p className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                    <CheckCircle2 size={16} />
                    Your email app should now be open with the message ready to send.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
