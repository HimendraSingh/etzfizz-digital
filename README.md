# ITZFIZZ Scroll-Driven Hero Animation

A high-performance, submission-ready frontend web development internship assignment for **Itzfizz Digital**.

---

## 🌟 Project Overview

**ITZFIZZ Digital** is a modern, premium web development and digital agency platform engineered to showcase cutting-edge scroll-driven interactions, subtle initial load choreography, and GPU-accelerated motion.

The central hero section features a pinned viewport with an abstract 3D digital object that dynamically transforms in direct response to the user's scroll depth using **GSAP** and **GSAP ScrollTrigger**.

---

## ✨ Features

- **Scroll-driven hero animation**: Pinned hero section where user scrolling directly controls horizontal/diagonal translations, 3D rotations, and subtle scaling without autoplay timers.
- **GSAP ScrollTrigger**: Scrub-based timeline binding with `anticipatePin`, smooth inertia (`scrub: 1.2`), and scoped React cleanup (`ctx.revert()`).
- **Initial load animations**: Staggered character reveal on the main heading (`W E L C O M E   I T Z F I Z Z`), smooth navbar fade-in, upward paragraph slide, and sequential statistics display.
- **Responsive design**: Seamless layout adaptivity across 375px mobile, 768px tablet, 1024px laptop, and 1440px desktop using `gsap.matchMedia()`.
- **Modern UI**: Dark luxury agency aesthetic with frosted glassmorphism, glowing cyber grid mesh, refined typography, and subtle neon gradients.
- **Performance-focused animation**: Exclusively utilizes hardware-accelerated CSS `transform` (`x`, `y`, `scale`, `rotation`, `rotationY`, `rotationX`) and `opacity` properties to prevent costly DOM layout reflows and guarantee 60 FPS.

---

## 🛠 Tech Stack

- **React** (v18)
- **Vite** (v5)
- **JavaScript** (ES6+)
- **CSS** (Custom properties & Glassmorphism)
- **GSAP** (GreenSock Animation Platform v3)
- **ScrollTrigger** (GSAP Scroll Plugin)
- **Lucide React** (Crisp vector icons)

---

## 📁 Project Structure

```text
itzfizz-scroll-hero/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Responsive navigation with slide-down mobile menu
│   │   ├── Hero.jsx              # Pinned ScrollTrigger hero with entrance animation
│   │   ├── DigitalCoreVisual.jsx # Abstract 3D SVG/CSS digital core with interactive tilt
│   │   ├── Stats.jsx             # Impact metrics (85% Perf, 92% UX, 78% Growth)
│   │   ├── Services.jsx          # "WHAT WE BUILD" (3 Interactive service cards)
│   │   ├── About.jsx             # "WHY ITZFIZZ" (3 Core agency pillars)
│   │   ├── CTA.jsx               # "Let's Build Something Amazing" call-to-action
│   │   └── Footer.jsx            # Studio footer with social links & back-to-top
│   ├── App.jsx                   # Main layout assembler
│   ├── index.css                 # Dark luxury design tokens & cyber grid
│   └── main.jsx                  # React DOM entry point
├── index.html                    # SEO meta tags, Google Fonts, SVG favicon
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite build configuration
├── .gitignore                    # Git ignore specifications
└── README.md                     # Documentation
```

---

## 🚀 Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd itzfizz-scroll-hero
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

The application will be accessible at `http://localhost:5173/`.

---

## 📦 Build

To create an optimized production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment Guide

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root directory.
3. Select default settings (Framework: **Vite**, Output: `dist`).

### Deploy to Netlify
1. Connect your GitHub repository to [Netlify](https://www.netlify.com).
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. Deploy site.

---

## 👤 Author

- **Name**: Himendra Singh
- **Assignment**: Itzfizz Digital Frontend / Web Development Internship Submission
