import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import { Scissors, Flower2, Sprout, TreePine, Sun, Leaf, CheckCircle, Shield, Clock, Heart, Star, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Lawn Mowing',
    badge: 'Most Popular',
    badgeColor: 'bg-yellow-400 text-yellow-900',
    price: 'Starting from $45 / cut',
    desc: 'Professional-grade mowing on your schedule. We adjust blade height by season, alternate patterns to prevent soil compaction, and leave crisp edges every visit.',
    features: [
      'Per cut from $45 — no contract',
      'Biweekly Seasonal from $499/season (~13 cuts)',
      'Seasonal Pro from $699/season (20 cuts)',
      'Edge trim, string trim & blower cleanup included',
    ],
  },
  {
    icon: Sprout,
    title: 'Weed Control & Fertilization',
    badge: 'Eco-Friendly',
    badgeColor: 'bg-green-100 text-green-700',
    price: 'Starting from $49 / application',
    desc: 'Keep your lawn lush and weed-free all season long. Our pet-safe, eco-conscious treatments target weeds at the root while nourishing your grass for thick, healthy growth.',
    features: [
      'Weed control from $49 / application',
      'Full-season program $179 (4 apps, Apr–Oct)',
      'Fertilizer from $65 / application',
      'Pet-safe & eco-friendly products only',
    ],
  },
  {
    icon: Sun,
    title: 'Spring & Fall Cleanup',
    badge: 'Seasonal',
    badgeColor: 'bg-orange-100 text-orange-700',
    price: 'Starting from $149',
    desc: 'Bookend your season with a spotless property. Spring cleanup preps your beds for growth; fall cleanup clears every leaf so your lawn bounces back stronger next year.',
    features: [
      'Spring cleanup $149 — debris removal, bed prep, first mow',
      'Fall cleanup $199 — leaf removal, bed winterizing, final mow',
      'Thatch removal & dethatching available',
      'Bundle in a combo package for best value',
    ],
  },
  {
    icon: Flower2,
    title: 'Landscaping & Design',
    badge: null,
    price: 'Custom quote',
    desc: 'Custom garden design, planting, mulching, decorative stone, and seasonal colour rotations that elevate your property\'s curb appeal and value.',
    features: [
      'Custom garden design & planting',
      'Decorative stone & border installation',
      'Seasonal colour rotations',
      'Curb appeal transformations',
    ],
  },
  {
    icon: TreePine,
    title: 'Garden Bed Maintenance',
    badge: null,
    price: 'Custom quote',
    desc: 'Regular weeding, edging, mulch replenishment, shrub pruning, and seasonal planting — flower beds that look their best from April through October.',
    features: [
      'Regular weeding & edging',
      'Mulch replenishment',
      'Shrub & hedge pruning',
      'Seasonal planting',
    ],
  },
  {
    icon: Leaf,
    title: 'Lawn Aeration',
    badge: null,
    price: 'Starting from $99',
    desc: 'Core aeration breaks compacted soil, improves drainage, and lets nutrients reach the roots — the highest-ROI single service for a thick, resilient lawn.',
    features: [
      'Core aeration for compacted soil',
      'Improves drainage & root growth',
      'Best paired with fertilization',
      'Spring or fall scheduling available',
    ],
  },
]

export default function Services({ onQuote }) {
  return (
    <>
      <SEO
        title="Lawn Mowing, Weed Control & Garden Services | London, Ontario"
        description="Professional lawn maintenance, spring cleanup, fertilization, and weed control. Serving all London neighbourhoods. Book online 7am–8pm daily."
        path="/services"
        keywords="lawn mowing service London Ontario, landscaping London ON, weed control London, fertilization London Ontario, spring cleanup London, fall leaf removal London ON, garden maintenance London, yard care London Ontario"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Greenguard London',
          description: 'Professional lawn care and landscaping services in London, Ontario.',
          url: 'https://greenguardlondon.ca',
          telephone: '+12262128555',
          email: 'info@greenguardlondon.ca',
          image: 'https://greenguardlondon.ca/og-image.jpg',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'London',
            addressRegion: 'ON',
            addressCountry: 'CA',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 42.9849,
            longitude: -81.2453,
          },
          openingHours: 'Mo-Su 07:00-20:00',
          priceRange: '$$',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Lawn Care Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lawn Mowing' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Spring Cleanup' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Weed Control' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lawn Fertilization' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fall Leaf Cleanup' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garden Bed Maintenance' } },
            ],
          },
        }}
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-green-300 text-xs font-bold uppercase tracking-widest mb-3">London, Ontario's Lawn Specialists</p>
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">Lawn Care &amp; Landscaping Services in London, ON</h1>
          <p className="text-green-200 max-w-2xl mx-auto mb-8">From weekly mowing and weed control to seasonal cleanups and full-property packages — professional service, transparent pricing, zero contracts.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={onQuote} className="btn-primary">Get My Free Quote</button>
            <Link to="/pricing" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-green-900">View Pricing</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-green-200">
            <span className="flex items-center gap-1.5"><CheckCircle size={15} /> Fully insured</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={15} /> No long-term contracts</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={15} /> Eco-friendly &amp; pet-safe</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={15} /> Free quote in 24 hrs</span>
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10 text-center">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Badge + price row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center">
                    <s.icon className="text-green-500" size={22} />
                  </div>
                  <div className="text-right">
                    {s.badge && (
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full block mb-1 ${s.badgeColor}`}>{s.badge}</span>
                    )}
                    <span className="text-sm font-bold text-gray-700">{s.price}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.desc}</p>

                <ul className="space-y-2 flex-1 mb-6">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onQuote}
                  className="w-full py-2.5 rounded-full bg-green-600 text-white font-semibold text-sm hover:bg-green-700 transition"
                >
                  Get a Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMER 2026 PROMO START: Remove after April 30, 2026 */}
      <section className="py-12 bg-[#1a1a1a] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-extrabold uppercase tracking-widest px-5 py-2 rounded-full mb-4">
            Limited Time — Spring 2026 Offer
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">Book Before April 30 &amp; Save Big</h2>
          <p className="text-gray-400 mb-6">10% off any seasonal plan · $100 off any combo package</p>
          <button onClick={onQuote} className="btn-primary text-base">Claim My Discount</button>
          <p className="text-gray-500 text-xs mt-4">Limited spots available — offer ends April 30, 2026</p>
        </div>
      </section>
      {/* SUMMER 2026 PROMO END */}

      {/* Why London Homeowners Choose Greenguard */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10 text-center">Why London Homeowners Choose Greenguard</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, stat: '100%', label: 'Fully Insured', sub: 'Liability on every job' },
              { icon: CheckCircle, stat: '0', label: 'No Contracts', sub: 'Cancel or adjust anytime' },
              { icon: Heart, stat: 'Pet', label: 'Safe Products', sub: 'Eco-friendly treatments' },
              { icon: Clock, stat: '24hr', label: 'Quote Response', sub: 'Back to you same day' },
            ].map((item, i) => (
              <div key={i} className="p-4">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon className="text-green-500" size={24} />
                </div>
                <div className="text-2xl font-extrabold text-gray-900 mb-0.5">{item.stat}</div>
                <div className="text-sm font-bold text-gray-900">{item.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle & Save More */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Bundle &amp; Save More</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Combine your most-used services at a significant discount versus booking them individually.</p>
            <Link to="/pricing#combos" className="inline-flex items-center gap-1 text-green-600 font-semibold text-sm mt-3 hover:underline">
              Compare all packages &amp; see full pricing <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                name: 'All-Inclusive Seasonal Care',
                oldPrice: '$1,299',
                price: '$1,199',
                per: '/season',
                badge: 'Best Value',
                pop: true,
                desc: 'Weekly mowing (~26 cuts) + 4× Weed Control + 4× Fertilizer + Spring + Fall Cleanup',
                cta: 'Get This Package',
              },
              {
                name: 'Year-Round Property Protection',
                oldPrice: '$1,999',
                price: '$1,899',
                per: '/year',
                badge: 'Premium',
                desc: 'Everything in All-Inclusive + SnowGuard Winter Snow Removal',
                cta: 'Get This Package',
              },
            ].map((pkg, i) => (
              <div key={i} className={`rounded-2xl p-6 flex flex-col ${pkg.pop ? 'bg-green-600 text-white ring-2 ring-green-300' : 'bg-white border border-gray-200'}`}>
                <div className={`text-xs font-extrabold px-3 py-1 rounded-full self-start mb-3 ${pkg.pop ? 'bg-yellow-400 text-yellow-900' : 'bg-green-100 text-green-700'}`}>{pkg.badge}</div>
                <h3 className={`text-base font-bold mb-2 ${pkg.pop ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                <p className={`text-sm mb-4 flex-1 ${pkg.pop ? 'text-green-200' : 'text-gray-500'}`}>{pkg.desc}</p>
                <div className="mb-4">
                  <span className={`text-lg line-through mr-2 ${pkg.pop ? 'text-green-300' : 'text-gray-400'}`}>{pkg.oldPrice}</span>
                  <span className={`text-3xl font-extrabold ${pkg.pop ? 'text-white' : 'text-gray-900'}`}>{pkg.price}</span>
                  <span className={`text-sm ml-1 ${pkg.pop ? 'text-green-300' : 'text-gray-500'}`}>{pkg.per}</span>
                </div>
                <button onClick={onQuote} className={`w-full py-2.5 rounded-full font-semibold text-sm transition ${pkg.pop ? 'bg-white text-green-700 hover:bg-green-50' : 'bg-green-600 text-white hover:bg-green-700'}`}>
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighbourhood Coverage */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Serving All of London, Ontario</h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mx-auto">
            Greenguard London provides lawn mowing, weed control, fertilization, spring &amp; fall cleanup, aeration, and landscaping across every neighbourhood in London, ON. Locally owned — we know London lawns.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {['Downtown London', 'Old North', 'Masonville', 'Byron', 'White Oaks', 'Argyle', 'Oakridge', 'Riverbend', 'Wortley Village', 'Stoneybrook', 'Medway', 'Northridge', 'Lambeth', 'Hyde Park', 'Sunningdale', 'Stoney Creek'].map((n, i) => (
              <span key={i} className="text-xs bg-green-50 text-green-700 font-semibold px-3 py-1.5 rounded-full border border-green-200">{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Lawn You'll Actually Love?</h2>
          <p className="text-green-200 mb-8">Get a free, no-obligation quote within 24 hours. Tell us about your property and we'll recommend the right plan.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={onQuote} className="btn-primary text-lg !py-3 !px-8">Get My Free Quote</button>
            <a href="tel:+12262128555" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-green-900 text-lg !py-3 !px-8">(226) 212-8555</a>
          </div>
          <p className="text-green-300 text-sm mt-5">No contracts · No pressure · Free quote within 24 hours</p>
        </div>
      </section>
    </>
  )
}
