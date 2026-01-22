const highlights = [
  {
    title: 'Climate Intelligence',
    description:
      'Live temperature, RH, CO₂, and VPD monitoring with deviation alerts tuned for arid environments.'
  },
  {
    title: 'Irrigation & Fertigation',
    description:
      'Track dosing, EC/pH, and timing across zones with audit-ready logs and root-cause traces.'
  },
  {
    title: 'Vision & Scouting',
    description:
      'Camera and field insights translated into prioritized scouting routes and risk indicators.'
  }
];

const metrics = [
  { label: 'Active Zones', value: '24', trend: '+4 today' },
  { label: 'Open Alerts', value: '7', trend: '2 critical' },
  { label: 'Water Savings', value: '18%', trend: 'vs baseline' },
  { label: 'Energy Efficiency', value: '12%', trend: 'week over week' }
];

const workflows = [
  {
    title: 'Operations Command Center',
    detail:
      'Unified dashboard combining sensors, vision, and operator notes into a single daily briefing.'
  },
  {
    title: 'Pilot Mode Analytics',
    detail:
      'Weekly summaries, KPI targets, and ROI tracking for 2–6 week deployment cycles.'
  },
  {
    title: 'Multilingual Field UX',
    detail:
      'Arabic/English ready workflows tailored for greenhouse managers, engineers, and technicians.'
  }
];

const telemetry = [
  { label: 'Leaf Temp', value: '26.4°C', status: 'Nominal' },
  { label: 'Substrate EC', value: '2.1 mS', status: 'Stable' },
  { label: 'Drip Pressure', value: '1.8 bar', status: 'Check' }
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <nav className="nav">
          <div className="logo">Adham AgriTech</div>
          <div className="nav-links">
            <span>Platform</span>
            <span>Operations</span>
            <span>Pilot Mode</span>
            <span>OSIRIS</span>
            <button className="pill">Request Demo</button>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">OSIRIS Greenhouse Intelligence</p>
            <h1>
              A general-purpose control room for protected agriculture in GCC climates.
            </h1>
            <p className="lead">
              Connect sensors, cameras, and operator logs into one decision layer. Prioritize what
              matters, reduce water and energy waste, and deliver weekly results with pilot-ready
              reporting.
            </p>
            <div className="hero-actions">
              <button className="cta">Start Pilot</button>
              <button className="ghost">View Platform Tour</button>
            </div>
            <div className="metrics">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <em>{metric.trend}</em>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="grid-overlay" />
            <div className="glow-card">
              <div className="glow-header">
                <span>Zone 3B</span>
                <span className="status">Stable</span>
              </div>
              <div className="glow-body">
                <div>
                  <p className="label">VPD Trend</p>
                  <p className="value">0.92 kPa</p>
                </div>
                <div>
                  <p className="label">Irrigation Pulse</p>
                  <p className="value">14 min</p>
                </div>
                <div>
                  <p className="label">CO₂</p>
                  <p className="value">860 ppm</p>
                </div>
              </div>
              <div className="signal-lines">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="side-panel">
              <div className="panel-title">
                <h3>Telemetry Feed</h3>
                <span className="status-dot" />
              </div>
              {telemetry.map((item) => (
                <div key={item.label} className="telemetry-row">
                  <div>
                    <p className="label">{item.label}</p>
                    <p className="value">{item.value}</p>
                  </div>
                  <span className="chip">{item.status}</span>
                </div>
              ))}
            </div>
            <div className="glow-orbit" />
            <div className="beam beam-left" />
            <div className="beam beam-right" />
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-heading">
          <h2>Why teams choose Adham AgriTech</h2>
          <p>
            Built for GCC greenhouses that need structured decision support without replacing
            existing hardware.
          </p>
        </div>
        <div className="panel-grid">
          {highlights.map((item) => (
            <div key={item.title} className="panel-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="workflow">
        <div className="workflow-header">
          <h2>Command center workflows</h2>
          <p>Everything needed for pilot-scale validation and long-term operations.</p>
        </div>
        <div className="workflow-grid">
          {workflows.map((flow) => (
            <div key={flow.title} className="workflow-card">
              <h3>{flow.title}</h3>
              <p>{flow.detail}</p>
              <button className="ghost">Explore</button>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <h2>Ready for a 2–6 week pilot?</h2>
          <p>
            Deploy across 1–3 zones, track water and energy KPIs, and deliver weekly executive
            summaries.
          </p>
        </div>
        <button className="cta">Schedule Pilot Design</button>
      </section>
    </main>
  );
}
