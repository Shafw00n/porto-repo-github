import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import './index.css';

/**
 * PROJECT DOCUMENTATION: Portofolio Shofwan Ali Santosa
 * ---------------------------------------------------
 * Aplikasi ini adalah website portofolio pribadi yang dibangun menggunakan React
 * dan Vite. Desainnya berfokus pada pengalaman digital yang modern, responsif, 
 * dan memiliki sentuhan desain yang bersih.
 * 
 * TEKNOLOGI & TOOLS YANG DIGUNAKAN:
 * 1. React 19 (UI Library)
 * 2. Vite (Build Tool / Dev Server)
 * 3. Tailwind CSS 4 (Styling)
 * 4. Font Awesome (Icons)
 * 5. Google Fonts (Poppins)
 * 6. AOS (Animate On Scroll)
 * 7. React Router (Navigation)
 * 
 * STRUKTUR KOMPONEN:
 * - Navbar: Navigasi utama aplikasi (Glassmorphism effect)
 * - Hero: Bagian perkenalan utama dengan foto profil dan badge skill dinamis
 */

function App() {
  const location = useLocation();

  useEffect(() => {
    // Inisialisasi AOS (Animate On Scroll)
    if (window.AOS) {
      window.AOS.init({
        duration: 1000, // Durasi animasi dalam milidetik
        once: true,     // Animasi hanya berjalan sekali saat scroll
        offset: 100,    // Jarak dari viewport sebelum animasi mulai
        easing: 'ease-out-cubic',
      });
    }
  }, []);

  // Handle scroll to section when navigating from another page
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Berikan sedikit delay agar komponen selesai render
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen selection:bg-white/10 selection:text-white overflow-x-hidden">
      {/* Header & Navigasi */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        <Routes>
          {/* Halaman Utama */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </>
          } />

          {/* Halaman Detail Proyek */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

      {/* Footer sebagai penutup */}
      <Footer />
    </div>
  );
}

export default App;