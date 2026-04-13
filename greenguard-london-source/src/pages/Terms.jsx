import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions | Greenguard London"
        description="Terms and conditions for Greenguard London lawn care services, including SMS communication terms, opt-out instructions, and service agreements."
        path="/terms"
      />

      <section className="hero-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold">Terms &amp; Conditions</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-500 text-sm mb-8">Last updated: April 2026</p>

          <p className="text-gray-600 leading-relaxed mb-8">
            These terms govern your use of Greenguard London's services and website at{' '}
            <a href="https://greenguardlondon.ca" className="text-green-600 hover:underline">greenguardlondon.ca</a>.
            By contacting us or submitting a form, you agree to the following terms.
          </p>

          {/* SMS Terms & Conditions */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">SMS Terms &amp; Conditions</h2>

            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                By providing your phone number and checking the consent box on our contact form, you consent to receive SMS text messages from <strong>Greenguard London</strong>.
              </p>

              <div>
                <p className="font-semibold text-gray-900 mb-2">Messages may include:</p>
                <ul className="space-y-1.5 ml-1">
                  {[
                    'Service updates and appointment reminders',
                    'Scheduling confirmations and visit notifications',
                    'Customer support responses',
                    'Occasional promotional offers and seasonal deals',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold shrink-0">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                <strong>Message frequency varies</strong> depending on your service schedule and account activity.
              </p>

              <p>
                <strong>Message and data rates may apply</strong> depending on your mobile carrier and plan. Greenguard London is not responsible for charges applied by your carrier.
              </p>

              <div className="space-y-2">
                <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3">
                  <span className="text-green-600 font-extrabold shrink-0">STOP</span>
                  <p>You can opt out of SMS messages at any time by replying <strong>STOP</strong> or <strong>UNSUBSCRIBE</strong>. You will be removed immediately and will not receive further messages.</p>
                </div>
                <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3">
                  <span className="text-green-600 font-extrabold shrink-0">HELP</span>
                  <p>For assistance, reply <strong>HELP</strong> to any message. We will respond with support information and contact details.</p>
                </div>
              </div>

              <p>
                You can also contact us directly at{' '}
                <a href="mailto:info@greenguardlondon.ca" className="text-green-600 hover:underline">info@greenguardlondon.ca</a>
                {' '}or call{' '}
                <a href="tel:+12262128555" className="text-green-600 hover:underline">(226) 212-8555</a>.
              </p>
            </div>
          </div>

          {/* Service Terms */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Service Terms</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            All lawn care and landscaping services are provided by Greenguard London to residential and commercial properties in London, Ontario. Pricing is subject to property size, condition, and specific requirements. Final pricing is confirmed prior to service commencement.
          </p>

          {/* Cancellation */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Cancellations &amp; Changes</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You may cancel or modify your service at any time with reasonable notice. Seasonal packages are subject to the terms confirmed at booking. No long-term contracts are required for per-cut or standard services.
          </p>

          {/* Liability */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Liability</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Greenguard London carries full liability insurance on every job. We are not liable for pre-existing property conditions not disclosed at the time of booking. Any concerns must be raised within 48 hours of service completion.
          </p>

          {/* Privacy */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Privacy</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your personal information is handled in accordance with our{' '}
            <Link to="/privacy" className="text-green-600 hover:underline">Privacy Policy</Link>.
            We do not sell or share your data with third parties for marketing purposes.
          </p>

          {/* Contact */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Questions about these terms? Get in touch:
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Business:</strong> Greenguard London</p>
            <p><strong>Email:</strong>{' '}<a href="mailto:info@greenguardlondon.ca" className="text-green-600 hover:underline">info@greenguardlondon.ca</a></p>
            <p><strong>Phone:</strong>{' '}<a href="tel:+12262128555" className="text-green-600 hover:underline">(226) 212-8555</a></p>
            <p><strong>Website:</strong>{' '}<a href="https://greenguardlondon.ca" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">greenguardlondon.ca</a></p>
          </div>
        </div>
      </section>
    </>
  )
}
