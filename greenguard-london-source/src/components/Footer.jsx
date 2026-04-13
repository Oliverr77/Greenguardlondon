import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#1a3a2a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img src={logo} alt="Greenguard London Logo" className="h-14 w-auto object-contain" />
            <span className="text-white font-extrabold text-xl tracking-tight leading-tight">
              Greenguard<br /><span className="text-green-400 text-sm font-bold tracking-wider">LONDON</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Professional lawn care and landscaping services for homeowners and small businesses across London, Ontario.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/services" className="hover:text-green-400 transition">Our Services</Link>
            <Link to="/pricing" className="hover:text-green-400 transition">Pricing</Link>
            <Link to="/about" className="hover:text-green-400 transition">About Us</Link>
            <Link to="/reviews" className="hover:text-green-400 transition">Our Promise</Link>
            <Link to="/gallery" className="hover:text-green-400 transition">Gallery</Link>
            <Link to="/faq" className="hover:text-green-400 transition">FAQ</Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm">
            <span>Lawn Mowing</span>
            <span>Landscaping</span>
            <span>Spring Cleanup</span>
            <span>Weed Control</span>
            <span>Fertilization</span>
            <span>Garden Maintenance</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <div className="flex flex-col gap-3 text-sm">
            <a href="tel:+12262128555" className="flex items-center gap-2 hover:text-green-400 transition">
              <Phone size={16} /> (226) 212-8555
            </a>
            <a href="mailto:info@greenguardlondon.ca" className="flex items-center gap-2 hover:text-green-400 transition">
              <Mail size={16} /> info@greenguardlondon.ca
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> London, Ontario
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-green-900 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <span>&copy; {new Date().getFullYear()} Greenguard London. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-green-400 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-green-400 transition">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
