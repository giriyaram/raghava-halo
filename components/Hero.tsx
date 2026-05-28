'use client'
import Image from 'next/image'
import { useModal } from '@/lib/modal-context'

export default function Hero() {
  const { openModal } = useModal()
  return (
    <section id="hero" aria-labelledby="hero-h1">
      <Image
        src="/images/hero-bg.png"
        alt="Halo by Raghava — three premium high-rise towers at golden hour in Kondapur, Hyderabad"
        className="hero-img"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-overlay-left" aria-hidden="true" />
      <div className="hero-overlay-bottom" aria-hidden="true" />
      <div className="hero-overlay-top" aria-hidden="true" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">Kondapur, Hyderabad · Pre-Launch Enquiries Open</div>
          <h1 className="hero-h1" id="hero-h1">
            Thoughtfully Planned<br /><em>High-Rise Living in Kondapur</em>
          </h1>
          <p className="hero-sub">
            52-floor high-rise living designed around your everyday — not just the view from the top.
            Every plan. Every lift. Every corridor. Built for 1,000 families who want more without the noise.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={openModal} aria-label="Explore available residences and enquire">
              Explore Residences
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <button className="btn-outline" onClick={openModal} aria-label="Download project brochure">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
