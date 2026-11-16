'use client'

import { useState, useEffect } from 'react'

interface ContactFormProps {
  enquiryFormTitle: string
  enquiryFormDescription: string
  enquirySuccessMessage: string
  phone: string
}

export function ContactForm({
  enquiryFormTitle,
  enquiryFormDescription,
  enquirySuccessMessage,
  phone,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomPreference: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [minDates, setMinDates] = useState({ today: '', tomorrow: '' })

  // Check for room preference in URL query params
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const room = params.get('room')
      if (room) {
        setFormData(prev => ({ ...prev, roomPreference: room }))
      }

      // Set min dates on client side
      const today = new Date().toISOString().split('T')[0]
      const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]
      setMinDates({ today, tomorrow })
    }
  }, [])

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    if (!formData.checkIn) {
      newErrors.checkIn = 'Check-in date is required'
    } else if (minDates.today && formData.checkIn < minDates.today) {
      newErrors.checkIn = 'Check-in date cannot be in the past'
    }

    if (!formData.checkOut) {
      newErrors.checkOut = 'Check-out date is required'
    } else if (formData.checkIn && formData.checkOut <= formData.checkIn) {
      newErrors.checkOut = 'Check-out must be after check-in'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setIsSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: '2',
          roomPreference: '',
          message: '',
        })
        // Hide success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        setErrors({ form: result.error || 'Something went wrong. Please try again.' })
      }
    } catch {
      setErrors({ form: 'Failed to send enquiry. Please try again or contact us directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <>
      <form id="enquiry-form" className="space-y-6" onSubmit={handleSubmit}>
        {/* Hidden room preference from query param */}
        <input
          type="hidden"
          name="roomPreference"
          id="room-preference"
          value={formData.roomPreference}
          onChange={handleChange}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="label-field">
              Full Name <span className="text-terracotta" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`input-field ${errors.name ? 'border-terracotta' : ''}`}
              required
              autoComplete="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-terracotta text-sm mt-1" role="alert">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="label-field">
              Email <span className="text-terracotta" aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`input-field ${errors.email ? 'border-terracotta' : ''}`}
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-terracotta text-sm mt-1" role="alert">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="label-field">
              Phone <span className="text-terracotta" aria-hidden="true">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`input-field ${errors.phone ? 'border-terracotta' : ''}`}
              required
              autoComplete="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={errors.phone ? 'true' : 'false'}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="text-terracotta text-sm mt-1" role="alert">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="guests" className="label-field">
              Number of Guests
            </label>
            <select
              id="guests"
              name="guests"
              className="input-field"
              value={formData.guests}
              onChange={handleChange}
              disabled={isSubmitting}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="checkIn" className="label-field">
              Check-in Date <span className="text-terracotta" aria-hidden="true">*</span>
            </label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              className={`input-field ${errors.checkIn ? 'border-terracotta' : ''}`}
              required
              min={minDates.today}
              value={formData.checkIn}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={errors.checkIn ? 'true' : 'false'}
              aria-describedby={errors.checkIn ? 'checkin-error' : undefined}
            />
            {errors.checkIn && (
              <p id="checkin-error" className="text-terracotta text-sm mt-1" role="alert">{errors.checkIn}</p>
            )}
          </div>

          <div>
            <label htmlFor="checkOut" className="label-field">
              Check-out Date <span className="text-terracotta" aria-hidden="true">*</span>
            </label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              className={`input-field ${errors.checkOut ? 'border-terracotta' : ''}`}
              required
              min={formData.checkIn || minDates.tomorrow}
              value={formData.checkOut}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={errors.checkOut ? 'true' : 'false'}
              aria-describedby={errors.checkOut ? 'checkout-error' : undefined}
            />
            {errors.checkOut && (
              <p id="checkout-error" className="text-terracotta text-sm mt-1" role="alert">{errors.checkOut}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="label-field">
            Message <span className="text-terracotta" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            className={`input-field min-h-[150px] resize-y ${errors.message ? 'border-terracotta' : ''}`}
            required
            placeholder="Tell us about your trip — any special occasions, preferences, questions about the area, or rooms you're interested in..."
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-terracotta text-sm mt-1" role="alert">{errors.message}</p>
          )}
        </div>

        {errors.form && (
          <div className="bg-terracotta/10 border border-terracotta/30 text-terracotta p-4 text-sm" role="alert">
            {errors.form}
          </div>
        )}

        <button
          type="submit"
          className="btn-primary w-full md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Enquiry'}
        </button>

        <p className="caption text-center md:text-left">
          We typically respond within 24 hours. For urgent enquiries, call us at {phone}.
        </p>
      </form>

      {/* Success Toast */}
      {isSuccess && (
        <div
          id="success-toast"
          className="fixed bottom-8 right-8 bg-forest text-cream px-6 py-4 rounded-none shadow-lg z-50 animate-fade-in"
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>{enquirySuccessMessage}</span>
          </div>
        </div>
      )}
    </>
  )
}