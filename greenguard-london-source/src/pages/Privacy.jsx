import SEO from '../components/SEO'

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="GreenGuard London's privacy policy. How we collect, use, and protect your personal information." path="/privacy" />

      <section className="hero-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray">
          <p className="text-gray-600 text-sm mb-6">Last updated: March 2026</p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-4">When you request a quote or contact us, we collect your name, phone number, email address, and property address. This information is used solely to provide you with lawn care services and communicate about your account.</p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed mb-4">We use your information to provide and improve our services, communicate with you about scheduling and billing, send service reminders and seasonal promotions (with your consent), and respond to your inquiries.</p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Data Protection</h2>
          <p className="text-gray-600 leading-relaxed mb-4">We take reasonable measures to protect your personal information from unauthorized access, disclosure, or destruction. Your data is stored securely and is only accessible to authorized GreenGuard London team members.</p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Third Parties</h2>
          <p className="text-gray-600 leading-relaxed mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our business, subject to confidentiality obligations.</p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Your Rights</h2>
          <p className="text-gray-600 leading-relaxed mb-4">You have the right to access, correct, or delete your personal information at any time. To exercise these rights, contact us at info@greenguardlondon.ca or call (226) 212-8555.</p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Contact</h2>
          <p className="text-gray-600 leading-relaxed">If you have questions about this privacy policy, please contact us at info@greenguardlondon.ca.</p>
        </div>
      </section>
    </>
  )
}
