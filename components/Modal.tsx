'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useModal } from '@/lib/modal-context'
import PhoneInput from '@/components/PhoneInput'

export default function Modal() {
  const { open, closeModal } = useModal()
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const router = useRouter()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [closeModal])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const GHL_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/iKV2RlHEQss3Ai83mwnU/webhook-trigger/Yq3KogRk8uZlWNNpuiV5'

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const n = (form.elements.namedItem('name') as HTMLInputElement).value.trim()
    const p = (form.elements.namedItem('phone') as HTMLInputElement).value.trim()
    const em = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
    const interest = (form.elements.namedItem('interest') as HTMLSelectElement).value
    const phoneDigits = p.replace(/\D/g, '')
    if (!n || phoneDigits.length < 7) { alert('Please provide your name and phone number.'); return }
    setName(n)
    setSubmitted(true)
    fetch(GHL_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: n, phone: p, email: em, interest, source: 'Raghava Halo Website' }),
    }).catch(() => {})
    setTimeout(() => { closeModal(); router.push('/thank-you') }, 400)
  }

  if (!open) return null

  return (
    <div
      id="modal-overlay"
      className="open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={closeModal} aria-label="Close">&times;</button>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>✓</div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--dark)', marginBottom: '8px' }}>
              Thank you, {name}.
            </h4>
            <p style={{ color: 'var(--muted)', fontSize: '0.9375rem' }}>
              Our team will reach out within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <h3 id="modal-title">Enquire about Raghava Halo</h3>
            <p>Floor plans, launch pricing and site-visit slots — all in one conversation.</p>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="m-name">Full Name *</label>
                <input type="text" id="m-name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="m-phone">Phone *</label>
                <PhoneInput id="m-phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="m-email">Email Address</label>
                <input type="email" id="m-email" name="email" placeholder="you@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="m-interest">I&apos;m interested in</label>
                <select id="m-interest" name="interest">
                  <option value="">Select a residence</option>
                  <option>The Essential — 3 BHK (~1,830 sft)</option>
                  <option>The Signature — 3 BHK (~2,275 sft)</option>
                  <option>The Sky Home — 3 BHK (~2,455 sft)</option>
                  <option>Not sure yet — show me everything</option>
                </select>
              </div>
              <button type="submit" className="form-submit">Send My Enquiry</button>
              <p className="form-trust">No spam. No pressure calls. Your information stays private.</p>
            </form>
            <a
              href="https://wa.me/919849019238?text=Hi%2C+I'm+interested+in+Raghava+Halo+in+Kondapur."
              className="whatsapp-alt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.855L0 24l6.328-1.51A11.931 11.931 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.368l-.358-.213-3.755.895.954-3.659-.234-.374A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818 0 5.425-4.394 9.818-9.818 9.818z"/></svg>
              WhatsApp Us Instead
            </a>
            <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '12px', textAlign: 'center' }}>
              RERA Reg. No. P02400011015
            </p>
          </>
        )}
      </div>
    </div>
  )
}
