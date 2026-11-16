import { NextRequest, NextResponse } from 'next/server'
import { fetchSanity } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'
import type { SiteSettings } from '@/lib/types'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      checkIn: formData.get('checkIn') as string,
      checkOut: formData.get('checkOut') as string,
      guests: formData.get('guests') as string,
      roomPreference: formData.get('roomPreference') as string,
      message: formData.get('message') as string,
    }

    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.checkIn || !data.checkOut || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Date validation
    const checkInDate = new Date(data.checkIn)
    const checkOutDate = new Date(data.checkOut)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (checkInDate < today) {
      return NextResponse.json(
        { error: 'Check-in date cannot be in the past' },
        { status: 400 }
      )
    }

    if (checkOutDate <= checkInDate) {
      return NextResponse.json(
        { error: 'Check-out date must be after check-in date' },
        { status: 400 }
      )
    }

    // Fetch booking email from Sanity
    const settings = await fetchSanity<SiteSettings>(siteSettingsQuery)
    const bookingEmail = settings?.bookingEmail || 'bookings@nilgirihouse.com'

    // In a real application, you would send an email here using a service like:
    // - Nodemailer with SMTP
    // - SendGrid, Mailgun, Resend, etc.
    // - Or save to a database

    // For now, log the enquiry (in production, replace with actual email sending)
    console.log('=== NEW ENQUIRY ===')
    console.log('Name:', data.name)
    console.log('Email:', data.email)
    console.log('Phone:', data.phone)
    console.log('Check-in:', data.checkIn)
    console.log('Check-out:', data.checkOut)
    console.log('Guests:', data.guests)
    console.log('Room Preference:', data.roomPreference || 'Not specified')
    console.log('Message:', data.message)
    console.log('Booking Email:', bookingEmail)
    console.log('==================')

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Enquiry sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Enquiry form error:', error)
    return NextResponse.json(
      { error: 'Failed to process enquiry. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}