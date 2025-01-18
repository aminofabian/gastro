'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Phone, Mail, MapPin, Clock, Activity, Heart, 
  Facebook, Twitter, Instagram, Youtube, ArrowRight,
  Stethoscope, Microscope, Pill, ShieldCheck, Waves,
  Syringe, Dna,
  AlignVerticalDistributeStart, 
} from 'lucide-react'

export function Footer() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1])
  const scale = useTransform(scrollYProgress, [0.7, 1], [0.8, 1])

  // Interactive DNA Animation
  const dnaElements = Array.from({ length: 5 }).map((_, i) => ({
    y: i * 40,
    delay: i * 0.2,
  }))

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Animated Medical Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#5e5898]/5 to-white">
        {/* DNA Structure Animation */}
        <div className="absolute inset-0 opacity-10">
          {dnaElements.map((el, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0"
              style={{ top: el.y }}
              animate={{
                x: [-20, 20],
                rotateZ: [0, 360],
              }}
              transition={{
                duration: 8,
                delay: el.delay,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Dna className="w-8 h-8 text-[#5e5898]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Top Section with 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Microscope,
              title: "Expert Diagnosis",
              description: "State-of-the-art gastroenterology diagnostics",
              color: "from-[#5e5898]/20 to-[#5e5898]/5"
            },
            {
              icon: AlignVerticalDistributeStart,
              title: "Specialized Care",
              description: "Comprehensive liver and digestive health solutions",
              color: "from-[#5e5898]/30 to-[#5e5898]/10"
            },
            {
              icon: Syringe,
              title: "Advanced Treatment",
              description: "Cutting-edge therapeutic approaches",
              color: "from-[#5e5898]/20 to-[#5e5898]/5"
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                z: 50 
              }}
              className="relative group perspective"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.color} 
                transform group-hover:scale-105 transition-transform duration-300`} />
              <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#5e5898]/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#5e5898]/20 rounded-full blur-lg animate-pulse" />
                    <div className="relative w-12 h-12 rounded-full bg-[#5e5898]/10 flex items-center justify-center">
                      <card.icon className="w-6 h-6 text-[#5e5898]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#5e5898]">{card.title}</h3>
                </div>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact and Newsletter Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-[#5e5898]/5 rounded-3xl transform rotate-1" />
          <div className="relative grid md:grid-cols-2 gap-8 p-8 bg-white/50 backdrop-blur-sm rounded-3xl">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold text-[#5e5898]"
              >
                Connect With Us
              </motion.h2>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: '(254) 0719 214991, 0797 463203', href: 'tel:+254719214991' },
                  { icon: Mail, text: 'info@gastrolivercenter.com', href: 'mailto:info@gastrolivercenter.com' },
                  { icon: MapPin, text: '123 Gastro Liver Clinic Kenya.', href: '#' },
                  { icon: Clock, text: 'Mon-Fri: 8:00-17:00', href: '#' },
                ].map(({ icon: Icon, text, href }) => (
                  <motion.a
                    key={text}
                    href={href}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#5e5898]/20 rounded-full blur-md 
                        group-hover:scale-150 transition-transform" />
                      <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center
                        border border-[#5e5898]/20 group-hover:border-[#5e5898] transition-colors">
                        <Icon className="w-5 h-5 text-[#5e5898]" />
                      </div>
                    </div>
                    <span className="text-gray-600 group-hover:text-[#5e5898] transition-colors">{text}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-[#5e5898]/10"
              >
                <div className="absolute -top-6 right-6">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="w-12 h-12 rounded-full bg-[#5e5898] flex items-center justify-center"
                  >
                    <Heart className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-[#5e5898] mb-4">Health Updates</h3>
                <p className="text-gray-600 mb-6">
                  Subscribe for the latest in gastroenterology care
                </p>
                <form className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-xl border border-[#5e5898]/20 focus:ring-2 
                        focus:ring-[#5e5898]/20 focus:border-[#5e5898] bg-white"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute right-2 top-2 px-4 py-1.5 bg-[#5e5898] text-white rounded-lg
                        flex items-center space-x-2 hover:bg-[#4a4578] transition-colors"
                    >
                      <span>Join</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {[
            { icon: Facebook, href: '#', label: 'Facebook' },
            { icon: Twitter, href: '#', label: 'Twitter' },
            { icon: Instagram, href: '#', label: 'Instagram' },
            { icon: Youtube, href: '#', label: 'YouTube' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <span className="sr-only">{label}</span>
              <div className="absolute inset-0 bg-[#5e5898]/20 rounded-full blur-lg 
                group-hover:scale-150 transition-transform" />
              <div className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center
                border border-[#5e5898]/20 group-hover:border-[#5e5898] transition-colors">
                <Icon className="w-6 h-6 text-[#5e5898]" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5e5898]/30 to-transparent" />
          <div className="pt-8 flex flex-wrap justify-between items-center gap-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-600"
            >
              © {new Date().getFullYear()} GASTRO & LIVER CENTRE. All rights reserved.
            </motion.p>
            <div className="flex flex-wrap gap-8">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-gray-500 hover:text-[#5e5898] transition-colors relative group"
                >
                  <span>{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5e5898] 
                    group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 