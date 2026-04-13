/**
 * Post-build script: Generates route-specific HTML files with unique meta tags.
 *
 * Why: In a React SPA, every route serves the same index.html with identical meta tags.
 * Google treats all pages as duplicates. This script creates subdirectories in dist/
 * with route-specific index.html files containing the correct title, description,
 * canonical URL, and OG tags for each page.
 *
 * Netlify serves static files before the SPA fallback, so dist/services/index.html
 * is served for /services, and the React app hydrates on top.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const baseUrl = 'https://greenguardlondon.ca'
const siteName = 'GreenGuard London'
const ogImage = `${baseUrl}/og-image.jpg`

// Route-specific meta data — unique per page
const routes = [
  {
    path: '/',
    title: 'GreenGuard London | Professional Lawn Care & Landscape Services | London, ON',
    description: 'Professional lawn care and landscape services in London, Ontario. Seasonal packages from $479. Weekly mowing, weed control, fertilizer programs. From the team behind SnowGuard London. Book before April 30, 2026.',
    keywords: 'lawn mowing London Ontario, landscaping London ON, lawn care London Ontario, lawn mowing cost London, weed control London, fertilization London ON, seasonal lawn package London Ontario, GreenGuard London',
  },
  {
    path: '/services',
    title: 'Lawn Care Services London ON | Mowing, Weed Control, Fertilizer | GreenGuard London',
    description: 'Full-service lawn care in London, Ontario. Weekly and bi-weekly mowing, weed control, fertilizer applications, landscaping, garden bed maintenance, spring and fall cleanups. Free quotes.',
    keywords: 'lawn mowing service London Ontario, landscaping London ON, weed control London, fertilization London Ontario, spring cleanup London, fall leaf removal London ON, garden maintenance London',
  },
  {
    path: '/pricing',
    title: 'Lawn Care Pricing London ON | Seasonal Packages from $479 | GreenGuard London',
    description: 'Transparent lawn care pricing for London, Ontario. Per cut from $49, seasonal packages from $479 with 20% Early Bird discount. Combo packages from $999. No hidden fees.',
    keywords: 'lawn mowing cost London Ontario, lawn care pricing London ON, affordable lawn care London, seasonal lawn package London Ontario, weekly lawn mowing price London',
  },
  {
    path: '/about',
    title: 'About GreenGuard London | Local Lawn Care Team | London, Ontario',
    description: 'GreenGuard London is a locally owned and operated lawn care company serving London, ON. Fully insured. From the team behind SnowGuard London — your property, protected year-round.',
    keywords: 'lawn care company London Ontario, local landscaping London ON, insured lawn care London, about GreenGuard London',
  },
  {
    path: '/contact',
    title: 'Contact GreenGuard London | Free Lawn Care Quote | London, ON',
    description: 'Get a free lawn care quote from GreenGuard London. Email info@greenguardlondon.ca or fill out our form. Serving all neighbourhoods in London, Ontario.',
    keywords: 'contact lawn care London Ontario, lawn care quote London ON, GreenGuard London contact, landscaping quote London Ontario',
  },
  {
    path: '/faq',
    title: 'Lawn Care FAQ London ON | Pricing, Services, Areas | GreenGuard London',
    description: 'Frequently asked questions about lawn mowing costs, seasonal packages, weed control, spring cleanup, and landscaping services in London, Ontario. Per cut from $49, seasonal from $599.',
    keywords: 'lawn care FAQ London Ontario, lawn mowing cost London ON, seasonal lawn care package London, weed control questions London Ontario',
  },
  {
    path: '/reviews',
    title: 'Customer Reviews | Lawn Care in London ON | GreenGuard London',
    description: 'Read what London, Ontario homeowners say about GreenGuard London lawn care services. Professional mowing, landscaping, and yard maintenance across all London neighbourhoods.',
    keywords: 'lawn care reviews London Ontario, GreenGuard London reviews, best lawn service London ON',
  },
  {
    path: '/gallery',
    title: 'Lawn Care Gallery | Before & After | GreenGuard London',
    description: 'See examples of GreenGuard London lawn care and landscaping work across London, Ontario neighbourhoods. Mowing, cleanups, garden beds, and full property care.',
    keywords: 'lawn care gallery London Ontario, landscaping photos London ON, before after lawn care London',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | GreenGuard London',
    description: 'GreenGuard London privacy policy. How we collect, use, and protect your personal information when you use our lawn care services in London, Ontario.',
    keywords: 'GreenGuard London privacy policy',
  },
  {
    path: '/blog',
    title: 'Spring Lawn Care Guide 2026 | London, Ontario Checklist',
    description: 'Step-by-step spring lawn care tips for Ontario properties. Learn dethatching, fertilization, and weed control from Greenguard London experts.',
    keywords: 'spring lawn care London Ontario, spring yard cleanup London ON, lawn fertilization London, dethatching London Ontario, professional landscapers London ON',
  },
  {
    path: '/terms',
    title: 'Terms & Conditions | Greenguard London',
    description: 'Terms and conditions for Greenguard London lawn care services, including SMS communication terms and opt-out instructions.',
    keywords: 'Greenguard London terms and conditions, SMS terms lawn care London Ontario',
  },
]

// Read the built index.html template
const template = readFileSync(join(distDir, 'index.html'), 'utf-8')

function generateHtml(route) {
  let html = template
  const url = route.path === '/' ? baseUrl + '/' : baseUrl + route.path

  // Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${route.description}"`
  )

  // Replace meta keywords
  html = html.replace(
    /<meta name="keywords" content="[^"]*"/,
    `<meta name="keywords" content="${route.keywords}"`
  )

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${url}"`
  )

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${route.title}"`
  )
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${route.description}"`
  )
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${url}"`
  )

  // Replace Twitter tags
  html = html.replace(
    /<meta property="twitter:title" content="[^"]*"/,
    `<meta property="twitter:title" content="${route.title}"`
  )
  html = html.replace(
    /<meta property="twitter:description" content="[^"]*"/,
    `<meta property="twitter:description" content="${route.description}"`
  )

  return html
}

console.log('Pre-rendering meta tags for all routes...\n')

for (const route of routes) {
  const html = generateHtml(route)

  if (route.path === '/') {
    // Overwrite root index.html with homepage-specific meta
    writeFileSync(join(distDir, 'index.html'), html)
    console.log(`  ✓ / → dist/index.html`)
  } else {
    // Create subdirectory with route-specific index.html
    const routeDir = join(distDir, route.path.slice(1))
    if (!existsSync(routeDir)) mkdirSync(routeDir, { recursive: true })
    writeFileSync(join(routeDir, 'index.html'), html)
    console.log(`  ✓ ${route.path} → dist${route.path}/index.html`)
  }
}

console.log(`\n✅ Pre-rendered ${routes.length} routes with unique meta tags.`)
