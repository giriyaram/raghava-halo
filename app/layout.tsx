import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Script from 'next/script'
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
    default: 'Premium 3 BHK Apartments in Kondapur, Hyderabad | New High-Rise Launch',
    template: '%s | Premium Residences, Kondapur',
  },
  description:
    'Upcoming premium 52-floor high-rise in Kondapur, Hyderabad. Exclusively 3 BHK apartments from 1,800–2,500 sq ft starting ₹1.6 Cr. 1,50,000 sft clubhouse + stilt-level amenities. Vastu-aligned. Book a site visit today.',
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
    title: 'Premium 3 BHK Apartments in Kondapur, Hyderabad | New High-Rise Launch',
    description:
      'Upcoming 52-floor premium high-rise in Kondapur. 3 BHK residences from 1,800–2,500 sq ft, starting ₹1.6 Cr. 1,50,000 sft clubhouse + stilt-level amenities.',
    type: 'website',
    url: 'https://raghavakondapur.com',
    siteName: 'Premium Residences Kondapur',
    images: [
      {
        url: 'https://raghavakondapur.com/images/OG.webp',
        width: 1200,
        height: 630,
        alt: 'Upcoming Premium 3 BHK High-Rise in Kondapur, Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium 3 BHK High-Rise in Kondapur, Hyderabad',
    description: 'Upcoming 52-floor high-rise. 3 BHK from ₹1.6 Cr. Kondapur, Hyderabad.',
    images: ['https://raghavakondapur.com/images/OG.webp'],
  },
  alternates: {
    canonical: 'https://raghavakondapur.com',
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
      '@id': 'https://raghavakondapur.com/#organization',
      name: 'Raghava Group',
      url: 'https://raghavakondapur.com',
      logo: 'https://raghavakondapur.com/images/raghava-logo.jpg',
      description: 'Raghava Group is a Hyderabad-based real estate developer known for premium residential projects.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9849019238',
        contactType: 'sales',
        availableLanguage: ['English', 'Telugu', 'Hindi'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://raghavakondapur.com/#website',
      url: 'https://raghavakondapur.com',
      name: 'Halo by Raghava',
      publisher: { '@id': 'https://raghavakondapur.com/#organization' },
    },
    {
      '@type': ['ApartmentComplex', 'RealEstateListing'],
      '@id': 'https://raghavakondapur.com/#project',
      name: 'Halo by Raghava',
      alternateName: ['Halo Kondapur', 'Raghava Halo', 'Raghava Kondapur'],
      description: 'Premium 52-floor high-rise residential project in Kondapur, Hyderabad. Exclusively 3 BHK apartments from 1,800 to 2,500 sq ft starting at ₹1.6 Crore. 90,000 sft clubhouse, vastu-aligned floor plans, and stilt-level amenities.',
      url: 'https://raghavakondapur.com',
      numberOfRooms: '3',
      floorSize: { '@type': 'QuantitativeValue', minValue: 1800, maxValue: 2500, unitText: 'SQF' },
      numberOfBathroomsTotal: 3,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kondapur',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: '500084',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '17.4654',
        longitude: '78.3625',
      },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: '90,000 sft Clubhouse', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Stilt-Level Amenities', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Vastu-Aligned Floor Plans', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Master Bedroom Private Balcony', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Lap Pool', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Gymnasium', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Co-working Lounge', value: true },
      ],
      numberOfFloors: 52,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '16000000',
        priceValidUntil: '2025-12-31',
        availability: 'https://schema.org/PreSale',
        seller: { '@id': 'https://raghavakondapur.com/#organization' },
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://raghavakondapur.com/#localbusiness',
      name: 'Halo by Raghava — Sales Office',
      url: 'https://raghavakondapur.com',
      telephone: '+91-9849019238',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kondapur',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: '500084',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '17.4654',
        longitude: '78.3625',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        opens: '10:00',
        closes: '19:00',
      },
      priceRange: '₹₹₹',
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
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wxj3re2w9u");`,
          }}
        />
      </body>
    </html>
  )
}
