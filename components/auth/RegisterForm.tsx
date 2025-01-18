'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { UserPlus, Mail, Lock, User, Loader, Phone } from 'lucide-react'
import Link from 'next/link'

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Add your registration logic here
    setTimeout(() => setIsLoading(false), 1500) // Simulate API call
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#5e5898]/10 mb-4">
          <UserPlus className="w-8 h-8 text-[#5e5898]" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
        <p className="text-gray-600 mt-2">Join us for better healthcare</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl 
                focus:ring-2 focus:ring-[#5e5898]/20 focus:border-[#5e5898] transition-colors"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl 
                focus:ring-2 focus:ring-[#5e5898]/20 focus:border-[#5e5898] transition-colors"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl 
                focus:ring-2 focus:ring-[#5e5898]/20 focus:border-[#5e5898] transition-colors"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl 
                focus:ring-2 focus:ring-[#5e5898]/20 focus:border-[#5e5898] transition-colors"
              placeholder="Create a password"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              required
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl 
                focus:ring-2 focus:ring-[#5e5898]/20 focus:border-[#5e5898] transition-colors"
              placeholder="Confirm your password"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center px-4 py-2.5 border border-transparent 
            rounded-xl shadow-sm text-sm font-medium text-white bg-[#5e5898] hover:bg-[#4a4578] 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5e5898] transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <UserPlus className="w-5 h-5 mr-2" />
              Create Account
            </>
          )}
        </button>

        <div className="text-center mt-4">
          <span className="text-gray-600">Already have an account?</span>{' '}
          <Link
            href="/signin"
            className="font-medium text-[#5e5898] hover:text-[#4a4578]"
          >
            Sign in here
          </Link>
        </div>
      </form>
    </motion.div>
  )
} 