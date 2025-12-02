# EDYM Village Enterprise Website

A modern, clean website for EDYM Village Enterprise built with Next.js 15, TypeScript, Tailwind CSS, and ShadCN UI.

## Overview

This website communicates the mission, work, and impact of EDYM Village Enterprise—a social enterprise that creates sustainable economic opportunities for youth and communities in Ghana.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Deployment**: Vercel (recommended)

## Project Structure

```
edym-frontend/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── enterprise/        # Enterprise page
│   ├── business-units/    # Business units pages
│   ├── projects/          # Projects pages
│   ├── impact/            # Impact page
│   ├── blog/              # Blog pages
│   └── contact/           # Contact page
├── components/
│   ├── ui/                # ShadCN UI components
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── home/              # Home page components
│   ├── cards/             # Card components
│   └── shared/            # Shared components
├── data/                  # Data files (content)
└── public/                # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

- **Home** (`/`) - Overview, mission, featured projects
- **About** (`/about`) - About EDYM Village Enterprise
- **Enterprise** (`/enterprise`) - Detailed enterprise information
- **Business Units** (`/business-units`) - All business units
- **Projects** (`/projects`) - All projects
- **Herbal Hub** (`/projects/herbal-hub`) - Flagship project details
- **Impact** (`/impact`) - Impact metrics and stories
- **Blog** (`/blog`) - Blog posts and updates
- **Contact** (`/contact`) - Contact form and information

## Features

- ✅ Responsive design
- ✅ Modern UI with ShadCN components
- ✅ TypeScript for type safety
- ✅ Server Components for optimal performance
- ✅ Clean, investor-friendly design
- ✅ SEO-friendly structure

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Content Management

Content is currently stored in TypeScript data files in the `data/` directory:
- `enterprise.ts` - Enterprise information
- `herbalHub.ts` - Herbal Hub project details
- `businessUnits.ts` - Business unit information
- `projects.ts` - Project listings
- `impact.ts` - Impact data
- `blog.ts` - Blog posts

For production, consider migrating to a CMS like:
- Sanity
- Contentful
- Strapi
- Markdown files with MDX

## Customization

### Styling

The project uses Tailwind CSS with ShadCN UI. Customize colors and themes in:
- `app/globals.css` - Global styles and CSS variables
- `tailwind.config.js` - Tailwind configuration

### Adding Components

Use ShadCN CLI to add new components:
```bash
npx shadcn@latest add [component-name]
```

## License

Private - EDYM Village Enterprise
