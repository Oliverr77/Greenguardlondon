import SEO from '../components/SEO'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'How much does lawn mowing cost in London, Ontario?', a: 'GreenGuard London offers Per Cut mowing starting from $49 per visit with no contract. For regular service, we have three seasonal packages: Bi-Weekly (starting from $599/season), Weekly (starting from $749/season), and Premium Weekly (starting from $899/season). All prices are starting rates — final pricing depends on your property size and condition. Every customer receives a custom quote.' },
  { q: 'What\'s the difference between the three seasonal packages?', a: 'All seasonal packages include mowing, edge trimming, string trimming, and blower cleanup every visit from April to October. Bi-Weekly (starting from $599) is every two weeks. Weekly (starting from $749) is every week with locked-in pricing. Premium Weekly (starting from $899) adds garden bed edge trimming, monthly property walkthroughs, lawn health checks, and guaranteed rebooking for next season.' },
  { q: 'What\'s included in the seasonal packages?', a: 'All seasonal packages include basic lawn maintenance only: professional mowing, edge trimming along sidewalks and driveways, string trimming, and blower cleanup. Weed control, fertilizer, and other services are available as add-ons you can add to any package.' },
  { q: 'Do you offer weed control and fertilizer?', a: 'Yes. Weed control starts at $65 per application, fertilizer starts at $65 per application, and our combined Weed Control + Fertilizer Seasonal Program (4–5 applications, Apr–Oct) starts at $275. These can be added to any seasonal package or booked separately. All products are eco-friendly and pet-safe.' },
  { q: 'What is the All-Inclusive package?', a: 'The All-Inclusive Seasonal Care package starts at $1,100/season and combines weekly mowing with a full seasonal weed control and fertilizer program. Everything is handled for you in one package — the easiest way to a perfect lawn.' },
  { q: 'What is the Year-Round Property Protection package?', a: 'Our exclusive Year-Round Property Protection starts at $2,000/year and combines GreenGuard lawn care in summer with SnowGuard snow removal in winter. It\'s the only year-round property care package in London, ON — one relationship, 12 months of protection.' },
  { q: 'When does the lawn care season start and end?', a: 'Our regular mowing season runs from April through October, depending on weather conditions. We also offer spring cleanup starting in early April and fall cleanup through November.' },
  { q: 'Do I need to sign a long-term contract?', a: 'No. GreenGuard London operates on a flexible, no-contract basis. You can use our Per Cut option on demand, or book a seasonal package with no long-term lock-in.' },
  { q: 'What areas in London, Ontario does GreenGuard serve?', a: 'We serve all neighbourhoods in London, Ontario including Downtown London, Old North, Masonville, Byron, White Oaks, Argyle, Oakridge, Riverbend, Wortley Village, Stoneybrook, Medway, Northridge, Lambeth, Hyde Park, Sunningdale, and Stoney Creek.' },
  { q: 'Are your lawn care products safe for kids and pets?', a: 'Yes. We exclusively use eco-friendly, pet-safe products for all weed control and fertilization treatments. Your family and pets can safely enjoy the lawn after treatment.' },
  { q: 'Is GreenGuard London insured?', a: 'Yes. GreenGuard London is a fully registered and insured local business operating in London, Ontario. We carry liability insurance for all lawn care and landscaping work performed on your property.' },
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
        title="Lawn Care FAQ — London, Ontario | GreenGuard London"
        description="Frequently asked questions about lawn mowing costs, seasonal packages, weed control, spring cleanup, and landscaping services in London, Ontario. Per cut from $49, seasonal from $599. Get answers from GreenGuard London."
        path="/faq"
        keywords="lawn care FAQ London Ontario, lawn mowing cost London ON, seasonal lawn care package London, weed control questions London Ontario, spring cleanup London ON, GreenGuard London FAQ"
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
