const highlights = [
  {
    title: "مراقبة بيئية لحظية",
    desc: "قراءات حرارة/رطوبة/CO₂ مع تنبيهات ذكية وفق العتبات التشغيلية."
  },
  {
    title: "تحليل رؤية حاسوبي",
    desc: "اكتشاف مؤشرات الإجهاد البصري واللامركزية في الغطاء النباتي."
  },
  {
    title: "إدارة عمليات الري والتسميد",
    desc: "سجل عمليات مُنظم وربط مباشر بالأثر على المحصول."
  }
];

const metrics = [
  { label: "البيوت المتصلة", value: "12+" },
  { label: "نقاط القياس", value: "240" },
  { label: "توفير المياه المتوقع", value: "18%" }
];

const ops = [
  {
    title: "مركز القرار التشغيلي",
    desc: "لوحة تحكم موحدة تجمع الاستشعار، الرؤية، وسجلات العمليات في خريطة واحدة للبيت المحمي."
  },
  {
    title: "تحذيرات مصنّفة حسب الأولوية",
    desc: "P0/P1/P2 مع توصيات قابلة للتنفيذ تساعد فرق التشغيل على التحرك سريعًا."
  },
  {
    title: "تقارير أسبوعية للقيادة",
    desc: "ملخصات أداء تبرز العائد، المخاطر، وفرص التحسين خلال 2-6 أسابيع."
  }
];

export default function Home() {
  return (
    <main className="page">
      <div className="bg-grid" />
      <header className="nav">
        <div className="brand">
          <span className="brand-mark" />
          <div>
            <p className="brand-title">Adham AgriTech</p>
            <p className="brand-sub">OSIRIS | Command Center</p>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#features">المزايا</a>
          <a href="#workflow">سير العمل</a>
          <a href="#pilot">التجربة</a>
        </nav>
        <button className="cta">احجز عرضًا تجريبيًا</button>
      </header>

      <section className="hero">
        <div className="hero-text">
          <p className="tag">نظام عام لإدارة البيوت المحمية في الخليج</p>
          <h1>
            منصة تشغيل موحدة لتحويل البيانات الزراعية إلى قرارات قابلة للتنفيذ.
          </h1>
          <p className="subtitle">
            OSIRIS يجمع الرؤية الحاسوبية، الاستشعار، وسجلات العمليات ليقدم تنبيهات واضحة،
            وخطط تدخل مدروسة، ومؤشرات نجاح قابلة للقياس.
          </p>
          <div className="hero-actions">
            <button className="cta primary">ابدأ التجربة</button>
            <button className="cta ghost">تحميل الملف التعريفي</button>
          </div>
          <div className="metrics">
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <span>{metric.value}</span>
                <p>{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-glow" />
          <div className="panel-content">
            <div className="panel-header">
              <h3>Command Center</h3>
              <span className="status">LIVE</span>
            </div>
            <div className="panel-body">
              <div className="signal">
                <p>Zone A-3</p>
                <span>إجهاد حراري محتمل</span>
              </div>
              <div className="signal">
                <p>Zone B-1</p>
                <span>تذبذب RH + تباطؤ التهوية</span>
              </div>
              <div className="signal">
                <p>Zone C-2</p>
                <span>تباين النمو + توصية معاينة</span>
              </div>
              <div className="panel-chart">
                <div className="chart-line" />
                <div className="chart-line" />
                <div className="chart-line" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-title">
          <h2>قدرات المنصة</h2>
          <p>تجميع ذكي للبيانات مع توصيات تشغيلية مباشرة للفرق الميدانية.</p>
        </div>
        <div className="grid">
          {highlights.map((item) => (
            <div className="card" key={item.title}>
              <div className="card-dot" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="workflow" className="section split">
        <div className="section-title">
          <h2>سير عمل تشغيلي واضح</h2>
          <p>
            من جمع البيانات إلى قرارات اليوم التالي، كل خطوة مصممة لتقليل الهدر وتحسين
            جودة المحصول.
          </p>
        </div>
        <div className="stack">
          {ops.map((item) => (
            <div className="stack-row" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <span className="pill">جاهز للتجربة</span>
            </div>
          ))}
        </div>
      </section>

      <section id="pilot" className="section pilot">
        <div className="section-title">
          <h2>تصميم تجربة تشغيلية (Pilot)</h2>
          <p>للمزارع في الخليج: 2-6 أسابيع، نطاق محدود، ومؤشرات قياس واضحة.</p>
        </div>
        <div className="pilot-grid">
          <div className="card">
            <h3>النطاق</h3>
            <p>1-3 بيوت محمية مع 4-8 مناطق تشغيلية.</p>
          </div>
          <div className="card">
            <h3>المدخلات المطلوبة</h3>
            <p>قراءات مناخية + سجلات ري + لقطات كاميرا دورية.</p>
          </div>
          <div className="card">
            <h3>مؤشرات النجاح</h3>
            <p>خفض استهلاك المياه، تقليل حالات الإجهاد، وتسريع الاستجابة الميدانية.</p>
          </div>
        </div>
        <div className="footer-cta">
          <div>
            <h3>جاهزون للبدء؟</h3>
            <p>تواصل معنا لوضع خطة تشغيلية تناسب موقعك.</p>
          </div>
          <button className="cta primary">تواصل الآن</button>
        </div>
      </section>
    </main>
  );
}
