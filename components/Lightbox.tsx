'use client'
import { useEffect, useRef } from 'react'

export interface LightboxImage {
  src: string
  alt: string
}

interface LightboxProps {
  images: LightboxImage[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  // Native <dialog>.showModal() gives us a free focus trap, top-layer
  // rendering, and a ::backdrop — no library needed.
  useEffect(() => {
    const dialogEl = dialogRef.current
    if (!dialogEl) return
    if (!dialogEl.open) dialogEl.showModal()
    return () => { if (dialogEl.open) dialogEl.close() }
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (images.length < 2) return
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [index, images, onNavigate])

  const img = images[index]
  if (!img) return null

  return (
    <dialog
      ref={dialogRef}
      className="lightbox-dialog"
      aria-label={img.alt}
      onClose={onClose}
      onCancel={onClose}
      onClick={(e) => { if (e.target === dialogRef.current) onClose() }}
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close image viewer">&times;</button>
      {images.length > 1 && (
        <>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={() => onNavigate((index - 1 + images.length) % images.length)}
            aria-label="Previous image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            className="lightbox-nav lightbox-next"
            onClick={() => onNavigate((index + 1) % images.length)}
            aria-label="Next image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element -- full-res static asset in a post-interaction viewer, next/image's fill mode adds no value here */}
      <img src={img.src} alt={img.alt} className="lightbox-img" />
    </dialog>
  )
}
