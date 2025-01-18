'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Mail, Phone, Clock, Facebook, Twitter, Instagram, ArrowUpRight } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "6th Floor, Doctors Park Building, Near Aga Khan Hospital, 3rd Parklands Ave, Nairobi.",
    href: "https://maps.google.com"
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@gastroliverkenya.com",
    href: "mailto:info@gastroliverkenya.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0719 214991, 0797 463203",
    href: "tel:+254719214991"
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday - Friday: 9:00 AM - 5:00 PM",
    href: "/appointments"
  }
]

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Patient Info", href: "/patient-info" },
  { name: "Book Appointment", href: "/appointments" },
  { name: "Contact", href: "/contact" }
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" }
]

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, white 1px, transparent 1px),
          radial-gradient(circle at 0% 0%, white 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px'
      }} />

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                GastroClinic
              </h3>
            </Link>
            <p className="text-gray-400 mb-6">
              Expert gastroenterological care with a focus on patient comfort and well-being.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
                      hover:bg-primary-600 transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary-500 
                        group-hover:w-full transition-all duration-300" />
                    </span>
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1
                      group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0
                      transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-heading font-bold text-white mb-6">Contact Information</h4>
            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center
                        group-hover:bg-primary-600/10 transition-colors">
                        <Icon className="w-5 h-5 text-primary-400 group-hover:text-primary-500 transition-colors" />
                      </div>
                      <div>
                        <div className="font-medium text-white mb-1">{item.label}</div>
                        <div className="text-gray-400 text-sm leading-relaxed">{item.value}</div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} GastroClinic. All rights reserved.
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 