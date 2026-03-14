import { listTools } from '../data';

const About = () => {
  return (
    <section id="tentang" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Pendidikan Section */}
          <div className="about-content" data-aos="fade-up">
            <h2 className="section-title">Tentang Saya</h2>
            <p className="about-desc">
              Saya adalah seorang pengembang yang memiliki ketertarikan besar dalam dunia teknologi dan pengembangan perangkat lunak. Saat ini saya menempuh pendidikan di <strong>Politeknik Negeri Malang</strong> program studi <strong>D3 Manajemen Informatika</strong>. Saya memiliki semangat untuk terus belajar dan mengembangkan kemampuan dalam membangun aplikasi web serta menciptakan solusi digital yang inovatif dan bermanfaat. Dengan pengalaman menggunakan berbagai tools dan framework modern, saya berkomitmen untuk menghasilkan karya yang tidak hanya fungsional tetapi juga memiliki desain yang menarik dan pengalaman pengguna yang baik.
            </p>
            <div className="education-timeline">
              <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <h3>Politeknik Negeri Malang</h3>
                  <span>Kota Kediri • Saat Ini</span>
                  <p>Mahasiswa D3 Manajemen Informatika</p>
                </div>
              </div>
              <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <h3>SMAN 7 Kota Kediri</h3>
                  <span>Kota Kediri • Alumni</span>
                  <p>Siswa Ilmu Pengetahuan Alam (IPA)</p>
                </div>
              </div>
              <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <h3>SMP Pondok Pesantren Islamic Center eLKISI</h3>
                  <span>Kab. Mojokerto • Alumni</span>
                  <p>Santri & Siswa Menengah Pertama</p>
                </div>
              </div>
              <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <h3>SDN Lirboyo 2 Kota Kediri</h3>
                  <span>Kota Kediri • Alumni</span>
                  <p>Siswa Dasar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="tools-content" data-aos="fade-up" data-aos-delay="200">
            <h2 className="section-title">Tools & Design</h2>
            <p className="tools-desc">
              Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website ataupun design.
            </p>
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
