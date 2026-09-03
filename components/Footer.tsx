import Link from 'next/link'

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-name">Raghava <span>Halo</span></div>
            <p>
              A RERA-approved high-rise community in Kondapur, Hyderabad, near HCU. Three towers,
              52 floors, and 1,000+ thoughtfully planned 3 BHK homes — crowned by the Halo.
            </p>
            <p className="footer-rera">RERA Registration No. <strong>P02400011015</strong></p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul role="list">
              <li><a href="#why">Overview</a></li>
              <li><a href="#architecture">Architecture</a></li>
              <li><a href="#residences">Residences</a></li>
              <li><a href="#floor-plans">Floor Plans</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#location">Location</a></li>
              <li><Link href="/blog">Journal</Link></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Enquire</h4>
            <ul role="list">
              <li><a href="#contact">Book a Site Visit</a></li>
              <li><a href="#contact">Request Floor Plans</a></li>
              <li><a href="https://wa.me/919849019238" target="_blank" rel="noopener">WhatsApp Us</a></li>
              <li><a href="tel:+919849019238">+91 98490 19238</a></li>
              <li><a href="#contact">NRI Buyers</a></li>
            </ul>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <div className="footer-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/blog">Journal</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
          <p>© {new Date().getFullYear()} Raghava Halo, Kondapur · Marketed by Realvision Reality Consultancy</p>
        </div>
        <p className="footer-disclaimer">
          This is a marketing communication for Raghava Halo, a residential project in Kondapur, Hyderabad.
          The project is RERA approved under registration number P02400011015; approved documents are available on request.
          <strong> Raghava Halo is an under-construction project, with possession scheduled for June 2030.</strong>{' '}
          *Starting price is indicative, exclusive of applicable taxes, registration and other charges.
          Images shown are architectural renders and artistic impressions and may differ from the final built
          product. All specifications, pricing, floor plans, amenities and timelines are indicative and subject
          to change per the RERA-registered plans. Please verify all details with our sales team before making
          any purchase decision. This communication does not constitute an offer or a legally binding contract.
        </p>
      </div>
    </footer>
  )
}
