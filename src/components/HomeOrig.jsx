import { useState } from "react";
import SearchBar from "./SearchBar";

const courses = [
  { title: "Introduction to Computer Science", code: "CS101", modality: "Online", hasLab: true, prerequisites: [], semester: "Fall 2023", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Smith", officeHours: "Mon 2-4 PM", syllabus: "syllabus.pdf", textbook: "Introduction to CS", gradingPolicy: "Standard" },
  { title: "Calculus II", code: "MATH202", modality: "In-Person", hasLab: false, prerequisites: ["MATH101"], semester: "Spring 2024", department: "MATH", degreeRequirement: "General Education", instructor: "Dr. Johnson", officeHours: "Tue 3-5 PM", syllabus: "syllabus.pdf", textbook: "Calculus II", gradingPolicy: "Standard" },
  { title: "English Composition", code: "ENG150", modality: "Hybrid", hasLab: false, prerequisites: [], semester: "Fall 2023", department: "ENG", degreeRequirement: "General Education", instructor: "Dr. Brown", officeHours: "Wed 10-12 PM", syllabus: "syllabus.pdf", textbook: "English Composition", gradingPolicy: "Standard" },
  { title: "Data Structures", code: "CS201", modality: "Online", hasLab: true, prerequisites: ["CS101"], semester: "Spring 2024", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Lee", officeHours: "Thu 1-3 PM", syllabus: "syllabus.pdf", textbook: "Data Structures", gradingPolicy: "Standard" },
  { title: "Linear Algebra", code: "MATH301", modality: "In-Person", hasLab: false, prerequisites: ["MATH202"], semester: "Fall 2023", department: "MATH", degreeRequirement: "Elective", instructor: "Dr. Davis", officeHours: "Fri 11-1 PM", syllabus: "syllabus.pdf", textbook: "Linear Algebra", gradingPolicy: "Standard" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedModality, setSelectedModality] = useState("");
  const [showLabCourses, setShowLabCourses] = useState(false);
  const [showNoPrerequisites, setShowNoPrerequisites] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDegreeRequirement, setSelectedDegreeRequirement] = useState("");

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
  const semesters = [...new Set(courses.map(course => course.semester))];
  const departments = [...new Set(courses.map(course => course.department))];
  const degreeRequirements = [...new Set(courses.map(course => course.degreeRequirement))];

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Sidebar Filters */}
      <div style={{ width: "250px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}>
        <h3 style={{ marginBottom: "20px", color: "#002E5D", fontSize: "18px", fontWeight: "bold" }}>Filters</h3>

        {/* Modality Filter */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#555", fontSize: "14px" }}>Modality</label>
          <select
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            onChange={(e) => setSelectedModality(e.target.value)}
          >
            <option value="">All Modalities</option>
            <option value="Online">Online</option>
            <option value="In-Person">In-Person</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        {/* Semester Filter */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#555", fontSize: "14px" }}>Semester</label>
          <select
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            onChange={(e) => setSelectedSemester(e.target.value)}
          >
            <option value="">All Semesters</option>
            {semesters.map((semester, index) => (
              <option key={index} value={semester}>{semester}</option>
            ))}
          </select>
        </div>

        {/* Department Filter */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#555", fontSize: "14px" }}>Department</label>
          <select
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="">All Departments</option>
            {departments.map((department, index) => (
              <option key={index} value={department}>{department}</option>
            ))}
          </select>
        </div>

        {/* Degree Requirement Filter */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#555", fontSize: "14px" }}>Degree Requirement</label>
          <select
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            onChange={(e) => setSelectedDegreeRequirement(e.target.value)}
          >
            <option value="">All Requirements</option>
            {degreeRequirements.map((requirement, index) => (
              <option key={index} value={requirement}>{requirement}</option>
            ))}
          </select>
        </div>

        {/* Lab Hours Filter */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type="checkbox"
            checked={showLabCourses}
            onChange={() => setShowLabCourses(!showLabCourses)}
            style={{ marginRight: "5px" }}
          />
          <label style={{ color: "#555", fontSize: "14px" }}>Lab Hours Required</label>
        </div>

        {/* No Prerequisites Filter */}
        <div>
          <input
            type="checkbox"
            checked={showNoPrerequisites}
            onChange={() => setShowNoPrerequisites(!showNoPrerequisites)}
            style={{ marginRight: "5px" }}
          />
          <label style={{ color: "#555", fontSize: "14px" }}>No Prerequisites</label>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <SearchBar onSearch={setSearch} />
      </div>
    </div>
  );
}