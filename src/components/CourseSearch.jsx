import { useState, useEffect } from "react";
import SortCourses from "../components/SortCourses";
import { useSearchParams, useNavigate } from "react-router-dom";
import SidebarFilters from "./SidebarFilters";
import SearchBar from "./SearchBar";
import { useCourseDataContext } from "../contextsGLOBAL/courseDataContext";
import courseData from "../contextsGLOBAL/courseData";
import "../styleFiles/courseSearch.css";
import { Pagination,TablePagination } from '@mui/material';


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
  //for pagination
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(15); // Adjust based on your grid layout
  const { filteredList, setFilteredList } = useCourseDataContext();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [search, setSearch] = useState(query);
  const [selectedModality, setSelectedModality] = useState([]);
  const [showLabCourses, setShowLabCourses] = useState(false);
  const [showNoPrerequisites, setShowNoPrerequisites] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [selectedDegreeRequirement, setSelectedDegreeRequirement] = useState([]);
  const [selectedCreditHours, setSelectedCreditHours] = useState([]);
  const [selectedCourseLevel, setSelectedCourseLevel] = useState([]);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [schedule, setSchedule] = useState([]);
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [showPanel, setShowPanel] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredList(courseData);
    courseData.forEach(course => {
      const firstDigit = course.code.match(/\d/)[0];
      course.courseLevel = `${firstDigit}00 Level`;
    });
  
    let filteredCourses = courseData.filter(course =>
      (search === "" || course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.code.toLowerCase().includes(search.toLowerCase()) ||
      course.department.toLowerCase().includes(search.toLowerCase())) &&
      (selectedModality.length === 0 || selectedModality.includes(course.modality)) &&
      (!showLabCourses || course.hasLab) &&
      (!showNoPrerequisites || course.prerequisites.length === 0) &&
      (selectedSemester.length === 0 || selectedSemester.includes(course.semester)) &&
      (selectedDepartment.length === 0 || selectedDepartment.includes(course.department)) &&
      (selectedDegreeRequirement.length === 0 || selectedDegreeRequirement.includes(course.degreeRequirement)) &&
      (selectedCreditHours.length === 0 || selectedCreditHours.includes(course.creditHours)) &&
      (selectedCourseLevel.length === 0 || selectedCourseLevel.includes(course.courseLevel)) &&
      (selectedFilters.length === 0 || selectedFilters.every(filter => course.tags.includes(filter)))
    );
  
    if (sortKey) {
      filteredCourses = filteredCourses.sort((a, b) => {
        let comparison = 0;
        const valueA = String(a[sortKey]).toUpperCase();
        const valueB = String(b[sortKey]).toUpperCase();
  
        if (valueA < valueB) {
          comparison = -1;
        } else if (valueA > valueB) {
          comparison = 1;
        }
  
        return sortOrder === "asc" ? comparison : -comparison;
      });
    }
  
    // Ensure pagination is within valid range
    const totalPages = Math.ceil(filteredCourses.length / rowsPerPage);
    if (page > totalPages && totalPages > 0) {
      setPage(totalPages);
    }
  
    setFilteredList(filteredCourses);
  }, [
    search,
    selectedModality,
    showLabCourses,
    showNoPrerequisites,
    selectedSemester,
    selectedDepartment,
    selectedDegreeRequirement,
    selectedCreditHours,
    selectedCourseLevel,
    sortKey,
    sortOrder
  ]);
  
  // Paginated courses computed separately
  const paginatedCourses = filteredList.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  
  const handleSortChange = (key, order) => {
    setSortKey(key);
    setSortOrder(order);
  };

  const openSidePanel = (courseCode) => {
    setExpandedCourse(courseCode);
    setShowPanel(true);
  };

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

  
  const removeFilter = (filterValue, filterType) => {
    switch (filterType) {
      case "modality":
        setSelectedModality(selectedModality.filter(value => value !== filterValue));
        break;
      case "semester":
        setSelectedSemester(selectedSemester.filter(value => value !== filterValue));
        break;
      case "department":
        setSelectedDepartment(selectedDepartment.filter(value => value !== filterValue));
        break;
      case "degreeRequirement":
        setSelectedDegreeRequirement(selectedDegreeRequirement.filter(value => value !== filterValue));
        break;
      case "courseLevel":
        setSelectedCourseLevel(selectedCourseLevel.filter(value => value !== filterValue));
        break;
      case "creditHours":
        setSelectedCreditHours(selectedCreditHours.filter(value => value !== filterValue));
        break;
      case "labCourses":
        setShowLabCourses(false);
        break;
      case "noPrerequisites":
        setShowNoPrerequisites(false);
        break;
      default:
        break;
    }
  };

  const generatePillboxes = () => {
    const selectedFilters = [];

    if (selectedModality.length > 0) {
      selectedModality.forEach(modality => selectedFilters.push({ label: modality, type: "modality" }));
    }
    if (selectedSemester.length > 0) {
      selectedSemester.forEach(semester => selectedFilters.push({ label: semester, type: "semester" }));
    }
    if (selectedDepartment.length > 0) {
      selectedDepartment.forEach(department => selectedFilters.push({ label: department, type: "department" }));
    }
    if (selectedDegreeRequirement.length > 0) {
      selectedDegreeRequirement.forEach(requirement => selectedFilters.push({ label: requirement, type: "degreeRequirement" }));
    }
    if (selectedCourseLevel.length > 0) {
      selectedCourseLevel.forEach(level => selectedFilters.push({ label: level, type: "courseLevel" }));
    }
    if (selectedCreditHours.length > 0) {
      selectedCreditHours.forEach(credit => selectedFilters.push({ label: credit, type: "creditHours" }));
    }
    if (showLabCourses) {
      selectedFilters.push({ label: "Lab Courses", type: "labCourses" });
    }
    if (showNoPrerequisites) {
      selectedFilters.push({ label: "No Prerequisites", type: "noPrerequisites" });
    }

    return selectedFilters;
  };

  const selectedCourse = expandedCourse && courseData.find(course => course.code === expandedCourse);

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
        selectedCreditHours={selectedCreditHours}
        setSelectedCreditHours={setSelectedCreditHours}
        selectedCourseLevel={selectedCourseLevel}
        setSelectedCourseLevel={setSelectedCourseLevel}
        showLabCourses={showLabCourses}
        setShowLabCourses={setShowLabCourses}
        showNoPrerequisites={showNoPrerequisites}
        setShowNoPrerequisites={setShowNoPrerequisites}
      />


      <div style={{ width: "100%", padding: "10px", borderRadius: "4px", marginBottom: "20px" }}>
        <SearchBar onSearch={setSearch} />
        <div className="below-search-bar">
          <div className="selected-filters">
            {generatePillboxes().map((filter, index) => (
              <div key={index} className="filter-pill">
                <span>{filter.label}</span>
                <button
                  className="pill-close"
                  onClick={() => removeFilter(filter.label, filter.type)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <div className="sort-by">
            <SortCourses onSortChange={handleSortChange} />
          </div>
        </div>
        <hr/>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <Pagination
        count={Math.ceil(filteredList.length / rowsPerPage)} // Use filteredList.length instead of courseData.length
        page={page}
        onChange={(event, value) => setPage(value)}
        siblingCount={1}
        boundaryCount={1}
      />
      </div>
 

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
          {
            paginatedCourses.length > 0 ? (
            paginatedCourses.map((course, index) => (
              <div key={index} 
                className="course-box"
                style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"}}
                onClick={() => openSidePanel(course.code)}
              >
                <p style={{ fontSize: "12px", color: "#777", marginBottom: "5px" }}>{course.modality}</p>
                <h2 style={{ fontSize: "16px", margin: "5px 0", color: "#002E5D", fontWeight: "bold" }}>{course.title}</h2>
                <p style={{ fontWeight: "bold", color: "#555", marginBottom: "5px" }}>{course.code}</p>
                {course.hasLab && <p style={{ color: "red", fontSize: "12px", marginBottom: "5px" }}>Lab Required</p>}
                {course.prerequisites.length > 0 && (
                  <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>
                    Prerequisites: {course.prerequisites.join(", ")}
                  </p>
                )}
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>{course.semester}</p>
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>{course.department}</p>
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>Degree Requirement: {course.degreeRequirement}</p>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "#777", fontSize: "14px" }}>No courses found.</p>
          )}
        </div>
      </div>

      {showPanel && selectedCourse && (
        <div style={sidePanelStyle}>
          <button onClick={closeSidePanel} style={{
            backgroundColor: "#FF6347", border: "none", color: "#fff", fontSize: "16px", padding: "10px", borderRadius: "5px", cursor: "pointer", marginBottom: "20px"
          }}>Close</button>
          
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "20px", color: "#002E5D", fontWeight: "bold", marginBottom: "10px" }}>{selectedCourse.title}</h2>
            <p style={{ fontWeight: "bold", color: "#555", marginBottom: "5px" }}>{selectedCourse.code}</p>
            <p style={{ color: "#555", fontSize: "14px", marginBottom: "5px" }}>Instructor: {selectedCourse.instructor}</p>
            <p style={{ color: "#555", fontSize: "14px", marginBottom: "5px" }}>Semester: {selectedCourse.semester}</p>
            <p style={{ color: "#555", fontSize: "14px", marginBottom: "5px" }}>Credit Hours: {selectedCourse.creditHours}</p>
            <p style={{ color: "#555", fontSize: "14px", marginBottom: "5px" }}>Degree Requirement: {selectedCourse.degreeRequirement}</p>
          </div>

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