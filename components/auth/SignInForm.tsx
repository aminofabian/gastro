'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LogIn, Mail, Lock, Loader } from 'lucide-react'
import Link from 'next/link'

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Add your authentication logic here
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
          <LogIn className="w-8 h-8 text-[#5e5898]" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-gray-600 mt-2">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-[#5e5898] focus:ring-[#5e5898] border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">Remember me</label>
          </div>
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-[#5e5898] hover:text-[#4a4578]"
          >
            Forgot password?
          </Link>
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
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </>
          )}
        </button>

        <div className="text-center mt-4">
          <span className="text-gray-600">Don't have an account?</span>{' '}
          <Link
            href="/register"
            className="font-medium text-[#5e5898] hover:text-[#4a4578]"
          >
            Register here
          </Link>
        </div>
      </form>
    </motion.div>
  )
} 