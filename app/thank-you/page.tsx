'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

// Metadata can't be exported from a 'use client' component,
// so we set it via a separate metadata export pattern — handled below via head tags

const WA = 'https://wa.me/919849019238?text=Hi%2C+I+just+enquired+about+the+upcoming+residential+project+in+Kondapur.+Looking+forward+to+learning+more.'

const steps = [
  {
    num: '01',
    heading: 'A personal call within 24 hours',
    body: 'Someone from our team — not a call centre — will reach out to understand exactly what you\'re looking for.',
  },
  {
    num: '02',
    heading: 'Floor plans, pricing, and the full picture',
    body: 'We\'ll walk you through the three towers, the difference between them, and the numbers — before they change at launch.',
  },
  {
    num: '03',
    heading: 'A private site visit, when you\'re ready',
    body: 'No pressure. When the timing feels right, we\'ll arrange a walkthrough of the site and the show apartment.',
  },
]

const discovers = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h6M3 15h6"/></svg>
    ),
    label: 'Floor plans without wasted corridors',
    sub: 'Every sq ft mapped to how you actually live.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
    ),
    label: 'A lift ratio most builders don\'t advertise',
    sub: 'The number that determines Monday morning.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    ),
    label: 'Pre-launch pricing that shifts at possession',
    sub: 'Early means something specific here.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
    ),
    label: '90,000 sft of amenities at ground level',
    sub: 'Not a rooftop afterthought.',
  },
]

export default function ThankYouPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const discoversRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Staggered entrance animations
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          const delay = el.dataset.delay || '0'
          setTimeout(() => el.classList.add('ty-visible'), parseInt(delay))
          io.unobserve(el)
        }
      })
    }, { threshold: 0.1 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <style>{`
        :root {
          --font-heading: var(--font-playfair, 'Playfair Display'), Georgia, serif;
          --font-body: var(--font-inter, 'Inter'), -apple-system, sans-serif;
        }

        .ty-page * { box-sizing: border-box; margin: 0; padding: 0; }
        .ty-page { font-family: var(--font-body); }

        /* Reveal animation */
        [data-reveal] {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        [data-reveal].ty-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── HERO ── */
        .ty-hero {
          min-height: 92vh;
          background: linear-gradient(160deg, #0e1621 0%, #1a2840 50%, #111923 100%);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
          padding: 80px 24px 60px;
          position: relative; overflow: hidden;
        }
        .ty-hero-glow {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 60% 50% at 50% 60%, rgba(184,149,106,0.1) 0%, transparent 70%);
        }
        .ty-hero-lines {
          position: absolute; inset: 0; opacity: 0.04;
          background-image: linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        /* Animated pulse dot */
        .ty-pulse-wrap {
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 32px; position: relative; z-index: 1;
        }
        .ty-pulse {
          width: 12px; height: 12px; border-radius: 50%;
          background: #B8956A;
          box-shadow: 0 0 0 0 rgba(184,149,106,0.5);
          animation: ty-pulse-ring 2.5s ease-out infinite;
        }
        @keyframes ty-pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(184,149,106,0.6); }
          70%  { box-shadow: 0 0 0 16px rgba(184,149,106,0); }
          100% { box-shadow: 0 0 0 0 rgba(184,149,106,0); }
        }
        .ty-eyebrow {
          position: relative; z-index: 1;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #C8B89A; margin-bottom: 24px;
        }
        .ty-h1 {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 6vw, 4rem);
          font-weight: 500; line-height: 1.1;
          color: #fff; margin-bottom: 24px;
          letter-spacing: -0.02em;
          position: relative; z-index: 1;
          max-width: 720px;
        }
        .ty-h1 em { font-style: italic; color: #C8B89A; }
        .ty-sub {
          font-size: clamp(1rem, 2vw, 1.15rem);
          font-weight: 300; line-height: 1.8;
          color: rgba(255,255,255,0.6);
          max-width: 520px; margin-bottom: 48px;
          position: relative; z-index: 1;
        }
        .ty-hero-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: #25D366; color: #fff;
          font-family: var(--font-body);
          font-size: 0.9375rem; font-weight: 600;
          letter-spacing: 0.04em;
          padding: 14px 32px; border-radius: 3px;
          text-decoration: none; border: none; cursor: pointer;
          transition: background 0.3s, transform 0.3s;
          position: relative; z-index: 1;
          box-shadow: 0 4px 24px rgba(37,211,102,0.3);
        }
        .ty-hero-cta:hover { background: #1da851; transform: translateY(-2px); }

        /* Building silhouette decoration */
        .ty-building-deco {
          position: absolute; bottom: 0; left: 50%;
          transform: translateX(-50%);
          display: flex; align-items: flex-end; gap: 6px;
          opacity: 0.06; pointer-events: none;
        }
        .ty-tower {
          background: rgba(255,255,255,0.8);
          border-radius: 2px 2px 0 0;
        }

        /* ── STEPS ── */
        .ty-steps {
          background: #F8F6F2;
          padding: 88px 24px;
        }
        .ty-container {
          max-width: 900px; margin: 0 auto;
        }
        .ty-section-label {
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: #B8956A; margin-bottom: 20px;
          display: flex; align-items: center; gap: 10px;
        }
        .ty-section-label::before {
          content: ''; width: 24px; height: 1px;
          background: #B8956A; display: block;
        }
        .ty-section-h2 {
          font-family: var(--font-heading);
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 500; color: #1C2B3A;
          line-height: 1.2; margin-bottom: 56px;
          letter-spacing: -0.01em;
        }
        .ty-section-h2 em { font-style: italic; color: #B8956A; }
        .ty-steps-list {
          display: flex; flex-direction: column; gap: 0;
          border-top: 1px solid #E4DED5;
        }
        .ty-step {
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: 0 24px;
          padding: 32px 0;
          border-bottom: 1px solid #E4DED5;
          align-items: start;
          transition: background 0.3s;
        }
        .ty-step:hover { background: rgba(184,149,106,0.03); }
        .ty-step-num {
          font-family: var(--font-heading);
          font-size: 2rem; font-weight: 400;
          color: #E4DED5; line-height: 1;
          padding-top: 4px;
        }
        .ty-step-heading {
          font-size: 1.0625rem; font-weight: 600;
          color: #1C2B3A; margin-bottom: 8px; line-height: 1.4;
        }
        .ty-step-body {
          font-size: 0.9375rem; color: #6B7A8A; line-height: 1.7;
        }

        /* ── DISCOVER ── */
        .ty-discover {
          background: #fff;
          padding: 88px 24px;
        }
        .ty-discover-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: #E4DED5;
          border: 1px solid #E4DED5;
          border-radius: 4px; overflow: hidden;
          margin-top: 48px;
        }
        @media (max-width: 600px) {
          .ty-discover-grid { grid-template-columns: 1fr; }
        }
        .ty-discover-card {
          background: #fff; padding: 32px 28px;
          transition: background 0.3s;
        }
        .ty-discover-card:hover { background: #FDFCFA; }
        .ty-discover-icon {
          width: 44px; height: 44px;
          background: #F8F6F2; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: #8FA68E; margin-bottom: 16px;
        }
        .ty-discover-label {
          font-size: 0.9375rem; font-weight: 600;
          color: #1C2B3A; margin-bottom: 6px; line-height: 1.4;
        }
        .ty-discover-sub {
          font-size: 0.8125rem; color: #6B7A8A; line-height: 1.6;
        }

        /* ── WA SECTION ── */
        .ty-wa {
          background: #111923;
          padding: 80px 24px;
          text-align: center;
        }
        .ty-wa-kicker {
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: #C8B89A; margin-bottom: 20px;
          display: block;
        }
        .ty-wa-h2 {
          font-family: var(--font-heading);
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          font-weight: 500; color: #fff;
          line-height: 1.2; margin-bottom: 14px;
        }
        .ty-wa-sub {
          font-size: 0.9375rem; color: rgba(255,255,255,0.45);
          margin-bottom: 36px; line-height: 1.7;
        }
        .ty-wa-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: #25D366; color: #fff;
          font-family: var(--font-body);
          font-size: 1rem; font-weight: 600; letter-spacing: 0.04em;
          padding: 16px 36px; border-radius: 3px;
          text-decoration: none;
          transition: background 0.3s, transform 0.3s;
          box-shadow: 0 8px 32px rgba(37,211,102,0.25);
        }
        .ty-wa-btn:hover { background: #1da851; transform: translateY(-2px); }
        .ty-wa-note {
          margin-top: 20px;
          font-size: 0.8rem; color: rgba(255,255,255,0.25);
          letter-spacing: 0.04em;
        }

        /* ── MINI FOOTER ── */
        .ty-footer {
          background: #0d131b;
          padding: 28px 24px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .ty-footer-brand {
          font-family: var(--font-heading);
          font-size: 1rem; font-weight: 600;
          color: rgba(255,255,255,0.5); letter-spacing: 0.04em;
        }
        .ty-footer-brand span { color: #C8B89A; }
        .ty-footer-links {
          display: flex; gap: 20px; flex-wrap: wrap;
        }
        .ty-footer-links a {
          font-size: 0.8rem; color: rgba(255,255,255,0.25);
          text-decoration: none; letter-spacing: 0.04em;
          transition: color 0.3s;
        }
        .ty-footer-links a:hover { color: #C8B89A; }

        /* Mobile */
        @media (max-width: 767px) {
          .ty-hero { min-height: 85vh; }
          .ty-steps, .ty-discover, .ty-wa { padding: 64px 20px; }
          .ty-step { grid-template-columns: 40px 1fr; gap: 0 16px; padding: 24px 0; }
          .ty-step-num { font-size: 1.5rem; }
          .ty-footer { justify-content: center; text-align: center; }
        }
      `}</style>

      <div className="ty-page">

        {/* ── HERO ── */}
        <section className="ty-hero" ref={heroRef}>
          <div className="ty-hero-lines" aria-hidden="true" />
          <div className="ty-hero-glow" aria-hidden="true" />

          {/* Building silhouette */}
          <div className="ty-building-deco" aria-hidden="true">
            <div className="ty-tower" style={{ width: 32, height: 240 }} />
            <div className="ty-tower" style={{ width: 32, height: 300 }} />
            <div className="ty-tower" style={{ width: 24, height: 200 }} />
          </div>

          <div className="ty-pulse-wrap" data-reveal data-delay="0">
            <div className="ty-pulse" />
          </div>

          <p className="ty-eyebrow" data-reveal data-delay="100">
New Launch · Kondapur, Hyderabad
          </p>

          <h1 className="ty-h1" data-reveal data-delay="200">
            Good Timing.<br /><em>You&apos;re Among the First.</em>
          </h1>

          <p className="ty-sub" data-reveal data-delay="350">
            Most people will hear about this project three months from now.
            You enquired before the launch. That&apos;s a real advantage — and our team will make sure you feel it.
          </p>

          <a href={WA} className="ty-hero-cta" target="_blank" rel="noopener noreferrer" data-reveal data-delay="480">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.855L0 24l6.328-1.51A11.931 11.931 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.368l-.358-.213-3.755.895.954-3.659-.234-.374A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818 0 5.425-4.394 9.818-9.818 9.818z"/></svg>
            Message Us on WhatsApp
          </a>
        </section>

        {/* ── WHAT HAPPENS NEXT ── */}
        <section className="ty-steps" ref={stepsRef}>
          <div className="ty-container">
            <div className="ty-section-label" data-reveal data-delay="0">What Happens Next</div>
            <h2 className="ty-section-h2" data-reveal data-delay="100">
              Three steps.<br /><em>No pressure at any of them.</em>
            </h2>
            <div className="ty-steps-list">
              {steps.map((step, i) => (
                <div key={step.num} className="ty-step" data-reveal data-delay={`${i * 120}`}>
                  <div className="ty-step-num">{step.num}</div>
                  <div>
                    <div className="ty-step-heading">{step.heading}</div>
                    <div className="ty-step-body">{step.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT YOU'LL DISCOVER ── */}
        <section className="ty-discover" ref={discoversRef}>
          <div className="ty-container">
            <div className="ty-section-label" data-reveal data-delay="0">In Your Conversation</div>
            <h2 className="ty-section-h2" data-reveal data-delay="100">
              Four things most buyers<br /><em>only find out later.</em>
            </h2>
            <div className="ty-discover-grid">
              {discovers.map((d, i) => (
                <div key={d.label} className="ty-discover-card" data-reveal data-delay={`${i * 100}`}>
                  <div className="ty-discover-icon" aria-hidden="true">{d.icon}</div>
                  <div className="ty-discover-label">{d.label}</div>
                  <div className="ty-discover-sub">{d.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHATSAPP CTA ── */}
        <section className="ty-wa">
          <div className="ty-container">
            <span className="ty-wa-kicker">Can&apos;t wait for the call?</span>
            <h2 className="ty-wa-h2">We&apos;re on WhatsApp.<br />Ask anything, right now.</h2>
            <p className="ty-wa-sub">
              Floor plans, tower comparison, pricing, site visit slots — our team will answer directly.
            </p>
            <a href={WA} className="ty-wa-btn" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.855L0 24l6.328-1.51A11.931 11.931 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.368l-.358-.213-3.755.895.954-3.659-.234-.374A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818 0 5.425-4.394 9.818-9.818 9.818z"/></svg>
              Open WhatsApp
            </a>
            {/* <p className="ty-wa-note">Available 10 AM – 7 PM · Monday to Saturday</p> */}
          </div>
        </section>

        {/* ── MINI FOOTER ── */}
        <footer className="ty-footer">
          <div className="ty-footer-brand"><img src="/images/raghava-logo.jpg" alt="Developer Logo" style={{ height: '28px', width: 'auto' }} /></div>
          <div className="ty-footer-links">
            <Link href="/">Back to Homepage</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </footer>

      </div>
    </>
  )
}
