import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchSanity } from '@/lib/sanity'
import { roomBySlugQuery, siteSettingsQuery, roomSlugsQuery } from '@/lib/queries'
import { SanityImage, SanityImageFullBleed } from '@/components/SanityImage'
import { PortableTextRenderer } from '@/components/PortableText'
import Link from 'next/link'
import type { Room, SiteSettings } from '@/lib/types'

interface RoomPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  // Hardcoded for build - will be replaced by Sanity data in production
  const slugs = ['verandah-suite', 'garden-room', 'library-loft', 'tea-estate-view', 'hearth-room', 'sunrise-room']
  return slugs.map((slug: string) => ({ slug }))
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const room = await fetchSanity<Room>(roomBySlugQuery, { slug: resolvedParams.slug })

  if (!room) {
    return { title: 'Room Not Found' }
  }

  return {
    title: room.name,
    description: room.shortDescription,
    openGraph: {
      title: `${room.name} — Nilgiri House`,
      description: room.shortDescription,
      type: 'website',
      images: room.featuredImage?.asset?._ref ? [
        {
          url: `https://images.unsplash.com/${room.featuredImage.asset._ref}`,
          width: 1200,
          height: 800,
          alt: room.featuredImage.alt || room.name,
        },
      ] : [],
    },
  }
}

export default async function RoomDetailPage({ params }: RoomPageProps) {
  const resolvedParams = await params
  console.log('[RoomDetailPage] resolvedParams.slug:', resolvedParams.slug)
  const [room, settings] = await Promise.all([
    fetchSanity<Room>(roomBySlugQuery, { slug: resolvedParams.slug }),
    fetchSanity<SiteSettings>(siteSettingsQuery),
  ])

  console.log('[RoomDetailPage] room:', room ? room.name : 'undefined')

  if (!room) {
    notFound()
  }

  const hotelName = settings?.hotelName || 'Nilgiri House'
  const tagline = settings?.tagline || 'A quiet retreat in the Blue Mountains'

  return (
    <>
      {/* Hero - Full Bleed Image */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end" aria-labelledby="room-name">
        <SanityImageFullBleed
          source={room.featuredImage}
          alt={room.featuredImage?.alt || room.name}
          priority
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" aria-hidden="true" />
        <div className="relative z-10 w-full section-wide pb-16 md:pb-24">
          <div className="max-w-3xl animate-fade-in">
            <span className="caption mb-4 inline-block">Room</span>
            <h1 id="room-name" className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-cream leading-tight mb-4">
              {room.name}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-cream/90">
              <span className="price text-2xl md:text-3xl">₹{room.pricePerNight.toLocaleString()}/night</span>
              <span className="font-body text-lg">Sleeps {room.maxOccupancy}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section section-wide">
        <div className="section-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Gallery */}
            <div className="space-y-6 animate-fade-in stagger-1">
              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <SanityImage
                  source={room.featuredImage}
                  alt={room.featuredImage?.alt || room.name}
                  fill
                  priority
                  objectFit="cover"
                />
              </div>

              {/* Gallery thumbnails */}
              {room.gallery && room.gallery.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4" role="list" aria-label="Room gallery">
                  {room.gallery.map((image: any, index: number) => (
                    <figure key={index} className="relative aspect-square overflow-hidden group">
                      <SanityImage
                        source={image}
                        alt={image.alt || `${room.name} - ${image.caption || `View ${index + 1}`}`}
                        fill
                        objectFit="cover"
                        className="group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      />
                      {image.caption && (
                        <figcaption className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-cream text-sm caption">
                          {image.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="animate-fade-in stagger-2">
              {/* Description */}
              <div className="mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest mb-6">
                  About This Room
                </h2>
                <PortableTextRenderer blocks={room.longDescription || []} />
              </div>

              {/* Amenities */}
              <div className="mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest mb-6">
                  Amenities
                </h2>
                <div className="flex flex-wrap gap-3" role="list" aria-label="Room amenities">
                  {room.amenities?.map((amenity: string, index: number) => (
                    <span
                      key={index}
                      className="bg-cream-soft border border-sage/50 px-5 py-3 font-body text-sm text-charcoal"
                      role="listitem"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Booking CTA */}
              <div className="bg-cream-soft p-8 md:p-10 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest mb-4">
                    Enquire About Availability
                  </h2>
                  <p className="font-body text-lg text-charcoal/70 mb-8 max-w-md">
                    Tell us your dates and we'll get back to you with availability and booking details.
                  </p>
                  <Link
                    href={`/contact?room=${room.slug.current}`}
                    className="btn-primary inline-flex"
                  >
                    Enquire Now
                  </Link>
                </div>
                {/* Decorative line */}
                <div className="absolute top-0 right-0 w-24 h-24 border-r-4 border-b-4 border-terracotta/30" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HotelRoom',
            name: room.name,
            description: room.shortDescription,
            url: `https://nilgirihouse.com/rooms/${room.slug.current}`,
            image: room.featuredImage?.asset?._ref
              ? `https://images.unsplash.com/${room.featuredImage.asset._ref}`
              : undefined,
            offers: {
              '@type': 'Offer',
              price: room.pricePerNight,
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
              priceValidUntil: new Date('2026-12-31').toISOString().split('T')[0],
            },
            amenities: room.amenities,
            occupancy: {
              '@type': 'QuantitativeValue',
              value: room.maxOccupancy,
            },
            floorSize: {
              '@type': 'QuantitativeValue',
              value: 35,
              unitCode: 'MTK',
            },
            bed: {
              '@type': 'BedDetails',
              typeOfBed: room.amenities?.find(a => a.includes('Bed')) || 'Queen Bed',
              numberOfBeds: 1,
            },
          }),
        }}
      />
    </>
  )
}