import './FeaturedProjects.css'
import { Home, Home as Villa, Briefcase, Building2, Utensils, Store, Building, Sparkles, MapPin } from 'lucide-react'

const spaces = [
  { label: 'Homes', icon: <Home size={20} /> },
  { label: 'Villas', icon: <Villa size={20} /> },
  { label: 'Offices', icon: <Briefcase size={20} /> },
  { label: 'Hotels', icon: <Building2 size={20} /> },
  { label: 'Restaurants', icon: <Utensils size={20} /> },
  { label: 'Showrooms', icon: <Store size={20} /> },
  { label: 'Commercial Buildings', icon: <Building size={20} /> },
  { label: 'Event Spaces', icon: <Sparkles size={20} /> },
]

const projectCards = [
  { title: 'Residential Villa', type: 'UV Sheets + Vinyl Flooring', badge: 'Residential', image: '/images/Residential Villa/Screenshot 2026-05-19 123610.png' },
  { title: 'Corporate Office', type: 'Carpets + Wallpapers', badge: 'Commercial', image: '/images/Corporate Office/Cityscape-Wallpaper-Mural-for-Corporate-Spaces-Mck-1.jpg' },
  { title: 'Luxury Hotel', type: 'Curtains + Premium Mats', badge: 'Hospitality', image: '/images/Luxury Hotel/Curtain-Design-for-Living-Room.webp' },
  { title: 'Retail Showroom', type: 'Artificial Grass + PVC Sheets', badge: 'Retail', image: '/images/Retail Showroom/Artificial-grass-window-display.webp' },
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="projects">
      {/* Decorative BG */}
      <div className="projects__bg-deco" />

      <div className="container">
        <div className="section-header-center reveal">
          <span className="section-eyebrow">Projects We Do</span>
          <h2 className="section-title">Bringing Luxury to Every Space</h2>
          <div className="gold-line gold-line-center" />
          <p className="section-subtitle">
            We create elegant surface and interior solutions for a wide range of spaces. Every project reflects our commitment to quality craftsmanship and premium aesthetics.
          </p>
        </div>

        {/* Project Cards */}
        <div className="projects__cards reveal">
          {projectCards.map((p, i) => (
            <div key={i} className="projects__card">
              <div className="projects__card-visual">
                <img src={p.image} alt={p.title} className="projects__card-image" />
                <span className="projects__card-badge">{p.badge}</span>
              </div>
              <div className="projects__card-body">
                <h3 className="projects__card-title">{p.title}</h3>
                <p className="projects__card-type">{p.type}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Spaces We Serve */}
        <div className="projects__spaces reveal">
          <h3 className="projects__spaces-title">Spaces We Transform</h3>
          <div className="projects__spaces-grid">
            {spaces.map((s) => (
              <div key={s.label} className="projects__space-item glass-card">
                <span className="projects__space-icon">{s.icon}</span>
                <span className="projects__space-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="projects__quote reveal">
          <div className="projects__quote-line" />
          <p className="projects__quote-text">
            "Every project reflects our commitment to quality craftsmanship and premium aesthetics."
          </p>
          <div className="projects__quote-line" />
        </div>
      </div>
    </section>
  )
}
