
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