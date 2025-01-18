'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Mail, Phone, Clock, ArrowRight, Building2, Send } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { MapSection } from './map'

const contactInfo = [
  {
    icon: Building2,
    title: "Visit Us",
    details: "6th Floor, Doctors Park Building, Near Aga Khan Hospital, 3rd Parklands Ave, Nairobi.",
    action: "Get Directions",
    href: "https://maps.google.com",
    color: "from-blue-500 to-blue-400"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@gastroliverkenya.com",
    action: "Send Email",
    href: "mailto:info@gastroliverkenya.com",
    color: "from-primary-500 to-primary-400"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "0719 214991, 0797 463203",
    action: "Call Now",
    href: "tel:+254719214991",
    color: "from-green-500 to-green-400"
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: "Monday to Friday\n9:00 am to 5:00 pm",
    action: "Book Appointment",
    href: "/appointments",
    color: "from-amber-500 to-amber-400"
  }
]

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    
    // Add your form submission logic here
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      setFormStatus('success')
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1000)
  }

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Interactive Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        {/* DNA Helix Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, #005B94 0px, #005B94 2px, transparent 2px, transparent 8px),
            repeating-linear-gradient(-45deg, #005B94 0px, #005B94 2px, transparent 2px, transparent 8px)
          `,
          backgroundSize: '16px 16px',
          animation: 'moveBackground 30s linear infinite'
        }} />
        {/* Floating Particles */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary-500/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite ${Math.random() * 5}s`
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Title Section with Pulse Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16 relative"
        >
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24">
            <div className="absolute inset-0 bg-primary-500/10 rounded-full animate-ping" />
            <div className="absolute inset-0 bg-primary-500/20 rounded-full animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-clip-text text-transparent 
            bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            We love helping our patients feel healthy and happy.
          </p>
          <p className="text-lg text-gray-600">
            Please contact us with any questions or to book an appointment.
          </p>
        </motion.div>

        {/* Contact Cards with 3D Effect */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, rotateX: -30 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="group relative transform-gpu"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 
                  backdrop-blur-xl rounded-2xl transition-all duration-300
                  group-hover:shadow-2xl border border-gray-100/50" />
                
                <div className="relative p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} 
                    flex items-center justify-center mb-4 group-hover:scale-110 
                    transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 whitespace-pre-line">
                    {item.details}
                  </p>
                  
                  <Link 
                    href={item.href}
                    className="inline-flex items-center text-primary-600 font-medium
                      group-hover:text-primary-700 transition-colors relative"
                  >
                    <span className="relative">
                      {item.action}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 
                        scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Map and Form Section */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Map */}
          <MapSection />

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-blue-50/30 
              rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 
              shadow-soft border border-gray-100/50 transition-all duration-300
              hover:shadow-xl hover:bg-white/95">
              <h3 className="text-2xl font-heading font-bold mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 
                        focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 
                        focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="0712 345 678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 
                      focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 
                      focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full px-6 py-3 rounded-xl bg-primary-600 text-white font-medium
                    hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 transition-all
                    disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      Message Sent Successfully
                      <span className="text-green-300">✓</span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 