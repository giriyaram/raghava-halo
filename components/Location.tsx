'use client'
import { useEffect, useRef } from 'react'

const locations = [
  { icon: '🎓', place: 'University of Hyderabad (HCU)', type: 'Green campus & landmark', dist: '5 min', barW: '18%' },
  { icon: '🏫', place: 'CHIREC International School', type: 'K-12 Education', dist: '8 min', barW: '28%' },
  { icon: '🛍️', place: 'AMB Cinemas & Mall', type: 'Entertainment & Retail', dist: '10 min', barW: '36%' },
  { icon: '📐', place: 'ISB Hyderabad', type: 'Business School', dist: '12 min', barW: '42%' },
  { icon: '🖥️', place: 'Gachibowli', type: 'Tech Corridor', dist: '12 min', barW: '42%' },
  { icon: '💼', place: 'Financial District', type: 'IT & Business Hub', dist: '15 min', barW: '52%' },
  { icon: '🏥', place: 'Continental & Care Hospitals', type: 'Healthcare', dist: '15 min', barW: '52%' },
  { icon: '🏙️', place: 'HITEC City', type: 'IT Hub', dist: '20 min', barW: '68%' },
]

export default function Location() {
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = listRef.current
    if (!el) return
    const items = el.querySelectorAll<HTMLElement>('.location-item')
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            setTimeout(() => item.classList.add('loc-visible'), i * 90)
          })
          io.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="location" aria-labelledby="location-h2">
      <div className="container">
        <div className="section-label">Location</div>
        <h2 className="section-h2" id="location-h2">
          Kondapur, near HCU —<br />the address that has <em>already arrived.</em>
        </h2>
        <p className="section-lead">
          You&apos;re not betting on future development. Set in Kondapur beside the green expanse of
          the University of Hyderabad, Raghava Halo puts schools, hospitals, malls and the whole
          Gachibowli–Financial District tech belt within an easy drive.
        </p>
        <div className="location-grid">
          {/* Animated map card */}
          <a
            href="https://maps.app.goo.gl/FDe6iSosozoyFkHZ8"
            target="_blank"
            rel="noopener noreferrer"
            className="loc-map-card"
            id="loc-map-card"
            aria-label="View project location on Google Maps"
          >
            <div className="loc-grid" aria-hidden="true" />
            <svg className="loc-svg" viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path className="loc-road" d="M0 210 Q120 195 250 210 Q380 225 500 205" stroke="rgba(255,255,255,0.12)" strokeWidth="8" strokeLinecap="round"/>
              <path className="loc-road-2" d="M250 0 Q240 100 250 210 Q260 320 252 420" stroke="rgba(255,255,255,0.12)" strokeWidth="8" strokeLinecap="round"/>
              <path className="loc-road-3" d="M0 310 Q130 290 250 300 Q370 310 500 295" stroke="rgba(255,255,255,0.07)" strokeWidth="5" strokeLinecap="round"/>
              <path d="M0 110 Q100 105 200 115 Q300 125 380 108 L500 110" stroke="rgba(255,255,255,0.06)" strokeWidth="4" strokeLinecap="round"/>
              <path d="M60 0 Q80 100 70 210 Q60 310 65 420" stroke="rgba(255,255,255,0.06)" strokeWidth="4" strokeLinecap="round"/>
              <path d="M410 0 Q420 110 415 210 Q410 310 418 420" stroke="rgba(255,255,255,0.06)" strokeWidth="4" strokeLinecap="round"/>
              <path d="M30 360 Q160 340 250 350 Q350 360 470 340" stroke="rgba(184,149,106,0.2)" strokeWidth="3" strokeDasharray="8 5" strokeLinecap="round"/>
              <line className="loc-connector" x1="250" y1="210" x2="155" y2="155" stroke="rgba(184,149,106,0.8)" strokeWidth="1.5"/>
              <line className="loc-connector" x1="250" y1="210" x2="330" y2="145" stroke="rgba(143,166,142,0.8)" strokeWidth="1.5"/>
              <line className="loc-connector" x1="250" y1="210" x2="390" y2="260" stroke="rgba(200,184,154,0.6)" strokeWidth="1.5"/>
              <line className="loc-connector" x1="250" y1="210" x2="110" y2="270" stroke="rgba(200,184,154,0.6)" strokeWidth="1.5"/>
              <line className="loc-connector" x1="250" y1="210" x2="380" y2="330" stroke="rgba(143,166,142,0.5)" strokeWidth="1.5"/>
              <line className="loc-connector" x1="250" y1="210" x2="140" y2="100" stroke="rgba(143,166,142,0.5)" strokeWidth="1.5"/>
              <circle cx="250" cy="210" r="90" fill="rgba(184,149,106,0.04)" stroke="rgba(184,149,106,0.08)" strokeWidth="1"/>
              <circle cx="250" cy="210" r="160" fill="rgba(184,149,106,0.02)" stroke="rgba(184,149,106,0.04)" strokeWidth="1"/>
            </svg>
            {[
              { top: '33%', left: '30%', delay: '1.2s', label: 'AMB Mall' },
              { top: '29%', left: '64%', delay: '1.4s', label: 'CHIREC' },
              { top: '57%', left: '76%', delay: '1.6s', label: 'Financial District' },
              { top: '60%', left: '20%', delay: '1.8s', label: 'HCU Campus' },
              { top: '74%', left: '74%', delay: '2s', label: 'HITEC City' },
              { top: '20%', left: '26%', delay: '2.2s', label: 'ISB' },
            ].map((lm) => (
              <div key={lm.label} className="loc-landmark" style={{ top: lm.top, left: lm.left, animationDelay: lm.delay }} aria-hidden="true">
                <div className="loc-landmark-dot" />
                <div className="loc-landmark-tag">{lm.label}</div>
              </div>
            ))}
            <div className="loc-halo-pin" aria-hidden="true">
              <div style={{ position: 'relative' }}>
                <div className="loc-pin-ring" />
                <div className="loc-pin-ring loc-pin-ring2" />
                <div className="loc-pin-dot" />
              </div>
              <div className="loc-pin-label" style={{ position: 'relative' }}>Raghava Halo · Kondapur</div>
            </div>
            <div className="loc-map-bottom" aria-hidden="true">
              <div className="loc-map-name">Kondapur, Hyderabad</div>
              <div className="loc-gmaps-btn">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                View on Google Maps
              </div>
            </div>
          </a>

          {/* Animated list */}
          <nav aria-label="Nearby locations">
            <div className="location-list" role="list" ref={listRef}>
              {locations.map((loc) => (
                <div key={loc.place} className="location-item" role="listitem" style={{ '--bar-w': loc.barW } as React.CSSProperties}>
                  <div className="loc-item-inner">
                    <div className="loc-icon">{loc.icon}</div>
                    <div>
                      <div className="location-place">{loc.place}</div>
                      <div className="location-type">{loc.type}</div>
                    </div>
                  </div>
                  <div className="loc-dist-wrap">
                    <span className="location-distance">{loc.dist}</span>
                    <div className="loc-bar-wrap"><div className="loc-bar" /></div>
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </section>
  )
}
