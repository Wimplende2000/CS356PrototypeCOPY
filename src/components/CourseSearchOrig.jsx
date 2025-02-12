import { useState } from "react";

const courses = [
  { title: "Introduction to Computer Science", code: "CS101", modality: "Online", hasLab: true, prerequisites: [], semester: "Fall 2023", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Smith", officeHours: "Mon 2-4 PM", syllabus: "syllabus.pdf", textbook: "Introduction to CS", gradingPolicy: "Standard" },
  { title: "Calculus II", code: "MATH202", modality: "In-Person", hasLab: false, prerequisites: ["MATH101"], semester: "Spring 2024", department: "MATH", degreeRequirement: "General Education", instructor: "Dr. Johnson", officeHours: "Tue 3-5 PM", syllabus: "syllabus.pdf", textbook: "Calculus II", gradingPolicy: "Standard" },
  { title: "English Composition", code: "ENG150", modality: "Hybrid", hasLab: false, prerequisites: [], semester: "Fall 2023", department: "ENG", degreeRequirement: "General Education", instructor: "Dr. Brown", officeHours: "Wed 10-12 PM", syllabus: "syllabus.pdf", textbook: "English Composition", gradingPolicy: "Standard" },
  { title: "Data Structures", code: "CS201", modality: "Online", hasLab: true, prerequisites: ["CS101"], semester: "Spring 2024", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Lee", officeHours: "Thu 1-3 PM", syllabus: "syllabus.pdf", textbook: "Data Structures", gradingPolicy: "Standard" },
  { title: "Linear Algebra", code: "MATH301", modality: "In-Person", hasLab: false, prerequisites: ["MATH202"], semester: "Fall 2023", department: "MATH", degreeRequirement: "Elective", instructor: "Dr. Davis", officeHours: "Fri 11-1 PM", syllabus: "syllabus.pdf", textbook: "Linear Algebra", gradingPolicy: "Standard" },
];

export default function CourseSearch() {
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
      <div style={{ flex: 1 }}>
        
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search courses by name, code, or professor"
          style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "20px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

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

        {/* Student FAQ Section */}
        <div style={{ marginTop: "40px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}>
          <h2 style={{ color: "#002E5D", fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>Student FAQ</h2>
          <div style={{ marginBottom: "15px" }}>
            <h3 style={{ color: "#002E5D", fontSize: "16px", fontWeight: "bold" }}>Waitlist Policies</h3>
            <p style={{ color: "#555", fontSize: "14px" }}>If a course is full, you can join the waitlist. You will be automatically enrolled if a seat becomes available.</p>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <h3 style={{ color: "#002E5D", fontSize: "16px", fontWeight: "bold" }}>Registration Deadlines</h3>
            <p style={{ color: "#555", fontSize: "14px" }}>Registration deadlines vary by semester. Check the academic calendar for specific dates.</p>
          </div>
          <div>
            <h3 style={{ color: "#002E5D", fontSize: "16px", fontWeight: "bold" }}>Grading Criteria</h3>
            <p style={{ color: "#555", fontSize: "14px" }}>Grading policies are outlined in the course syllabus. Contact the instructor for clarification.</p>
          </div>
        </div>
      </div>
    </div>
  );
}