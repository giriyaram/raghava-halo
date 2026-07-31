'use client'
import { useModal } from '@/lib/modal-context'

export default function SiteVisit() {
  const { openModal } = useModal()
  return (
    <section id="site-visit" aria-labelledby="site-visit-h2">
      <div className="container">
        <div className="sv-band">
          <div className="sv-band-glow" aria-hidden="true" />
          <div className="sv-band-inner">
            <div className="sv-band-text">
              <div className="sv-band-eyebrow">Now Launching · RERA Approved</div>
              <h2 className="sv-band-h2" id="site-visit-h2">
                See it in person, before the best homes are spoken for.
              </h2>
              <p className="sv-band-sub">
                Walk the site, study the floor plans, and get launch pricing directly from our team —
                no brokers, no pressure. Early enquiries get first pick of floors and views.
              </p>
            </div>
            <div className="sv-band-actions">
              <button className="btn-primary" onClick={openModal}>Book a Site Visit</button>
              <a className="sv-band-call" href="tel:+919849019238">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                Call +91 98490 19238
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
