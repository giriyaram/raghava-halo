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

const SITE_URL = 'https://raghavakondapur.com'
const OG_IMAGE = `${SITE_URL}/renders/community-evening.webp`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Raghava Halo — 3 BHK High-Rise Homes in Kondapur, Hyderabad',
    template: '%s | Raghava Halo, Kondapur',
  },
  description:
    'Raghava Halo is a RERA-approved 3-tower, 52-floor high-rise in Kondapur, Hyderabad, near HCU. Thoughtfully planned 3 BHK homes of 1,800–2,500 sft from ₹1.6 Cr, with lower loading, larger balconies and a 90,000 sft wellness clubhouse. Book a site visit.',
  keywords: [
    'Raghava Halo',
    'Raghava Halo Kondapur',
    'Halo by Raghava',
    'Raghava Halo Hyderabad',
    'Raghava Kondapur',
    'Halo Kondapur',
    '3 BHK apartments Kondapur',
    'apartments near HCU',
    'high rise apartments Kondapur',
    'new launch apartments Hyderabad',
  ],
  authors: [{ name: 'Raghava Group' }],
  openGraph: {
    title: 'Raghava Halo — Thoughtfully Planned 3 BHK Living in Kondapur',
    description:
      'RERA-approved 3-tower, 52-floor high-rise near HCU, Kondapur. 3 BHK homes of 1,800–2,500 sft from ₹1.6 Cr with a 90,000 sft wellness clubhouse.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Raghava Halo',
    locale: 'en_IN',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Raghava Halo — three high-rise towers at dusk in Kondapur, Hyderabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raghava Halo — 3 BHK High-Rise in Kondapur, Hyderabad',
    description: 'RERA-approved. 3 BHK from ₹1.6 Cr. Near HCU, Kondapur. Now launching.',
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: SITE_URL,
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
      description: 'Raghava Group is a Hyderabad-based real estate developer known for thoughtfully planned residential high-rises.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9000139976',
        contactType: 'sales',
        availableLanguage: ['English', 'Telugu', 'Hindi'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://raghavakondapur.com/#website',
      url: 'https://raghavakondapur.com',
      name: 'Raghava Halo',
      alternateName: ['Halo by Raghava', 'Raghava Halo Kondapur'],
      publisher: { '@id': 'https://raghavakondapur.com/#organization' },
    },
    {
      '@type': ['ApartmentComplex', 'RealEstateListing'],
      '@id': 'https://raghavakondapur.com/#project',
      name: 'Raghava Halo',
      alternateName: ['Halo by Raghava', 'Raghava Halo Kondapur', 'Halo Kondapur', 'Raghava Kondapur'],
      description: 'Raghava Halo is a RERA-approved 3-tower, 52-floor high-rise in Kondapur, Hyderabad, near HCU. Thoughtfully planned 3 BHK homes from 1,800 to 2,500 sft starting at ₹1.6 Crore, with lower loading, larger balconies, and a 90,000 sft wellness clubhouse.',
      url: 'https://raghavakondapur.com',
      image: 'https://raghavakondapur.com/renders/community-evening.webp',
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
        { '@type': 'LocationFeatureSpecification', name: '90,000 sft Wellness Clubhouse', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Red Light Therapy', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Hyperbaric Oxygen Therapy (HBOT)', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Sauna', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Float Therapy', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Master Bedroom Private Balcony', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Lower Loading / Higher Carpet Area', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Rooftop Sky Gardens', value: true },
      ],
      numberOfFloors: 52,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '16000000',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://raghavakondapur.com/#organization' },
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://raghavakondapur.com/#localbusiness',
      name: 'Raghava Halo — Sales Gallery',
      url: 'https://raghavakondapur.com',
      telephone: '+91-9000139976',
      image: 'https://raghavakondapur.com/renders/clubhouse-entrance.webp',
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
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
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
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WFCGC9Z6" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <ModalProvider>{children}</ModalProvider>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WFCGC9Z6');`,
          }}
        />
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
