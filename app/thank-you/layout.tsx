import type { Metadata } from 'next'

// page.tsx is a Client Component ('use client'), so metadata can't be
// exported from it directly — this sibling (Server Component) layout
// carries it instead. Keeps the page noindexed without touching its
// interactivity/animations.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
}

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children
}
