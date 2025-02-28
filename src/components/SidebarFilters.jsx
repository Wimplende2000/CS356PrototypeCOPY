
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styleFiles/sidebarFilters.css";


export default function SidebarFilters({
  selectedModality,
  setSelectedModality,
  selectedSemester,
  setSelectedSemester,
  selectedDepartment,
  setSelectedDepartment,
  selectedDegreeRequirement,
  setSelectedDegreeRequirement,
  selectedCourseLevel,
  setSelectedCourseLevel,
  selectedCreditHours,
  setSelectedCreditHours,
  showLabCourses,
  setShowLabCourses,
  showNoPrerequisites,
  setShowNoPrerequisites,
}) {
  const navigate = useNavigate();
  const [modalityOpen, setModalityOpen] = useState(false);
  const [semesterOpen, setSemesterOpen] = useState(false);
  const [creditHoursOpen, setCreditHoursOpen] = useState(false);
  const [courseLevelOpen, setCourseLevelOpen] = useState(false);
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [requirementOpen, setRequirementOpen] = useState(false);
  const [allFilters, setAllFilters] = useState(true);

  const toggleModality = () => setModalityOpen(!modalityOpen);
  const toggleSemester = () => setSemesterOpen(!semesterOpen);
  const toggleCreditHours = () => setCreditHoursOpen(!creditHoursOpen);
  const toggleCourseLevel = () => setCourseLevelOpen(!courseLevelOpen);
  const toggleDepartment = () => setDepartmentOpen(!departmentOpen);
  const toggleRequirement = () => setRequirementOpen(!requirementOpen);

  const dropdownAll = () => {
    setModalityOpen(allFilters);
    setSemesterOpen(allFilters);
    setCreditHoursOpen(allFilters);
    setCourseLevelOpen(allFilters);
    setDepartmentOpen(allFilters);
    setRequirementOpen(allFilters);
    setAllFilters(!allFilters)
  }

  const handleReset = () => {
    setSelectedModality([]);
    setSelectedSemester([]);
    setSelectedCreditHours([]);
    setSelectedCourseLevel([]);
    setSelectedDepartment([]);
    setSelectedDegreeRequirement([]);
    setShowLabCourses(false);
    setShowNoPrerequisites(false);
    setModalityOpen(false);
    setSemesterOpen(false);
    setCreditHoursOpen(false);
    setCourseLevelOpen(false);
    setDepartmentOpen(false);
    setRequirementOpen(false);
  };

  const handleCheckboxChange = (value, selectedValues, setSelectedValues) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v != value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };


  return (
    <div className="filter-box">
      <div className="filter-header">
        <h3>Filters</h3>
        <button onClick={dropdownAll}>
          {allFilters ? "+" : "-"}
        </button>
      </div>
      <hr/>

      <div className="buffer">
      <button onClick={toggleDepartment} className="dropdown-button">
        <div>Department</div>
        <i className={`dropper ${departmentOpen ? "down" : "up"}`}></i> 
      </button>
      {departmentOpen && (
        <div className="filter-type">
          {["CS", "MATH", "ENGL"].map((department) => (
            <label key={department} className="dropdown-items">
              <input
                type="checkbox"
                checked={selectedDepartment.includes(department)}
                onChange={(e) => {
                  handleCheckboxChange(department, selectedDepartment, setSelectedDepartment);
                }}
              />
              {department}
            </label>
        ))}
        </div>
        )}
      </div>
      <hr/>

      <div className="buffer">
      <button onClick={toggleModality} className="dropdown-button">
        <div>Modality</div>
        <i className={`dropper ${modalityOpen ? "down" : "up"}`}></i> 
      </button>
      {modalityOpen && (
        <div className="filter-type">
          {["Online", "In-Person", "Hybrid"].map((modality) => (
            <label key={modality} className="dropdown-items">
              <input
                type="checkbox"
                checked={selectedModality.includes(modality)}
                onChange={(e) => {
                  handleCheckboxChange(modality, selectedModality, setSelectedModality);
                }}
              />
              {modality}
            </label>
        ))}
        </div>
        )}
      </div>
      <hr/>
      
      <div className="buffer">
        <button onClick={toggleSemester} className="dropdown-button">
          <div>Semester</div>
          <i className={`dropper ${semesterOpen ? "down" : "up"}`}></i> 
        </button>
        {semesterOpen && (
        <div className="filter-type">
          {["Fall/Winter", "Fall 2023", "Winter 2024", "Spring 2024", "Fall 2024", "Winter 2025", "Spring 2025"].map((semester) => (
            <label key={semester} className="dropdown-items">
              <input
                type="checkbox"
                checked={selectedSemester.includes(semester)}
                onChange={(e) => {
                  handleCheckboxChange(semester, selectedSemester, setSelectedSemester);
                }}
              />
              {semester}
            </label>
        ))}
        </div>
        )}
      </div>
      <hr/>
      
      <div className="buffer">
        <button onClick={toggleCreditHours} className="dropdown-button">
          <div>Credit Hours</div>
          <i className={`dropper ${creditHoursOpen ? "down" : "up"}`}></i> 
        </button>
        {creditHoursOpen && (
        <div className="filter-type">
          {["1 Hour", "2 Hours", "3 Hours", "4 Hours", "5 Hours"].map((creditHours) => (
            <label key={creditHours} className="dropdown-items">
              <input
                type="checkbox"
                checked={selectedCreditHours.includes(creditHours)}
                onChange={(e) => {
                  handleCheckboxChange(creditHours, selectedCreditHours, setSelectedCreditHours);
                }}
              />
              {creditHours}
            </label>
        ))}
        </div>
        )}
      </div>
      <hr/>

      <div className="buffer">
        <button onClick={toggleCourseLevel} className="dropdown-button">
          <div>Course Level</div>
          <i className={`dropper ${courseLevelOpen ? "down" : "up"}`}></i> 
        </button>
        {courseLevelOpen && (
        <div className="filter-type">
          {["100 Level", "200 Level", "300 Level", "400 Level", "500 Level"].map((courseLevel) => (
            <label key={courseLevel} className="dropdown-items">
              <input
                type="checkbox"
                checked={selectedCourseLevel.includes(courseLevel)}
                onChange={(e) => {
                  handleCheckboxChange(courseLevel, selectedCourseLevel, setSelectedCourseLevel);
                }}
              />
              {courseLevel}
            </label>
        ))}
        </div>
        )}
      </div>
      <hr/>

      <div className="buffer">
      <button onClick={toggleRequirement} className="dropdown-button">
        <div>Requirement</div>
        <i className={`dropper ${requirementOpen ? "down" : "up"}`}></i> 
      </button>
      {requirementOpen && (
        <div className="filter-type">
          {["Major", "General", "Elective"].map((requirement) => (
            <label key={requirement} className="dropdown-items">
              <input
                type="checkbox"
                checked={selectedDegreeRequirement.includes(requirement)}
                onChange={(e) => {
                  handleCheckboxChange(requirement, selectedDegreeRequirement, setSelectedDegreeRequirement);
                }}
              />
              {requirement}
            </label>
        ))}
        </div>
        )}
      </div>
      <hr/>

      <div className="buffer">
        <label>Lab Hours Required</label>
        <input
          type="checkbox"
          checked={showLabCourses}
          onChange={() => setShowLabCourses(!showLabCourses)}
        />
      </div>

      <hr/>

      <div className="buffer">
        <label>No Prerequisites</label>
        <input
          type="checkbox"
          checked={showNoPrerequisites}
          onChange={() => setShowNoPrerequisites(!showNoPrerequisites)}
        />
      </div>

      <hr/>

      {/* Reset Button */}
      <button
        onClick={handleReset}
        className="filter-reset"
      >
        Reset Filters
      </button>

    </div>
  );
}
