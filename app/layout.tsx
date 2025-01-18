import { Jost } from 'next/font/google'
import { Header } from '@/components/layout/header/header'
import { Footer } from '@/components/layout/footer/footer'
import './globals.css'
import './styles/animations.css'

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
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
    <html lang="en" className={`${jost.variable}`}>
      <body className="font-jost antialiased">
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
