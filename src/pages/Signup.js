import React, { useState } from "react";

export default function Signup() {
const [form, setForm] = useState({
email: "",
name: "",
password: "",
});

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
e.preventDefault();
alert(`Signed up!\n\nEmail: ${form.email}\nName: ${form.name}`);
setForm({ email: "", name: "", password: "" });
};

return (
<div
style={{
maxWidth: "400px",
margin: "60px auto",
padding: "30px",
borderRadius: "12px",
backgroundColor: "#fff",
boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
}}
>
<h2 style={{ textAlign: "center", marginBottom: "20px" }}>Signup</h2>
<form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}> <label>
Email:
<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
required
placeholder="Enter your email"
style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
/> </label> <label>
Name:
<input
type="text"
name="name"
value={form.name}
onChange={handleChange}
required
placeholder="Enter your name"
style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
/> </label> <label>
Password:
<input
type="password"
name="password"
value={form.password}
onChange={handleChange}
required
placeholder="Enter your password"
style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
/> </label>
<button
type="submit"
style={{
padding: "12px",
background: "#4CAF50",
color: "white",
border: "none",
borderRadius: "8px",
cursor: "pointer",
fontSize: "16px",
marginTop: "10px",
}}
>
Sign Up </button> </form> </div>
);
}
