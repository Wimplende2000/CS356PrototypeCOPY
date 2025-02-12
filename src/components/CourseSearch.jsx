import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SidebarFilters from "./SidebarFilters";
import SearchBar from "./SearchBar";

const courses = [
  { title: "Introduction to Computer Science", code: "CS101", modality: "Online", hasLab: true, prerequisites: [], semester: "Fall 2023", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Smith", officeHours: "Mon 2-4 PM", syllabus: "syllabus.pdf", textbook: "Introduction to CS", gradingPolicy: "Standard" },
  { title: "Calculus II", code: "MATH202", modality: "In-Person", hasLab: false, prerequisites: ["MATH101"], semester: "Spring 2024", department: "MATH", degreeRequirement: "General Education", instructor: "Dr. Johnson", officeHours: "Tue 3-5 PM", syllabus: "syllabus.pdf", textbook: "Calculus II", gradingPolicy: "Standard" },
  { title: "English Composition", code: "ENG150", modality: "Hybrid", hasLab: false, prerequisites: [], semester: "Fall 2023", department: "ENG", degreeRequirement: "General Education", instructor: "Dr. Brown", officeHours: "Wed 10-12 PM", syllabus: "syllabus.pdf", textbook: "English Composition", gradingPolicy: "Standard" },
  { title: "Data Structures", code: "CS201", modality: "Online", hasLab: true, prerequisites: ["CS101"], semester: "Spring 2024", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Lee", officeHours: "Thu 1-3 PM", syllabus: "syllabus.pdf", textbook: "Data Structures", gradingPolicy: "Standard" },
  { title: "Linear Algebra", code: "MATH301", modality: "In-Person", hasLab: false, prerequisites: ["MATH202"], semester: "Fall 2023", department: "MATH", degreeRequirement: "Elective", instructor: "Dr. Davis", officeHours: "Fri 11-1 PM", syllabus: "syllabus.pdf", textbook: "Linear Algebra", gradingPolicy: "Standard" },
];

export default function CourseSearch() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [search, setSearch] = useState(query);
  const [selectedModality, setSelectedModality] = useState("");
  const [showLabCourses, setShowLabCourses] = useState(false);
  const [showNoPrerequisites, setShowNoPrerequisites] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDegreeRequirement, setSelectedDegreeRequirement] = useState("");
  // const [results, setResyyyyults] = useState([]);

  const filteredCourses = courses.filter(course =>
    (search === "" || course.title.toLowerCase().includes(search.toLowerCase())) &&
    (selectedModality === "" || course.modality === selectedModality) &&
    (!showLabCourses || course.hasLab) &&
    (!showNoPrerequisites || course.prerequisites.length === 0) &&
    (selectedSemester === "" || course.semester === selectedSemester) &&
    (selectedDepartment === "" || course.department === selectedDepartment) &&
    (selectedDegreeRequirement === "" || course.degreeRequirement === selectedDegreeRequirement)
  );

  // Get unique semesters, departments, and degree requirements for dropdowns
  // const semesters = [...new Set(courses.map(course => course.semester))];
  // const departments = [...new Set(courses.map(course => course.department))];
  // const degreeRequirements = [...new Set(courses.map(course => course.degreeRequirement))];

  useEffect(() => {
    console.log("Fetching results for:", { query, selectedModality, selectedSemester });
  }, [query, selectedModality, selectedSemester, selectedDepartment, selectedDegreeRequirement, showLabCourses, showNoPrerequisites]);

  
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

      <div style={{ width: "100%", padding: "10px", borderRadius: "4px", marginBottom: "20px" }}>
        {/* Integrate SearchBar here */}
        
        <SearchBar onSearch={setSearch} />

        {/* Course Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div key={index} style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}>
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
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>Instructor: {course.instructor}</p>
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>Office Hours: {course.officeHours}</p>
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>Textbook: {course.textbook}</p>
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>Grading Policy: {course.gradingPolicy}</p>
                <a href={course.syllabus} style={{ color: "#002E5D", fontSize: "12px", textDecoration: "none" }}>Download Syllabus</a>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "#777", fontSize: "14px" }}>No courses found.</p>
          )}
        </div>
      </div>
    </div>
  );
}