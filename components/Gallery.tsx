import Image from 'next/image'

const shots = [
  { img: '/renders-towers/clubhouse-front-night.webp', cap: 'Arrival beneath the Halo', span: 'wide', alt: 'Raghava Halo — Club Halo and the illuminated Halo ring at night' },
  { img: '/gallery/grand-lobby.webp', cap: 'The grand lobby', span: 'tall', alt: 'Raghava Halo — double-height grand lobby with marble and a sculptural mezzanine' },
  { img: '/renders-towers/tower-crowns-sunset.webp', cap: 'Sky-garden crowns', span: '', alt: 'Raghava Halo — sculpted tower crowns with rooftop sky gardens at sunset' },
  { img: '/gallery/rooftop-yoga-deck.webp', cap: 'Rooftop wellness', span: '', alt: 'Raghava Halo — rooftop yoga and meditation deck' },
  { img: '/gallery/master-bedroom.webp', cap: 'Inside a Halo home', span: 'tall', alt: 'Raghava Halo — a light-filled master bedroom interior' },
  { img: '/renders-towers/podium-wave-facade-sunset.webp', cap: 'The wave podium', span: 'wide', alt: 'Raghava Halo — the signature timber wave-form podium façade at sunset' },
  { img: '/gallery/family-living-room.webp', cap: 'Room to gather', span: '', alt: 'Raghava Halo — an open, family living room interior' },
  { img: '/renders-towers/towers-full-dusk-symmetric.webp', cap: 'A skyline landmark', span: '', alt: 'Raghava Halo — the three towers and Club Halo lit symmetrically at dusk' },
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
          Official renders of Raghava Halo — the towers and the arrival, the lobby and the homes,
          the gardens and the sky. It&apos;s rising now in Kondapur. Come see it in person.
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
