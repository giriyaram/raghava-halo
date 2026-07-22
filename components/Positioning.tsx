'use client'
import Image from 'next/image'
import { useModal } from '@/lib/modal-context'

export default function Positioning() {
  const { openModal } = useModal()
  return (
    <section id="why" aria-labelledby="why-h2">
      <div className="container">
        <div className="positioning-grid">
          <div>
            <div className="section-label">Why Raghava Halo</div>
            <h2 className="section-h2" id="why-h2">
              Luxury isn&apos;t the chandelier<br />in the lobby. It&apos;s a home that{' '}
              <em>works — every single day.</em>
            </h2>
            <p className="section-lead">
              Anyone can add marble and gold leaf. Fewer builders obsess over the things you
              actually feel at 8am on a Tuesday — the light in your kitchen, the wait for a lift,
              the width of the balcony you drink your coffee on.
            </p>
            <p className="section-lead" style={{ marginTop: '16px' }}>
              Raghava Halo was designed the other way around. We started with how you live, then
              built the architecture to serve it. The result is a home that feels effortless long
              after the launch-day shine has faded.
            </p>
            <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <button className="btn-dark" onClick={openModal}>Request the Brochure</button>
              <a href="#residences" className="btn-ghost">See the Residences</a>
            </div>
          </div>
          <div className="positioning-visual" role="img" aria-label="Raghava Halo towers at golden hour in Kondapur, Hyderabad">
            <Image
              src="/renders/towers-day.webp"
              alt="Raghava Halo — sculptural tower crowns with wave-form sky terraces at golden hour, Kondapur"
              className="positioning-visual-img"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className="positioning-visual-overlay" aria-hidden="true" />
            <div className="positioning-visual-inner">
              <div className="positioning-tag">RERA Approved · Now Launching</div>
              <blockquote className="positioning-quote">
                &ldquo;Designed for the way you actually live — not just the way it photographs.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
