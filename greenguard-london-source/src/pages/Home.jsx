import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckCircle, Clock, Shield, Leaf, Scissors, Flower2, TreePine, Sprout, Sun, ArrowRight, MapPin, Tag, Sparkles } from 'lucide-react'

const services = [
  { icon: Scissors, title: 'Lawn Mowing', desc: 'Weekly & bi-weekly professional mowing with trimming and clipping cleanup.' },
  { icon: Flower2, title: 'Landscaping', desc: 'Custom landscaping design and maintenance to transform your outdoor space.' },
  { icon: Sprout, title: 'Weed Control', desc: 'Eco-friendly weed treatment and fertilization for lush, healthy lawns.' },
  { icon: TreePine, title: 'Garden Care', desc: 'Garden bed maintenance, planting, mulching, and seasonal care.' },
  { icon: Sun, title: 'Spring Cleanup', desc: 'Complete debris removal, thatch clearing, and bed preparation for the season.' },
  { icon: Leaf, title: 'Fall Cleanup', desc: 'Leaf removal, garden winterizing, and end-of-season property prep.' },
]

/* SUMMER 2026 PROMO START: Remove after April 30, 2026 — Countdown Component */
function CountdownBanner() {
  const target = new Date('2026-04-30T23:59:59-05:00').getTime()
  const [timeLeft, setTimeLeft] = useState(getTime())
  function getTime() {
    const diff = Math.max(0, target - Date.now())
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      mins: Math.floor((diff / (1000 * 60)) % 60),
      secs: Math.floor((diff / 1000) % 60),
    }
  }
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTime()), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="bg-[#1a1a1a] py-6">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">Early Bird Pricing Ends In</p>
        <div className="flex justify-center gap-4">
          {[
            { val: timeLeft.days, label: 'Days' },
            { val: timeLeft.hours, label: 'Hours' },
            { val: timeLeft.mins, label: 'Min' },
            { val: timeLeft.secs, label: 'Sec' },
          ].map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl w-16 h-16 flex flex-col items-center justify-center">
              <span className="text-2xl font-extrabold text-white leading-none">{String(t.val).padStart(2, '0')}</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">{t.label}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-xs mt-3">Book before April 30, 2026 to lock in discounted rates</p>
      </div>
    </div>
  )
}
/* SUMMER 2026 PROMO END — Countdown Component */


export default function Home({ onQuote }) {
  return (
    <>
      <SEO
        title="Professional Lawn Care & Spring Cleanup | Greenguard London, ON"
        description="Expert lawn mowing, weed control, and seasonal cleanup in London, Ontario. Eco-friendly, pet-safe, fully insured. Get your free quote today."
        path="/"
        keywords="lawn mowing London Ontario, landscaping London ON, lawn care London Ontario, lawn mowing cost London, spring yard cleanup London, weed control London, fertilization London ON, garden maintenance London, affordable lawn care London ON, seasonal lawn package London Ontario, lawn care near me London, Greenguard London"
      />

      {/* SUMMER 2026 PROMO START: Remove after April 30, 2026 — Hero */}
      <section className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0f2e1a 50%, #1B5E20 100%)' }}>
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #22c55e 0%, transparent 50%), radial-gradient(circle at 80% 60%, #16a34a 0%, transparent 50%)' }} />
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-extrabold uppercase tracking-widest px-5 py-2 rounded-full shadow-lg mb-6">
              🌿 Summer 2026 Early Bird — Ends April 30
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Save on Your<br />
              <span className="text-green-400">Lawn Care This Summer</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Book any seasonal plan before April 30th and save 10%. Or go all-in with a combo package and save $100. Mowing starting at just $45/cut.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/pricing#seasonal" className="btn-primary text-lg !py-3 !px-8 inline-flex items-center gap-2">
                See Seasonal Plans <ArrowRight size={18} />
              </Link>
              <Link to="/pricing#combos" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-green-900 text-lg !py-3 !px-8 inline-flex items-center gap-2">
                Save $100 on Combos <ArrowRight size={18} />
              </Link>
            </div>

            <p className="text-yellow-400 font-semibold text-sm mt-6">⏰ Offers end April 30, 2026 — Limited spots for the 2026 season</p>

            <div className="flex flex-wrap gap-6 mt-6 text-sm text-green-200">
              <span className="flex items-center gap-1.5"><CheckCircle size={16} /> Fully Insured</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={16} /> Eco-Friendly Products</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={16} /> Locally Owned &amp; Operated</span>
            </div>
          </div>
        </div>
      </section>
      {/* SUMMER 2026 PROMO END — Hero */}

      {/* Trust bar */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {[
            { icon: Shield, label: 'Fully Insured' },
            { icon: Leaf, label: 'Eco-Friendly Products' },
            { icon: CheckCircle, label: 'No Long-Term Contracts' },
            { icon: Clock, label: 'Quote in 24 Hours' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <s.icon className="text-green-500" size={22} />
              <div className="text-sm font-semibold text-gray-700">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SUMMER 2026 PROMO START: Remove after April 30, 2026 — Countdown + Two Offers */}
      <CountdownBanner />

      <section className="py-14 lg:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Two Ways to Save This Summer</h2>
          <p className="text-center text-gray-500 max-w-xl mx-auto mb-10 text-sm">Book before April 30, 2026 and lock in early bird pricing. Choose seasonal savings or go all-in with a combo deal.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Save 10% */}
            <div className="bg-white border-2 border-green-500 rounded-2xl p-8 relative">
              <div className="absolute -top-3.5 left-6 bg-green-600 text-white text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow flex items-center gap-1">
                <Tag size={12} /> Seasonal Plans
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mt-3 mb-2">Save 10% — Early Bird</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">Choose any seasonal plan and save 10% when you book before April 30th. Lock in lower rates for the full 2026 season.</p>

              <div className="space-y-3 mb-6">
                {[
                  { name: 'Biweekly Seasonal', old: '$549', now: '$499', save: 'Save $50' },
                  { name: 'Seasonal Pro', old: '$769', now: '$699', save: 'Save $70', hot: true },
                ].map((p, i) => (
                  <div key={i} className={`flex items-center justify-between py-2.5 px-4 rounded-lg ${p.hot ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                    <span className="text-sm font-semibold text-gray-900">{p.name}</span>
                    <div className="text-right">
                      <span className="text-gray-400 text-sm line-through mr-2">{p.old}</span>
                      <span className="text-green-700 font-extrabold text-lg">{p.now}</span>
                      <span className="text-green-600 text-xs font-bold ml-2">{p.save}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/pricing#seasonal" className="block w-full py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition text-center">
                View Seasonal Plans →
              </Link>
              <p className="text-xs text-gray-400 mt-3 text-center">All prices are starting rates. 10% early bird discount. Valid for new signups before April 30, 2026.</p>
            </div>

            {/* Card 2: Save $100 */}
            <div className="bg-[#1a1a1a] border-2 border-green-500 rounded-2xl p-8 relative text-white">
              <div className="absolute -top-3.5 left-6 bg-yellow-400 text-yellow-900 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow flex items-center gap-1">
                <Sparkles size={12} /> Combo Packages
              </div>
              <h3 className="text-2xl font-extrabold text-white mt-3 mb-2">Save $100 When You Go All-In</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">Book any combo package before April 30th and save $100 instantly. Maximum value, minimum hassle.</p>

              <div className="space-y-3 mb-6">
                {[
                  { name: 'All-Inclusive Seasonal', old: '$1,299', now: '$1,199', per: '/season' },
                  { name: 'Year-Round Protection', old: '$1,999', now: '$1,899', per: '/year' },
                ].map((p, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5 px-4 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-sm font-semibold text-gray-200">{p.name}</span>
                    <div className="text-right">
                      <span className="text-gray-500 text-sm line-through mr-2">{p.old}</span>
                      <span className="text-green-400 font-extrabold text-lg">{p.now}</span>
                      <span className="text-gray-500 text-xs ml-1">{p.per}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/pricing#combos" className="block w-full py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-400 transition text-center">
                View Combo Packages →
              </Link>
              <p className="text-xs text-gray-500 mt-3 text-center">Valid for new combo package signups before April 30, 2026.</p>
            </div>
          </div>
        </div>
      </section>
      {/* SUMMER 2026 PROMO END — Two Offers */}

      {/* Services Overview */}
      <section className="section-gradient py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete lawn care and landscaping solutions for every property in London, Ontario.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition border border-gray-100">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                  <s.icon className="text-green-500" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Greenguard */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Why Choose Greenguard?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Fully Insured', desc: 'Licensed and insured for every job. Your property is protected.' },
              { icon: Clock, title: 'Reliable Schedule', desc: 'Consistent weekly or bi-weekly visits. We show up on time, every time.' },
              { icon: Leaf, title: 'Eco-Friendly', desc: 'Pet-safe, environmentally conscious products for a healthy lawn.' },
              { icon: MapPin, title: 'Locally Owned', desc: 'Proudly locally owned and operated, serving every neighbourhood in London, ON.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-green-500" size={26} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview — SUMMER 2026 PROMO: Revert prices after April 30, 2026 */}
      <section className="section-gradient py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Simple, Transparent Pricing</h2>
            <p className="text-gray-600">No hidden fees. No surprises. Seasonal packages include mowing, trimming, edging &amp; blower cleanup.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Per Cut', price: '$45', per: '/cut', features: ['Professional mowing', 'String trimming & edging', 'Blower cleanup', 'No commitment required'] },
              { name: 'Seasonal Pro', oldPrice: '$769', price: '$699', per: '/season', promo: 'SAVE $70', features: ['Weekly May–Aug (16 cuts)', 'Biweekly Sep–Oct (4 cuts)', '~$35/cut effective', 'Priority scheduling'] },
              { name: 'All-Inclusive Seasonal', oldPrice: '$1,299', price: '$1,199', per: '/season', pop: true, promo: 'SAVE $100', features: ['Weekly mowing (~26 cuts)', '4× weed control', '4× fertilizer', 'Spring + Fall cleanup'] },
            ].map((plan, i) => (
              <div key={i} className={`rounded-2xl p-6 relative ${plan.pop ? 'bg-green-600 text-white ring-4 ring-green-300 scale-105' : 'bg-white border border-gray-200'}`}>
                {plan.pop && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">Most Popular</div>}
                {plan.promo && <div className={`text-xs font-bold px-3 py-1 rounded-lg mb-2 inline-block ${plan.pop ? 'bg-yellow-400 text-yellow-900' : 'bg-green-100 text-green-700'}`}>🌿 {plan.promo}</div>}
                <h3 className={`text-lg font-bold mt-1 ${plan.pop ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <div className="mt-3 mb-4">
                  <span className={`text-xs block mb-0.5 ${plan.pop ? 'text-green-300' : 'text-gray-400'}`}>Starting from</span>
                  {plan.oldPrice && <span className={`text-lg line-through mr-2 ${plan.pop ? 'text-green-200' : 'text-gray-400'}`}>{plan.oldPrice}</span>}
                  <span className={`text-3xl font-extrabold ${plan.pop ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  <span className={`text-sm ${plan.pop ? 'text-green-200' : 'text-gray-500'}`}>{plan.per}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${plan.pop ? 'text-green-100' : 'text-gray-600'}`}>
                      <CheckCircle size={16} className={plan.pop ? 'text-green-300' : 'text-green-500'} /> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onQuote}
                  className={`w-full py-2.5 rounded-full font-semibold text-sm transition ${
                    plan.pop ? 'bg-white text-green-700 hover:bg-green-50' : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {plan.promo ? 'Lock In Early Bird Price' : 'Get Quote'}
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/pricing" className="text-green-600 font-semibold hover:underline inline-flex items-center gap-1">
              View Full Pricing &amp; Add-Ons <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Backed by 2+ Years of Proven Property Care</h2>
          <p className="text-gray-600 mb-8">Greenguard London is the sister company of <a href="https://snowguardlondon.ca" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">SnowGuard London</a> — trusted by London homeowners for 2+ years of snow removal. That same reliability, accountability, and local expertise now covers your lawn.</p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get Your Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready for a Greener Lawn?</h2>
          <p className="text-green-200 mb-8">Sister company of SnowGuard London — trusted since 2+ years for snow removal. The same team now handles your lawn, all season long.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={onQuote} className="btn-primary text-lg !py-3 !px-8">Get Your Free Quote</button>
            <a href="tel:+12262128555" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-green-900 text-lg !py-3 !px-8">
              Call (226) 212-8555
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
