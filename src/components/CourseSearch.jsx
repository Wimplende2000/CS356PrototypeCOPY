import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Fuse from "fuse.js";
import SidebarFilters from "./SidebarFilters";
import SearchBar from "./SearchBar";
import SortCourses from "./SortCourses";

const courses = [
  { title: "Introduction to Computer Science", code: "CS101", modality: "Online", hasLab: true, prerequisites: [], semester: "Fall 2023", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Smith", officeHours: "Mon 2-4 PM", syllabus: "syllabus.pdf", textbook: "Introduction to CS", gradingPolicy: "Standard" },
  { title: "How to Program", code: "CS110", modality: "In-Person", hasLab: true, prerequisites: [], semester: "Varies", department: "CS", degreeRequirement: "Major Requirement", instructor: "Prof. Anderson", officeHours: "Tue/Thu 10-11 AM", textbook: "Programming Fundamentals", gradingPolicy: "Weighted" },
  { title: "Introduction to Computer Science", code: "CS111", modality: "In-Person", hasLab: true, prerequisites: ["CS110"], semester: "Varies", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Chen", officeHours: "Wed/Fri 1-2 PM", textbook: "Structure and Interpretation of Computer Programs (SICP)", gradingPolicy: "Standard" },
  { title: "Introduction to Computer Programming", code: "CS142", modality: "Hybrid", hasLab: false, prerequisites: [], semester: "Flexible", department: "CS", degreeRequirement: "Elective", instructor: "Dr. Davis", officeHours: "By Appointment", textbook: "Object-Oriented Programming in Java", gradingPolicy: "Pass/Fail" },
  { title: "Introduction to Data Science", code: "CS180", modality: "In-Person", hasLab: false, prerequisites: ["MATH 121"], semester: "Winter 2024", department: "CS", degreeRequirement: "Major Requirement", instructor: "Prof. Wilson", officeHours: "Mon/Wed 3-4 PM", textbook: "Data Science from Scratch", gradingPolicy: "Standard" },
  { title: "Academic Internship", code: "CS199R", modality: "Experiential", hasLab: false, prerequisites: ["Department Approval"], semester: "Ongoing", department: "CS", degreeRequirement: "Elective", instructor: "Internship Coordinator", officeHours: "Contact Coordinator", gradingPolicy: "Pass/Fail" },
  { title: "Topics in Computer Science", code: "CS201R", modality: "In-Person", hasLab: false, prerequisites: [], semester: "Fall 2024", department: "CS", degreeRequirement: "Elective", instructor: "Visiting Professor", officeHours: "TBA", gradingPolicy: "Standard" },
  { title: "Exploring Computer Science", code: "CS191", modality: "In-Person", hasLab: false, prerequisites: [], semester: "Fall/Winter", department: "CS", degreeRequirement: "General Education", instructor: "Dr. Green", officeHours: "Wed 9-10 AM", gradingPolicy: "Pass/Fail" },
  { title: "Software Engineering Lab 1", code: "CS202", modality: "In-Person", hasLab: true, prerequisites: ["CS111"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Major Requirement", instructor: "Prof. Hill", officeHours: "Mon/Fri 11 AM - 12 PM", gradingPolicy: "Standard" },
  { title: "Software Engineering Lab 2", code: "CS203", modality: "In-Person", hasLab: true, prerequisites: ["CS202"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Jones", officeHours: "Tue/Thu 2-3 PM", gradingPolicy: "Standard" },
  { title: "Software Engineering Lab 3", code: "CS204", modality: "In-Person", hasLab: true, prerequisites: ["CS203"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Major Requirement", instructor: "Prof. King", officeHours: "Wed/Fri 10-11 AM", gradingPolicy: "Standard" },
  { title: "Introduction to Computer Systems", code: "CS224", modality: "In-Person", hasLab: true, prerequisites: ["CS111"], semester: "Varies", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Lee", officeHours: "Mon/Wed 1-2 PM", textbook: "Computer Systems: A Programmer's Perspective", gradingPolicy: "Standard" },
  { title: "Data Structures and Algorithms", code: "CS235", modality: "In-Person", hasLab: false, prerequisites: ["CS111"], semester: "Varies", department: "CS", degreeRequirement: "Major Requirement", instructor: "Prof. Martinez", officeHours: "Tue/Thu 3-4 PM", textbook: "Introduction to Algorithms", gradingPolicy: "Standard" },
  { title: "Discrete Structures", code: "CS236", modality: "In-Person", hasLab: false, prerequisites: ["MATH 110"], semester: "Varies", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Nguyen", officeHours: "Mon/Wed 10-11 AM", textbook: "Discrete Mathematics and Its Applications", gradingPolicy: "Standard" },
  { title: "Advanced Software Construction", code: "CS240", modality: "In-Person", hasLab: true, prerequisites: ["CS235", "CS240"], semester: "Varies", department: "CS", degreeRequirement: "Major Requirement", instructor: "Prof. Patel", officeHours: "Tue/Thu 1-2 PM", textbook: "Clean Code", gradingPolicy: "Standard" },
  { title: "Introduction to Computational Theory", code: "CS252", modality: "In-Person", hasLab: false, prerequisites: ["CS236"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Ramirez", officeHours: "Wed/Fri 2-3 PM", textbook: "Introduction to the Theory of Computation", gradingPolicy: "Standard" },
  { title: "Introduction to Human Computer Interaction", code: "CS256", modality: "In-Person", hasLab: true, prerequisites: ["CS111"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Major Requirement", instructor: "Prof. Sharma", officeHours: "Mon/Wed 4-5 PM", textbook: "The Design of Everyday Things", gradingPolicy: "Standard" },
  { title: "Web Programming", code: "CS260", modality: "Online", hasLab: false, prerequisites: ["CS240"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Thompson", officeHours: "Tue/Thu 9-10 AM (Online)", textbook: "Eloquent JavaScript", gradingPolicy: "Standard" },
  { title: "Introduction to Machine Learning", code: "CS270", modality: "In-Person", hasLab: false, prerequisites: ["CS235", "MATH 221"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Major Requirement", instructor: "Prof. Vargas", officeHours: "Mon/Wed 2-3 PM", textbook: "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow", gradingPolicy: "Standard" },
  { title: "Careers in Computer Science", code: "CS291", modality: "In-Person", hasLab: false, prerequisites: [], semester: "Fall/Winter", department: "CS", degreeRequirement: "Elective", instructor: "Career Services Staff", officeHours: "Varies", gradingPolicy: "Pass/Fail" },
  { title: "Topics in Computer Science", code: "CS301R", modality: "In-Person", hasLab: false, prerequisites: ["Varies by topic"], semester: "Fall 2024", department: "CS", degreeRequirement: "Elective", instructor: "Adjunct Faculty", officeHours: "TBA", gradingPolicy: "Standard" },
  { title: "Algorithm Design and Analysis", code: "CS312", modality: "In-Person", hasLab: false, prerequisites: ["CS235", "CS236"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. White", officeHours: "Tue/Thu 11 AM - 12 PM", textbook: "Algorithm Design", gradingPolicy: "Standard" },
  { title: "Systems Programming", code: "CS324", modality: "In-Person", hasLab: false, prerequisites: ["CS224"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Major Requirement", instructor: "Prof. Young", officeHours: "Mon/Wed 9-10 AM", textbook: "Advanced Programming in the UNIX Environment", gradingPolicy: "Standard" },
  { title: "Testing, Analysis, and Verification", code: "CS329", modality: "In-Person", hasLab: false, prerequisites: ["CS204", "CS235"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Zheng", officeHours: "Tue/Thu 4-5 PM", textbook: "Software Testing and Analysis", gradingPolicy: "Standard" },
  { title: "Concepts of Programming Languages", code: "CS330", modality: "In-Person", hasLab: false, prerequisites: ["CS235"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Major Requirement", instructor: "Prof. Adams", officeHours: "Wed/Fri 1-2 PM", textbook: "Programming Language Pragmatics", gradingPolicy: "Standard" },
  { title: "Software Design", code: "CS340", modality: "In-Person", hasLab: false, prerequisites: ["CS240"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Baker", officeHours: "Mon/Wed 11 AM - 12 PM", textbook: "Design Patterns: Elements of Reusable Object-Oriented Software", gradingPolicy: "Standard" },
  { title: "Operating Systems Design", code: "CS345", modality: "In-Person", hasLab: false, prerequisites: ["CS324"], semester: "Flexible", department: "CS", degreeRequirement: "Elective", instructor: "Prof. Clark", officeHours: "By Appointment", textbook: "Operating System Concepts", gradingPolicy: "Standard" },
  { title: "Interactive Graphics and Image Processing", code: "CS355", modality: "In-Person", hasLab: false, prerequisites: ["MATH 221"], semester: "Fall 2024", department: "CS", degreeRequirement: "Elective", instructor: "Dr. Evans", officeHours: "Tue/Thu 2-3 PM", textbook: "Computer Graphics: Principles and Practice", gradingPolicy: "Standard" },
  { title: "Advanced Techniques in Human Computer Interaction", code: "CS356", modality: "In-Person", hasLab: true, prerequisites: ["CS256", "CS260"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Elective", instructor: "Prof. Foster", officeHours: "Wed/Fri 11 AM - 12 PM", textbook: "Information Architecture for the Web and Beyond", gradingPolicy: "Standard" },
  { title: "Advanced Algorithms and Problem Solving", code: "CS393", modality: "In-Person", hasLab: false, prerequisites: ["CS312"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Elective", instructor: "Dr. Garcia", officeHours: "Mon/Wed 3-4 PM", gradingPolicy: "Standard" },
  { title: "Topics in Computer Science", code: "CS401R", modality: "Online", hasLab: false, prerequisites: ["Varies by topic"], semester: "Winter 2025", department: "CS", degreeRequirement: "Elective", instructor: "Industry Expert", officeHours: "Online - TBA", gradingPolicy: "Standard" },
  { title: "Ethics and Computers in Society", code: "CS404", modality: "In-Person", hasLab: false, prerequisites: [], semester: "Fall/Winter", department: "CS", degreeRequirement: "General Education", instructor: "Dr. Hall", officeHours: "Tue/Thu 10-11 AM", gradingPolicy: "Participation-Based" },
  { title: "Creating and Managing a Software Business", code: "CS405", modality: "In-Person", hasLab: false, prerequisites: ["Business Minor Recommended"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Elective", instructor: "Prof. Ingram (Business School)", officeHours: "Wed/Fri 2-3 PM", gradingPolicy: "Project-Based" },
  { title: "Linear Programming and Convex Optimization", code: "CS412", modality: "In-Person", hasLab: false, prerequisites: ["MATH 314", "CS235"], semester: "Flexible", department: "CS", degreeRequirement: "Elective", instructor: "Dr. Johnson", officeHours: "By Appointment", textbook: "Convex Optimization", gradingPolicy: "Standard" },
  { title: "Software Engineering", code: "CS428", modality: "In-Person", hasLab: false, prerequisites: ["CS340", "CS329"], semester: "Flexible", department: "CS", degreeRequirement: "Major Requirement", instructor: "Prof. Klein", officeHours: "By Appointment", gradingPolicy: "Project-Based" },
  { title: "Algorithmic Languages and Compilers", code: "CS431", modality: "In-Person", hasLab: false, prerequisites: ["CS330", "CS252"], semester: "Flexible", department: "CS", degreeRequirement: "Elective", instructor: "Dr. Lewis", officeHours: "By Appointment", textbook: "Compilers: Principles, Techniques, and Tools", gradingPolicy: "Standard" },
  { title: "Computer Vision", code: "CS450", modality: "In-Person", hasLab: false, prerequisites: ["CS270", "MATH 221"], semester: "Winter 2025", department: "CS", degreeRequirement: "Elective", instructor: "Prof. Miller", officeHours: "Tue/Thu 1-2 PM", textbook: "Computer Vision: Algorithms and Applications", gradingPolicy: "Standard" },
  { title: "Database Modeling Concepts", code: "CS452", modality: "In-Person", hasLab: false, prerequisites: ["CS235"], semester: "Varies", department: "CS", degreeRequirement: "Elective", instructor: "Dr. Nelson", officeHours: "Wed/Fri 10-11 AM", textbook: "Database Systems: The Complete Book", gradingPolicy: "Standard" },
  { title: "Fundamentals of Information Retrieval", code: "CS453", modality: "In-Person", hasLab: false, prerequisites: ["CS235", "MATH 121"], semester: "Spring 2024", department: "CS", degreeRequirement: "Elective", instructor: "Prof. Olson", officeHours: "Mon/Wed 1-2 PM", textbook: "Introduction to Information Retrieval", gradingPolicy: "Standard" },
  { title: "Computer Graphics", code: "CS455", modality: "In-Person", hasLab: false, prerequisites: ["CS355"], semester: "Winter 2025", department: "CS", degreeRequirement: "Elective", instructor: "Dr. Parker", officeHours: "Tue/Thu 3-4 PM", gradingPolicy: "Standard" },
  { title: "Mobile and Ubiquitous Human-Computer Interaction", code: "CS456", modality: "In-Person", hasLab: false, prerequisites: ["CS256", "CS260"], semester: "Winter 2025", department: "CS", degreeRequirement: "Elective", instructor: "Prof. Quinn", officeHours: "Wed/Fri 4-5 PM", gradingPolicy: "Project-Based" },
  { title: "Computer Communications and Networking", code: "CS460", modality: "In-Person", hasLab: false, prerequisites: ["CS224"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Roberts", officeHours: "Mon/Wed 10-11 AM", textbook: "Computer Networking: A Top-Down Approach", gradingPolicy: "Standard" },
  { title: "Large-Scale Distributed System Design", code: "CS462", modality: "In-Person", hasLab: false, prerequisites: ["CS324", "CS260"], semester: "Flexible", department: "CS", degreeRequirement: "Elective", instructor: "Prof. Scott", officeHours: "By Appointment", gradingPolicy: "Standard" },
  { title: "Computer Security", code: "CS465", modality: "In-Person", hasLab: false, prerequisites: ["CS224", "MATH 231"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Taylor", officeHours: "Tue/Thu 11 AM - 12 PM", textbook: "Computer Security: Principles and Practice", gradingPolicy: "Standard" },
  { title: "Blockchain Technologies", code: "CS466", modality: "In-Person", hasLab: false, prerequisites: ["CS260", "CS465"], semester: "Winter 2025", department: "CS", degreeRequirement: "Elective", instructor: "Prof. Underwood", officeHours: "Wed/Fri 1-2 PM", gradingPolicy: "Standard" },
  { title: "Introduction to Artificial Intelligence", code: "CS470", modality: "In-Person", hasLab: false, prerequisites: ["CS235", "MATH 221"], semester: "Varies", department: "CS", degreeRequirement: "Major Requirement", instructor: "Dr. Vance", officeHours: "Mon/Wed 2-3 PM", textbook: "Artificial Intelligence: A Modern Approach", gradingPolicy: "Standard" },
  { title: "Voice User Interfaces", code: "CS471", modality: "In-Person", hasLab: false, prerequisites: ["CS256", "CS270"], semester: "Winter 2025", department: "CS", degreeRequirement: "Elective", instructor: "Prof. Washington", officeHours: "Tue/Thu 4-5 PM", gradingPolicy: "Project-Based" },
  { title: "Advanced Machine Learning", code: "CS473", modality: "In-Person", hasLab: false, prerequisites: ["CS270", "MATH 321"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Elective", instructor: "Dr. Xavier", officeHours: "Wed/Fri 10-11 AM", gradingPolicy: "Standard" },
  { title: "Introduction to Deep Learning", code: "CS474", modality: "In-Person", hasLab: false, prerequisites: ["CS270", "MATH 221", "CS355"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Elective", instructor: "Prof. Yates", officeHours: "Mon/Wed 4-5 PM", gradingPolicy: "Standard" },
  { title: "Secondary Minor Student Teaching", code: "CS477R", modality: "Experiential", hasLab: false, prerequisites: ["Education Minor", "Department Approval"], semester: "Varies", department: "CS", degreeRequirement: "Minor Requirement", instructor: "Education Faculty Supervisor", officeHours: "Contact Supervisor", gradingPolicy: "Pass/Fail" },
  { title: "Introduction to Machine Translation", code: "CS479", modality: "In-Person", hasLab: false, prerequisites: ["CS470", "LING 201"], semester: "Fall 2024", department: "CS", degreeRequirement: "Elective", instructor: "Dr. Zimmerman", officeHours: "Tue/Thu 9-10 AM", gradingPolicy: "Standard" },
  { title: "Software Engineering Capstone 1", code: "CS480", modality: "In-Person", hasLab: false, prerequisites: ["Senior Standing in CS"], semester: "Fall 2024", department: "CS", degreeRequirement: "Major Requirement", instructor: "Capstone Faculty Advisor", officeHours: "Team-Based", gradingPolicy: "Project-Based" },
  { title: "Software Engineering Capstone 2", code: "CS481", modality: "In-Person", hasLab: false, prerequisites: ["CS480"], semester: "Winter 2025", department: "CS", degreeRequirement: "Major Requirement", instructor: "Capstone Faculty Advisor", officeHours: "Team-Based", gradingPolicy: "Project-Based" },
  { title: "Data Science Capstone 1", code: "CS482", modality: "In-Person", hasLab: false, prerequisites: ["Senior Standing in CS/Data Science"], semester: "Fall 2024", department: "CS", degreeRequirement: "Major Requirement", instructor: "Data Science Faculty Advisor", officeHours: "Team-Based", gradingPolicy: "Project-Based" },
  { title: "Data Science Capstone 2", code: "CS483", modality: "In-Person", hasLab: false, prerequisites: ["CS482"], semester: "Winter 2025", department: "CS", degreeRequirement: "Major Requirement", instructor: "Data Science Faculty Advisor", officeHours: "Team-Based", gradingPolicy: "Project-Based" },
  { title: "Verification and Validation", code: "CS486", modality: "In-Person", hasLab: false, prerequisites: ["CS236", "CS329"], semester: "Winter 2025", department: "CS", degreeRequirement: "Elective", instructor: "Dr. Adams (Logic Group)", officeHours: "Tue/Thu 2-3 PM", gradingPolicy: "Standard" },
  { title: "Computing Competitions", code: "CS493R", modality: "In-Person", hasLab: false, prerequisites: ["By Application"], semester: "Winter 2025", department: "CS", degreeRequirement: "Elective", instructor: "Competition Coach", officeHours: "Team-Based", gradingPolicy: "Participation & Performance" },
  { title: "Capstone 1", code: "CS494", modality: "In-Person", hasLab: false, prerequisites: ["Senior Standing in CS"], semester: "Flexible", department: "CS", degreeRequirement: "Major Requirement", instructor: "Capstone Faculty Advisor", officeHours: "Team-Based", gradingPolicy: "Project-Based" },
  { title: "Capstone 2", code: "CS495", modality: "In-Person", hasLab: false, prerequisites: ["CS494"], semester: "Flexible", department: "CS", degreeRequirement: "Major Requirement", instructor: "Capstone Faculty Advisor", officeHours: "Team-Based", gradingPolicy: "Project-Based" },
  { title: "Undergraduate Research", code: "CS497R", modality: "Research", hasLab: true, prerequisites: ["Faculty Mentor Approval"], semester: "Ongoing", department: "CS", degreeRequirement: "Elective", instructor: "Faculty Mentor", officeHours: "Mentor-Dependent", gradingPolicy: "Mentor Evaluation" },
  { title: "Undergraduate Special Projects", code: "CS498R", modality: "Project-Based", hasLab: true, prerequisites: ["Faculty Advisor Approval"], semester: "Ongoing", department: "CS", degreeRequirement: "Elective", instructor: "Faculty Advisor", officeHours: "Advisor-Dependent", gradingPolicy: "Advisor Evaluation" },
  { title: "(CS-Chem-Geol-Math-MthEd-Phscs-Stat) Business Career Essentials in Science and Math", code: "CS500", modality: "In-Person", hasLab: false, prerequisites: ["Senior Standing in Science/Math"], semester: "Winter 2025", department: "Interdisciplinary", degreeRequirement: "Elective", instructor: "Business School Faculty", officeHours: "TBA", gradingPolicy: "Project & Presentation" },
  { title: "Advanced Topics in Computer Science", code: "CS501R", modality: "In-Person", hasLab: false, prerequisites: ["Graduate Standing or Instructor Permission"], semester: "Fall 2024", department: "CS", degreeRequirement: "Graduate Elective", instructor: "Research Faculty", officeHours: "TBA", gradingPolicy: "Standard" },
  { title: "Job Search Strategies", code: "CS502", modality: "In-Person", hasLab: false, prerequisites: ["Graduating Senior or Graduate Student"], semester: "Fall/Winter", department: "CS", degreeRequirement: "Elective", instructor: "Career Services Staff", officeHours: "Varies", gradingPolicy: "Participation-Based" },
  { title: "Robust Control", code: "CS513", modality: "In-Person", hasLab: false, prerequisites: ["MATH 334", "Engineering Background"], semester: "Winter 2025", department: "CS", degreeRequirement: "Graduate Elective", instructor: "Engineering Faculty", officeHours: "TBA", textbook: "Robust and Optimal Control", gradingPolicy: "Standard" },
  { title: "Research Methods and Study Design in Human-Computer Interaction", code: "CS556", modality: "In-Person", hasLab: false, prerequisites: ["CS256 or Equivalent Experience"], semester: "Winter 2025", department: "CS", degreeRequirement: "Graduate Elective", instructor: "Dr. Moore", officeHours: "Mon/Wed 1-2 PM", gradingPolicy: "Project & Paper" },
  { title: "Transformer Models for Natural Language Processing", code: "CS574", modality: "In-Person", hasLab: false, prerequisites: ["CS474 or Equivalent Deep Learning Experience"], semester: "Fall 2024", department: "CS", degreeRequirement: "Graduate Elective", instructor: "Prof. North", officeHours: "Tue/Thu 3-4 PM", gradingPolicy: "Project & Participation" },
  { title: "Introduction to Graph Data Science", code: "CS575", modality: "In-Person", hasLab: false, prerequisites: ["CS270 or Equivalent Machine Learning Experience"], semester: "Winter 2025", department: "CS", degreeRequirement: "Graduate Elective", instructor: "Dr. Owen", officeHours: "Wed/Fri 11 AM - 12 PM", gradingPolicy: "Standard" },
  { title: "Theory of Predictive Modeling", code: "CS580", modality: "In-Person", hasLab: false, prerequisites: ["MATH 421", "Statistical Background"], semester: "Fall 2024", department: "CS", degreeRequirement: "Graduate Elective", instructor: "Prof. Perry", officeHours: "Mon/Wed 3-4 PM", gradingPolicy: "Standard" },
  { title: "Introduction to Three-Dimensional Computer Graphics", code: "CSANM 150", modality: "In-Person", hasLab: true, prerequisites: [], semester: "Varies by Term", department: "CSANM", degreeRequirement: "Major Requirement (Animation)", instructor: "Animation Faculty", officeHours: "TBA", gradingPolicy: "Project-Based" },
  { title: "Visual Narrative for Animation", code: "CSANM 210", modality: "In-Person", hasLab: true, prerequisites: ["CSANM 150 or Portfolio Review"], semester: "Fall 2024", department: "CSANM", degreeRequirement: "Major Requirement (Animation)", instructor: "Animation Faculty", officeHours: "TBA", gradingPolicy: "Critique-Based" },
  { title: "Intermediate Three-Dimensional Computer Graphics", code: "CSANM 250", modality: "In-Person", hasLab: false, prerequisites: ["CSANM 150"], semester: "Fall 2024", department: "CSANM", degreeRequirement: "Major Requirement (Animation)", instructor: "Animation Faculty", officeHours: "TBA", gradingPolicy: "Project-Based" },
  { title: "Introduction to Three-Dimensional Animation", code: "CSANM 252", modality: "In-Person", hasLab: true, prerequisites: ["CSANM 250"], semester: "Winter 2025", department: "CSANM", degreeRequirement: "Major Requirement (Animation)", instructor: "Animation Faculty", officeHours: "TBA", gradingPolicy: "Performance-Based" },
  { title: "Scripting for Animation", code: "CSANM 258", modality: "In-Person", hasLab: true, prerequisites: ["CSANM 150", "Basic Programming Knowledge Recommended"], semester: "Winter 2025", department: "CSANM", degreeRequirement: "Major Requirement (Animation)", instructor: "Animation Technical Director", officeHours: "TBA", gradingPolicy: "Project-Based" },
  { title: "Introduction to Game Design", code: "CSANM 340", modality: "In-Person", hasLab: false, prerequisites: [], semester: "Fall 2024", department: "CSANM", degreeRequirement: "Elective (Animation, CS)", instructor: "Game Design Faculty", officeHours: "TBA", gradingPolicy: "Design Document & Prototypes" },
  { title: "Real-time Techniques", code: "CSANM 342", modality: "In-Person", hasLab: false, prerequisites: ["CSANM 252", "CSANM 258"], semester: "Fall 2024", department: "CSANM", degreeRequirement: "Major Requirement (Animation, Game Dev Focus)", instructor: "Real-time Graphics Specialist", officeHours: "TBA", gradingPolicy: "Project-Based" },
  { title: "Cybersecurity Ethics", code: "CS467", modality: "Online", hasLab: false, prerequisites: ["CS465 Recommended"], semester: "Spring 2024", department: "CS", degreeRequirement: "Elective", instructor: "Dr. Eleanor Vance", officeHours: "Wednesdays 7-9 PM (Online)", syllabus: "cybersecurity_ethics_syllabus.pdf", textbook: "Ethics for the Information Age", gradingPolicy: "Essay-Based" },
  { title: "Advanced Data Visualization", code: "CS484", modality: "Hybrid", hasLab: true, prerequisites: ["CS180", "CS270"], semester: "Fall 2024", department: "CS", degreeRequirement: "Elective", instructor: "Professor Robert Miller", officeHours: "Tuesdays 1-3 PM (In-Person & Online)", syllabus: "adv_dataviz_fall2024_syllabus.pdf", textbook: "The Visual Display of Quantitative Information", gradingPolicy: "Project-Heavy" },
  { title: "Quantum Information Science", code: "CS576", modality: "In-Person", hasLab: false, prerequisites: ["Linear Algebra", "Discrete Math", "Probability"], semester: "Spring 2025", department: "CS", degreeRequirement: "Graduate Elective", instructor: "Dr. Alistair Scott", officeHours: "Mondays & Wednesdays 10-11 AM", syllabus: "quantum_info_spring2025_syllabus.pdf", textbook: "Quantum Computation and Quantum Information", gradingPolicy: "Problem Sets & Exams" }
];

const fuse = new Fuse(courses, {
  keys: [
    { name: "title", weight: 0.6 },
    { name: "code", weight: 0.4 },
    { name: "instructor", weight: 0.2 }
  ],
  threshold: 0.3,
  distance: 100,
  ignoreLocation: true
});

export default function CourseSearch() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [search, setSearch] = useState(query);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredCourses, setFilteredCourses] = useState(courses);

  useEffect(() => {
    let results = [];

    if (/^\d+$/.test(search.trim())) {
      results = courses.filter((course) => course.code.includes(search.trim()));
    } else {
      results = search ? fuse.search(search).map((result) => result.item) : courses;
    }

    if (sortKey) {
      results = [...results].sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    }

    setFilteredCourses(results);
  }, [search, sortKey, sortOrder]);

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <SidebarFilters />

      <div style={{ width: "100%", padding: "10px", borderRadius: "4px", marginBottom: "20px" }}>
        
        {/* 🚀 SearchBar & SortCourses in a row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
          <SearchBar onSearch={setSearch} />
          <SortCourses onSort={(key, order) => {
            setSortKey(key);
            setSortOrder(order);
          }} />
        </div>

        {/* Course Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px", marginTop: "10px" }}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div key={index} style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}>
                <h2 style={{ fontSize: "16px", marginBottom: "5px", color: "#002E5D", fontWeight: "bold" }}>{course.title}</h2>
                <p style={{ fontWeight: "bold", color: "#555", marginBottom: "5px" }}>Course Code: {course.code}</p>
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>Instructor: {course.instructor}</p>
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>Semester: {course.semester}</p>
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>Modality: {course.modality}</p>
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>Department: {course.department}</p>
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>Degree Requirement: {course.degreeRequirement}</p>
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>Office Hours: {course.officeHours}</p>
                
                {course.hasLab && <p style={{ color: "red", fontSize: "12px", marginBottom: "5px" }}>Lab Required</p>}
                
                {course.prerequisites.length > 0 && (
                  <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>
                    Prerequisites: {course.prerequisites.join(", ")}
                  </p>
                )}

                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>Textbook: {course.textbook}</p>
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "5px" }}>Grading Policy: {course.gradingPolicy}</p>

                {course.syllabus && (
                  <a href={course.syllabus} style={{ color: "#002E5D", fontSize: "12px", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                    📄 View Syllabus
                  </a>
                )}
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
