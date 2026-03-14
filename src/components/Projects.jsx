import { listProyek } from '../data';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="proyek" className="projects-section">
      <div className="container">
        <h2 className="section-title center" data-aos="fade-up">Proyek Unggulan</h2>
        <p className="section-subtitle center" data-aos="fade-up" data-aos-delay="100">
          Beberapa karya digital yang telah saya kembangkan dengan fokus pada fungsionalitas dan estetika.
        </p>

        <div className="projects-grid">
          {listProyek.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-inner">
                <div className="project-image">
                  <img src={project.gambar} alt={project.nama} />
                  <div className="project-overlay" />
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.nama}</h3>
                    <div className="project-tags">
                      {project.tools.slice(0, 3).map((tool, index) => (
                        <span key={index} className="project-tag">{tool}</span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="project-desc">{project.desk}</p>
                  
                  <div className="project-footer">
                    {project.detail && (
                      <Link to={`/project/${project.id}`} className="project-link">
                        Lihat Detail <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
