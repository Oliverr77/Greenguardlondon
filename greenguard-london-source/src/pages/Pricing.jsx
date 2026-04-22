import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import { CheckCircle, Phone, Mail, Star, Shield } from 'lucide-react'

const addons = [
  { name: 'Spring Cleanup', price: 'Starting at $149', sub: 'Debris removal, bed prep, first mow of season.' },
  { name: 'Fall Cleanup', price: 'Starting at $199', sub: 'Leaf removal, bed winterizing, final season mow.' },
  { name: 'Weed Control (per application)', price: 'Starting at $49', sub: 'Targeted eco-friendly weed treatment.' },
  { name: 'Weed Control — Full Season (4 apps)', price: 'Starting at $179', sub: 'Seasonal weed control program, April–October.' },
  { name: 'Fertilizer Program (per application)', price: 'Starting at $65', sub: 'Seasonal fertilization for a lush, healthy lawn.' },
  { name: 'Lawn Aeration', price: 'Starting at $99', sub: 'Core aeration to improve drainage and root growth.' },
  { name: 'Garden Bed Maintenance', price: 'Starting at Custom quote', sub: 'Weeding, mulching, edging, and seasonal care.' },
]

export default function Pricing({ onQuote }) {
  return (
    <>
      <SEO
        title="Lawn Care Pricing & Seasonal Packages | Greenguard London"
        description="Affordable lawn care packages starting at $45/cut. Seasonal Pro, All-Inclusive, and Year-Round Protection plans available. Free quote."
        path="/pricing"
        keywords="lawn mowing cost London Ontario, lawn care pricing London ON, affordable lawn care London, seasonal lawn package London Ontario, lawn mowing price per cut London, weekly lawn mowing London ON"
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">Transparent Pricing for London Homeowners</h1>
          <p className="text-green-200 max-w-2xl mx-auto">Simple, honest pricing with no hidden fees. All prices in CAD + HST.</p>
        </div>
      </section>


      {/* ===== SECTION 1: PER CUT ===== */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Per Cut Service</h2>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">Per Cut Lawn Mowing</h3>
            <p className="text-gray-500 text-sm">Perfect for one-time cuts or customers who want flexibility. No commitment required.</p>
          </div>

          {/* 3 Tier Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { tier: 'STANDARD', price: '$45', per: '/cut', size: 'Up to 5,000 sq ft' },
              { tier: 'LARGE', price: '$59', per: '/cut', size: '5,000–8,000 sq ft' },
              { tier: 'OVERSIZED', price: '$79+', per: '/cut', size: '8,000+ sq ft', note: 'Custom quote available' },
            ].map((card, i) => (
              <div key={i} className={`rounded-2xl p-6 text-center border-2 ${i === 1 ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'}`}>
                <div className="text-xs font-extrabold uppercase tracking-widest text-gray-500 mb-3">{card.tier}</div>
                <div className="text-xs text-gray-400 mb-0.5">Starting from</div>
                <div className="text-4xl font-extrabold text-gray-900 mb-1">{card.price}<span className="text-lg font-normal text-gray-400">{card.per}</span></div>
                <div className="text-sm text-gray-500 mt-1">{card.size}</div>
                {card.note && <div className="text-xs text-green-600 font-semibold mt-1">{card.note}</div>}
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Professional lawn mowing',
                'Edge trimming (sidewalks, driveways, garden beds)',
                'String trimming',
                'Blower cleanup',
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" /> {f}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-4">Final price depends on lot size and condition.</p>
          </div>

          <div className="text-center">
            <button onClick={onQuote} className="btn-primary">Get a Free Quote</button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: SEASONAL MOWING PLANS ===== */}
      <section id="seasonal" className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Seasonal Mowing Plans — April to October</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">All seasonal plans include basic lawn maintenance — mowing, trimming, edging, and blower cleanup every visit. April through October.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

            {/* Biweekly Seasonal */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-7 flex flex-col">
              <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Budget Friendly</div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Biweekly Seasonal</h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">Regular bi-weekly mowing all season long. Great for lower-maintenance lawns. ~13 cuts April–October.</p>
              <div className="mb-5">
                <span className="text-xs text-gray-400 block mb-0.5">Starting from</span>
                <span className="text-4xl font-extrabold text-gray-900">$549</span>
                <span className="text-gray-400 text-sm">/season</span>
                <div className="text-sm mt-1">
                  <span className="text-green-600 font-bold">~$42/cut effective</span>
                </div>
                <div className="text-xs text-gray-500 mt-0.5">If purchased separately: $585</div>
              </div>
              <ul className="space-y-3 flex-1 mb-7">
                {[
                  'Biweekly mowing (Apr–Oct)',
                  'Edge trimming every visit',
                  'String trimming every visit',
                  'Blower cleanup every visit',
                  'Priority scheduling',
                  'Locked-in pricing',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <button onClick={onQuote} className="w-full py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition">
                Get a Free Quote →
              </button>
            </div>

            {/* Seasonal Pro */}
            <div className="relative bg-green-600 rounded-2xl p-7 flex flex-col text-white ring-4 ring-green-300 shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-extrabold px-5 py-1.5 rounded-full uppercase tracking-wider shadow whitespace-nowrap flex items-center gap-1">
                <Star size={12} /> Smart Saver
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-green-300 mb-1 mt-2">Smart Saver</div>
              <h3 className="text-xl font-extrabold text-white mb-2">Seasonal Pro</h3>
              <p className="text-green-200 text-sm mb-5 leading-relaxed">Weekly May–Aug (16 cuts) + Biweekly Sep–Oct (4 cuts) = 20 cuts total. Weekly when your lawn grows fast, biweekly when it slows down.</p>
              <div className="mb-3">
                <span className="text-xs text-green-300 block mb-0.5">Starting from</span>
                <span className="text-4xl font-extrabold text-white">$769</span>
                <span className="text-green-300 text-sm">/season</span>
                <div className="text-sm mt-1">
                  <span className="text-yellow-300 font-bold">~$38/cut effective</span>
                </div>
                <div className="text-xs text-green-300 mt-0.5">If purchased separately: $900</div>
              </div>
              <div className="bg-yellow-400/20 border border-yellow-400/40 rounded-lg px-4 py-2.5 mb-5">
                <p className="text-yellow-200 text-sm font-bold text-center">The smart hybrid plan — weekly when it matters, biweekly when it doesn't!</p>
              </div>
              <ul className="space-y-3 flex-1 mb-7">
                {[
                  'Weekly mowing May–Aug (16 cuts)',
                  'Biweekly mowing Sep–Oct (4 cuts)',
                  '20 total cuts across the season',
                  'Edge trimming every visit',
                  'Blower cleanup every visit',
                  'Priority scheduling + locked-in pricing',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-green-100">
                    <CheckCircle size={16} className="text-green-300 shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <button onClick={onQuote} className="w-full py-3 rounded-full bg-white text-green-700 font-bold hover:bg-green-50 transition">
                Get a Free Quote →
              </button>
            </div>
          </div>

          <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5 text-center">
            <p className="text-sm text-gray-700">
              <strong className="text-gray-900">All seasonal plans include basic mowing only.</strong> Want weed control, fertilizer, or cleanups? See Add-Ons below, or upgrade to a Combo Package for maximum value.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: ADD-ON SERVICES ===== */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Add-On Services</h2>
            <p className="text-gray-500 text-sm">Book standalone or add to any seasonal plan. These services can be combined for maximum results.</p>
          </div>

          <div className="divide-y divide-gray-100 border border-gray-200 rounded-2xl overflow-hidden">
            {addons.map((a, i) => (
              <div key={i} className="flex items-start justify-between gap-4 bg-white px-6 py-4 hover:bg-gray-50 transition">
                <div>
                  <div className="text-sm font-semibold text-gray-900">{a.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{a.sub}</div>
                </div>
                <span className="text-sm font-extrabold text-gray-900 whitespace-nowrap shrink-0">{a.price}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-5">All weed control and fertilizer products are safe for pets and families. Programs customized based on your lawn's condition.</p>
        </div>
      </section>

      {/* ===== SECTION 4: ALL-IN PACKAGES ===== */}
      <section id="combos" className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">All-In Packages — Maximum Savings</h2>
            <p className="text-gray-500 text-sm">Bundle mowing, cleanups, and treatments for the best possible value. Less to manage, more to enjoy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

            {/* All-Inclusive Seasonal */}
            <div className="relative bg-green-600 rounded-2xl p-7 flex flex-col text-white ring-4 ring-green-300 shadow-2xl md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-extrabold px-5 py-1.5 rounded-full uppercase tracking-wider shadow whitespace-nowrap flex items-center gap-1">
                <Star size={12} /> Most Popular — Best Value
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-green-300 mb-1 mt-2">All-Inclusive</div>
              <h3 className="text-lg font-extrabold text-white mb-2">All-Inclusive Seasonal Care</h3>
              <p className="text-green-200 text-sm mb-4 leading-relaxed">Weekly mowing all season + weed control + fertilizer + both cleanups. Everything done for you.</p>
              <div className="mb-5">
                <span className="text-xs text-green-300 block mb-0.5">Starting from</span>
                <span className="text-4xl font-extrabold text-white">$1,299</span>
                <span className="text-green-300 text-sm">/season</span>
                <div className="text-sm mt-1 text-green-200">If purchased separately: $1,576 — <span className="text-yellow-300 font-bold">You save $277</span></div>
              </div>
              <ul className="space-y-2 flex-1 mb-7">
                {[
                  'Weekly mowing (~26 cuts Apr–Oct)',
                  '4× weed control applications',
                  '4× fertilizer applications',
                  'Spring cleanup ($149 value)',
                  'Fall cleanup ($199 value)',
                  'Priority scheduling + locked-in pricing',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-green-100">
                    <CheckCircle size={16} className="text-green-300 shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <button onClick={onQuote} className="w-full py-3 rounded-full bg-white text-green-700 font-bold hover:bg-green-50 transition">
                Get a Free Quote →
              </button>
            </div>

            {/* Year-Round Property Protection */}
            <div className="relative bg-[#1a1a1a] border-2 border-green-500 rounded-2xl p-7 flex flex-col text-white shadow-2xl">
              <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-1">Premium — Exclusive</div>
              <h3 className="text-lg font-extrabold text-white mb-2">Year-Round Property Protection</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">Greenguard lawn care (summer) + SnowGuard snow removal (winter). The ONLY year-round property care package in London, ON.</p>
              <div className="mb-5">
                <span className="text-xs text-green-400 block mb-0.5">Starting from</span>
                <span className="text-4xl font-extrabold text-white">$1,999</span>
                <span className="text-green-400 text-sm">/year</span>
                <div className="text-sm mt-1 text-gray-400">If purchased separately: $2,399+ — <span className="text-green-400 font-bold">You save $400+</span></div>
              </div>
              <ul className="space-y-2 flex-1 mb-7">
                {[
                  'Everything in All-Inclusive Seasonal',
                  'Full winter snow removal (SnowGuard)',
                  'One relationship — 12 months of protection',
                  'Priority scheduling year-round',
                  'Locked-in annual pricing',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle size={16} className="text-green-400 shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <button onClick={onQuote} className="w-full py-3 rounded-full bg-green-500 text-white font-bold hover:bg-green-400 transition">
                Get a Free Quote →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ===== SECTION 5: CUSTOM QUOTES ===== */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Need Something Custom?</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Every property is unique. Get a free custom quote tailored to your lawn. Whether you have a large property, commercial space, or specific requirements — just ask.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="tel:+12262128555" className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition">
              <Phone size={16} /> (226) 212-8555
            </a>
            <a href="mailto:info@greenguardlondon.ca" className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition">
              <Mail size={16} /> info@greenguardlondon.ca
            </a>
          </div>
          <button onClick={onQuote} className="btn-primary">Request Custom Quote</button>
        </div>
      </section>

      {/* Trust Line */}
      <div className="bg-green-50 border-y border-green-200 py-4 text-center">
        <p className="text-sm text-green-800 font-medium">From the team behind SnowGuard London — your property, protected year-round.</p>
      </div>

      {/* Final CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-green-200 mb-6">Get your free quote today. No obligation, no hidden fees.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <a href="tel:+12262128555" className="text-green-200 hover:text-white text-sm flex items-center gap-1.5 transition"><Phone size={14} /> (226) 212-8555</a>
            <span className="text-green-600">|</span>
            <a href="mailto:info@greenguardlondon.ca" className="text-green-200 hover:text-white text-sm flex items-center gap-1.5 transition"><Mail size={14} /> info@greenguardlondon.ca</a>
          </div>
          <button onClick={onQuote} className="bg-green-400 hover:bg-green-300 text-green-950 font-extrabold text-lg px-12 py-4 rounded-full shadow-xl transition transform hover:scale-105">
            Get Your Free Quote
          </button>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-gray-100 py-4 px-4">
        <p className="text-xs text-gray-400 text-center max-w-4xl mx-auto">
          All prices shown are starting rates for standard residential properties in London, ON. Final pricing based on property size, condition, and requirements. All prices in CAD. HST not included.
        </p>
      </div>
    </>
  )
}
