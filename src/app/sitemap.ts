import { MetadataRoute } from 'next'
import { fetchSanity } from '@/lib/sanity'
import { roomsQuery } from '@/lib/queries'
import type { Room } from '@/lib/types'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nilgirihouse.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const rooms = await fetchSanity<Room[]>(roomsQuery)

  const roomUrls = rooms?.map((room: Room) => ({
    url: `${siteUrl}/rooms/${room.slug?.current}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  })) || []

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${siteUrl}/rooms`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...roomUrls,
  ]
}