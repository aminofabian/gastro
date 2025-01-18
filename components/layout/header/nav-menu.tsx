'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/doctors', label: 'Our Doctors' },
  { href: '/patient-info', label: 'Patient Info' },
  { href: '/contact', label: 'Contact' },
]

export function NavMenu() {
  const pathname = usePathname()
  
  return (
    <nav className="hidden lg:flex items-center gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              relative py-2 text-sm font-medium transition-colors
              ${isActive 
                ? 'text-primary-600' 
                : 'text-gray-600 hover:text-primary-600'
              }
              group
            `}
          >
            {link.label}
            <span className={`
              absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 transform origin-left
              transition-transform duration-200 ease-out
              ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
            `} />
          </Link>
        )
      })}
    </nav>
  )
} 