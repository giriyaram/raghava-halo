'use client'
import Image from 'next/image'
import { useModal } from '@/lib/modal-context'

const cards = [
  { type: '3 BHK Comfort', name: 'The Efficient Home', size: '~1,800 sq ft · Towers 1 & 2', price: '₹1.6 Cr', badge: 'Tower 1 & 2', highlight: false },
  { type: '3 BHK Premium', name: 'The Spacious Home', size: '~2,100 sq ft · Towers 1 & 2', price: '₹1.9 Cr', badge: 'Best Seller', highlight: false },
  { type: '3 BHK Corner', name: 'The Corner Home', size: '~2,500 sq ft · Tower 3 Only', price: '₹2.3 Cr', badge: 'Tower 3 · Exclusive', highlight: true },
]

const diffs = [
  '2 balconies in every home',
  'Dedicated sitout area',
  'Master bedroom — private balcony',
  'Vastu-aligned floor planning',
  'Efficient circulation — no wasted corridors',
  'Natural light on 3 sides (Tower 3 corner units)',
]

export default function Residences() {
  const { openModal } = useModal()
  return (
    <section id="residences" aria-labelledby="residences-h2">
      <div className="container">
        <div className="residences-header">
          <div className="section-label">The Homes</div>
          <h2 className="section-h2" id="residences-h2">
            3 BHK Residences Designed With<br /><em>Uncommon Thoughtfulness</em>
          </h2>
          <p className="section-lead">
            Every home here is exclusively a 3 BHK. No compromises, no smaller configurations tucked into
            the margins. Three well-planned bedroom apartments, in three sizes, for three kinds of families.
          </p>
        </div>

        <div className="residences-grid">
          {cards.map((c) => (
            <article
              key={c.type}
              className="residence-card fade-up"
              style={c.highlight ? { borderColor: 'var(--stone)' } : {}}
            >
              <div
                className="residence-card-img"
                style={c.highlight ? { background: 'linear-gradient(135deg,#2D4055 0%,#1C2B3A 100%)' } : {}}
                role="img"
                aria-label={`${c.type} floor plan illustration`}
              >
                <div className="floor-illustration" />
                <div className="residence-badge" style={c.highlight ? { background: 'var(--dark)' } : {}}>
                  {c.badge}
                </div>
              </div>
              <div className="residence-body">
                <div className="residence-type" style={c.highlight ? { color: 'var(--dark)' } : {}}>{c.type}</div>
                <div className="residence-name">{c.name}</div>
                <div className="residence-size">{c.size}</div>
                <div className="residence-price">{c.price} <span>onwards</span></div>
              </div>
            </article>
          ))}
        </div>

        {/* Master bedroom balcony callout */}
        <div className="balcony-callout fade-up" role="complementary" aria-label="Master bedroom private balcony feature">
          <div className="balcony-callout-text">
            <div className="balcony-callout-tag">Signature Feature</div>
            <h3 className="balcony-callout-heading">
              Every Master Bedroom<br />Has Its Own <em>Private Balcony</em>
            </h3>
            <p className="balcony-callout-body">
              Not a shared balcony. Not a token cutout. A real outdoor space off the most personal room
              in your home — to start the morning with, or end the evening on.
            </p>
            <div className="balcony-stats" aria-label="Outdoor space statistics">
              <div className="b-stat"><strong>3</strong><span>Outdoor<br />spaces</span></div>
              <div className="b-stat"><strong>2</strong><span>Full<br />balconies</span></div>
              <div className="b-stat"><strong>1</strong><span>Private master<br />balcony</span></div>
            </div>
          </div>
          <div className="balcony-img-panel">
            <Image
              src="/images/balcony-view.png"
              alt="View from a Halo master bedroom private balcony — lounge seating, pool view, golden hour"
              className="balcony-img"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="differentiators" role="list" aria-label="Key residence features">
          {diffs.map((d, i) => (
            <div key={i} className="diff-item fade-up" role="listitem">
              <svg className="diff-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              <div className="diff-text" dangerouslySetInnerHTML={{ __html: d.replace(/^(.*?)(balconies|sitout area|private balcony|Vastu-aligned|no wasted corridors|3 sides)(.*)$/, '$1<strong>$2</strong>$3') }} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="btn-dark" onClick={openModal}>Request Floor Plans</button>
        </div>
      </div>
    </section>
  )
}
