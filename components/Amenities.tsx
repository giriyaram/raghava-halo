const amenities = [
  { icon: '🏛️', name: 'Clubhouse & Social Lounge' },
  { icon: '🏊', name: 'Lap Pool + Kids Pool' },
  { icon: '💪', name: 'Fully Equipped Gymnasium' },
  { icon: '🧘', name: 'Yoga & Meditation Pavilion' },
  { icon: '🏸', name: 'Badminton Courts' },
  { icon: '🛝', name: 'Kids Play Zone' },
  { icon: '🌿', name: 'Landscaped Jogging Track' },
  { icon: '💻', name: 'Co-working Lounge' },
  { icon: '🎬', name: 'Mini Theatre' },
  { icon: '🌸', name: 'Senior Citizen Garden' },
  { icon: '🏏', name: 'Cricket Practice Net' },
  { icon: '🎉', name: 'Party Hall' },
]

export default function Amenities() {
  return (
    <section id="amenities" aria-labelledby="amenities-h2">
      <div className="container">
        <div className="amenities-lead">
          <div className="section-label">Amenities</div>
          <h2 className="section-h2" id="amenities-h2">
            1,50,000 sq ft Clubhouse.<br />All Amenities at Stilt Level.{' '}
            <em>Not a Rooftop Afterthought.</em>
          </h2>
          <p className="section-lead">
            A full-scale clubhouse plus stilt-level amenities — because what you use every day
            should be the easiest thing to reach, not a second lift ride away.
          </p>
        </div>
        <div className="amenities-grid" role="list">
          {amenities.map((a) => (
            <div key={a.name} className="amenity-card fade-up" role="listitem">
              <div className="amenity-icon" aria-hidden="true">{a.icon}</div>
              <div className="amenity-name">{a.name}</div>
            </div>
          ))}
        </div>
        <div className="amenities-note">
          <p>
            <strong>The 1,50,000 sft clubhouse sits at the heart of the project, and all amenities are at stilt level.</strong>{' '}
            No elevator ride to the pool. No elevator wait after your morning run. Step out of the
            lobby and you are already there — access integrated into the building the way it should
            have always been.
          </p>
        </div>
      </div>
    </section>
  )
}
