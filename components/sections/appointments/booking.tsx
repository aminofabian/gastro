'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CalendarCheck } from 'lucide-react'
import { useState } from 'react'
import { BookingCalendar } from './calendar'

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM'
]

const services = [
  'Gastroscopy',
  'Colonoscopy',
  'Consultation',
  'Follow-up Visit'
]

export function BookingSection() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    
    // Add your form submission logic here
    setTimeout(() => {
      setFormStatus('success')
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Medical Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,91,148,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calendar Section */}
            <BookingCalendar />

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-soft"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Service
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setSelectedService(service)}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-left
                            transition-all ${selectedService === service
                              ? 'border-primary-500 bg-primary-50 text-primary-700'
                              : 'border-gray-200 hover:border-primary-200'
                            }`}
                        >
                          <CalendarCheck className="w-5 h-5 text-primary-500" />
                          <span className="font-medium">{service}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date & Time Selection */}
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                        Select Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 
                            focus:border-primary-500 focus:ring-2 focus:ring-primary-200 
                            outline-none transition-all"
                          onChange={(e) => setSelectedDate(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Time
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`p-2 rounded-lg text-sm font-medium transition-all
                              ${selectedTime === time
                                ? 'bg-primary-500 text-white'
                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                              }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 
                          focus:border-primary-500 focus:ring-2 focus:ring-primary-200 
                          outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 
                          focus:border-primary-500 focus:ring-2 focus:ring-primary-200 
                          outline-none transition-all"
                        placeholder="0712 345 678"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="notes"
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 
                        focus:border-primary-500 focus:ring-2 focus:ring-primary-200 
                        outline-none transition-all resize-none"
                      placeholder="Any specific concerns or requirements..."
                    />
                  </div>
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
                      Booking Appointment...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      Appointment Booked Successfully
                      <span className="text-green-300">✓</span>
                    </>
                  ) : (
                    <>
                      Book Appointment
                      <Calendar className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 