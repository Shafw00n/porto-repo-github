import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const { lang } = useLang();
  const tr = t[lang].footer;
  const navTr = t[lang].nav;

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const sectionId = id.replace("#", "");
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <footer className="footer-section">
      <div className="container" data-aos="fade-up">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">Shofwan</h2>
            <blockquote className="footer-quote">
              &quot;Dreams don&apos;t come true by themselves; they require hard work, determination, and real effort.&quot;
            </blockquote>
          </div>

          <div className="footer-nav">
            <div className="footer-nav-col">
              <h4>{tr.navigation}</h4>
              <ul>
                <li><Link to="/" onClick={(e) => handleNavClick(e, "beranda")}>{navTr.home}</Link></li>
                <li><Link to="/" onClick={(e) => handleNavClick(e, "tentang")}>{navTr.about}</Link></li>
                <li><Link to="/" onClick={(e) => handleNavClick(e, "proyek")}>{navTr.projects}</Link></li>
                <li><Link to="/" onClick={(e) => handleNavClick(e, "kontak")}>{navTr.contact}</Link></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4>{tr.socialMedia}</h4>
              <ul>
                <li><a href="https://github.com/Shafw00n" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/shofwan-ali-santosa-44427b3a8/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/shafwoon" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://wa.me/6281335974917" target="_blank" rel="noreferrer">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider" />
          <div className="footer-copyright">
            <p>&copy; {currentYear} Shofwan Ali Santosa.</p>
            <div className="footer-legal">
              <span>{tr.rights}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Decor */}
      <div className="footer-glow" />
    </footer>
  );
};

export default Footer;
