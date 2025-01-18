'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Activity, Shield, Stethoscope, Heart, Award, Microscope, Pill } from 'lucide-react'
import { useState, useEffect } from 'react'

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // DNA-like floating particles for medical theme
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10
  }))

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.05,
        y: (e.clientY - window.innerHeight / 2) * 0.05
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const digestiveIcons = [
    { icon: '🫁', label: 'Endoscopy' },
    { icon: '🔬', label: 'Diagnosis' },
    { icon: '💊', label: 'Treatment' },
    { icon: '🩺', label: 'Check-up' }
  ]

  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Medical-themed Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white">
        {/* DNA Helix Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Floating Medical Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full bg-primary-300/20"
            animate={{
              x: [particle.x + '%', (particle.x + 10) + '%'],
              y: [particle.y + '%', (particle.y + 10) + '%'],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              width: particle.size,
              height: particle.size
            }}
          />
        ))}

        {/* Responsive Gradient Orbs */}
        <motion.div
          className="absolute right-0 top-0 -translate-y-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -1,
            y: mousePosition.y * -1,
          }}
          transition={{ type: 'spring', stiffness: 50 }}
        />
      </div>

      <motion.div style={{ opacity }} className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Gastro Specialty Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-primary-100 bg-primary-50/50 text-primary-600 mb-6 cursor-pointer"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <Microscope className="w-4 h-4 mr-2" />
              </motion.div>
              <span className="text-sm font-medium">Advanced Gastroenterology Care</span>
            </motion.div>

            {/* Dynamic Heading */}
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Expert Care for
              <motion.span
                className="relative mx-2 inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-blue-500 to-primary-400">
                  Digestive Health
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-blue-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              State-of-the-art digestive care with comprehensive diagnosis, treatment, 
              and prevention services by board-certified gastroenterologists.
            </p>

            {/* Service Icons */}
            <div className="flex gap-6 mb-8">
              {digestiveIcons.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-2xl mb-2"
                  >
                    {item.icon}
                  </motion.div>
                  <div className="text-xs text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/appointments"
                  className="group relative inline-flex items-center px-8 py-4 rounded-xl bg-primary-600 text-white overflow-hidden"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-600"
                    initial={false}
                    animate={{
                      x: isHovering ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative flex items-center">
                    <Stethoscope className="w-5 h-5 mr-2" />
                    Book Consultation
                    <motion.div
                      className="ml-2"
                      animate={{ x: isHovering ? 5 : 0 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Gastro-specific Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Shield, label: 'Successful Procedures', value: '10K+', color: 'from-green-500 to-emerald-400' },
                { icon: Pill, label: 'Treatment Options', value: '50+', color: 'from-blue-500 to-primary-400' },
                { icon: Heart, label: 'Patient Satisfaction', value: '98%', color: 'from-red-500 to-rose-400' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl
                      bg-gradient-to-br ${stat.color} text-white mb-3 shadow-lg`}
                  >
                    <stat.icon className="w-7 h-7" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, delay: index * 0.2 + 0.3 }}
                    className="text-2xl font-bold text-gray-900"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.02}deg) rotateX(${mousePosition.y * -0.02}deg)`,
            }}
          >
            {/* Enhanced Background Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-primary-400/5 to-primary-500/10 rounded-[40px] blur-2xl" />
            <div className="absolute -inset-4 bg-gradient-to-b from-primary-500/10 via-blue-400/5 to-blue-500/10 rounded-[40px] blur-2xl animate-pulse" />
            
            {/* Main Image Container with Better Styling */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-100 to-blue-50 shadow-2xl">
              {/* Decorative Corner Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/70 rounded-tr-2xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/70 rounded-bl-2xl" />
              
              {/* Main Image Wrapper */}
              <div className="relative group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/office.png"
                    alt="Gastroenterology Clinic"
                    height={480}
                    width={600}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                    priority
                  />
                  
                  {/* Enhanced Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-primary-900/20 to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-transparent" />
                  
                  {/* Medical Scan Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
                    animate={{
                      y: ['0%', '200%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  {/* Interactive Feature Points */}
                  {[
                    { top: '25%', left: '20%', label: 'Advanced Endoscopy', icon: '🔬' },
                    { top: '45%', left: '75%', label: 'Expert Specialists', icon: '👨‍⚕️' },
                    { top: '70%', left: '30%', label: 'Modern Equipment', icon: '🏥' },
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-4 h-4"
                      style={{ top: point.top, left: point.left }}
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      <div className="relative group/point cursor-pointer">
                        {/* Pulsing Point */}
                        <div className="absolute inset-0 bg-white/80 rounded-full animate-ping" />
                        <div className="relative w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary-500" />
                        </div>
                        {/* Enhanced Tooltip */}
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          whileHover={{ opacity: 1, y: 0, scale: 1 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-4 py-2 bg-white rounded-xl text-sm text-primary-600 whitespace-nowrap shadow-xl border border-primary-100 z-10"
                        >
                          <div className="flex items-center gap-2">
                            <span>{point.icon}</span>
                            <span className="font-medium">{point.label}</span>
                          </div>
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-t border-l border-primary-100" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Floating Cards */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-green-500 animate-ping absolute" />
                  <div className="w-4 h-4 rounded-full bg-green-500 relative" />
                </div>
                <div>
                  <div className="font-medium text-base">Available Today</div>
                  <div className="text-green-600 text-sm font-medium">Quick Appointments</div>
                </div>
              </div>
            </motion.div>

            {/* New Achievement Card */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-50 rounded-xl">
                  <Award className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <div className="font-medium text-primary-600">Top Rated</div>
                  <div className="text-green-500 font-bold text-sm">Excellence in Care</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 