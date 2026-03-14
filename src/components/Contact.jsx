import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const socials = [
    {
      icon: "fa-brands fa-linkedin-in",
      label: "LinkedIn",
      sub: "Shofwan Ali Santosa",
      href: "https://www.linkedin.com/in/shofwan-ali-santosa-44427b3a8/",
      color: "rgba(10,102,194,0.25)",
    },
    {
      icon: "fa-brands fa-github",
      label: "GitHub",
      sub: "Shafw00n",
      href: "https://github.com/Shafw00n",
      color: "rgba(255,255,255,0.1)",
    },
    {
      icon: "fa-brands fa-instagram",
      label: "Instagram",
      sub: "@shafwoon",
      href: "https://www.instagram.com/shafwoon?igsh=eGl0bm5vZG5wOHI4",
      color: "rgba(193,53,132,0.25)",
    },
    {
      icon: "fa-brands fa-whatsapp",
      label: "WhatsApp",
      sub: "+62 813-3597-4917",
      href: "https://wa.me/6281335974917",
      color: "rgba(37,211,102,0.2)",
    },
  ];

  return (
    <section id="kontak" className="contact-section">
      <div className="container">
        <h2 className="section-title center" data-aos="fade-up">Hubungi Saya</h2>
        <p className="section-subtitle center" data-aos="fade-up" data-aos-delay="100">
          Tertarik bekerja sama atau sekadar menyapa? Jangan ragu untuk menghubungi saya.
        </p>

        <div className="contact-wrapper">

          <div className="contact-left" data-aos="fade-right" data-aos-delay="200">
            <p className="contact-label">Temukan saya di</p>
            <div className="social-grid">
              {socials.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                  data-aos="fade-up"
                  data-aos-delay={300 + (index * 100)}
                >
                  <div
                    className="social-icon-wrap"
                    style={{ background: item.color }}
                  >
                    <i className={item.icon}></i>
                  </div>
                  <div className="social-info">
                    <span className="social-name">{item.label}</span>
                    <span className="social-sub">{item.sub}</span>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square social-arrow"></i>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right" data-aos="fade-left" data-aos-delay="200">
            <div className="email-card">
              <div className="email-header">
                <div className="email-icon-wrap">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="email-title">Kirim Pesan</p>
                  <p className="email-addr">alisshofwan@gmail.com</p>
                </div>
              </div>

              <form 
                action="https://formsubmit.co/alisshofwan@gmail.com" 
                method="POST"
                className="contact-form"
              >
                {/* Honeypot & Config */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="Pesan Baru dari Portofolio!" />
                <input type="hidden" name="_next" value={window.location.href} />
                
                <div className="form-group">
                  <label>Nama</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nama kamu"
                    className="glass-input"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@kamu.com"
                    className="glass-input"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Pesan</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tulis pesanmu di sini..."
                    className="glass-input"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn-send">
                  <i className="fa-solid fa-paper-plane"></i>
                  Kirim Pesan
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;