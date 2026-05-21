'use client'
import { useState, useRef, useEffect } from 'react'

interface Country { flag: string; name: string; code: string; dial: string }

const COUNTRIES: Country[] = [
  { flag: '🇮🇳', name: 'India',        code: 'IN', dial: '+91'  },
  { flag: '🇺🇸', name: 'United States', code: 'US', dial: '+1'   },
  { flag: '🇦🇪', name: 'UAE',           code: 'AE', dial: '+971' },
  { flag: '🇬🇧', name: 'United Kingdom',code: 'GB', dial: '+44'  },
  { flag: '🇸🇬', name: 'Singapore',     code: 'SG', dial: '+65'  },
  { flag: '🇦🇺', name: 'Australia',     code: 'AU', dial: '+61'  },
  { flag: '🇨🇦', name: 'Canada',        code: 'CA', dial: '+1'   },
  { flag: '🇶🇦', name: 'Qatar',         code: 'QA', dial: '+974' },
  { flag: '🇸🇦', name: 'Saudi Arabia',  code: 'SA', dial: '+966' },
  { flag: '🇩🇪', name: 'Germany',       code: 'DE', dial: '+49'  },
  { flag: '🇳🇿', name: 'New Zealand',   code: 'NZ', dial: '+64'  },
  { flag: '🇳🇱', name: 'Netherlands',   code: 'NL', dial: '+31'  },
  { flag: '🇧🇭', name: 'Bahrain',       code: 'BH', dial: '+973' },
  { flag: '🇰🇼', name: 'Kuwait',        code: 'KW', dial: '+965' },
  { flag: '🇮🇪', name: 'Ireland',       code: 'IE', dial: '+353' },
]

interface PhoneInputProps {
  id: string
  name: string
  required?: boolean
  onValueChange?: (fullPhone: string) => void
}

export default function PhoneInput({ id, name, required, onValueChange }: PhoneInputProps) {
  const [selected, setSelected] = useState<Country>(COUNTRIES[0])
  const [open, setOpen] = useState(false)
  const [number, setNumber] = useState('')
  const [search, setSearch] = useState('')
  const dropRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const filtered = search
    ? COUNTRIES.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.dial.includes(search)
      )
    : COUNTRIES

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Focus search when dropdown opens
  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50)
  }, [open])

  const fullPhone = `${selected.dial} ${number}`.trim()

  useEffect(() => {
    onValueChange?.(fullPhone)
  }, [fullPhone])

  return (
    <>
      {/* Hidden input carries the full value for form.elements.namedItem() */}
      <input type="hidden" name={name} value={fullPhone} />

      <div style={{ display: 'flex', position: 'relative' }} ref={dropRef}>
        {/* Country selector button */}
        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-label={`Country code: ${selected.name} ${selected.dial}`}
          aria-expanded={open}
          style={{
            display: 'flex', alignItems: 'center', gap: '5px',
            padding: '11px 10px 11px 12px',
            background: 'var(--bg, #F8F6F2)',
            border: '1.5px solid var(--border, #E4DED5)',
            borderRight: 'none',
            borderRadius: '2px 0 0 2px',
            cursor: 'pointer', flexShrink: 0,
            fontSize: '0.875rem', fontFamily: 'inherit',
            color: 'var(--dark, #1C2B3A)',
            transition: 'border-color 0.2s',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>{selected.flag}</span>
          <span style={{ fontWeight: 600, letterSpacing: '0.01em' }}>{selected.dial}</span>
          <svg
            width="10" height="6" viewBox="0 0 10 6" fill="none"
            style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', marginLeft: '2px', opacity: 0.5 }}
          >
            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Phone number input */}
        <input
          type="tel"
          id={id}
          placeholder="Phone number"
          required={required}
          value={number}
          onChange={e => setNumber(e.target.value)}
          style={{
            flex: 1, minWidth: 0,
            padding: '11px 14px',
            border: '1.5px solid var(--border, #E4DED5)',
            borderRadius: '0 2px 2px 0',
            fontSize: '0.9375rem',
            color: 'var(--dark, #1C2B3A)',
            background: 'var(--bg, #F8F6F2)',
            outline: 'none',
            fontFamily: 'inherit',
            transition: 'border-color 0.2s',
          }}
          onFocus={e => {
            e.currentTarget.style.borderColor = 'var(--dark, #1C2B3A)'
            const btn = e.currentTarget.previousElementSibling as HTMLElement
            if (btn) btn.style.borderColor = 'var(--dark, #1C2B3A)'
          }}
          onBlur={e => {
            e.currentTarget.style.borderColor = 'var(--border, #E4DED5)'
            const btn = e.currentTarget.previousElementSibling as HTMLElement
            if (btn) btn.style.borderColor = 'var(--border, #E4DED5)'
          }}
        />

        {/* Dropdown */}
        {open && (
          <div style={{
            position: 'absolute', top: 'calc(100% + 4px)', left: 0,
            width: '260px', zIndex: 9999,
            background: '#fff',
            border: '1.5px solid var(--border, #E4DED5)',
            borderRadius: '4px',
            boxShadow: '0 8px 32px rgba(28,43,58,0.14)',
            overflow: 'hidden',
          }}>
            {/* Search */}
            <div style={{ padding: '10px 12px', borderBottom: '1px solid var(--border, #E4DED5)' }}>
              <input
                ref={searchRef}
                type="text"
                placeholder="Search country..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%', padding: '7px 10px',
                  border: '1px solid var(--border, #E4DED5)',
                  borderRadius: '2px', fontSize: '0.8125rem',
                  outline: 'none', fontFamily: 'inherit',
                  color: 'var(--dark, #1C2B3A)',
                  background: 'var(--bg, #F8F6F2)',
                }}
              />
            </div>

            {/* List */}
            <div style={{ maxHeight: '220px', overflowY: 'auto' }}>
              {filtered.map(c => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => { setSelected(c); setOpen(false); setSearch('') }}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '10px 14px', border: 'none', cursor: 'pointer',
                    background: c.code === selected.code ? 'rgba(184,149,106,0.1)' : 'transparent',
                    fontSize: '0.875rem', fontFamily: 'inherit',
                    color: 'var(--dark, #1C2B3A)', textAlign: 'left',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => { if (c.code !== selected.code) (e.currentTarget as HTMLElement).style.background = 'var(--bg, #F8F6F2)' }}
                  onMouseLeave={e => { if (c.code !== selected.code) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                >
                  <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>{c.flag}</span>
                  <span style={{ flex: 1 }}>{c.name}</span>
                  <span style={{ color: 'var(--muted, #6B7A8A)', fontWeight: 600, fontSize: '0.8125rem' }}>{c.dial}</span>
                </button>
              ))}
              {filtered.length === 0 && (
                <p style={{ padding: '16px 14px', color: 'var(--muted, #6B7A8A)', fontSize: '0.875rem' }}>No results</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
