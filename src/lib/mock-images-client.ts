'use client'

// Client-safe mock images for use in client components like SanityImage
// Format: image-<id>-<width>x<height>-<format>
export const mockImages: Record<string, string> = {
  // Hero images for each page - using verified working Unsplash URLs
  'image-hero-home-1920x1080-jpg': 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80',
  'image-hero-rooms-1920x1080-jpg': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
  'image-hero-room-1920x1080-jpg': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
  'image-hero-about-1920x1080-jpg': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
  'image-hero-contact-1920x1080-jpg': 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1920&q=80',

  // Legacy hero image
  'image-hero-1920x1080-jpg': 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80',

  // Room images
  'image-room-1-1200x1500-jpg': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
  'image-room-2-1200x1500-jpg': 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80',
  'image-room-3-1200x1500-jpg': 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
  'image-room-4-1200x1500-jpg': 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80',
  'image-room-5-1200x1500-jpg': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
  'image-room-6-1200x1500-jpg': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',

  // Room gallery images
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

  // Testimonial images
  'image-testimonial-1-200x200-jpg': 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&q=80',
  'image-testimonial-2-200x200-jpg': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
  'image-testimonial-3-200x200-jpg': 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&q=80',
}