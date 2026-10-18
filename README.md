# EAK International School — Admissions Landing Page

A high-quality, fully responsive **admissions landing page** for the fictional
**EAK International School**, built for the academic session **2027–28**.

> **Inform → Build Trust → Answer Questions → Encourage Admission Enquiry**

This is a **frontend-only** project. All content is hard-coded, all
interactions run in the browser, and no backend, database, authentication, or
real form submission is used — exactly as the assignment specifies.

---

## Table of contents

1. [Live preview](#live-preview)
2. [Sections implemented](#sections-implemented)
3. [Working interactions](#working-interactions)
4. [Tech stack & libraries](#tech-stack--libraries)
5. [Getting started](#getting-started)
6. [Available scripts](#available-scripts)
7. [Project structure](#project-structure)
8. [Imagery & assets](#imagery--assets)
9. [Responsive & accessibility notes](#responsive--accessibility-notes)
10. [Design system](#design-system)
11. [Notes & disclaimers](#notes--disclaimers)

---

## Live preview

Run the project locally with `npm run dev` and open the URL printed in the
terminal (typically `http://localhost:5173`).

---

## Sections implemented

All 12 required sections are delivered on a single, cohesive landing page:

| #   | Section                | What it contains                                                                                              |
| --- | ---------------------- | ------------------------------------------------------------------------------------------------------------- |
| 01  | Hero                   | School name, "Admissions Open", academic session, value proposition, and Apply / Schedule a Visit / Enquire. |
| 02  | Why choose this school | 8 differentiators (faculty, results, infrastructure, holistic development, safety, technology, ratio, skills). |
| 03  | Academic programs      | Primary, Middle, Secondary, and Senior Secondary — class/age range, description, and key features.            |
| 04  | School highlights      | 4 animated credibility statistics (years, alumni, faculty, activities).                                        |
| 05  | Facilities             | Visual grid of 8 facilities with real photography and icons.                                                  |
| 06  | Admission process      | A clear 5-step numbered flow: Enquiry → Application → Assessment → Selection → Enrollment.                     |
| 07  | Important dates        | 5 date cards covering the full admission cycle.                                                                |
| 08  | Required documents     | A readable checklist with check icons and a tip callout.                                                       |
| 09  | Fee information        | Responsive fee table (desktop) / cards (mobile) for the three grade ranges, plus inclusion notes.             |
| 10  | Parent testimonials    | 4 parent testimonials with avatars and star ratings.                                                          |
| 11  | FAQ                    | 6 questions in an accessible accordion with smooth expand/collapse.                                           |
| 12  | Final call to action   | "Give your child a future-ready education" with Apply, Book a Campus Visit, and Talk to Admissions.           |

---

## Working interactions

All calls-to-action do something meaningful on click — nothing is a dead link.

- **Apply Now / Enquire Now** — opens a frontend-only enquiry modal with a
  form. Submitting shows a success confirmation with the parent's name. No
  data is stored or sent.
- **Schedule a Visit / Book a Campus Visit** — smooth-scrolls to the
  Admission Process section.
- **Talk to Admissions / phone links** — initiate a `tel:` call to the
  school's admissions number.
- **FAQ accordion** — click any question to expand/collapse its answer with a
  smooth height animation; only one stays open at a time.
- **Sticky header** — transparent over the hero, turns solid white on scroll,
  with scroll-spy active-link highlighting and a slide-down mobile drawer.
- **Scroll-reveal animations** — sections and cards fade up gently as they
  enter the viewport.
- **Animated count-up statistics** — the highlights numbers count up when
  scrolled into view.
- **Mobile menu** — a toggle drawer for navigation on small screens.

---

## Tech stack & libraries

| Tool                | Purpose                                            |
| ------------------- | -------------------------------------------------- |
| **React 18**        | UI library                                         |
| **TypeScript**      | Type-safe JavaScript                               |
| **Vite**            | Dev server & build tool                            |
| **Tailwind CSS 3**  | Utility-first styling with a custom design system  |
| **lucide-react**    | Icon set                                           |
| **Google Fonts**    | Plus Jakarta Sans (display) + Inter (body)         |

No backend, database, API integration, authentication, or real form
submission is used — the project is frontend-only by design.

---

## Getting started

### Prerequisites

- **Node.js 18+** and npm (comes with Node)

### Install & run

```bash
# 1. install dependencies
npm install

# 2. start the dev server
npm run dev

# 3. open the printed URL in your browser
#    (typically http://localhost:5173)
```

### Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

---

## Available scripts

| Script              | What it does                                  |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Start the Vite dev server with hot reload.     |
| `npm run build`     | Type-check-free production build to `dist/`.   |
| `npm run preview`   | Serve the production build locally.            |
| `npm run typecheck` | Run `tsc --noEmit` to check types.             |
| `npm run lint`      | Run ESLint over the project.                   |

---

## Project structure

```
project/
├── index.html              # HTML entry, fonts, meta tags
├── package.json            # Dependencies & scripts
├── tailwind.config.js      # Custom color ramps, fonts, animations
├── vite.config.ts          # Vite config + @/ path alias
├── README.md               # This file
└── src/
    ├── App.tsx             # Page composition (all sections in order)
    ├── main.tsx            # React entry point
    ├── index.css           # Tailwind base + design system utilities
    ├── components/         # One file per section + shared UI
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── WhyChoose.tsx
    │   ├── Programs.tsx
    │   ├── Highlights.tsx
    │   ├── Facilities.tsx
    │   ├── Process.tsx
    │   ├── DatesAndDocs.tsx
    │   ├── Fees.tsx
    │   ├── Testimonials.tsx
    │   ├── Faq.tsx
    │   ├── FinalCta.tsx
    │   ├── Footer.tsx
    │   ├── Modal.tsx           # Accessible modal (portal + Esc + scroll lock)
    │   ├── EnquiryForm.tsx     # Frontend-only form with success state
    │   ├── EnquiryProvider.tsx # Context so any CTA can open the modal
    │   └── Reveal.tsx          # Scroll-reveal wrapper
    ├── data/
    │   └── content.ts      # All hard-coded page content (single source of truth)
    └── hooks/
        └── useReveal.ts    # useReveal, useCountUp, useScrollSpy, useScrolled
```

All page content — school details, programs, fees, dates, testimonials, FAQs —
lives in **`src/data/content.ts`**, so you can edit the text in one place
without touching the components.

---

## Imagery & assets

- All photography is sourced from **Pexels** (royalty-free, license-free) and
  loaded directly from Pexels CDN URLs.
- **No local image assets are required** to run the page — everything works
  out of the box once dependencies are installed.
- Icons are from **lucide-react** and bundled with the app.

---

## Responsive & accessibility notes

- **Responsive** across mobile, tablet, and desktop with Tailwind breakpoints
  (`sm`, `md`, `lg`, `xl`). The fee table collapses to cards on mobile, the
  header collapses to a drawer, and all grids reflow.
- **Accessible** basics:
  - Semantic landmarks (`header`, `main`, `footer`, `nav`, `section`).
  - A "Skip to content" link for keyboard users.
  - Visible focus rings on all interactive elements.
  - The enquiry modal traps attention, closes on `Esc`, and uses
    `role="dialog"` + `aria-modal`.
  - FAQ accordion buttons use `aria-expanded`.
  - All images have descriptive `alt` text.
  - Sufficient color contrast on light and dark backgrounds.

---

## Design system

Defined in `tailwind.config.js` and `src/index.css`:

- **Color ramps:** `brand` (blue), `ink` (neutral), `gold` (accent),
  `success`, `warning`, `error` — each with multiple shades.
- **Typography:** Plus Jakarta Sans for headings, Inter for body, with
  balanced line spacing (150% body, ~110% headings).
- **Spacing:** 8px-based scale via Tailwind defaults.
- **Components:** reusable `.btn`, `.btn-primary`, `.btn-secondary`,
  `.btn-ghost`, `.card`, `.section-eyebrow`, and `.chip` classes.
- **Motion:** custom keyframes for `fade-up`, `fade-in`, `float-slow`, and a
  `reveal` utility for scroll-triggered animations.

---

## Notes & disclaimers

- **EAK International School is fictional.** All statistics, dates, fees,
  testimonials, and contact details are sample/dummy data, as permitted by
  the assignment.
- The enquiry form **simulates** submission with a short delay and shows a
  confirmation message — no data leaves the browser.
- This project was built as a second-round hiring assignment for
  **EAK Pustak Pvt. Ltd.** (Project 02 — School Admissions Landing Page).
