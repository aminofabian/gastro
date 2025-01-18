import Link from 'next/link'

export function UserMenu() {
  return (
    <div className="flex items-center gap-4">
      <Link 
        href="/login" 
        className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors border p-2 rounded-lg"
      >
        Sign In
      </Link>
      <Link 
        href="/register" 
        className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium
          text-white bg-primary-600 rounded-lg hover:bg-primary-700 
          transition-colors duration-200 shadow-sm hover:shadow
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Register
      </Link>
      
      <Link
        href="/appointments"
        className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium
          text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Book Appointment
      </Link>
    </div>
  )
} 