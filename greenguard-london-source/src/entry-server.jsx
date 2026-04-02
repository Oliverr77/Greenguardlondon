/**
 * SSR entry point for pre-rendering.
 * Used by scripts/ssr-prerender.mjs to generate static HTML for each route.
 */
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  )
  const { helmet } = helmetContext
  return { html, helmet }
}
