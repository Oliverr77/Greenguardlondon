import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'

export default function QuoteModal({ onClose }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', serviceType: '' })
  const [smsConsent, setSmsConsent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = new URLSearchParams({ 'form-name': 'quote', ...form, smsConsent: smsConsent ? 'yes' : 'no' }).toString()
    try {
      const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
      if (!res.ok) throw new Error(`Server responded ${res.status}`)
      onClose()
      navigate('/thank-you')
    } catch (err) {
      console.error('Quote form error:', err)
      alert('Something went wrong. Please call us at (226) 212-8555.')
    }
  }

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>

        <>
          <h3 className="text-xl font-bold text-gray-900 mb-1">Get Your Free Quote</h3>
          <p className="text-sm text-gray-500 mb-5">Fill in your details and we'll contact you within 24 hours.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input type="hidden" name="form-name" value="quote" />
            <div hidden><input name="bot-field" /></div>

            <input
              required name="name" value={form.name} onChange={update('name')}
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              required name="phone" value={form.phone} onChange={update('phone')}
              placeholder="Phone Number" type="tel"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              required name="email" value={form.email} onChange={update('email')}
              placeholder="Email Address" type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              required name="address" value={form.address} onChange={update('address')}
              placeholder="Property Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <select
              required name="serviceType" value={form.serviceType} onChange={update('serviceType')}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select a Service</option>
              <option>Per Cut Lawn Mowing ($49/cut)</option>
              <option>Bi-Weekly Seasonal Package (from $599)</option>
              <option>Weekly Seasonal Package (from $749)</option>
              <option>Premium Weekly Package (from $899)</option>
              <option>All-Inclusive Seasonal Care (from $1,100)</option>
              <option>Year-Round Property Protection (from $2,000)</option>
              <option>Weed Control & Fertilization</option>
              <option>Spring Cleanup</option>
              <option>Fall Cleanup</option>
              <option>Landscaping & Garden Design</option>
              <option>Custom Quote</option>
              <option>General Inquiry</option>
            </select>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox" required
                  checked={smsConsent} onChange={e => setSmsConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 shrink-0 accent-green-600"
                />
                <span className="text-sm text-gray-700 font-medium leading-snug">
                  By checking this box, you agree to receive customer care, account notification, and service-related messages from GREENGUARD LONDON. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. See our Privacy Policy and Terms at https://greenguardlondon.ca/privacy.
                </span>
              </label>
            </div>

            <button type="submit" className="btn-primary w-full mt-1">
              Request Free Quote
            </button>
          </form>
        </>
      </div>
    </div>
  )
}
