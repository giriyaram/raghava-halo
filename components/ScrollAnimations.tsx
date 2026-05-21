'use client'
import { useEffect } from 'react'

export default function ScrollAnimations() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.fade-up'))

    const reveal = (el: Element) => el.classList.add('visible')

    const fadeIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target)
            fadeIo.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => {
      // If element is already in viewport on load, reveal immediately
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        reveal(el)
      } else {
        fadeIo.observe(el)
      }
    })

    // Hard fallback: anything still invisible after 3s gets revealed
    const fallback = setTimeout(() => {
      document.querySelectorAll('.fade-up:not(.visible)').forEach(reveal)
    }, 3000)

    // Smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        const top = target.getBoundingClientRect().top + window.pageYOffset - 80
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      fadeIo.disconnect()
      clearTimeout(fallback)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}
