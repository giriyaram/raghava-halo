import AnnouncementBar from '@/components/AnnouncementBar'
import Nav from '@/components/Nav'
import ScrollAnimations from '@/components/ScrollAnimations'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Positioning from '@/components/Positioning'
import Stats from '@/components/Stats'
import Architecture from '@/components/Architecture'
import SmartPlanning from '@/components/SmartPlanning'
import Residences from '@/components/Residences'
import FloorPlans from '@/components/FloorPlans'
import Arrival from '@/components/Arrival'
import Wellness from '@/components/Wellness'
import Amenities from '@/components/Amenities'
import Gallery from '@/components/Gallery'
import Location from '@/components/Location'
import Lifestyle from '@/components/Lifestyle'
import SiteVisit from '@/components/SiteVisit'
// import Specifications from '@/components/Specifications' // hidden until official specs are provided
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import FloatingButtons from '@/components/FloatingButtons'

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <Modal />
      <ScrollAnimations />
      <main>
        <Hero />
        <TrustBar />
        <Positioning />
        <Stats />
        <Architecture />
        <SmartPlanning />
        <Residences />
        <FloorPlans />
        <Arrival />
        <Wellness />
        <Amenities />
        <Gallery />
        <Location />
        <Lifestyle />
        <SiteVisit />
        {/* <Specifications /> hidden until official specifications are provided */}
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
