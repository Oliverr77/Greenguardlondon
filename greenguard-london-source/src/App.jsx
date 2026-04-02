import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'
import { useState } from 'react'
import Home from './pages/Home'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Reviews from './pages/Reviews'
import Gallery from './pages/Gallery'
import Privacy from './pages/Privacy'
import ThankYou from './pages/ThankYou'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const [showQuote, setShowQuote] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {/* SUMMER 2026 PROMO START: Remove after April 30, 2026 */}
      <Link to="/pricing" className="block bg-[#2E7D32] text-white text-center py-2.5 px-4 text-sm font-semibold hover:bg-[#1B5E20] transition">
        🌿 Summer 2026 Launch: Save 10% on Seasonal Plans + $100 Off Combo Packages — Book Before April 30th! →
      </Link>
      {/* SUMMER 2026 PROMO END */}
      <Header onQuote={() => setShowQuote(true)} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onQuote={() => setShowQuote(true)} />} />
          <Route path="/services" element={<Services onQuote={() => setShowQuote(true)} />} />
          <Route path="/pricing" element={<Pricing onQuote={() => setShowQuote(true)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
      {showQuote && <QuoteModal onClose={() => setShowQuote(false)} />}
    </div>
  )
}
