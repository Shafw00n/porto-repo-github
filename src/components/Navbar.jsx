import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      // Jika tidak di home, arahkan ke home dulu lalu scroll
      navigate("/", { state: { scrollTo: sectionId } });
    }
    setIsOpen(false);
  };

  return (
    <>
      <style>{`
        .navbar-glass {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 40px);
          max-width: 1200px;
          z-index: 50;
          border-radius: 28px;
          padding: 16px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(32px) saturate(180%) brightness(1.1);
          -webkit-backdrop-filter: blur(32px) saturate(180%) brightness(1.1);
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow:
            0 0 0 0.5px rgba(255,255,255,0.08) inset,
            0 1px 0 rgba(255,255,255,0.25) inset,
            0 -1px 0 rgba(0,0,0,0.3) inset,
            0 8px 32px rgba(0,0,0,0.45),
            0 2px 8px rgba(0,0,0,0.3);
        }
        .navbar-glass::before {
          content: '';
          position: absolute;
          top: 0; left: 8%; right: 8%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent);
          border-radius: 100%;
          pointer-events: none;
        }
        .navbar-glass::after {
          content: '';
          position: absolute;
          top: 1px; left: 1px; right: 1px;
          height: 40%;
          background: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%);
          border-radius: 28px 28px 60% 60%;
          pointer-events: none;
        }
        .nav-link {
          color: rgba(255,255,255,0.65);
          font-size: 16px;
          font-weight: 500;
          padding: 10px 20px;
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .nav-link:hover {
          color: white;
          background: rgba(255,255,255,0.1);
          box-shadow: 0 1px 0 rgba(255,255,255,0.15) inset;
        }
        .cta-glass {
          position: relative;
          color: rgba(255,255,255,0.95);
          font-size: 16px;
          font-weight: 600;
          padding: 11px 28px;
          border-radius: 999px;
          text-decoration: none;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          backdrop-filter: blur(20px);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.3) inset,
            0 -1px 0 rgba(0,0,0,0.2) inset,
            0 4px 16px rgba(0,0,0,0.3);
          transition: all 0.25s ease;
          overflow: hidden;
          cursor: pointer;
        }
        .cta-glass::before {
          content: '';
          position: absolute;
          top: 0; left: 15%; right: 15%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
        }
        .cta-glass:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-0.5px);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.4) inset,
            0 6px 24px rgba(0,0,0,0.4);
        }

        /* MOBILE DROPDOWN — hitam putih */
        .mobile-dropdown {
          position: fixed;
          top: 96px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 40px);
          max-width: 1200px;
          z-index: 49;
          border-radius: 22px;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(40px) saturate(150%);
          -webkit-backdrop-filter: blur(40px) saturate(150%);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.15) inset,
            0 20px 60px rgba(0,0,0,0.7);
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          animation: slideDown 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-10px) scale(0.97); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
        }
        .mobile-nav-link {
          color: rgba(255,255,255,0.6);
          font-size: 16px;
          font-weight: 500;
          padding: 14px 16px;
          border-radius: 14px;
          text-decoration: none;
          text-align: center;
          transition: all 0.2s;
          cursor: pointer;
        }
        .mobile-nav-link:hover { background: rgba(255,255,255,0.07); color: white; }
        .cta-mobile {
          position: relative;
          text-align: center;
          margin-top: 4px;
          padding: 13px 28px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          color: #000;
          background: rgba(255,255,255,0.92);
          border: 1px solid rgba(255,255,255,0.5);
          box-shadow:
            0 1px 0 white inset,
            0 6px 24px rgba(0,0,0,0.5);
          transition: all 0.25s ease;
          overflow: hidden;
          cursor: pointer;
        }
        .cta-mobile::before {
          content: '';
          position: absolute;
          top: 0; left: 15%; right: 15%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,1), transparent);
        }
        .cta-mobile:hover { background: #fff; transform: translateY(-0.5px); }

        @media (max-width: 420px) {
          .navbar-glass { padding: 14px 18px; top: 12px; width: calc(100% - 24px); }
          .mobile-dropdown { top: 84px; width: calc(100% - 24px); }
        }
      `}</style>

      <header className="navbar-glass">
        <Link to="/" style={{ fontSize: 22, fontWeight: 700, color: 'rgba(255,255,255,0.95)', textDecoration: 'none', position: 'relative', zIndex: 1, letterSpacing: '-0.5px' }}>
          Portofolio
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1" style={{ listStyle: 'none', position: 'relative', zIndex: 1 }}>
          <li><a href="#beranda" onClick={(e) => handleNavClick(e, "beranda")} className="nav-link">Beranda</a></li>
          <li><a href="#tentang" onClick={(e) => handleNavClick(e, "tentang")} className="nav-link">Tentang</a></li>
          <li><a href="#proyek" onClick={(e) => handleNavClick(e, "proyek")} className="nav-link">Proyek</a></li>
          <li><a href="#kontak" onClick={(e) => handleNavClick(e, "kontak")} className="cta-glass">Hubungi Saya</a></li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: 9, cursor: 'pointer', color: 'white', position: 'relative', zIndex: 1 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round">
            {isOpen
              ? <><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></>
              : <><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></>
            }
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-dropdown md:hidden">
          {[["#beranda", "Beranda"], ["#tentang", "Tentang"], ["#proyek", "Proyek"]].map(([href, label]) => (
            <a key={href} href={href} onClick={(e) => handleNavClick(e, href)} className="mobile-nav-link">
              {label}
            </a>
          ))}
          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)', margin: '4px 0' }} />
          <a href="#kontak" onClick={(e) => handleNavClick(e, "kontak")} className="cta-mobile">
            Hubungi Saya
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
