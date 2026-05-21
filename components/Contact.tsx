'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useModal } from '@/lib/modal-context'

export default function Contact() {
  const { openModal } = useModal()
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')
  const router = useRouter()

  const GHL_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/iKV2RlHEQss3Ai83mwnU/webhook-trigger/Yq3KogRk8uZlWNNpuiV5'

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim()
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim()
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
    const interest = (form.elements.namedItem('interest') as HTMLSelectElement).value
    if (!name || !phone) { alert('Please provide your name and phone number.'); return }
    setSubmittedName(name)
    setSubmitted(true)
    fetch(GHL_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, email, interest, source: 'Halo by Raghava Website' }),
    }).catch(() => {})
    setTimeout(() => router.push('/thank-you'), 400)
  }

  return (
    <section id="contact" aria-labelledby="contact-h2">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-left">
            <div className="tower3-label">Get In Touch</div>
            <h2 className="contact-h2" id="contact-h2">Get the Full Picture. Before Anyone Else Does.</h2>
            <p className="contact-sub">
              Floor plans, pricing, payment schedules, and site visit slots — all in one conversation.
            </p>
            <div className="contact-trust">
              {[
                ['No pressure calls.', 'Our team shares information and answers questions — not chases you.'],
                ['Your data stays private.', "We don't share your details with third-party brokers."],
                ['NRI buyers welcome.', 'Virtual walkthroughs and documentation assistance available.'],
                ['Early enquiries get first access', 'to floor plan selection and launch pricing.'],
              ].map(([strong, rest]) => (
                <div key={strong} className="ct-item">
                  <div className="ct-dot" />
                  <div className="ct-text"><strong>{strong}</strong> {rest}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-form-box">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>✓</div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--dark)', marginBottom: '10px' }}>
                  Thank you, {submittedName}.
                </h4>
                <p style={{ color: 'var(--muted)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                  Our team will reach out within 24 hours with full details, floor plans, and pricing.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group half">
                    <label htmlFor="c-name">Full Name *</label>
                    <input type="text" id="c-name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="form-group half">
                    <label htmlFor="c-phone">Phone *</label>
                    <input type="tel" id="c-phone" name="phone" placeholder="+91 98765 43210" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="c-email">Email Address</label>
                  <input type="email" id="c-email" name="email" placeholder="you@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="c-interest">I&apos;m interested in</label>
                  <select id="c-interest" name="interest">
                    <option value="">Select residence type</option>
                    <option>3 BHK Comfort (~1800 sft)</option>
                    <option>3 BHK Premium (~2100 sft)</option>
                    <option>Tower 3 Corner 3 BHK (~2500 sft)</option>
                    <option>Not Sure Yet — Show Me All Options</option>
                  </select>
                </div>
                <button type="submit" className="form-submit">Send My Enquiry</button>
                <p className="form-trust">No spam. No pressure calls. Your information stays private.</p>
                <a
                  href="https://wa.me/919849019238?text=Hi%2C+I'm+interested+in+Halo+by+Raghava+in+Kondapur."
                  className="whatsapp-alt"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: '16px' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.855L0 24l6.328-1.51A11.931 11.931 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.368l-.358-.213-3.755.895.954-3.659-.234-.374A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818 0 5.425-4.394 9.818-9.818 9.818z"/></svg>
                  WhatsApp Us Directly
                </a>
                <p style={{ fontSize: '0.78rem', color: 'var(--muted)', textAlign: 'center', marginTop: '14px' }}>
                  RERA registration details available on request. Pricing subject to change at launch.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
