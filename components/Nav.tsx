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
          <Link href="/" className="nav-logo" aria-label="Raghava Halo — homepage">
            <span className="nav-logo-mark" aria-hidden="true" />
            Raghava <em>Halo</em>
          </Link>
          <ul className="nav-links" role="list">
            <li><a href="#why">Overview</a></li>
            <li><a href="#architecture">Architecture</a></li>
            <li><a href="#residences">Residences</a></li>
            <li><a href="#wellness">Wellness</a></li>
            <li><a href="#location">Location</a></li>
            <li><Link href="/blog">Journal</Link></li>
          </ul>
          <button className="nav-cta" onClick={openModal} aria-label="Book a site visit at Raghava Halo">
            Book a Site Visit
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
          <li><a href="#why" onClick={closeMenu}>Overview</a></li>
          <li><a href="#architecture" onClick={closeMenu}>Architecture</a></li>
          <li><a href="#residences" onClick={closeMenu}>Residences &amp; Floor Plans</a></li>
          <li><a href="#wellness" onClick={closeMenu}>Wellness</a></li>
          <li><a href="#amenities" onClick={closeMenu}>Amenities</a></li>
          <li><a href="#location" onClick={closeMenu}>Location</a></li>
          <li><Link href="/blog" onClick={closeMenu}>Journal</Link></li>
          <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
        </ul>
        <button className="mobile-cta" onClick={() => { closeMenu(); openModal() }}>
          Book a Site Visit
        </button>
      </div>
    </>
  )
}
