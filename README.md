# Buuk - Appointment Booking Platform

This is the monorepo containing the Buuk appointment booking platform with Astro frontend and Python FastAPI backend.

## Project Structure

```
buuk/
├── astro/                 # Astro static site (main frontend) - SEO optimized
├── frontend/              # React frontend (legacy)
├── backend/               # Python FastAPI backend
├── package.json           # Root npm configuration
├── vercel.json            # Deployment configuration
└── README.md              # This file
```

## Deployment

The project is configured for deployment with the `astro/` directory as the main application.

### Deployment Commands
- **Build**: `npm run build` - Builds the Astro site
- **Preview**: `npm run preview` - Preview production build locally
- **Dev**: `npm run dev` - Start development server

### Build Output
- Output directory: `astro/dist/`
- All static files are pre-rendered at build time
- No server required (can be deployed to any static host)

### Hosting Options
- **Vercel** (recommended for Astro)
- **Netlify**
- **AWS S3 + CloudFront**
- **Any static file host**

## Development

### Local Setup
```bash
npm run dev
```

### Building
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Backend API

The FastAPI backend runs separately on `http://localhost:8000`

Documentation: See `backend/` directory

## Frontend

- **New**: Astro site in `astro/` directory (static, SEO optimized)
- **Legacy**: React frontend in `frontend/` directory

## Documentation

- `ASTRO_MIGRATION_GUIDE.md` - How to migrate from React to Astro
- `astro/README.md` - Astro-specific documentation
- `API_AUTOMATION.md` - Backend API documentation
