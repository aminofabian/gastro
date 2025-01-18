import { Outfit } from 'next/font/google'
import { Header } from '@/components/layout/header/header'
import { Footer } from '@/components/layout/footer/page'
import './globals.css'
import './styles/animations.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata = {
  title: 'GastroClinic - Expert Gastroenterological Care',
  description: 'Professional gastroenterology services with compassionate care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
          {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
