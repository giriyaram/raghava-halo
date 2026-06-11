'use client'
import { useModal } from '@/lib/modal-context'

const RltIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3.5"/>
    <line x1="12" y1="2" x2="12" y2="5.5"/>
    <line x1="12" y1="18.5" x2="12" y2="22"/>
    <line x1="2" y1="12" x2="5.5" y2="12"/>
    <line x1="18.5" y1="12" x2="22" y2="12"/>
    <line x1="5.05" y1="5.05" x2="7.46" y2="7.46"/>
    <line x1="16.54" y1="16.54" x2="18.95" y2="18.95"/>
    <line x1="18.95" y1="5.05" x2="16.54" y2="7.46"/>
    <line x1="7.46" y1="16.54" x2="5.05" y2="18.95"/>
  </svg>
)

const HbotIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="8" width="18" height="9" rx="4.5"/>
    <line x1="12" y1="4" x2="12" y2="8"/>
    <line x1="9.5" y1="4" x2="14.5" y2="4"/>
    <line x1="7.5" y1="12.5" x2="10" y2="12.5"/>
    <path d="M13 11h1.5a1 1 0 0 1 0 2H13v2"/>
  </svg>
)

const SaunaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 21c0-1.5 1.5-2.5 1.5-4.5S8 13 8 11"/>
    <path d="M12 21c0-1.5 1.5-2.5 1.5-4.5S12 13 12 11"/>
    <path d="M16 21c0-1.5 1.5-2.5 1.5-4.5S16 13 16 11"/>
    <line x1="4" y1="22" x2="20" y2="22"/>
  </svg>
)

const FloatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 15c1.5-2 3 0 4.5 0s3-2 4.5-2 3 2 4.5 2 3-2 4.5 0"/>
    <path d="M2 19c1.5-2 3 0 4.5 0s3-2 4.5-2 3 2 4.5 2 3-2 4.5 0"/>
    <ellipse cx="12" cy="9" rx="5" ry="2.5"/>
    <line x1="12" y1="4" x2="12" y2="6.5"/>
  </svg>
)

const protocols = [
  {
    id: 'rlt',
    Icon: RltIcon,
    name: 'Red Light Therapy',
    tagline: 'Cellular recovery. Reduced inflammation. Better sleep.',
    body: 'Wavelengths shown to support cellular repair, reduce joint soreness, and improve sleep quality — used by performance athletes and longevity researchers alike.',
  },
  {
    id: 'hbot',
    Icon: HbotIcon,
    name: 'Hyperbaric Oxygen Therapy',
    tagline: 'Accelerated healing. Sharper cognition. Reduced fatigue.',
    body: 'Pure oxygen at elevated pressure helps tissues recover faster, clears the cognitive drag of long workdays, and restores mental clarity when it matters most.',
  },
  {
    id: 'sauna',
    Icon: SaunaIcon,
    name: 'Sauna Therapy',
    tagline: 'Lower cortisol. Cardiovascular health. Deep decompression.',
    body: 'Regular sauna use is linked to measurable reductions in stress hormones and improved cardiovascular function. A proven ritual — not a luxury afterthought.',
  },
  {
    id: 'float',
    Icon: FloatIcon,
    name: 'Float Tank Therapy',
    tagline: 'Deeper than rest. Quieter than sleep.',
    body: 'Sensory deprivation float therapy reaches the deepest recovery state your nervous system can achieve — the kind of reset that ordinary rest rarely replicates.',
  },
]

export default function Wellness() {
  const { openModal } = useModal()
  return (
    <section id="wellness" aria-labelledby="wellness-h2">
      <div className="wellness-noise" aria-hidden="true" />
      <div className="container">
        <div className="wellness-header">
          <div className="wellness-label">Wellness &amp; Recovery</div>
          <h2 className="wellness-h2" id="wellness-h2">
            Most Amenities Are Built for Entertainment.<br />
            <em>These Were Built for Recovery.</em>
          </h2>
          <p className="wellness-lead">
            Four evidence-backed protocols designed for the demands of modern living — not a spa menu,
            but a genuine investment in how you perform, recover, and age inside your own building.
          </p>
        </div>

        <div className="wellness-grid" role="list">
          {protocols.map(({ id, Icon, name, tagline, body }) => (
            <div key={id} className="wellness-card fade-up" role="listitem">
              <div className="wellness-card-icon">
                <Icon />
              </div>
              <div className="wellness-card-name">{name}</div>
              <div className="wellness-card-tagline">{tagline}</div>
              <p className="wellness-card-body">{body}</p>
            </div>
          ))}
        </div>

        <div className="wellness-footer">
          <p className="wellness-footer-copy">
            Not a brochure feature. A commitment to how residents actually feel inside their home —
            day after day, year after year.
          </p>
          <button className="btn-outline" onClick={openModal}>
            Enquire About Wellness Facilities
          </button>
        </div>
      </div>
    </section>
  )
}
