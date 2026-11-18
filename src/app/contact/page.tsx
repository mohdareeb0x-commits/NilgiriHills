import { Metadata } from 'next'
import React from 'react'
import { fetchSanity } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'
import { ContactForm } from './ContactForm'
import type { SiteSettings } from '@/lib/types'
import { SanityImageFullBleed } from '@/components/SanityImage'

export const metadata: Metadata = {
  title: 'Enquire',
  description: 'Send a booking enquiry to Nilgiri House. Tell us about your planned visit and we\'ll get back to you within 24 hours.',
  openGraph: {
    title: 'Enquire — Nilgiri House',
    description: 'Send a booking enquiry to Nilgiri House. We\'ll help you plan your stay.',
    type: 'website',
  },
}

export default async function ContactPage() {
  const settings = await fetchSanity<SiteSettings>(siteSettingsQuery)

  const hotelName = settings?.hotelName || 'Nilgiri House'
  const tagline = settings?.tagline || 'A quiet retreat in the Blue Mountains'
  const address = settings?.address || 'Upper Coonoor, The Nilgiris, Tamil Nadu 643101, India'
  const phone = settings?.phone || '+91 98765 43210'
  const email = settings?.email || 'hello@nilgirihouse.com'
  const enquiryFormTitle = settings?.enquiryFormTitle || 'Send an Enquiry'
  const enquiryFormDescription = settings?.enquiryFormDescription || 'Tell us about your planned visit and we\'ll get back to you within 24 hours.'
  const enquirySuccessMessage = settings?.enquirySuccessMessage || 'Thank you! We\'ve received your enquiry and will respond soon.'
  const bookingEmail = settings?.bookingEmail || 'bookings@nilgirihouse.com'

  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end" aria-labelledby="contact-hero-heading" style={{ minHeight: '50vh', display: 'flex', alignItems: 'flex-end' }}>
        <SanityImageFullBleed
          source={{
            asset: { _ref: 'image-hero-contact-1920x1080-jpg' },
            alt: 'Sunrise over Nilgiri hills from hotel verandah'
          }}
          priority
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" aria-hidden="true" />
        <div className="relative z-10 w-full section-wide pb-16 md:pb-24">
          <div className="max-w-3xl animate-fade-in">
            <h1 id="contact-hero-heading" className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-cream leading-tight mb-6">
              Enquire
            </h1>
            <p className="font-body text-lg md:text-xl text-cream/90 max-w-xl">
              {enquiryFormDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section section-wide">
        <div className="section-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div className="animate-fade-in stagger-1">
              <ContactForm
                enquiryFormTitle={enquiryFormTitle}
                enquiryFormDescription={enquiryFormDescription}
                enquirySuccessMessage={enquirySuccessMessage}
                phone={phone}
              />
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in stagger-2">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest mb-8">
                Other Ways to Reach Us
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-terracotta/10 border border-terracotta/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-terracotta" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-forest mb-1">Visit Us</h3>
                    <address className="not-italic font-body text-charcoal/70 leading-relaxed">
                      {address.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </address>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-terracotta/10 border border-terracotta/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-terracotta" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-forest mb-1">Call Us</h3>
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="font-body text-charcoal/70 hover:text-terracotta transition-colors">
                      {phone}
                    </a>
                    <p className="caption mt-1">Daily 9am – 7pm IST</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-terracotta/10 border border-terracotta/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-terracotta" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-forest mb-1">Email Us</h3>
                    <a href={`mailto:${email}`} className="font-body text-charcoal/70 hover:text-terracotta transition-colors">
                      {email}
                    </a>
                    <p className="caption mt-1">For booking enquiries: {bookingEmail}</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="relative aspect-video bg-sage/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-sage" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="font-body text-charcoal/70 mb-2">Interactive Map</p>
                    <p className="caption">11.3543° N, 76.7934° E</p>
                    <a
                      href="https://maps.google.com/?q=11.3543,76.7934"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost mt-4 inline-flex"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="section section-wide bg-cream-soft" aria-labelledby="directions-heading">
        <div className="section-narrow">
          <h2 id="directions-heading" className="font-display text-4xl md:text-5xl font-semibold text-forest mb-12 text-center animate-fade-in">
            Getting Here
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'By Air',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17.8 19.2l-6.1-6.1a4 4 0 0 1-1.1-2.5V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.1" />
                    <path d="M15 9l-3 3" />
                    <path d="M5 21l2.2-2.2A14 14 0 0 0 17.8 5" />
                    <path d="M3 21v-4a2 2 0 0 1 2-2h2" />
                  </svg>
                ),
                content: 'Coimbatore (CJB) — 70 km, 2.5 hrs drive. We arrange pickup (₹3,500). Coimbatore connects to major Indian cities and some international routes.'
              },
              {
                title: 'By Train',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 12h18M3 12V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
                    <rect x="5" y="14" width="14" height="8" rx="1" />
                    <circle cx="8" cy="18" r="1" />
                    <circle cx="16" cy="18" r="1" />
                  </svg>
                ),
                content: 'Coimbatore Junction (CBE) — 2.5 hrs drive. Or the Nilgiri Mountain Railway from Mettupalayam to Coonoor (3 hrs, scenic toy train). We pickup from Coonoor station (₹1,500).'
              },
              {
                title: 'By Road',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.3-1.5.7C1.9 7.7.5 9.5.5 9.5S1 11.2 1 11.2c-.7.2-1.5.9-1.5 1.9V16c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                ),
                content: 'From Bangalore: 290 km, 6.5 hrs via Mysore–Ooty road. From Coimbatore: 70 km, 2.5 hrs via Mettupalayam. The last 20 km are winding hill roads — drive slowly and enjoy the views.'
              },
            ].map((item, index) => (
              <div key={item.title} className="text-center p-6 animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-forest/10 border border-forest/30 text-forest">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-forest mb-3">{item.title}</h3>
                <p className="font-body text-charcoal/70 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}