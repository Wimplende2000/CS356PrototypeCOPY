import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedSchedule = JSON.parse(localStorage.getItem("schedule")) || [];
    setSchedule(savedSchedule);
  }, []);

  const handleRemoveCourse = (index) => {
    const newSchedule = schedule.filter((_, i) => i !== index);
    setSchedule(newSchedule);
    localStorage.setItem("schedule", JSON.stringify(newSchedule));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "24px", color: "#002E5D", marginBottom: "20px" }}>Your Schedule</h1>
      {schedule.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {schedule.map((item, index) => (
            <li key={index} style={{
              marginBottom: "20px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}>
              <h2 style={{ fontSize: "18px", color: "#002E5D", fontWeight: "bold", marginBottom: "10px" }}>
                {item.course.title} - {item.course.code}
              </h2>
              <p style={{ color: "#555", fontSize: "14px", marginBottom: "5px" }}>
                <strong>Section:</strong> {item.section.sectionNumber}
              </p>
              <p style={{ color: "#555", fontSize: "14px", marginBottom: "5px" }}>
                <strong>Professor:</strong> {item.section.professor}
              </p>
              <p style={{ color: "#555", fontSize: "14px", marginBottom: "10px" }}>
                <strong>Time:</strong> {item.section.time}
              </p>
              <button
                onClick={() => handleRemoveCourse(index)}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "bold",
                  transition: "background-color 0.3s ease",
                }}
              >
                Remove Course
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center", color: "#777", fontSize: "16px" }}>No courses in your schedule.</p>
      )}
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#002E5D",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Back to Courses
      </button>
    </div>
  );
}