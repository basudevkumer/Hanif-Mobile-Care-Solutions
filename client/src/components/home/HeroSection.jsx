import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">Your trusted mobile care partner</span>
          <h1>Keep your phone feeling <span>brand new.</span></h1>
          <p>Professional mobile repair, genuine accessories, and dependable care—all in one place.</p>
          <div className="hero-actions">
            <Link className="primary-button" href="/book-service">Book a Service <span>→</span></Link>
            <Link className="text-button" href="/services">Explore Services <span>↗</span></Link>
          </div>
          <div className="hero-note"><span className="status-dot" /> Same-day service available</div>
        </div>
        <div className="hero-visual" aria-label="Mobile care service placeholder">
          <div className="visual-glow" />
          <div className="phone-placeholder"><span>IMAGE</span><small>Replace with your image</small></div>
          <div className="floating-card"><strong>4.9/5</strong><span>Customer rating</span></div>
        </div>
      </div>
    </section>
  );
}
