import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import ContactAdmin from "./pages/ContactAdmin";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import About from "./pages/About";  // ✅ Import About page



function App() {
  const [students, setStudents] = useState(() => JSON.parse(localStorage.getItem("students")) || []);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  const [messages, setMessages] = useState(() => JSON.parse(localStorage.getItem("messages")) || []);

  // ✅ Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Persist data
  useEffect(() => localStorage.setItem("students", JSON.stringify(students)), [students]);
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("messages", JSON.stringify(messages)), [messages]);
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  return (
    <Router>
      <div
        style={{
          backgroundColor: darkMode ? "#121212" : "#f9f9f9",
          color: darkMode ? "#ffffff" : "#000000",
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />

          <Route
            path="/user"
            element={
              user?.role === "user" ? (
                <UserDashboard
                  students={students}
                  addToCart={(student) => setCart([...cart, student])}
                  user={user}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/contact-admin"
            element={
              user ? (
                <ContactAdmin
                  messages={messages}
                  setMessages={setMessages}
                  user={user}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/admin"
            element={
              user?.role === "admin" ? (
                <AdminDashboard
                  students={students}
                  setStudents={setStudents}
                  messages={messages}
                  setMessages={setMessages}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/about" element={<About darkMode={darkMode} />} />


          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
