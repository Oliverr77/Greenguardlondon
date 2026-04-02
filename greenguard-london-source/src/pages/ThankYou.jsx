import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import { Phone, Clock, MapPin, Shield, Leaf, Heart } from 'lucide-react'
import { useEffect } from 'react'

export default function ThankYou() {
  // Google Ads Conversion Tracking — fires when thank-you page loads after form submission
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        // NOTE: Replace CONVERSION_LABEL with the actual label from your Google Ads
        // conversion action (found in Google Ads → Goals → Conversions → Details).
        // Format: 'AW-18052236127/CONVERSION_LABEL'
        'send_to': 'AW-18052236127/CONVERSION_LABEL',
        'value': 50.0,
        'currency': 'CAD',
      })
    }
  }, [])

  return (
    <>
      <SEO
        title="Thank You — GreenGuard London"
        description="Thank you for contacting GreenGuard London. We'll respond to your lawn care inquiry within 24 hours."
        path="/thank-you"
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-green-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-green-300 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          {/* Animated Checkmark */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center animate-[scaleIn_0.5s_ease-out_both]">
              <svg
                className="w-14 h-14 lg:w-16 lg:h-16"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="26" cy="26" r="24"
                  stroke="#22c55e"
                  strokeWidth="3"
                  fill="none"
                  className="animate-[circleStroke_0.6s_ease-out_0.2s_both]"
                  style={{
                    strokeDasharray: 151,
                    strokeDashoffset: 151,
                  }}
                />
                <path
                  d="M15 27L22 34L37 19"
                  stroke="#22c55e"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  className="animate-[checkStroke_0.4s_ease-out_0.7s_both]"
                  style={{
                    strokeDasharray: 40,
                    strokeDashoffset: 40,
                  }}
                />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4 animate-[fadeUp_0.5s_ease-out_0.4s_both]">
            Thanks! We Got Your Request.
          </h1>
          <p className="text-green-200 text-lg lg:text-xl max-w-xl mx-auto leading-relaxed animate-[fadeUp_0.5s_ease-out_0.6s_both]">
            One of our lawn care specialists will get back to you within <strong className="text-white">24 hours</strong> with a personalized quote for your property.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: 'Call Us Anytime',
                detail: '(226) 212-8555',
                sub: 'Mon-Sun, 7 AM – 8 PM',
                href: 'tel:+12262128555',
              },
              {
                icon: Clock,
                title: 'We\'re Available',
                detail: '7 AM – 8 PM',
                sub: '7 Days a Week',
              },
              {
                icon: MapPin,
                title: 'Service Area',
                detail: 'All of London, ON',
                sub: 'Every neighbourhood covered',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-[fadeUp_0.5s_ease-out_both]"
                style={{ animationDelay: `${0.8 + i * 0.15}s` }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <card.icon size={22} className="text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{card.title}</h3>
                {card.href ? (
                  <a href={card.href} className="text-green-600 font-semibold text-lg hover:text-green-700 transition">
                    {card.detail}
                  </a>
                ) : (
                  <p className="text-green-600 font-semibold text-lg">{card.detail}</p>
                )}
                <p className="text-gray-500 text-sm mt-0.5">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 section-gradient">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {[
              { icon: Shield, label: 'Fully Insured' },
              { icon: Leaf, label: 'Eco-Friendly' },
              { icon: Heart, label: 'Pet-Safe Products' },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-3 animate-[fadeUp_0.5s_ease-out_both]"
                style={{ animationDelay: `${1.2 + i * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <badge.icon size={18} className="text-green-600" />
                </div>
                <span className="text-gray-700 font-semibold">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-6">While you wait, explore what we offer:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="btn-primary">Back to Home</Link>
            <Link to="/pricing" className="btn-secondary">View Our Packages</Link>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes circleStroke {
          to { stroke-dashoffset: 0; }
        }
        @keyframes checkStroke {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </>
  )
}
