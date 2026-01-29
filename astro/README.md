# Buuk - Astro Website

This is a modern, SEO-optimized website built with [Astro](https://astro.build/), designed for the Buuk appointment booking platform.

## What is Astro?

Astro is a modern static site builder that creates ultra-fast websites with:
- **Zero JavaScript by default** - Lightning-fast page loads
- **Static Site Generation** - Perfect for SEO and performance
- **Content Collections** - Manage blog posts and content easily
- **Partial Hydration** - Only load JavaScript where needed
- **Built-in SEO** - Meta tags, sitemaps, and structured data

## Why Astro for Buuk?

1. **SEO Excellence** - Static HTML pages rank better on Google
2. **Performance** - Pagespeed scores of 95+ out of the box
3. **Developer Experience** - Write in familiar languages (HTML, CSS, JavaScript)
4. **Scalability** - Grows with your content and business
5. **Cost Effective** - Static sites are cheaper to host

## Project Structure

```
astro/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro       # Main layout for all pages
│   ├── components/
│   │   ├── Navigation.astro       # Site navigation
│   │   └── Footer.astro           # Site footer
│   ├── pages/
│   │   ├── index.astro            # Homepage
│   │   ├── features.astro         # Features page
│   │   ├── pricing.astro          # Pricing page
│   │   ├── blog.astro             # Blog listing
│   │   ├── contact.astro          # Contact form
│   │   └── 404.astro              # 404 page
│   └── styles/
├── public/
│   └── robots.txt                 # SEO robots file
├── astro.config.mjs               # Astro configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Dependencies
└── README.md                       # This file
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Building

Build the site for production:
```bash
npm run build
```

This creates a static HTML site in the `dist/` directory that can be deployed to any static hosting service.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## SEO Features

This Astro site includes:
- Automatic sitemap generation
- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data ready
- robots.txt configuration
- Canonical URLs

## Connecting to Your API

The site can fetch data from your FastAPI backend. Update the API URLs in your components:

```astro
const response = await fetch('http://localhost:8000/api/blog');
const posts = response.ok ? await response.json() : [];
```

Update the base URL in your components or create a config file for production URLs.

## Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Import `BaseLayout` and wrap your content
3. Add SEO meta tags

Example:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="New Page - Buuk"
  description="Page description for SEO"
  currentPage="new-page"
>
  <!-- Your content here -->
</BaseLayout>
```

## Styling

All styling is done with inline CSS in Astro components using the `style` attribute. This approach:
- Keeps styles with components
- Avoids CSS conflicts
- Works great for static sites

For larger styling needs, create `.css` files in `src/styles/` and import them.

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Any Static Host
Simply upload the contents of the `dist/` folder to your hosting service.

## Performance Tips

1. **Compress images** - Use WebP format
2. **Lazy load images** - Use `loading="lazy"`
3. **Minimize HTTP requests** - Combine resources
4. **Use CDN** - Serve static assets from a CDN
5. **Monitor Core Web Vitals** - Use Google PageSpeed Insights

## Learning Resources

- [Astro Documentation](https://docs.astro.build/)
- [Astro on Discord](https://astro.build/chat)
- [Astro Examples](https://github.com/withastro/astro/tree/main/examples)

## License

Copyright © 2024 Buuk. All rights reserved.
