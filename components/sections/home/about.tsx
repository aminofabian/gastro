'use client'

import { motion } from 'framer-motion'
import { Microscope, Users, Building2, Shield, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    icon: Microscope,
    title: "Modern Facilities",
    description: "Spacious endoscopy suites equipped with state-of-the-art technology for various procedures."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Led by consultant physician gastroenterologists and specialized endoscopy nurses."
  },
  {
    icon: Building2,
    title: "Comprehensive Care",
    description: "Complete digestive system care, from diagnosis to treatment and follow-up."
  },
  {
    icon: Shield,
    title: "Insurance Partners",
    description: "Partnered with leading insurance providers for your convenience."
  }
]

const insuranceLogos = [
  "AAR", "Aetna", "Allianz", "APA", "AXA PPP", "Britam", "BUPA", "CIC", 
  "Cigna", "Heritage", "Madison", "Old Mutual"
]

export function AboutSection() {
  return (
    <section className="relative py-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-50/50 rounded-full blur-3xl -z-10" />
        <div className="absolute right-0 top-1/4 w-72 h-72 bg-blue-50/50 rounded-full blur-2xl -z-10" />
        <div className="hidden lg:block absolute left-0 bottom-0 w-96 h-96">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#005B9410,transparent)]" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'2\' fill=\'%23005B94\' fill-opacity=\'0.1\'/%3E%3C/svg%3E")',
            backgroundSize: '20px 20px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Welcome to{' '}
              <span className="relative">
                <span className="relative z-10 text-primary-600">Gastro & Liver Centre</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary-100 -z-0" />
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">Excellence • Compassion • Care</p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A modern and spacious gastroenterology medical centre focused on providing 
              comprehensive care for your digestive system.
            </p>
          </motion.div>
        </div>

        {/* Services Grid with Medical Theme */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0.5 bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl" />
                <div className="relative bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center
                        group-hover:bg-primary-100 transition-colors">
                        <Icon className="w-6 h-6 text-primary-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold mb-2 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Insurance Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-soft"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3">
              <h3 className="text-2xl font-heading font-bold mb-3">Insurance Partners</h3>
              <p className="text-gray-600">
                We've partnered with leading insurance providers to ensure your care is covered.
              </p>
              <div className="mt-4 inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                View all partners
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                {insuranceLogos.map((logo) => (
                  <div
                    key={logo}
                    className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100
                      hover:shadow-md transition-shadow duration-200"
                  >
                    <span className="text-sm font-medium text-gray-600">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 