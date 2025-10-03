import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const testimonials = [
    "“After joining, I landed my first modeling contract in 3 months!” – Student",
    "“The best platform for aspiring models to grow.” – Fashion Coach",
    "“Professional coaches and amazing guidance for my career.” – Alumni",
  ];

  const gallery = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHJcDEeOGs5Kkv-nt-YS79CPDXdBcUQBtTg&s",
    "https://images.pexels.com/photos/1937335/pexels-photo-1937335.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiEdUK5r9GNDL81X-Ert13A1tmK5Lc7rm7vA&s",
    "https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg",
    "https://images.pexels.com/photos/1805417/pexels-photo-1805417.jpeg",
    "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg",
  ];

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Show top button
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode
          ? "linear-gradient(135deg, #1f1c2c, #928dab)"
          : "linear-gradient(135deg, #f8f9fa, #ffffff)",
        color: darkMode ? "#fff" : "#111",
        fontFamily: "Arial, sans-serif",
        transition: "0.5s",
      }}
    >
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 20px",
          background: darkMode ? "#1f1c2c" : "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          transition: "0.3s",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "clamp(1.2rem, 3vw, 1.8rem)" }}>
          🌟 Modeling School
        </h2>

        <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
          <nav style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <Link to="/" style={headerLinkStyle}>
              Home
            </Link>
            <Link to="/about" style={headerLinkStyle}>
              About
            </Link>
            <Link to="/contact" style={headerLinkStyle}>
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              border: "none",
              background: darkMode ? "#FFD700" : "#333",
              color: darkMode ? "#000" : "#fff",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          margin: "20px auto",
          padding: "220px 20px",
          maxWidth: "1100px",
          textAlign: "center",
          borderRadius: "20px",
          backgroundImage: `linear-gradient(
            rgba(0,0,0,${darkMode ? 0.7 : 0.3}),
            rgba(0,0,0,${darkMode ? 0.7 : 0.3})
          ), url('https://images.pexels.com/photos/3760851/pexels-photo-3760851.jpeg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          color: "#fff",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          transition: "0.5s ease-in-out",
        }}
      >
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "15px", fontWeight: "bold" }}>
          ✨Welcome to Modeling School Portal
        </h1>
        <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.3rem)", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6", opacity: 0.95 }}>
          Train with the best. Walk the runway. Shine with confidence.
        </p>
      </section>

      {/* Login / Signup */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px", marginTop: "30px" }}>
        <Link to="/login" style={buttonStyle("#4CAF50")}>
          🔑 Login
        </Link>
        <Link to="/signup" style={buttonStyle("#2196F3")}>
          📝 Signup
        </Link>
      </div>

      {/* Features */}
      <section style={{ marginTop: "60px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", maxWidth: "1000px", marginInline: "auto" }}>
        {[
          { title: "Runway Training", desc: "Master the walk with world-class coaches.", img: "https://cdn-icons-png.flaticon.com/512/814/814513.png" },
          { title: "Photoshoot Prep", desc: "Learn posing and expressions for modeling.", img: "https://cdn-icons-png.flaticon.com/512/2922/2922730.png" },
          { title: "Career Guidance", desc: "Get industry insights from professionals.", img: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png" },
          { title: "Networking", desc: "Connect with agencies and fashion houses.", img: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png" },
        ].map((f, i) => (
          <FeatureCard key={i} title={f.title} desc={f.desc} img={f.img} />
        ))}
      </section>

      {/* Gallery */}
      <section style={{ marginTop: "70px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>📸 Modeling School Gallery</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "15px", marginTop: "20px", maxWidth: "1000px", marginInline: "auto" }}>
          {gallery.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Modeling ${i}`}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px", cursor: "pointer", transition: "0.3s" }}
              onClick={() => setLightboxImg(url)}
            />
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div onClick={() => setLightboxImg(null)} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.8)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999, cursor: "pointer" }}>
          <img src={lightboxImg} alt="Enlarged" style={{ maxWidth: "95%", maxHeight: "85%", borderRadius: "12px" }} />
        </div>
      )}

      {/* Testimonials */}
      <section style={{ marginTop: "70px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>⭐ Success Stories</h2>
        <p style={{ maxWidth: "600px", margin: "10px auto", opacity: 0.8 }}>
          {testimonials[testimonialIndex]}
        </p>
      </section>

      {/* Stats / Achievements */}
      <section style={{ textAlign: "center", marginTop: "80px" }}>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>🎯 Achievements</h2>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "40px", marginTop: "30px" }}>
          {[
            { label: "Students Enrolled", value: 250 },
            { label: "Contracts Signed", value: 80 },
            { label: "Photoshoots Done", value: 120 },
          ].map((stat, i) => (
            <div key={i} style={{ fontSize: "1.2rem", minWidth: "150px" }}>
              <strong style={{ fontSize: "2rem", color: "#FF4081" }}>{stat.value}+</strong>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section style={{ textAlign: "center", marginTop: "70px" }}>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>🎬 Watch Our Journey</h2>
        <div style={{ marginTop: "20px" }}>
          <iframe
            width="80%"
            height="400"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Modeling School Promo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "15px" }}
          ></iframe>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: "900px", margin: "80px auto", padding: "0 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>❓ Frequently Asked Questions</h2>
        {[
          { q: "Do I need prior experience?", a: "No, we welcome beginners and advanced students." },
          { q: "What is the duration of the program?", a: "Our courses range from 3 to 12 months depending on specialization." },
          { q: "Are online classes available?", a: "Yes, we offer live and recorded sessions online." },
        ].map((item, i) => (
          <div key={i} style={{ marginTop: "20px", padding: "15px", borderRadius: "10px", background: "#f1f1f1" }}>
            <h4 style={{ marginBottom: "5px" }}>Q: {item.q}</h4>
            <p>A: {item.a}</p>
          </div>
        ))}
      </section>

      {/* Newsletter */}
      <section style={{ textAlign: "center", marginTop: "70px", marginBottom: "70px" }}>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>📩 Stay Updated</h2>
        <p>Subscribe to our newsletter for latest updates and offers.</p>
        <input
          type="email"
          placeholder="Your email"
          style={{ padding: "12px 20px", borderRadius: "25px", border: "1px solid #ccc", marginRight: "10px", width: "250px", maxWidth: "80%" }}
        />
        <button style={{ ...buttonStyle("#FF4081") }}>Subscribe</button>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: "50px", opacity: 0.8, fontSize: "0.9rem", textAlign: "center", padding: "20px" }}>
        © {new Date().getFullYear()} Modeling School Portal. All Rights Reserved.
      </footer>

      {/* Back to top button */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            padding: "12px 18px",
            borderRadius: "50%",
            background: "#FF4081",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            zIndex: 1000,
            fontSize: "1.5rem",
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
}

// Styles
const buttonStyle = (color) => ({
  padding: "14px 32px",
  backgroundColor: color,
  color: "white",
  borderRadius: "30px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "clamp(0.9rem, 2vw, 1rem)",
});

const headerLinkStyle = {
  color: "#111",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "clamp(0.9rem, 2vw, 1rem)",
};

function FeatureCard({ title, desc, img }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #fff, #f9f9f9)",
        padding: "25px",
        borderRadius: "18px",
        textAlign: "center",
        boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.15)";
      }}
    >
      <img src={img} alt={title} style={{ width: "60px", height: "60px", marginBottom: "15px" }} />
      <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", marginBottom: "10px" }}>{title}</h3>
      <p style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", opacity: 0.85 }}>{desc}</p>
    </div>
  );
}
