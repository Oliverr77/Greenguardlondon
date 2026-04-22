import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const blogSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Spring Lawn Care Guide 2026: Prepare Your London, ON Property',
    description:
      'Step-by-step spring lawn care tips for Ontario properties. Learn dethatching, fertilization, and weed control from Greenguard London experts.',
    author: { '@type': 'Person', name: 'GreenGuard London Team' },
    publisher: {
      '@type': 'Organization',
      name: 'Greenguard London',
      url: 'https://greenguardlondon.ca',
    },
    datePublished: '2026-04-06',
    dateModified: '2026-04-06',
    image: 'https://greenguardlondon.ca/og-image.jpg',
    url: 'https://greenguardlondon.ca/blog',
    inLanguage: 'en-CA',
    keywords:
      'spring lawn care London Ontario, dethatching, aeration, lawn fertilization, weed control, spring yard cleanup',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When should I start spring lawn care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Early April is ideal for Ontario. Soil temps hit 10°C, grass breaks dormancy and is ready for its first mow, fertilization, and any dethatching.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does spring lawn cleanup cost in London Ontario?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Greenguard London spring cleanup packages start at $479 for the season. Single-visit spring cleanups are quoted on-site based on property size.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is dethatching necessary every year?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not always. Dethatch if the thatch layer exceeds 1.5 cm. Most London lawns benefit from dethatching every 2–3 years, combined with annual aeration.',
        },
      },
      {
        '@type': 'Question',
        name: "Are Greenguard London's lawn treatments pet-safe?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We use eco-friendly, pet-safe fertilizer and weed control products. We advise keeping pets off treated areas for 2–4 hours after application.',
        },
      },
    ],
  },
]

export default function Blog() {
  return (
    <>
      <SEO
        title="Spring Lawn Care Guide 2026 | London, Ontario Checklist"
        description="Step-by-step spring lawn care tips for Ontario properties. Learn dethatching, fertilization, and weed control from Greenguard London experts."
        path="/blog"
        keywords="spring lawn care London Ontario, spring yard cleanup London ON, lawn fertilization London, dethatching London Ontario, professional landscapers London ON"
        schema={blogSchema}
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Greenguard London — Spring 2026 Guide
          </p>
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4 leading-tight">
            Spring Lawn Care Guide 2026: Prepare Your London, ON Property
          </h1>
          <p className="text-green-200 max-w-2xl mx-auto text-lg">
            Expert tips for dethatching, fertilization, and weed control — so your lawn bounces back strong this season.
          </p>
          <p className="text-green-300 text-sm mt-4">Published April 6, 2026 · 8 min read</p>
        </div>
      </section>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-14 text-gray-700 leading-relaxed">

        <p className="text-lg mb-8">
          London, Ontario winters are hard on grass. By the time the snow melts and the ground thaws,
          most lawns are matted, compacted, and nutrient-depleted. The good news? A focused spring lawn
          care routine — done in the right order — can transform even a tired yard into thick, green turf
          by mid-May. This guide walks you through exactly what to do, when to do it, and when it makes
          more sense to call in{' '}
          <Link to="/services" className="text-green-700 font-semibold hover:underline">
            professional lawn care services
          </Link>{' '}
          rather than go it alone.
        </p>

        {/* H2 1 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Spring Lawn Cleanup: Why April Is Critical in Ontario
        </h2>
        <p className="mb-4">
          Most Ontario homeowners wait until the lawn "looks ready." That's usually too late. The window
          to act is early April — when soil temperatures climb above 10°C and cool-season grasses like
          Kentucky bluegrass and fescue start breaking dormancy. Miss this window and you're playing
          catch-up all season.
        </p>
        <p className="mb-4">
          Your first task is a thorough spring yard cleanup: rake out dead matted grass (called winter
          kill), remove any debris that accumulated under snow, and clear your garden beds of dead
          foliage. This isn't just cosmetic. Matted debris blocks sunlight and traps moisture, creating
          perfect conditions for fungal diseases like snow mould to take hold.
        </p>
        <p className="mb-8">
          If your property has a lot of ground to cover — or you're juggling a busy schedule — this is
          exactly the kind of job our{' '}
          <Link to="/services" className="text-green-700 font-semibold hover:underline">
            spring cleanup service
          </Link>{' '}
          is built for. We handle the debris removal, bed prep, and first-cut all in one visit.
        </p>

        {/* H2 2 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Dethatching & Aeration: The Secret to Thick Green Grass
        </h2>
        <p className="mb-4">
          Thatch is the layer of dead grass stems and roots that builds up between the soil surface and
          the living grass blades. A thin layer (under 1.5 cm) is actually beneficial — it acts as
          insulation. But when thatch exceeds 1.5 cm, it starts blocking water, air, and nutrients from
          reaching the root zone.
        </p>
        <p className="mb-4">
          <strong>Dethatching</strong> uses a scarifying rake or power dethatcher to physically pull
          that layer out. It's aggressive but necessary every 2–3 years for most London lawns. Follow
          immediately with{' '}
          <strong>core aeration</strong> — a machine punches small plugs out of the soil, relieving
          compaction and opening channels for fertilizer and water to penetrate deeply.
        </p>
        <p className="mb-8">
          Aeration is especially important for clay-heavy soils common in London's older neighbourhoods
          like Old North and Byron, where compaction builds up faster. The best time to aerate is early
          spring, right after your spring cleanup and before your first fertilizer application.
        </p>

        {/* H2 3 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Lawn Fertilization & Weed Control (Without Killing Your Pets)
        </h2>
        <p className="mb-4">
          Once the lawn is cleaned up and aerated, it's ready to eat. A slow-release nitrogen fertilizer
          applied in early April gives your grass the fuel it needs to green up quickly and develop a
          dense root system before summer heat sets in. Look for a 30-0-4 or 24-0-8 formulation — high
          nitrogen, low phosphorus (Ontario's Cosmetic Pesticides Act restricts phosphorus applications
          on established lawns).
        </p>
        <p className="mb-4">
          Weed control timing is critical. Pre-emergent herbicides need to go down <em>before</em> soil
          temperatures hit 10°C — before crabgrass seeds germinate. Miss that window and you're dealing
          with post-emergent spot treatments all summer. Post-emergent broadleaf weed control (targeting
          dandelions, clover, plantain) can be applied a few weeks after your first mow once weeds are
          actively growing.
        </p>
        <p className="mb-8">
          Concerned about pets or kids? All products we use at Greenguard London are eco-friendly and
          pet-safe. We advise a 2–4 hour dry time before letting animals back on treated grass — after
          that, it's completely safe. See our full{' '}
          <Link to="/services" className="text-green-700 font-semibold hover:underline">
            fertilization and weed control services
          </Link>{' '}
          for details on what we apply and when.
        </p>

        {/* H2 4 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Professional vs. DIY: When to Call Greenguard London
        </h2>
        <p className="mb-4">
          Spring lawn care is genuinely DIY-able if you have the time, the right equipment, and a
          reasonably small property. A power dethatcher runs about $60/day to rent, a spreader for
          fertilizer is cheap, and a bag of pre-emergent costs around $40. Total DIY cost for a
          standard London lot: $120–$180 plus 4–6 hours of work.
        </p>
        <p className="mb-4">
          Where professional lawn maintenance services pay for themselves:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Properties over 5,000 sq ft — where equipment rental time and physical effort scale up fast</li>
          <li>Lawns with heavy thatch, severe compaction, or significant winter kill</li>
          <li>Homeowners who want a consistent weekly mowing schedule without managing it themselves</li>
          <li>Anyone who has tried DIY weed control and keeps losing ground to dandelions and crabgrass</li>
        </ul>
        <p className="mb-8">
          Our{' '}
          <Link to="/pricing" className="text-green-700 font-semibold hover:underline">
            seasonal lawn care packages
          </Link>{' '}
          start at $479 and include cleanup, mowing, fertilization, and weed control — everything
          handled on a schedule so you don't have to think about it.
        </p>

        {/* H2 5 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Book Your Spring Package Before Slots Fill
        </h2>
        <p className="mb-8">
          Spring is our busiest season. We start booking out routes in March, and by late April most
          weekly mowing slots in neighbourhoods like Masonville, Wortley Village, and White Oaks are
          full. If you're considering a seasonal plan, the time to lock it in is now — not when your
          lawn is already six inches tall and the neighbours are judging.
        </p>

        {/* CTA Box */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 my-10 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Skip the Guesswork?</h3>
          <p className="text-gray-600 mb-6">
            Greenguard London handles spring cleanup so you don't have to. Book a free on-site
            assessment today — we'll walk your property and give you an exact quote.
          </p>
          <Link
            to="/contact?utm_source=blog&utm_medium=cta&utm_campaign=spring2026"
            className="inline-block bg-[#2E7D32] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#1B5E20] transition"
          >
            Get Your Free Assessment
          </Link>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: 'When should I start spring lawn care?',
              a: 'Early April is ideal for Ontario. Soil temps hit 10°C, grass breaks dormancy and is ready for its first mow, fertilization, and any dethatching.',
            },
            {
              q: 'How much does spring lawn cleanup cost in London Ontario?',
              a: 'Greenguard London spring cleanup packages start at $479 for the season. Single-visit spring cleanups are quoted on-site based on property size.',
            },
            {
              q: 'Is dethatching necessary every year?',
              a: 'Not always. Dethatch if the thatch layer exceeds 1.5 cm. Most London lawns benefit from dethatching every 2–3 years, combined with annual aeration.',
            },
            {
              q: "Are Greenguard London's lawn treatments pet-safe?",
              a: 'Yes. We use eco-friendly, pet-safe fertilizer and weed control products. We advise keeping pets off treated areas for 2–4 hours after application.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-gray-100 pb-6">
              <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
              <p className="text-gray-600">{a}</p>
            </div>
          ))}
        </div>

        {/* Footer nav */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4 text-sm">
          <Link to="/services" className="text-green-700 hover:underline font-medium">
            View All Services →
          </Link>
          <Link to="/pricing" className="text-green-700 hover:underline font-medium">
            See Seasonal Packages →
          </Link>
          <Link to="/contact" className="text-green-700 hover:underline font-medium">
            Get a Free Quote →
          </Link>
        </div>
      </article>
    </>
  )
}
