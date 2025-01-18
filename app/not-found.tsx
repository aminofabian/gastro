'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Activity, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Medical Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="inline-flex items-center justify-center mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 bg-[#5e5898]/20 rounded-full blur-xl"
            />
            <div className="relative w-24 h-24 rounded-full bg-[#5e5898]/10 flex items-center justify-center">
              <Activity className="w-12 h-12 text-[#5e5898]" />
            </div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for seems to be missing. 
            Let's get you back to feeling better.
          </p>
        </motion.div>

        {/* DNA Helix Animation */}
        <div className="relative h-16 mb-8">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2"
              style={{
                top: `${i * 20}%`,
              }}
              animate={{
                x: ['-50%', '50%', '-50%'],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              <div className="w-2 h-2 rounded-full bg-[#5e5898]/30" />
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-[#5e5898] text-white 
                shadow-lg shadow-[#5e5898]/20 hover:bg-[#4a4578] transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              <span>Return Home</span>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/appointments"
              className="inline-flex items-center px-6 py-3 rounded-xl border border-[#5e5898]/20 
                text-[#5e5898] hover:bg-[#5e5898]/5 transition-colors group"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${20 + i * 30}%`,
                left: `${10 + i * 40}%`,
              }}
              animate={{
                y: [0, 20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
              }}
            >
              <div className="w-32 h-32 rounded-full bg-[#5e5898]/5 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 