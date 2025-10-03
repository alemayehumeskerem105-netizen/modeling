// src/pages/Contact.js
import React from "react";

export default function Contact({ darkMode }) {
  return (
    <div
      style={{
        padding: "40px",
        background: darkMode ? "#111" : "#fff",
        color: darkMode ? "#eee" : "#000",
        minHeight: "80vh",
      }}
    >
      <h1>Contact Us</h1>
      <p>Email: support@example.com</p>
      <p>Phone: +123 456 789</p>
    </div>
  );
}
