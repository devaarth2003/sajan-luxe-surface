import { useState } from 'react'
import './Products.css'
import ProductGallery from './ProductGallery'
import { productImages } from '../data/productImages'

const products = [
  {
    id: 1,
    name: 'UV Sheets',
    tagline: 'Premium Wall Finishes',
    desc: 'Elegant decorative UV sheets with premium finishes that add modern luxury to walls and interiors.',
    image: '/images/UV sheet/Screenshot 2026-05-19 105749.png',
    color: '#c9a84c',
    bg: 'linear-gradient(135deg, #1a1500 0%, #0f0c00 100%)',
    accent: 'rgba(201,168,76,0.15)',
    tags: ['Decorative', 'Modern', 'Durable'],
  },
  {
    id: 2,
    name: 'Artificial Grass',
    tagline: 'Natural Green Solutions',
    desc: 'Natural-looking artificial grass solutions for gardens, balconies, landscapes, and commercial spaces.',
    image: '/images/artificial grasses/Screenshot 2026-05-19 112732.png',
    color: '#6aab5e',
    bg: 'linear-gradient(135deg, #0a1a08 0%, #060e05 100%)',
    accent: 'rgba(106,171,94,0.12)',
    tags: ['Low Maintenance', 'All Weather', 'Natural Look'],
  },
  {
    id: 3,
    name: 'Premium Mats',
    tagline: 'Style Meets Safety',
    desc: 'Stylish and durable mats designed for comfort, safety, and enhanced aesthetics.',
    image: '/images/Premium Mats/Screenshot 2026-05-19 115920.png',
    color: '#b8956a',
    bg: 'linear-gradient(135deg, #1a1008 0%, #0f0904 100%)',
    accent: 'rgba(184,149,106,0.12)',
    tags: ['Anti-Slip', 'Durable', 'Stylish'],
  },
  {
    id: 4,
    name: 'Vinyl Flooring',
    tagline: 'Waterproof Luxury Floors',
    desc: 'High-quality vinyl flooring with modern textures, waterproof protection, and long-lasting durability.',
    image: '/images/vinyl flooring/Screenshot 2026-05-19 115130.png',
    color: '#c9a84c',
    bg: 'linear-gradient(135deg, #1a1500 0%, #0f0c00 100%)',
    accent: 'rgba(201,168,76,0.12)',
    tags: ['Waterproof', 'Wood Look', 'Easy Install'],
  },
  {
    id: 5,
    name: 'Wallpapers',
    tagline: 'Designer Wall Art',
    desc: 'Designer wallpapers that bring creativity, elegance, and personality to every room.',
    image: '/images/Wallpaper/Screenshot 2026-05-19 120409.png',
    color: '#a78bba',
    bg: 'linear-gradient(135deg, #100a1a 0%, #0a0610 100%)',
    accent: 'rgba(167,139,186,0.12)',
    tags: ['Designer', 'Elegant', 'Creative'],
  },
  {
    id: 9,
    name: '3D Mirror Panels',
    tagline: 'REFLECTIVE LUXURY',
    desc: 'Premium 3D mirror panels designed to add depth, elegance, and a modern luxury touch to your interiors. Perfect for enhancing walls with reflective beauty, stylish textures, and sophisticated aesthetics.',
    image: '/images/3D mirror panal/Screenshot 2026-05-20 125549.png',
    color: '#e0e0e0',
    bg: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
    accent: 'rgba(224,224,224,0.12)',
    tags: ['ELEGANT', 'MODERN', 'REFLECTIVE'],
  },
  {
    id: 6,
    name: 'Carpets',
    tagline: 'Luxury Underfoot',
    desc: 'Luxury carpets crafted for comfort, warmth, and sophisticated interior styling.',
    image: '/images/carpet/Screenshot 2026-05-19 112050.png',
    color: '#c9a84c',
    bg: 'linear-gradient(135deg, #1a1500 0%, #0f0c00 100%)',
    accent: 'rgba(201,168,76,0.12)',
    tags: ['Comfort', 'Warm', 'Plush'],
  },
  {
    id: 7,
    name: 'Curtains',
    tagline: 'Elegant Drapery',
    desc: 'Premium curtain collections designed to complement modern and classic interiors.',
    image: '/images/Curtains/Screenshot 2026-05-19 121042.png',
    color: '#8ab0c9',
    bg: 'linear-gradient(135deg, #081018 0%, #040a10 100%)',
    accent: 'rgba(138,176,201,0.12)',
    tags: ['Modern', 'Classic', 'Premium'],
  },
  {
    id: 8,
    name: 'PVC Sheets',
    tagline: 'Versatile Solutions',
    desc: 'Versatile and durable PVC sheet solutions for stylish and functional spaces.',
    image: '/images/PVC sheet/Screenshot 2026-05-19 114550.png',
    color: '#c9a84c',
    bg: 'linear-gradient(135deg, #1a1500 0%, #0f0c00 100%)',
    accent: 'rgba(201,168,76,0.12)',
    tags: ['Versatile', 'Functional', 'Durable'],
  },
]

export default function Products() {
  const [hovered, setHovered] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Map product name to the folder name used in productImages
  const getGalleryImages = (productName) => {
    const nameMap = {
      'UV Sheets': 'UV sheet',
      'Artificial Grass': 'artificial grasses',
      'Premium Mats': 'Premium Mats',
      'Vinyl Flooring': 'vinyl flooring',
      'Wallpapers': 'Wallpaper',
      '3D Mirror Panels': '3D mirror panal',
      'Carpets': 'carpet',
      'Curtains': 'Curtains',
      'PVC Sheets': 'PVC sheet',
    }
    const folderName = nameMap[productName]
    return productImages[folderName] || []
  }

  return (
    <>
    <section id="products" className="products">
      <div className="container">
        <div className="section-header-center reveal">
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="section-title">Our Premium Products</h2>
          <div className="gold-line gold-line-center" />
          <p className="section-subtitle">
            Explore our curated collection of luxury surface and interior solutions, each crafted with superior materials and premium finishes.
          </p>
        </div>

        <div className="products__grid">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="products__card reveal"
              style={{
                background: p.bg,
                transitionDelay: `${(i % 4) * 0.08}s`,
              }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setSelectedProduct(p)}
            >
              {/* Glow */}
              <div
                className="products__card-glow"
                style={{ background: `radial-gradient(ellipse at 30% 30%, ${p.accent}, transparent 70%)` }}
              />

              {/* Image */}
              <div className="products__image-container">
                <img src={p.image} alt={p.name} className="products__image" />
                <div className="products__image-overlay" style={{ background: `linear-gradient(to top, ${p.bg.split(',')[1] || '#000'}, transparent)` }} />
              </div>

              {/* Content */}
              <div className="products__card-content">
                <span className="products__tagline" style={{ color: p.color }}>{p.tagline}</span>
                <h3 className="products__name">{p.name}</h3>
                <p className="products__desc">{p.desc}</p>

                {/* Tags */}
                <div className="products__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="products__tag" style={{ borderColor: `${p.color}40`, color: p.color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Border Bottom */}
              <div
                className="products__card-border"
                style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
              />

              {/* Hover Overlay */}
              <div
                className="products__hover-overlay"
                style={{
                  opacity: hovered === p.id ? 1 : 0,
                  background: `radial-gradient(ellipse at center, ${p.accent} 0%, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>

        <div className="products__cta reveal">
          <p className="products__cta-text">Interested in our products? Let us help you find what's perfect for your space.</p>
          <button className="btn btn-primary" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
    {selectedProduct && (
      <ProductGallery 
        product={selectedProduct} 
        images={getGalleryImages(selectedProduct.name)} 
        onClose={() => setSelectedProduct(null)} 
      />
    )}
    </>
  )
}
