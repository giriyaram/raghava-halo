'use client'
import Image from 'next/image'
import { useModal } from '@/lib/modal-context'

const specs = [
  { num: '4', label: 'Homes per floor' },
  { num: '4', label: 'Dedicated lifts' },
  { num: '3', label: 'Open sides per unit' },
  { num: '2,500', label: 'sq ft per home' },
]

export default function Tower3() {
  const { openModal } = useModal()
  return (
    <section id="tower3" aria-labelledby="tower3-h2">
      <div className="tower3-noise" aria-hidden="true" />
      <div className="container">
        <div className="tower3-inner">
          <div>
            <div className="tower3-label">The Exclusive Offering</div>
            <h2 className="tower3-h2" id="tower3-h2">
              Tower 3: Where Every Home<br />Is a <em>Corner Home</em>
            </h2>
            <p className="tower3-body">
              Only 4 residences per floor. 4 dedicated lifts. Three open sides. Natural cross-ventilation
              by design. Tower 3 isn&apos;t a premium upgrade — it&apos;s a fundamentally different
              living experience built into the same community.
            </p>
            <div className="tower3-specs" role="list">
              {specs.map((s) => (
                <div key={s.label} className="t3-spec" role="listitem">
                  <div className="t3-spec-num">{s.num}</div>
                  <div className="t3-spec-label">{s.label}</div>
                </div>
              ))}
            </div>
            <button
              className="btn-primary"
              style={{ background: 'var(--stone)', color: 'var(--dark)' }}
              onClick={openModal}
            >
              Learn About Tower 3
            </button>
          </div>
          <div className="tower3-img-panel" role="img" aria-label="Tower 3 render at golden hour">
            <Image
              src="/images/tower3.webp"
              alt="Halo by Raghava Tower 3 — premium corner residences at golden hour, Kondapur Hyderabad"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="tower3-img"
            />
            <div className="tower3-img-overlay" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
