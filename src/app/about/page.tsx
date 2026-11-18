import { Metadata } from 'next'
import Link from 'next/link'
import { fetchSanity } from '@/lib/sanity'
import { homePageQuery, siteSettingsQuery } from '@/lib/queries'
import { SanityImage, SanityImageFullBleed } from '@/components/SanityImage'
import { PortableTextRenderer } from '@/components/PortableText'
import type { HomePage, SiteSettings } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Discover the history of Nilgiri House — a family retreat turned boutique hotel in the Nilgiri hills, where slow travel meets warm hospitality.',
  openGraph: {
    title: 'Our Story — Nilgiri House',
    description: 'Discover the history of Nilgiri House — a family retreat turned boutique hotel in the Nilgiri hills.',
    type: 'website',
  },
}

export default async function AboutPage() {
  const [homePage, settings] = await Promise.all([
    fetchSanity<HomePage>(homePageQuery),
    fetchSanity<SiteSettings>(siteSettingsQuery),
  ])

  const hotelName = settings?.hotelName || 'Nilgiri House'
  const tagline = settings?.tagline || 'A quiet retreat in the Blue Mountains'

  // Use storyContent from homePage or fallback content
  const storyContent = homePage?.storyContent || [
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'Perched on a gentle slope overlooking the mist-clad valleys of the Nilgiris, Nilgiri House began as a family\'s summer refuge — a place where three generations gathered to escape the heat of the plains and wake to the sound of hill birds and the scent of eucalyptus.' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'The house itself is built from local laterite stone and reclaimed timber, its thick walls keeping interiors cool through summer and warm through the monsoon. Each of the six rooms was designed individually — no two alike — with handcrafted furniture, textiles from Coimbatore weavers, and windows that frame the landscape like living paintings.' }],
    },
    {
      _type: 'block',
      style: 'blockquote',
      children: [{ _type: 'span', text: 'We don\'t just offer a room. We offer a rhythm — slow mornings with filter coffee on the verandah, afternoons reading in the library, evenings by the fire as mist rolls across the valley.' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'Today, the house welcomes travellers who seek something quieter than a hotel — a place to disconnect, to walk the tea estate paths, to sit with a book as clouds drift past the window. We serve food from our kitchen garden and the local market, and we\'re always happy to share our favourite walking trails and hidden viewpoints.' }],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [{ _type: 'span', text: 'The Landscape' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'The Nilgiris — literally "Blue Mountains" — are part of the Western Ghats, a UNESCO World Heritage site and one of the world\'s eight biodiversity hotspots. The hills here rise to over 2,600 metres, cloaked in shola forests and grasslands, dotted with tea estates that have shaped the region\'s character for two centuries.' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'Coonoor, where we\'re located, sits at 1,850 metres. It\'s quieter than Ooty, more authentic — a working hill town where life moves at its own pace. The toy train clatters past our valley daily, a reminder of the British-era railway that first opened these hills to the world.' }],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [{ _type: 'span', text: 'Our Philosophy' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'Slow travel isn\'t a marketing phrase for us — it\'s how we live. No televisions in rooms (though we have a projector for film evenings in the library). No buffet breakfast — instead, fresh idli and filter coffee brought to your verandah at your chosen hour. No concierge desk — just ask us, and we\'ll share our favourite walk, the best spot for sunset, or which estate makes the finest tea.' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'We employ locally, source locally, and tread lightly. Our kitchen garden supplies herbs and vegetables. Our textiles come from Coimbatore weavers. Our furniture is made by carpenters from the next valley. When you stay with us, you\'re part of this ecosystem — not separate from it.' }],
    },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end" aria-labelledby="about-hero-heading" style={{ minHeight: '60vh', display: 'flex', alignItems: 'flex-end' }}>
        <SanityImageFullBleed
          source={{
            asset: { _ref: 'image-hero-about-1920x1080-jpg' },
            alt: 'Tea estate in Nilgiri hills with misty mountains'
          }}
          priority
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" aria-hidden="true" />
        <div className="relative z-10 w-full section-wide pb-16 md:pb-24">
          <div className="max-w-3xl animate-fade-in">
            <h1 id="about-hero-heading" className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-cream leading-tight mb-6">
              Our Story
            </h1>
            <p className="font-body text-lg md:text-xl text-cream/90 max-w-xl">
              A family refuge becomes a quiet retreat — where the rhythm of the hills sets the pace.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="section section-wide">
        <div className="section-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="animate-fade-in stagger-1">
              <PortableTextRenderer blocks={storyContent} className="drop-cap" />
            </div>

            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden animate-fade-in stagger-2 image-reveal" data-reveal>
              <SanityImageFullBleed
                source={{
                  asset: { _ref: 'image-room-1-1200x1500-jpg' },
                  alt: 'Stone cottage in the Nilgiri hills'
                }}
                objectFit="cover"
              />
            </div>
          </div>

          {/* Additional sections */}
          <div className="mt-24 grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Values */}
            <div className="animate-fade-in stagger-3">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest mb-8">What We Believe</h2>
              <dl className="space-y-8">
                <div>
                  <dt className="font-display text-xl font-semibold text-forest mb-2">Slow Over Slick</dt>
                  <dd className="font-body text-charcoal/70 leading-relaxed">
                    We don't optimise for efficiency. We optimise for experience. Long lunches. Unhurried conversations. Mornings without alarms.
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-xl font-semibold text-forest mb-2">Local Over Imported</dt>
                  <dd className="font-body text-charcoal/70 leading-relaxed">
                    From the stone in our walls to the tea in your cup, we choose what's made here. It tastes better, and it matters more.
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-xl font-semibold text-forest mb-2">Personal Over Standardised</dt>
                  <dd className="font-body text-charcoal/70 leading-relaxed">
                    Six rooms. Six distinct characters. We know your name, how you take your tea, and which trail suits your pace.
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-xl font-semibold text-forest mb-2">Stewardship Over Ownership</dt>
                  <dd className="font-body text-charcoal/70 leading-relaxed">
                    We're caretakers of this place — the land, the community, the stories. Our role is to pass it on better than we found it.
                  </dd>
                </div>
              </dl>
            </div>

            {/* Image gallery */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in stagger-4">
              <div className="relative aspect-[3/4] overflow-hidden group">
                <SanityImage
                  source={{
                    asset: { _ref: 'image-room-4-1200x1500-jpg' },
                    alt: 'Tea estate view from Nilgiri House'
                  }}
                  fill
                  objectFit="cover"
                  className="group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden group">
                <SanityImage
                  source={{
                    asset: { _ref: 'image-room-2-1200x1500-jpg' },
                    alt: 'Garden at Nilgiri House'
                  }}
                  fill
                  objectFit="cover"
                  className="group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden group lg:col-span-2">
                <SanityImage
                  source={{
                    asset: { _ref: 'image-room-5-1200x1500-jpg' },
                    alt: 'Fireplace in the Hearth Room'
                  }}
                  fill
                  objectFit="cover"
                  className="group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Hosts Section */}
      <section className="section section-wide bg-cream-soft" aria-labelledby="hosts-heading">
        <div className="section-narrow">
          <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in">
            <h2 id="hosts-heading" className="font-display text-4xl md:text-5xl font-semibold text-forest mb-4">
              Your Hosts
            </h2>
            <p className="font-body text-lg text-charcoal/70">
              The family who tends the fire, brews the coffee, and knows every path on the hill.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Meera Krishnan', role: 'Keeper of the House', bio: 'Third-generation custodian. Knows every guest by name before they arrive. The filter coffee is her recipe.' },
              { name: 'Rajesh Krishnan', role: 'Kitchen & Garden', bio: 'Chef and gardener. Wakes at 5am for the kitchen garden. His dosa batter ferments overnight on the verandah.' },
              { name: 'Arjun Krishnan', role: 'Paths & Stories', bio: 'Naturalist and guide. Identifies bird calls by ear. Has a story for every stone on the property.' },
            ].map((host, index) => (
              <div key={host.name} className="text-center animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <div className="relative aspect-square w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-terracotta/30">
                  <SanityImage
                    source={{
                      asset: { _ref: `image-testimonial-${index + 1}-200x200-jpg` },
                      alt: host.name
                    }}
                    fill
                    objectFit="cover"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-forest mb-1">{host.name}</h3>
                <p className="caption text-terracotta mb-3">{host.role}</p>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">{host.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-narrow text-center relative" aria-labelledby="about-cta-heading">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <h2 id="about-cta-heading" className="font-display text-4xl md:text-5xl font-semibold text-forest mb-6">
            Experience It Yourself
          </h2>
          <p className="font-body text-lg text-charcoal/70 mb-10">
            Words and photos can only say so much. The mist on your verandah, the taste of garden-fresh herbs, the quiet of a starlit night — those you have to feel.
          </p>
          <Link href="/rooms" className="btn-primary inline-flex mr-4">
            View Rooms
          </Link>
          <Link href="/contact" className="btn-secondary inline-flex">
            Send an Enquiry
          </Link>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-terracotta to-transparent" aria-hidden="true" />
      </section>
    </>
  )
}