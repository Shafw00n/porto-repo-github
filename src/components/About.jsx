import { listTools } from '../data';
import { useLang } from '../context/LanguageContext';
import { t } from '../translations';

const statCards = [
  { icon: 'fa-solid fa-folder-open', value: '6', keyId: 'projects' },
  { icon: 'fa-solid fa-screwdriver-wrench', value: '12+', keyId: 'tools' },
  { icon: 'fa-solid fa-graduation-cap', value: '3+', keyId: 'years' },
];

const About = () => {
  const { lang } = useLang();
  const tr = t[lang].about;

  return (
    <section id="tentang" className="about-section">
      <div className="container">
        <div className="about-grid">

          {/* Tentang & Pendidikan */}
          <div className="about-content" data-aos="fade-up">
            <h2 className="section-title">{tr.title}</h2>

            <p
              className="about-desc"
              dangerouslySetInnerHTML={{ __html: tr.bio }}
            />

            {/* Stat Cards */}
            <div
              style={{
                display: 'flex',
                gap: 12,
                margin: '28px 0',
                flexWrap: 'wrap',
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {statCards.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    flex: '1 1 80px',
                    minWidth: 80,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 16,
                    padding: '16px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 6,
                    transition: 'transform 0.2s, background 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.09)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <i
                    className={stat.icon}
                    style={{ color: 'rgba(255,255,255,0.45)', fontSize: 18 }}
                  />
                  <strong style={{ fontSize: 22, fontWeight: 700, color: 'white', lineHeight: 1 }}>
                    {stat.value}
                  </strong>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', textAlign: 'center', letterSpacing: '0.3px' }}>
                    {tr.stats[stat.keyId]}
                  </span>
                </div>
              ))}
            </div>

            {/* Education Timeline */}
            <div className="education-timeline">
              {tr.edu.map((item, i) => (
                <div
                  key={i}
                  className="timeline-item"
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 100}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-info">
                    <h3>{item.school}</h3>
                    <span>{item.location}</span>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div className="tools-content" data-aos="fade-up" data-aos-delay="200">
            <h2 className="section-title">{tr.toolsTitle}</h2>
            <p className="tools-desc">{tr.toolsDesc}</p>
            <div className="tools-grid">
              {listTools.map((tool, index) => (
                <div
                  key={tool.id}
                  className={`tool-card ${tool.nama.toLowerCase().replace(/\s+/g, '-')}`}
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <div className="tool-img-wrapper">
                    <img src={tool.gambar} alt={tool.nama} />
                  </div>
                  <div className="tool-info">
                    <h4>{tool.nama}</h4>
                    <p>{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
