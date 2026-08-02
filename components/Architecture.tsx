'use client'
import Image from 'next/image'
import { useModal } from '@/lib/modal-context'

const specs = [
  { num: '3', label: 'Towers, stepped in height for light and air' },
  { num: '52', label: 'Storeys crowned by a signature sky terrace' },
  { num: '∞', label: 'Curved balcony edges — more usable outdoor space' },
  { num: '1', label: 'Illuminated Halo, visible across the skyline' },
]

export default function Architecture() {
  const { openModal } = useModal()
  return (
    <section id="architecture" aria-labelledby="architecture-h2">
      <div className="tower3-noise" aria-hidden="true" />
      <div className="container">
        <div className="tower3-inner">
          <div>
            <div className="tower3-label">The Architecture</div>
            <h2 className="tower3-h2" id="architecture-h2">
              The Halo isn&apos;t just a name.<br />It&apos;s the <em>crown you live beneath.</em>
            </h2>
            <p className="tower3-body">
              Three sculptural towers rise over Kondapur, their balconies drawn in soft curves rather
              than hard corners — so every home gets a wider, more usable outdoor edge. At the summit,
              a wave-form sky terrace and an illuminated ring give Raghava Halo a silhouette you&apos;ll
              recognise from the highway, and a landmark you&apos;ll be proud to call home.
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
              Request the Design Brochure
            </button>
          </div>
          <div className="tower3-img-panel" role="img" aria-label="Raghava Halo tower crowns with rooftop sky gardens at sunset">
            <Image
              src="/renders-towers/tower-crowns-sunset.webp"
              alt="Raghava Halo — sculpted tower crowns with rooftop sky gardens and the Raghava Halo signage at sunset, Kondapur Hyderabad"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="tower3-img"
              style={{ objectPosition: 'center 34%' }}
            />
            <div className="tower3-img-overlay" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
