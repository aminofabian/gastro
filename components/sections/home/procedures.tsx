'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const procedures = [
  {
    title: "Upper Endoscopy",
    description: "A procedure to examine the upper digestive system using a flexible tube with a camera.",
    steps: [
      "Pre-procedure consultation",
      "Fasting for 6-8 hours",
      "Sedation administration",
      "Procedure (15-30 minutes)",
      "Recovery and monitoring"
    ],
    images: [
       "/c.avif",
      "/d.avif"
    ]
  },
  {
    title: "Colonoscopy",
    description: "Examination of the large intestine using a flexible colonoscope.",
    steps: [
      "Initial consultation",
      "Bowel preparation",
      "Procedure setup",
      "Examination (30-60 minutes)",
      "Post-procedure care"
    ],
    images: [
        "/a.avif",
        "/b.avif",
      ]
  }
]

const ImageSlider = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent z-10" />
      
      {images.map((image, index) => (
        <motion.div
          key={image}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={`${title} - Image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      ))}

      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20 
        opacity-0 group-hover:opacity-100 transition-opacity">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentIndex((current) => 
            current === 0 ? images.length - 1 : current - 1
          )}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg 
            flex items-center justify-center text-gray-700 hover:text-primary-600 
            transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentIndex((current) => 
            (current + 1) % images.length
          )}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg 
            flex items-center justify-center text-gray-700 hover:text-primary-600 
            transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-primary-500 w-6' 
                : 'bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function ProceduresSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Medical Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,91,148,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Endoscopy Procedures
            </h2>
            <p className="text-xl text-gray-600">
              State-of-the-art procedures performed with expertise and care
            </p>
          </motion.div>
        </div>

        {/* Procedures Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {procedures.map((procedure, index) => (
              <motion.div
                key={procedure.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Procedure Card */}
                <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
                  <ImageSlider 
                    images={procedure.images} 
                    title={procedure.title}
                  />

                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    {procedure.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {procedure.description}
                  </p>

                  {/* Steps Timeline */}
                  <div className="space-y-4">
                    {procedure.steps.map((step, stepIndex) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: stepIndex * 0.1 }}
                        className="relative pl-8"
                      >
                        {/* Timeline Line */}
                        {stepIndex !== procedure.steps.length - 1 && (
                          <div className="absolute left-[15px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-100" />
                        )}
                        
                        {/* Step Circle */}
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary-50 
                          flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-primary-500" />
                        </div>

                        {/* Step Content */}
                        <div className="bg-gray-50 rounded-xl p-4">
                          <p className="text-gray-700 font-medium">{step}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Connecting Line between Cards */}
                {index === 0 && (
                  <div className="hidden md:block absolute -right-6 top-1/2 w-12 h-0.5 bg-primary-200">
                    <div className="absolute right-0 -top-1.5 w-4 h-4 bg-primary-500 rounded-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-heading font-bold text-gray-900">
                  State-of-the-Art Facilities
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-primary-500" />
                    Fully equipped endoscopy theatre
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-primary-500" />
                    Comfortable recovery rooms
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-primary-500" />
                    World-class expertise
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-heading font-bold text-gray-900">
                  Insurance Coverage
                </h4>
                <p className="text-gray-700">
                  Most procedures are covered by insurance under your in-patient plan. 
                  We've partnered with major insurance providers to ensure accessible care.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 