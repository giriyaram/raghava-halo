import Image from 'next/image'

const features = [
  { img: '/gallery/rooftop-putting-green.webp', name: 'Rooftop Putting Green', note: 'A slow Sunday round, high above the city' },
  { img: '/gallery/tennis-court.webp', name: 'Tennis Courts', note: 'Full-size courts framed by mature landscaping' },
  { img: '/gallery/sports-courts-aerial.webp', name: 'The Sports Precinct', note: 'Courts and greens laid across the podium' },
  { img: '/gallery/cafe-pickleball.webp', name: 'Café & Pickleball', note: 'Where a match ends and the conversation begins' },
]

const more = [
  { icon: '🏊', name: 'Lap Pool + Kids Pool' },
  { icon: '💪', name: 'Fully Equipped Gym' },
  { icon: '🧘', name: 'Yoga &amp; Meditation Deck' },
  { icon: '💻', name: 'Co-working Lounge' },
  { icon: '🎬', name: 'Mini Theatre' },
  { icon: '🎉', name: 'Banquet &amp; Party Hall' },
  { icon: '🌸', name: 'Senior Citizens’ Garden' },
  { icon: '🏸', name: 'Indoor Games' },
  { icon: '🏃', name: 'Jogging &amp; Cycling Track' },
  { icon: '🔥', name: 'Barbecue Lawns' },
  { icon: '🐾', name: 'Pet Park' },
  { icon: '🛍️', name: 'Retail &amp; Convenience' },
]

export default function Amenities() {
  return (
    <section id="amenities" aria-labelledby="amenities-h2">
      <div className="container">
        <div className="amenities-lead">
          <div className="section-label">Amenities</div>
          <h2 className="section-h2" id="amenities-h2">
            A 90,000 sft clubhouse.<br />And 5.5 acres of <em>reasons to stay in.</em>
          </h2>
          <p className="section-lead">
            The things you&apos;ll use every day sit at the heart of the community — landscaped,
            walkable, and minutes from your lobby. This is where weekends happen without leaving home.
          </p>
        </div>

        <div className="amenity-feature-grid">
          {features.map((f) => (
            <figure key={f.name} className="amenity-feature fade-up">
              <Image
                src={f.img}
                alt={`Raghava Halo — ${f.name}`}
                fill
                sizes="(max-width: 600px) 100vw, 50vw"
                className="amenity-feature-img"
              />
              <figcaption className="amenity-feature-cap">
                <span className="amenity-feature-name">{f.name}</span>
                <span className="amenity-feature-note">{f.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="amenities-more-label">And plenty more within the gates</div>
        <div className="amenities-grid" role="list">
          {more.map((a) => (
            <div key={a.name} className="amenity-card fade-up" role="listitem">
              <div className="amenity-icon" aria-hidden="true">{a.icon}</div>
              <div className="amenity-name" dangerouslySetInnerHTML={{ __html: a.name }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
