import SEO from '../components/SEO'

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Greenguard London"
        description="Greenguard London's privacy policy. How we collect, use, and protect your personal information — including SMS communication and mobile data privacy."
        path="/privacy"
      />

      <section className="hero-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-500 text-sm mb-8">Last updated: April 2026</p>

          <p className="text-gray-600 leading-relaxed mb-8">
            At Greenguard London, we take your privacy seriously. This policy explains what information we collect, how we use it, and how we keep it safe. We keep things simple and honest — no fine print, no surprises.
          </p>

          {/* Information We Collect */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            When you request a quote or contact us, we collect your name, phone number, email address, and property address. This information is used solely to provide you with lawn care services and communicate about your account.
          </p>

          {/* How We Use Your Information */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use your information to provide and improve our services, communicate with you about scheduling and billing, send service reminders and seasonal promotions (with your consent), and respond to your inquiries.
          </p>

          {/* SMS Communication & Mobile Data Privacy */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">SMS Communication &amp; Mobile Data Privacy</h2>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              By providing your phone number and opting in, you agree to receive SMS text messages from Greenguard London. We may send messages related to:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'Service inquiries and quote follow-ups',
                'Appointment confirmations and scheduling updates',
                'Service status updates and visit reminders',
                'Occasional seasonal promotions and special offers',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-green-500 font-bold mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Message frequency may vary</strong> depending on your service schedule and account activity.
            </p>
          </div>

          <h3 className="text-base font-bold text-gray-900 mb-3">Opt-Out &amp; Support</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-3">
              <span className="text-green-600 font-extrabold text-sm shrink-0 mt-0.5">STOP</span>
              <p className="text-gray-600 text-sm leading-relaxed">
                You can opt out of SMS messages at any time by replying <strong>STOP</strong> or <strong>UNSUBSCRIBE</strong> to any message we send. You will be removed immediately and will not receive further texts.
              </p>
            </div>
            <div className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-3">
              <span className="text-green-600 font-extrabold text-sm shrink-0 mt-0.5">HELP</span>
              <p className="text-gray-600 text-sm leading-relaxed">
                Need assistance? Reply <strong>HELP</strong> to any of our messages and we will send you support information, including how to reach our team directly.
              </p>
            </div>
          </div>

          <p className="text-gray-500 text-sm mb-8">
            Message and data rates may apply depending on your mobile carrier and plan. Greenguard London is not responsible for any charges applied by your carrier.
          </p>

          <h3 className="text-base font-bold text-gray-900 mb-3">Mobile Data &amp; Third-Party Sharing</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Your mobile information will not be shared with third parties or affiliates for marketing or promotional purposes.</strong> We do not share your personal information — including your phone number — with any external organization for marketing, advertising, or promotional use. Your data is used only to deliver the services you requested from Greenguard London.
          </p>

          {/* Data Protection */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Data Protection</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We take reasonable measures to protect your personal information from unauthorized access, disclosure, or destruction. Your data is stored securely and is only accessible to authorized Greenguard London team members.
          </p>

          {/* Third Parties */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Third Parties</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information only with service providers who directly assist us in operating our business (such as our booking or billing platform), and only under strict confidentiality obligations. These providers are never permitted to use your data for their own marketing purposes.
          </p>

          {/* Your Rights */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Your Rights</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You have the right to access, correct, or delete your personal information at any time. To exercise these rights — or to be removed from our SMS list — contact us at{' '}
            <a href="mailto:info@greenguardlondon.ca" className="text-green-600 hover:underline">info@greenguardlondon.ca</a>{' '}
            or call <a href="tel:+12262128555" className="text-green-600 hover:underline">(226) 212-8555</a>.
          </p>

          {/* Contact */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you have any questions about this privacy policy or how we handle your information, we're happy to talk through any concerns directly.
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Email:</strong>{' '}<a href="mailto:info@greenguardlondon.ca" className="text-green-600 hover:underline">info@greenguardlondon.ca</a></p>
            <p><strong>Phone:</strong>{' '}<a href="tel:+12262128555" className="text-green-600 hover:underline">(226) 212-8555</a></p>
            <p><strong>Website:</strong>{' '}<a href="https://greenguardlondon.ca" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">greenguardlondon.ca</a></p>
          </div>
        </div>
      </section>
    </>
  )
}
