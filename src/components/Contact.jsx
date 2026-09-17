import { useState } from "react";
import { CheckCircle2, Mail, MapPin, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
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

  // No backend is wired up yet, so submitting builds a pre-filled mailto:
  // link and opens the visitor's own email client — it works today with
  // zero configuration. To collect messages directly on a server instead,
  // swap this handler for a request to a form service like Formspree or
  // EmailJS (both have generous free tiers and a few lines of setup).
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
    <section id="contact" className="section-anchor bg-white py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          title="Let's work together"
          description="Tell us about your project, assignment or LMS course — we usually reply within a few hours."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ── Direct contact info ─────────────────────────────────── */}
          <div className="space-y-5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-colors hover:border-indigo-100 hover:bg-indigo-50/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-soft">
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
              className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-colors hover:border-emerald-100 hover:bg-emerald-50/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-500 shadow-soft">
                <MessageCircle size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Message us on WhatsApp
                </p>
                <p className="text-sm text-slate-600">Fastest way to reach us</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-slate-500 shadow-soft">
                <MapPin size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Virtual University of Pakistan
                </p>
                <p className="text-sm text-slate-600">Remote — we work online</p>
              </div>
            </div>
          </div>

          {/* ── Contact form ────────────────────────────────────────── */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
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
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
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
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
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
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
              >
                Send message
              </button>

              {submitted && (
                <p className="flex items-center gap-2 text-sm text-emerald-600">
                  <CheckCircle2 size={16} />
                  Your email app should now be open with the message ready to
                  send.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
