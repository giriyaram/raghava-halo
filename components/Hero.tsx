'use client'
import Image from 'next/image'
import { useModal } from '@/lib/modal-context'

export default function Hero() {
  const { openModal } = useModal()
  return (
    <section id="hero" aria-labelledby="hero-h1">
      <Image
        src="/renders/community-evening.webp"
        alt="Raghava Halo — three high-rise towers at dusk in Kondapur, Hyderabad, crowned by the signature Halo"
        className="hero-img"
        fill
        priority
        sizes="100vw"
        quality={85}
      />
      <div className="hero-overlay-left" aria-hidden="true" />
      <div className="hero-overlay-bottom" aria-hidden="true" />
      <div className="hero-overlay-top" aria-hidden="true" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">RERA Approved · Near HCU, Kondapur · Now Launching</div>
          <h1 className="hero-h1" id="hero-h1">
            Raghava <em>Halo</em>
          </h1>
          <p className="hero-tagline">Thoughtfully planned high-rise living.</p>
          <p className="hero-sub">
            Three towers. Fifty-two floors. A thousand homes built around one idea — that real
            luxury isn&apos;t the chandelier in the lobby. It&apos;s a home that works, effortlessly,
            every single day.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={openModal} aria-label="Book a site visit at Raghava Halo">
              Book a Site Visit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <a className="btn-outline" href="#residences" aria-label="View 3 BHK floor plans">
              View Floor Plans
            </a>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item"><strong>3 BHK</strong><span>1,800–2,500 sft</span></div>
            <div className="hero-meta-divider" aria-hidden="true" />
            <div className="hero-meta-item"><strong>From ₹1.6 Cr</strong><span>Launch pricing</span></div>
            <div className="hero-meta-divider" aria-hidden="true" />
            <div className="hero-meta-item"><strong>5.5 Acres</strong><span>Gated community</span></div>
          </div>
        </div>
      </div>
      <a href="#why" className="hero-scroll" aria-label="Scroll to explore">
        <span>Explore</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
      </a>
    </section>
  )
}
