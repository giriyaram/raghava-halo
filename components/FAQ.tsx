'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'What is Halo by Raghava?',
    a: 'Halo by Raghava is a premium 52-floor high-rise residential project in Kondapur, Hyderabad. Spread across 5.5 acres with 3 towers and over 1,000 homes, it offers exclusively 3 BHK apartments ranging from 1,800 to 2,500 sq ft, starting at ₹1.6 Cr.',
  },
  {
    q: 'Where exactly is Halo located in Kondapur?',
    a: 'Halo is located in Kondapur, one of Hyderabad\'s most developed and connected residential neighbourhoods. Close to AMB Mall, CHIREC International School, and Apollo Hospital, with 15-minute access to the Financial District and 25-minute access to Hitech City.',
  },
  {
    q: 'What sizes and prices are available at Halo?',
    a: 'All residences are 3 BHK homes. Sizes range from 1,800 sq ft to 2,500 sq ft across three configurations: Comfort (~1,800 sft from ₹1.6 Cr), Premium (~2,100 sft from ₹1.9 Cr), and Tower 3 Corner units (~2,500 sft from ₹2.3 Cr). Contact our team for detailed pricing and payment plans.',
  },
  {
    q: 'What makes Tower 3 at Halo different from Towers 1 and 2?',
    a: 'Tower 3 is designed as an exclusive offering with only 4 homes per floor (vs 8 in Towers 1 and 2), 4 dedicated lifts, and all corner units — meaning every home has natural light, ventilation, and views from three open sides.',
  },
  {
    q: 'When is the launch and possession for Halo by Raghava?',
    a: 'The project launch is expected in June–July 2025. Possession is expected by mid-2030. This gives buyers the advantage of an early-stage investment in an established neighbourhood.',
  },
  {
    q: 'Are the apartments at Halo Vastu-compliant?',
    a: 'Yes. Vastu alignment has been built into the core planning of Halo — from tower orientation to individual apartment layouts — not added as a cosmetic checkbox. The orientation of entrances, placement of key spaces, and flow through each home have all been planned accordingly.',
  },
  {
    q: 'What amenities does Halo offer?',
    a: 'Halo features a 90,000 sq ft clubhouse along with stilt-level amenities — including a lap pool, kids pool, gymnasium, yoga pavilion, co-working lounge, mini theatre, jogging track, badminton courts, cricket practice net, party hall, and more. All at stilt level.',
  },
  {
    q: 'Is Halo by Raghava RERA registered?',
    a: 'RERA registration details will be shared upon request. Please contact our team for the latest compliance documentation.',
  },
  {
    q: 'Does every apartment at Halo have balconies?',
    a: 'Yes. Every apartment at Halo has 2 balconies plus a dedicated sitout area. The master bedroom also has its own private balcony. Floor plans are designed for efficient circulation with minimal wasted corridors.',
  },
  {
    q: 'Is Halo by Raghava suitable for NRI buyers?',
    a: 'Yes. Our team offers virtual walkthroughs, documentation support, and dedicated NRI assistance — so geography is not a barrier to understanding the project in full detail.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" aria-labelledby="faq-h2">
      <div className="container">
        <div className="section-label">Common Questions</div>
        <h2 className="section-h2" id="faq-h2">
          Everything You Need to Know<br />Before You <em>Ask</em>
        </h2>
        <div className="faq-list" role="list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`} role="listitem">
              <button
                className="faq-question"
                aria-expanded={openIndex === i}
                aria-controls={`faq-a-${i}`}
                onClick={() => toggle(i)}
              >
                {faq.q}
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-answer" id={`faq-a-${i}`} role="region">
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
