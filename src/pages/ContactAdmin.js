import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ContactAdmin({ messages, setMessages, user }) {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const studentId = searchParams.get("studentId");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const student = cart.find((s) => s.id.toString() === studentId);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message || !student || !user) return;

    const newMsg = {
      id: Date.now(),
      studentName: student.name,
      userEmail: user.email || "",   // ensure email exists
      messageText: message,
    };

    setMessages([...messages, newMsg]);
    setMessage("");

    navigate("/user"); // back to dashboard
  };

  if (!student) return <p>No student selected.</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Contact Admin</h2>
      <p>
        You are contacting admin regarding: <strong>{student.name}</strong>
      </p>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />
        <button type="submit" style={{ padding: "6px 12px" }}>
          Send Message
        </button>
      </form>
    </div>
  );
}
