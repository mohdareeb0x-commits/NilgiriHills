// Type definitions for Sanity data

export interface SanityImageAsset {
  _ref: string
}

export interface SanityImage {
  asset: SanityImageAsset
  alt?: string
  caption?: string
  hotspot?: {
    x: number
    y: number
    width: number
    height: number
  }
}

export interface SanitySlug {
  current: string
}

export interface Room {
  _id: string
  name: string
  slug: SanitySlug
  shortDescription: string
  longDescription: PortableTextBlock[]
  pricePerNight: number
  maxOccupancy: number
  amenities: string[]
  featuredImage: SanityImage
  gallery: SanityImage[]
  isFeatured: boolean
  order: number
}

export interface Testimonial {
  _id: string
  guestName: string
  location: string
  quote: PortableTextBlock[]
  photo?: SanityImage
  stayDate: string
  roomStayed?: { name: string }
}

export interface SiteSettings {
  hotelName: string
  tagline?: string
  address?: string
  phone?: string
  email?: string
  bookingEmail: string
  instagramUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  metaTitle?: string
  metaDescription?: string
  ogImage?: SanityImage
  googleAnalyticsId?: string
  enquiryFormTitle?: string
  enquiryFormDescription?: string
  enquirySuccessMessage?: string
  logo?: SanityImage
  favicon?: SanityImage
}

export interface HomePage {
  heroImage: SanityImage
  heroHeadline: string
  heroSubheadline?: string
  heroTextAlign: 'left' | 'center' | 'right'
  storyTitle: string
  storyContent: PortableTextBlock[]
  featuredTitle: string
  featuredSubtitle?: string
  featuredRooms: Room[]
  testimonialTitle: string
  featuredTestimonial: Testimonial
  ctaHeadline: string
  ctaSubtext: string
  ctaButtonText: string
  ctaLink: string
}

export interface PortableTextBlock {
  _type: string
  _key?: string
  style?: string
  children: PortableTextSpan[]
  markDefs?: any[]
  level?: number
  listItem?: string
}

export interface PortableTextSpan {
  _type: string
  _key?: string
  text: string
  marks?: string[]
}

export interface PortableTextImage {
  _type: 'image'
  asset: SanityImageAsset
  alt?: string
  caption?: string
}