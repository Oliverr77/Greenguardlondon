import SEO from '../components/SEO'
import { Scissors, Flower2, Sprout, TreePine, Sun, Leaf } from 'lucide-react'

const items = [
  { icon: Scissors, title: 'Fresh Weekly Mow', desc: 'Crisp lines and clean edges on a Masonville property.' },
  { icon: Flower2, title: 'Garden Bed Design', desc: 'Custom flower bed installation in Wortley Village.' },
  { icon: Sun, title: 'Spring Cleanup', desc: 'Before & after spring cleanup in Old North.' },
  { icon: TreePine, title: 'Hedge Trimming', desc: 'Precision hedge shaping in Byron.' },
  { icon: Sprout, title: 'Weed-Free Lawn', desc: 'Post-treatment results in White Oaks after 4 weeks.' },
  { icon: Leaf, title: 'Fall Leaf Cleanup', desc: 'Complete leaf removal and bed prep in Oakridge.' },
  { icon: Scissors, title: 'Backyard Mowing', desc: 'Large backyard mow and trim in Riverbend.' },
  { icon: Flower2, title: 'Mulch & Planting', desc: 'Fresh mulch and seasonal planting in Northridge.' },
  { icon: Sun, title: 'Property Transformation', desc: 'Full property makeover in Downtown London.' },
]

export default function Gallery() {
  return (
    <>
      <SEO
        title="Lawn Care Gallery | Before & After | GreenGuard London"
        description="See examples of GreenGuard London lawn care and landscaping work across London, Ontario neighbourhoods. Mowing, cleanups, garden beds, and full property care."
        path="/gallery"
        keywords="lawn care gallery London Ontario, landscaping photos London ON, before after lawn care London"
      />

      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">Our Work</h1>
          <p className="text-green-200 max-w-2xl mx-auto">A showcase of our lawn care and landscaping projects across London, Ontario.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <div key={i} className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition">
                <div className="bg-green-50 h-48 flex items-center justify-center">
                  <item.icon className="text-green-200 group-hover:text-green-300 transition" size={60} />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">Photo gallery coming soon. Contact us to see examples of our work in your neighbourhood.</p>
        </div>
      </section>
    </>
  )
}
