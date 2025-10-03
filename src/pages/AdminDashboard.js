import React, { useState } from "react";

export default function AdminDashboard({ students = [], setStudents, messages = [], setMessages }) {
  const [view, setView] = useState("students");
  const [form, setForm] = useState({
    name: "",
    age: "",
    experience: "",
    weight: "",
    height: "",
    photos: [], // array for 4 photos
  });
  const [editingId, setEditingId] = useState(null);

  // Handle image upload (up to 4)
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const newPhotos = [...form.photos];
      newPhotos[index] = reader.result;
      setForm({ ...form, photos: newPhotos });
    };
    reader.readAsDataURL(file);
  };

  // Add or edit student
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) return;

    if (editingId) {
      setStudents(
        students.map((s) =>
          s.id === editingId ? { ...form, id: editingId, photos: form.photos || [] } : s
        )
      );
      setEditingId(null);
    } else {
      setStudents([...students, { ...form, id: Date.now(), photos: form.photos || [] }]);
    }

    setForm({ name: "", age: "", experience: "", weight: "", height: "", photos: [] });
  };

  // Edit / Delete student
  const handleEditStudent = (student) => {
    setForm(student);
    setEditingId(student.id);
  };
  const handleDeleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
    if (editingId === id)
      setForm({ name: "", age: "", experience: "", weight: "", height: "", photos: [] });
  };

  // Delete message
  const handleDeleteMessage = (id) => setMessages(messages.filter((msg) => msg.id !== id));

  return (
    <div style={{ padding: 30, fontFamily: "Arial, sans-serif", maxWidth: 900, margin: "0 auto" }}>
      <h1>Admin Dashboard</h1>

      {/* Students View */}
      {view === "students" && (
        <div>
          <h2>Students Table</h2>

          {/* Form to add/edit student */}
          <form
            onSubmit={handleSubmit}
            style={{ marginBottom: 20, display: "flex", flexDirection: "column", gap: 10 }}
          >
            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Age"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
            />
            <input
              placeholder="Experience"
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
            />
            <input
              type="number"
              placeholder="Weight (kg)"
              value={form.weight}
              onChange={(e) => setForm({ ...form, weight: e.target.value })}
            />
            <input
              type="number"
              placeholder="Height (cm)"
              value={form.height}
              onChange={(e) => setForm({ ...form, height: e.target.value })}
            />

            {/* 4 photos upload */}
            {[0, 1, 2, 3].map((i) => (
              <div key={i}>
                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, i)} />
                {form.photos[i] && (
                  <img src={form.photos[i]} alt={`preview-${i}`} width="60" style={{ marginTop: 5 }} />
                )}
              </div>
            ))}

            <button type="submit">{editingId ? "Update" : "Add"} Student</button>
          </form>

          {/* Students Table */}
          {students.length > 0 ? (
            <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Experience</th>
                  <th>Weight</th>
                  <th>Height</th>
                  <th>Photos</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td>{s.name}</td>
                    <td>{s.age}</td>
                    <td>{s.experience}</td>
                    <td>{s.weight}</td>
                    <td>{s.height}</td>
                    <td>
                      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                        {(s.photos || []).map((p, idx) => (
                          <a key={idx} href={p} download={`${s.name}-${idx + 1}.jpg`}>
                            <img src={p} alt={`${s.name}-${idx + 1}`} width="50" />
                          </a>
                        ))}
                      </div>
                    </td>
                    <td>
                      <button onClick={() => handleEditStudent(s)}>✏️</button>
                    </td>
                    <td>
                      <button onClick={() => handleDeleteStudent(s.id)}>❌</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No students yet.</p>
          )}
        </div>
      )}
    </div>
  );
}
