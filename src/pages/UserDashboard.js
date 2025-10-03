import React, { useState } from "react";
import "./UserDashboard.css";

// Full Photo Modal
function FullPhotoModal({ photos, currentIndex, onClose, onPrev, onNext, studentName }) {
if (!photos || photos.length === 0) return null;
const currentPhoto = photos[currentIndex];
return ( <div className="modal-overlay" onClick={onClose}>
<button className="arrow prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>◀</button>
<div className="modal-photo-container" onClick={(e) => e.stopPropagation()}>
<img key={currentIndex} src={currentPhoto} alt={`photo-${currentIndex + 1}`} className="modal-photo fade" /> <div className="download-button">
<a href={currentPhoto} download={`${studentName}-Photo-${currentIndex + 1}.jpg`}>Download</a> </div> <div className="photo-counter">Photo {currentIndex + 1} / {photos.length}</div> </div>
<button className="arrow next" onClick={(e) => { e.stopPropagation(); onNext(); }}>▶</button> <button className="close-button" onClick={onClose}>Close</button> </div>
);
}

// Gallery Modal
function PhotoGalleryModal({ photos, onClose, onThumbnailClick }) {
if (!photos || photos.length === 0) return null;
return ( <div className="modal-overlay" onClick={onClose}>
<div className="gallery-container" onClick={(e) => e.stopPropagation()}>
{photos.map((p, idx) => ( <div key={idx} className="gallery-item">
<img src={p} alt={`photo-${idx + 1}`} className="thumbnail" onClick={() => onThumbnailClick(idx)} />
<a href={p} download={`photo-${idx + 1}.jpg`} className="download-thumb">Download</a> </div>
))} </div> </div>
);
}

// Main Dashboard with Single Input Search (Left-Aligned)
export default function UserDashboard({ students = [] }) {
const [selectedStudent, setSelectedStudent] = useState(null);
const [fullPhotoIndex, setFullPhotoIndex] = useState(null);
const [searchQuery, setSearchQuery] = useState("");

const handlePrev = () => { if (!selectedStudent) return; setFullPhotoIndex(prev => prev === 0 ? selectedStudent.photos.length - 1 : prev - 1); };
const handleNext = () => { if (!selectedStudent) return; setFullPhotoIndex(prev => prev === selectedStudent.photos.length - 1 ? 0 : prev + 1); };
const handleThumbnailClick = (index) => setFullPhotoIndex(index);
const handleCloseFullPhoto = () => setFullPhotoIndex(null);
const handleCloseGallery = () => setSelectedStudent(null);

// Filter students by name, height, or weight using the same input
const filteredStudents = students.filter(s => {
const query = searchQuery.toLowerCase();
return s.name.toLowerCase().includes(query) || s.height.toString().includes(query) || s.weight.toString().includes(query);
});

return (
<div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}> <h1>👩‍🎓 Student Dashboard</h1>


  {/* 🔹 Single Unified Search Input (Left-Aligned) */}
  <div style={{ marginBottom: 20, maxWidth: 400 }}>
    <input
      type="text"
      placeholder="Search by Name, Height, or Weight"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{ width: "100%", padding: 10, borderRadius: 5, border: "1px solid #ccc" }}
    />
  </div>

  {/* 🔹 Student Grid */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "flex-start" }}>
    {filteredStudents.length > 0 ? filteredStudents.map((s) => (
      <div key={s.id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 10, width: 200, textAlign: "center", cursor: "pointer" }} onClick={() => setSelectedStudent(s)}>
        {s.photos && s.photos[0] && <img src={s.photos[0]} alt={s.name} style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 5 }} />}
        <h3>{s.name}</h3>
        <p>Weight: {s.weight} kg</p>
        <p>Height: {s.height} m</p>
      </div>
    )) : <p>No students match your search.</p>}
  </div>

  {selectedStudent && fullPhotoIndex === null && <PhotoGalleryModal photos={selectedStudent.photos} onClose={handleCloseGallery} onThumbnailClick={handleThumbnailClick} />}
  {selectedStudent && fullPhotoIndex !== null && <FullPhotoModal photos={selectedStudent.photos} currentIndex={fullPhotoIndex} onClose={handleCloseFullPhoto} onPrev={handlePrev} onNext={handleNext} studentName={selectedStudent.name} />}
</div>

);
}
