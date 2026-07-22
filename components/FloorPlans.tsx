'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useModal } from '@/lib/modal-context'

const towers = [
  { id: 'plan-a', label: 'Tower 1', img: '/renders/plan-a.webp', range: '1,830 – 2,455 sft', homes: '3 BHK homes per floor', note: 'A mix of layouts from the efficient 1,830 sft home to the wide 2,455 sft corner.' },
  { id: 'plan-b', label: 'Tower 2', img: '/renders/plan-b.webp', range: '2,270 – 2,455 sft', homes: 'The larger 3 BHK plates', note: 'Fewer, larger homes per floor — for buyers who want maximum space and privacy.' },
  { id: 'plan-c', label: 'Tower 3', img: '/renders/plan-c.webp', range: '1,830 – 2,455 sft', homes: '3 BHK homes per floor', note: 'Generous corner homes with light and ventilation from three open sides.' },
]

export default function FloorPlans() {
  const { openModal } = useModal()
  const [active, setActive] = useState(0)
  const t = towers[active]
  return (
    <section id="floor-plans" aria-labelledby="floor-plans-h2">
      <div className="container">
        <div className="section-label">Floor Plans</div>
        <h2 className="section-h2" id="floor-plans-h2">
          Three towers.<br /><em>A layout for every family.</em>
        </h2>
        <p className="section-lead">
          Real typical-floor plates for all three towers — the circulation, the balconies, the
          pooja placement, the carpet you actually get. Request the dimensioned version and our
          team will walk you through the one that fits.
        </p>

        <div className="fp-tabs" role="tablist" aria-label="Select a tower">
          {towers.map((tower, i) => (
            <button
              key={tower.id}
              role="tab"
              aria-selected={active === i}
              className={`fp-tab${active === i ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              {tower.label}
            </button>
          ))}
        </div>

        <div className="fp-viewer">
          <div className="fp-image-wrap" role="img" aria-label={`${t.label} typical floor plan (available on request)`}>
            <Image
              key={t.id}
              src={t.img}
              alt={`Raghava Halo ${t.label} typical floor plan — 3 BHK homes from ${t.range}`}
              fill
              sizes="(max-width: 900px) 100vw, 66vw"
              className="fp-image"
              aria-hidden="true"
            />
            <div className="fp-lock">
              <div className="fp-lock-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
              </div>
              <div className="fp-lock-title">{t.label} floor plan</div>
              <div className="fp-lock-sub">Get the full, dimensioned plate for {t.range} 3 BHK homes.</div>
              <button className="btn-dark" onClick={openModal}>Unlock the Floor Plan</button>
            </div>
          </div>
          <div className="fp-detail">
            <div className="fp-detail-label">{t.label} · Typical Floor</div>
            <div className="fp-detail-range">{t.range}</div>
            <div className="fp-detail-homes">{t.homes}</div>
            <p className="fp-detail-note">{t.note}</p>
            <ul className="fp-detail-list">
              <li>Private master-bedroom balcony</li>
              <li>Dedicated pooja space</li>
              <li>Utility &amp; store off the kitchen</li>
              <li>Vastu-aligned orientation</li>
            </ul>
            <button className="btn-dark" onClick={openModal}>Get the Dimensioned Plan</button>
          </div>
        </div>
      </div>
    </section>
  )
}
