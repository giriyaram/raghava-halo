import Link from 'next/link'

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-name">Halo <span>·</span> Raghava</div>
            <p>
              A premium high-rise residential project by Raghava Group. 52 floors. 3 towers.
              1,000+ thoughtfully planned 3 BHK homes in Kondapur, Hyderabad.
            </p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul role="list">
              <li><a href="#positioning">Overview</a></li>
              <li><a href="#residences">Residences</a></li>
              <li><a href="#tower3">Tower 3</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#location">Location</a></li>
              <li><Link href="/blog">Blog &amp; Insights</Link></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul role="list">
              <li><a href="#contact">Enquire Now</a></li>
              <li><a href="https://wa.me/919849019238" target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href="#contact">Request Site Visit</a></li>
              <li><a href="#contact">Brochure Download</a></li>
              <li><a href="#contact">NRI Buyers</a></li>
            </ul>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Raghava Group. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
        <p className="footer-disclaimer">
          This is a pre-launch marketing communication for Halo by Raghava. All details including
          specifications, pricing, floor plans, amenities, and timelines are indicative and subject
          to change without prior notice. RERA registration details will be updated shortly.
          Renderings shown are artistic impressions and may not accurately reflect the final product.
          Please verify all details with our sales team before making any investment decision.
          Raghava Group is not responsible for decisions taken basis marketing materials alone.
        </p>
      </div>
    </footer>
  )
}
