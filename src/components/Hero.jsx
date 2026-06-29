import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-dots" />
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">Pioneering Healthcare Innovation</span>
          <h1 className="hero-title">
            Advancing Medicine.<br />
            <span className="hero-highlight">Improving Lives.</span>
          </h1>
          <p className="hero-tagline">Science-driven. Patient-focused. Globally committed.</p>
          <p className="hero-subtitle">
            At NeoPharma, we combine cutting-edge research with compassionate care
            to develop breakthrough therapies that address the world's most
            pressing health challenges.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">Explore Our Pipeline</a>
            <a href="#about" className="btn btn-secondary">Learn More</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">Clinical Trials</span>
            </div>
            <div className="stat">
              <span className="stat-number">40+</span>
              <span className="stat-label">Countries</span>
            </div>
            <div className="stat">
              <span className="stat-number">12K</span>
              <span className="stat-label">Researchers</span>
            </div>
            <div className="stat">
              <span className="stat-number">$2.8B</span>
              <span className="stat-label">R&D Investment</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-molecule">
            <div className="molecule-ring ring-1" />
            <div className="molecule-ring ring-2" />
            <div className="molecule-ring ring-3" />
            <div className="molecule-core">
              <span>+</span>
            </div>
            <div className="molecule-dot dot-1" />
            <div className="molecule-dot dot-2" />
            <div className="molecule-dot dot-3" />
            <div className="molecule-dot dot-4" />
            <div className="molecule-dot dot-5" />
            <div className="molecule-dot dot-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
