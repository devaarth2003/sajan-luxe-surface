import { ArrowLeft } from 'lucide-react'
import './ProductGallery.css'

export default function ProductGallery({ product, images, onClose }) {
  const handleEnquire = () => {
    onClose()
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="product-gallery">
      {/* Header */}
      <div className="product-gallery__header">
        <div className="container product-gallery__header-inner">
          <button className="btn btn-ghost product-gallery__back" onClick={onClose}>
            <ArrowLeft size={20} /> Back to Products
          </button>
          <div className="product-gallery__title-wrap">
            <span className="product-gallery__tagline">{product.tagline}</span>
            <h2 className="product-gallery__title">{product.name} Gallery</h2>
          </div>
          <div style={{ width: 140 }}></div> {/* Spacer for center alignment */}
        </div>
      </div>

      {/* Grid */}
      <div className="container product-gallery__content">
        <div className="product-gallery__grid">
          {images && images.map((imgSrc, idx) => (
            <div key={idx} className="product-gallery__item glass-card">
              <div className="product-gallery__image-wrap">
                <img src={imgSrc} alt={`${product.name} ${idx + 1}`} className="product-gallery__image" loading="lazy" />
              </div>
              <div className="product-gallery__item-actions">
                <button className="btn btn-outline product-gallery__enquire-btn" onClick={handleEnquire}>
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="product-gallery__footer glass-card">
          <h3 className="product-gallery__footer-title">Looking for more & customizable products?</h3>
          <p className="product-gallery__footer-text">
            We offer a wide range of premium surfaces and bespoke solutions tailored to your space.
          </p>
          <button className="btn btn-primary" onClick={handleEnquire}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
