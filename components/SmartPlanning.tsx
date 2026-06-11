'use client'
import { useModal } from '@/lib/modal-context'

const benefits = [
  {
    id: 'carpet',
    headline: 'More Carpet Area',
    body: '~29% loading vs the 32–35% typical in competing projects. On a 2,000 sq ft home, that gap becomes 100–120 sq ft of additional space you can furnish and use.',
  },
  {
    id: 'light',
    headline: 'Consistent Natural Light',
    body: 'East, West, and North facing orientations planned for daylight across every unit — not a coincidence, but a deliberate decision made at the design stage.',
  },
  {
    id: 'ventilation',
    headline: 'Cross-Ventilation by Design',
    body: 'Thoughtful placement of openings means rooms that breathe naturally, reducing HVAC dependence and lowering electricity costs over time.',
  },
  {
    id: 'corridors',
    headline: 'Minimal Wasted Corridors',
    body: 'Lean circulation paths mean shared spaces serve movement, not padding. The building works more efficiently so your home is larger.',
  },
  {
    id: 'floor',
    headline: 'Only 4 Homes Per Floor',
    body: 'Select towers keep just four residences per floor with 4 dedicated lifts — better privacy, shorter wait times, and a noticeably quieter daily experience.',
  },
  {
    id: 'lifts',
    headline: '1:1 Lift-to-Home Ratio',
    body: 'No morning queues. Lift planning designed around how residents actually live — not minimum compliance requirements.',
  },
]

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path d="M2 6.5L5 9.5L11 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function SmartPlanning() {
  const { openModal } = useModal()
  return (
    <section id="smart-planning" aria-labelledby="smart-planning-h2">
      <div className="container">

        <div className="sp-header">
          <div className="section-label">Architecture &amp; Planning</div>
          <h2 className="section-h2" id="smart-planning-h2">
            You&apos;re Paying for Every Square Foot.<br />
            <em>You Should Actually Live in Every Square Foot.</em>
          </h2>
          <p className="section-lead">
            Most buyers compare homes by total area. But not all area is equal — the gap between the
            home on paper and the home you inhabit is where most buildings quietly disappoint.
            Leaner architecture means more of what you paid for becomes living space.
          </p>
        </div>

        {/* Comparison block */}
        <div className="sp-comparison" role="group" aria-label="Loading factor comparison">
          <div className="sp-comp-col">
            <div className="sp-comp-label">Most Competing Projects</div>
            <div className="sp-bar-wrap" aria-label="32–35% loading factor">
              <div className="sp-bar-fill sp-bar-other" style={{ width: '34%' }} aria-hidden="true" />
            </div>
            <div className="sp-comp-stat">32–35%</div>
            <div className="sp-comp-sub">of built-up area absorbed by corridors, walls &amp; passages</div>
          </div>
          <div className="sp-comp-divider" aria-hidden="true">vs</div>
          <div className="sp-comp-col">
            <div className="sp-comp-label sp-comp-label-this">Halo by Raghava</div>
            <div className="sp-bar-wrap" aria-label="approximately 29% loading factor">
              <div className="sp-bar-fill sp-bar-this" style={{ width: '29%' }} aria-hidden="true" />
            </div>
            <div className="sp-comp-stat sp-comp-stat-this">~29%</div>
            <div className="sp-comp-sub">more carpet area — more usable home for the same sq ft on paper</div>
          </div>
        </div>

        {/* Highlight callout */}
        <div className="sp-callout">
          <div className="sp-callout-number">100 – 120 sq ft</div>
          <div className="sp-callout-label">
            Additional usable carpet area on a typical 2,000 sq ft residence — roughly the size of a full bedroom, simply from smarter planning.
          </div>
        </div>

        {/* Benefits grid */}
        <div className="sp-benefits" role="list">
          {benefits.map(({ id, headline, body }) => (
            <div key={id} className="sp-benefit fade-up" role="listitem">
              <div className="sp-benefit-check">
                <CheckIcon />
              </div>
              <div>
                <div className="sp-benefit-headline">{headline}</div>
                <p className="sp-benefit-body">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="sp-close">
          <p className="sp-close-copy">
            The floor plan you walk through looks similar to any premium project. What changes
            is how much of it is genuinely, measurably yours.
          </p>
          <button className="btn-dark" onClick={openModal}>Get Floor Plan Details</button>
        </div>

      </div>
    </section>
  )
}
