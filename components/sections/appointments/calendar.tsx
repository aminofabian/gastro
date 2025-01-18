'use client'

import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, Check, AlertCircle } from 'lucide-react'
import { useState } from 'react'

// Helper to generate dates for the calendar
const generateDates = (currentDate: Date) => {
  const dates = []
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()
  
  // Get next 14 days
  for (let i = 0; i < 14; i++) {
    const date = new Date(year, month, currentDate.getDate() + i)
    dates.push(date)
  }
  return dates
}

// Time slots with availability status
const timeSlots = [
  { time: '09:00', period: 'AM', available: true },
  { time: '10:00', period: 'AM', available: true },
  { time: '11:00', period: 'AM', available: false },
  { time: '12:00', period: 'PM', available: true },
  { time: '02:00', period: 'PM', available: true },
  { time: '03:00', period: 'PM', available: false },
  { time: '04:00', period: 'PM', available: true }
]

interface TimeSlotProps {
  time: string
  period: string
  available: boolean
  isSelected: boolean
  onClick: () => void
}

const TimeSlot = ({ time, period, available, isSelected, onClick }: TimeSlotProps) => (
  <motion.button
    whileHover={{ scale: available ? 1.02 : 1 }}
    whileTap={{ scale: available ? 0.98 : 1 }}
    onClick={onClick}
    disabled={!available}
    className={`
      relative group flex items-center gap-3 w-full p-3 rounded-xl border 
      transition-all duration-200
      ${available 
        ? isSelected
          ? 'border-primary-500 bg-primary-50 text-primary-700'
          : 'border-gray-200 hover:border-primary-200 hover:bg-gray-50'
        : 'border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed'
      }
    `}
  >
    <div className="flex items-center gap-2">
      <Clock className={`w-4 h-4 ${isSelected ? 'text-primary-500' : 'text-gray-400'}`} />
      <span className="font-medium">{time}</span>
      <span className="text-sm text-gray-500">{period}</span>
    </div>
    
    {available ? (
      isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute right-3 w-5 h-5 bg-primary-500 rounded-full 
            flex items-center justify-center"
        >
          <Check className="w-3 h-3 text-white" />
        </motion.div>
      )
    ) : (
      <div className="absolute right-3 flex items-center gap-1 text-gray-400">
        <AlertCircle className="w-4 h-4" />
        <span className="text-xs">Unavailable</span>
      </div>
    )}
  </motion.button>
)

// Add this new component for visual enhancement
const PulsingDot = () => (
  <div className="relative">
    <div className="absolute -inset-1 bg-primary-500/20 rounded-full animate-ping" />
    <div className="relative w-2 h-2 bg-primary-500 rounded-full" />
  </div>
)

export function BookingCalendar() {
  const [currentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const dates = generateDates(currentDate)

  const isDateSelected = (date: Date) => 
    selectedDate?.toDateString() === date.toDateString()

  const isToday = (date: Date) =>
    date.toDateString() === new Date().toDateString()

  const formatDate = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return {
      day: days[date.getDay()],
      date: date.getDate()
    }
  }

  return (
    <MotionConfig transition={{ duration: 0.3 }}>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-gray-100">
        {/* Enhanced Calendar Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute -inset-2 bg-primary-100 rounded-2xl blur-lg" />
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 
                flex items-center justify-center shadow-lg">
                <CalendarIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-gray-900">Select Date & Time</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <PulsingDot />
                <span>Available slots for next 14 days</span>
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </motion.button>
          </div>
        </div>

        {/* Enhanced Date Selection */}
        <div className="mb-8">
          <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar">
            {dates.map((date, index) => (
              <motion.button
                key={date.toISOString()}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedDate(date)}
                className={`
                  relative flex-shrink-0 w-20 p-3 rounded-xl border-2 transition-all
                  ${isDateSelected(date)
                    ? 'border-primary-500 bg-primary-50/50'
                    : 'border-gray-100 hover:border-primary-200 hover:bg-gray-50/50'
                  }
                `}
              >
                {isToday(date) && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 
                    bg-primary-500 text-white text-xs font-medium rounded-full">
                    Today
                  </span>
                )}
                <div className="text-center">
                  <div className={`text-sm mb-1 font-medium
                    ${isDateSelected(date) ? 'text-primary-600' : 'text-gray-500'}`}>
                    {formatDate(date).day}
                  </div>
                  <div className={`text-xl font-bold 
                    ${isDateSelected(date) ? 'text-primary-700' : 'text-gray-900'}
                  `}>
                    {formatDate(date).date}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Enhanced Time Slots */}
        <AnimatePresence mode="wait">
          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Clock className="w-4 h-4 text-primary-500" />
                Available Time Slots
                <span className="text-xs text-gray-500">
                  ({timeSlots.filter(slot => slot.available).length} slots)
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((slot) => (
                  <TimeSlot
                    key={slot.time}
                    {...slot}
                    isSelected={selectedTime === `${slot.time} ${slot.period}`}
                    onClick={() => setSelectedTime(`${slot.time} ${slot.period}`)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Selected Slot Summary */}
        <AnimatePresence>
          {selectedDate && selectedTime && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 p-4 rounded-xl bg-gradient-to-br from-primary-50 to-blue-50/50 
                border border-primary-100/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center
                    shadow-sm border border-primary-100">
                    <Check className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary-900">Selected Appointment</div>
                    <div className="text-sm text-primary-600">
                      {selectedDate.toLocaleDateString('en-US', { 
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric'
                      })} - {selectedTime}
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedDate(null)
                    setSelectedTime(null)
                  }}
                  className="px-3 py-1.5 rounded-lg text-sm text-primary-600 hover:bg-white
                    hover:shadow-sm transition-all"
                >
                  Change
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  )
} 