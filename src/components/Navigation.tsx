'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

interface NavigationProps {
  hotelName: string
  logo?: { asset: { _ref: string } }
}

export function Navigation({ hotelName, logo }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/rooms', label: 'Rooms' },
    { href: '/about', label: 'Our Story' },
    { href: '/contact', label: 'Enquire' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled ? 'bg-forest/95 backdrop-blur-sm shadow-lg' : 'bg-forest/30 backdrop-blur-sm'
      }`}
    >
      <nav className="section-wide flex items-center justify-between py-4" aria-label="Main navigation">
        <Link
          href="/"
          className="font-display text-2xl md:text-3xl font-medium text-cream hover:text-terracotta transition-colors"
          aria-label={`${hotelName} - Home`}
        >
          {hotelName}
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium uppercase tracking-wider text-cream hover:text-terracotta transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-terracotta after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-cream"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="bg-forest py-6 px-6">
          <ul className="flex flex-col gap-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-lg font-medium uppercase tracking-wider text-cream hover:text-terracotta transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}