'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, Stethoscope, Calendar, Phone } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/services', label: 'Services', icon: Stethoscope },
  { href: '/appointments', label: 'Book Now', icon: Calendar, primary: true },
  { href: '/patient-info', label: 'Profile', icon: User },
  { href: '/contact', label: 'Contact', icon: Phone }
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <div className="container lg:hidden fixed bottom-0 left-0 right-0 z-50">
      <div className="absolute inset-x-0 -top-12 h-12 bg-gradient-to-t from-gray-900 to-transparent" />
      
      <div className="relative bg-gray-900 border-t border-gray-800">
        <div className="flex items-center justify-around h-20">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center relative
                  ${item.primary ? '-mt-10' : 'px-5 py-2'}
                  group
                `}
              >
                {item.primary ? (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full
                      bg-gradient-to-tr from-primary-600 via-primary-500 to-primary-400
                      shadow-lg shadow-primary-500/30 ring-4 ring-gray-900
                      group-hover:shadow-primary-500/50 group-hover:scale-105 transition-all">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-medium text-white mt-1 opacity-90">
                      {item.label}
                    </span>
                  </div>
                ) : (
                  <>
                    <div className={`p-2 rounded-xl transition-all duration-200
                      ${isActive 
                        ? 'bg-gray-800 text-primary-400 shadow-inner' 
                        : 'text-gray-400 group-hover:text-gray-300 group-hover:bg-gray-800/50'
                      }
                    `}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs mt-1 font-medium transition-colors duration-200
                      ${isActive 
                        ? 'text-primary-400' 
                        : 'text-gray-400 group-hover:text-gray-300'
                      }
                    `}>
                      {item.label}
                    </span>
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 
                        h-0.5 w-12 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
                    )}
                  </>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
} 