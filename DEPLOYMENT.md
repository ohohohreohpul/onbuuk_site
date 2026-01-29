# Deployment Guide

This document explains how to deploy the Buuk Astro website.

## What Was Fixed

The original deployment error was:
```
npm error code ENOENT
npm error path /home/project/package.json
npm error Could not read package.json
```

This was fixed by:

1. **Creating a root `package.json`** at `/home/project/package.json` that the deployment system can find
2. **Configuring npm scripts** to properly navigate to the `astro/` directory
3. **Adding deployment configuration** for Vercel and other platforms
4. **Setting up `.npmrc` files** for proper npm behavior

## Project Structure for Deployment

```
project/
├── package.json          ← Root package.json (REQUIRED by deployment)
├── vercel.json           ← Deployment config for Vercel
├── .npmrc                ← npm configuration
├── astro/                ← Main Astro application
│   ├── package.json
│   ├── astro.config.mjs
│   ├── src/              ← Source code
│   ├── public/           ← Static assets
│   └── dist/             ← Build output (generated)
├── frontend/             ← Legacy React app
└── backend/              ← FastAPI backend
```

## Deployment Process

### How Deployment Works

1. **Repository is cloned** to deployment environment (e.g., `/home/project/`)
2. **npm install is run** from root directory
3. **npm run build is run** from root directory
4. **Build output** is deployed from `astro/dist/`

### Deploy Commands in Root package.json

```json
{
  "scripts": {
    "build": "cd astro && npm install && npm run build"
  }
}
```

This command:
1. Changes directory to `astro/`
2. Installs dependencies in `astro/`
3. Runs Astro build

### Configuration Files

#### vercel.json
Tells Vercel (and compatible platforms) how to build the project:
```json
{
  "buildCommand": "cd astro && npm install && npm run build",
  "outputDirectory": "astro/dist"
}
```

#### .npmrc
Ensures npm compatibility:
```
legacy-peer-deps=true
```

## Deployment Platforms

### Vercel (Recommended)
```bash
vercel deploy
```

Vercel will:
- Read `vercel.json` for build configuration
- Run the build command
- Deploy from `astro/dist/`

### Netlify
```bash
netlify deploy --prod --dir=astro/dist
```

### AWS S3 + CloudFront
1. Build locally: `npm run build`
2. Upload `astro/dist/` to S3
3. Configure CloudFront distribution

### Any Static Host
1. Build locally: `npm run build`
2. Upload contents of `astro/dist/` to your host

## Local Development

### Setup
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Environment Variables

### Development
Create `astro/.env`:
```
VITE_API_URL=http://localhost:8000
VITE_SITE_URL=http://localhost:3000
```

### Production
Update `astro/astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

## Troubleshooting

### Build Fails with "package.json not found"
Ensure the root `package.json` exists and contains:
```json
{
  "scripts": {
    "build": "cd astro && npm install && npm run build"
  }
}
```

### Build Fails with Dependencies Not Found
The root `build` script runs `npm install` in the `astro/` directory. Ensure:
1. `astro/package.json` exists
2. `astro/package.json` has all required dependencies
3. Run `npm run build` locally to test

### Static Files Not Loading
Ensure static files are in `astro/public/`:
```
astro/public/
├── robots.txt
├── site.webmanifest
└── buuklogo.png
```

### 404 Errors After Deployment
For SPA-like routing, configure your host to serve `astro/dist/index.html` for all requests. However, Astro generates static HTML for each route, so this shouldn't be necessary.

## Build Output

The build creates a `astro/dist/` directory with:
- Static HTML files for each page
- JavaScript bundles (minimal by default)
- CSS files
- Public assets (images, fonts, etc.)
- `sitemap.xml` for SEO

All files in `dist/` are ready for deployment to any static host.

## CI/CD Integration

### GitHub Actions Example
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm run build
      - name: Deploy to Vercel
        uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## Monitoring

After deployment:
1. Check Core Web Vitals with Google PageSpeed Insights
2. Monitor error logs
3. Test all major pages
4. Verify API connections work

## Rollback

If deployment fails:
1. Check deployment logs
2. Fix the issue locally
3. Commit and push to trigger new deployment
4. Or manually revert to previous deployment

## Support

For deployment issues:
- Check `DEPLOYMENT.md` (this file)
- Review Astro docs: https://docs.astro.build/
- Check Vercel docs: https://vercel.com/docs
