# Astro Migration Guide

This guide explains how to migrate your Buuk website from React to Astro for improved SEO and performance.

## Why Migrate to Astro?

### Performance Improvements
- **Page Load Speed**: 50-80% faster (static HTML vs JavaScript-heavy React)
- **Core Web Vitals**: Better scores for LCP, CLS, and FID
- **SEO**: Search engines prefer static HTML
- **Bundle Size**: 0 KB JavaScript by default

### SEO Benefits
- **Server-side rendering**: All content is in the HTML
- **Meta tags**: Easily set unique titles and descriptions
- **Structured data**: Built-in support for schema.org
- **Sitemaps**: Auto-generated sitemap.xml
- **robots.txt**: Full control over crawling

### Developer Experience
- Write in familiar languages (HTML, CSS, JavaScript)
- No complex build processes
- Reusable components
- Easy content management

## Migration Timeline

### Phase 1: Setup (Current)
- Create new Astro project
- Create basic page structure
- Set up layouts and components
- Configure SEO

### Phase 2: Content Migration
- Convert React components to Astro
- Migrate pages from React frontend
- Set up blog content collection
- Update styling

### Phase 3: API Integration
- Connect to FastAPI backend
- Test data fetching
- Implement caching strategies

### Phase 4: Deployment
- Choose hosting platform
- Deploy static build
- Set up redirects from old site
- Monitor performance

## File Structure Comparison

### React (Old)
```
frontend/
├── src/
│   ├── components/
│   │   ├── Blog.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── pages/ (via React Router)
│   ├── App.js
│   └── index.css
└── package.json
```

### Astro (New)
```
astro/
├── src/
│   ├── pages/          # Auto-routed to URLs
│   │   ├── index.astro
│   │   ├── blog.astro
│   │   └── contact.astro
│   ├── layouts/        # Reusable page layouts
│   ├── components/     # Reusable components
│   └── styles/         # Global styles
└── package.json
```

## Key Differences

### 1. No Client-Side Routing
**React**:
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**Astro**:
```
Just create files in src/pages/:
- src/pages/index.astro → /
- src/pages/blog.astro → /blog
- src/pages/contact.astro → /contact
```

### 2. No State Management
**React** (with useState):
```jsx
function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/blog').then(r => r.json()).then(setPosts);
  }, []);

  return <div>{posts.map(post => ...)}</div>;
}
```

**Astro** (server-side):
```astro
---
const response = await fetch('http://localhost:8000/api/blog');
const posts = response.ok ? await response.json() : [];
---

<div>
  {posts.map(post => (...))}
</div>
```

### 3. No useEffect/Lifecycle Hooks
**Astro** runs all code on the server at build time, so you don't need hooks.

### 4. SEO is Built-in
**React** (requires React Helmet):
```jsx
import { Helmet } from 'react-helmet';

function Page() {
  return (
    <>
      <Helmet>
        <title>Page Title</title>
        <meta name="description" content="..." />
      </Helmet>
      {/* content */}
    </>
  );
}
```

**Astro** (just use the layout):
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="Page Title"
  description="..."
>
  <!-- content -->
</BaseLayout>
```

## Migrating Components

### Step 1: Create Astro Component
Convert `Header.jsx` to `Header.astro`:

**Before (React)**:
```jsx
export function Header() {
  return (
    <header>
      <img src="/logo.png" alt="Logo" />
      <nav>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
      </nav>
    </header>
  );
}
```

**After (Astro)**:
```astro
---
export interface Props {
  currentPage?: string;
}

const { currentPage } = Astro.props;
---

<header>
  <img src="/logo.png" alt="Logo" />
  <nav>
    <a href="/" class={currentPage === 'home' ? 'active' : ''}>Home</a>
    <a href="/blog" class={currentPage === 'blog' ? 'active' : ''}>Blog</a>
  </nav>
</header>
```

### Step 2: Use in Layouts
In `BaseLayout.astro`:
```astro
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---

<html>
  <body>
    <Header />
    <slot />
    <Footer />
  </body>
</html>
```

## Converting Pages

### Example: Blog Page

**React Before**:
```jsx
import { useEffect, useState } from 'react';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/blog')
      .then(r => r.json())
      .then(setPosts);
  }, []);

  return (
    <Layout title="Blog">
      <h1>Blog</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
}
```

**Astro After**:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';

const response = await fetch('http://localhost:8000/api/blog');
const posts = response.ok ? await response.json() : [];
---

<BaseLayout title="Blog" currentPage="blog">
  <h1>Blog</h1>
  {posts.map(post => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
    </article>
  ))}
</BaseLayout>
```

## API Integration

Your FastAPI backend continues to work unchanged. Update the fetch URLs in your Astro components:

```astro
---
// Development
const API_URL = 'http://localhost:8000';

// Or use environment variables
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const response = await fetch(`${API_URL}/api/blog`);
const data = await response.json();
---
```

## Testing

Before fully migrating:

1. **Build locally**: `npm run build`
2. **Preview**: `npm run preview`
3. **Test URLs**: Verify all routes work
4. **Test API**: Ensure backend integration works
5. **Test SEO**: Use Google PageSpeed Insights

## Deployment

### Keep Both Sites Running Initially
1. Deploy Astro to new domain or subdomain
2. Keep React site running on old domain
3. Test thoroughly
4. Set up 301 redirects from old domain to new

### Set Up Redirects
In your old site, redirect users:
```javascript
window.location.href = 'https://new-buuk-astro-site.com' + window.location.pathname;
```

Or configure server redirects if possible.

## Rollback Plan

If issues arise:
1. Keep the React site deployed
2. Point DNS back to React site
3. Investigate issue
4. Redeploy Astro site

## Common Gotchas

### 1. CORS Issues
If your backend isn't allowing requests from the new domain, update CORS settings in `server.py`:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=['https://new-domain.com', 'http://localhost:3000'],
    ...
)
```

### 2. Image URLs
Make sure image paths are correct:
```astro
<!-- Public images -->
<img src="/buuklogo.png" alt="Logo" />

<!-- This also works -->
<img src="./buuklogo.png" alt="Logo" />
```

### 3. Dynamic Routes
If you have dynamic blog posts like `/blog/[slug]`, create files:
- `src/pages/blog/[slug].astro`

### 4. 404 Errors
Astro looks for `src/pages/404.astro` automatically.

## Next Steps

1. Test the new Astro site locally
2. Deploy to staging environment
3. Run performance tests (PageSpeed Insights, Lighthouse)
4. Set up redirects from old site
5. Monitor analytics after launch
6. Gradually migrate traffic to new site

## Support

- Astro Docs: https://docs.astro.build/
- Astro Discord: https://astro.build/chat
- Python FastAPI Docs: https://fastapi.tiangolo.com/

## Rollback

If you need to revert:
1. Point DNS back to React site
2. Keep the old deployment running
3. Archive the Astro deployment
4. No data loss since Astro is static HTML

---

The Astro migration positions Buuk for long-term SEO success and provides a faster experience for your users.
