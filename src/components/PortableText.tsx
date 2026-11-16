'use client'

import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

interface PortableTextProps {
  blocks: PortableTextBlock[]
  className?: string
}

const components: any = {
  block: {
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="mb-6">{children}</p>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest mt-12 mb-6">
        {children}
      </h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="font-display text-2xl md:text-3xl font-semibold text-forest mt-10 mb-4">
        {children}
      </h3>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="font-display italic text-xl md:text-2xl text-forest border-l-4 border-terracotta pl-6 my-8">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
  },
  image: ({ value }: { value: { asset: { _ref: string }; alt?: string; caption?: string } }) => {
    const imageUrl = urlFor(value.asset).width(1200).height(800).fit('crop').auto('format').url()
    const blurUrl = urlFor(value.asset).width(20).height(13).fit('crop').auto('format').url()

    return (
      <figure className="my-8">
        <div className="relative aspect-video overflow-hidden rounded-none">
          <Image
            src={imageUrl}
            alt={value.alt || ''}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            placeholder="blur"
            blurDataURL={blurUrl}
            className="object-cover transition-opacity duration-500"
          />
        </div>
        {value.caption && (
          <figcaption className="caption mt-2 text-center">
            {value.caption}
          </figcaption>
        )}
      </figure>
    )
  },
}

export function PortableTextRenderer({ blocks, className = '' }: PortableTextProps) {
  if (!blocks || blocks.length === 0) return null

  return (
    <div className={`portable-text ${className}`}>
      <PortableText value={blocks} components={components} />
    </div>
  )
}