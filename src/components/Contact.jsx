import { MapPin, Phone, Send } from 'lucide-react'
import './Contact.css'

const WhatsAppIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.21.046-.39-.034-.54-.075-.15-.671-1.62-.92-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.21 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.195-.572-.345z"/>
    <path d="M12 21.5c-1.579 0-3.125-.407-4.492-1.182L3 21l.732-4.32A9.475 9.475 0 0 1 2.5 12c0-5.247 4.253-9.5 9.5-9.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5z"/>
  </svg>
)

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const phone = formData.get('phone')
    const interest = formData.get('interest')
    const message = formData.get('message') || 'No additional message.'

    const text = `Hello Sajan Luxe Surface!\n\nI would like to request a quote.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Interested In:* ${interest}\n\n*Message:* ${message}`
    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/916379031705?text=${encodedText}`, '_blank')
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__grid">
          {/* Left: Info */}
          <div className="contact__info reveal">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="section-title">Ready to Upgrade<br/>Your Space?</h2>
            
            <p className="contact__text">
              Our team is here to help you choose the perfect products for your home or business. Reach out to us for a free consultation and personalized recommendations.
            </p>

            <div className="contact__methods">
              <a href="tel:+916379031705" className="contact__method-card glass-card">
                <div className="contact__method-icon"><Phone size={24} /></div>
                <div>
                  <div className="contact__method-label">Call Us Directly</div>
                  <div className="contact__method-value">+91 63790 31705</div>
                  <div className="contact__method-sub">+91 94428 30057</div>
                </div>
              </a>

              <a href="https://wa.me/916379031705" target="_blank" rel="noopener noreferrer" className="contact__method-card glass-card">
                <div className="contact__method-icon"><WhatsAppIcon size={24} /></div>
                <div>
                  <div className="contact__method-label">WhatsApp Us</div>
                  <div className="contact__method-value">Chat with our experts</div>
                  <div className="contact__method-sub">Fast response guaranteed</div>
                </div>
              </a>

              <div className="contact__method-card glass-card">
                <div className="contact__method-icon"><MapPin size={24} /></div>
                <div>
                  <div className="contact__method-label">Visit Our Showroom</div>
                  <div className="contact__method-value">Marthandam</div>
                  <div className="contact__method-sub">Premium Surface Solutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact__form-wrapper reveal" style={{ transitionDelay: '0.2s' }}>
            <form className="contact__form glass-card" onSubmit={handleSubmit}>
              <h3 className="contact__form-title">Request a Quote</h3>
              <p className="contact__form-sub">Fill out the form below and we'll get back to you shortly.</p>

              <div className="contact__form-row">
                <div className="contact__input-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Name" required />
                </div>
                <div className="contact__input-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 xxxxx xxxxx" required />
                </div>
              </div>

              <div className="contact__input-group">
                <label htmlFor="interest">Interested In</label>
                <select id="interest" name="interest" required defaultValue="">
                  <option value="" disabled>Select a product category</option>
                  <option value="uv-sheets">UV Sheets</option>
                  <option value="vinyl-flooring">Vinyl Flooring</option>
                  <option value="artificial-grass">Artificial Grass</option>
                  <option value="wallpapers">Wallpapers</option>
                  <option value="carpets">Carpets</option>
                  <option value="curtains">Curtains</option>
                  <option value="pvc-sheets">PVC Sheets</option>
                  <option value="premium-mats">Premium Mats</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div className="contact__input-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell us about your project or requirements..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary contact__submit">
                <span>Send Request</span>
                <Send size={16} />
              </button>
            </form>
            
            {/* Decorative background behind form */}
            <div className="contact__form-glow" />
          </div>
        </div>
      </div>
    </section>
  )
}
