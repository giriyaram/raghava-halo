'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useModal } from '@/lib/modal-context'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openModal } = useModal()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''} role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" aria-label="Halo by Raghava - Home">
            Halo <span>·</span> Raghava
          </Link>
          <ul className="nav-links" role="list">
            <li><a href="#positioning">Overview</a></li>
            <li><a href="#residences">Residences</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#location">Location</a></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <button className="nav-cta" onClick={openModal} aria-label="Enquire about this project">
            Enquire Now
          </button>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            id="hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={menuOpen ? 'open' : ''} role="dialog" aria-label="Navigation menu">
        <ul role="list">
          <li><a href="#positioning" onClick={closeMenu}>Overview</a></li>
          <li><a href="#residences" onClick={closeMenu}>Residences</a></li>
          <li><a href="#amenities" onClick={closeMenu}>Amenities</a></li>
          <li><a href="#location" onClick={closeMenu}>Location</a></li>
          <li><Link href="/blog" onClick={closeMenu}>Blog &amp; Insights</Link></li>
          <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
        </ul>
        <button className="mobile-cta" onClick={() => { closeMenu(); openModal() }}>
          Enquire Now
        </button>
      </div>
    </>
  )
}
