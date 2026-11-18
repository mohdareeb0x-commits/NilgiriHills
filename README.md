# Nilgiri House — Boutique Hotel Website

A marketing + booking-inquiry website for a fictional 6-room boutique hotel in the Nilgiri hills, South India. Built as a portfolio piece demonstrating editable, client-handoff-ready websites using Next.js 14, Sanity CMS, and Tailwind CSS.

## Design Concept

*A slow-travel journal brought to life: each page feels like a spread from a beautifully shot travel magazine, where misty Nilgiri hills and warm stone interiors do the storytelling, and the interface quietly gets out of the way.*

### Color Palette
- **Terracotta** (`#C6705B`) — Primary accent (CTAs, prices, hovers)
- **Forest Green** (`#2D4739`) — Headlines, nav, grounding
- **Warm Cream** (`#F5F0E8`) — Page background
- **Charcoal** (`#2C2C2C`) — Body text
- **Muted Sage** (`#8B9A8B`) — Subtle UI/borders

### Typography
- **Headlines**: Fraunces Variable (warm editorial serif with SOFT axis)
- **Body/UI**: DM Sans Variable (clean humanist sans)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **CMS**: Sanity (headless)
- **Deployment**: Vercel
- **Images**: next/image + Sanity CDN
- **Forms**: API Routes (Next.js)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Sanity account (for CMS)

### Installation

```bash
# Clone and install dependencies
cd nilgiri-house
npm install

# Copy environment variables
cp .env.example .env.local
```

### Environment Variables

Edit `.env.local` with your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token-for-preview
SANITY_API_WRITE_TOKEN=your-api-token-with-editor-permissions  # Required for migration script
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Development

```bash
# Start Next.js dev server (includes Sanity Studio)
npm run dev
```

Visit `http://localhost:3000` for the website and `http://localhost:3000/studio` for Sanity Studio (embedded in the app).

### Sanity Setup

1. Create a new Sanity project at `sanity.io`
2. Run `npx sanity init` in the project root (select "Use existing project" if already created)
3. Deploy the schema: `npx sanity deploy`
4. Add the project ID and dataset to `.env.local`

The schema includes:
- **Room** — 6 rooms with rich descriptions, galleries, amenities
- **Home Page** — Hero, story, featured rooms, testimonial, CTA
- **Testimonial** — Guest quotes with photos
- **Site Settings** — Singleton with all contact/social/SEO config

### Seed Data

To populate Sanity with demo content, run the migration script (requires `SANITY_API_WRITE_TOKEN` in `.env.local` with Editor permissions):

```bash
node scripts/migrate-content.mjs
```

This uploads all images and creates documents for rooms, testimonials, home page, and site settings. Verify in Sanity Studio at `http://localhost:3000/studio` or `https://sanity.io/manage`.

## Project Structure

```
src/
├── app/
│   ├── api/enquiry/route.ts    # Contact form handler
│   ├── about/page.tsx          # Our Story page
│   ├── contact/page.tsx        # Enquiry form + info
│   ├── rooms/page.tsx          # Rooms listing
│   ├── rooms/[slug]/page.tsx   # Room detail pages
│   ├── layout.tsx              # Root layout with SEO
│   ├── page.tsx                # Homepage
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── robots.ts               # Robots.txt
│   └── not-found.tsx           # 404 page
├── components/
│   ├── Navigation.tsx          # Header with mobile menu
│   ├── Footer.tsx              # Footer with contact/social
│   ├── PortableText.tsx        # Sanity Portable Text renderer
│   └── SanityImage.tsx         # Optimized Sanity image component
├── lib/
│   ├── sanity.ts               # Sanity client + mock data fallback
│   ├── queries.ts              # GROQ queries
│   └── mock-data.ts            # Development fallback data
└── globals.css                 # Tailwind + design system
sanity/
├── schemas/                    # Sanity schema definitions
│   ├── room.ts
│   ├── homePage.ts
│   ├── testimonial.ts
│   ├── siteSettings.ts
│   └── index.ts
├── sanity.config.ts            # Sanity Studio config
└── sanity.cli.ts               # CLI config
```

## Key Features

### Content Editable by Non-Technical Users
- All content managed in Sanity Studio
- Clear field labels and descriptions
- Image hotspot/crop support
- Document previews in Studio list views
- Portable Text for rich content

### Performance Optimized
- next/image with Sanity CDN for optimized delivery
- Proper `sizes` attributes for responsive images
- Priority loading for above-fold images
- Blur placeholders (LQIP)
- Variable fonts with `display: swap`
- Target: Lighthouse 90+ across all metrics

### SEO Complete
- Dynamic metadata per page
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data (LodgingBusiness, HotelRoom, ItemList)
- Auto-generated sitemap.xml
- robots.txt
- Semantic HTML5

### Accessibility
- WCAG AA contrast ratios
- Semantic HTML landmarks
- Focus-visible styles
- ARIA labels and roles
- Alt text on all images
- Form validation with error announcements

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly interactions
- Optimized image sizes per breakpoint

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Sanity Studio

Deploy the Studio separately:
```bash
npx sanity deploy
```

This hosts the Studio at `https://nilgiri-house.sanity.studio`

## Design Decisions

### Not a Typical Hotel Booking Site
- **Editorial layout** — Alternating text/image sections, not card grids
- **Photography-first** — Full-bleed images break container grid
- **Slow motion** — 800ms crossfades, staggered reveals, no bouncy animations
- **Curated rooms** — 6 individually presented rooms, not templated cards
- **Travel magazine aesthetic** — Pull quotes, drop caps, captions, tabular numbers

### Sanity Studio UX
- Human-readable field labels (not `field_1`, `contentBlock`)
- Hotspot/crop on all images
- Preview thumbnails in document lists
- Portable Text for long-form content
- Singletons for Home Page and Site Settings (no hardcoded values)

## Scripts

```bash
npm run dev            # Start Next.js dev server (includes Sanity Studio at /studio)
npm run build          # Production build
npm run start          # Start production server
npm run lint           # Run ESLint
npm run deploy:sanity  # Deploy Sanity Studio to sanity.studio
node scripts/migrate-content.mjs  # Populate Sanity with demo content
```

## License

MIT — Feel free to use as a reference for your own projects.