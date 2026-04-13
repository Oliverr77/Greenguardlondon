import { useState, useEffect, useCallback } from 'react'
import SEO from '../components/SEO'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'Professional lawn mowing service creating perfect grass stripes in London Ontario',
    title: 'Lawn Mowing',
    desc: 'Crisp lines and clean edges on a Masonville property.',
  },
  {
    src: 'https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=800&q=80',
    alt: 'Spring yard cleanup before and after transformation by Greenguard London',
    title: 'Spring Cleanup',
    desc: 'Before & after spring cleanup in Old North.',
  },
  {
    src: 'https://images.unsplash.com/photo-1552502239-40461ba60cbd?w=800&q=80',
    alt: 'Professional weed control and fertilization in residential lawn London Ontario',
    title: 'Weed Control',
    desc: 'Post-treatment results in White Oaks after 4 weeks.',
  },
  {
    src: 'https://images.unsplash.com/photo-1599599810694-b3ed31ef8070?w=800&q=80',
    alt: 'Manicured garden beds and hedge trimming services in London Ontario',
    title: 'Garden Beds',
    desc: 'Custom flower bed installation in Wortley Village.',
  },
  {
    src: 'https://images.unsplash.com/photo-1516373712217-a7f0cc7bb4eb?w=800&q=80',
    alt: 'Fall leaf cleanup and garden bed preparation service in London Ontario',
    title: 'Fall Cleanup',
    desc: 'Complete leaf removal and bed prep in Oakridge.',
  },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  const close = useCallback(() => setSelected(null), [])

  useEffect(() => {
    if (selected === null) return
    const handler = (e) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selected, close])

  return (
    <>
      <SEO
        title="Lawn Care Gallery | Before & After | Greenguard London"
        description="See examples of Greenguard London lawn care and landscaping work across London, Ontario neighbourhoods. Mowing, cleanups, garden beds, and full property care."
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
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelected(img)}
                className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition text-left w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <div className="bg-gray-100 h-48 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{img.title}</h3>
                  <p className="text-sm text-gray-500">{img.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={close}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Close image"
              className="absolute top-3 right-3 z-10 bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-black/70 transition text-lg font-bold"
            >
              ×
            </button>
            <img
              src={selected.src.replace('w=800', 'w=1200')}
              alt={selected.alt}
              width={1200}
              height={900}
              loading="lazy"
              className="w-full object-cover max-h-[75vh]"
            />
            <div className="p-4">
              <h2 id="modal-title" className="font-bold text-gray-900">{selected.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{selected.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
