import { defineField, defineType } from 'sanity'

export const room = defineType({
  name: 'room',
  title: 'Room',
  type: 'document',
  groups: [
    { name: 'basics', title: 'Basic Information' },
    { name: 'description', title: 'Descriptions' },
    { name: 'details', title: 'Details & Pricing' },
    { name: 'media', title: 'Images' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Room Name',
      type: 'string',
      group: 'basics',
      validation: (Rule) => Rule.required().min(2).max(60),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'basics',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      group: 'description',
      rows: 3,
      description: 'Brief summary shown on room cards (1-2 sentences)',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'longDescription',
      title: 'Full Description',
      type: 'array',
      group: 'description',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
      description: 'Rich-text description for the room detail page',
    }),
    defineField({
      name: 'pricePerNight',
      title: 'Price Per Night (₹)',
      type: 'number',
      group: 'details',
      validation: (Rule) => Rule.required().min(1000).max(100000),
    }),
    defineField({
      name: 'maxOccupancy',
      title: 'Maximum Occupancy',
      type: 'number',
      group: 'details',
      validation: (Rule) => Rule.required().min(1).max(6),
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      group: 'details',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'List of amenities (e.g., "Fireplace", "Valley View", "King Bed", "En-suite Bath")',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      group: 'media',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Accessibility description for the image',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        },
      ],
      description: 'Additional photos for the room detail page gallery',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Feature on Homepage',
      type: 'boolean',
      group: 'basics',
      initialValue: false,
      description: 'Show this room in the "Featured Rooms" section on the homepage',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'basics',
      description: 'Lower numbers appear first',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'pricePerNight',
      media: 'featuredImage',
      occupancy: 'maxOccupancy',
    },
    prepare({ title, subtitle, media, occupancy }) {
      return {
        title,
        subtitle: `₹${subtitle}/night • ${occupancy} guests`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Price (Low to High)',
      name: 'priceAsc',
      by: [{ field: 'pricePerNight', direction: 'asc' }],
    },
  ],
})