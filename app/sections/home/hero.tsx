import Link from 'next/link'

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Expert Gastroenterological Care for Your Well-being
          </h1>
          <p className="text-xl mb-8 text-primary-50">
            Leading specialists providing comprehensive digestive health services with 
            compassionate care and advanced treatment options.
          </p>
          <div className="space-x-4">
            <Link 
              href="/appointments"
              className="bg-white text-primary-500 px-6 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors"
            >
              Book Appointment
            </Link>
            <Link 
              href="/services"
              className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 