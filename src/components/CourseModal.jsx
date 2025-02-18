import { useEffect } from "react";

export default function CourseModal({ course, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!course) return null;

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <h2>{course.title} - {course.code}</h2>
        <p><strong>Department:</strong> {course.department}</p>
        <p><strong>Modality:</strong> {course.modality}</p>
        <h3>Sections:</h3>
        {course.sections.length > 0 ? (
          <ul>
            {course.sections.map((section, index) => (
              <li key={index}>
                <p><strong>Professor:</strong> {section.professor}</p>
                <p><strong>Time:</strong> {section.time}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No sections available</p>
        )}
        <button onClick={onClose} style={closeButtonStyle}>Close</button>
      </div>
    </div>
  );
}

// Styles
const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "400px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
};

const closeButtonStyle = {
  marginTop: "10px",
  padding: "10px",
  backgroundColor: "#002E5D",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
