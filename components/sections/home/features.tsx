'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Microscope, Heart, Stethoscope, ArrowRight } from 'lucide-react'

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const features = [
    {
      title: "Expert Specialists",
      description: "Our board-certified gastroenterologists bring decades of combined experience in digestive health care.",
      icon: Stethoscope,
      color: "from-blue-500/20 to-cyan-500/20",
      accent: "bg-gradient-to-br from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      title: "Advanced Technology",
      description: "State-of-the-art diagnostic equipment and innovative treatment procedures for precise care.",
      icon: Microscope,
      color: "from-primary-500/20 to-primary-400/20",
      accent: "bg-gradient-to-br from-primary-500 to-primary-400",
      delay: 0.4
    },
    {
      title: "Compassionate Care",
      description: "Personalized attention and comprehensive support throughout your healthcare journey.",
      icon: Heart,
      color: "from-rose-500/20 to-pink-500/20",
      accent: "bg-gradient-to-br from-rose-500 to-pink-500",
      delay: 0.6
    },
  ]

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Medical Background Pattern */}
      <div className="absolute inset-0 bg-gray-50">
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{ y }}
        >
          {/* Digestive System Pattern */}
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 50%, #005B94 2px, transparent 2.5px),
                radial-gradient(circle at 50% 50%, #005B94 1.5px, transparent 2px),
                radial-gradient(circle at 50% 50%, rgba(0, 91, 148, 0.3) 12px, transparent 13px)
              `,
              backgroundSize: '50px 50px, 90px 90px, 120px 120px',
              backgroundPosition: '0 0, 25px 25px, -30px -30px'
            }}
          />
          
          {/* Medical Cross Pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, transparent 48%, #005B94 48%, #005B94 52%, transparent 52%),
                linear-gradient(to bottom, transparent 48%, #005B94 48%, #005B94 52%, transparent 52%)
              `,
              backgroundSize: '60px 60px',
              animation: 'pulse 8s ease-in-out infinite'
            }}
          />

          {/* DNA Helix Suggestion */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 45%, #005B94 45%, #005B94 55%, transparent 55%),
                linear-gradient(-45deg, transparent 45%, #005B94 45%, #005B94 55%, transparent 55%)
              `,
              backgroundSize: '120px 120px',
              animation: 'pulse 6s linear infinite alternate'
            }}
          />
        </motion.div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-3 h-3 rounded-full bg-primary-500 animate-ping mr-2" />
            <span className="text-primary-600 font-medium">Advanced Healthcare</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              GastroClinic
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              className="group relative"
            >
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-b ${feature.color} 
                blur-xl group-hover:blur-2xl transition-all duration-500
                before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_120%,white,transparent)]
                before:rounded-3xl`} />
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full
                border border-gray-200/50 shadow-xl
                transform transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-2xl ${feature.accent}
                  flex items-center justify-center mb-8 
                  shadow-lg transform transition-transform duration-500
                  group-hover:scale-110 group-hover:rotate-[3deg]
                  relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.4),transparent)]" />
                  <feature.icon className="w-8 h-8 text-white relative z-10" />
                </div>

                <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="flex items-center text-primary-500 font-medium
                  group-hover:text-primary-600 transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 transform transition-transform
                    group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 