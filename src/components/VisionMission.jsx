import './VisionMission.css'

export default function VisionMission() {
  return (
    <section className="vm">
      <div className="vm__bg-pattern" />
      <div className="container vm__grid">

        {/* Vision */}
        <div className="vm__card reveal">
          <div className="vm__card-accent" />
          <div className="vm__card-label">
            <span className="vm__label-icon">◎</span>
            <span className="section-eyebrow" style={{ marginBottom: 0 }}>Our Vision</span>
          </div>
          <h2 className="vm__card-title">Redefining Modern<br />Living Spaces</h2>
          <div className="gold-line" />
          <p className="vm__card-text">
            To become a trusted leader in premium surface and interior solutions by delivering innovative designs, exceptional quality, and customer-focused experiences that redefine modern living spaces.
          </p>
          <div className="vm__card-ornament">
            <span>◆</span>
            <span>◆</span>
            <span>◆</span>
          </div>
        </div>

        {/* Divider */}
        <div className="vm__divider reveal">
          <div className="vm__divider-line" />
          <div className="vm__divider-icon">✦</div>
          <div className="vm__divider-line" />
        </div>

        {/* Mission */}
        <div className="vm__card vm__card--mission reveal">
          <div className="vm__card-accent vm__card-accent--right" />
          <div className="vm__card-label">
            <span className="vm__label-icon">◉</span>
            <span className="section-eyebrow" style={{ marginBottom: 0 }}>Our Mission</span>
          </div>
          <h2 className="vm__card-title">Inspiring Beautiful<br />Interiors Every Day</h2>
          <div className="gold-line" />
          <p className="vm__card-text">
            To provide stylish, durable, and affordable luxury surface solutions that inspire beautiful interiors and enhance everyday living — making premium quality accessible to all.
          </p>
          <div className="vm__card-ornament">
            <span>◇</span>
            <span>◇</span>
            <span>◇</span>
          </div>
        </div>

      </div>
    </section>
  )
}
