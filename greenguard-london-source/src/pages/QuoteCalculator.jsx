import { useState } from 'react'
import SEO from '../components/SEO'

const SERVICES = [
  { id: 'One-Time Cut', icon: '✂️', desc: 'Single mow, no contract' },
  { id: 'Biweekly Seasonal', icon: '🔄', desc: '~13 cuts, Apr–Oct' },
  { id: 'Seasonal Pro', icon: '⭐', desc: 'Weekly + biweekly, 20 cuts' },
  { id: 'All-Inclusive Seasonal', icon: '👑', desc: 'Mowing + spring & fall cleanup' },
  { id: 'Weed Control', icon: '🌱', desc: 'First application $34.99' },
  { id: 'Fertilizer', icon: '💧', desc: 'First application $34.99' },
  { id: 'Spring Cleanup', icon: '🌷', desc: 'Get your yard season-ready' },
  { id: 'Fall Cleanup', icon: '🍂', desc: 'Leaf removal & winter prep' },
]

const FLAT_RATE = ['Weed Control', 'Fertilizer']

const TIERS = {
  'One-Time Cut': [
    { label: 'Small Lawn', maxSqft: 3000, low: 49, high: 59, unit: '/cut' },
    { label: 'Medium Lawn', maxSqft: 5000, low: 55, high: 79, unit: '/cut' },
    { label: 'Large Lawn', maxSqft: Infinity, low: 69, high: 99, unit: '/cut' },
  ],
  'Biweekly Seasonal': [
    { label: 'Small Lawn', maxSqft: 3000, low: 549, high: 649, unit: '/season' },
    { label: 'Medium Lawn', maxSqft: 5000, low: 599, high: 749, unit: '/season' },
    { label: 'Large Lawn', maxSqft: Infinity, low: 699, high: 899, unit: '/season' },
  ],
  'Seasonal Pro': [
    { label: 'Small Lawn', maxSqft: 3000, low: 799, high: 899, unit: '/season' },
    { label: 'Medium Lawn', maxSqft: 5000, low: 849, high: 999, unit: '/season' },
    { label: 'Large Lawn', maxSqft: Infinity, low: 949, high: 1199, unit: '/season' },
  ],
  'All-Inclusive Seasonal': [
    { label: 'Small Lawn', maxSqft: 3000, low: 1099, high: 1249, unit: '/season' },
    { label: 'Medium Lawn', maxSqft: 5000, low: 1199, high: 1399, unit: '/season' },
    { label: 'Large Lawn', maxSqft: Infinity, low: 1349, high: 1599, unit: '/season' },
  ],
  'Spring Cleanup': [
    { label: 'Small Lawn', maxSqft: 3000, low: 149, high: 199, unit: '' },
    { label: 'Medium Lawn', maxSqft: 5000, low: 199, high: 249, unit: '' },
    { label: 'Large Lawn', maxSqft: Infinity, low: 249, high: 349, unit: '' },
  ],
  'Fall Cleanup': [
    { label: 'Small Lawn', maxSqft: 3000, low: 199, high: 249, unit: '' },
    { label: 'Medium Lawn', maxSqft: 5000, low: 249, high: 299, unit: '' },
    { label: 'Large Lawn', maxSqft: Infinity, low: 299, high: 399, unit: '' },
  ],
}

const INCLUDES = {
  'One-Time Cut': ['Professional lawn mowing', 'Edge trimming & string trimming', 'Blower cleanup', 'No contract required'],
  'Biweekly Seasonal': ['~13 cuts April through October', 'Edge trimming every visit', 'String trimming every visit', 'Blower cleanup every visit', 'Locked-in seasonal pricing'],
  'Seasonal Pro': ['20 total cuts (weekly May–Aug + biweekly Sep–Oct)', 'Edge trimming every visit', 'String trimming every visit', 'Blower cleanup every visit', 'Priority scheduling'],
  'All-Inclusive Seasonal': ['Full Seasonal Pro mowing (20 cuts)', 'Spring cleanup included', 'Fall cleanup included', 'Priority scheduling', 'Locked-in pricing'],
  'Weed Control': ['First application $34.99', 'Pet-safe & eco-friendly products', 'Recommended 3–4 applications/season', 'Subsequent applications custom-quoted'],
  'Fertilizer': ['First application $34.99', 'Pet-safe & eco-friendly products', 'Recommended 3–4 applications/season', 'Subsequent applications custom-quoted'],
  'Spring Cleanup': ['Debris removal & thatch clearing', 'Garden bed preparation', 'First mow of the season', 'Property ready for summer'],
  'Fall Cleanup': ['Leaf removal & raking', 'Garden bed winterizing', 'Final season mow', 'Property winterized'],
}

const LEAVES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  emoji: ['🍃', '🌿', '☘️', '🍀', '🌱'][i % 5],
  left: `${(i * 5.3 + 2) % 100}%`,
  size: `${12 + (i * 7) % 15}px`,
  opacity: 0.12 + (i % 21) * 0.01,
  duration: `${9 + (i * 7) % 13}s`,
  delay: `${(i * 1.3) % 20}s`,
  anim: i % 2 === 0 ? 'leafA' : 'leafB',
}))

const STEP_LABELS = ['Service', 'Lawn Size', 'Your Details', 'Your Quote']

export default function QuoteCalculator({ onQuote }) {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState(null)
  const [sqft, setSqft] = useState(3000)
  const [result, setResult] = useState(null)
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactAddress, setContactAddress] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const isFlat = FLAT_RATE.includes(selectedService)

  const selectService = (id) => {
    setSelectedService(id)
    setStep(2)
  }

  const resetCalculator = () => {
    setStep(1)
    setSelectedService(null)
    setSqft(3000)
    setResult(null)
    setContactName('')
    setContactEmail('')
    setContactAddress('')
    setContactPhone('')
  }

  const updateSqft = (val) => {
    const n = Math.max(500, Math.min(10000, Number(val) || 500))
    setSqft(n)
  }

  const calculateQuote = () => {
    const tiers = TIERS[selectedService]
    const tier = tiers.find(t => sqft <= t.maxSqft) || tiers[tiers.length - 1]
    setResult({ ...tier, service: selectedService, sqft })
    setStep(3)
  }

  const showFlatResult = () => {
    setResult({ service: selectedService, label: null, low: 34.99, high: null, unit: 'first application', sqft: null })
    setStep(3)
  }

  const formatEstimatedPrice = (r) => {
    if (!r) return ''
    return r.high
      ? `$${r.low.toLocaleString()} – $${r.high.toLocaleString()}`
      : `$${r.low}`
  }

  const submitContact = async () => {
    if (!contactName.trim() || !contactEmail.trim() || !contactPhone.trim() || !contactAddress.trim()) {
      alert('Please fill in all fields before continuing.')
      return
    }
    setSubmitting(true)
    const body = new URLSearchParams({
      'form-name': 'calculator-lead',
      name: contactName,
      email: contactEmail,
      phone: contactPhone,
      address: contactAddress,
      service: selectedService || '',
      lawnSize: String(sqft),
      estimatedPrice: formatEstimatedPrice(result),
    }).toString()
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (!res.ok) throw new Error(`Server responded ${res.status}`)
    } catch (err) {
      console.error('Calculator lead form error:', err)
    }
    setSubmitting(false)
    setStep(4)
  }

  const sliderPct = `${((sqft - 500) / 9500) * 100}%`

  const progressWidth =
    step >= 4 ? 'calc(100% - 2rem)' :
    step >= 3 ? 'calc(66.667% - 1.333rem)' :
    step >= 2 ? 'calc(33.333% - 0.667rem)' : '0%'

  return (
    <>
      <SEO
        title="Instant Lawn Care Quote Calculator — GreenGuard London"
        description="Get an instant lawn care quote in seconds. Enter your lawn size and select your service for transparent pricing in London, Ontario."
        path="/quote-calculator"
      />

      {/* Hidden form for Netlify build-time detection */}
      <form name="calculator-lead" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="calculator-lead" />
        <input name="bot-field" />
        <input name="name" />
        <input name="email" />
        <input name="phone" />
        <input name="address" />
        <input name="service" />
        <input name="lawnSize" />
        <input name="estimatedPrice" />
      </form>

      <style>{`
        @keyframes leafA {
          0%   { transform: translateY(-40px) rotate(0deg) translateX(0); opacity: 0; }
          10%  { opacity: 1; }
          50%  { transform: translateY(50vh) rotate(180deg) translateX(40px); }
          100% { transform: translateY(110vh) rotate(360deg) translateX(-20px); opacity: 0; }
        }
        @keyframes leafB {
          0%   { transform: translateY(-40px) rotate(0deg) translateX(0); opacity: 0; }
          10%  { opacity: 1; }
          50%  { transform: translateY(50vh) rotate(-120deg) translateX(-50px); }
          100% { transform: translateY(110vh) rotate(-300deg) translateX(30px); opacity: 0; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.45); }
          50%       { box-shadow: 0 0 0 12px rgba(34,197,94,0); }
        }
        .calc-slide-up  { animation: slide-up 0.38s ease forwards; }
        .calc-pulse-btn { animation: pulse-green 2s infinite; }
        .calc-leaf {
          position: fixed; pointer-events: none; z-index: 0; top: 0;
        }
        input[type=range].calc-slider {
          -webkit-appearance: none;
          width: 100%; height: 8px; border-radius: 4px;
          outline: none; cursor: pointer;
        }
        input[type=range].calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 24px; height: 24px; border-radius: 50%;
          background: #16a34a; cursor: pointer;
          box-shadow: 0 2px 8px rgba(22,163,74,0.4);
          border: 3px solid white;
        }
        input[type=range].calc-slider::-moz-range-thumb {
          width: 24px; height: 24px; border-radius: 50%;
          background: #16a34a; cursor: pointer;
          box-shadow: 0 2px 8px rgba(22,163,74,0.4);
          border: 3px solid white;
        }
      `}</style>

      {/* Falling leaves */}
      {LEAVES.map(leaf => (
        <span
          key={leaf.id}
          className="calc-leaf"
          style={{
            left: leaf.left,
            fontSize: leaf.size,
            opacity: leaf.opacity,
            animation: `${leaf.anim} ${leaf.duration} ${leaf.delay} infinite linear`,
          }}
        >
          {leaf.emoji}
        </span>
      ))}

      {/* Hero */}
      <section className="hero-gradient text-white py-14 relative z-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-3">Instant Quote Calculator</h1>
          <p className="text-green-200 max-w-xl mx-auto">Get a transparent price estimate in 30 seconds. No commitment required.</p>
        </div>
      </section>

      {/* Progress bar — 4 steps */}
      <div className="bg-white border-b shadow-sm relative z-10">
        <div className="max-w-2xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between relative">
            {/* Background line */}
            <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-200" />
            {/* Green progress line */}
            <div
              className="absolute top-4 left-4 h-0.5 bg-green-600 transition-all duration-500"
              style={{ width: progressWidth }}
            />
            {STEP_LABELS.map((label, i) => {
              const s = i + 1
              const done = step > s
              const active = step === s
              return (
                <div key={label} className="flex flex-col items-center z-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${done || active ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
                    {done ? '✓' : s}
                  </div>
                  <span className={`text-xs mt-1 font-medium whitespace-nowrap ${active ? 'text-green-600' : done ? 'text-green-500' : 'text-gray-400'}`}>{label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative min-h-screen bg-gray-50 py-10 px-4 z-10">
        <div className="max-w-2xl mx-auto">

          {/* ── STEP 1: Service Selection ── */}
          {step === 1 && (
            <div className="calc-slide-up">
              <h2 className="text-xl font-bold text-gray-900 mb-1 text-center">What service do you need?</h2>
              <p className="text-gray-500 text-sm text-center mb-6">Select a service to get your instant price estimate.</p>
              <div className="grid grid-cols-2 gap-4">
                {SERVICES.map(svc => (
                  <button
                    key={svc.id}
                    onClick={() => selectService(svc.id)}
                    className="relative bg-white border-2 border-gray-100 rounded-2xl p-5 text-left shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 hover:border-green-300 focus:outline-none"
                  >
                    <div className="text-2xl mb-2">{svc.icon}</div>
                    <div className="font-bold text-gray-900 text-sm leading-tight mb-1">{svc.id}</div>
                    <div className="text-xs text-gray-500">{svc.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── STEP 2A: Lawn Size (non-flat-rate services) ── */}
          {step === 2 && !isFlat && (
            <div className="calc-slide-up">
              <button onClick={() => setStep(1)} className="text-sm text-green-600 font-semibold hover:underline mb-6 flex items-center gap-1">
                ← Change service
              </button>
              <h2 className="text-xl font-bold text-gray-900 mb-1 text-center">How big is your lawn?</h2>
              <p className="text-gray-500 text-sm text-center mb-8">Drag the slider, pick a size, or type your sq ft.</p>

              {/* Live sqft display */}
              <div className="text-center mb-6">
                <div
                  className="text-6xl font-extrabold"
                  style={{ background: 'linear-gradient(135deg, #15803d, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                  {sqft.toLocaleString()}
                </div>
                <div className="text-gray-400 font-semibold mt-1 text-sm">sq ft</div>
              </div>

              {/* Slider */}
              <div className="mb-6">
                <input
                  type="range"
                  className="calc-slider"
                  min={500}
                  max={10000}
                  step={100}
                  value={sqft}
                  onChange={e => setSqft(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #16a34a 0%, #16a34a ${sliderPct}, #d1fae5 ${sliderPct}, #d1fae5 100%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>500 sq ft</span>
                  <span>10,000 sq ft</span>
                </div>
              </div>

              {/* Preset cards */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { icon: '🏠', label: 'Small', sub: 'Under 3,000 sq ft', sub2: 'Townhouse / Semi', val: 2000, active: sqft <= 3000 },
                  { icon: '🏡', label: 'Medium', sub: '3,000–5,000 sq ft', sub2: 'Standard Home', val: 4000, active: sqft > 3000 && sqft <= 5000 },
                  { icon: '🏘️', label: 'Large', sub: 'Over 5,000 sq ft', sub2: 'Large Property', val: 6500, active: sqft > 5000 },
                ].map(preset => (
                  <button
                    key={preset.label}
                    onClick={() => setSqft(preset.val)}
                    className={`border-2 rounded-xl p-3 text-center transition-all ${preset.active ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white hover:border-green-300'}`}
                  >
                    <div className="text-xl mb-1">{preset.icon}</div>
                    <div className="text-xs font-bold text-gray-900">{preset.label}</div>
                    <div className="text-xs text-gray-500 leading-tight">{preset.sub}</div>
                    <div className="text-xs text-gray-400">{preset.sub2}</div>
                  </button>
                ))}
              </div>

              {/* Manual input */}
              <div className="flex items-center gap-3 mb-6 justify-center">
                <input
                  type="number"
                  min={500}
                  max={10000}
                  value={sqft}
                  onChange={e => updateSqft(e.target.value)}
                  className="w-32 border-2 border-gray-200 rounded-xl px-3 py-2 text-center text-lg font-bold text-gray-900 focus:outline-none focus:border-green-500"
                />
                <span className="text-gray-500 font-medium">sq ft</span>
              </div>

              {/* Tip */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-700">
                <strong>Not sure?</strong> Open Google Maps → right-click your lawn → Measure distance
              </div>

              {/* Calculate button — now advances to contact info (step 3) */}
              <button onClick={calculateQuote} className="btn-primary w-full text-lg calc-pulse-btn">
                Calculate My Quote
              </button>
            </div>
          )}

          {/* ── STEP 2B: Flat Rate (Weed Control / Fertilizer only) ── */}
          {step === 2 && isFlat && (
            <div className="calc-slide-up">
              <button onClick={() => setStep(1)} className="text-sm text-green-600 font-semibold hover:underline mb-6 flex items-center gap-1">
                ← Change service
              </button>
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">{selectedService}</h2>
              <div className="bg-green-600 text-white rounded-2xl p-8 text-center mb-6 shadow-xl">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold mb-2">No lawn measurement needed!</h3>
                <p className="text-green-200">We offer a flat introductory rate for your first application.</p>
              </div>
              {/* Advances to contact info (step 3) before showing price */}
              <button onClick={showFlatResult} className="btn-primary w-full text-lg">
                See My Price
              </button>
            </div>
          )}

          {/* ── STEP 3: Contact Info (Lead Capture) ── */}
          {step === 3 && (
            <div id="step3contact" className="calc-slide-up">
              <button onClick={() => setStep(2)} className="text-sm text-green-600 font-semibold hover:underline mb-6 flex items-center gap-1">
                ← Change lawn size
              </button>
              <h2 className="text-xl font-bold text-gray-900 mb-1 text-center">Almost there! Where should we send your quote?</h2>
              <p className="text-gray-500 text-sm text-center mb-8">Enter your details to see your instant price.</p>

              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100 mb-6">
                <div hidden><input name="bot-field" /></div>
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={contactName}
                    onChange={e => setContactName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={contactEmail}
                    onChange={e => setContactEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={contactPhone}
                    onChange={e => setContactPhone(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Property Address in London, ON"
                    value={contactAddress}
                    onChange={e => setContactAddress(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-5 text-center">🔒 Your information is private and never shared with third parties.</p>
              </div>

              <button
                onClick={submitContact}
                disabled={submitting}
                className="btn-primary w-full text-lg calc-pulse-btn"
              >
                {submitting ? 'Submitting…' : '🔍 Show My Quote'}
              </button>
            </div>
          )}

          {/* ── STEP 4: Quote Result ── */}
          {step === 4 && result && (
            <div className="calc-slide-up">
              {/* Result card */}
              <div className="rounded-2xl p-8 mb-6 text-white shadow-2xl" style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)' }}>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-lg font-bold">{result.service}</h2>
                  {result.label && (
                    <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">{result.label}</span>
                  )}
                </div>

                {/* Price */}
                <div className="text-center my-6">
                  <div className="text-5xl font-extrabold">
                    {result.high
                      ? `$${result.low.toLocaleString()} – $${result.high.toLocaleString()}`
                      : `$${result.low}`}
                  </div>
                  {result.unit && <div className="text-green-300 mt-1 text-sm">{result.unit}</div>}
                  {result.sqft && <div className="text-green-400 text-sm mt-1">{result.sqft.toLocaleString()} sq ft lawn</div>}
                </div>

                {/* What's included */}
                <div className="bg-white/10 rounded-xl p-4 mb-4">
                  <div className="text-xs font-bold text-green-300 uppercase tracking-wider mb-3">What's Included</div>
                  <ul className="space-y-2">
                    {(INCLUDES[result.service] || []).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-green-100">
                        <span className="text-green-400 shrink-0 font-bold">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Satellite warning */}
                <div className="bg-yellow-400/20 border border-yellow-400/40 rounded-xl p-3 mb-5 text-sm text-yellow-200">
                  ⚠️ Final price confirmed after property review. We verify your lawn via satellite — no surprises.
                </div>

                {/* CTA */}
                <button
                  onClick={onQuote}
                  className="w-full bg-white text-green-800 font-bold py-4 rounded-full text-base hover:bg-green-50 transition shadow-lg"
                >
                  🔒 Lock In This Price — Request Service
                </button>
              </div>

              {/* What happens next */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-4">
                  {[
                    { n: '1', title: 'Submit your request', desc: 'Fill in your details and we confirm within 24 hours.' },
                    { n: '2', title: 'Satellite review', desc: 'We verify your lawn size via satellite mapping — no visit needed.' },
                    { n: '3', title: 'Service begins', desc: 'We schedule your first visit and get to work.' },
                  ].map(item => (
                    <div key={item.n} className="flex gap-4">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">{item.n}</div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={resetCalculator} className="text-sm text-green-600 font-semibold hover:underline w-full text-center block py-2">
                ← Calculate a different service
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  )
}
