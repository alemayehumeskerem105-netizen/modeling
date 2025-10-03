import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  // Count quantities of each student
  const quantities = cart.reduce((acc, student) => {
    acc[student.id] = (acc[student.id] || 0) + 1;
    return acc;
  }, {});

  // Unique students
  const uniqueStudents = Object.values(
    cart.reduce((acc, student) => {
      acc[student.id] = student;
      return acc;
    }, {})
  );

  // Increase quantity
  const increaseQty = (student) => {
    setCart([...cart, student]);
  };

  // Decrease quantity
  const decreaseQty = (studentId) => {
    const index = cart.findIndex((s) => s.id === studentId);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>👩‍🎓 Selected Students</h1>

      {cart.length === 0 ? (
        <>
          <p>No students selected yet.</p>
          <Link to="/user">Back to Students</Link>
        </>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {uniqueStudents.map((student) => (
              <li
                key={student.id}
                style={{
                  marginBottom: 12,
                  padding: 12,
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={student.image}
                  alt={student.name}
                  style={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <div style={{ flex: 1, marginLeft: 12 }}>
                  <h3>{student.name}</h3>
                  <p>Height: {student.height} cm</p>
                  <p>Weight: {student.weight} kg</p>
                  <p>Quantity: {quantities[student.id]}</p>
                </div>
                <div>
                  <button
                    onClick={() => increaseQty(student)}
                    style={{ marginRight: 6 }}
                  >
                    +
                  </button>
                  <button onClick={() => decreaseQty(student.id)}>-</button>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to="/user"
            style={{ marginTop: 20, display: "inline-block", textDecoration: "underline" }}
          >
            Back to Students
          </Link>
        </>
      )}
    </div>
  );
}
