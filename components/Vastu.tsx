'use client'
import Image from 'next/image'
import { useModal } from '@/lib/modal-context'

export default function Vastu() {
  const { openModal } = useModal()
  return (
    <section id="vastu" aria-labelledby="vastu-h2">
      <div className="container">
        <div className="vastu-grid">
          <div className="vastu-visual" role="img" aria-label="Vastu-aligned 3 BHK floor plan">
            <Image
              src="/images/floorplan.webp"
              alt="Halo by Raghava vastu-aligned 3 BHK floor plan — top-down view"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="vastu-floorplan-img"
            />
            <div className="vastu-img-overlay" aria-hidden="true" />
          </div>
          <div>
            <div className="section-label">Planning Philosophy</div>
            <h2 className="section-h2" id="vastu-h2">
              Every Floor Plan Is Vastu-Aligned. Not As an Afterthought —{' '}
              <em>As a Foundation.</em>
            </h2>
            <p className="section-lead">
              Vastu compliance here is not a checkbox. It has been designed into the orientation
              of towers, the placement of entrances, and the natural flow through each home.
            </p>
            <p className="section-lead" style={{ marginTop: '16px' }}>
              Because for many families, a home that <em>feels right</em> is as important as one that
              looks right. Both matter. Both were planned for.
            </p>
            <div style={{ marginTop: '32px' }}>
              <button className="btn-dark" onClick={openModal}>Speak to Our Team</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
