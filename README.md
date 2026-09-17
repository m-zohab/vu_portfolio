# ScholarStack — VU Academic & Project Partners

A one-page portfolio site for a two-person academic services team (Virtual
University FYP guidance, assignments & quizzes, and LMS management). Built
with **React 18**, **Vite**, and **Tailwind CSS**.

## Quick start

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Project structure

```
src/
  data/
    siteData.js       ← EDIT THIS FILE for all your real content
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    PartnerCard.jsx
    Services.jsx
    Portfolio.jsx
    ProjectCard.jsx
    Contact.jsx
    Footer.jsx
    WhatsAppButton.jsx
    SectionHeading.jsx
  App.jsx
  main.jsx
  index.css
```

## Customizing your content

Almost everything on the site is driven by **`src/data/siteData.js`** —
you shouldn't need to touch any component file to update your info.

- **`siteConfig`** — brand name, tagline, WhatsApp number, email.
- **`partners`** — name, semester, bio, and social links for each of you.
  - Leave `github` or `linkedin` as an empty string (`""`) to automatically
    hide that icon on the card.
  - Set `image` to a photo path (e.g. `/me.jpg`, placed in the `public/`
    folder) to replace the initials placeholder with a real picture.
- **`services`** — the three service cards.
- **`projects`** — your portfolio grid. Set `type` to `"image"` or
  `"video"` to change the placeholder icon on the thumbnail.

### Adding real project screenshots

Drop images into the `public/` folder (e.g. `public/projects/bookstore.png`)
and replace the placeholder `<div>` in `src/components/ProjectCard.jsx`
with an `<img src={...} className="h-44 w-full object-cover" />`.

### Making the contact form send email directly

Right now, submitting the contact form opens the visitor's own email app
with a pre-filled message (via a `mailto:` link) — this works immediately,
with no setup. If you'd rather receive submissions directly on a server,
wire up a free form backend like [Formspree](https://formspree.io) or
[EmailJS](https://www.emailjs.com) inside `handleSubmit` in
`src/components/Contact.jsx`.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects the **Vite** framework preset:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy** — that's it.

You can also deploy from the command line with the [Vercel CLI](https://vercel.com/docs/cli):

```bash
npm i -g vercel
vercel
```

## Tech stack

- [React 18](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) for icons
