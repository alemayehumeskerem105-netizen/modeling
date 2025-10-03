// src/pages/About.js
import React from "react";

export default function About({ darkMode }) {
  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#121212" : "#f9f9f9",
        color: darkMode ? "#ffffff" : "#000000",
        textAlign: "center",
      }}
    >
      <h1>About Us</h1>
      <p style={{ maxWidth: "700px", margin: "20px auto", lineHeight: "1.6" }}>
        Welcome to our Modeling School! 🌟  
        We are committed to providing aspiring models with the training, 
        confidence, and professional exposure they need to succeed in the 
        fashion and entertainment industries.  

        Our programs include runway training, photoshoot preparation, 
        personality development, and more — all designed to help our 
        students shine in the global modeling scene.  

        Whether you're just starting out or looking to refine your skills, 
        we are here to guide you every step of the way. 💃✨
      </p>

      <h2 style={{ marginTop: "40px" }}>Our Mission</h2>
      <p style={{ maxWidth: "700px", margin: "10px auto", lineHeight: "1.6" }}>
        To inspire, train, and connect talented individuals with opportunities 
        in modeling, fashion, and entertainment — empowering them to achieve 
        their dreams with confidence and professionalism.
      </p>
    </div>
  );
}
