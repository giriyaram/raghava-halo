import Image from 'next/image'

const shots = [
  { img: '/renders/community-evening.webp', cap: 'Three towers at dusk', span: 'wide', alt: 'Raghava Halo — the three towers and clubhouse lit at dusk in Kondapur, Hyderabad' },
  { img: '/renders/hero-tower-night.webp', cap: 'Balconies after dark', span: 'tall', alt: 'Raghava Halo — glowing curved balconies and sitouts on the tower façade at night' },
  { img: '/renders/towers-day.webp', cap: 'Sculpted crowns', span: '', alt: 'Raghava Halo — wave-form sky terraces crowning the towers at golden hour' },
  { img: '/renders/amenity-pathway.webp', cap: 'The landscaped podium', span: '', alt: 'Raghava Halo — sculptural timber landscape bridge and garden walk' },
  { img: '/renders/clubhouse-entrance.webp', cap: 'Arrival beneath the Halo', span: 'wide', alt: 'Raghava Halo — grand clubhouse arrival with the illuminated Halo and fountain' },
  { img: '/renders/towers-dusk.webp', cap: 'A skyline landmark', span: '', alt: 'Raghava Halo — towers rising to the illuminated Halo, viewed from below at dusk' },
]

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-h2">
      <div className="container">
        <div className="section-label">The Gallery</div>
        <h2 className="section-h2" id="gallery-h2">
          Official renders.<br /><em>The home you&apos;ve been picturing.</em>
        </h2>
        <p className="section-lead">
          Architectural renders of Raghava Halo — the towers, the arrival, the balconies, the
          gardens. The real thing is rising in Kondapur. Come see it in person.
        </p>
      </div>
      <div className="gallery-grid">
        {shots.map((s) => (
          <figure key={s.img + s.cap} className={`gallery-item fade-up ${s.span}`}>
            <Image src={s.img} alt={s.alt} fill sizes="(max-width: 700px) 100vw, 45vw" className="gallery-img" />
            <figcaption className="gallery-cap">{s.cap}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
