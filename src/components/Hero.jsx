import { useState } from "react";
import DataImage from "../data";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

function Hero() {
  const { lang } = useLang();
  const tr = t[lang].hero;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cvLang, setCvLang] = useState('id');

  const cvUrl = cvLang === 'id' ? "/assets/cv_indo.pdf" : "/assets/cv_en.pdf";
  const cvFileName = cvLang === 'id' ? "CV_Shofwan_Ali_ID.pdf" : "CV_Shofwan_Ali_EN.pdf";

  return (
    <>
      <div className="bg-scene" />

      <section className="hero-section" id="beranda">

        <div className="hero-left" data-aos="fade-right">
          <div className="hero-greeting">
            <span className="status-dot" />
            {tr.greeting}
          </div>

          <h1 className="hero-title">
            Hello World! <br />
            I&apos;m Shofwan
          </h1>

          <p className="hero-sub">
            {tr.sub}
          </p>

          <div className="hero-actions">
            <button onClick={() => setIsModalOpen(true)} className="btn-primary">
              {tr.previewCV}
            </button>
            <button
              onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              {tr.contactMe}
            </button>
          </div>
        </div>

        <div className="hero-right" data-aos="fade-left">
          <div className="avatar-wrapper">
            <div className="badge badge-1">
              <div className="badge-icon purple">
                <i className="fa-solid fa-pen-nib"></i>
              </div>
              UI / UX Design
            </div>
            <div className="badge badge-2">
              <div className="badge-icon blue">
                <i className="fa-solid fa-code"></i>
              </div>
              Fullstack Developer
            </div>
            <div className="badge badge-3">
              <div className="badge-icon green">
                <i className="fa-solid fa-database"></i>
              </div>
              MySQL Database
            </div>
            <div className="badge badge-4">
              <div className="badge-icon orange">
                <i className="fa-brands fa-laravel"></i>
              </div>
              Laravel
            </div>
            <div className="badge badge-6">
              <div className="badge-icon indigo">
                <i className="fa-brands fa-php"></i>
              </div>
              PHP Native
            </div>
            <div className="badge badge-5">
              <div className="badge-icon sky">
                <i className="fa-solid fa-wind"></i>
              </div>
              Tailwind CSS
            </div>
            <div className="avatar-glow" />
            <div className="avatar-card">
              <img
                src={DataImage.HeroImage}
                alt="Avatar"
                className="avatar-img"
              />
            </div>
          </div>
        </div>

      </section>

      {/* ── CV PREVIEW MODAL ── */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>

            {/* Header */}
            <div className="modal-header">
              <div className="modal-header-left">
                <div className="modal-cv-icon">
                  <i className="fa-regular fa-file-pdf"></i>
                </div>
                <div>
                  <div className="modal-header-title">Curriculum Vitae</div>
                  <div className="modal-header-sub">Shofwan Ali Santosa</div>
                </div>
              </div>

              <div className="modal-header-right">
                {/* Language switcher */}
                <div className="modal-lang-toggle">
                  <button
                    className={`modal-tab ${cvLang === 'id' ? 'active' : ''}`}
                    onClick={() => setCvLang('id')}
                  >
                    {tr.cvIndo}
                  </button>
                  <span className="modal-lang-divider">|</span>
                  <button
                    className={`modal-tab ${cvLang === 'en' ? 'active' : ''}`}
                    onClick={() => setCvLang('en')}
                  >
                    {tr.cvEnglish}
                  </button>
                </div>

                {/* Download button (header, secondary) */}
                <a
                  href={cvUrl}
                  download={cvFileName}
                  className="modal-download-btn"
                  title="Download CV"
                >
                  <i className="fa-solid fa-download"></i>
                  <span>Download</span>
                </a>

                {/* Close */}
                <button className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            {/* PDF iframe */}
            <div className="modal-body">
              <iframe
                src={`${cvUrl}#toolbar=0&view=FitH`}
                title="CV Preview"
                className="cv-iframe"
              />
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <div className="modal-footer-info">
                <div className="modal-footer-status">
                  <span className="modal-footer-dot"></span>
                  <span>
                    {cvLang === 'id' ? 'Bahasa Indonesia' : 'English'} &mdash; PDF
                  </span>
                </div>
              </div>

              <div className="modal-footer-actions">
                <a
                  href={cvUrl}
                  download={cvFileName}
                  className="btn-modal-dl"
                >
                  <i className="fa-solid fa-download"></i>
                  Download {cvLang === 'id' ? 'CV (ID)' : 'CV (EN)'}
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Hero;