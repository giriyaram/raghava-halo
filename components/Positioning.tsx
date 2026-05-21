'use client'
import Image from 'next/image'
import { useModal } from '@/lib/modal-context'

export default function Positioning() {
  const { openModal } = useModal()
  return (
    <section id="positioning" aria-labelledby="positioning-h2">
      <div className="container">
        <div className="positioning-grid">
          <div>
            <div className="section-label">Why Halo</div>
            <h2 className="section-h2" id="positioning-h2">
              Vertical Living,<br />Reimagined for the Way <em>You Actually Live</em>
            </h2>
            <p className="section-lead">
              Most high-rises are designed for the brochure. Halo is designed for Tuesday morning.
              For the school run, the late work call, the weekend family lunch.
            </p>
            <p className="section-lead" style={{ marginTop: '16px' }}>
              Every floor plan, every lift bank, every corridor — planned so that 1,000 families
              don&apos;t feel like 1,000 families.
            </p>
            <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <button className="btn-dark" onClick={openModal}>Get Floor Plans</button>
              <a href="#residences" className="btn-ghost">See Residences</a>
            </div>
          </div>
          <div className="positioning-visual" role="img" aria-label="Low-angle view of Halo by Raghava towers">
            <Image
              src="/images/Low-angle.webp"
              alt="Halo by Raghava — low-angle view of the high-rise towers in Kondapur, Hyderabad"
              className="positioning-visual-img"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className="positioning-visual-overlay" aria-hidden="true" />
            <div className="positioning-visual-inner">
              <div className="positioning-tag">Launching June–July 2025</div>
              <blockquote className="positioning-quote">
                &ldquo;Thoughtful planning creates better everyday living.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
