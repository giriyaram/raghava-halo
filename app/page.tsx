import Nav from '@/components/Nav'
import ScrollAnimations from '@/components/ScrollAnimations'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Positioning from '@/components/Positioning'
import Stats from '@/components/Stats'
import Residences from '@/components/Residences'
import Tower3 from '@/components/Tower3'
import SmartPlanning from '@/components/SmartPlanning'
import Amenities from '@/components/Amenities'
import Wellness from '@/components/Wellness'
import Location from '@/components/Location'
import Lifestyle from '@/components/Lifestyle'
import Vastu from '@/components/Vastu'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import FloatingButtons from '@/components/FloatingButtons'

export default function HomePage() {
  return (
    <>
      <Nav />
      <Modal />
      <ScrollAnimations />
      <main>
        <Hero />
        <TrustBar />
        <Positioning />
        <Stats />
        <Residences />
        <Tower3 />
        <SmartPlanning />
        <Amenities />
        <Wellness />
        <Location />
        <Lifestyle />
        <Vastu />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
