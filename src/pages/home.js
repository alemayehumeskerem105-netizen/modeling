import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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
          🌟 Yam Modeling School
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <nav style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <Link to="/" style={headerLinkStyle}>
              Home
            </Link>
            <span style={headerLinkStyle} onClick={() => scrollToSection(aboutRef)}>
              About
            </span>
            <span style={headerLinkStyle} onClick={() => scrollToSection(contactRef)}>
              Contact
            </span>
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
          backgroundImage: `linear-gradient(rgba(0,0,0,${darkMode ? 0.7 : 0.3}), rgba(0,0,0,${
            darkMode ? 0.7 : 0.3
          })), url('https://images.pexels.com/photos/3760851/pexels-photo-3760851.jpeg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          color: "#fff",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            marginBottom: "15px",
            fontWeight: "bold",
          }}
        >
          ✨Welcome to Yam Modeling School Portal
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Train with the best. Walk the runway. Shine with confidence.
        </p>
      </section>

      {/* 🎥 Video Section (updated) */}
      <section style={{ marginTop: "50px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            marginBottom: "20px",
          }}
        >
          🎬 Watch Our Training Session
        </h2>
        <video
          width="80%"
          controls
          style={{
            borderRadius: "20px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            maxWidth: "900px",
          }}
        >
          <source
            src="https://youtu.be/pJ3QFbZ4ecI?si=2xNjGdrYDJQnlXzV"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        <Link to="/login" style={buttonStyle("#4CAF50")}>
          🔑 Login
        </Link>
        <Link to="/signup" style={buttonStyle("#2196F3")}>
          📝 Signup
        </Link>
      </div>

      {/* Features */}
      <section
        style={{
          marginTop: "60px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          marginInline: "auto",
        }}
      >
        {[
          {
            title: "Runway Training",
            desc: "Master the walk with world-class coaches.",
            img: "https://cdn-icons-png.flaticon.com/512/814/814513.png",
          },
          {
            title: "Photoshoot Prep",
            desc: "Learn posing and expressions for modeling.",
            img: "https://cdn-icons-png.flaticon.com/512/2922/2922730.png",
          },
          {
            title: "Career Guidance",
            desc: "Get industry insights from professionals.",
            img: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
          },
          {
            title: "Networking",
            desc: "Connect with agencies and fashion houses.",
            img: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
          },
        ].map((f, i) => (
          <FeatureCard key={i} title={f.title} desc={f.desc} img={f.img} />
        ))}
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        style={{ marginTop: "80px", textAlign: "center", padding: "40px 20px" }}
      >
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>📖 About Us</h2>
        <p
          style={{
            maxWidth: "800px",
            margin: "20px auto",
            lineHeight: "1.6",
          }}
        >
          Yam Modeling School is Ethiopia’s leading modeling academy, helping
          students develop confidence, professionalism, and runway excellence.
          We offer personalized coaching, photo sessions, and international
          exposure opportunities.
        </p>
      </section>

      {/* Gallery */}
      <section style={{ marginTop: "70px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>📸 Gallery</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "15px",
            marginTop: "20px",
            maxWidth: "1000px",
            marginInline: "auto",
          }}
        >
          {gallery.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Gallery ${i}`}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "15px",
                cursor: "pointer",
              }}
              onClick={() => setLightboxImg(url)}
            />
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <img
            src={lightboxImg}
            alt="Enlarged"
            style={{ maxWidth: "95%", maxHeight: "85%", borderRadius: "12px" }}
          />
        </div>
      )}

      {/* Contact Section */}
      <section
        ref={contactRef}
        style={{
          marginTop: "100px",
          textAlign: "center",
          padding: "60px 20px",
          background: darkMode ? "#2a2438" : "#f5f5f5",
        }}
      >
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>📞 Contact Us</h2>
        <p>
          Email: <strong>info@yammodelingschool.com</strong>
        </p>
        <p>
          Phone: <strong>+251 911 234 567</strong>
        </p>
        <p>Address: Addis Ababa, Ethiopia</p>
      </section>

      {/* Footer */}
      <footer
        style={{
          marginTop: "50px",
          opacity: 0.8,
          fontSize: "0.9rem",
          textAlign: "center",
          padding: "20px",
        }}
      >
        © {new Date().getFullYear()} Yam Modeling School. All Rights Reserved.
      </footer>

      {/* Back to top */}
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
  cursor: "pointer",
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
      <img
        src={img}
        alt={title}
        style={{ width: "60px", height: "60px", marginBottom: "15px" }}
      />
      <h3
        style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", opacity: 0.85 }}>
        {desc}
      </p>
    </div>
  );
}
