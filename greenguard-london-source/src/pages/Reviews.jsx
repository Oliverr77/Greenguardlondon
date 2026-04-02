import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import { Shield, Leaf, Clock, CheckCircle, Heart, Star } from 'lucide-react'

export default function Reviews() {
  return (
    <>
      <SEO
        title="Our Promise | GreenGuard London — Honest Lawn Care in London, ON"
        description="GreenGuard London is a new, locally owned lawn care business committed to earning your trust. Fully insured, eco-friendly, and dedicated to quality from the very first cut."
        path="/reviews"
        keywords="trustworthy lawn care London Ontario, insured lawn care London, honest lawn service London ON, new lawn care business London"
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-5">Our Promise to You</h1>
          <p className="text-green-200 text-lg max-w-xl mx-auto leading-relaxed">
            GreenGuard London is new to the neighbourhood — and we're here to earn your trust, one lawn at a time.
          </p>
        </div>
      </section>

      {/* Why Trust GreenGuard — 3 cards */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-10">Why Trust GreenGuard?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Fully Insured',
                text: 'Every job is backed by full liability insurance. Your property is protected, and you can book with complete confidence.',
              },
              {
                icon: Leaf,
                title: 'Eco-Friendly & Pet-Safe',
                text: 'We use environmentally responsible products that are safe for your kids, your pets, and the health of your lawn.',
              },
              {
                icon: Clock,
                title: 'Fast Response',
                text: 'Request a quote and hear back within 24 hours. We show up when we say we will — no waiting, no guessing.',
              },
            ].map((card, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <card.icon size={26} className="text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The GreenGuard Guarantee */}
      <section className="py-16 bg-[#1a3a2a] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Star size={26} className="text-green-400" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-5">The GreenGuard Guarantee</h2>
          <p className="text-green-200 leading-relaxed text-lg max-w-2xl mx-auto">
            If you're not satisfied with our work, we'll come back and make it right — no questions asked. We're building our reputation one property at a time, and your satisfaction is everything.
          </p>
        </div>
      </section>

      {/* What we stand for */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'We show up on time, every time — your schedule is our schedule.',
              'We communicate clearly before, during, and after every job.',
              'We use only eco-friendly, pet-safe products on every property.',
              'We carry full liability insurance on every single job.',
              'We price transparently — no hidden fees, no surprises.',
              "We make it right if you're ever unsatisfied with our work.",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-green-50 rounded-xl p-5">
                <CheckCircle size={18} className="text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
            <Heart size={22} className="text-green-400" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Be One of Our First Customers</h2>
          <p className="text-green-200 mb-8 max-w-xl mx-auto leading-relaxed">
            Early customers get our best seasonal pricing. Let us show you what GreenGuard London can do — no contracts, no pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary text-lg !py-3 !px-8">Get Your Free Quote</Link>
            <a href="tel:+12262128555" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-green-900 text-lg !py-3 !px-8">
              Call (226) 212-8555
            </a>
          </div>
          <p className="text-green-300 text-sm mt-5">No contracts · Free quote within 24 hours · Fully insured</p>
        </div>
      </section>
    </>
  )
}
