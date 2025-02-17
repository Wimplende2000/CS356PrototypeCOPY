
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SidebarFilters({
  selectedModality,
  setSelectedModality,
  selectedSemester,
  setSelectedSemester,
  selectedDepartment,
  setSelectedDepartment,
  selectedDegreeRequirement,
  setSelectedDegreeRequirement,
  showLabCourses,
  setShowLabCourses,
  showNoPrerequisites,
  setShowNoPrerequisites
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      selectedModality !== "All" ||
      selectedSemester !== "All" ||
      selectedDepartment !== "All" ||
      selectedDegreeRequirement !== "All" ||
      showLabCourses ||
      showNoPrerequisites
    ) {
      navigate("/search");
    } else {
      navigate("/");
    }
  }, [
    selectedModality,
    selectedSemester,
    selectedDepartment,
    selectedDegreeRequirement,
    showLabCourses,
    showNoPrerequisites,
    navigate
  ]);

  useEffect(() => {
    localStorage.setItem(
      "sidebarFilters",
      JSON.stringify({
        selectedModality,
        selectedSemester,
        selectedDepartment,
        selectedDegreeRequirement,
        showLabCourses,
        showNoPrerequisites
      })
    );
  }, [
    selectedModality,
    selectedSemester,
    selectedDepartment,
    selectedDegreeRequirement,
    showLabCourses,
    showNoPrerequisites
  ]);

  const handleReset = () => {
    setSelectedModality("All");
    setSelectedSemester("All");
    setSelectedDepartment("All");
    setSelectedDegreeRequirement("All");
    setShowLabCourses(false);
    setShowNoPrerequisites(false);
  };

  return (
    <div style={{ width: "250px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}>
      <h3 style={{ marginBottom: "20px", color: "#002E5D", fontSize: "18px", fontWeight: "bold" }}>Filters</h3>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px", color: "#555", fontSize: "14px" }}>Modality</label>
        <select
          style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          value={selectedModality}
          onChange={(e) => setSelectedModality(e.target.value)}
        >
          <option value="All">All Modalities</option>
          <option value="Online">Online</option>
          <option value="In-Person">In-Person</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px", color: "#555", fontSize: "14px" }}>Semester</label>
        <select
          style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
<option value="All">All Semesters</option>
<option value="Fall 2023">Fall 2023</option>
<option value="Fall 2024">Fall 2024</option>
<option value="Fall/Winter">Fall/Winter</option>
<option value="Spring 2024">Spring 2024</option>
<option value="Spring 2025">Spring 2025</option>
<option value="Winter 2024">Winter 2024</option>
<option value="Winter 2025">Winter 2025</option>
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px", color: "#555", fontSize: "14px" }}>Department</label>
        <select
          style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option value="CS">Computer Science</option>
          <option value="MATH">Mathematics</option>
          <option value="ENG">English</option>
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px", color: "#555", fontSize: "14px" }}>Degree Requirement</label>
        <select
          style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          value={selectedDegreeRequirement}
          onChange={(e) => setSelectedDegreeRequirement(e.target.value)}
        >
          <option value="All">All Requirements</option>
          <option value="Major Requirement">Major Requirement</option>
          <option value="General Education">General Education</option>
          <option value="Elective">Elective</option>
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="checkbox"
          checked={showLabCourses}
          onChange={() => setShowLabCourses(!showLabCourses)}
          style={{ marginRight: "5px" }}
        />
        <label style={{ color: "#555", fontSize: "14px" }}>Lab Hours Required</label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="checkbox"
          checked={showNoPrerequisites}
          onChange={() => setShowNoPrerequisites(!showNoPrerequisites)}
          style={{ marginRight: "5px" }}
        />
        <label style={{ color: "#555", fontSize: "14px" }}>No Prerequisites</label>
      </div>

      {/* Reset Button */}
      <button
        onClick={handleReset}
        style={{ width: "100%", padding: "10px", backgroundColor: "#d9534f", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "14px" }}
      >
        Reset Filters
      </button>
    </div>
  );
}
