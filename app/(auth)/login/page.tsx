import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-soft">
      <h1 className="text-2xl font-heading font-bold text-center mb-6">
        Sign In to GastroClinic
      </h1>
      
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors"
        >
          Sign In
        </button>
      </form>
      
      <div className="mt-4 text-center text-sm">
        <Link href="/forgot-password" className="text-primary-500 hover:text-primary-600">
          Forgot your password?
        </Link>
      </div>
      
      <div className="mt-6 text-center text-sm">
        Don't have an account?{' '}
        <Link href="/register" className="text-primary-500 hover:text-primary-600">
          Sign up
        </Link>
      </div>
    </div>
  )
} 