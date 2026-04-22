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
import Blog from './pages/Blog'
import Terms from './pages/Terms'

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
      {showQuote && <QuoteModal onClose={() => setShowQuote(false)} />}
    </div>
  )
}
