# Buuk - Salon Booking Platform

## Original Problem Statement
Migrate an existing React-based website ("vibe coded") to Astro for improved SEO and cleaner build process for deployment on Netlify and Vercel. The platform includes a marketing site for a salon booking SaaS product and a blog with an admin panel.

## Target Audience
- Salon owners looking for booking software
- Spa and wellness businesses
- Barbershops and nail salons

## Core Requirements
1. Astro static site for SEO-optimized marketing pages
2. React admin panel for blog content management
3. FastAPI backend for blog CRUD operations
4. MongoDB for data storage
5. Deployment configurations for Vercel and Netlify

## Architecture

### Tech Stack
- **Marketing Site**: Astro (SSG) with Tailwind CSS
- **Admin Panel**: React with Shadcn/UI components
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Deployment**: Vercel / Netlify

### Directory Structure
```
/app/
├── astro/              # Astro static site (marketing pages)
│   ├── src/pages/      # Homepage, features, pricing, blog, SEO pages
│   └── dist/           # Build output
├── frontend/           # React admin panel
│   └── src/components/admin/
└── backend/            # FastAPI server
    └── blog_routes.py
```

## What's Implemented

### Completed (Jan 29, 2026)
- [x] Astro migration with full design port using Tailwind CSS
- [x] SEO implementation (sitemaps, robots.txt, meta tags)
- [x] Programmatic SEO pages for solutions (salon, spa, barbershop, etc.)
- [x] Animations and interactive backgrounds
- [x] Stock images integration on homepage
- [x] Blog system with admin panel
- [x] **BUG FIX**: Admin panel text visibility (white on white issue)
- [x] **BUG FIX**: TipTapEditor content sync when editing posts
- [x] **BUG FIX**: Blog images displaying with absolute URLs
- [x] Admin access from custom domain via redirect

### Bug Fixes Detail
1. **"0 changes" bug** - Fixed by adding useEffect in TipTapEditor.jsx to sync content when editing existing posts
2. **Invisible input text** - Fixed by adding `text-gray-900 bg-white` classes to input fields in BlogEditor.jsx
3. **Blog images not showing** - Fixed by prepending backend URL to relative image paths in Astro templates

## API Endpoints
- `POST /api/admin/login` - Admin authentication
- `GET /api/admin/blog` - List all blog posts
- `POST /api/admin/blog` - Create new post
- `PUT /api/admin/blog/{id}` - Update existing post
- `DELETE /api/admin/blog/{id}` - Delete post
- `POST /api/admin/upload` - Upload image

## Credentials
- Admin Email: admin@buuk.com
- Admin Password: admin123

## Prioritized Backlog

### P1 (Next Up)
- [ ] Add stock images to SEO sub-pages (/solutions/*)
- [ ] Add default placeholder image for posts without featured images

### P2 (Future)
- [ ] Enhance SEO meta tags dynamically
- [ ] Refactor backend to return absolute image URLs directly
- [ ] Add blog post preview functionality

## Testing
- Backend: pytest tests at `/app/backend/tests/test_blog_api.py`
- Test reports: `/app/test_reports/iteration_1.json`
- All tests passing (100% success rate)

## Deployment Notes
- User must use "Save to Github" to push changes, which triggers Vercel deployment
- Production domain: onbuuk.com
