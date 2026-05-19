import './About.css'
import { Home, Briefcase, Building2, Store } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="about" style={{ padding: 'var(--section-pad)' }}>
      <div className="container about__grid">
        {/* Left Visual */}
        <div className="about__visual reveal">
          <div className="about__image-frame" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src="/images/logo/Screenshot 2026-05-16 211931.png" 
              alt="Sajan Luxe Surface Logo" 
              style={{ width: '80%', height: 'auto', filter: 'drop-shadow(0 10px 30px rgba(201,168,76,0.4))' }} 
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="about__content reveal">
          <span className="section-eyebrow">About Us</span>
          <h2 className="section-title about__title">
            Crafting Spaces of <span className="gold-text">Timeless Elegance</span>
          </h2>
          <div className="gold-line" />

          <p className="about__text">
            At <strong>Sajan Luxe Surface</strong>, we specialize in premium interior and surface solutions designed to bring elegance, comfort, and sophistication to every space. From stylish UV sheets and luxury vinyl flooring to artificial grass, wallpapers, carpets, curtains, and premium mats — we provide high-quality products that combine beauty with durability.
          </p>
          <p className="about__text">
            Our mission is to help customers transform ordinary spaces into extraordinary environments through innovative designs, superior materials, and exceptional service.
          </p>
          <p className="about__text">
            Whether it's a home, office, showroom, hotel, or commercial project, Sajan Luxe Surface delivers solutions that reflect <em>luxury, functionality, and timeless appeal.</em>
          </p>

          <div className="about__highlights">
            <div className="about__highlight">
              <div className="about__highlight-icon"><Home size={20} /></div>
              <span>Homes & Villas</span>
            </div>
            <div className="about__highlight">
              <div className="about__highlight-icon"><Briefcase size={20} /></div>
              <span>Offices</span>
            </div>
            <div className="about__highlight">
              <div className="about__highlight-icon"><Building2 size={20} /></div>
              <span>Hotels</span>
            </div>
            <div className="about__highlight">
              <div className="about__highlight-icon"><Store size={20} /></div>
              <span>Commercial</span>
            </div>
          </div>

          <div className="about__ctas">
            <button className="btn btn-primary" onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}>
              Our Products
            </button>
            <button className="btn btn-outline" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
