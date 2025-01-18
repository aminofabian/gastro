'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Stethoscope, Plus, Minus, Activity, Microscope, Pill, Clipboard, Heart, FileText } from 'lucide-react'
import { useState } from 'react'

// Add medical-themed decorative SVG
const MedicalCross = () => (
  <svg className="w-full h-full text-primary-100" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3ZM13 17H11V13H7V11H11V7H13V11H17V13H13V17Z" />
  </svg>
)

const faqs = [
  {
    icon: Microscope,
    category: "Diagnostic Procedures",
    badge: "Clinical",
    questions: [
      {
        question: "What conditions do you treat?",
        answer: "We treat a wide range of digestive system conditions including acid reflux, IBS, inflammatory bowel disease, liver diseases, and various gastrointestinal disorders. Our specialists provide comprehensive care from diagnosis to treatment."
      },
      {
        question: "What types of endoscopy procedures do you offer?",
        answer: "We offer upper endoscopy (gastroscopy), colonoscopy, capsule endoscopy, and specialized therapeutic procedures. Each procedure is performed using state-of-the-art equipment in our modern endoscopy suites."
      },
      {
        question: "Are the procedures painful?",
        answer: "Most procedures are performed under sedation to ensure your comfort. You'll be monitored by our experienced team throughout the procedure, and most patients report minimal to no discomfort."
      }
    ],
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Clipboard,
    category: "Patient Preparation",
    badge: "Pre-Care",
    questions: [
      {
        question: "How do I prepare for an endoscopy?",
        answer: "Preparation typically involves fasting for 6-8 hours before the procedure. Our team will provide detailed instructions based on your specific case and the time of your appointment."
      },
      {
        question: "What should I bring to my appointment?",
        answer: "Please bring your ID, insurance card, list of current medications, and any relevant medical records or test results. Wear comfortable clothing and arrange for someone to drive you home after procedures requiring sedation."
      },
      {
        question: "How long do procedures typically take?",
        answer: "Most endoscopic procedures take 20-45 minutes, but you should plan to be at the center for 2-3 hours total to account for preparation and recovery time."
      }
    ],
    color: "from-purple-500 to-pink-400"
  },
  {
    icon: FileText,
    category: "Insurance & Records",
    badge: "Admin",
    questions: [
      {
        question: "Are your procedures covered by insurance?",
        answer: "Yes, our procedures are covered by many major insurance providers. We work with various insurance companies to ensure your care is covered. Procedures are typically billed under your in-patient cover."
      },
      {
        question: "What payment options do you offer?",
        answer: "We accept all major insurance plans, cash, credit cards, and offer flexible payment plans for those who need them. Our billing team can help you understand your coverage and options."
      }
    ],
    color: "from-emerald-500 to-teal-400"
  },
  {
    icon: Heart,
    category: "Patient Care",
    badge: "Care",
    questions: [
      {
        question: "Do I need a referral?",
        answer: "While referrals are welcome, they're not mandatory. You can book an appointment directly with our clinic. However, having a referral from your primary care physician can be helpful for insurance purposes."
      },
      {
        question: "How long is the wait for an appointment?",
        answer: "We strive to accommodate urgent cases within 24-48 hours. Routine consultations are typically scheduled within 1-2 weeks."
      }
    ],
    color: "from-amber-500 to-orange-400"
  }
]

export function FAQSection() {
  const [openCategory, setOpenCategory] = useState(0)
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Medical-themed Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white" />
        {/* Medical Cross Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, #005B94 1px, transparent 0),
            radial-gradient(circle at 48px 48px, #005B94 1px, transparent 0)
          `,
          backgroundSize: '48px 48px'
        }} />
        {/* EKG Line */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-primary-100/50 overflow-hidden">
          <div className="absolute inset-0 w-[200%] animate-ekgLine">
            <svg className="w-full h-4 -translate-y-2" viewBox="0 0 1200 20">
              <path
                d="M0 10 Q 30 10, 45 10 T 600 10 T 1200 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary-200"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Enhanced Medical Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28">
              <div className="absolute inset-0 bg-primary-500/10 rounded-full animate-ping" />
              <div className="absolute inset-0 bg-primary-500/20 rounded-full animate-pulse" />
              <div className="absolute inset-4 bg-white rounded-full shadow-md flex items-center justify-center">
                <MedicalCross />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Patient Information
            </h2>
            <p className="text-xl text-gray-600">
              Important information about your care and procedures
            </p>
          </motion.div>
        </div>

        {/* Enhanced Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {faqs.map((category, index) => {
            const Icon = category.icon
            const isActive = openCategory === index

            return (
              <motion.button
                key={index}
                onClick={() => {
                  setOpenCategory(index)
                  setOpenQuestion(null)
                }}
                className={`group flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300
                  ${isActive 
                    ? 'bg-white shadow-lg scale-105 ring-1 ring-gray-100' 
                    : 'bg-gray-50/80 hover:bg-white hover:shadow-md'
                  }`}
                whileHover={{ scale: isActive ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`relative w-10 h-10 rounded-xl bg-gradient-to-r ${category.color}
                  flex items-center justify-center shadow-sm`}>
                  <Icon className="w-5 h-5 text-white" />
                  {/* Medical Cross Overlay */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity">
                    <MedicalCross />
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">
                      {category.category}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-primary-50 text-primary-600 rounded-full">
                      {category.badge}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {category.questions.length} Questions
                  </span>
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Enhanced Questions Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={openCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {faqs[openCategory].questions.map((item, index) => {
              const isOpen = openQuestion === index
              const isHovered = hoveredCard === index

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative group"
                >
                  <motion.div
                    className="absolute -inset-0.5 rounded-2xl opacity-50"
                    style={{
                      background: `linear-gradient(to right, ${faqs[openCategory].color.split(' ')[1]}, ${faqs[openCategory].color.split(' ')[3]})`
                    }}
                    animate={{
                      opacity: isHovered ? 0.15 : 0.05,
                    }}
                  />

                  <button
                    onClick={() => setOpenQuestion(isOpen ? null : index)}
                    className="relative w-full text-left bg-white/80 backdrop-blur-sm rounded-2xl p-6 
                      shadow-soft hover:shadow-lg transition-all duration-300 group"
                  >
                    <h3 className="text-lg font-heading font-bold text-gray-900 mb-2 pr-8
                      group-hover:text-primary-600 transition-colors">
                      {item.question}
                    </h3>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="h-px w-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 mb-4" />
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="absolute top-5 right-5">
                      <motion.div 
                        className={`w-7 h-7 rounded-full flex items-center justify-center
                          transition-colors duration-300 ${isOpen ? 'bg-primary-50' : 'bg-gray-50'}`}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                      >
                        <Plus className={`w-4 h-4 transition-colors duration-300
                          ${isOpen ? 'text-primary-600 rotate-45' : 'text-gray-400'}`} />
                      </motion.div>
                    </div>
                  </button>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Decorative Elements */}
        <div className="absolute -bottom-24 right-0 w-96 h-96 bg-gradient-to-br 
          from-primary-50 to-transparent rounded-full blur-3xl opacity-50 mix-blend-multiply" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br 
          from-blue-50 to-transparent rounded-full blur-3xl opacity-50 mix-blend-multiply" />
      </div>
    </section>
  )
} 