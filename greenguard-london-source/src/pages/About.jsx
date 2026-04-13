import SEO from '../components/SEO'
import { Shield, Heart, Leaf, MapPin } from 'lucide-react'

const areas = [
  'Downtown London', 'Old North', 'Masonville', 'Byron', 'White Oaks', 'Argyle',
  'Oakridge', 'Riverbend', 'Wortley Village', 'Stoneybrook', 'Medway', 'Northridge',
  'Lambeth', 'Hyde Park', 'Sunningdale', 'Stoney Creek'
]

export default function About() {
  return (
    <>
      <SEO
        title="About Greenguard London — Locally Owned Lawn Care in London, ON"
        description="Greenguard London is a locally owned and operated, fully insured lawn care and landscaping company serving every neighbourhood in London, Ontario. Honest pricing, eco-friendly products, and a satisfaction guarantee."
        path="/about"
        keywords="lawn care company London Ontario, local landscaping London ON, insured lawn care London, about Greenguard London, lawn service near me London Ontario"
      />

      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">About Greenguard London</h1>
          <p className="text-green-200 max-w-2xl mx-auto">Locally owned &amp; operated. Fully insured. Dedicated to keeping London's lawns beautiful since day one.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Greenguard London was born from a simple belief: every homeowner deserves a lawn they can be proud of, without the hassle and guesswork of doing it themselves.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Greenguard London is the sister company of <a href="https://snowguardlondon.ca" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">SnowGuard London</a> — a trusted name in London property care for 2+ years. That proven track record of reliability and accountability is the foundation we built Greenguard on.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We're not a big corporation. We're your neighbours. Locally owned and operated — we live here, we work here, and we take pride in making London a greener, more beautiful place to call home.
              </p>
            </div>
            <div className="w-full">
              <img
                src="https://images.pexels.com/photos/6728925/pexels-photo-6728925.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                alt="Professional lawn care team mowing a residential lawn in London Ontario"
                className="w-full h-72 lg:h-80 object-cover rounded-2xl shadow-md"
                loading="lazy"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Shield, title: 'Reliability', desc: 'We show up on time, every time. Your schedule is our schedule.' },
              { icon: Heart, title: 'Care', desc: 'We treat every property like our own. Attention to detail is our standard.' },
              { icon: Leaf, title: 'Sustainability', desc: 'Eco-friendly products that are safe for your family, pets, and the planet.' },
            ].map((v, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-xl">
                <v.icon className="mx-auto text-green-500 mb-3" size={28} />
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Our Commitments */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Shield, title: 'Fully Insured', desc: 'Every job is covered by full liability insurance for your complete peace of mind.' },
              { icon: Leaf, title: 'Eco-Friendly', desc: 'Pet-safe, environmentally responsible products used on every property, every time.' },
              { icon: Heart, title: 'Satisfaction Guarantee', desc: 'Not happy? We come back and make it right — no questions asked.' },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 bg-green-50 rounded-xl">
                <s.icon className="mx-auto text-green-500 mb-3" size={26} />
                <div className="font-bold text-gray-900 mb-1">{s.title}</div>
                <div className="text-sm text-gray-500">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* Service Area */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Neighbourhoods We Serve</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((a, i) => (
                <span key={i} className="flex items-center gap-1.5 bg-green-50 text-green-800 text-sm font-medium px-4 py-2 rounded-full">
                  <MapPin size={14} /> {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
