'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/doctors', label: 'Our Doctors' },
    { href: '/patient-info', label: 'Patient Info' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-white shadow-xl z-50 p-6"
            >
              <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium ${
                      pathname === link.href
                        ? 'text-primary-600'
                        : 'text-gray-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <hr className="my-4" />
                <Link
                  href="/appointments"
                  onClick={() => setIsOpen(false)}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg text-center font-medium"
                >
                  Book Appointment
                </Link>
                <div className="flex gap-4">
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 text-center py-2 text-gray-600"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 bg-primary-50 text-primary-600 py-2 rounded-lg text-center"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
} 