'use client'
import { useModal } from '@/lib/modal-context'

const benefits = [
  {
    id: 'carpet',
    headline: 'More of what you pay for',
    body: 'Lower loading — roughly 29% against the 32–35% common in competing projects. On a 2,000 sft home, that difference is 100–120 sft of real, furnishable space you get to keep.',
  },
  {
    id: 'balcony',
    headline: 'Balconies you actually use',
    body: 'Curved balcony edges and a dedicated sitout give every home a genuine outdoor room — wide enough for a chair, a table, and a slow morning. Not a token ledge.',
  },
  {
    id: 'light',
    headline: 'Light in every room',
    body: 'Orientations were fixed at the design stage so daylight reaches living rooms and bedrooms across the day — a deliberate decision, not a happy accident of the site.',
  },
  {
    id: 'ventilation',
    headline: 'Rooms that breathe',
    body: 'Openings placed for genuine cross-ventilation mean cooler homes and lower running costs — the kind of comfort you feel long before you see the electricity bill.',
  },
  {
    id: 'vastu',
    headline: 'Vastu, built into the bones',
    body: 'A dedicated pooja space, considered entrances, and tower orientation aligned to Vastu — planned into the structure from the first drawing, never bolted on afterwards.',
  },
  {
    id: 'cores',
    headline: 'Quiet, efficient cores',
    body: 'Multiple passenger lifts and a service lift per core, with lean corridors that move people instead of padding out the floor plate. Shorter waits, calmer common areas.',
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
    <section id="planning" aria-labelledby="planning-h2">
      <div className="container">

        <div className="sp-header">
          <div className="section-label">Thoughtful Planning</div>
          <h2 className="section-h2" id="planning-h2">
            You pay for every square foot.<br />
            <em>You should get to live in every one.</em>
          </h2>
          <p className="section-lead">
            Most buyers compare homes by total area — but not all area is equal. The gap between the
            home on paper and the home you inhabit is where most towers quietly disappoint. Leaner
            architecture means more of what you paid for ends up as living space.
          </p>
        </div>

        {/* Comparison block */}
        <div className="sp-comparison" role="group" aria-label="Loading factor comparison">
          <div className="sp-comp-col">
            <div className="sp-comp-label">Typical High-Rise</div>
            <div className="sp-bar-wrap" aria-label="32–35% loading factor">
              <div className="sp-bar-fill sp-bar-other" style={{ width: '34%' }} aria-hidden="true" />
            </div>
            <div className="sp-comp-stat">32–35%</div>
            <div className="sp-comp-sub">of built-up area absorbed by corridors, walls &amp; passages</div>
          </div>
          <div className="sp-comp-divider" aria-hidden="true">vs</div>
          <div className="sp-comp-col">
            <div className="sp-comp-label sp-comp-label-this">Raghava Halo</div>
            <div className="sp-bar-wrap" aria-label="approximately 29% loading factor">
              <div className="sp-bar-fill sp-bar-this" style={{ width: '29%' }} aria-hidden="true" />
            </div>
            <div className="sp-comp-stat sp-comp-stat-this">~29%</div>
            <div className="sp-comp-sub">more carpet area — more usable home for the same sft on paper</div>
          </div>
        </div>

        {/* Highlight callout */}
        <div className="sp-callout">
          <div className="sp-callout-number">100–120 sft</div>
          <div className="sp-callout-label">
            Additional usable carpet area on a typical 2,000 sft home — roughly a whole extra
            bedroom, created by nothing more than smarter planning.
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
            On the brochure, every premium project looks the same. What changes at Raghava Halo is
            how much of it is genuinely, measurably yours.
          </p>
          <button className="btn-dark" onClick={openModal}>See the Floor Plans</button>
        </div>

      </div>
    </section>
  )
}
