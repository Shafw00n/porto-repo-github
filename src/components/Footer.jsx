import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const sectionId = id.replace("#", "");
    
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
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
              "Dreams don't come true by themselves; they require hard work, determination, and real effort."
            </blockquote>
          </div>
          
          <div className="footer-nav">
            <div className="footer-nav-col">
              <h4>Navigasi</h4>
              <ul>
                <li><Link to="/" onClick={(e) => handleNavClick(e, "beranda")}>Beranda</Link></li>
                <li><Link to="/" onClick={(e) => handleNavClick(e, "tentang")}>Tentang</Link></li>
                <li><Link to="/" onClick={(e) => handleNavClick(e, "proyek")}>Proyek</Link></li>
                <li><Link to="/" onClick={(e) => handleNavClick(e, "kontak")}>Kontak</Link></li>
              </ul>
            </div>
            
            <div className="footer-nav-col">
              <h4>Media Sosial</h4>
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
              <span>All rights reserved.</span>
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
