import React from "react";

export default function Contact({ darkMode }) {
return (
<div
style={{
maxWidth: "500px",
 margin: "60px auto",
padding: "30px",
borderRadius: "12px",
backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
color: darkMode ? "#ffffff" : "#000000",
textAlign: "center",
boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
}}
> <h2>📞 Contact Us</h2> <p> <strong>Email:</strong> [yam@gmail.com](mailto:yam@gmail.com) </p> <p> <strong>Phone:</strong> 0905673450 </p> </div>
);
}
