import { useState } from "react";
import SidebarFilters from "./SidebarFilters";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("All");
  const [selectedModality, setSelectedModality] = useState("All");
  const [showLabCourses, setShowLabCourses] = useState(false);
  const [showNoPrerequisites, setShowNoPrerequisites] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState("All");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedDegreeRequirement, setSelectedDegreeRequirement] = useState("All");
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <SidebarFilters
        selectedModality={selectedModality}
        setSelectedModality={setSelectedModality}
        selectedSemester={selectedSemester}
        setSelectedSemester={setSelectedSemester}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        selectedDegreeRequirement={selectedDegreeRequirement}
        setSelectedDegreeRequirement={setSelectedDegreeRequirement}
        showLabCourses={showLabCourses}
        setShowLabCourses={setShowLabCourses}
        showNoPrerequisites={showNoPrerequisites}
        setShowNoPrerequisites={setShowNoPrerequisites}
      />

      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", height:"50vh", width: "100%" }}>
        <SearchBar onSearch={setSearch} />
      </div>

      <button onClick={() => navigate("/schedule")} style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 20px",
        backgroundColor: "#002E5D",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        zIndex: 1000,
      }}>
        Your Schedule
      </button>
    </div>
  );
}