import { Metadata } from 'next'
import { fetchSanity } from '@/lib/sanity'
import { homePageQuery, siteSettingsQuery } from '@/lib/queries'
import { SanityImage, SanityImageFullBleed } from '@/components/SanityImage'
import { PortableTextRenderer } from '@/components/PortableText'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import type { HomePage, SiteSettings } from '@/lib/types'

export const metadata: Metadata = {
  title: 'A Quiet Retreat in the Blue Mountains',
  description: 'Experience slow travel at Nilgiri House, a boutique 6-room retreat in the Nilgiri hills. Warm hospitality, misty views, and unforgettable stays.',
  openGraph: {
    title: 'Nilgiri House — A Quiet Retreat in the Blue Mountains',
    description: 'Experience slow travel at Nilgiri House, a boutique 6-room retreat in the Nilgiri hills.',
    type: 'website',
  },
}

export default async function HomePage() {
  const [homePage, settings] = await Promise.all([
    fetchSanity<HomePage>(homePageQuery),
    fetchSanity<SiteSettings>(siteSettingsQuery),
  ])

  if (!homePage) {
    return <div className="section section-narrow text-center">Loading...</div>
  }

  const hotelName = settings?.hotelName || 'Nilgiri House'
  const tagline = settings?.tagline || 'A quiet retreat in the Blue Mountains'

  const textAlignClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }

  return (
    <>
      {/* Hero Section - Full Bleed */}
      <section className="relative min-h-[90vh] md:min-h-[100vh] flex items-end" aria-labelledby="hero-heading">
        <SanityImageFullBleed
          source={homePage.heroImage}
          alt={homePage.heroImage?.alt || `${hotelName} - ${tagline}`}
          priority
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" aria-hidden="true" />
        <div className="relative z-10 w-full section-wide pb-20 md:pb-32">
          <div className={`max-w-4xl ${textAlignClasses[homePage.heroTextAlign]} mx-auto`}>
            <h1
              id="hero-heading"
              className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-cream leading-tight animate-fade-in stagger-1"
            >
              {homePage.heroHeadline || hotelName}
            </h1>
            {homePage.heroSubheadline && (
              <p className="font-body text-lg md:text-xl text-cream/90 mt-6 animate-fade-in stagger-2 max-w-xl">
                {homePage.heroSubheadline}
              </p>
            )}
            <div className="mt-10 animate-fade-in stagger-3">
              <Link
                href="/rooms"
                className="btn-primary inline-flex"
              >
                Explore Rooms
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cream/60">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section section-narrow" aria-labelledby="story-heading">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 id="story-heading" className="font-display text-4xl md:text-5xl font-semibold text-forest mb-4">
            {homePage.storyTitle || 'Our Story'}
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="animate-fade-in stagger-1">
            <PortableTextRenderer blocks={homePage.storyContent || []} />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden animate-fade-in stagger-2 image-reveal" data-reveal>
            {homePage.storyContent?.some((block: any) => block._type === 'image') ? (
              homePage.storyContent
                .filter((block: any) => block._type === 'image')
                .slice(0, 1)
                .map((block: any, i: number) => (
                  <SanityImage
                    key={i}
                    source={block}
                    alt={block.alt || 'Story image'}
                    fill
                    priority={i === 0}
                    objectFit="cover"
                  />
                ))
            ) : (
              <SanityImageFullBleed
                source={homePage.heroImage}
                alt={homePage.heroImage?.alt || 'Nilgiri hills'}
                objectFit="cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      {homePage.featuredRooms && homePage.featuredRooms.length > 0 && (
        <section className="section section-wide bg-cream-soft" aria-labelledby="rooms-heading">
          <div className="section-narrow">
            <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in">
              <h2 id="rooms-heading" className="font-display text-4xl md:text-5xl font-semibold text-forest mb-4">
                {homePage.featuredTitle || 'Our Rooms'}
              </h2>
              {homePage.featuredSubtitle && (
                <p className="font-body text-lg text-charcoal/70">{homePage.featuredSubtitle}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {homePage.featuredRooms.map((room: any, index: number) => (
                <article
                  key={room._id}
                  className="card group relative overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <Link href={`/rooms/${room.slug?.current}`} className="block" aria-label={`View ${room.name} - ₹${room.pricePerNight}/night`}>
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <SanityImage
                        source={room.featuredImage}
                        alt={room.featuredImage?.alt || room.name}
                        fill
                        priority={index < 2}
                        objectFit="cover"
                        className="group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="font-display text-2xl md:text-3xl font-semibold text-forest mb-2 group-hover:text-terracotta transition-colors">
                        {room.name}
                      </h3>
                      <p className="font-body text-base text-charcoal/70 mb-4 line-clamp-2">{room.shortDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Amenities">
                        {room.amenities?.slice(0, 4).map((amenity: string, i: number) => (
                          <span key={i} className="caption bg-cream/80 px-3 py-1 border border-sage/50">{amenity}</span>
                        ))}
                        {room.amenities && room.amenities.length > 4 && (
                          <span className="caption bg-cream/80 px-3 py-1 border border-sage/50">+{room.amenities.length - 4} more</span>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="price text-xl md:text-2xl">₹{room.pricePerNight.toLocaleString()}/night</span>
                        <span className="btn-ghost text-sm">View Room</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            <div className="text-center mt-12 animate-fade-in stagger-4">
              <Link href="/rooms" className="btn-secondary inline-flex">
                View All Rooms
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {homePage.featuredTestimonial && (
        <section className="section section-narrow" aria-labelledby="testimonial-heading">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="testimonial-heading" className="font-display text-4xl md:text-5xl font-semibold text-forest mb-12 animate-fade-in">
              {homePage.testimonialTitle || 'Guest Stories'}
            </h2>

            <div className="relative animate-fade-in stagger-1">
              <blockquote className="relative">
                <span className="font-display text-6xl text-terracotta/20 absolute -top-8 -left-4" aria-hidden="true">"</span>
                <PortableTextRenderer
                  blocks={homePage.featuredTestimonial.quote || []}
                  className="relative z-10"
                />
                <footer className="mt-8 flex items-center justify-center gap-4">
                  {homePage.featuredTestimonial.photo && (
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <SanityImage
                        source={homePage.featuredTestimonial.photo}
                        alt={homePage.featuredTestimonial.guestName}
                        fill
                        objectFit="cover"
                      />
                    </div>
                  )}
                  <div className="text-left">
                    <cite className="font-display text-lg font-medium text-forest not-italic block">
                      {homePage.featuredTestimonial.guestName}
                    </cite>
                    {homePage.featuredTestimonial.location && (
                      <p className="caption mt-1">{homePage.featuredTestimonial.location}</p>
                    )}
                    {homePage.featuredTestimonial.stayDate && (
                      <p className="caption mt-0.5">Stayed {new Date(homePage.featuredTestimonial.stayDate).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</p>
                    )}
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="section section-narrow text-center relative" aria-labelledby="cta-heading">
        <div className="relative z-10 max-w-2xl mx-auto animate-fade-in">
          <h2 id="cta-heading" className="font-display text-4xl md:text-5xl font-semibold text-forest mb-6">
            {homePage.ctaHeadline || 'Ready for the hills?'}
          </h2>
          <p className="font-body text-lg text-charcoal/70 mb-10">
            {homePage.ctaSubtext || "Send us an enquiry and we'll help you plan your stay."}
          </p>
          <Link href={homePage.ctaLink || '/contact'} className="btn-primary inline-flex">
            {homePage.ctaButtonText || 'Enquire Now'}
          </Link>
        </div>
        {/* Decorative element */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-terracotta to-transparent" aria-hidden="true" />
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LodgingBusiness',
            name: hotelName,
            description: tagline,
            url: 'https://nilgirihouse.com',
            telephone: settings?.phone,
            email: settings?.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Upper Coonoor',
              addressLocality: 'The Nilgiris',
              addressRegion: 'Tamil Nadu',
              postalCode: '643101',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 11.3543,
              longitude: 76.7934,
            },
            priceRange: '₹₹₹',
            image: homePage.heroImage ? urlFor(homePage.heroImage).width(1200).height(800).auto('format').url() : undefined,
          }),
        }}
      />
    </>
  )
}