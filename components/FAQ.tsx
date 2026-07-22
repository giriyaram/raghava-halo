'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'What is Raghava Halo?',
    a: 'Raghava Halo is a RERA-approved high-rise residential project in Kondapur, Hyderabad, near the University of Hyderabad (HCU). It spans 5.5 acres with 3 towers of 52 floors and over 1,000 homes — all thoughtfully planned 3 BHK residences of 1,800 to 2,500 sft, starting from ₹1.6 Cr.',
  },
  {
    q: 'Where exactly is Raghava Halo located?',
    a: 'Raghava Halo is in Kondapur, one of west Hyderabad\'s most established neighbourhoods, next to the green expanse of HCU. It is roughly 5 minutes from the HCU campus, 12 minutes from Gachibowli, and about 15 minutes from the Financial District, with schools, malls and hospitals close by.',
  },
  {
    q: 'What sizes and prices are available?',
    a: 'Every home is a 3 BHK, from about 1,830 sft to 2,455 sft across three layouts — The Essential (~1,830 sft from ₹1.6 Cr), The Signature (~2,275 sft), and The Sky Home (~2,455 sft). Pricing is indicative of the launch phase; contact our team for the current price list and payment plan.',
  },
  {
    q: 'Is Raghava Halo RERA approved?',
    a: 'Yes. Raghava Halo is RERA approved and now open for booking, under RERA registration number P02400011015. The approved documentation is shared with every enquiry — just ask our team.',
  },
  {
    q: 'What makes the planning different from other high-rises?',
    a: 'Lower loading — roughly 29% against the 32–35% common elsewhere — means more of your built-up area becomes usable carpet, around 100–120 sft extra on a 2,000 sft home. Add curved, wider balconies, a private master-bedroom balcony, cross-ventilation, and Vastu-aligned layouts, and the home simply works better day to day.',
  },
  {
    q: 'What amenities does Raghava Halo offer?',
    a: 'A 90,000 sft wellness clubhouse anchors the community, alongside a lap pool, gym, rooftop yoga deck, tennis courts, a putting green, kids\' play zones, garden walks, co-working lounge, mini theatre and more. A dedicated wellness suite includes Red Light Therapy, Hyperbaric Oxygen Therapy (HBOT), a sauna and float therapy.',
  },
  {
    q: 'Does every apartment have balconies?',
    a: 'Yes. Every home includes two full balconies plus a dedicated sitout, and every master bedroom opens to its own private balcony. Balcony edges are curved for more usable outdoor width.',
  },
  {
    q: 'When is possession?',
    a: 'Construction is underway following RERA approval. Possession is targeted in line with the RERA-registered project schedule — our team will share the current handover timeline for each tower. Booking early gives you first pick of floors, views and launch-phase pricing.',
  },
  {
    q: 'Is Raghava Halo suitable for NRI buyers?',
    a: 'Absolutely. We offer virtual walkthroughs, complete documentation support and dedicated NRI assistance, so you can evaluate and book Raghava Halo confidently from anywhere in the world.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section id="faq" aria-labelledby="faq-h2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container">
        <div className="section-label">Common Questions</div>
        <h2 className="section-h2" id="faq-h2">
          Everything you want to know<br />before you <em>ask.</em>
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
