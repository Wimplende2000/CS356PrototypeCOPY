import { useEffect } from "react";

export default function CourseModal({ course, onClose, onAddSection }) {
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
        <h2 style={titleStyle}>
          {course.title} - {course.code}
        </h2>
        <p style={detailStyle}>
          <strong>Department:</strong> {course.department}
        </p>
        <p style={detailStyle}>
          <strong>Modality:</strong> {course.modality}
        </p>
        <h3 style={sectionHeaderStyle}>Sections:</h3>
        {course.sections.length > 0 ? (
          <ul style={sectionListStyle}>
            {course.sections.map((section, index) => (
              <li key={index} style={sectionItemStyle}>
                <p style={sectionDetailStyle}>
                  <strong>Professor:</strong> {section.professor}
                </p>
                <p style={sectionDetailStyle}>
                  <strong>Time:</strong> {section.time}
                </p>
                <button
                  onClick={() => onAddSection(course, section)}
                  style={addButtonStyle}
                >
                  Add Course
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p style={noSectionsStyle}>No sections available</p>
        )}
        <button onClick={onClose} style={closeButtonStyle}>
          Close
        </button>
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
  padding: "25px",
  borderRadius: "12px",
  width: "450px",
  maxWidth: "90%", // For smaller screens
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
};

const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: "600",
  marginBottom: "15px",
};

const detailStyle = {
  fontSize: "1rem",
  marginBottom: "8px",
};

const sectionHeaderStyle = {
  fontSize: "1.2rem",
  fontWeight: "500",
  marginTop: "20px",
  marginBottom: "10px",
};

const sectionListStyle = {
  listStyle: "none",
  padding: 0,
};

const sectionItemStyle = {
  border: "1px solid #e0e0e0",
  borderRadius: "6px",
  padding: "15px",
  marginBottom: "10px",
};

const sectionDetailStyle = {
  fontSize: "0.95rem",
  marginBottom: "5px",
};

const closeButtonStyle = {
  marginTop: "20px",
  position:"relative",
  right:"90%",
  padding: "12px 20px",
  backgroundColor: "#002E5D",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.3s ease",
  ":hover": {
    backgroundColor: "#001f40",
  },
};

const addButtonStyle = {
  marginTop: "10px",
  padding: "8px 15px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "0.9rem",
  transition: "background-color 0.3s ease",
  ":hover": {
    backgroundColor: "#218838",
  },
};

const noSectionsStyle = {
  fontStyle: "italic",
  color: "#777",
  marginTop: "10px",
};