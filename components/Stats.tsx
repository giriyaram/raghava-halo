'use client'
import { useEffect, useRef, useState } from 'react'

interface StatItem { number?: number; suffix?: string; label: string; prefix?: string; raw?: string }

const stats: StatItem[] = [
  { number: 52, suffix: '', label: 'Floors' },
  { number: 3, suffix: '', label: 'Towers' },
  { raw: '5.5 Acres', label: 'Project Area' },
  { number: 1000, suffix: '+', label: 'Homes' },
  { number: 90, suffix: ',000 sft', label: 'Clubhouse + Stilt Amenities' },
  { number: 1800, suffix: '–2500 sft', label: 'Residence Sizes' },
  { raw: '₹1.6 Cr', label: 'Starting Price' },
  { raw: '1:1', label: 'Ratio of Lifts' },
]

function useCounter(target: number, started: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    const duration = 1800
    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setValue(target)
    }
    requestAnimationFrame(step)
  }, [started, target])
  return value
}

function StatCard({ stat, started }: { stat: StatItem; started: boolean }) {
  const val = useCounter(stat.number ?? 0, started)
  return (
    <div className="stat-card fade-up" role="listitem">
      <div className="stat-number">
        {stat.raw ? (
          <span>{stat.raw}</span>
        ) : (
          <>
            {stat.prefix && <sup>{stat.prefix}</sup>}
            <span>{val.toLocaleString('en-IN')}</span>
            {stat.suffix && <sub>{stat.suffix}</sub>}
          </>
        )}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); io.disconnect() } },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="stats" ref={sectionRef} aria-labelledby="stats-h2">
      <div className="container">
        <div className="section-label">By the Numbers</div>
        <h2 className="section-h2" id="stats-h2">
          A Project Built at Scale.<br /><em>Planned with Precision.</em>
        </h2>
        <div className="stats-grid" role="list">
          {stats.map((s) => <StatCard key={s.label} stat={s} started={started} />)}
        </div>
      </div>
    </section>
  )
}
