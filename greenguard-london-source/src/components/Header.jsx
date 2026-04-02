import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/logo.png'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/reviews', label: 'Our Promise' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Header({ onQuote }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="bg-[#1a3a2a] sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="bg-[#14532d] text-green-200 text-sm py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="hidden sm:inline">Serving all of London, Ontario</span>
          <div className="flex items-center gap-4">
            <a href="tel:+12262128555" className="flex items-center gap-1.5 hover:text-white transition">
              <Phone size={14} /> (226) 212-8555
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="GreenGuard London Logo" className="h-12 w-auto object-contain" />
          <span className="text-white font-extrabold text-xl tracking-tight leading-tight">
            GreenGuard<br /><span className="text-green-400 text-sm font-bold tracking-wider">LONDON</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {nav.map(n => (
            <Link
              key={n.to}
              to={n.to}
              className={`text-sm font-medium transition ${
                pathname === n.to ? 'text-green-400' : 'text-gray-200 hover:text-green-400'
              }`}
            >
              {n.label}
            </Link>
          ))}
          <button onClick={onQuote} className="btn-primary text-sm !py-2 !px-5">
            Get Free Quote
          </button>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#14532d] border-t border-green-800 pb-4">
          {nav.map(n => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-2.5 text-sm font-medium transition ${
                pathname === n.to ? 'text-green-400 bg-green-900/30' : 'text-gray-200 hover:text-green-400'
              }`}
            >
              {n.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <button onClick={() => { onQuote(); setOpen(false) }} className="btn-primary w-full text-sm">
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
