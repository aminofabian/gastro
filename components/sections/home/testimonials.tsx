'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Activity, HeartPulse, Stethoscope, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: "Sarah Maina",
    role: "Patient",
    image: "https://i.pravatar.cc/150?img=34",
    content: "The level of care and attention I received was exceptional. Dr. Thompson took the time to explain everything thoroughly.",
    rating: 5,
    treatment: "Endoscopy",
    date: "2 months ago",
    icon: Activity,
    satisfaction: 98
  },
  {
    name: "Michael Ng'etich",
    role: "Patient",
    image: "https://i.pravatar.cc/150?img=51",
    content: "After struggling with digestive issues for years, the team here finally helped me find relief. I'm incredibly grateful.",
    rating: 5,
    treatment: "IBS Treatment",
    date: "1 month ago",
    icon: HeartPulse,
    satisfaction: 95
  },
  {
    name: "Emily Thuo",
    role: "Patient",
    image: "https://i.pravatar.cc/150?img=46",
    content: "The entire staff is professional and caring. They made a stressful situation much more manageable.",
    rating: 5,
    treatment: "Colonoscopy",
    date: "3 weeks ago",
    icon: Stethoscope,
    satisfaction: 97
  }
]

export function TestimonialsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Lab Report Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#FAFAFA] bg-opacity-90" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 39px, #E6E6E6 39px, #E6E6E6 40px, transparent 40px),
            linear-gradient(#E6E6E6 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full 
            border border-primary-100 bg-primary-50/50 text-primary-600 mb-6">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Patient Satisfaction Rate: 96.7%</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Patient Testimonials
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon
            return (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                {/* Lab Report Card */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100
                  hover:shadow-xl transition-all duration-300 relative">
                  {/* Report Header */}
                  <div className="bg-primary-500 text-white p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{testimonial.treatment}</span>
                      </div>
                      <div className="text-sm opacity-75">{testimonial.date}</div>
                    </div>
                  </div>

                  {/* Patient Details */}
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-0 bg-primary-100 rounded-full" />
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover rounded-full p-0.5"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg text-gray-900">
                          {testimonial.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex gap-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">• Verified Patient</span>
                        </div>
                      </div>
                    </div>

                    {/* Satisfaction Meter */}
                    <div className="mt-6 mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Satisfaction Level</span>
                        <span className="text-primary-600 font-medium">{testimonial.satisfaction}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                          style={{ width: `${testimonial.satisfaction}%` }}
                        />
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="mt-6 relative">
                      <Quote className="absolute -top-2 -left-1 w-6 h-6 text-primary-100 rotate-180" />
                      <p className="text-gray-600 leading-relaxed pl-6">
                        {testimonial.content}
                      </p>
                    </div>
                  </div>

                  {/* Report Footer */}
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Report ID: #{(index + 1).toString().padStart(4, '0')}</span>
                      <span>GastroClinic™</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 