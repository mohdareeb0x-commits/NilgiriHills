import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'story', title: 'Our Story' },
    { name: 'featured', title: 'Featured Rooms' },
    { name: 'testimonial', title: 'Testimonial' },
    { name: 'cta', title: 'Closing CTA' },
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: 'hero',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
      description: 'Main headline overlay on hero image (e.g., "Nilgiri House")',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'string',
      group: 'hero',
      description: 'Supporting tagline (e.g., "A quiet retreat in the Blue Mountains")',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'heroTextAlign',
      title: 'Text Alignment',
      type: 'string',
      group: 'hero',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    }),

    // Our Story Section
    defineField({
      name: 'storyTitle',
      title: 'Section Title',
      type: 'string',
      group: 'story',
      initialValue: 'Our Story',
    }),
    defineField({
      name: 'storyContent',
      title: 'Story Content',
      type: 'array',
      group: 'story',
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
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string' },
            { name: 'caption', title: 'Caption', type: 'string' },
          ],
        },
      ],
      description: 'Rich-text story content with optional inline images',
    }),

    // Featured Rooms
    defineField({
      name: 'featuredTitle',
      title: 'Section Title',
      type: 'string',
      group: 'featured',
      initialValue: 'Our Rooms',
    }),
    defineField({
      name: 'featuredSubtitle',
      title: 'Section Subtitle',
      type: 'string',
      group: 'featured',
      description: 'Optional subtitle below the title',
    }),
    defineField({
      name: 'featuredRooms',
      title: 'Featured Rooms',
      type: 'array',
      group: 'featured',
      of: [
        {
          type: 'reference',
          to: [{ type: 'room' }],
        },
      ],
      description: 'Select 2-3 rooms to feature on the homepage',
      validation: (Rule) => Rule.max(3),
    }),

    // Testimonial
    defineField({
      name: 'testimonialTitle',
      title: 'Section Title',
      type: 'string',
      group: 'testimonial',
      initialValue: 'Guest Stories',
    }),
    defineField({
      name: 'featuredTestimonial',
      title: 'Featured Testimonial',
      type: 'reference',
      group: 'testimonial',
      to: [{ type: 'testimonial' }],
      description: 'Select one testimonial to feature on the homepage',
    }),

    // Closing CTA
    defineField({
      name: 'ctaHeadline',
      title: 'CTA Headline',
      type: 'string',
      group: 'cta',
      initialValue: 'Ready for the hills?',
    }),
    defineField({
      name: 'ctaSubtext',
      title: 'CTA Subtext',
      type: 'string',
      group: 'cta',
      initialValue: 'Send us an enquiry and we\'ll help you plan your stay.',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Button Text',
      type: 'string',
      group: 'cta',
      initialValue: 'Enquire Now',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Button Link',
      type: 'string',
      group: 'cta',
      initialValue: '/contact',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
        subtitle: 'Main landing page content',
      }
    },
  },
})