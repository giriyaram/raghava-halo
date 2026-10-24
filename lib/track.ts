// Fires on successful lead submission. Guarded end to end: a blocked/missing
// GTM dataLayer or an ad-blocked Clarity must never throw or break the
// submit flow.
export function trackLeadSubmit(ctaSource: string) {
  try {
    const w = window as unknown as { dataLayer?: unknown[] }
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({ event: 'generate_lead', cta_source: ctaSource })
  } catch {
    // no-op — GTM/dataLayer unavailable
  }

  try {
    const w = window as unknown as { clarity?: (...args: unknown[]) => void }
    if (typeof w.clarity === 'function') {
      w.clarity('event', 'lead_submitted')
      w.clarity('set', 'lead_source', ctaSource)
    }
  } catch {
    // no-op — Clarity unavailable (e.g. blocked by an ad/privacy blocker)
  }
}
