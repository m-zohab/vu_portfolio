// ─────────────────────────────────────────────────────────────────────────
// SITE DATA
// This is the ONLY file most people editing this site need to touch.
// Update the values below with your real details, and every section of the
// site (Navbar, Hero, About, Contact, WhatsApp button, Footer) updates
// automatically.
// ─────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  brandName: "ScholarStack",
  tagline: "VU Academic & Project Partners",

  // WhatsApp number in international format, digits only (no "+", spaces or dashes).
  // Example for Pakistan: country code 92 + number without the leading 0.
  whatsappNumber: "923001234567",

  // Prefilled message that opens automatically in the WhatsApp chat.
  whatsappMessage:
    "Hi! I found your portfolio and I'd like to discuss my VU project/assignment.",

  email: "muhammadzohaib4042@gmail.com",
};

// ─────────────────────────────────────────────────────────────────────────
// PARTNERS
// Set "image" to a real photo path (e.g. "/partner1.jpg" placed in /public)
// once you have one. Leave it as null to show the initials placeholder.
//
// Leave "github" or "linkedin" as an empty string ("") to automatically
// HIDE that icon on the card — this is handled by PartnerCard.jsx, which
// only renders a social icon when the corresponding URL is truthy.
// ─────────────────────────────────────────────────────────────────────────

export const partners = [
  {
    id: "partner-1",
    name: "Musharib Ahmad Khan",
    semester: "BS Computer Science",
    bio: "I focus on backend architecture and database design. I've supervised 20+ VU final year projects end-to-end, from proposal defense to final viva.",
    image: null, // e.g. "/ahmed.jpg"
    initials: "AR",
    github: "",
    linkedin: "",
  },
  {
    id: "partner-2",
    name: "Muhammad Zohaib",
    semester: "4th Semester · BS Computer Science",
    bio: "I handle front-end development and LMS coordination — keeping GDBs, quizzes and assignment uploads on schedule so clients never miss a deadline.",
    image: null, // e.g. "/bilal.jpg"
    initials: "BK",
    // Example of the conditional-rendering feature: this partner has no
    // GitHub link yet, so the GitHub icon will simply not appear on his card.
    github: "https://github.com/m-zohab/",
    linkedin: "",
  },
];

// ─────────────────────────────────────────────────────────────────────────
// SERVICES
// "icon" holds a lucide-react component reference, imported where used.
// ─────────────────────────────────────────────────────────────────────────

export const services = [
  {
    id: "fyp",
    title: "Final Year Projects",
    description:
      "Complete FYP guidance for VU students — from proposal and SRS writing to full-stack development and defense preparation.",
    features: [
      "Proposal & SRS documentation",
      "Full-stack development",
      "Viva & defense preparation",
    ],
  },
  {
    id: "assignments",
    title: "Assignment & Quiz Solutions",
    description:
      "Accurate, well-researched solutions for assignments and quizzes across CS, SE and IT courses — always ahead of your deadline.",
    features: [
      "Subject-matter accuracy",
      "Delivered before deadline",
      "100% original work",
    ],
  },
  {
    id: "lms",
    title: "Complete LMS Management",
    description:
      "We handle your entire VU LMS activity — GDBs, assignment uploads, quiz attempts and progress tracking — so nothing slips through.",
    features: [
      "GDB participation",
      "Deadline tracking & reminders",
      "End-to-end LMS handling",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────
// PORTFOLIO PROJECTS
// "type" is "image" or "video" — it only changes the placeholder icon shown
// on the thumbnail. Swap in a real <img> or <video> once you have assets.
// ─────────────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: "project-1",
    title: "Online Bookstore Management System",
    description:
      "A VU FYP for a full-featured bookstore platform with an admin dashboard, order tracking and inventory management.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    type: "image",
  },
  {
    id: "project-2",
    title: "Hospital Management System",
    description:
      "Patient records, appointment scheduling and billing built as a desktop-style Java application with a MySQL backend.",
    tags: ["Java", "MySQL"],
    type: "image",
  },
  {
    id: "project-3",
    title: "Student Attendance Tracker",
    description:
      "A real-time attendance dashboard for instructors, with live updates and exportable reports.",
    tags: ["React", "Firebase", "Tailwind"],
    type: "video",
  },
  {
    id: "project-4",
    title: "E-Learning Quiz Portal",
    description:
      "A timed quiz engine with auto-grading and a results dashboard, built for a private tutoring academy.",
    tags: ["Node.js", "MongoDB", "React"],
    type: "image",
  },
  {
    id: "project-5",
    title: "Inventory & Billing System",
    description:
      "A point-of-sale and stock management tool for a retail client, with barcode support and sales analytics.",
    tags: ["Laravel", "PHP", "MySQL"],
    type: "image",
  },
  {
    id: "project-6",
    title: "AI-based Plagiarism Checker",
    description:
      "An NLP-driven tool that compares submitted text against a reference corpus and highlights similarity scores.",
    tags: ["Python", "Django", "scikit-learn"],
    type: "video",
  },
];
