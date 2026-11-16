import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  hotelName,
  tagline,
  address,
  phone,
  email,
  bookingEmail,
  instagramUrl,
  facebookUrl,
  twitterUrl,
  metaTitle,
  metaDescription,
  ogImage,
  googleAnalyticsId,
  enquiryFormTitle,
  enquiryFormDescription,
  enquirySuccessMessage,
  logo,
  favicon
}`

export const homePageQuery = groq`*[_type == "homePage"][0]{
  heroImage,
  heroHeadline,
  heroSubheadline,
  heroTextAlign,
  storyTitle,
  storyContent,
  featuredTitle,
  featuredSubtitle,
  featuredRooms[]->{
    _id,
    name,
    slug,
    shortDescription,
    pricePerNight,
    maxOccupancy,
    featuredImage,
    amenities
  },
  testimonialTitle,
  featuredTestimonial->{
    guestName,
    location,
    quote,
    photo,
    stayDate,
    roomStayed->{
      name
    }
  },
  ctaHeadline,
  ctaSubtext,
  ctaButtonText,
  ctaLink
}`

export const roomsQuery = groq`*[_type == "room"] | order(order asc, name asc){
  _id,
  name,
  slug,
  shortDescription,
  longDescription,
  pricePerNight,
  maxOccupancy,
  amenities,
  featuredImage,
  gallery,
  isFeatured,
  order
}`

export const roomBySlugQuery = groq`*[_type == "room" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  shortDescription,
  longDescription,
  pricePerNight,
  maxOccupancy,
  amenities,
  featuredImage,
  gallery,
  isFeatured,
  order
}`

export const featuredRoomsQuery = groq`*[_type == "room" && isFeatured == true] | order(order asc){
  _id,
  name,
  slug,
  shortDescription,
  pricePerNight,
  maxOccupancy,
  featuredImage,
  amenities
}`

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(stayDate desc){
  _id,
  guestName,
  location,
  quote,
  photo,
  stayDate,
  roomStayed->{
    name
  }
}`

export const roomSlugsQuery = groq`*[_type == "room" && defined(slug.current)][].slug.current`