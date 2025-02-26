import { useState, useEffect } from "react";
import SortCourses from "../components/SortCourses";
import { useSearchParams, useNavigate } from "react-router-dom";
import SidebarFilters from "./SidebarFilters";
import SearchBar from "./SearchBar";
import { useCourseDataContext } from "../contextsGLOBAL/courseDataContext";
import courseData from "../contextsGLOBAL/courseData";
import "../courseSearch.css";

// Define the addButtonStyle for the "Add Course" button
const addButtonStyle = {
  marginTop: "10px",
  padding: "8px 16px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "bold",
  transition: "background-color 0.3s ease",
  width: "100%", // Make the button full width
  display: "block", // Ensure the button is on a new line
};

const sidePanelStyle = {
  position: "fixed",
  top: 0,
  right: 0,
  width: "450px", // Increased width for more space
  height: "100%",
  backgroundColor: "#fff",
  boxShadow: "-2px 0 15px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  overflowY: "auto",
  zIndex: 1000,
  transform: "translateX(0)",
  transition: "transform 0.3s ease-in-out",
};

const sectionItemStyle = {
  marginBottom: "15px",
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
};

export default function CourseSearch() {
  const { filteredList, setFilteredList } = useCourseDataContext();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  // Initialize search state from query; then SearchBar updates it.
  const [search, setSearch] = useState(query);
  const [selectedModality, setSelectedModality] = useState("");
  const [showLabCourses, setShowLabCourses] = useState(false);
  const [showNoPrerequisites, setShowNoPrerequisites] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDegreeRequirement, setSelectedDegreeRequirement] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [schedule, setSchedule] = useState([]);
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [showPanel, setShowPanel] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let filteredCourses = courseData.filter(course => {
      const lowerSearch = search.trim().toLowerCase();
      const courseLevel = parseInt(course.code.match(/\d+/)?.[0]?.charAt(0)) * 100 || 0; // Extract first digit and multiply by 100
  
      return (
        (lowerSearch === "" ||
          course.title.toLowerCase().includes(lowerSearch) ||
        course.code.toLowerCase().includes(lowerSearch) ||
        course.department.toLowerCase().includes(lowerSearch)) &&
        (selectedModality === "" || course.modality === selectedModality) &&
        (!showLabCourses || course.hasLab) &&
        (!showNoPrerequisites || course.prerequisites.length === 0) &&
        (selectedSemester === "" || course.semester === selectedSemester) &&
        (selectedDepartment === "" || course.department === selectedDepartment) &&
        (selectedDegreeRequirement === "" || course.degreeRequirement === selectedDegreeRequirement) &&
        (selectedCourseLevel === "" || courseLevel === parseInt(selectedCourseLevel))
      );
    });
  
    if (sortKey) {
      filteredCourses = filteredCourses.sort((a, b) => {
        const valueA = String(a[sortKey]).toUpperCase();
        const valueB = String(b[sortKey]).toUpperCase();
        let comparison = 0;
        if (valueA < valueB) comparison = -1;
        else if (valueA > valueB) comparison = 1;
        return sortOrder === "asc" ? comparison : -comparison;
      });
    }
  
    setFilteredList(filteredCourses);
  }, [
    search,
    search,
    selectedModality,
    showLabCourses,
    showNoPrerequisites,
    selectedSemester,
    selectedDepartment,
    selectedDegreeRequirement,
    selectedCourseLevel,
    sortKey,
    sortOrder
  ]);

  // Function to handle sorting updates from SortCourses component
  const handleSortChange = (key, order) => {
    setSortKey(key);
    setSortOrder(order);
  };

  // Function to handle course tile click to open the side panel
  const openSidePanel = (courseCode) => {
    setExpandedCourse(courseCode);
    setShowPanel(true);
  };

  // Function to close the side panel
  const closeSidePanel = () => {
    setShowPanel(false);
    setExpandedCourse(null);
  };

  const handleAddSection = (course, section) => {
    // Retrieve the current schedule from localStorage
    const currentSchedule = JSON.parse(localStorage.getItem("schedule")) || [];

    // Check if the section is already in the schedule
    const isAlreadyAdded = currentSchedule.some(
      (item) =>
        item.course.code === course.code &&
        item.section.sectionNumber === section.sectionNumber
    );

    if (isAlreadyAdded) {
      alert(`You have already added ${course.title} - ${section.time} to your schedule.`);
      return;
    }

    // Add the new course and section to the schedule
    const newSchedule = [...currentSchedule, { course, section }];

    // Update the state and localStorage
    setSchedule(newSchedule);
    localStorage.setItem("schedule", JSON.stringify(newSchedule));

    alert(`Added ${course.title} - ${section.time} to your schedule.`);
  };

  const selectedCourse = expandedCourse && courseData.find(course => course.code === expandedCourse);

  return (
    <div style={{ position: "relative", display: "flex", gap: "20px", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {showPanel && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        />
      )}

      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "20px",
          transition: "filter 0.3s ease-in-out",
          filter: showPanel ? "blur(5px)" : "none",
        }}
      >
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
  selectedCourseLevel={selectedCourseLevel}
  setSelectedCourseLevel={setSelectedCourseLevel}
/>


      <div style={{ width: "100%", padding: "10px", borderRadius: "4px", marginBottom: "20px" }}>
        <SearchBar onSearch={setSearch} />
        <SortCourses onSortChange={handleSortChange} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
          {filteredList.length > 0 ? (
            filteredList.map((course, index) => (
              <div
                key={index}
                className="course-box"
                style={{
                  padding: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
                }}
                onClick={() => openSidePanel(course.code)}
              >
                <p style={{ fontSize: "12px", color: "#777", marginBottom: "5px" }}>
                  {course.modality}
                </p>
                <h2 style={{ fontSize: "16px", margin: "5px 0", color: "#002E5D", fontWeight: "bold" }}>
                  {course.title}
                </h2>
                <p style={{ fontWeight: "bold", color: "#555", marginBottom: "5px" }}>
                  {course.code}
                </p>
                {course.hasLab && (
                  <p style={{ color: "red", fontSize: "12px", marginBottom: "5px" }}>
                    Lab Required
                  </p>
                )}
                {course.prerequisites.length > 0 && (
                  <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>
                    Prerequisites: {course.prerequisites.join(", ")}
                  </p>
                )}
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>
                  {course.semester}
                </p>
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>
                  {course.department}
                </p>
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>
                  Degree Requirement: {course.degreeRequirement}
                </p>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "#777", fontSize: "14px" }}>
              No courses found.
            </p>
          )}
        </div>
      </div>

      {/* Sliding Panel (Pop-up from right side) */}
      {showPanel && selectedCourse && (
        <div style={sidePanelStyle}>
          <button onClick={closeSidePanel} style={{
            backgroundColor: "#FF6347",
            border: "none",
            color: "#fff",
            fontSize: "16px",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px"
          }}>
            Close
          </button>

          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "20px", color: "#002E5D", fontWeight: "bold", marginBottom: "10px" }}>
              {selectedCourse.title}
            </h2>
            <p style={{ fontWeight: "bold", color: "#555", marginBottom: "5px" }}>
              {selectedCourse.code}
            </p>
            <p style={{ color: "#555", fontSize: "20px", marginBottom: "5px" }}>Instructor: {selectedCourse.instructor}</p>
            <p style={{ color: "#555", fontSize: "20px", marginBottom: "5px" }}>Semester: {selectedCourse.semester}</p>
            <p style={{ color: "#555", fontSize: "20px", marginBottom: "5px" }}>
              Degree Requirement: {selectedCourse.degreeRequirement}
            </p>
          </div>

          {/* Render the course sections */}
          {selectedCourse.sections && (
            <div>
              <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Sections:</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {selectedCourse.sections.map((section, secIndex) => (
                  <li key={secIndex} style={sectionItemStyle}>
                    <div>
                      <strong>Section {section.sectionNumber}:</strong> {section.professor} - {section.time}
                    </div>
                    <button onClick={() => handleAddSection(selectedCourse, section)} style={addButtonStyle}>
                      Add Course
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

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