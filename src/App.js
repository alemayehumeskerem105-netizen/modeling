import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import Signup from "./pages/Signup";

function App() {
  // ✅ App states
  const [students, setStudents] = useState(() => JSON.parse(localStorage.getItem("students")) || []);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  const [messages, setMessages] = useState(() => JSON.parse(localStorage.getItem("messages")) || []);
  const [darkMode, setDarkMode] = useState(false); // ✅ Dark mode state

  // ✅ Persist data to localStorage
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
          {/* ✅ Home page now includes About and Contact sections inside */}
          <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />

          {/* ✅ Login page */}
          <Route path="/login" element={<Login setUser={setUser} />} />

          {/* ✅ User Dashboard - Protected Route */}
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

          {/* ✅ Admin Dashboard - Protected Route */}
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

          {/* ✅ Signup page */}
          <Route path="/signup" element={<Signup />} />

          {/* Redirect all unknown routes to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
