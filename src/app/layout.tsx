import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { fetchSanity } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'
import type { SiteSettings } from '@/lib/types'

// Fonts loaded via @fontsource-variable in globals.css
// --font-display: "Fraunces Variable"
// --font-body: "DM Sans Variable"

export const metadata: Metadata = {
  title: {
    default: 'Nilgiri House — A Quiet Retreat in the Blue Mountains',
    template: '%s | Nilgiri House',
  },
  description: 'Experience slow travel at Nilgiri House, a boutique 6-room retreat in the Nilgiri hills. Warm hospitality, misty views, and unforgettable stays.',
  keywords: ['boutique hotel', 'Nilgiris', 'Coonoor', 'slow travel', 'hill station', 'luxury retreat'],
  authors: [{ name: 'Nilgiri House' }],
  creator: 'Nilgiri House',
  publisher: 'Nilgiri House',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://nilgirihouse.com',
    siteName: 'Nilgiri House',
    title: 'Nilgiri House — A Quiet Retreat in the Blue Mountains',
    description: 'Experience slow travel at Nilgiri House, a boutique 6-room retreat in the Nilgiri hills.',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Nilgiri House - Misty hills and stone architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nilgiri House — A Quiet Retreat in the Blue Mountains',
    description: 'Experience slow travel at Nilgiri House, a boutique 6-room retreat in the Nilgiri hills.',
    images: ['/og-default.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: '#2D4739',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await fetchSanity<SiteSettings>(siteSettingsQuery)

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navigation hotelName={settings?.hotelName || 'Nilgiri House'} logo={settings?.logo} />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer
          hotelName={settings?.hotelName || 'Nilgiri House'}
          tagline={settings?.tagline}
          address={settings?.address}
          phone={settings?.phone}
          email={settings?.email}
          instagramUrl={settings?.instagramUrl}
          facebookUrl={settings?.facebookUrl}
          twitterUrl={settings?.twitterUrl}
        />
      </body>
    </html>
  )
}