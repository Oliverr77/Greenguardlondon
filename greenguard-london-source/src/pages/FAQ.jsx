import SEO from '../components/SEO'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'How much does lawn mowing cost in London, Ontario?', a: 'Greenguard London offers Per Cut mowing starting from $59 per visit with no contract. For regular seasonal service, we offer Biweekly Seasonal (starting from $599/season, ~13 cuts Apr–Oct) and Seasonal Pro (starting from $849/season, 20 cuts). For complete care, All-Inclusive Seasonal starts from $1,229/season. All prices are starting rates — final pricing depends on your property size and condition.' },
  { q: 'What\'s the difference between the seasonal packages?', a: 'All seasonal packages include mowing, edge trimming, string trimming, and blower cleanup every visit from April to October. Biweekly Seasonal (from $599) provides bi-weekly mowing all season (~13 cuts). Seasonal Pro (from $849) combines weekly mowing May–August + biweekly September–October for 20 total cuts. All-Inclusive Seasonal (from $1,229) adds spring and fall cleanup to the Seasonal Pro mowing schedule.' },
  { q: 'What\'s included in the seasonal packages?', a: 'All seasonal packages include basic lawn maintenance only: professional mowing, edge trimming along sidewalks and driveways, string trimming, and blower cleanup. Weed control, fertilizer, and other services are available as add-ons you can add to any package.' },
  { q: 'Do you offer weed control and fertilizer?', a: 'Yes. We offer your first application of weed control or fertilizer for just $34.99 — a great way to try our service risk-free. We recommend 3–4 applications per season for best results. Subsequent applications are custom-quoted based on your lawn size. All products are eco-friendly and pet-safe.' },
  { q: 'What is the All-Inclusive package?', a: 'The All-Inclusive Seasonal Care package starts at $1,229/season and combines premium seasonal mowing (Seasonal Pro schedule — 20 cuts) with spring cleanup and fall cleanup. Everything is handled for you in one package.' },
  { q: 'What is the Year-Round Property Protection package?', a: 'Our Year-Round Property Protection starts at $1,899/year and combines Greenguard lawn care in summer with SnowGuard snow removal in winter. The only year-round property care package in London, ON.' },
  { q: 'When does the lawn care season start and end?', a: 'Our regular mowing season runs from April through October, depending on weather conditions. We also offer spring cleanup starting in early April and fall cleanup through November.' },
  { q: 'Do I need to sign a long-term contract?', a: 'No. Greenguard London operates on a flexible, no-contract basis. You can use our Per Cut option on demand, or book a seasonal package with no long-term lock-in.' },
  { q: 'What areas in London, Ontario does Greenguard serve?', a: 'We serve all neighbourhoods in London, Ontario including Downtown London, Old North, Masonville, Byron, White Oaks, Argyle, Oakridge, Riverbend, Wortley Village, Stoneybrook, Medway, Northridge, Lambeth, Hyde Park, Sunningdale, and Stoney Creek.' },
  { q: 'Are your lawn care products safe for kids and pets?', a: 'Yes. We exclusively use eco-friendly, pet-safe products for all weed control and fertilization treatments. Your family and pets can safely enjoy the lawn after treatment.' },
  { q: 'Is Greenguard London insured?', a: 'Yes. Greenguard London is a fully registered and insured local business operating in London, Ontario. We carry liability insurance for all lawn care and landscaping work performed on your property.' },
  { q: 'How do I get a quote?', a: 'Click the "Get Free Quote" button on any page, fill in your details, and we\'ll get back to you within 24 hours with a personalized quote. You can also call us directly at (226) 212-8555.' },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="font-semibold text-gray-900">{q}</span>
        <ChevronDown size={20} className={`text-gray-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-5 text-gray-600 leading-relaxed text-sm">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      <SEO
        title="Lawn Care FAQ — London, Ontario | Greenguard London"
        description="Frequently asked questions about lawn mowing costs, seasonal packages, weed control, and landscaping in London, Ontario. Per cut from $59, seasonal from $599. Get answers from Greenguard London."
        path="/faq"
        keywords="lawn care FAQ London Ontario, lawn mowing cost London ON, seasonal lawn care package London, weed control questions London Ontario, spring cleanup London ON, Greenguard London FAQ"
      />

      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">Lawn Care FAQ — London, Ontario</h1>
          <p className="text-green-200 max-w-2xl mx-auto">Everything you need to know about lawn mowing, seasonal packages, weed control, and landscaping services in London, ON.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
        </div>
      </section>
    </>
  )
}
