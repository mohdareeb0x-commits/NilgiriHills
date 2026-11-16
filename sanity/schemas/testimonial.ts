import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'author', title: 'Guest Details' },
  ],
  fields: [
    defineField({
      name: 'guestName',
      title: 'Guest Name',
      type: 'string',
      group: 'author',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      group: 'author',
      description: 'City, Country (e.g., "Mumbai, India" or "London, UK")',
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Guest Photo (Optional)',
      type: 'image',
      group: 'author',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'stayDate',
      title: 'Stay Date',
      type: 'date',
      group: 'author',
      description: 'When they stayed (month/year shown)',
    }),
    defineField({
      name: 'roomStayed',
      title: 'Room Stayed In (Optional)',
      type: 'reference',
      group: 'author',
      to: [{ type: 'room' }],
    }),
  ],
  preview: {
    select: {
      title: 'guestName',
      subtitle: 'location',
      media: 'photo',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled Testimonial',
        subtitle: subtitle || 'No location',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Newest First',
      name: 'dateDesc',
      by: [{ field: 'stayDate', direction: 'desc' }],
    },
  ],
})