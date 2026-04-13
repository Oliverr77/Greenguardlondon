import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, path = '', keywords = '', schema = null }) {
  const base = 'https://greenguardlondon.ca'
  const full = title || 'Greenguard London | Professional Lawn Care & Landscape Services | London, ON'
  const desc = description || 'Professional lawn care and landscape services in London, Ontario. Seasonal packages from $479. Weekly mowing, weed control, fertilizer programs. From the team behind SnowGuard London.'
  const url = `${base}${path}`
  const ogImage = `${base}/og-image.jpg`
  const defaultKeywords = 'lawn care London Ontario, lawn mowing London ON, landscaping London Ontario, weed control London, fertilization London ON, spring cleanup London, fall cleanup London Ontario, garden maintenance London ON, Greenguard London'

  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Greenguard London" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="London, Ontario" />
      {schema && (Array.isArray(schema) ? schema : [schema]).map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  )
}
