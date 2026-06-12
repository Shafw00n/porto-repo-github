import { listProyek } from '../data';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { t } from '../translations';

const Projects = () => {
  const { lang } = useLang();
  const tr = t[lang].projects;

  return (
    <section id="proyek" className="projects-section">
      <div className="container">
        <h2 className="section-title center" data-aos="fade-up">{tr.title}</h2>
        <p className="section-subtitle center" data-aos="fade-up" data-aos-delay="100">
          {tr.subtitle}
        </p>

        <div className="projects-grid">
          {listProyek.map((project, index) => {
            const name = lang === 'en' && project.nama_en ? project.nama_en : project.nama;
            const desc = lang === 'en' && project.desk_en ? project.desk_en : project.desk;

            return (
              <div
                key={project.id}
                className="project-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="project-inner">
                  <div className="project-image">
                    <img src={project.gambar} alt={name} />
                    <div className="project-overlay" />
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <h3>{name}</h3>
                      <div className="project-tags">
                        {project.tools.slice(0, 3).map((tool, i) => (
                          <span key={i} className="project-tag">{tool}</span>
                        ))}
                      </div>
                    </div>

                    <p className="project-desc">{desc}</p>

                    <div className="project-footer">
                      {project.detail && (
                        <Link to={`/project/${project.id}`} className="project-link">
                          {tr.viewDetail} <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
