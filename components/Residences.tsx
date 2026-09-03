'use client'
import Image from 'next/image'
import { useModal } from '@/lib/modal-context'

const cards = [
  { type: '3 BHK', name: 'The Essential', size: '~1,830 sft · Towers 1–3', price: '₹1.7 Cr', badge: 'From', highlight: false },
  { type: '3 BHK', name: 'The Signature', size: '~2,275 sft · Corner-facing', price: '₹1.9 Cr', badge: 'Most Requested', highlight: true },
  { type: '3 BHK', name: 'The Sky Home', size: '~2,455 sft · Higher floors', price: '₹2.2 Cr', badge: 'Wide Balcony', highlight: false },
]

const diffs = [
  'A private balcony off every master bedroom',
  'Two full balconies in every home',
  'A dedicated sitout to unwind in',
  'Curved balcony edges for more usable width',
  'Lower loading — more carpet area you can furnish',
  'Vastu-aligned layouts with a dedicated pooja space',
]

export default function Residences() {
  const { openModal } = useModal()
  return (
    <section id="residences" aria-labelledby="residences-h2">
      <div className="container">
        <div className="residences-header">
          <div className="section-label">The Residences</div>
          <h2 className="section-h2" id="residences-h2">
            Only 3 BHK homes.<br /><em>No compromises hidden in the margins.</em>
          </h2>
          <p className="section-lead">
            Every home at Raghava Halo is a spacious 3 BHK — no cramped configurations quietly tucked
            into the floor plate to lift the unit count. Three generous layouts, from 1,830 to 2,455 sft,
            for three kinds of families.
          </p>
        </div>

        <div className="residences-grid">
          {cards.map((c) => (
            <article
              key={c.name}
              className="residence-card fade-up"
              style={c.highlight ? { borderColor: 'var(--stone)' } : {}}
            >
              <div
                className="residence-card-img"
                style={c.highlight ? { background: 'linear-gradient(135deg,#2D4055 0%,#1C2B3A 100%)' } : {}}
                role="img"
                aria-label={`${c.name} — 3 BHK floor plan illustration`}
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
              A private balcony that begins<br />and ends your day <em>differently</em>
            </h3>
            <p className="balcony-callout-body">
              Every master bedroom opens to its own outdoor space — not a shared balcony, not a
              token cutout. Somewhere to take the first coffee of the morning, or the last quiet
              minute of the night, without leaving the most personal room in your home.
            </p>
            <div className="balcony-stats" aria-label="Outdoor space per home">
              <div className="b-stat"><strong>3</strong><span>Outdoor<br />spaces</span></div>
              <div className="b-stat"><strong>2</strong><span>Full<br />balconies</span></div>
              <div className="b-stat"><strong>1</strong><span>Private master<br />balcony</span></div>
            </div>
          </div>
          <div className="balcony-img-panel">
            <Image
              src="/renders/hero-tower-night.webp"
              alt="Raghava Halo — lit balconies and sitouts on the tower façade at night, Kondapur"
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
              <div className="diff-text">{d}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="btn-dark" onClick={openModal}>Request Floor Plans &amp; Pricing</button>
        </div>
      </div>
    </section>
  )
}
