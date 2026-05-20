import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown, Phone, MessageCircle } from 'lucide-react'
import './Hero.css'

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 1,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 10 + 12,
  opacity: Math.random() * 0.4 + 0.1,
}))

export default function Hero() {
  const handleScroll = () => {
    const el = document.querySelector('#about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero__bg">
        <div className="hero__gradient-1" />
        <div className="hero__gradient-2" />
        <div className="hero__gradient-3" />
        <div className="hero__grid" />
      </div>

      {/* Floating Particles */}
      <div className="hero__particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="hero__particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              opacity: p.opacity,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative Lines */}
      <div className="hero__line hero__line--left" />
      <div className="hero__line hero__line--right" />

      {/* Content */}
      <div className="container hero__content">
        <div className="hero__badge">
          Premium Interior & Surface Solutions
        </div>

        <h1 className="hero__title">
          Transform Your Space<br />
          with <span className="hero__title-accent">Luxury Surfaces</span>
        </h1>

        <p className="hero__subtitle">
          Premium interior & surface solutions crafted to elevate homes, offices,<br className="hero__subtitle-br" />
          hotels, and commercial spaces with elegance, durability, and modern style.
        </p>

        {/* Product Pills */}
        <div className="hero__pills">
          {['UV Sheets', 'Vinyl Flooring', 'Wallpapers', '3D Mirror Panels', 'Carpets', 'Curtains', 'Artificial Grass'].map((p) => (
            <span key={p} className="hero__pill">{p}</span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hero__ctas">
          <button className="btn btn-primary hero__btn" onClick={() => handleNav('#products')}>
            Explore Products <ArrowRight size={16} />
          </button>
          <button className="btn btn-outline hero__btn" onClick={() => handleNav('#contact')}>
            Free Consultation
          </button>
          <a href="tel:+916379031705" className="btn btn-ghost hero__btn">
            <Phone size={15} /> Call Us
          </a>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">8+</span>
            <span className="hero__stat-label">Product Categories</span>
          </div>

          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">100%</span>
            <span className="hero__stat-label">Premium Quality</span>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="hero__floating-cards">
        <div className="hero__floating-card hero__floating-card--1">
          <div className="hero__fc-icon">✦</div>
          <span>Premium UV Sheets</span>
        </div>
        <div className="hero__floating-card hero__floating-card--2">
          <div className="hero__fc-icon">◈</div>
          <span>Luxury Flooring</span>
        </div>
        <div className="hero__floating-card hero__floating-card--3">
          <div className="hero__fc-icon">❋</div>
          <span>Designer Wallpapers</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button className="hero__scroll" onClick={handleScroll} aria-label="Scroll down">
        <span className="hero__scroll-text">Discover More</span>
        <ChevronDown size={18} className="hero__scroll-icon" />
      </button>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/916379031705"
        target="_blank"
        rel="noopener noreferrer"
        className="hero__whatsapp"
        aria-label="WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
    </section>
  )
}
