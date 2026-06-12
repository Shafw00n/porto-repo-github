import DataImage from "../data";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

function Hero() {
  const { lang } = useLang();
  const tr = t[lang].hero;

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
            <a href="/cv_shofwanalisantosa.pdf" download className="btn-primary">
              {tr.downloadCV}
            </a>
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
    </>
  );
}

export default Hero;