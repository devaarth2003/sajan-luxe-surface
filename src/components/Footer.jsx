import { ArrowUp, Mail } from 'lucide-react'
import './Footer.css'

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

const FacebookIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const WhatsAppIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.21.046-.39-.034-.54-.075-.15-.671-1.62-.92-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.21 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.195-.572-.345z"/>
    <path d="M12 21.5c-1.579 0-3.125-.407-4.492-1.182L3 21l.732-4.32A9.475 9.475 0 0 1 2.5 12c0-5.247 4.253-9.5 9.5-9.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5z"/>
  </svg>
)

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        
        {/* Top Section */}
        <div className="footer__top reveal">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/images/logo/Screenshot 2026-05-16 211931.png" alt="Sajan Luxe Surface Logo" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
              <div>
                <div className="footer__logo-name">Sajan Luxe</div>
                <div className="footer__logo-sub">Surface</div>
              </div>
            </div>
            <p className="footer__desc">
              Premium Interior & Surface Solutions delivering luxury, comfort, and sophisticated style to every space.
            </p>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Quick Links</h4>
            <nav className="footer__nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#products">Products</a>

              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Our Products</h4>
            <nav className="footer__nav">
              <a href="#products">Carpets & Curtains</a>
              <a href="#products">Wallpapers & Mats</a>
              <a href="#products">3D Mirror Panels</a>
              <a href="#products">UV & PVC Sheets</a>
              <a href="#products">Vinyl Flooring</a>
              <a href="#products">Artificial Grass</a>
            </nav>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Connect With Us</h4>
            <div className="footer__socials">
              <a href="https://www.instagram.com/sajan_luxe_surface?igsh=MWVrc2htbHdsbGVwNg%3D%3D" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="https://www.facebook.com/people/Sajan-Luxe-Surface/61573305485780/?mibextid=wwXIfr&rdid=JC2YR4VDiCLRTrS1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F186cBjZ1qG%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="https://wa.me/916379031705" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="WhatsApp">
                <WhatsAppIcon size={20} />
              </a>
              <a href="mailto:Sajanluxesurface@gmail.com" className="footer__social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <div className="footer__contact-info">
              <p>Marthandam, Tamil Nadu</p>
              <p>+91 63790 31705</p>
              <p>Sajanluxesurface@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom Section */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 Sajan Luxe Surface. All Rights Reserved.
          </p>
          
          <button className="footer__totop" onClick={scrollToTop} aria-label="Scroll to top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  )
}
