import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { ModalProvider } from '@/lib/modal-context'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Halo by Raghava | Premium 3 BHK Apartments in Kondapur, Hyderabad',
    template: '%s | Halo by Raghava',
  },
  description:
    'Discover Halo by Raghava — 52-floor premium high-rise in Kondapur, Hyderabad. 3 BHK apartments from 1,800–2,500 sq ft starting ₹1.6 Cr. 90,000 sft clubhouse + stilt-level amenities. Vastu-aligned. Book a site visit today.',
  keywords: [
    '3 BHK flats in Kondapur',
    'high rise apartments Kondapur',
    'apartments near Financial District',
    'new launch apartments Hyderabad',
    'premium apartments Kondapur',
    'vastu apartments Hyderabad',
    '3 BHK Hyderabad 2025',
    'high rise living Hyderabad',
    'apartments with balconies Hyderabad',
  ],
  openGraph: {
    title: 'Halo by Raghava | Premium 3 BHK Apartments in Kondapur, Hyderabad',
    description:
      '52-floor premium high-rise in Kondapur. 3 BHK residences from 1,800–2,500 sq ft, starting ₹1.6 Cr. 90,000 sft clubhouse + stilt-level amenities.',
    type: 'website',
    url: 'https://halobyraghava.com',
    siteName: 'Halo by Raghava',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Halo by Raghava | Premium 3 BHK in Kondapur',
    description: '52-floor high-rise. 3 BHK from ₹1.6 Cr. Kondapur, Hyderabad.',
  },
  alternates: {
    canonical: 'https://halobyraghava.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Raghava Group',
      url: 'https://halobyraghava.com',
      description:
        'Raghava Group is a Hyderabad-based real estate developer known for premium residential projects.',
    },
    {
      '@type': 'RealEstateListing',
      name: 'Halo by Raghava',
      description:
        'Premium 52-floor high-rise residential project in Kondapur, Hyderabad. All 3 BHK residences from 1,800 to 2,500 sq ft, starting at ₹1.6 Crore.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kondapur',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '16000000',
        availability: 'https://schema.org/PreSale',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  )
}
