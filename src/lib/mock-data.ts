// Mock data for development when Sanity is not configured
// Replace with real Sanity data once project is connected

export const mockSiteSettings = {
  hotelName: 'Nilgiri House',
  tagline: 'A quiet retreat in the Blue Mountains',
  address: 'Upper Coonoor, The Nilgiris, Tamil Nadu 643101, India',
  phone: '+91 98765 43210',
  email: 'hello@nilgirihouse.com',
  bookingEmail: 'bookings@nilgirihouse.com',
  instagramUrl: 'https://instagram.com/nilgirihouse',
  facebookUrl: 'https://facebook.com/nilgirihouse',
  twitterUrl: 'https://x.com/nilgirihouse',
  metaTitle: 'Nilgiri House — A Quiet Retreat in the Blue Mountains',
  metaDescription: 'Experience slow travel at Nilgiri House, a boutique 6-room retreat in the Nilgiri hills. Warm hospitality, misty views, and unforgettable stays.',
  googleAnalyticsId: '',
  enquiryFormTitle: 'Send an Enquiry',
  enquiryFormDescription: 'Tell us about your planned visit and we\'ll get back to you within 24 hours.',
  enquirySuccessMessage: 'Thank you! We\'ve received your enquiry and will respond soon.',
  logo: null,
  favicon: null,
}

export const mockHomePage = {
  heroImage: {
    asset: { _ref: 'image-hero-1920x1080-jpg' },
    alt: 'Misty Nilgiri hills at dawn with stone cottage in foreground',
  },
  heroHeadline: 'Nilgiri House',
  heroSubheadline: 'A quiet retreat in the Blue Mountains',
  heroTextAlign: 'left' as const,
  storyTitle: 'Our Story',
  storyContent: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Perched on a gentle slope overlooking the mist-clad valleys of the Nilgiris, Nilgiri House began as a family\'s summer refuge — a place where three generations gathered to escape the heat of the plains and wake to the sound of hill birds and the scent of eucalyptus.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'The house itself is built from local laterite stone and reclaimed timber, its thick walls keeping interiors cool through summer and warm through the monsoon. Each of the six rooms was designed individually — no two alike — with handcrafted furniture, textiles from Coimbatore weavers, and windows that frame the landscape like living paintings.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'blockquote',
      children: [
        {
          _type: 'span',
          text: 'We don\'t just offer a room. We offer a rhythm — slow mornings with filter coffee on the verandah, afternoons reading in the library, evenings by the fire as mist rolls across the valley.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Today, the house welcomes travellers who seek something quieter than a hotel — a place to disconnect, to walk the tea estate paths, to sit with a book as clouds drift past the window. We serve food from our kitchen garden and the local market, and we\'re always happy to share our favourite walking trails and hidden viewpoints.',
        },
      ],
    },
  ],
  featuredTitle: 'Our Rooms',
  featuredSubtitle: 'Six individually designed rooms, each with its own character and view',
  featuredRooms: [
    {
      _id: 'room-1',
      name: 'The Verandah Suite',
      slug: { current: 'verandah-suite' },
      shortDescription: 'Spacious corner suite with wraparound verandah and valley views',
      pricePerNight: 18500,
      maxOccupancy: 3,
      featuredImage: { asset: { _ref: 'image-room-1-1200x1500-jpg' }, alt: 'The Verandah Suite - king bed, sitting area, wraparound verandah' },
      amenities: ['King Bed', 'Wraparound Verandah', 'Valley View', 'Fireplace', 'En-suite Bath', 'Writing Desk'],
    },
    {
      _id: 'room-2',
      name: 'The Garden Room',
      slug: { current: 'garden-room' },
      shortDescription: 'Ground-floor room opening directly onto the herb garden',
      pricePerNight: 14500,
      maxOccupancy: 2,
      featuredImage: { asset: { _ref: 'image-room-2-1200x1500-jpg' }, alt: 'The Garden Room - queen bed, garden access, stone floors' },
      amenities: ['Queen Bed', 'Garden Access', 'Stone Floors', 'En-suite Bath', 'Outdoor Shower'],
    },
    {
      _id: 'room-3',
      name: 'The Library Loft',
      slug: { current: 'library-loft' },
      shortDescription: 'Cozy loft room with built-in bookshelves and skylight',
      pricePerNight: 13500,
      maxOccupancy: 2,
      featuredImage: { asset: { _ref: 'image-room-3-1200x1500-jpg' }, alt: 'The Library Loft - queen bed, bookshelves, skylight, exposed beams' },
      amenities: ['Queen Bed', 'Built-in Bookshelves', 'Skylight', 'Exposed Beams', 'En-suite Bath', 'Reading Nook'],
    },
  ],
  testimonialTitle: 'Guest Stories',
  featuredTestimonial: {
    guestName: 'Priya & Arjun Sharma',
    location: 'Mumbai, India',
    quote: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'We stayed for four nights in October and didn\'t want to leave. The mist rolling in each morning, the filter coffee brought to our verandah, the evenings by the fire — it was exactly the slow pause we needed. The team remembers how you take your tea, which walking trail suits your pace, and somehow makes you feel like family, not guests.',
          },
        ],
      },
    ],
    photo: { asset: { _ref: 'image-testimonial-1-200x200-jpg' }, alt: 'Priya and Arjun Sharma' },
    stayDate: '2024-10-15',
    roomStayed: { name: 'The Verandah Suite' },
  },
  ctaHeadline: 'Ready for the hills?',
  ctaSubtext: 'Send us an enquiry and we\'ll help you plan your stay.',
  ctaButtonText: 'Enquire Now',
  ctaLink: '/contact',
}

export const mockRooms = [
  {
    _id: 'room-1',
    name: 'The Verandah Suite',
    slug: { current: 'verandah-suite' },
    shortDescription: 'Spacious corner suite with wraparound verandah and valley views',
    longDescription: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Our flagship suite occupies the entire corner of the main house, with floor-to-ceiling windows on two sides framing the valley below. The wraparound verandah runs the length of the room — the perfect place for morning coffee, afternoon reading, or evening whisky as the mist settles.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Space' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'A king-size four-poster bed draped in handloom linens from Coimbatore. A sitting area with a restored colonial-era writing desk and leather armchair. The en-suite bathroom features a claw-foot tub positioned under a window, so you can bathe while watching clouds drift across the hills.' }],
      },
    ],
    pricePerNight: 18500,
    maxOccupancy: 3,
    amenities: ['King Bed', 'Wraparound Verandah', 'Valley View', 'Fireplace', 'En-suite Bath', 'Writing Desk', 'Claw-foot Tub', 'Handloom Linens'],
    featuredImage: { asset: { _ref: 'image-room-1-1200x1500-jpg' }, alt: 'The Verandah Suite - king bed, sitting area, wraparound verandah' },
    gallery: [
      { asset: { _ref: 'image-room-1-gallery-1-1200x800-jpg' }, alt: 'Verandah view at dawn', caption: 'Dawn from the verandah' },
      { asset: { _ref: 'image-room-1-gallery-2-1200x800-jpg' }, alt: 'Sitting area with fireplace', caption: 'Evening by the fire' },
      { asset: { _ref: 'image-room-1-gallery-3-1200x800-jpg' }, alt: 'En-suite bathroom with claw-foot tub', caption: 'Bath with a view' },
    ],
    isFeatured: true,
    order: 1,
  },
  {
    _id: 'room-2',
    name: 'The Garden Room',
    slug: { current: 'garden-room' },
    shortDescription: 'Ground-floor room opening directly onto the herb garden',
    longDescription: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Step directly from your room into the herb garden — rosemary, thyme, mint, and lemongrass brushing your ankles as you walk to breakfast. This ground-floor room has the most immediate connection to the landscape.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Space' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'A queen bed on a raised platform with local stone flooring that stays cool underfoot. French doors open onto a private patio with a stone bench. The en-suite bathroom has an outdoor shower (screened for privacy) — bathing under the stars with the scent of eucalyptus is a highlight.' }],
      },
    ],
    pricePerNight: 14500,
    maxOccupancy: 2,
    amenities: ['Queen Bed', 'Garden Access', 'Stone Floors', 'En-suite Bath', 'Outdoor Shower', 'Private Patio', 'Herb Garden'],
    featuredImage: { asset: { _ref: 'image-room-2-1200x1500-jpg' }, alt: 'The Garden Room - queen bed, garden access, stone floors' },
    gallery: [
      { asset: { _ref: 'image-room-2-gallery-1-1200x800-jpg' }, alt: 'Garden patio at morning', caption: 'Morning on the patio' },
      { asset: { _ref: 'image-room-2-gallery-2-1200x800-jpg' }, alt: 'Outdoor shower', caption: 'Open-air shower' },
    ],
    isFeatured: true,
    order: 2,
  },
  {
    _id: 'room-3',
    name: 'The Library Loft',
    slug: { current: 'library-loft' },
    shortDescription: 'Cozy loft room with built-in bookshelves and skylight',
    longDescription: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Tucked under the eaves of the original house, this room feels like a secret discovered. Built-in bookshelves line the walls, filled with a curated collection of travel writing, natural history, and Indian literature.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Space' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'A queen bed positioned under a large skylight — fall asleep watching stars, wake to soft light filtering through mist. Exposed timber beams overhead. A window seat with cushions makes the perfect reading nook. The compact en-suite has a rainfall shower and vintage mirror.' }],
      },
    ],
    pricePerNight: 13500,
    maxOccupancy: 2,
    amenities: ['Queen Bed', 'Built-in Bookshelves', 'Skylight', 'Exposed Beams', 'En-suite Bath', 'Reading Nook', 'Window Seat', 'Curated Library'],
    featuredImage: { asset: { _ref: 'image-room-3-1200x1500-jpg' }, alt: 'The Library Loft - queen bed, bookshelves, skylight, exposed beams' },
    gallery: [
      { asset: { _ref: 'image-room-3-gallery-1-1200x800-jpg' }, alt: 'Bookshelf detail', caption: 'Curated collection' },
      { asset: { _ref: 'image-room-3-gallery-2-1200x800-jpg' }, alt: 'Window seat reading nook', caption: 'Reading nook' },
    ],
    isFeatured: true,
    order: 3,
  },
  {
    _id: 'room-4',
    name: 'The Tea Estate View',
    slug: { current: 'tea-estate-view' },
    shortDescription: 'Elevated room with panoramic views over working tea gardens',
    longDescription: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Perched at the highest point of the property, this room looks out over acres of manicured tea bushes that cascade down the hillside. Watch the pluckers at work in the morning light, their colorful saris dotting the green slopes.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Space' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Twin beds that can be joined as a king. A deep window seat spans the full width of the view wall. The en-suite has a walk-in rainfall shower and double vanity. A small telescope sits by the window for birdwatching — the Nilgiri flycatcher and black-and-orange flycatcher are regular visitors.' }],
      },
    ],
    pricePerNight: 15500,
    maxOccupancy: 2,
    amenities: ['Twin/King Bed', 'Tea Estate View', 'Window Seat', 'En-suite Bath', 'Walk-in Shower', 'Double Vanity', 'Telescope', 'Birdwatching'],
    featuredImage: { asset: { _ref: 'image-room-4-1200x1500-jpg' }, alt: 'The Tea Estate View - twin beds, window seat, panoramic view' },
    gallery: [
      { asset: { _ref: 'image-room-4-gallery-1-1200x800-jpg' }, alt: 'Tea estate panorama', caption: 'Tea gardens at dawn' },
      { asset: { _ref: 'image-room-4-gallery-2-1200x800-jpg' }, alt: 'Window seat detail', caption: 'The view seat' },
    ],
    isFeatured: false,
    order: 4,
  },
  {
    _id: 'room-5',
    name: 'The Hearth Room',
    slug: { current: 'hearth-room' },
    shortDescription: 'Warm, cocoon-like room with a large stone fireplace',
    longDescription: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'The coziest room in the house, built around a massive laterite-stone fireplace that has warmed generations of families. Thick walls, low ceilings, and warm lighting make this a sanctuary during the monsoon months.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Space' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'A king bed with an extra-thick mattress and wool blankets. Two deep armchairs flank the fireplace. The en-suite is compact but elegant, with heated towel rails and a deep soaking tub. A stack of board games and a record player with a small vinyl collection sit in the corner.' }],
      },
    ],
    pricePerNight: 16500,
    maxOccupancy: 2,
    amenities: ['King Bed', 'Stone Fireplace', 'Armchairs', 'En-suite Bath', 'Soaking Tub', 'Heated Towel Rails', 'Record Player', 'Board Games', 'Wool Blankets'],
    featuredImage: { asset: { _ref: 'image-room-5-1200x1500-jpg' }, alt: 'The Hearth Room - king bed, stone fireplace, armchairs' },
    gallery: [
      { asset: { _ref: 'image-room-5-gallery-1-1200x800-jpg' }, alt: 'Fireplace detail', caption: 'The heart of the room' },
      { asset: { _ref: 'image-room-5-gallery-2-1200x800-jpg' }, alt: 'Soaking tub', caption: 'Deep soaking tub' },
    ],
    isFeatured: false,
    order: 5,
  },
  {
    _id: 'room-6',
    name: 'The Sunrise Room',
    slug: { current: 'sunrise-room' },
    shortDescription: 'East-facing room catching the first light over the hills',
    longDescription: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Positioned to catch the very first rays of sun as they crest the eastern ridges. Early risers are rewarded with a spectacle — the valley filling with golden light, mist burning off in slow motion.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Space' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'A queen bed positioned so the sunrise falls across the pillows. Sheer curtains filter the light gently. A small balcony with two chairs — the perfect perch for morning chai. The en-suite has a skylight above the shower, bringing in more of that precious light.' }],
      },
    ],
    pricePerNight: 14000,
    maxOccupancy: 2,
    amenities: ['Queen Bed', 'Sunrise View', 'East-facing', 'Private Balcony', 'En-suite Bath', 'Skylight Shower', 'Sheer Curtains', 'Morning Chai Service'],
    featuredImage: { asset: { _ref: 'image-room-6-1200x1500-jpg' }, alt: 'The Sunrise Room - queen bed, balcony, east-facing view' },
    gallery: [
      { asset: { _ref: 'image-room-6-gallery-1-1200x800-jpg' }, alt: 'Sunrise from the bed', caption: 'First light' },
      { asset: { _ref: 'image-room-6-gallery-2-1200x800-jpg' }, alt: 'Balcony chairs', caption: 'Morning chai spot' },
    ],
    isFeatured: false,
    order: 6,
  },
]

export const mockTestimonials = [
  {
    _id: 'testimonial-1',
    guestName: 'Priya & Arjun Sharma',
    location: 'Mumbai, India',
    quote: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'We stayed for four nights in October and didn\'t want to leave. The mist rolling in each morning, the filter coffee brought to our verandah, the evenings by the fire — it was exactly the slow pause we needed.' }],
      },
    ],
    photo: { asset: { _ref: 'image-testimonial-1-200x200-jpg' }, alt: 'Priya and Arjun Sharma' },
    stayDate: '2024-10-15',
    roomStayed: { name: 'The Verandah Suite' },
  },
  {
    _id: 'testimonial-2',
    guestName: 'Sarah Mitchell',
    location: 'London, UK',
    quote: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'As a solo traveler, I was welcomed like an old friend. The team helped me plan daily walks, recommended the best spot for sunset, and made sure I always had a warm cup of tea waiting after a long hike. The Library Loft was perfect — I read three books in five days.' }],
      },
    ],
    photo: { asset: { _ref: 'image-testimonial-2-200x200-jpg' }, alt: 'Sarah Mitchell' },
    stayDate: '2024-09-22',
    roomStayed: { name: 'The Library Loft' },
  },
  {
    _id: 'testimonial-3',
    guestName: 'The Patel Family',
    location: 'Ahmedabad, India',
    quote: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Our children (8 and 11) still talk about the "firefly garden" and learning to make dosa in the kitchen. The Verandah Suite gave us space to be together and apart. Rare to find a place that works so well for a family without feeling like a resort.' }],
      },
    ],
    photo: { asset: { _ref: 'image-testimonial-3-200x200-jpg' }, alt: 'The Patel Family' },
    stayDate: '2024-12-28',
    roomStayed: { name: 'The Verandah Suite' },
  },
]

// Sanity-style asset references for mock images
// Format: image-<id>-<width>x<height>-<format>
export const mockImages: Record<string, string> = {
  'image-hero-1920x1080-jpg': 'https://images.unsplash.com/photo-1544731612-de7f96af5b3a?w=1920&q=80',
  'image-room-1-1200x1500-jpg': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
  'image-room-2-1200x1500-jpg': 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80',
  'image-room-3-1200x1500-jpg': 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
  'image-room-4-1200x1500-jpg': 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80',
  'image-room-5-1200x1500-jpg': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
  'image-room-6-1200x1500-jpg': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
  'image-room-1-gallery-1-1200x800-jpg': 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80',
  'image-room-1-gallery-2-1200x800-jpg': 'https://images.unsplash.com/photo-1540519806625-d5d883568e46?w=1200&q=80',
  'image-room-1-gallery-3-1200x800-jpg': 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80',
  'image-room-2-gallery-1-1200x800-jpg': 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&q=80',
  'image-room-2-gallery-2-1200x800-jpg': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80',
  'image-room-3-gallery-1-1200x800-jpg': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80',
  'image-room-3-gallery-2-1200x800-jpg': 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80',
  'image-room-4-gallery-1-1200x800-jpg': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
  'image-room-4-gallery-2-1200x800-jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
  'image-room-5-gallery-1-1200x800-jpg': 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&q=80',
  'image-room-5-gallery-2-1200x800-jpg': 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80',
  'image-room-6-gallery-1-1200x800-jpg': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
  'image-room-6-gallery-2-1200x800-jpg': 'https://images.unsplash.com/photo-1519680234332-6c33a1b4a95c?w=1200&q=80',
  'image-testimonial-1-200x200-jpg': 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&q=80',
  'image-testimonial-2-200x200-jpg': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
  'image-testimonial-3-200x200-jpg': 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&q=80',
}