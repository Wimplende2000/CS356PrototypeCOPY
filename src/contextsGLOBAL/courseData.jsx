const courseData = [
  {
      title: "Introduction to Computer Science",
      code: "CS101",
      modality: "Online",
      hasLab: true,
      prerequisites: [],
      semester: "Fall 2023",
      department: "Computer Science",
      degreeRequirement: "Major Requirement",
      instructor: "Dr. Smith",
      officeHours: "Mon 2-4 PM",
      syllabus: "syllabus.pdf",
      textbook: "Introduction to CS",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Smith", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Dr. Brown", time: "TTh 1:30 PM - 3:00 PM" }
      ]
  },
  {
      title: "How to Program",
      code: "CS110",
      modality: "In-Person",
      hasLab: true,
      prerequisites: [],
      semester: "Varies",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Prof. Anderson",
      officeHours: "Tue/Thu 10-11 AM",
      textbook: "Programming Fundamentals",
      gradingPolicy: "Weighted",
      sections: [
          { sectionNumber: "001", professor: "Prof. Anderson", time: "MWF 9:00 AM - 10:00 AM" },
          { sectionNumber: "002", professor: "Dr. Lee", time: "TTh 3:00 PM - 4:30 PM" }
      ]
  },
  {
      title: "Introduction to Computer Science",
      code: "CS111",
      modality: "In-Person",
      hasLab: true,
      prerequisites: ["CS110"],
      semester: "Varies",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Dr. Chen",
      officeHours: "Wed/Fri 1-2 PM",
      textbook: "Structure and Interpretation of Computer Programs (SICP)",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Chen", time: "MWF 11:00 AM - 12:00 PM" },
          { sectionNumber: "002", professor: "Prof. Martinez", time: "TTh 2:00 PM - 3:30 PM" }
      ]
  },
  {
      title: "Introduction to Computer Programming",
      code: "CS142",
      modality: "Hybrid",
      hasLab: false,
      prerequisites: [],
      semester: "Flexible",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Dr. Davis",
      officeHours: "By Appointment",
      textbook: "Object-Oriented Programming in Java",
      gradingPolicy: "Pass/Fail",
      sections: [
          { sectionNumber: "001", professor: "Dr. Davis", time: "MWF 1:00 PM - 2:00 PM" },
          { sectionNumber: "002", professor: "Prof. Green", time: "TTh 10:00 AM - 11:30 AM" }
      ]
  },
  {
      title: "Introduction to Data Science",
      code: "CS180",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["MATH 121"],
      semester: "Winter 2024",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Prof. Wilson",
      officeHours: "Mon/Wed 3-4 PM",
      textbook: "Data Science from Scratch",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. Wilson", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Dr. Adams", time: "TTh 1:00 PM - 2:30 PM" }
      ]
  },
  {
      title: "Academic Internship",
      code: "CS199R",
      modality: "Experiential",
      hasLab: false,
      prerequisites: ["Department Approval"],
      semester: "Ongoing",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Internship Coordinator",
      officeHours: "Contact Coordinator",
      gradingPolicy: "Pass/Fail",
      sections: [
          { sectionNumber: "001", professor: "Internship Coordinator", time: "By Arrangement" }
      ]
  },
  {
      title: "Topics in Computer Science",
      code: "CS201R",
      modality: "In-Person",
      hasLab: false,
      prerequisites: [],
      semester: "Fall 2024",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Visiting Professor",
      officeHours: "TBA",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Visiting Professor", time: "MWF 2:00 PM - 3:00 PM" },
          { sectionNumber: "002", professor: "Dr. Taylor", time: "TTh 4:00 PM - 5:30 PM" }
      ]
  },
  {
      title: "Exploring Computer Science",
      code: "CS191",
      modality: "In-Person",
      hasLab: false,
      prerequisites: [],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "General Education",
      instructor: "Dr. Green",
      officeHours: "Wed 9-10 AM",
      gradingPolicy: "Pass/Fail",
      sections: [
          { sectionNumber: "001", professor: "Dr. Green", time: "MWF 9:00 AM - 10:00 AM" },
          { sectionNumber: "002", professor: "Prof. Hill", time: "TTh 11:00 AM - 12:30 PM" }
      ]
  },
  {
      title: "Software Engineering Lab 1",
      code: "CS202",
      modality: "In-Person",
      hasLab: true,
      prerequisites: ["CS111"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Prof. Hill",
      officeHours: "Mon/Fri 11 AM - 12 PM",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. Hill", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Dr. Jones", time: "TTh 1:00 PM - 2:30 PM" }
      ]
  },
  {
      title: "Software Engineering Lab 2",
      code: "CS203",
      modality: "In-Person",
      hasLab: true,
      prerequisites: ["CS202"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Dr. Jones",
      officeHours: "Tue/Thu 2-3 PM",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Jones", time: "MWF 11:00 AM - 12:00 PM" },
          { sectionNumber: "002", professor: "Prof. King", time: "TTh 2:00 PM - 3:30 PM" }
      ]
  },
  {
      title: "Software Engineering Lab 3",
      code: "CS204",
      modality: "In-Person",
      hasLab: true,
      prerequisites: ["CS203"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Prof. King",
      officeHours: "Wed/Fri 10-11 AM",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. King", time: "MWF 12:00 PM - 1:00 PM" },
          { sectionNumber: "002", professor: "Dr. Lee", time: "TTh 3:00 PM - 4:30 PM" }
      ]
  },
  {
      title: "Introduction to Computer Systems",
      code: "CS224",
      modality: "In-Person",
      hasLab: true,
      prerequisites: ["CS111"],
      semester: "Varies",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Dr. Lee",
      officeHours: "Mon/Wed 1-2 PM",
      textbook: "Computer Systems: A Programmer's Perspective",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Lee", time: "MWF 1:00 PM - 2:00 PM" },
          { sectionNumber: "002", professor: "Prof. Martinez", time: "TTh 4:00 PM - 5:30 PM" }
      ]
  },
  {
      title: "Data Structures and Algorithms",
      code: "CS235",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS111"],
      semester: "Varies",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Prof. Martinez",
      officeHours: "Tue/Thu 3-4 PM",
      textbook: "Introduction to Algorithms",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. Martinez", time: "MWF 2:00 PM - 3:00 PM" },
          { sectionNumber: "002", professor: "Dr. Nguyen", time: "TTh 5:00 PM - 6:30 PM" }
      ]
  },
  {
      title: "Discrete Structures",
      code: "CS236",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["MATH 110"],
      semester: "Varies",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Dr. Nguyen",
      officeHours: "Mon/Wed 10-11 AM",
      textbook: "Discrete Mathematics and Its Applications",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Nguyen", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Prof. Patel", time: "TTh 1:00 PM - 2:30 PM" }
      ]
  },
  {
      title: "Advanced Software Construction",
      code: "CS240",
      modality: "In-Person",
      hasLab: true,
      prerequisites: ["CS235", "CS240"],
      semester: "Varies",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Prof. Patel",
      officeHours: "Tue/Thu 1-2 PM",
      textbook: "Clean Code",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. Patel", time: "MWF 11:00 AM - 12:00 PM" },
          { sectionNumber: "002", professor: "Dr. Ramirez", time: "TTh 2:00 PM - 3:30 PM" }
      ]
  },
  {
      title: "Introduction to Computational Theory",
      code: "CS252",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS236"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Dr. Ramirez",
      officeHours: "Wed/Fri 2-3 PM",
      textbook: "Introduction to the Theory of Computation",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Ramirez", time: "MWF 12:00 PM - 1:00 PM" },
          { sectionNumber: "002", professor: "Prof. Sharma", time: "TTh 3:00 PM - 4:30 PM" }
      ]
  },
  {
      title: "Introduction to Human Computer Interaction",
      code: "CS256",
      modality: "In-Person",
      hasLab: true,
      prerequisites: ["CS111"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Prof. Sharma",
      officeHours: "Mon/Wed 4-5 PM",
      textbook: "The Design of Everyday Things",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. Sharma", time: "MWF 1:00 PM - 2:00 PM" },
          { sectionNumber: "002", professor: "Dr. Thompson", time: "TTh 4:00 PM - 5:30 PM" }
      ]
  },
  {
      title: "Web Programming",
      code: "CS260",
      modality: "Online",
      hasLab: false,
      prerequisites: ["CS240"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Dr. Thompson",
      officeHours: "Tue/Thu 9-10 AM (Online)",
      textbook: "Eloquent JavaScript",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Thompson", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Prof. Vargas", time: "TTh 1:00 PM - 2:30 PM" }
      ]
  },
  {
      title: "Introduction to Machine Learning",
      code: "CS270",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS235", "MATH 221"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Prof. Vargas",
      officeHours: "Mon/Wed 2-3 PM",
      textbook: "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. Vargas", time: "MWF 2:00 PM - 3:00 PM" },
          { sectionNumber: "002", professor: "Dr. White", time: "TTh 5:00 PM - 6:30 PM" }
      ]
  },
  {
      title: "Careers in Computer Science",
      code: "CS291",
      modality: "In-Person",
      hasLab: false,
      prerequisites: [],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Career Services Staff",
      officeHours: "Varies",
      gradingPolicy: "Pass/Fail",
      sections: [
          { sectionNumber: "001", professor: "Career Services Staff", time: "By Arrangement" }
      ]
  },
  {
      title: "Topics in Computer Science",
      code: "CS301R",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["Varies by topic"],
      semester: "Fall 2024",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Adjunct Faculty",
      officeHours: "TBA",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Adjunct Faculty", time: "MWF 3:00 PM - 4:00 PM" },
          { sectionNumber: "002", professor: "Dr. Adams", time: "TTh 6:00 PM - 7:30 PM" }
      ]
  },
  {
      title: "Algorithm Design and Analysis",
      code: "CS312",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS235", "CS236"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Dr. White",
      officeHours: "Tue/Thu 11 AM - 12 PM",
      textbook: "Algorithm Design",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. White", time: "MWF 11:00 AM - 12:00 PM" },
          { sectionNumber: "002", professor: "Prof. Young", time: "TTh 2:00 PM - 3:30 PM" }
      ]
  },
  {
      title: "Systems Programming",
      code: "CS324",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS224"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Prof. Young",
      officeHours: "Mon/Wed 9-10 AM",
      textbook: "Advanced Programming in the UNIX Environment",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. Young", time: "MWF 9:00 AM - 10:00 AM" },
          { sectionNumber: "002", professor: "Dr. Zheng", time: "TTh 4:00 PM - 5:30 PM" }
      ]
  },
  {
      title: "Testing, Analysis, and Verification",
      code: "CS329",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS204", "CS235"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Dr. Zheng",
      officeHours: "Tue/Thu 4-5 PM",
      textbook: "Software Testing and Analysis",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Zheng", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Prof. Adams", time: "TTh 5:00 PM - 6:30 PM" }
      ]
  },
  {
      title: "Concepts of Programming Languages",
      code: "CS330",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS235"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Prof. Adams",
      officeHours: "Wed/Fri 1-2 PM",
      textbook: "Programming Language Pragmatics",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. Adams", time: "MWF 12:00 PM - 1:00 PM" },
          { sectionNumber: "002", professor: "Dr. Baker", time: "TTh 3:00 PM - 4:30 PM" }
      ]
  },
  {
      title: "Software Design",
      code: "CS340",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS240"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Dr. Baker",
      officeHours: "Mon/Wed 11 AM - 12 PM",
      textbook: "Design Patterns: Elements of Reusable Object-Oriented Software",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Baker", time: "MWF 11:00 AM - 12:00 PM" },
          { sectionNumber: "002", professor: "Prof. Clark", time: "TTh 2:00 PM - 3:30 PM" }
      ]
  },
  {
      title: "Operating Systems Design",
      code: "CS345",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS324"],
      semester: "Flexible",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Prof. Clark",
      officeHours: "By Appointment",
      textbook: "Operating System Concepts",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. Clark", time: "MWF 1:00 PM - 2:00 PM" },
          { sectionNumber: "002", professor: "Dr. Evans", time: "TTh 4:00 PM - 5:30 PM" }
      ]
  },
  {
      title: "Interactive Graphics and Image Processing",
      code: "CS355",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["MATH 221"],
      semester: "Fall 2024",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Dr. Evans",
      officeHours: "Tue/Thu 2-3 PM",
      textbook: "Computer Graphics: Principles and Practice",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Evans", time: "MWF 2:00 PM - 3:00 PM" },
          { sectionNumber: "002", professor: "Prof. Foster", time: "TTh 5:00 PM - 6:30 PM" }
      ]
  },
  {
      title: "Advanced Techniques in Human Computer Interaction",
      code: "CS356",
      modality: "In-Person",
      hasLab: true,
      prerequisites: ["CS256", "CS260"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Prof. Foster",
      officeHours: "Wed/Fri 11 AM - 12 PM",
      textbook: "Information Architecture for the Web and Beyond",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. Jensen", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Prof. Jensen", time: "TTh 1:00 PM - 2:30 PM" }
      ]
  },
  {
      title: "Advanced Algorithms and Problem Solving",
      code: "CS393",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS312"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Dr. Garcia",
      officeHours: "Mon/Wed 3-4 PM",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Garcia", time: "MWF 3:00 PM - 4:00 PM" },
          { sectionNumber: "002", professor: "Dr. Hall", time: "TTh 6:00 PM - 7:30 PM" }
      ]
  },
  {
      title: "Topics in Computer Science",
      code: "CS401R",
      modality: "Online",
      hasLab: false,
      prerequisites: ["Varies by topic"],
      semester: "Winter 2025",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Industry Expert",
      officeHours: "Online - TBA",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Industry Expert", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Prof. Ingram", time: "TTh 1:00 PM - 2:30 PM" }
      ]
  },
  {
      title: "Ethics and Computers in Society",
      code: "CS404",
      modality: "In-Person",
      hasLab: false,
      prerequisites: [],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "General Education",
      instructor: "Dr. Hall",
      officeHours: "Tue/Thu 10-11 AM",
      gradingPolicy: "Participation-Based",
      sections: [
          { sectionNumber: "001", professor: "Dr. Hall", time: "MWF 12:00 PM - 1:00 PM" },
          { sectionNumber: "002", professor: "Prof. Ingram", time: "TTh 3:00 PM - 4:30 PM" }
      ]
  },
  {
      title: "Creating and Managing a Software Business",
      code: "CS405",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["Business Minor Recommended"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Prof. Ingram (Business School)",
      officeHours: "Wed/Fri 2-3 PM",
      gradingPolicy: "Project-Based",
      sections: [
          { sectionNumber: "001", professor: "Prof. Ingram", time: "MWF 2:00 PM - 3:00 PM" },
          { sectionNumber: "002", professor: "Dr. Johnson", time: "TTh 5:00 PM - 6:30 PM" }
      ]
  },
  {
      title: "Linear Programming and Convex Optimization",
      code: "CS412",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["MATH 314", "CS235"],
      semester: "Flexible",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Dr. Johnson",
      officeHours: "By Appointment",
      textbook: "Convex Optimization",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Johnson", time: "MWF 11:00 AM - 12:00 PM" },
          { sectionNumber: "002", professor: "Prof. Klein", time: "TTh 2:00 PM - 3:30 PM" }
      ]
  },
  {
      title: "Software Engineering",
      code: "CS428",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS340", "CS329"],
      semester: "Flexible",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Prof. Klein",
      officeHours: "By Appointment",
      gradingPolicy: "Project-Based",
      sections: [
          { sectionNumber: "001", professor: "Prof. Klein", time: "MWF 1:00 PM - 2:00 PM" },
          { sectionNumber: "002", professor: "Dr. Lewis", time: "TTh 4:00 PM - 5:30 PM" }
      ]
  },
  {
      title: "Algorithmic Languages and Compilers",
      code: "CS431",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS330", "CS252"],
      semester: "Flexible",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Dr. Lewis",
      officeHours: "By Appointment",
      textbook: "Compilers: Principles, Techniques, and Tools",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Lewis", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Prof. Miller", time: "TTh 1:00 PM - 2:30 PM" }
      ]
  },
  {
      title: "Computer Vision",
      code: "CS450",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS270", "MATH 221"],
      semester: "Winter 2025",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Prof. Miller",
      officeHours: "Tue/Thu 1-2 PM",
      textbook: "Computer Vision: Algorithms and Applications",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. Miller", time: "MWF 2:00 PM - 3:00 PM" },
          { sectionNumber: "002", professor: "Dr. Nelson", time: "TTh 5:00 PM - 6:30 PM" }
      ]
  },
  {
      title: "Database Modeling Concepts",
      code: "CS452",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS235"],
      semester: "Varies",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Dr. Nelson",
      officeHours: "Wed/Fri 10-11 AM",
      textbook: "Database Systems: The Complete Book",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Nelson", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Prof. Olson", time: "TTh 1:00 PM - 2:30 PM" }
      ]
  },
  {
      title: "Fundamentals of Information Retrieval",
      code: "CS453",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS235", "MATH 121"],
      semester: "Spring 2024",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Prof. Olson",
      officeHours: "Mon/Wed 1-2 PM",
      textbook: "Introduction to Information Retrieval",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. Olson", time: "MWF 1:00 PM - 2:00 PM" },
          { sectionNumber: "002", professor: "Dr. Parker", time: "TTh 4:00 PM - 5:30 PM" }
      ]
  },
  {
      title: "Computer Graphics",
      code: "CS455",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS355"],
      semester: "Winter 2025",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Dr. Parker",
      officeHours: "Tue/Thu 3-4 PM",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Parker", time: "MWF 3:00 PM - 4:00 PM" },
          { sectionNumber: "002", professor: "Prof. Quinn", time: "TTh 6:00 PM - 7:30 PM" }
      ]
  },
  {
      title: "Mobile and Ubiquitous Human-Computer Interaction",
      code: "CS456",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS256", "CS260"],
      semester: "Winter 2025",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Prof. Quinn",
      officeHours: "Wed/Fri 4-5 PM",
      gradingPolicy: "Project-Based",
      sections: [
          { sectionNumber: "001", professor: "Prof. Quinn", time: "MWF 4:00 PM - 5:00 PM" },
          { sectionNumber: "002", professor: "Dr. Roberts", time: "TTh 7:00 PM - 8:30 PM" }
      ]
  },
  {
      title: "Computer Communications and Networking",
      code: "CS460",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS224"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Dr. Roberts",
      officeHours: "Mon/Wed 10-11 AM",
      textbook: "Computer Networking: A Top-Down Approach",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Roberts", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Prof. Scott", time: "TTh 1:00 PM - 2:30 PM" }
      ]
  },
  {
      title: "Large-Scale Distributed System Design",
      code: "CS462",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS324", "CS260"],
      semester: "Flexible",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Prof. Scott",
      officeHours: "By Appointment",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. Scott", time: "MWF 11:00 AM - 12:00 PM" },
          { sectionNumber: "002", professor: "Dr. Taylor", time: "TTh 2:00 PM - 3:30 PM" }
      ]
  },
  {
      title: "Computer Security",
      code: "CS465",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS224", "MATH 231"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Dr. Taylor",
      officeHours: "Tue/Thu 11 AM - 12 PM",
      textbook: "Computer Security: Principles and Practice",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Taylor", time: "MWF 12:00 PM - 1:00 PM" },
          { sectionNumber: "002", professor: "Prof. Underwood", time: "TTh 3:00 PM - 4:30 PM" }
      ]
  },
  {
      title: "Blockchain Technologies",
      code: "CS466",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS260", "CS465"],
      semester: "Winter 2025",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Prof. Underwood",
      officeHours: "Wed/Fri 1-2 PM",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. Underwood", time: "MWF 1:00 PM - 2:00 PM" },
          { sectionNumber: "002", professor: "Dr. Vance", time: "TTh 4:00 PM - 5:30 PM" }
      ]
  },
  {
      title: "Introduction to Artificial Intelligence",
      code: "CS470",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS235", "MATH 221"],
      semester: "Varies",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Dr. Vance",
      officeHours: "Mon/Wed 2-3 PM",
      textbook: "Artificial Intelligence: A Modern Approach",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Vance", time: "MWF 2:00 PM - 3:00 PM" },
          { sectionNumber: "002", professor: "Prof. Washington", time: "TTh 5:00 PM - 6:30 PM" }
      ]
  },
  {
      title: "Voice User Interfaces",
      code: "CS471",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS256", "CS270"],
      semester: "Winter 2025",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Prof. Washington",
      officeHours: "Tue/Thu 4-5 PM",
      gradingPolicy: "Project-Based",
      sections: [
          { sectionNumber: "001", professor: "Prof. Washington", time: "MWF 3:00 PM - 4:00 PM" },
          { sectionNumber: "002", professor: "Dr. Xavier", time: "TTh 6:00 PM - 7:30 PM" }
      ]
  },
  {
      title: "Advanced Machine Learning",
      code: "CS473",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS270", "MATH 321"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Dr. Xavier",
      officeHours: "Wed/Fri 10-11 AM",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Xavier", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Prof. Yates", time: "TTh 1:00 PM - 2:30 PM" }
      ]
  },
  {
      title: "Introduction to Deep Learning",
      code: "CS474",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS270", "MATH 221", "CS355"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Prof. Yates",
      officeHours: "Mon/Wed 4-5 PM",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. Yates", time: "MWF 4:00 PM - 5:00 PM" },
          { sectionNumber: "002", professor: "Dr. Zimmerman", time: "TTh 7:00 PM - 8:30 PM" }
      ]
  },
  {
      title: "Secondary Minor Student Teaching",
      code: "CS477R",
      modality: "Experiential",
      hasLab: false,
      prerequisites: ["Education Minor", "Department Approval"],
      semester: "Varies",
      department: "CS",
      degreeRequirement: "Minor Requirement",
      instructor: "Education Faculty Supervisor",
      officeHours: "Contact Supervisor",
      gradingPolicy: "Pass/Fail",
      sections: [
          { sectionNumber: "001", professor: "Education Faculty Supervisor", time: "By Arrangement" }
      ]
  },
  {
      title: "Introduction to Machine Translation",
      code: "CS479",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS470", "LING 201"],
      semester: "Fall 2024",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Dr. Zimmerman",
      officeHours: "Tue/Thu 9-10 AM",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Zimmerman", time: "MWF 9:00 AM - 10:00 AM" },
          { sectionNumber: "002", professor: "Dr. Adams", time: "TTh 12:00 PM - 1:30 PM" }
      ]
  },
  {
      title: "Software Engineering Capstone 1",
      code: "CS480",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["Senior Standing in CS"],
      semester: "Fall 2024",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Capstone Faculty Advisor",
      officeHours: "Team-Based",
      gradingPolicy: "Project-Based",
      sections: [
          { sectionNumber: "001", professor: "Capstone Faculty Advisor", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Dr. Baker", time: "TTh 1:00 PM - 2:30 PM" }
      ]
  },
  {
      title: "Software Engineering Capstone 2",
      code: "CS481",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS480"],
      semester: "Winter 2025",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Capstone Faculty Advisor",
      officeHours: "Team-Based",
      gradingPolicy: "Project-Based",
      sections: [
          { sectionNumber: "001", professor: "Capstone Faculty Advisor", time: "MWF 11:00 AM - 12:00 PM" },
          { sectionNumber: "002", professor: "Prof. Clark", time: "TTh 2:00 PM - 3:30 PM" }
      ]
  },
  {
      title: "Data Science Capstone 1",
      code: "CS482",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["Senior Standing in CS/Data Science"],
      semester: "Fall 2024",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Data Science Faculty Advisor",
      officeHours: "Team-Based",
      gradingPolicy: "Project-Based",
      sections: [
          { sectionNumber: "001", professor: "Data Science Faculty Advisor", time: "MWF 12:00 PM - 1:00 PM" },
          { sectionNumber: "002", professor: "Dr. Evans", time: "TTh 3:00 PM - 4:30 PM" }
      ]
  },
  {
      title: "Data Science Capstone 2",
      code: "CS483",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS482"],
      semester: "Winter 2025",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Data Science Faculty Advisor",
      officeHours: "Team-Based",
      gradingPolicy: "Project-Based",
      sections: [
          { sectionNumber: "001", professor: "Data Science Faculty Advisor", time: "MWF 1:00 PM - 2:00 PM" },
          { sectionNumber: "002", professor: "Prof. Foster", time: "TTh 4:00 PM - 5:30 PM" }
      ]
  },
  {
      title: "Verification and Validation",
      code: "CS486",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS236", "CS329"],
      semester: "Winter 2025",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Dr. Adams (Logic Group)",
      officeHours: "Tue/Thu 2-3 PM",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Adams", time: "MWF 2:00 PM - 3:00 PM" },
          { sectionNumber: "002", professor: "Prof. Hill", time: "TTh 5:00 PM - 6:30 PM" }
      ]
  },
  {
      title: "Computing Competitions",
      code: "CS493R",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["By Application"],
      semester: "Winter 2025",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Competition Coach",
      officeHours: "Team-Based",
      gradingPolicy: "Participation & Performance",
      sections: [
          { sectionNumber: "001", professor: "Competition Coach", time: "MWF 3:00 PM - 4:00 PM" },
          { sectionNumber: "002", professor: "Dr. Jones", time: "TTh 6:00 PM - 7:30 PM" }
      ]
  },
  {
      title: "Capstone 1",
      code: "CS494",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["Senior Standing in CS"],
      semester: "Flexible",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Capstone Faculty Advisor",
      officeHours: "Team-Based",
      gradingPolicy: "Project-Based",
      sections: [
          { sectionNumber: "001", professor: "Capstone Faculty Advisor", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Prof. King", time: "TTh 1:00 PM - 2:30 PM" }
      ]
  },
  {
      title: "Capstone 2",
      code: "CS495",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS494"],
      semester: "Flexible",
      department: "CS",
      degreeRequirement: "Major Requirement",
      instructor: "Capstone Faculty Advisor",
      officeHours: "Team-Based",
      gradingPolicy: "Project-Based",
      sections: [
          { sectionNumber: "001", professor: "Capstone Faculty Advisor", time: "MWF 11:00 AM - 12:00 PM" },
          { sectionNumber: "002", professor: "Dr. Lee", time: "TTh 2:00 PM - 3:30 PM" }
      ]
  },
  {
      title: "Undergraduate Research",
      code: "CS497R",
      modality: "Research",
      hasLab: true,
      prerequisites: ["Faculty Mentor Approval"],
      semester: "Ongoing",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Faculty Mentor",
      officeHours: "Mentor-Dependent",
      gradingPolicy: "Mentor Evaluation",
      sections: [
          { sectionNumber: "001", professor: "Faculty Mentor", time: "By Arrangement" }
      ]
  },
  {
      title: "Undergraduate Special Projects",
      code: "CS498R",
      modality: "Project-Based",
      hasLab: true,
      prerequisites: ["Faculty Advisor Approval"],
      semester: "Ongoing",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Faculty Advisor",
      officeHours: "Advisor-Dependent",
      gradingPolicy: "Advisor Evaluation",
      sections: [
          { sectionNumber: "001", professor: "Faculty Advisor", time: "By Arrangement" }
      ]
  },
  {
      title: "(CS-Chem-Geol-Math-MthEd-Phscs-Stat) Business Career Essentials in Science and Math",
      code: "CS500",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["Senior Standing in Science/Math"],
      semester: "Winter 2025",
      department: "Interdisciplinary",
      degreeRequirement: "Elective",
      instructor: "Business School Faculty",
      officeHours: "TBA",
      gradingPolicy: "Project & Presentation",
      sections: [
          { sectionNumber: "001", professor: "Business School Faculty", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Prof. Ingram", time: "TTh 1:00 PM - 2:30 PM" }
      ]
  },
  {
      title: "Advanced Topics in Computer Science",
      code: "CS501R",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["Graduate Standing or Instructor Permission"],
      semester: "Fall 2024",
      department: "CS",
      degreeRequirement: "Graduate Elective",
      instructor: "Research Faculty",
      officeHours: "TBA",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Research Faculty", time: "MWF 12:00 PM - 1:00 PM" },
          { sectionNumber: "002", professor: "Dr. Johnson", time: "TTh 3:00 PM - 4:30 PM" }
      ]
  },
  {
      title: "Job Search Strategies",
      code: "CS502",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["Graduating Senior or Graduate Student"],
      semester: "Fall/Winter",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Career Services Staff",
      officeHours: "Varies",
      gradingPolicy: "Participation-Based",
      sections: [
          { sectionNumber: "001", professor: "Career Services Staff", time: "By Arrangement" }
      ]
  },
  {
      title: "Robust Control",
      code: "CS513",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["MATH 334", "Engineering Background"],
      semester: "Winter 2025",
      department: "CS",
      degreeRequirement: "Graduate Elective",
      instructor: "Engineering Faculty",
      officeHours: "TBA",
      textbook: "Robust and Optimal Control",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Engineering Faculty", time: "MWF 1:00 PM - 2:00 PM" },
          { sectionNumber: "002", professor: "Dr. Moore", time: "TTh 4:00 PM - 5:30 PM" }
      ]
  },
  {
      title: "Research Methods and Study Design in Human-Computer Interaction",
      code: "CS556",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS256 or Equivalent Experience"],
      semester: "Winter 2025",
      department: "CS",
      degreeRequirement: "Graduate Elective",
      instructor: "Dr. Moore",
      officeHours: "Mon/Wed 1-2 PM",
      gradingPolicy: "Project & Paper",
      sections: [
          { sectionNumber: "001", professor: "Dr. Moore", time: "MWF 2:00 PM - 3:00 PM" },
          { sectionNumber: "002", professor: "Prof. North", time: "TTh 5:00 PM - 6:30 PM" }
      ]
  },
  {
      title: "Transformer Models for Natural Language Processing",
      code: "CS574",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS474 or Equivalent Deep Learning Experience"],
      semester: "Fall 2024",
      department: "CS",
      degreeRequirement: "Graduate Elective",
      instructor: "Prof. North",
      officeHours: "Tue/Thu 3-4 PM",
      gradingPolicy: "Project & Participation",
      sections: [
          { sectionNumber: "001", professor: "Prof. North", time: "MWF 3:00 PM - 4:00 PM" },
          { sectionNumber: "002", professor: "Dr. Owen", time: "TTh 6:00 PM - 7:30 PM" }
      ]
  },
  {
      title: "Introduction to Graph Data Science",
      code: "CS575",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CS270 or Equivalent Machine Learning Experience"],
      semester: "Winter 2025",
      department: "CS",
      degreeRequirement: "Graduate Elective",
      instructor: "Dr. Owen",
      officeHours: "Wed/Fri 11 AM - 12 PM",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Dr. Owen", time: "MWF 11:00 AM - 12:00 PM" },
          { sectionNumber: "002", professor: "Prof. Perry", time: "TTh 2:00 PM - 3:30 PM" }
      ]
  },
  {
      title: "Theory of Predictive Modeling",
      code: "CS580",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["MATH 421", "Statistical Background"],
      semester: "Fall 2024",
      department: "CS",
      degreeRequirement: "Graduate Elective",
      instructor: "Prof. Perry",
      officeHours: "Mon/Wed 3-4 PM",
      gradingPolicy: "Standard",
      sections: [
          { sectionNumber: "001", professor: "Prof. Perry", time: "MWF 12:00 PM - 1:00 PM" },
          { sectionNumber: "002", professor: "Dr. Quinn", time: "TTh 3:00 PM - 4:30 PM" }
      ]
  },
  {
      title: "Introduction to Three-Dimensional Computer Graphics",
      code: "CSANM 150",
      modality: "In-Person",
      hasLab: true,
      prerequisites: [],
      semester: "Varies by Term",
      department: "CSANM",
      degreeRequirement: "Major Requirement (Animation)",
      instructor: "Animation Faculty",
      officeHours: "TBA",
      gradingPolicy: "Project-Based",
      sections: [
          { sectionNumber: "001", professor: "Animation Faculty", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Dr. Evans", time: "TTh 1:00 PM - 2:30 PM" }
      ]
  },
  {
      title: "Visual Narrative for Animation",
      code: "CSANM 210",
      modality: "In-Person",
      hasLab: true,
      prerequisites: ["CSANM 150 or Portfolio Review"],
      semester: "Fall 2024",
      department: "CSANM",
      degreeRequirement: "Major Requirement (Animation)",
      instructor: "Animation Faculty",
      officeHours: "TBA",
      gradingPolicy: "Critique-Based",
      sections: [
          { sectionNumber: "001", professor: "Animation Faculty", time: "MWF 11:00 AM - 12:00 PM" },
          { sectionNumber: "002", professor: "Prof. Foster", time: "TTh 2:00 PM - 3:30 PM" }
      ]
  },
  {
      title: "Intermediate Three-Dimensional Computer Graphics",
      code: "CSANM 250",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CSANM 150"],
      semester: "Fall 2024",
      department: "CSANM",
      degreeRequirement: "Major Requirement (Animation)",
      instructor: "Animation Faculty",
      officeHours: "TBA",
      gradingPolicy: "Project-Based",
      sections: [
          { sectionNumber: "001", professor: "Animation Faculty", time: "MWF 12:00 PM - 1:00 PM" },
          { sectionNumber: "002", professor: "Dr. Garcia", time: "TTh 3:00 PM - 4:30 PM" }
      ]
  },
  {
      title: "Introduction to Three-Dimensional Animation",
      code: "CSANM 252",
      modality: "In-Person",
      hasLab: true,
      prerequisites: ["CSANM 250"],
      semester: "Winter 2025",
      department: "CSANM",
      degreeRequirement: "Major Requirement (Animation)",
      instructor: "Animation Faculty",
      officeHours: "TBA",
      gradingPolicy: "Performance-Based",
      sections: [
          { sectionNumber: "001", professor: "Animation Faculty", time: "MWF 1:00 PM - 2:00 PM" },
          { sectionNumber: "002", professor: "Prof. Hill", time: "TTh 4:00 PM - 5:30 PM" }
      ]
  },
  {
      title: "Scripting for Animation",
      code: "CSANM 258",
      modality: "In-Person",
      hasLab: true,
      prerequisites: ["CSANM 150", "Basic Programming Knowledge Recommended"],
      semester: "Winter 2025",
      department: "CSANM",
      degreeRequirement: "Major Requirement (Animation)",
      instructor: "Animation Technical Director",
      officeHours: "TBA",
      gradingPolicy: "Project-Based",
      sections: [
          { sectionNumber: "001", professor: "Animation Technical Director", time: "MWF 2:00 PM - 3:00 PM" },
          { sectionNumber: "002", professor: "Dr. Jones", time: "TTh 5:00 PM - 6:30 PM" }
      ]
  },
  {
      title: "Introduction to Game Design",
      code: "CSANM 340",
      modality: "In-Person",
      hasLab: false,
      prerequisites: [],
      semester: "Fall 2024",
      department: "CSANM",
      degreeRequirement: "Elective (Animation, CS)",
      instructor: "Game Design Faculty",
      officeHours: "TBA",
      gradingPolicy: "Design Document & Prototypes",
      sections: [
          { sectionNumber: "001", professor: "Game Design Faculty", time: "MWF 3:00 PM - 4:00 PM" },
          { sectionNumber: "002", professor: "Prof. King", time: "TTh 6:00 PM - 7:30 PM" }
      ]
  },
  {
      title: "Real-time Techniques",
      code: "CSANM 342",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["CSANM 252", "CSANM 258"],
      semester: "Fall 2024",
      department: "CSANM",
      degreeRequirement: "Major Requirement (Animation, Game Dev Focus)",
      instructor: "Real-time Graphics Specialist",
      officeHours: "TBA",
      gradingPolicy: "Project-Based",
      sections: [
          { sectionNumber: "001", professor: "Real-time Graphics Specialist", time: "MWF 4:00 PM - 5:00 PM" },
          { sectionNumber: "002", professor: "Dr. Lee", time: "TTh 7:00 PM - 8:30 PM" }
      ]
  },
  {
      title: "Cybersecurity Ethics",
      code: "CS467",
      modality: "Online",
      hasLab: false,
      prerequisites: ["CS465 Recommended"],
      semester: "Spring 2024",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Dr. Eleanor Vance",
      officeHours: "Wednesdays 7-9 PM (Online)",
      syllabus: "cybersecurity_ethics_syllabus.pdf",
      textbook: "Ethics for the Information Age",
      gradingPolicy: "Essay-Based",
      sections: [
          { sectionNumber: "001", professor: "Dr. Eleanor Vance", time: "Online - Asynchronous" }
      ]
  },
  {
      title: "Advanced Data Visualization",
      code: "CS484",
      modality: "Hybrid",
      hasLab: true,
      prerequisites: ["CS180", "CS270"],
      semester: "Fall 2024",
      department: "CS",
      degreeRequirement: "Elective",
      instructor: "Professor Robert Miller",
      officeHours: "Tuesdays 1-3 PM (In-Person & Online)",
      syllabus: "adv_dataviz_fall2024_syllabus.pdf",
      textbook: "The Visual Display of Quantitative Information",
      gradingPolicy: "Project-Heavy",
      sections: [
          { sectionNumber: "001", professor: "Professor Robert Miller", time: "TTh 10:00 AM - 11:30 AM (Hybrid)" },
          { sectionNumber: "002", professor: "Dr. Nelson", time: "MWF 1:00 PM - 2:00 PM (Hybrid)" }
      ]
  },
  {
      title: "Quantum Information Science",
      code: "CS576",
      modality: "In-Person",
      hasLab: false,
      prerequisites: ["Linear Algebra", "Discrete Math", "Probability"],
      semester: "Spring 2025",
      department: "CS",
      degreeRequirement: "Graduate Elective",
      instructor: "Dr. Alistair Scott",
      officeHours: "Mondays & Wednesdays 10-11 AM",
      syllabus: "quantum_info_spring2025_syllabus.pdf",
      textbook: "Quantum Computation and Quantum Information",
      gradingPolicy: "Problem Sets & Exams",
      sections: [
          { sectionNumber: "001", professor: "Dr. Alistair Scott", time: "MWF 10:00 AM - 11:00 AM" },
          { sectionNumber: "002", professor: "Prof. Underwood", time: "TTh 1:00 PM - 2:30 PM" }
      ]
  },
  {
    title: "Calculus III: Multivariable Calculus",
    code: "MATH 301",
    modality: "In-Person",
    hasLab: false,
    prerequisites: ["MATH 202"],
    semester: "Fall 2024",
    department: "MATH",
    degreeRequirement: "Major Requirement",
    instructor: "Dr. Emily Carter",
    officeHours: "Tue/Thu 10:00 AM - 11:00 AM",
    textbook: "Multivariable Calculus by James Stewart",
    gradingPolicy: "Standard",
    sections: [
        { sectionNumber: "001", professor: "Dr. Emily Carter", time: "MWF 9:00 AM - 10:00 AM" },
        { sectionNumber: "002", professor: "Prof. Michael Lee", time: "TTh 1:00 PM - 2:30 PM" }
    ]
},
{
    title: "Linear Algebra and Applications",
    code: "MATH 310",
    modality: "Hybrid",
    hasLab: false,
    prerequisites: ["MATH 202"],
    semester: "Spring 2024",
    department: "MATH",
    degreeRequirement: "Major Requirement",
    instructor: "Prof. Michael Lee",
    officeHours: "Wed/Fri 2:00 PM - 3:00 PM",
    textbook: "Linear Algebra and Its Applications by Gilbert Strang",
    gradingPolicy: "Standard",
    sections: [
        { sectionNumber: "001", professor: "Prof. Michael Lee", time: "MWF 11:00 AM - 12:00 PM" },
        { sectionNumber: "002", professor: "Dr. Sarah Johnson", time: "TTh 3:00 PM - 4:30 PM" }
    ]
},
{
    title: "Probability and Statistics",
    code: "MATH 320",
    modality: "Online",
    hasLab: false,
    prerequisites: ["MATH 202"],
    semester: "Winter 2025",
    department: "MATH",
    degreeRequirement: "Elective",
    instructor: "Dr. Sarah Johnson",
    officeHours: "Mon/Wed 4:00 PM - 5:00 PM (Online)",
    textbook: "Probability and Statistics for Engineers and Scientists by Walpole",
    gradingPolicy: "Weighted",
    sections: [
        { sectionNumber: "001", professor: "Dr. Sarah Johnson", time: "Online - Asynchronous" }
    ]
},
{
    title: "Discrete Mathematics",
    code: "MATH 250",
    modality: "In-Person",
    hasLab: false,
    prerequisites: ["MATH 101"],
    semester: "Fall 2024",
    department: "MATH",
    degreeRequirement: "Major Requirement",
    instructor: "Prof. David Brown",
    officeHours: "Tue/Thu 11:00 AM - 12:00 PM",
    textbook: "Discrete Mathematics and Its Applications by Kenneth Rosen",
    gradingPolicy: "Standard",
    sections: [
        { sectionNumber: "001", professor: "Prof. David Brown", time: "MWF 10:00 AM - 11:00 AM" },
        { sectionNumber: "002", professor: "Dr. Emily Carter", time: "TTh 2:00 PM - 3:30 PM" }
    ]
},
{
    title: "Differential Equations",
    code: "MATH 330",
    modality: "In-Person",
    hasLab: true,
    prerequisites: ["MATH 202"],
    semester: "Spring 2024",
    department: "MATH",
    degreeRequirement: "Major Requirement",
    instructor: "Dr. Robert Taylor",
    officeHours: "Mon/Wed 1:00 PM - 2:00 PM",
    textbook: "Elementary Differential Equations by Boyce and DiPrima",
    gradingPolicy: "Standard",
    sections: [
        { sectionNumber: "001", professor: "Dr. Robert Taylor", time: "MWF 12:00 PM - 1:00 PM" },
        { sectionNumber: "002", professor: "Prof. Michael Lee", time: "TTh 4:00 PM - 5:30 PM" }
    ]
},
{
    title: "Mathematical Modeling",
    code: "MATH 410",
    modality: "In-Person",
    hasLab: false,
    prerequisites: ["MATH 310", "MATH 320"],
    semester: "Fall 2024",
    department: "MATH",
    degreeRequirement: "Elective",
    instructor: "Dr. Emily Carter",
    officeHours: "Tue/Thu 3:00 PM - 4:00 PM",
    textbook: "A First Course in Mathematical Modeling by Giordano",
    gradingPolicy: "Project-Based",
    sections: [
        { sectionNumber: "001", professor: "Dr. Emily Carter", time: "MWF 2:00 PM - 3:00 PM" },
        { sectionNumber: "002", professor: "Prof. David Brown", time: "TTh 5:00 PM - 6:30 PM" }
    ]
},
{
    title: "Number Theory",
    code: "MATH 420",
    modality: "Online",
    hasLab: false,
    prerequisites: ["MATH 250"],
    semester: "Winter 2025",
    department: "MATH",
    degreeRequirement: "Elective",
    instructor: "Prof. David Brown",
    officeHours: "Wed/Fri 10:00 AM - 11:00 AM (Online)",
    textbook: "Elementary Number Theory by Kenneth Rosen",
    gradingPolicy: "Standard",
    sections: [
        { sectionNumber: "001", professor: "Prof. David Brown", time: "Online - Asynchronous" }
    ]
},
{
    title: "Advanced Calculus",
    code: "MATH 450",
    modality: "In-Person",
    hasLab: false,
    prerequisites: ["MATH 301"],
    semester: "Spring 2024",
    department: "MATH",
    degreeRequirement: "Elective",
    instructor: "Dr. Robert Taylor",
    officeHours: "Mon/Wed 3:00 PM - 4:00 PM",
    textbook: "Advanced Calculus by Fitzpatrick",
    gradingPolicy: "Standard",
    sections: [
        { sectionNumber: "001", professor: "Dr. Robert Taylor", time: "MWF 1:00 PM - 2:00 PM" },
        { sectionNumber: "002", professor: "Dr. Emily Carter", time: "TTh 6:00 PM - 7:30 PM" }
    ]
},
{
    title: "Creative Writing: Fiction",
    code: "ENG 210",
    modality: "In-Person",
    hasLab: false,
    prerequisites: [],
    semester: "Fall 2024",
    department: "ENG",
    degreeRequirement: "Elective",
    instructor: "Prof. Laura Bennett",
    officeHours: "Tue/Thu 10:00 AM - 11:00 AM",
    textbook: "The Art of Fiction by John Gardner",
    gradingPolicy: "Portfolio-Based",
    sections: [
        { sectionNumber: "001", professor: "Prof. Laura Bennett", time: "MWF 9:00 AM - 10:00 AM" },
        { sectionNumber: "002", professor: "Dr. Mark Harris", time: "TTh 1:00 PM - 2:30 PM" }
    ]
},
{
    title: "Shakespeare: Tragedies and Comedies",
    code: "ENG 320",
    modality: "Hybrid",
    hasLab: false,
    prerequisites: ["ENG 101"],
    semester: "Spring 2024",
    department: "ENG",
    degreeRequirement: "Major Requirement",
    instructor: "Dr. Mark Harris",
    officeHours: "Wed/Fri 2:00 PM - 3:00 PM",
    textbook: "The Complete Works of William Shakespeare",
    gradingPolicy: "Essay-Based",
    sections: [
        { sectionNumber: "001", professor: "Dr. Mark Harris", time: "MWF 11:00 AM - 12:00 PM" },
        { sectionNumber: "002", professor: "Prof. Laura Bennett", time: "TTh 3:00 PM - 4:30 PM" }
    ]
},
{
    title: "Modern American Literature",
    code: "ENG 350",
    modality: "Online",
    hasLab: false,
    prerequisites: ["ENG 101"],
    semester: "Winter 2025",
    department: "ENG",
    degreeRequirement: "Elective",
    instructor: "Dr. Sarah Collins",
    officeHours: "Mon/Wed 4:00 PM - 5:00 PM (Online)",
    textbook: "The Norton Anthology of American Literature",
    gradingPolicy: "Discussion-Based",
    sections: [
        { sectionNumber: "001", professor: "Dr. Sarah Collins", time: "Online - Asynchronous" }
    ]
},
{
    title: "Poetry Writing Workshop",
    code: "ENG 220",
    modality: "In-Person",
    hasLab: false,
    prerequisites: [],
    semester: "Fall 2024",
    department: "ENG",
    degreeRequirement: "Elective",
    instructor: "Prof. Laura Bennett",
    officeHours: "Tue/Thu 11:00 AM - 12:00 PM",
    textbook: "The Poet's Companion by Addonizio and Laux",
    gradingPolicy: "Portfolio-Based",
    sections: [
        { sectionNumber: "001", professor: "Prof. Laura Bennett", time: "MWF 10:00 AM - 11:00 AM" },
        { sectionNumber: "002", professor: "Dr. Sarah Collins", time: "TTh 2:00 PM - 3:30 PM" }
    ]
},
{
    title: "British Literature: 18th Century to Present",
    code: "ENG 330",
    modality: "In-Person",
    hasLab: false,
    prerequisites: ["ENG 101"],
    semester: "Spring 2024",
    department: "ENG",
    degreeRequirement: "Major Requirement",
    instructor: "Dr. Mark Harris",
    officeHours: "Wed/Fri 1:00 PM - 2:00 PM",
    textbook: "The Norton Anthology of English Literature",
    gradingPolicy: "Essay-Based",
    sections: [
        { sectionNumber: "001", professor: "Dr. Mark Harris", time: "MWF 12:00 PM - 1:00 PM" },
        { sectionNumber: "002", professor: "Prof. Laura Bennett", time: "TTh 4:00 PM - 5:30 PM" }
    ]
},
{
    title: "Technical Writing",
    code: "ENG 240",
    modality: "Hybrid",
    hasLab: false,
    prerequisites: [],
    semester: "Winter 2025",
    department: "ENG",
    degreeRequirement: "Elective",
    instructor: "Dr. Sarah Collins",
    officeHours: "Mon/Wed 3:00 PM - 4:00 PM",
    textbook: "Technical Communication by Mike Markel",
    gradingPolicy: "Project-Based",
    sections: [
        { sectionNumber: "001", professor: "Dr. Sarah Collins", time: "MWF 1:00 PM - 2:00 PM" },
        { sectionNumber: "002", professor: "Prof. Laura Bennett", time: "TTh 5:00 PM - 6:30 PM" }
    ]
},
{
    title: "World Literature: Ancient to Medieval",
    code: "ENG 410",
    modality: "In-Person",
    hasLab: false,
    prerequisites: ["ENG 101"],
    semester: "Fall 2024",
    department: "ENG",
    degreeRequirement: "Elective",
    instructor: "Dr. Mark Harris",
    officeHours: "Tue/Thu 3:00 PM - 4:00 PM",
    textbook: "The Norton Anthology of World Literature",
    gradingPolicy: "Essay-Based",
    sections: [
        { sectionNumber: "001", professor: "Dr. Mark Harris", time: "MWF 2:00 PM - 3:00 PM" },
        { sectionNumber: "002", professor: "Dr. Sarah Collins", time: "TTh 6:00 PM - 7:30 PM" }
    ]
},
{
    title: "Literary Theory and Criticism",
    code: "ENG 450",
    modality: "Online",
    hasLab: false,
    prerequisites: ["ENG 101"],
    semester: "Spring 2024",
    department: "ENG",
    degreeRequirement: "Elective",
    instructor: "Dr. Sarah Collins",
    officeHours: "Wed/Fri 10:00 AM - 11:00 AM (Online)",
    textbook: "Literary Theory: An Anthology by Rivkin and Ryan",
    gradingPolicy: "Discussion-Based",
    sections: [
        { sectionNumber: "001", professor: "Dr. Sarah Collins", time: "Online - Asynchronous" }
    ]
},

];

export default courseData;