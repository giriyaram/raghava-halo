const specs = [
  { k: 'Structure', v: 'RCC-framed towers engineered for the local seismic zone, with a durable, low-maintenance façade.' },
  { k: 'Flooring', v: 'Large-format double-charged vitrified tiles in living, dining and bedrooms; anti-skid finishes in balconies and baths.' },
  { k: 'Kitchen', v: 'Polished granite / quartz counter with provision for chimney, hob, water purifier and modular units.' },
  { k: 'Bathrooms', v: 'Premium CP fittings and sanitaryware, designer wall tiling, and false ceilings with concealed plumbing.' },
  { k: 'Doors & Windows', v: 'Engineered veneer main door, laminated internal shutters, and UPVC / powder-coated aluminium windows.' },
  { k: 'Electrical', v: 'Concealed copper wiring, modular switches, TV / data points, and dedicated AC provisions in every room.' },
  { k: 'Security', v: 'Three-tier gated security, CCTV surveillance of common areas, and a video door phone in every home.' },
  { k: 'Lifts', v: 'High-speed passenger lifts plus a dedicated service lift per core, with generator backup.' },
  { k: 'Power Backup', v: 'DG backup for common areas and essential points in every apartment — the essentials never go dark.' },
  { k: 'Sustainability', v: 'Rainwater harvesting, sewage treatment plant, solar for common areas, and EV-charging provision.' },
]

export default function Specifications() {
  return (
    <section id="specifications" aria-labelledby="specifications-h2">
      <div className="container">
        <div className="section-label">Specifications</div>
        <h2 className="section-h2" id="specifications-h2">
          The quality is in the parts<br /><em>you don&apos;t see on the brochure.</em>
        </h2>
        <p className="section-lead">
          An indicative summary of the finishes and systems that go into every Raghava Halo home.
          A detailed specification sheet is shared with every serious enquiry.
        </p>
        <dl className="spec-grid">
          {specs.map((s) => (
            <div key={s.k} className="spec-row fade-up">
              <dt className="spec-key">{s.k}</dt>
              <dd className="spec-val">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
