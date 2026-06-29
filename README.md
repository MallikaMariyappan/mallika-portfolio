# Mallika M — Developer Portfolio

> Personal portfolio website for **Mallika M** — Frontend Developer & Flutter Mobile App Developer.  
> Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.  
> Live at: _[your-vercel-url].vercel.app_

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Sections](#sections)
- [Getting Started](#getting-started)
- [Deployment (Vercel)](#deployment-vercel)
- [Customization](#customization)

---

## Overview

A single-page portfolio showcasing:

- Professional summary & hero section
- Skills & tech stack with proficiency bars
- Work experience timeline
- Key projects with tech tags
- Education & certifications
- Contact form (mailto-based)

---

## Tech Stack

| Technology        | Version   | Purpose                        |
|-------------------|-----------|--------------------------------|
| Next.js           | 16.2.9    | React framework, App Router    |
| React             | 19.2.4    | UI library                     |
| TypeScript        | ^5        | Type safety                    |
| Tailwind CSS      | ^4        | Utility-first styling          |
| lucide-react      | ^0.468    | Icon library                   |

---

## Project Structure

```
mallika-portfolio/
├── app/
│   ├── globals.css        # Global styles, utility classes, animations
│   ├── layout.tsx         # Root layout with metadata/SEO
│   └── page.tsx           # Main page — assembles all sections
├── components/
│   ├── Navbar.tsx         # Sticky nav with mobile hamburger menu
│   ├── Hero.tsx           # Hero section with stats cards
│   ├── About.tsx          # Bio, what I do, quick facts
│   ├── Skills.tsx         # Tech stack groups + proficiency bars
│   ├── Experience.tsx     # Work experience timeline
│   ├── Projects.tsx       # Project cards grid
│   ├── Education.tsx      # Degree + certifications
│   ├── Contact.tsx        # Contact info + mailto form
│   └── Footer.tsx         # Footer with social links
├── public/                # Static assets
├── vercel.json            # Vercel deployment config
├── next.config.ts         # Next.js config
├── tailwind.config        # (via postcss.config.mjs)
├── tsconfig.json          # TypeScript config
└── package.json
```

---

## Sections

### 1. Navbar
- Fixed top navigation with scroll-based glass effect
- Desktop links + mobile hamburger menu
- "Hire Me" CTA button

### 2. Hero
- Name, title, short bio
- CTA buttons: View Projects / Contact Me
- Social links: GitHub, LinkedIn, LeetCode
- Stat cards: 1.9+ Years, 3 Play Store Apps, 50+ Users, 3+ Products
- Animated floating avatar

### 3. About
- Personal story card
- What I do (bullet list)
- Quick facts (education, company, location, notice period)

### 4. Skills
- Grouped by: Frontend, Mobile, Backend/DB, Languages, Tools
- Color-coded pill tags per group
- Core proficiency progress bars (React, Flutter, JS, Node, MongoDB, Firebase)

### 5. Experience
- Vertical timeline layout
- **Frontend Developer & Mobile App Developer** at Dataspark AI Solutions (Dec 2024–Present)
- **Frontend Developer Intern** at Dataspark AI Solutions (Sep–Dec 2024)
- Promotion badge highlighted

### 6. Projects
- **IELTSGenAI** — AI-powered IELTS prep (Web + Mobile)
- **ESL English Learning App** — Flutter app, 50+ Play Store users
- **NEET/JEE Learning Platform** — Full-stack competitive exam app
- **AI-Powered Admin Panel** — Student management with RBAC

### 7. Education
- BCA from SFR College for Women (2019–2022)
- Certifications: Full Stack Dev (Infycle), Java (Besant)
- 3 Play Store apps published independently

### 8. Contact
- Email, phone, location details
- GitHub / LinkedIn / LeetCode links
- Send message form (opens mailto)

### 9. Footer
- Name, role, copyright
- Built with Next.js & Tailwind CSS

---

## Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Install & Run Locally

```bash
# Clone the repo
git clone https://github.com/<your-username>/mallika-portfolio.git
cd mallika-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Deployment (Vercel)

### Option 1 — Vercel Dashboard (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy** — done in ~2 minutes

### Option 2 — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your live URL will be:  
`https://mallika-portfolio.vercel.app`

---

## Customization

| What to change         | Where                               |
|------------------------|-------------------------------------|
| Name / bio / summary   | `components/Hero.tsx`, `About.tsx`  |
| Skills list            | `components/Skills.tsx`             |
| Work experience        | `components/Experience.tsx`         |
| Projects               | `components/Projects.tsx`           |
| Education / certs      | `components/Education.tsx`          |
| Contact info           | `components/Contact.tsx`            |
| SEO metadata           | `app/layout.tsx`                    |
| Colors / animations    | `app/globals.css`                   |

---

## License

MIT — free to use and adapt.
