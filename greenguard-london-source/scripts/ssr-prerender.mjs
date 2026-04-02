/**
 * SSR Pre-render script using Vite's SSR build.
 * Renders every route server-side (no Chrome needed) and writes full HTML.
 *
 * Run: node scripts/ssr-prerender.mjs
 * (after: vite build && vite build --ssr src/entry-server.jsx)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const ssrDir = join(__dirname, '..', 'dist-ssr')

// ── Routes — must match every <Route path> in src/App.jsx ────────────────────
const routes = [
  '/',
  '/services',
  '/pricing',
  '/about',
  '/contact',
  '/faq',
  '/reviews',
  '/gallery',
  '/privacy',
  '/thank-you',
]

console.log('\n🚀  GreenGuard London — SSR Pre-rendering (no Chrome needed)\n')

// Load the SSR server bundle
const ssrEntryPath = join(ssrDir, 'entry-server.js')
if (!existsSync(ssrEntryPath)) {
  console.error(`❌  SSR bundle not found at ${ssrEntryPath}`)
  console.error('   Run: npx vite build --ssr src/entry-server.jsx --outDir dist-ssr first')
  process.exit(1)
}

const { render } = await import(pathToFileURL(ssrEntryPath))

// Load the client HTML template
const templatePath = join(distDir, 'index.html')
if (!existsSync(templatePath)) {
  console.error('❌  dist/index.html not found. Run: npx vite build first')
  process.exit(1)
}
const template = readFileSync(templatePath, 'utf-8')

let success = 0
let failed = 0

for (const route of routes) {
  try {
    process.stdout.write(`🔄  ${route.padEnd(14)} `)

    const { html: appHtml, helmet } = render(route)

    // Inject rendered app HTML into the #root div
    let fullHtml = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    )

    // Inject Helmet-managed head tags (title, meta, canonical) if available
    if (helmet) {
      // Replace title
      const helmetTitle = helmet.title?.toString()
      if (helmetTitle) {
        fullHtml = fullHtml.replace(/<title>[^<]*<\/title>/, helmetTitle)
      }
      // Inject meta / link tags into head
      const metaTags = [
        helmet.meta?.toString(),
        helmet.link?.toString(),
      ].filter(Boolean).join('\n  ')

      if (metaTags) {
        fullHtml = fullHtml.replace('</head>', `  ${metaTags}\n</head>`)
      }
    }

    // Write to dist/<route>/index.html
    const slug = route === '/' ? '' : route.slice(1)
    const outDir = join(distDir, slug)
    mkdirSync(outDir, { recursive: true })
    const outFile = join(outDir, 'index.html')
    writeFileSync(outFile, fullHtml, 'utf-8')

    const charCount = appHtml.length
    console.log(`✅  ${charCount.toLocaleString()} chars`)
    success++
  } catch (err) {
    console.log(`❌  ERROR: ${err.message}`)
    failed++
  }
}

console.log('\n' + '━'.repeat(52))
console.log(`✅  Pre-rendering complete — ${success}/${routes.length} routes`)
if (failed) {
  console.log(`⚠️   ${failed} route(s) had issues — see above`)
}

// ── Verification ─────────────────────────────────────────────────────────────
console.log('\n🔍  Verifying output...\n')
const checks = [
  { file: 'index.html',          keyword: 'GreenGuard',  label: 'Homepage'  },
  { file: 'pricing/index.html',  keyword: '$',           label: 'Pricing'   },
  { file: 'services/index.html', keyword: 'Lawn',        label: 'Services'  },
  { file: 'contact/index.html',  keyword: 'contact',     label: 'Contact'   },
]

let allPassed = true
for (const { file, keyword, label } of checks) {
  const filePath = join(distDir, file)
  if (!existsSync(filePath)) {
    console.log(`  ❌  MISSING: ${file}`)
    allPassed = false
    continue
  }
  const content = readFileSync(filePath, 'utf-8')
  const rootMatch = content.match(/id="root">([\s\S]*?)<\/div>\s*(?:<!--|<form|<script)/m)
  const rootContent = rootMatch?.[1] ?? ''

  if (rootContent.includes(keyword)) {
    console.log(`  ✅  ${label}: "${keyword}" found in #root ✓`)
  } else if (content.includes(keyword)) {
    console.log(`  ⚠️   ${label}: "${keyword}" found but not inside #root`)
    allPassed = false
  } else {
    console.log(`  ❌  ${label}: "${keyword}" not found`)
    allPassed = false
  }
}

console.log()
if (allPassed) {
  console.log('🎉  ALL CHECKS PASSED — pre-rendering is working!')
  console.log('\n   Next steps:')
  console.log('   1. Deploy the dist/ folder to Netlify')
  console.log('   2. curl -s https://greenguardlondon.ca | grep -c "GreenGuard"')
  console.log('   3. Should return 10+ (content visible to Google\'s bot)\n')
} else {
  console.log('⚠️   Some checks failed — review the output above\n')
  process.exit(1)
}
