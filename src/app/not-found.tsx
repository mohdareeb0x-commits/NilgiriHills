import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 section-wide">
      <div className="max-w-md text-center animate-fade-in">
        <h1 className="font-display text-8xl md:text-12xl font-medium text-forest/20 mb-4" aria-hidden="true">
          404
        </h1>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest mb-6">
          Page Not Found
        </h2>
        <p className="font-body text-lg text-charcoal/70 mb-10">
          The path you're looking for doesn't exist. Perhaps you've wandered off the trail?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex">
            Back Home
          </Link>
          <Link href="/rooms" className="btn-secondary inline-flex">
            View Rooms
          </Link>
        </div>
      </div>
    </div>
  )
}