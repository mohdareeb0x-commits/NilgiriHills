'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { mockImages } from '@/lib/mock-images-client'

// Define the shape of our Sanity image object
interface SanityImageAsset {
  _ref: string
}

interface SanityImageObject {
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

// Check if asset._ref is a mock image key
function isMockImage(ref: string): boolean {
  return ref in mockImages
}

function getMockImageUrl(ref: string): string {
  return mockImages[ref as keyof typeof mockImages] || ''
}

interface SanityImageProps {
  source: SanityImageObject
  alt?: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  crop?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'entropy'
  hotspot?: { x: number; y: number; width: number; height: number }
}

export function SanityImage({
  source,
  alt = '',
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px',
  fill = false,
  objectFit = 'cover',
  crop,
  hotspot,
}: SanityImageProps) {
  if (!source?.asset?._ref) {
    return (
      <div
        className={`bg-sage/20 ${className}`}
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height, minHeight: fill ? '200px' : height }}
        aria-hidden="true"
      />
    )
  }

  const ref = source.asset._ref
  const isMock = isMockImage(ref)

  let finalUrl: string
  let blurUrl: string

  if (isMock) {
    finalUrl = getMockImageUrl(ref)
    // For mock images, create a tiny base64 blur placeholder
    blurUrl = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/AB8A/9k='
  } else {
    const imageUrl = urlFor(source)
      .width(width || 1200)
      .height(height || 800)
      .fit(crop ? 'crop' : 'max')
      .auto('format')
      .quality(85)

    if (hotspot) {
      imageUrl.rect(hotspot.x, hotspot.y, hotspot.width, hotspot.height)
    }

    finalUrl = imageUrl.url()
    blurUrl = urlFor(source)
      .width(20)
      .height(13)
      .fit('crop')
      .auto('format')
      .url()
  }

  if (fill) {
    // Ensure the container has explicit dimensions for fill to work
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ width: '100%', height: '100%', minHeight: '100%' }}>
        <Image
          src={finalUrl}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          blurDataURL={blurUrl}
          className={`object-${objectFit} transition-opacity duration-500`}
          style={{ objectFit }}
        />
      </div>
    )
  }

  return (
    <Image
      src={finalUrl}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      blurDataURL={blurUrl}
      className={`object-${objectFit} ${className}`}
    />
  )
}

export function SanityImageFullBleed({
  source,
  alt = '',
  className = '',
  priority = false,
  objectFit = 'cover',
  hotspot,
}: Omit<SanityImageProps, 'width' | 'height' | 'sizes' | 'fill'>) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <SanityImage
        source={source}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        objectFit={objectFit}
        hotspot={hotspot}
      />
    </div>
  )
}