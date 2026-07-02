import { useParams, Link } from 'react-router-dom';
import { listProyek } from '../data';
import { useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import { t } from '../translations';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = listProyek.find((p) => p.id === parseInt(id));
  const { lang } = useLang();
  const tr = t[lang].detail;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center" data-aos="fade-up">
          <h2 className="section-title">{tr.notFound}</h2>
          <Link to="/" className="btn-primary mt-4 inline-block">{tr.backHome}</Link>
        </div>
      </div>
    );
  }

  const name = lang === 'en' && project.nama_en ? project.nama_en : project.nama;
  const desc = lang === 'en' && project.desk_en ? project.desk_en : project.desk;

  return (
    <div className="project-detail-page min-h-screen pt-32 pb-20 px-6">
      <div className="container max-w-5xl mx-auto">

        <div className="detail-header mb-12" data-aos="fade-up">
          <h1 className="section-title text-5xl mb-6">{name}</h1>
          <div className="project-tags flex gap-3 flex-wrap">
            {project.tools.map((tool, index) => (
              <span key={index} className="project-tag px-4 py-2 text-sm">{tool}</span>
            ))}
          </div>
        </div>

        <div className="detail-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="detail-image-wrapper" data-aos="fade-right">
            <div className="glass-card overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src={project.detail || project.gambar}
                alt={name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="detail-info" data-aos="fade-left">
            <div className="glass-card p-10 rounded-3xl border border-white/10 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <i className="fa-solid fa-circle-info text-blue-400"></i> {tr.infoTitle}
              </h3>
              <p className="text-white/70 leading-relaxed mb-10 text-lg">
                {desc}
              </p>

              <div className="tech-stack bg-white/5 p-6 rounded-2xl border border-white/5">
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool, index) => (
                    <span key={index} className="bg-white/10 border border-white/10 px-4 py-2 rounded-xl text-sm text-white/90">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {project.id === 1 && (
                <div className="mt-10 p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                  <p className="text-blue-300 text-sm italic">
                    <i className="fa-solid fa-lightbulb mr-2"></i>
                    {tr.project1Note}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </div>
  );
};

export default ProjectDetail;
