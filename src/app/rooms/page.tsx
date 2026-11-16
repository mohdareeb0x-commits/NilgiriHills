import { Metadata } from 'next'
import { fetchSanity } from '@/lib/sanity'
import { roomsQuery, siteSettingsQuery } from '@/lib/queries'
import { SanityImage } from '@/components/SanityImage'
import Link from 'next/link'
import type { Room, SiteSettings } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Our Rooms',
  description: 'Six individually designed rooms at Nilgiri House, each with its own character and view of the Nilgiri hills.',
  openGraph: {
    title: 'Our Rooms — Nilgiri House',
    description: 'Six individually designed rooms at Nilgiri House, each with its own character and view of the Nilgiri hills.',
    type: 'website',
  },
}

export default async function RoomsPage() {
  const [rooms, settings] = await Promise.all([
    fetchSanity<Room[]>(roomsQuery),
    fetchSanity<SiteSettings>(siteSettingsQuery),
  ])

  const hotelName = settings?.hotelName || 'Nilgiri House'
  const tagline = settings?.tagline || 'A quiet retreat in the Blue Mountains'

  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end" aria-labelledby="rooms-hero-heading">
        <SanityImage
          source={{
            asset: { _ref: 'image-hero-1920x1080-jpg' },
            alt: 'Misty Nilgiri hills at dawn'
          }}
          fill
          priority
          objectFit="cover"
          className="absolute inset-0 -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" aria-hidden="true" />
        <div className="relative z-10 w-full section-wide pb-16 md:pb-24">
          <div className="max-w-3xl animate-fade-in">
            <h1 id="rooms-hero-heading" className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-cream leading-tight mb-6">
              Our Rooms
            </h1>
            <p className="font-body text-lg md:text-xl text-cream/90 max-w-xl">
              Six individually designed rooms, each with its own character — no two alike. Choose the one that speaks to you.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="section section-wide" aria-labelledby="rooms-list-heading">
        <div className="section-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms?.map((room: Room, index: number) => (
              <article
                key={room._id}
                className="card group relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 80}ms` }}
              >
                <Link
                  href={`/rooms/${room.slug?.current}`}
                  className="block"
                  aria-label={`View ${room.name} - ₹${room.pricePerNight.toLocaleString()}/night, sleeps ${room.maxOccupancy}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <SanityImage
                      source={room.featuredImage}
                      alt={room.featuredImage?.alt || room.name}
                      fill
                      priority={index < 3}
                      objectFit="cover"
                      className="group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                    {room.isFeatured && (
                      <span className="absolute top-4 left-4 bg-terracotta text-cream px-3 py-1 text-xs font-body uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-6 md:p-8">
                    <h2 className="font-display text-2xl md:text-3xl font-semibold text-forest mb-3 group-hover:text-terracotta transition-colors">
                      {room.name}
                    </h2>
                    <p className="font-body text-base text-charcoal/70 mb-5 line-clamp-2">{room.shortDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-5" role="list" aria-label="Amenities">
                      {room.amenities?.slice(0, 4).map((amenity: string, i: number) => (
                        <span key={i} className="caption bg-cream/80 px-3 py-1 border border-sage/50">{amenity}</span>
                      ))}
                      {room.amenities && room.amenities.length > 4 && (
                        <span className="caption bg-cream/80 px-3 py-1 border border-sage/50">+{room.amenities.length - 4} more</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-sage/30">
                      <span className="price text-xl md:text-2xl">₹{room.pricePerNight.toLocaleString()}/night</span>
                      <span className="btn-ghost text-sm">View Details</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {(!rooms || rooms.length === 0) && (
            <div className="text-center py-16">
              <p className="text-charcoal/70">No rooms available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-narrow text-center relative bg-cream-soft" aria-labelledby="cta-heading">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <h2 id="cta-heading" className="font-display text-4xl md:text-5xl font-semibold text-forest mb-6">
            Ready to choose your room?
          </h2>
          <p className="font-body text-lg text-charcoal/70 mb-10">
            Send us an enquiry with your dates and preferences, and we'll help you find the perfect fit.
          </p>
          <Link href="/contact" className="btn-primary inline-flex">
            Enquire Now
          </Link>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: `${hotelName} - Rooms`,
            description: 'Six individually designed rooms at Nilgiri House',
            itemListElement: rooms?.map((room: Room, index: number) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'HotelRoom',
                name: room.name,
                description: room.shortDescription,
                url: `https://nilgirihouse.com/rooms/${room.slug?.current}`,
                image: room.featuredImage?.asset?._ref
                  ? `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${room.featuredImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg')}`
                  : undefined,
                offers: {
                  '@type': 'Offer',
                  price: room.pricePerNight,
                  priceCurrency: 'INR',
                  availability: 'https://schema.org/InStock',
                },
                amenities: room.amenities,
                occupancy: {
                  '@type': 'QuantitativeValue',
                  value: room.maxOccupancy,
                },
              },
            })) || [],
          }),
        }}
      />
    </>
  )
}