'use client'
import Image from 'next/image'
import { useModal } from '@/lib/modal-context'

const protocols = [
  {
    id: 'rlt',
    img: '/gallery/red-light-therapy.webp',
    eyebrow: 'Recover',
    name: 'Red Light Therapy',
    body: 'Cellular recovery and skin health — the protocol elite athletes use, downstairs from your home.',
  },
  {
    id: 'hbot',
    img: '/gallery/sleep-relaxation-pod.webp',
    eyebrow: 'Restore',
    name: 'Hyperbaric Oxygen (HBOT)',
    body: 'Pressurised oxygen sessions for faster recovery, sharper focus, and deeper sleep.',
  },
  {
    id: 'float',
    img: '/gallery/float-therapy-pod.webp',
    eyebrow: 'Reset',
    name: 'Float Therapy',
    body: 'An hour of weightless silence. The fastest reset a working mind can buy.',
  },
  {
    id: 'sauna',
    img: '/gallery/infrared-sauna.webp',
    eyebrow: 'Unwind',
    name: 'Sauna',
    body: 'Heat exposure for circulation, stress relief, and the kind of sleep you forgot was possible.',
  },
]

export default function Wellness() {
  const { openModal } = useModal()
  return (
    <section id="wellness" aria-labelledby="wellness-h2">
      <div className="wellness-noise" aria-hidden="true" />
      <div className="container">
        <div className="wellness-header">
          <div className="wellness-label">Wellness for Modern Living</div>
          <h2 className="wellness-h2" id="wellness-h2">
            A wellness resort,<br /><em>one lift ride from your door.</em>
          </h2>
          <p className="wellness-lead">
            Recovery science usually lives in elite clinics and boutique studios across the city. At
            Raghava Halo it lives downstairs — a private suite built for the way modern life actually
            wears you down, and how quickly you deserve to feel like yourself again.
          </p>
        </div>

        <div className="imgcard-grid" role="list">
          {protocols.map(({ id, img, eyebrow, name, body }) => (
            <figure key={id} className="imgcard fade-up" role="listitem">
              <Image
                src={img}
                alt={`Raghava Halo wellness suite — ${name}`}
                fill
                sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 25vw"
                className="imgcard-img"
              />
              <figcaption className="imgcard-body">
                <div className="imgcard-eyebrow">{eyebrow}</div>
                <div className="imgcard-title">{name}</div>
                <p>{body}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="wellness-footer">
          <p className="wellness-footer-copy">
            No membership across town. No traffic on the way to feeling better. Just recovery,
            built into the building you live in.
          </p>
          <button className="btn-outline" onClick={openModal}>
            Tour the Wellness Suite
          </button>
        </div>
      </div>
    </section>
  )
}
