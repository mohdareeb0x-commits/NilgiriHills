import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Hotel Identity' },
    { name: 'contact', title: 'Contact Information' },
    { name: 'social', title: 'Social Links' },
    { name: 'seo', title: 'SEO & Metadata' },
    { name: 'booking', title: 'Booking Enquiry' },
  ],
  fields: [
    // Hotel Identity
    defineField({
      name: 'hotelName',
      title: 'Hotel Name',
      type: 'string',
      group: 'identity',
      validation: (Rule) => Rule.required().max(60),
      initialValue: 'Nilgiri House',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'identity',
      description: 'Short tagline used in hero, footer, SEO',
      validation: (Rule) => Rule.max(160),
      initialValue: 'A quiet retreat in the Blue Mountains',
    }),
    defineField({
      name: 'logo',
      title: 'Logo (Optional)',
      type: 'image',
      group: 'identity',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'identity',
      options: { hotspot: true },
    }),

    // Contact Information
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      group: 'contact',
      rows: 3,
      description: 'Full postal address',
      initialValue: 'Upper Coonoor, The Nilgiris, Tamil Nadu 643101, India',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'contact',
      description: 'Displayed phone number (e.g., "+91 98765 43210")',
    }),
    defineField({
      name: 'email',
      title: 'General Email',
      type: 'string',
      group: 'contact',
      description: 'General contact email',
    }),
    defineField({
      name: 'bookingEmail',
      title: 'Booking Enquiry Email',
      type: 'string',
      group: 'booking',
      description: 'Where booking enquiry forms are sent',
      validation: (Rule) => Rule.required().email(),
    }),

    // Social Links
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'X (Twitter) URL',
      type: 'url',
      group: 'social',
    }),

    // SEO & Metadata
    defineField({
      name: 'metaTitle',
      title: 'Default Meta Title',
      type: 'string',
      group: 'seo',
      description: 'Default <title> for pages without specific SEO',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Default Meta Description',
      type: 'text',
      group: 'seo',
      rows: 3,
      description: 'Default meta description for search results',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'ogImage',
      title: 'Default Open Graph Image',
      type: 'image',
      group: 'seo',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
      description: 'Used when pages don\'t have their own OG image',
    }),
    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID (GA4)',
      type: 'string',
      group: 'seo',
      description: 'Format: G-XXXXXXXXXX',
    }),

    // Booking Enquiry
    defineField({
      name: 'enquiryFormTitle',
      title: 'Enquiry Form Title',
      type: 'string',
      group: 'booking',
      initialValue: 'Send an Enquiry',
    }),
    defineField({
      name: 'enquiryFormDescription',
      title: 'Enquiry Form Description',
      type: 'text',
      group: 'booking',
      rows: 2,
      initialValue: 'Tell us about your planned visit and we\'ll get back to you within 24 hours.',
    }),
    defineField({
      name: 'enquirySuccessMessage',
      title: 'Success Message',
      type: 'text',
      group: 'booking',
      rows: 2,
      initialValue: 'Thank you! We\'ve received your enquiry and will respond soon.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Global configuration',
      }
    },
  },
})