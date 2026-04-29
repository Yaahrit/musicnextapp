<p align="center">
  <img src="public/next.svg" alt="Aura Music Logo" width="80" />
</p>

<h1 align="center">🎵 Aura Music</h1>

<p align="center">
  <strong>Master the Art of Sound — The World's Most Immersive Music Learning Platform</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Structure</a> •
  <a href="#scripts">Scripts</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0050?style=for-the-badge&logo=framer" alt="Framer Motion" />
</p>

---

## ✨ Overview

**Aura Music** is a modern, full-stack SaaS-style music education platform built with the **Next.js 16 App Router**. It features a premium dark-mode UI, cinematic animations, an interactive shopping cart with localStorage persistence, and a curated course catalog — all delivered through a buttery-smooth, responsive experience.

> Built for learners. Designed for delight.

---

## 🎯 Features

### 🏠 Landing Page
- **Cinematic Hero Section** with animated spotlight, floating music icons, and gradient mesh background
- **Trust Indicators** — 4.9 ★ rating, 50k+ students, 200+ courses
- **Animated Moving Border CTA** powered by Framer Motion
- **Scroll-triggered Section Reveals** for Featured Courses, Testimonials, Webinars, and Instructors

### 📚 Course Catalog
- **3D Hover Card Effects** with interactive tilt via `CardContainer`
- **Real-time Search** with instant fuzzy filtering
- **Category Filters** — Instrumental, Vocal, Production, Theory
- **Add-to-Cart** directly from course cards with visual state feedback

### 🛒 Shopping Cart
- **Persistent Cart** — Backed by `localStorage` via React Context + `useReducer`
- **Animated Item Removal** with `AnimatePresence` exit transitions
- **Order Summary** with subtotal, platform fee badge, and coupon input
- **Trust Badges** — Secure checkout, 30-day money-back guarantee

### 🔐 Authentication
- **Login & Signup Pages** with form validation
- **Glassmorphic Card UI** with backdrop blur and subtle borders

### 📬 Contact
- **Split-panel Layout** — Contact info + interactive form
- **Background Beams Animation** with generative SVG patterns
- **Form Submission** with field validation and success feedback

### 🌗 Theming
- **Dark / Light / System Mode** via `next-themes`
- **HSL-based Design Tokens** for seamless theme switching
- **Custom Font Pairing** — Inter (body) + Outfit (headings) via `next/font`

### 🧩 UI Component Library
A curated set of reusable Aceternity-inspired UI primitives:

| Component | Description |
|---|---|
| `3d-card` | Interactive 3D tilt card with mouse tracking |
| `Spotlight` | Animated radial spotlight overlay |
| `animated-tooltip` | Hover tooltips with spring physics |
| `background-beams` | Generative SVG beam animation |
| `background-gradient` | Animated gradient backgrounds |
| `card-hover-effect` | Hover lift + glow card effect |
| `evervault-card` | Encrypted-text style card animation |
| `infinite-moving-cards` | Auto-scrolling testimonial carousel |
| `moving-border` | Animated border gradient buttons |
| `navbar-menu` | Animated dropdown navigation |
| `sticky-scroll-reveal` | Scroll-linked content reveal |
| `wavy-background` | Simplex noise-based wave animation |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + CSS Custom Properties |
| **Animations** | [Framer Motion 11](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Fonts** | Google Fonts (Inter, Outfit) via `next/font` |
| **Noise Generator** | [simplex-noise](https://github.com/jwagner/simplex-noise) |
| **Utilities** | [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) |
| **Linting** | [ESLint](https://eslint.org/) with `eslint-config-next` |
| **Images** | [Unsplash](https://unsplash.com/) + [Cloudinary](https://cloudinary.com/) (remote patterns) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.17
- **npm** ≥ 9 (or yarn / pnpm)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/aura-music.git
cd aura-music

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
musicnextapp/
├── public/
│   ├── courses/              # Course thumbnail images
│   ├── dp.jpg                # Founder/about page image
│   ├── next.svg              # Next.js logo
│   └── vercel.svg            # Vercel logo
│
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout (fonts, providers, navbar, footer)
│   │   ├── page.tsx          # Home page (hero, courses, testimonials, webinars)
│   │   ├── globals.css       # Global styles + CSS custom properties
│   │   ├── about/            # About page — mission, stats, journey
│   │   ├── cart/             # Shopping cart — items, order summary, checkout
│   │   ├── checkout/         # Checkout flow
│   │   ├── contact/          # Contact form + info
│   │   ├── courses/          # Course catalog — search, filter, 3D cards
│   │   ├── login/            # Authentication — login
│   │   └── signup/           # Authentication — signup
│   │
│   ├── components/           # Reusable components
│   │   ├── CourseCard.tsx     # Individual course card
│   │   ├── FeaturedCourses.tsx
│   │   ├── Footer.tsx        # Site-wide footer
│   │   ├── HeroSection.tsx   # Landing page hero
│   │   ├── Instructor.tsx    # Instructor showcase
│   │   ├── ModeToggle.tsx    # Dark/Light mode switch
│   │   ├── Navbar.tsx        # Responsive navigation
│   │   ├── TestimonialCards.tsx
│   │   ├── Toast.tsx         # Toast notification system
│   │   ├── UpcomingWebinar.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── theme-provider.tsx
│   │   └── ui/              # Aceternity-inspired UI primitives
│   │       ├── 3d-card.tsx
│   │       ├── Spotlight.tsx
│   │       ├── animated-tooltip.tsx
│   │       ├── background-beams.tsx
│   │       ├── background-gradient.tsx
│   │       ├── card-hover-effect.tsx
│   │       ├── evervault-card.tsx
│   │       ├── infinite-moving-cards.tsx
│   │       ├── moving-border.tsx
│   │       ├── navbar-menu.tsx
│   │       ├── sticky-scroll-reveal.tsx
│   │       └── wavy-background.tsx
│   │
│   ├── context/
│   │   └── CartContext.tsx    # Cart state (useReducer + localStorage)
│   │
│   ├── data/
│   │   └── music_courses.json # Course catalog data (10 courses)
│   │
│   └── utils/                # Utility functions
│
├── tailwind.config.ts        # Tailwind config (custom colors, animations, plugins)
├── next.config.mjs           # Next.js config (image domains)
├── tsconfig.json             # TypeScript configuration
├── postcss.config.js         # PostCSS configuration
└── package.json
```

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server on `localhost:3000` |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint to check code quality |

---

## 🎨 Design System

### Color Tokens (HSL)

The app uses CSS custom properties for theme-aware colors, defined in `globals.css` and consumed via Tailwind:

```
--background       → Page background
--foreground       → Default text
--primary          → Brand accent (CTAs, links, highlights)
--secondary        → Secondary surfaces
--muted            → Subdued backgrounds
--accent           → Hover states
--destructive      → Error / danger states
--border           → Subtle borders
```

### Typography

| Font | Usage | Weight |
|---|---|---|
| **Outfit** | Headings (`font-heading`) | 600–800 |
| **Inter** | Body text (`font-sans`) | 400–600 |

### Animations

| Animation | Description |
|---|---|
| `spotlight` | Radial light sweep on page load |
| `scroll` | Infinite horizontal card scroll |
| `float` | Gentle vertical bobbing (6s cycle) |
| `pulse-slow` | Slow opacity pulse (4s cycle) |

---

## 🧪 State Management

Cart state is managed through a custom `CartContext` using React's `useReducer` pattern:

```
┌────────────┐     dispatch()     ┌──────────────┐
│  Component │ ──────────────────▶ │  cartReducer │
│  (useCart)  │                    │              │
│            │ ◀────────────────── │  ADD_ITEM    │
│            │    new state        │  REMOVE_ITEM │
└────────────┘                    │  CLEAR_CART  │
                                  │  HYDRATE     │
                                  └──────┬───────┘
                                         │
                                    localStorage
                                   ("aura-cart")
```

**Actions:**
- `ADD_ITEM` — Add a course (deduplication enforced)
- `REMOVE_ITEM` — Remove by course ID
- `CLEAR_CART` — Empty the cart
- `HYDRATE` — Restore state from `localStorage` on mount

Toast notifications are co-located within the cart context for unified UX feedback.

---

## 🖼 Image Configuration

Remote images are served from pre-approved domains via `next.config.mjs`:

```js
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' },
    { protocol: 'https', hostname: 'res.cloudinary.com' },
  ],
}
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
feat:     New feature
fix:      Bug fix
docs:     Documentation changes
style:    Formatting, no code change
refactor: Code restructuring
perf:     Performance improvement
test:     Adding tests
chore:    Maintenance tasks
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with 🎶 by <strong>Aura Music</strong> &nbsp;·&nbsp; Powered by <a href="https://nextjs.org">Next.js</a>
</p>
