import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

const MAX_CHARS = 500;

const Contact = () => {
  const { lang } = useLang();
  const tr = t[lang].contact;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > MAX_CHARS) return;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/alisshofwan@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject:
              lang === "id"
                ? "Pesan Baru dari Portofolio!"
                : "New Message from Portfolio!",
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const charsLeft = MAX_CHARS - form.message.length;
  const isLow = charsLeft <= 50;

  return (
    <section id="kontak" className="contact-section">
      <div className="container">
        <h2 className="section-title center" data-aos="fade-up">
          {tr.title}
        </h2>
        <p
          className="section-subtitle center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {tr.subtitle}
        </p>

        <div className="contact-wrapper">
          {/* Social Links */}
          <div
            className="contact-left"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <p className="contact-label">{tr.findMe}</p>
            <div className="social-grid">
              {socials.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
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

          {/* Email / Form Card */}
          <div
            className="contact-right"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="email-card">
              <div className="email-header">
                <div className="email-icon-wrap">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="email-title">{tr.sendMessage}</p>
                  <p className="email-addr">alisshofwan@gmail.com</p>
                </div>
              </div>

              {/* SUCCESS STATE */}
              {status === "success" ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "32px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                  }}
                  data-aos="zoom-in"
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "rgba(34,197,94,0.15)",
                      border: "1px solid rgba(34,197,94,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
                    }}
                  >
                    ✅
                  </div>
                  <h3
                    style={{
                      color: "white",
                      fontSize: 20,
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    {tr.successTitle}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: 14,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {tr.successDesc}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-send"
                    style={{ marginTop: 8 }}
                  >
                    <i className="fa-solid fa-rotate-left"></i>
                    {tr.successBtn}
                  </button>
                </div>
              ) : (
                /* FORM */
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label>{tr.nameLabel}</label>
                    <input
                      type="text"
                      name="name"
                      placeholder={tr.namePlaceholder}
                      className="glass-input"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={status === "sending"}
                    />
                  </div>

                  <div className="form-group">
                    <label>{tr.emailLabel}</label>
                    <input
                      type="email"
                      name="email"
                      placeholder={tr.emailPlaceholder}
                      className="glass-input"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={status === "sending"}
                    />
                  </div>

                  <div className="form-group">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 6,
                      }}
                    >
                      <label style={{ margin: 0 }}>{tr.messageLabel}</label>
                      <span
                        style={{
                          fontSize: 12,
                          color: isLow
                            ? "rgba(248,113,113,0.9)"
                            : "rgba(255,255,255,0.35)",
                          fontWeight: isLow ? 600 : 400,
                          transition: "color 0.2s",
                        }}
                      >
                        {charsLeft} {tr.charLeft}
                      </span>
                    </div>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder={tr.messagePlaceholder}
                      className="glass-input"
                      value={form.message}
                      onChange={handleChange}
                      required
                      disabled={status === "sending"}
                    />
                  </div>

                  {status === "error" && (
                    <p
                      style={{
                        color: "rgba(248,113,113,0.9)",
                        fontSize: 13,
                        margin: "-4px 0 8px",
                      }}
                    >
                      <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                      {tr.errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn-send"
                    disabled={status === "sending"}
                    style={{ opacity: status === "sending" ? 0.7 : 1 }}
                  >
                    {status === "sending" ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin"></i>
                        {tr.sending}
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-paper-plane"></i>
                        {tr.sendBtn}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;