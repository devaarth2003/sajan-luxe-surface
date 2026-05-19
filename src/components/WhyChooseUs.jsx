import './WhyChooseUs.css'

const reasons = [
  {
    icon: '◆',
    title: 'Premium Quality Materials',
    desc: 'We deliver carefully selected products designed for durability, elegance, and long-lasting performance.',
  },
  {
    icon: '✦',
    title: 'Modern & Luxury Designs',
    desc: 'Stylish collections that enhance interiors with a sophisticated and contemporary look.',
  },
  {
    icon: '◈',
    title: 'Affordable Luxury',
    desc: 'Premium products at competitive prices without compromising on quality.',
  },
  {
    icon: '❋',
    title: 'Expert Guidance',
    desc: 'Professional support to help you choose the perfect materials for your space.',
  },
  {
    icon: '⬡',
    title: 'Wide Product Range',
    desc: 'Everything from flooring and wall solutions to carpets, curtains, and decorative surfaces — all under one roof.',
  },
  {
    icon: '✿',
    title: 'Trusted Service',
    desc: 'Committed to customer satisfaction with reliable service and quality assurance.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="why reveal" id="why">
      {/* Background Decoration */}
      <div className="why__bg-text">LUXE</div>

      <div className="container">
        <div className="section-header-center">
          <span className="section-eyebrow">Our Advantage</span>
          <h2 className="section-title">Why Sajan Luxe Surface?</h2>
          <div className="gold-line gold-line-center" />
          <p className="section-subtitle">
            We combine premium craftsmanship with exceptional service to deliver surface solutions that truly stand apart.
          </p>
        </div>

        <div className="why__grid">
          {reasons.map((r, i) => (
            <div className="why__card glass-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="why__card-num">0{i + 1}</div>
              <div className="why__icon">{r.icon}</div>
              <h3 className="why__card-title">{r.title}</h3>
              <p className="why__card-desc">{r.desc}</p>
              <div className="why__card-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
