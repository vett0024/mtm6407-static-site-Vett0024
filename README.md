# Gazel V.R — Portfolio

**Name:** Gazel V.R  
**Student Number:** [Your Student Number]  
**Static Site Generator:** Nuxt 3  

## About

Personal portfolio site built with Nuxt 3, showcasing UX design and front-end development work. Includes 10 pages across 2 layouts, site-wide navigation, and is fully responsive.

## Pages

- `/` — Home
- `/resume` — Resume
- `/portfolio` — Portfolio index
- `/contact` — Contact
- `/projects/p1` — Personal Website
- `/projects/p2` — CMS Clothing Store
- `/projects/p3` — Discover Cancún
- `/projects/p4` — Baited by the Odds
- `/projects/p5` — Photography Portfolio
- `/projects/p6` — EchoLink Mobile App

## Layouts

- `default.vue` — Used for Home, Resume, Portfolio, Contact
- `project.vue` — Used for all 6 project detail pages

## Setup

```bash
npm install
npm run dev        # development server
npm run generate   # build static output → .output/public/
```

## Deployment

Published via Netlify. Build command: `npx nuxi generate`. Publish directory: `.output/public`.
