# EAK International School — Admissions Landing Page

A modern, responsive admissions landing page for the fictional **EAK International School**, designed for the academic session **2027–28**.

**Inform → Build Trust → Answer Questions → Encourage Admission Enquiry**

## Live Preview

**Live Website:** https://eak-school-landing.vercel.app/

**GitHub Repository:** https://github.com/aryan-7050/eak-school-landing

Explore the deployed website to view the admissions landing page and its frontend interactions.

## Sections Implemented

All 12 required sections are included in the landing page:

| # | Section | Description |
|---|---|---|
| 01 | Hero | School introduction, Admissions Open announcement, academic session and primary CTAs |
| 02 | Why Choose EAK | Eight school differentiators covering academics, faculty, safety and development |
| 03 | Academic Programs | Primary, Middle, Secondary and Senior Secondary levels |
| 04 | School Highlights | Four sample statistics highlighting school achievements |
| 05 | Facilities | Eight visual cards showcasing school facilities |
| 06 | Admission Process | Five steps from enquiry to enrollment |
| 07 | Important Dates | Five sample admission milestones |
| 08 | Required Documents | Checklist of documents needed for admission |
| 09 | Fee Information | Responsive fee table and mobile-friendly fee cards |
| 10 | Parent Testimonials | Four sample testimonials with ratings |
| 11 | FAQ | Six frequently asked questions with expandable answers |
| 12 | Final Call to Action | Apply Now, Book a Campus Visit and Talk to Admissions |

## Working Interactions

- **Apply Now / Enquire Now:** Opens a frontend-only enquiry modal.
- **Enquiry Form:** Collects sample parent and student details and displays a confirmation message.
- **Schedule a Visit / Book a Campus Visit:** Navigates to the admission process section.
- **Talk to Admissions:** Uses a `tel:` link to initiate a phone call.
- **FAQ Accordion:** Expands and collapses answers.
- **Sticky Navigation:** Changes appearance on scroll and highlights the active section.
- **Mobile Navigation:** Provides a collapsible navigation drawer.
- **Scroll Animations:** Reveals sections and cards as they enter the viewport.
- **Animated Statistics:** Counts up the school highlight numbers when they become visible.

All interactions are frontend-only. No real admission data is submitted or stored.

## Tech Stack & Libraries

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| TypeScript | Type-safe application development |
| Vite | Development server and production build |
| Tailwind CSS | Responsive styling and utility classes |
| lucide-react | Icons |
| Google Fonts | Plus Jakarta Sans and Inter typography |

For exact dependency versions and available scripts, refer to `package.json`.

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/aryan-7050/eak-school-landing.git
cd eak-school-landing
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal, typically `http://localhost:5173`.

### Production Build

Build the application:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run lint checks if the script is available:

```bash
npm run lint
```

## Project Structure

```text
eak-school-landing/
├── index.html
├── package.json
├── vite.config.ts
├── README.md
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    ├── components/
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── WhyChoose.tsx
    │   ├── Programs.tsx
    │   ├── HighLights.tsx
    │   ├── Facilities.tsx
    │   ├── Process.tsx
    │   ├── DatesAndDocs.tsx
    │   ├── Fees.tsx
    │   ├── Testimonials.tsx
    │   ├── Faq.tsx
    │   ├── FinalCta.tsx
    │   ├── Footer.tsx
    │   ├── Modal.tsx
    │   ├── EnquiryForm.tsx
    │   ├── EnquiryProvider.tsx
    │   └── Reveal.tsx
    ├── data/
    │   └── content.ts
    └── hooks/
        └── useReveal.ts
```

The project uses reusable React components to organize the landing page into manageable sections. Shared page content is maintained in `src/data/content.ts`.

*Note: The structure above reflects the documented project layout. Check the repository if any files have been renamed or moved.*

## Imagery & Assets

- School imagery is sourced from externally hosted Pexels image URLs.
- Icons are provided by `lucide-react`.
- External images require an internet connection to load.
- No backend or local image assets are required for the documented frontend implementation.

## Responsive Design & Accessibility

The landing page is designed for mobile, tablet and desktop screens.

Key considerations include:

- Responsive grids and layouts.
- Mobile navigation.
- Mobile-friendly fee cards.
- Semantic HTML landmarks.
- Keyboard focus indicators.
- Descriptive image alternative text.
- Accessible FAQ controls.
- Modal dialog semantics and keyboard dismissal.

Actual accessibility and responsive behavior should be verified in the deployed application.

## Design System

The interface uses a consistent visual system with:

- Blue primary colors and neutral backgrounds.
- Gold accent colors.
- Plus Jakarta Sans headings and Inter body text.
- Reusable buttons, cards and section labels.
- Consistent spacing and responsive layouts.
- Subtle animations and transitions.

## Assignment Scope

This project was developed for the **EAK Pustak Pvt. Ltd. — Second-Round Hiring Assignment, Project 02: School Admissions Landing Page**.

The assignment permits hard-coded sample content and frontend-only interactions. Therefore:

- No backend or database is required.
- No authentication or API integration is implemented.
- Enquiry submission is simulated in the browser.
- Statistics, fees, dates, testimonials and contact details are fictional sample data.

## Author & Project Links

- **Live Demo:** https://eak-school-landing.vercel.app/
- **Source Code:** https://github.com/aryan-7050/eak-school-landing

