const featureCards = [
  {
    title: 'App control',
    subtitle: 'More informations',
    accent: 'app'
  },
  {
    title: 'Weather monitoring',
    subtitle: 'More informations',
    accent: 'weather'
  },
  {
    title: 'Soil monitoring',
    subtitle: 'More informations',
    accent: 'soil'
  },
  {
    title: 'Disease models',
    subtitle: 'More informations',
    accent: 'disease'
  },
  {
    title: 'Smart irrigation',
    subtitle: 'More informations',
    accent: 'irrigation'
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <header className="hero">
        <nav className="nav">
          <div className="logo">Adham.AI</div>
          <div className="nav-links">
            <span>Company</span>
            <span>Adham System</span>
            <span>Benefits</span>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Innovative solutions for</p>
            <h1>Smart Agriculture</h1>
            <p className="lead">
              Harnessing AI, blockchain, satellite imaging, and IoT for enhanced efficiency and
              sustainability.
            </p>
            <button className="cta">Contact Us</button>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-image image-shell">
              <span className="image-label">3D Hero Render</span>
            </div>
            <div className="hero-glow" />
          </div>
        </div>
      </header>

      <section className="feature-banner">
        <div className="banner-image image-shell" aria-hidden="true">
          <span className="image-label">3D Crop Model</span>
        </div>
        <div className="banner-copy">
          <p className="eyebrow">Growa Disease Models</p>
          <h2>
            Elevating Crop Disease Management to Unprecedented Levels of Precision
          </h2>
        </div>
      </section>

      <section className="feature-cards">
        <div className="feature-card">
          <div className="card-image card-image--satellite image-shell" aria-hidden="true">
            <span className="image-label">3D Satellite Scene</span>
          </div>
          <div className="card-copy">
            <span className="card-accent">Satellite data</span>
            <h3>Revolutionizing Resource Management in Agriculture.</h3>
            <p>
              Satellite maps serve as a powerful tool for monitoring vast expanses of fields and
              pinpointing areas that require immediate attention.
            </p>
            <p>
              These maps are instrumental in the strategic planning of crop management practices and
              evaluating their long-term effectiveness.
            </p>
          </div>
        </div>
        <div className="feature-card">
          <div className="card-image card-image--iot image-shell" aria-hidden="true">
            <span className="image-label">3D IoT Device</span>
          </div>
          <div className="card-copy">
            <span className="card-accent">IoT Sensors</span>
            <h3>Pioneering Precision Agriculture.</h3>
          </div>
        </div>
      </section>

      <section className="system">
        <p className="eyebrow">The Adham System</p>
        <h2>Cultivating a potent solution</h2>
        <p className="system-copy">
          Our innovative solution encompasses the development of a comprehensive smart agriculture
          system, seamlessly integrating IoT sensors, blockchain technology, artificial
          intelligence, machine learning, a robust monitoring and implementation framework, and
          satellite mapping. What&apos;s more, our system boasts a user feedback feature, expertly
          managed by artificial intelligence.
        </p>
        <div className="system-cards">
          {featureCards.map((card) => (
            <div key={card.title} className={`system-card system-card--${card.accent}`}>
              <div className="system-image image-shell" aria-hidden="true">
                <span className="image-label">4D Scene</span>
              </div>
              <div className="system-info">
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
                <button className="icon-button" aria-label="More information">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="system-controls">
          <button className="icon-circle" aria-label="Previous">
            ‹
          </button>
          <button className="icon-circle" aria-label="Next">
            ›
          </button>
        </div>
      </section>
    </main>
  );
}
