import { HeroSection } from '@/components/sections/home/hero'
import { FeaturesSection } from '@/components/sections/home/features'
import { TestimonialsSection } from '@/components/sections/home/testimonials'
import { AboutSection } from '@/components/sections/home/about'
import { ContactSection } from '@/components/sections/home/contact'
import { FAQSection } from '@/components/sections/home/faq'
import { ProceduresSection } from '@/components/sections/home/procedures'

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <HeroSection />
      <AboutSection />
      <ProceduresSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  )
}
