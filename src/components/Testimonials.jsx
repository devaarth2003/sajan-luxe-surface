import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    quote: 'The flooring and wallpapers completely transformed our home interior. Premium quality and professional service. Could not be happier with the results!',
    name: 'Happy Customer',
    role: 'Homeowner',
    heading: 'Excellent Quality',
    rating: 5,
    initial: 'H',
  },
  {
    id: 2,
    quote: 'Sajan Luxe Surface offers modern designs with excellent finishing. Truly worth the investment. The UV sheets we chose look absolutely stunning.',
    name: 'Interior Client',
    role: 'Interior Designer',
    heading: 'Highly Recommended',
    rating: 5,
    initial: 'I',
  },
  {
    id: 3,
    quote: 'From product selection to installation guidance, the entire experience was smooth and satisfying. The team is very professional and knowledgeable.',
    name: 'Commercial Client',
    role: 'Business Owner',
    heading: 'Professional Service',
    rating: 5,
    initial: 'C',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  const t = testimonials[active]

  return (
    <section className="testimonials">
      <div className="testimonials__bg-deco" />

      <div className="container">
        <div className="section-header-center reveal">
          <span className="section-eyebrow">Client Stories</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="gold-line gold-line-center" />
        </div>

        {/* Main Testimonial */}
        <div className="testimonials__main reveal">
          <div className="testimonials__card glass-card">
            {/* Quote Mark */}
            <div className="testimonials__quote-mark">"</div>

            {/* Stars */}
            <div className="testimonials__stars">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} fill="#c9a84c" color="#c9a84c" />
              ))}
            </div>

            <h3 className="testimonials__heading">"{t.heading}"</h3>

            <p className="testimonials__text">{t.quote}</p>

            {/* Author */}
            <div className="testimonials__author">
              <div className="testimonials__avatar">
                {t.initial}
              </div>
              <div>
                <div className="testimonials__name">— {t.name}</div>
                <div className="testimonials__role">{t.role}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="testimonials__nav">
              <button className="testimonials__nav-btn" onClick={prev} aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <div className="testimonials__dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
                    onClick={() => setActive(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button className="testimonials__nav-btn" onClick={next} aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Side Cards (mini previews) */}
          <div className="testimonials__side">
            {testimonials.map((t2, i) => (
              <button
                key={t2.id}
                className={`testimonials__mini ${i === active ? 'testimonials__mini--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="testimonials__mini-avatar">{t2.initial}</div>
                <div className="testimonials__mini-text">
                  <div className="testimonials__mini-name">{t2.name}</div>
                  <div className="testimonials__mini-heading">"{t2.heading}"</div>
                  <div className="testimonials__mini-stars">
                    {Array.from({ length: t2.rating }).map((_, si) => (
                      <Star key={si} size={10} fill="#c9a84c" color="#c9a84c" />
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
