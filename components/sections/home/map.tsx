'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Navigation, Phone } from 'lucide-react'
import Link from 'next/link'

export function MapSection() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.8])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative h-full rounded-3xl overflow-hidden shadow-xl border border-gray-100/50"
    >
      {/* Floating Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="absolute top-4 left-4 right-4 md:right-auto md:w-72 lg:w-80 z-10"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 lg:p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-primary-50 flex items-center justify-center">
              <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-primary-500" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-gray-900 text-sm lg:text-base">Our Location</h3>
              <p className="text-xs lg:text-sm text-gray-600">Find us here</p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
              6th Floor, Doctors Park Building,<br />
              Near Aga Khan Hospital,<br />
              3rd Parklands Ave, Nairobi.
            </p>

            <div className="flex gap-2">
              <Link
                href="https://maps.google.com"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 
                  bg-primary-600 hover:bg-primary-700 text-white text-xs lg:text-sm font-medium 
                  rounded-lg transition-colors"
              >
                <Navigation className="w-3 h-3 lg:w-4 lg:h-4" />
                Get Directions
              </Link>
              
              <Link
                href="tel:+254719214991"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 
                  bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs lg:text-sm font-medium 
                  rounded-lg transition-colors"
              >
                <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
                Call
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Map Container */}
      <motion.div 
        style={{ scale }}
        className="relative w-full h-full min-h-[400px] lg:min-h-[500px]"
      >
        {/* Custom Map Overlay */}
        <div className="absolute inset-0 bg-primary-50/10 mix-blend-multiply" />
        
        {/* Animated Pin */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-primary-500/20 rounded-full animate-ping" />
            <div className="relative w-6 h-6 bg-primary-500 rounded-full border-3 border-white shadow-lg" />
          </div>
        </motion.div>

        {/* Map iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8166139419216!2d36.8176!3d-1.2627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTUnNDUuNyJTIDM2wrA0OScwMy40IkU!5e0!3m2!1sen!2sus!4v1635774243221!5m2!1sen!2sus"
          className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </motion.div>
  )
} 