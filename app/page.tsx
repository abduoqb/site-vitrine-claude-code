import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { BentoGrid } from '@/components/sections/BentoGrid'
import { Pricing } from '@/components/sections/Pricing'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTAFinal } from '@/components/sections/CTAFinal'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <BentoGrid />
        <Pricing />
        <Testimonials />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
