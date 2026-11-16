import Link from 'next/link'

interface FooterProps {
  hotelName: string
  tagline?: string
  address?: string
  phone?: string
  email?: string
  instagramUrl?: string
  facebookUrl?: string
  twitterUrl?: string
}

export function Footer({
  hotelName,
  tagline,
  address,
  phone,
  email,
  instagramUrl,
  facebookUrl,
  twitterUrl,
}: FooterProps) {
  const currentYear = 2025

  const socialLinks = [
    { href: instagramUrl, label: 'Instagram', icon: InstagramIcon },
    { href: facebookUrl, label: 'Facebook', icon: FacebookIcon },
    { href: twitterUrl, label: 'X (Twitter)', icon: TwitterIcon },
  ].filter((link) => link.href)

  return (
    <footer className="bg-forest py-10 mt-10 text-cream" role="contentinfo">
      <div className="section-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display text-3xl md:text-4xl font-medium hover:text-terracotta transition-colors block mb-4"
              aria-label={`${hotelName} - Home`}
            >
              {hotelName}
            </Link>
            {tagline && <p className="text-cream/70 leading-relaxed mb-6">{tagline}</p>}
            {address && (
              <address className="not-italic text-cream/70 leading-relaxed">
                {address.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </address>
            )}
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-cream mb-4">Contact</h3>
            <ul className="space-y-3 text-cream/70">
              {phone && (
                <li>
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="hover:text-terracotta transition-colors"
                  >
                    {phone}
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-terracotta transition-colors"
                  >
                    {email}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-cream mb-4">Explore</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/rooms"
                    className="text-cream/70 hover:text-terracotta transition-colors font-body text-sm"
                  >
                    Our Rooms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-cream/70 hover:text-terracotta transition-colors font-body text-sm"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-cream/70 hover:text-terracotta transition-colors font-body text-sm"
                  >
                    Enquire
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display text-lg font-semibold text-cream mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-cream/70 hover:text-terracotta transition-colors"
                >
                  <social.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-forest/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm font-body">
            © {currentYear} {hotelName}. All rights reserved.
          </p>
          <p className="text-cream/50 text-sm font-body">
            Designed with care for slow travel
          </p>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  )
}

import React from 'react'