'use client'
import Image from 'next/image'
import { useModal } from '@/lib/modal-context'

const stations = [
  {
    id: 'robotics',
    img: '/gallery/kids-robotics-lab.webp',
    eyebrow: 'Problem-solving',
    name: 'Robotics & Coding',
    body: 'Build a robot, then teach it to think. Early coding and robotics that make logic feel like play.',
  },
  {
    id: 'build',
    img: '/gallery/kids-lego-workshop.webp',
    eyebrow: 'Creativity',
    name: 'Build & Engineer',
    body: 'Gears, ramps and structures — hands-on engineering that turns every “why?” into “watch this.”',
  },
  {
    id: 'sensory',
    img: '/gallery/kids-sensory-room.webp',
    eyebrow: 'Curiosity',
    name: 'Sensory & Discovery',
    body: 'Light, colour, texture and sound in an immersive room where wonder leads the lesson.',
  },
  {
    id: 'read',
    img: '/gallery/kids-reading-nook.webp',
    eyebrow: 'Imagination',
    name: 'Read & Imagine',
    body: 'A quiet reading nook where a good story is still the best technology ever invented.',
  },
]

export default function KidsLab() {
  const { openModal } = useModal()
  return (
    <section id="kids-lab" aria-labelledby="kids-lab-h2">
      <div className="container">
        <div className="kids-header">
          <div className="section-label">Kids Thinkers Lab</div>
          <h2 className="section-h2" id="kids-lab-h2">
            Where play grows<br /><em>into thinking.</em>
          </h2>
          <p className="section-lead">
            Children here aren&apos;t just given somewhere to burn energy. They&apos;re given a place
            to wonder, build and figure things out — a space designed for curiosity, creativity and
            collaboration, disguised as the best afternoon of their week.
          </p>
        </div>

        <div className="imgcard-grid" role="list">
          {stations.map(({ id, img, eyebrow, name, body }) => (
            <figure key={id} className="imgcard fade-up" role="listitem">
              <Image
                src={img}
                alt={`Raghava Halo Kids Thinkers Lab — ${name}`}
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

        <div className="kids-footer">
          <p className="kids-footer-copy">
            The kind of environment parents usually drive across the city for — a few floors below,
            inside the community they already call home.
          </p>
          <button className="btn-dark" onClick={openModal}>Book a Site Visit</button>
        </div>
      </div>
    </section>
  )
}
