const featureCards = [
  {
    title: 'Satellite data',
    subtitle: 'Revolutionizing Resource Management in Agriculture.',
    description:
      'Satellite maps serve as a powerful tool for monitoring vast expanses of fields and pinpointing areas that require immediate attention.'
  },
  {
    title: 'IOT Sensors',
    subtitle: 'Pioneering Precision Agriculture.',
    description:
      'Live environmental readings across greenhouses and open fields, calibrated for arid climate operations.'
  }
];

const systemCards = [
  { title: 'App control', caption: 'More informations' },
  { title: 'Weather monitoring', caption: 'More informations' },
  { title: 'Soil monitoring', caption: 'More informations' },
  { title: 'Disease models', caption: 'More informations' },
  { title: 'Smart irrigation', caption: 'More informations' }
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <nav className="nav">
          <div className="logo">Adham AgriTech</div>
          <div className="nav-links">
            <span>Company</span>
            <span>Adham System</span>
            <span>Benefits</span>
            <button className="pill">Contact Us</button>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Innovative solutions for</p>
            <h1>
              <span className="highlight">Smart Agriculture</span>
            </h1>
            <p className="lead">
              Harnessing AI, blockchain, satellite imaging, and IoT for enhanced efficiency and
              sustainability across protected agriculture in GCC environments.
            </p>
            <button className="cta">Contact Us</button>
          </div>
          <div className="hero-visual">
            <div className="hero-silhouette">
              <div className="hero-core" />
              <div className="hero-glow" />
            </div>
          </div>
        </div>
      </section>

      <section className="statement">
        <p className="eyebrow">The Adham System</p>
        <h2>Cultivating a potent solution</h2>
        <p className="statement-body">
          Our innovative solution encompasses the development of a comprehensive{' '}
          <span className="accent">smart agriculture system</span>, seamlessly integrating IoT
          sensors, artificial intelligence, machine learning, and satellite mapping. What&apos;s more,
          our system boasts a <span className="accent">user feedback feature</span>, expertly managed
          by AI.
        </p>
      </section>

      <section className="card-row">
        {systemCards.map((card) => (
          <article key={card.title} className="system-card">
            <div className="card-image" />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.caption}</p>
              <span className="card-arrow">→</span>
            </div>
          </article>
        ))}
      </section>

      <section className="feature-stack">
        {featureCards.map((card, index) => (
          <article key={card.title} className="feature-card">
            <div className="feature-media" aria-hidden="true">
              <div className={`feature-shape shape-${index + 1}`} />
            </div>
            <div className="feature-content">
              <h3>
                <span className="accent">{card.title}</span>
                <br />
                {card.subtitle}
              </h3>
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
