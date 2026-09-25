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

      <section className="bg-paper py-16 lg:py-24">
        <div className="section-container grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ── Direct contact info ─────────────────────────────────── */}
          <Reveal direction="left" className="space-y-5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-800 p-5 transition-colors hover:border-white/25"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold-400">
                <Mail size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Email us</p>
                <p className="text-sm text-ink-200">{siteConfig.email}</p>
              </div>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-800 p-5 transition-colors hover:border-sage-500/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sage-500">
                <MessageCircle size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Message us on WhatsApp
                </p>
                <p className="text-sm text-ink-200">Fastest way to reach us</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-800 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold-400">
                <MapPin size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Virtual University of Pakistan
                </p>
                <p className="text-sm text-ink-200">Remote — we work online</p>
              </div>
            </div>
          </Reveal>

          {/* ── Contact form ────────────────────────────────────────── */}
          <Reveal direction="right" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-ink-800 p-6 shadow-lift sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-white"
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
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-ink-300 focus:border-gold-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-white"
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
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-ink-300 focus:border-gold-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-white"
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
                    className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-ink-300 focus:border-gold-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-gold-600"
                >
                  Send message
                </button>

                {submitted && (
                  <p className="flex items-center gap-2 text-sm text-sage-500">
                    <CheckCircle2 size={16} />
                    Your email app should now be open with the message ready
                    to send.
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
