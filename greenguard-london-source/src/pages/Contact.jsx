import SEO from '../components/SEO'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', serviceType: '', message: '' })
  const [smsConsent, setSmsConsent] = useState(false)
  const navigate = useNavigate()
  const update = (f) => (e) => setForm(s => ({ ...s, [f]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = new URLSearchParams({ 'form-name': 'contact', ...form, smsConsent: smsConsent ? 'yes' : 'no' }).toString()
    try {
      const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
      if (!res.ok) throw new Error(`Server responded ${res.status}`)
      navigate('/thank-you')
    } catch (err) {
      console.error('Contact form error:', err)
      alert('Something went wrong. Please call us at (226) 212-8555.')
    }
  }

  return (
    <>
      <SEO
        title="Free Quote & Lawn Care Consultation | London, ON"
        description="Request a free on-site assessment. Greenguard London serves all neighbourhoods. Call (226) 212-8555 or submit the form below."
        path="/contact"
        keywords="contact lawn care London Ontario, lawn care quote London ON, lawn mowing phone number London, Greenguard London contact, landscaping quote London Ontario"
      />

      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">Contact Greenguard London</h1>
          <p className="text-green-200 max-w-2xl mx-auto">Ready for professional lawn care in London, Ontario? Request a free quote and we'll get back to you within 24 hours.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>
            <div className="space-y-4">
              {[
                { icon: Phone, label: '(226) 212-8555', href: 'tel:+12262128555' },
                { icon: Mail, label: 'info@greenguardlondon.ca', href: 'mailto:info@greenguardlondon.ca' },
                { icon: MapPin, label: 'London, Ontario, Canada' },
                { icon: Clock, label: 'Mon-Sun: 7 AM - 8 PM' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
                    <c.icon size={18} className="text-green-600" />
                  </div>
                  {c.href ? (
                    <a href={c.href} className="text-gray-700 hover:text-green-600 transition">{c.label}</a>
                  ) : (
                    <span className="text-gray-700">{c.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden h-48 mt-4">
              <iframe
                title="Greenguard London Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93169.37752090476!2d-81.31849165!3d42.98485875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef20ea88d9b0b%3A0x28c7d7699a056b95!2sLondon%2C%20ON!5e0!3m2!1sen!2sca!4v1709000000000!5m2!1sen!2sca"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} name="contact" className="bg-gray-50 rounded-2xl p-8 space-y-4">
                <input type="hidden" name="form-name" value="contact" />
                <div hidden><input name="bot-field" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request a Free Quote</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required name="name" placeholder="Full Name" value={form.name} onChange={update('name')} className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                  <input required name="phone" placeholder="Phone Number" value={form.phone} onChange={update('phone')} className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <input required name="email" type="email" placeholder="Email Address" value={form.email} onChange={update('email')} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                <input name="address" placeholder="Property Address (optional)" value={form.address} onChange={update('address')} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                <select name="serviceType" value={form.serviceType} onChange={update('serviceType')} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="">Select a Service (optional)</option>
                  <option>Per Cut Lawn Mowing (starting from $45/cut)</option>
                  <option>Biweekly Seasonal Plan (starting from $499/season)</option>
                  <option>Seasonal Pro (starting from $699/season)</option>
                  <option>All-Inclusive Seasonal Care (starting from $1,199/season)</option>
                  <option>Year-Round Property Protection (starting from $1,899/year)</option>
                  <option>Weed Control & Fertilization</option>
                  <option>Spring Cleanup</option>
                  <option>Fall Cleanup</option>
                  <option>Landscaping & Garden Design</option>
                  <option>Custom Quote — Large/Commercial Property</option>
                  <option>General Inquiry</option>
                </select>
                <textarea name="message" rows={4} placeholder="Your Message" value={form.message} onChange={update('message')} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" />
                {/* SMS Consent — required for A2P 10DLC compliance */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={smsConsent}
                      onChange={e => setSmsConsent(e.target.checked)}
                      className="mt-0.5 w-4 h-4 shrink-0 accent-green-600"
                    />
                    <span className="text-sm text-gray-700 leading-snug">
                      I agree to receive informational and marketing text messages from GREENGUARD LONDON to the phone number provided. Message frequency varies. Message and data rates may apply. Reply HELP for help and STOP to opt out. Consent is not a condition of purchase. We do not share your mobile opt-in information with anyone. See our Privacy Policy and Terms at https://greenguardlondon.ca/privacy.
                    </span>
                  </label>
                  <div className="flex gap-4 text-xs pl-7">
                    <a href="/privacy" className="text-green-600 hover:underline font-medium">Privacy Policy</a>
                    <a href="/terms" className="text-green-600 hover:underline font-medium">Terms &amp; Conditions</a>
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full">Request Free Quote</button>
              </form>
          </div>
        </div>
      </section>
    </>
  )
}
