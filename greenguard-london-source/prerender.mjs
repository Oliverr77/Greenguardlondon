/**
 * GreenGuard London — Full-body pre-rendering script
 *
 * Uses Vite's preview server (guaranteed ready) + Puppeteer headless Chrome
 * to render every route and capture the full HTML (head + body), so Google
 * can index real content without executing JavaScript.
 *
 * Run locally:  npm run build:full
 */

import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { preview } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// ── Routes — must match every <Route path> in src/App.jsx ───────────────────
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

const DIST_DIR = path.join(__dirname, 'dist')
const PORT = 3456  // Using 3456 to avoid conflicts with Vite dev (5173) or preview (4173)

// ── Poll until the server actually accepts connections ───────────────────────
function waitForServer(url, maxRetries = 40, interval = 500) {
  return new Promise((resolve, reject) => {
    let attempts = 0
    const check = () => {
      http.get(url, () => {
        resolve()
      }).on('error', () => {
        attempts++
        if (attempts >= maxRetries) {
          reject(new Error(`Server at ${url} did not respond after ${maxRetries} attempts`))
        } else {
          setTimeout(check, interval)
        }
      })
    }
    check()
  })
}

// ── Start Vite's built-in preview server ────────────────────────────────────
async function startVitePreview() {
  const server = await preview({
    preview: {
      port: PORT,
      strictPort: true,
      host: 'localhost',
    },
    build: {
      outDir: DIST_DIR,
    },
  })

  // Wait until HTTP is truly accepting connections
  await waitForServer(`http://localhost:${PORT}/`)
  return server
}

// ── Load Puppeteer — try full version first, then fall back to puppeteer-core ─
async function getBrowser() {
  // 1. Full puppeteer (downloads its own Chromium)
  try {
    const { default: puppeteer } = await import('puppeteer')
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    })
    console.log('  Browser: puppeteer (bundled Chromium)\n')
    return browser
  } catch (_) {}

  // 2. puppeteer-core + system Chrome (common Windows paths)
  try {
    const { default: puppeteer } = await import('puppeteer-core')
    const candidates = [
      process.env.CHROME_PATH,
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/usr/bin/google-chrome',
      '/usr/bin/chromium-browser',
    ].filter(Boolean)

    for (const executablePath of candidates) {
      if (fs.existsSync(executablePath)) {
        const browser = await puppeteer.launch({
          headless: 'new',
          executablePath,
          args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
        })
        console.log(`  Browser: puppeteer-core + ${executablePath}\n`)
        return browser
      }
    }
    throw new Error('No Chrome installation found in common paths.')
  } catch (err) {
    throw new Error(
      `Cannot launch browser.\n` +
      `Fix: npm install puppeteer --save-dev\n` +
      `  Or set CHROME_PATH=C:\\path\\to\\chrome.exe\n` +
      `  Details: ${err.message}`
    )
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function prerender() {
  console.log('\n🚀  GreenGuard London — Full body pre-rendering\n')

  // 1. Start Vite preview server (waits until HTTP is confirmed ready)
  console.log(`📡  Starting Vite preview on http://localhost:${PORT}...`)
  let viteServer
  try {
    viteServer = await startVitePreview()
    console.log('✅  Server confirmed ready\n')
  } catch (err) {
    console.error(`❌  Server failed to start: ${err.message}`)
    process.exit(1)
  }

  // 2. Launch headless browser
  console.log('🌐  Launching headless Chrome...')
  let browser
  try {
    browser = await getBrowser()
  } catch (err) {
    viteServer.httpServer.close()
    console.error(`❌  ${err.message}`)
    process.exit(1)
  }
  console.log('✅  Browser launched')
  console.log('━'.repeat(52))

  let success = 0
  let failed = 0

  // 3. Pre-render each route
  for (const route of routes) {
    const label = route.padEnd(12)
    try {
      process.stdout.write(`🔄  ${label} `)

      const page = await browser.newPage()

      // Block images/fonts/media — we only need the rendered DOM text
      await page.setRequestInterception(true)
      page.on('request', (req) => {
        if (['image', 'font', 'media'].includes(req.resourceType())) {
          req.abort()
        } else {
          req.continue()
        }
      })

      // Navigate and wait for network to go idle
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      })

      // Give React time to finish mounting (min 5 s)
      await new Promise((r) => setTimeout(r, 20000))

      // Wait until #root has real content (up to 15 s more)
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root')
          return root && root.innerHTML.trim().length > 200
        },
        { timeout: 15000 }
      ).catch(() => {})

      // Grab the fully rendered HTML
      const html = await page.content()
      const bodyChars = await page.evaluate(
        () => document.getElementById('root')?.innerHTML.trim().length ?? 0
      )
      await page.close()

      if (bodyChars < 200) {
        console.log(`⚠️  Only ${bodyChars} chars — React may not have rendered`)
        failed++
      } else {
        console.log(`✅  ${bodyChars.toLocaleString()} chars rendered`)
        success++
      }

      // Save to dist/<route>/index.html  (or dist/index.html for /)
      const slug = route === '/' ? '' : route.slice(1)
      const outDir = path.join(DIST_DIR, slug)
      fs.mkdirSync(outDir, { recursive: true })
      fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8')
    } catch (err) {
      console.log(`❌  ERROR: ${err.message}`)
      failed++
    }
  }

  // 4. Shut down
  await browser.close()
  viteServer.httpServer.close()

  console.log('━'.repeat(52))
  console.log(`\n✅  Pre-rendering complete — ${success}/${routes.length} routes`)
  if (failed) console.log(`⚠️   ${failed} route(s) had issues — see above`)

  // 5. Verify
  console.log('\n🔍  Verifying output...\n')

  const checks = [
    { file: 'index.html',          keyword: 'GreenGuard',   label: 'Homepage'  },
    { file: 'pricing/index.html',  keyword: '$599',          label: 'Pricing'   },
    { file: 'services/index.html', keyword: 'Lawn Mowing',   label: 'Services'  },
    { file: 'contact/index.html',  keyword: 'Get In Touch',  label: 'Contact'   },
  ]

  let allPassed = true
  for (const { file, keyword, label } of checks) {
    const filePath = path.join(DIST_DIR, file)
    if (!fs.existsSync(filePath)) {
      console.log(`  ❌  MISSING: ${file}`)
      allPassed = false
      continue
    }
    const content = fs.readFileSync(filePath, 'utf-8')
    // Look for keyword inside <div id="root">...</div>
    const rootMatch = content.match(/<div id="root">([\s\S]*?)<\/div>\s*(?:<!--|<form|<script)/m)
    const rootContent = rootMatch?.[1] ?? ''

    if (rootContent.includes(keyword)) {
      console.log(`  ✅  ${label}: "${keyword}" found in body ✓`)
    } else if (content.includes(keyword)) {
      console.log(`  ⚠️   ${label}: "${keyword}" found but NOT inside #root`)
      allPassed = false
    } else {
      console.log(`  ❌  ${label}: "${keyword}" not found — body still empty`)
      allPassed = false
    }
  }

  console.log()
  if (allPassed) {
    console.log('🎉  ALL CHECKS PASSED — pre-rendering is working!')
    console.log()
    console.log('   Next steps:')
    console.log('   1. Drag the dist/ folder to Netlify (app.netlify.com → Deploys)')
    console.log('   2. View Source on greenguardlondon.ca/pricing → search "$599"')
    console.log('   3. Submit sitemap: search.google.com/search-console\n')
  } else {
    console.log('⚠️   Some checks failed.')
    console.log('   Try: increase setTimeout from 5000 → 8000 and re-run npm run build:full\n')
    process.exit(1)
  }
}

prerender().catch((err) => {
  console.error('\n❌  Pre-render crashed:', err.message)
  process.exit(1)
})
