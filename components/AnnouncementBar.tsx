'use client'
import { useEffect } from 'react'
import { useModal } from '@/lib/modal-context'

// ─────────────────────────────────────────────────────────────
//  LAUNCH ANNOUNCEMENT — single source of truth.
//  Edit the phrases, accent words, or CTA label here only.
//  Tokens with `accent: true` render in gold.
// ─────────────────────────────────────────────────────────────
export const ANNOUNCEMENT = {
  ctaLabel: 'Book Site Visit',
  groups: [
    [{ text: 'RERA Approved', accent: true }],
    [{ text: 'EOI Pricing', accent: true }, { text: ' still available for a limited period' }],
    [{ text: 'Book before the price revises to ' }, { text: '₹8,500 / sq.ft', accent: true }],
  ],
} as const

function Ticker({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="ann-unit" aria-hidden={hidden || undefined}>
      {ANNOUNCEMENT.groups.map((group, gi) => (
        <span className="ann-group" key={gi}>
          {group.map((tok, ti) => (
            <span key={ti} className={'accent' in tok && tok.accent ? 'ann-accent' : undefined}>
              {tok.text}
            </span>
          ))}
          <span className="ann-dot" aria-hidden="true">✦</span>
        </span>
      ))}
    </div>
  )
}

export default function AnnouncementBar() {
  const { openModal } = useModal()

  // Offsets the fixed nav / hero so the bar sits above them without overlap.
  useEffect(() => {
    document.body.classList.add('announcement-active')
    return () => document.body.classList.remove('announcement-active')
  }, [])

  return (
    <div id="announcement-bar" role="region" aria-label="Launch announcement">
      <div className="ann-marquee">
        <div className="ann-track">
          <Ticker />
          <Ticker hidden />
        </div>
      </div>
      <button
        className="ann-cta"
        onClick={openModal}
        aria-label={`${ANNOUNCEMENT.ctaLabel} — enquire about Raghava Halo`}
      >
        {ANNOUNCEMENT.ctaLabel}
      </button>
    </div>
  )
}
