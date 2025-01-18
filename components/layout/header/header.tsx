'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { NavMenu } from './nav-menu'
import { Phone, Clock, MapPin, ChevronRight, Activity, Heart, LogIn, UserPlus, Calendar } from 'lucide-react'

export function Header() {
  return (
    <>
      {/* Top Info Bar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-[#5e5898] to-[#4a4578] text-white py-2 relative overflow-hidden"
      >
        {/* Animated Medical Cross Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 medical-pattern animate-slide" />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Mon-Fri: 8:00-17:00</span>
              </div>
              <div className="hidden sm:flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Gastro Liver Clinic Kenya.</span>
              </div>
            </div>
            <div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-white/10 rounded-full px-4 py-1"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">Emergency: (254) 0719 214991, 0797 463203</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white border-b border-gray-100 sticky top-0 z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute -inset-2 bg-[#5e5898]/10 rounded-full blur-lg opacity-60"
                />
                <div className="relative">
                  <Activity className="w-8 h-8 text-[#5e5898]" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#5e5898]">GASTRO & LIVER</h1>
                <div className="text-xs text-[#5e5898]/80 -mt-1 font-medium tracking-wider">CENTRE</div>
              </div>
            </Link>

            {/* Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavMenu />
            </div>

            {/* Auth & CTA Section */}
            <div className="flex items-center">
              {/* Desktop Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                {/* Sign In Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/signin"
                    className="flex items-center px-4 py-2 text-[#5e5898] hover:text-[#4a4578] transition-colors"
                  >
                    <LogIn className="w-4 h-4 mr-1.5" />
                    <span>Sign In</span>
                  </Link>
                </motion.div>

                {/* Register Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/register"
                    className="flex items-center px-4 py-2 text-gray-600 hover:text-[#5e5898] transition-colors"
                  >
                    <UserPlus className="w-4 h-4 mr-1.5" />
                    <span>Register</span>
                  </Link>
                </motion.div>

                {/* Heartbeat Animation */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1, 0.9, 1],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                >
                  <Heart className="w-5 h-5 text-[#5e5898]" />
                </motion.div>

                {/* Book Appointment Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/appointments"
                    className="bg-[#5e5898] text-white px-6 py-2.5 rounded-xl flex items-center group hover:bg-[#4a4578] transition-all shadow-lg shadow-[#5e5898]/20 hover:shadow-[#5e5898]/30"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">Book Appointment</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              {/* Mobile Buttons */}
              <div className="flex md:hidden items-center space-x-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/auth"
                    className="p-2 rounded-full bg-[#5e5898]/10 text-[#5e5898] hover:bg-[#5e5898]/20 transition-colors"
                  >
                    <LogIn className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/appointments"
                    className="flex items-center space-x-1 bg-[#5e5898] text-white px-3 py-2 rounded-full hover:bg-[#4a4578] transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">Book</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="h-0.5 bg-gray-100 relative">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#5e5898] to-[#4a4578]"
            animate={{
              width: ['0%', '100%'],
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.header>
    </>
  )
} 