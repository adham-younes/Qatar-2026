const featurePanels = [
  {
    title: 'Satellite data',
    headline: 'Revolutionizing Resource Management in Agriculture.',
    copy:
      'Satellite maps serve as a powerful tool for monitoring vast expanses of fields and pinpointing areas that require immediate attention.'
  },
  {
    title: 'IoT Sensors',
    headline: 'Pioneering Precision Agriculture.',
    copy:
      'Smart sensors unify soil, climate, and irrigation telemetry to keep every greenhouse zone on target.'
  }
];

const systemCards = [
  { title: 'App control', subtitle: 'More informations' },
  { title: 'Weather monitoring', subtitle: 'More informations' },
  { title: 'Soil monitoring', subtitle: 'More informations' },
  { title: 'Disease models', subtitle: 'More informations' },
  { title: 'Smart irrigation', subtitle: 'More informations' }
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <nav className="nav">
          <div className="logo">ADHAM.AG</div>
          <div className="nav-links">
            <span>Company</span>
            <span>AgriTech System</span>
            <span>Benefits</span>
          </div>
          <button className="pill">Contact Us</button>
        </nav>

        <div className="hero-content">
          <p className="kicker">Adham AgriTech</p>
          <h1>
            <span className="accent">Elevating</span> Crop Disease Management to Unprecedented
            Levels of Precision
          </h1>
          <p className="lead">
            Harnessing AI, blockchain, satellite imaging, and IoT for enhanced efficiency and
            sustainability across greenhouse operations in GCC and MENA.
          </p>
          <div className="hero-actions">
            <button className="cta">Start Pilot</button>
            <button className="ghost">Platform Tour</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-orb" />
          <div className="hero-plant">
            <div className="plant-core" />
            <div className="plant-ring" />
          </div>
        </div>
      </section>

      <section className="feature-stack">
        {featurePanels.map((panel, index) => (
          <article key={panel.title} className={`feature-panel ${index % 2 ? 'flip' : ''}`}>
            <div className="panel-media">
              <div className="media-orb" />
              <div className="media-device" />
            </div>
            <div className="panel-copy">
              <h3>{panel.title}</h3>
              <h2>{panel.headline}</h2>
              <p>{panel.copy}</p>
              <button className="ghost">Explore</button>
            </div>
          </article>
        ))}
      </section>

      <section className="system">
        <div className="system-header">
          <p className="kicker">The Adham System</p>
          <h2> Cultivating a potent solution</h2>
          <p>
            Our innovative solution encompasses the development of a comprehensive smart
            agriculture system, seamlessly integrating IoT sensors, blockchain technology,
            artificial intelligence, machine learning, and satellite mapping. What&apos;s more, our
            system boasts a user feedback feature, expertly managed by artificial intelligence.
          </p>
        </div>
        <div className="card-row">
          {systemCards.map((card) => (
            <div key={card.title} className="system-card">
              <div className="card-image" />
              <div className="card-footer">
                <div>
                  <h4>{card.title}</h4>
                  <span>{card.subtitle}</span>
                </div>
                <div className="arrow">→</div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider">
          <button className="slider-btn">‹</button>
          <button className="slider-btn">›</button>
        </div>
      </section>
    </main>
  );
}
