'use client'
import Image from 'next/image'
import { useModal } from '@/lib/modal-context'

export default function Arrival() {
  const { openModal } = useModal()
  return (
    <section id="arrival" aria-labelledby="arrival-h2">
      <Image
        src="/renders-towers/clubhouse-front-night.webp"
        alt="Raghava Halo grand arrival at night — Club Halo beneath the illuminated Halo ring, with the forecourt fountain, Kondapur"
        className="arrival-img"
        fill
        sizes="100vw"
        priority={false}
      />
      <div className="arrival-scrim" aria-hidden="true" />
      <div className="container">
        <div className="arrival-content">
          <div className="arrival-eyebrow">Arrival &amp; Clubhouse</div>
          <h2 className="arrival-h2" id="arrival-h2">
            Every evening, you come home<br />beneath the <em>Halo.</em>
          </h2>
          <p className="arrival-sub">
            A landmark wellness clubhouse anchors the community, crowned by the illuminated ring
            that gives Raghava Halo its name — part of over 3 lakh sft of amenities across the
            address. The forecourt, the water, the light — an arrival that tells you, and everyone
            visiting, that you chose well.
          </p>
          <div className="arrival-stats">
            <div className="arrival-stat"><strong>3 Lakh sft</strong><span>Community amenities</span></div>
            <div className="arrival-stat"><strong>5.5 acres</strong><span>Landscaped community</span></div>
            <div className="arrival-stat"><strong>Grand</strong><span>Drop-off &amp; forecourt</span></div>
          </div>
          <button className="btn-primary" onClick={openModal}>Book a Clubhouse Walkthrough</button>
        </div>
      </div>
    </section>
  )
}
