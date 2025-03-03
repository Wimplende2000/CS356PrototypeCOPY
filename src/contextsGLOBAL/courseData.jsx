
const courseData = [
    {
      "title": "Introduction to Computer Science",
      "code": "CS101",
      "modality": "Online",
      "hasLab": true,
      "prerequisites": [],
      "semester": "Fall",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Dr. Smith",
      "officeHours": "Mon 2-4 PM",
      "syllabus": "syllabus.pdf",
      "textbook": "Introduction to CS",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Smith",
          "time": "MWF 10:00 AM - 11:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Brown",
          "time": "TTh 1:30 PM - 3:00 PM"
        }
      ],
      "creditHours": 1
    },
    {
      "title": "How to Program",
      "code": "CS110",
      "modality": "In-Person",
      "hasLab": true,
      "prerequisites": [],
      "semester": "Varies",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Prof. Anderson",
      "officeHours": "Tue/Thu 10-11 AM",
      "textbook": "Programming Fundamentals",
      "gradingPolicy": "Weighted",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Anderson",
          "time": "MWF 9:00 AM - 10:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Lee",
          "time": "TTh 3:00 PM - 4:30 PM"
        }
      ],
      "creditHours": 5
    },
    {
      "title": "Introduction to Computer Science",
      "code": "CS111",
      "modality": "In-Person",
      "hasLab": true,
      "prerequisites": [
        "CS110"
      ],
      "semester": "Varies",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Dr. Chen",
      "officeHours": "Wed/Fri 1-2 PM",
      "textbook": "Structure and Interpretation of Computer Programs (SICP)",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Chen",
          "time": "MWF 11:00 AM - 12:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Martinez",
          "time": "TTh 2:00 PM - 3:30 PM"
        }
      ],
      "creditHours": 5
    },
    {
      "title": "Introduction to Computer Programming",
      "code": "CS142",
      "modality": "Hybrid",
      "hasLab": false,
      "prerequisites": [],
      "semester": "Flexible",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Dr. Davis",
      "officeHours": "By Appointment",
      "textbook": "Object-Oriented Programming in Java",
      "gradingPolicy": "Pass/Fail",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Davis",
          "time": "MWF 1:00 PM - 2:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Green",
          "time": "TTh 10:00 AM - 11:30 AM"
        }
      ],
      "creditHours": 1
    },
    {
      "title": "Introduction to Data Science",
      "code": "CS180",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "MATH 121"
      ],
      "semester": "Winter",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Prof. Wilson",
      "officeHours": "Mon/Wed 3-4 PM",
      "textbook": "Data Science from Scratch",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Wilson",
          "time": "MWF 10:00 AM - 11:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Adams",
          "time": "TTh 1:00 PM - 2:30 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Academic Internship",
      "code": "CS199R",
      "modality": "Experiential",
      "hasLab": false,
      "prerequisites": [
        "Department Approval"
      ],
      "semester": "Ongoing",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Internship Coordinator",
      "officeHours": "Contact Coordinator",
      "gradingPolicy": "Pass/Fail",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Internship Coordinator",
          "time": "By Arrangement"
        }
      ],
      "creditHours": 1
    },
    {
      "title": "Topics in Computer Science",
      "code": "CS201R",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [],
      "semester": "Fall",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Visiting Professor",
      "officeHours": "TBA",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Visiting Professor",
          "time": "MWF 2:00 PM - 3:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Taylor",
          "time": "TTh 4:00 PM - 5:30 PM"
        }
      ],
      "creditHours": 2
    },
    {
      "title": "Exploring Computer Science",
      "code": "CS191",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "General Education",
      "instructor": "Dr. Green",
      "officeHours": "Wed 9-10 AM",
      "gradingPolicy": "Pass/Fail",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Green",
          "time": "MWF 9:00 AM - 10:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Hill",
          "time": "TTh 11:00 AM - 12:30 PM"
        }
      ],
      "creditHours": 5
    },
    {
      "title": "Software Engineering Lab 1",
      "code": "CS202",
      "modality": "In-Person",
      "hasLab": true,
      "prerequisites": [
        "CS111"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Prof. Hill",
      "officeHours": "Mon/Fri 11 AM - 12 PM",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Hill",
          "time": "MWF 10:00 AM - 11:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Jones",
          "time": "TTh 1:00 PM - 2:30 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Software Engineering Lab 2",
      "code": "CS203",
      "modality": "In-Person",
      "hasLab": true,
      "prerequisites": [
        "CS202"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Dr. Jones",
      "officeHours": "Tue/Thu 2-3 PM",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Jones",
          "time": "MWF 11:00 AM - 12:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. King",
          "time": "TTh 2:00 PM - 3:30 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Software Engineering Lab 3",
      "code": "CS204",
      "modality": "In-Person",
      "hasLab": true,
      "prerequisites": [
        "CS203"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Prof. King",
      "officeHours": "Wed/Fri 10-11 AM",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. King",
          "time": "MWF 12:00 PM - 1:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Lee",
          "time": "TTh 3:00 PM - 4:30 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Introduction to Computer Systems",
      "code": "CS224",
      "modality": "In-Person",
      "hasLab": true,
      "prerequisites": [
        "CS111"
      ],
      "semester": "Varies",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Dr. Lee",
      "officeHours": "Mon/Wed 1-2 PM",
      "textbook": "Computer Systems: A Programmer's Perspective",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Lee",
          "time": "MWF 1:00 PM - 2:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Martinez",
          "time": "TTh 4:00 PM - 5:30 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Data Structures and Algorithms",
      "code": "CS235",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS111"
      ],
      "semester": "Varies",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Prof. Martinez",
      "officeHours": "Tue/Thu 3-4 PM",
      "textbook": "Introduction to Algorithms",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Martinez",
          "time": "MWF 2:00 PM - 3:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Nguyen",
          "time": "TTh 5:00 PM - 6:30 PM"
        }
      ],
      "creditHours": 5
    },
    {
      "title": "Discrete Structures",
      "code": "CS236",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "MATH 110"
      ],
      "semester": "Varies",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Dr. Nguyen",
      "officeHours": "Mon/Wed 10-11 AM",
      "textbook": "Discrete Mathematics and Its Applications",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Nguyen",
          "time": "MWF 10:00 AM - 11:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Patel",
          "time": "TTh 1:00 PM - 2:30 PM"
        }
      ],
      "creditHours": 1
    },
    {
      "title": "Advanced Software Construction",
      "code": "CS240",
      "modality": "In-Person",
      "hasLab": true,
      "prerequisites": [
        "CS235",
        "CS240"
      ],
      "semester": "Varies",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Prof. Patel",
      "officeHours": "Tue/Thu 1-2 PM",
      "textbook": "Clean Code",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Patel",
          "time": "MWF 11:00 AM - 12:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Ramirez",
          "time": "TTh 2:00 PM - 3:30 PM"
        }
      ],
      "creditHours": 5
    },
    {
      "title": "Introduction to Computational Theory",
      "code": "CS252",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS236"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Dr. Ramirez",
      "officeHours": "Wed/Fri 2-3 PM",
      "textbook": "Introduction to the Theory of Computation",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Ramirez",
          "time": "MWF 12:00 PM - 1:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Sharma",
          "time": "TTh 3:00 PM - 4:30 PM"
        }
      ],
      "creditHours": 2
    },
    {
      "title": "Introduction to Human Computer Interaction",
      "code": "CS256",
      "modality": "In-Person",
      "hasLab": true,
      "prerequisites": [
        "CS111"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Prof. Sharma",
      "officeHours": "Mon/Wed 4-5 PM",
      "textbook": "The Design of Everyday Things",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Sharma",
          "time": "MWF 1:00 PM - 2:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Thompson",
          "time": "TTh 4:00 PM - 5:30 PM"
        }
      ],
      "creditHours": 4
    },
    {
      "title": "Web Programming",
      "code": "CS260",
      "modality": "Online",
      "hasLab": false,
      "prerequisites": [
        "CS240"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Dr. Thompson",
      "officeHours": "Tue/Thu 9-10 AM (Online)",
      "textbook": "Eloquent JavaScript",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Thompson",
          "time": "MWF 10:00 AM - 11:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Vargas",
          "time": "TTh 1:00 PM - 2:30 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Introduction to Machine Learning",
      "code": "CS270",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS235",
        "MATH 221"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Prof. Vargas",
      "officeHours": "Mon/Wed 2-3 PM",
      "textbook": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Vargas",
          "time": "MWF 2:00 PM - 3:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. White",
          "time": "TTh 5:00 PM - 6:30 PM"
        }
      ],
      "creditHours": 2
    },
    {
      "title": "Careers in Computer Science",
      "code": "CS291",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Career Services Staff",
      "officeHours": "Varies",
      "gradingPolicy": "Pass/Fail",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Career Services Staff",
          "time": "By Arrangement"
        }
      ],
      "creditHours": 4
    },
    {
      "title": "Topics in Computer Science",
      "code": "CS301R",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "Varies by topic"
      ],
      "semester": "Fall",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Adjunct Faculty",
      "officeHours": "TBA",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Adjunct Faculty",
          "time": "MWF 3:00 PM - 4:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Adams",
          "time": "TTh 6:00 PM - 7:30 PM"
        }
      ],
      "creditHours": 4
    },
    {
      "title": "Algorithm Design and Analysis",
      "code": "CS312",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS235",
        "CS236"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Dr. White",
      "officeHours": "Tue/Thu 11 AM - 12 PM",
      "textbook": "Algorithm Design",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. White",
          "time": "MWF 11:00 AM - 12:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Young",
          "time": "TTh 2:00 PM - 3:30 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Systems Programming",
      "code": "CS324",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS224"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Prof. Young",
      "officeHours": "Mon/Wed 9-10 AM",
      "textbook": "Advanced Programming in the UNIX Environment",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Young",
          "time": "MWF 9:00 AM - 10:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Zheng",
          "time": "TTh 4:00 PM - 5:30 PM"
        }
      ],
      "creditHours": 5
    },
    {
      "title": "Testing, Analysis, and Verification",
      "code": "CS329",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS204",
        "CS235"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Dr. Zheng",
      "officeHours": "Tue/Thu 4-5 PM",
      "textbook": "Software Testing and Analysis",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Zheng",
          "time": "MWF 10:00 AM - 11:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Adams",
          "time": "TTh 5:00 PM - 6:30 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Concepts of Programming Languages",
      "code": "CS330",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS235"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Prof. Adams",
      "officeHours": "Wed/Fri 1-2 PM",
      "textbook": "Programming Language Pragmatics",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Adams",
          "time": "MWF 12:00 PM - 1:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Baker",
          "time": "TTh 3:00 PM - 4:30 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Software Design",
      "code": "CS340",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS240"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Dr. Baker",
      "officeHours": "Mon/Wed 11 AM - 12 PM",
      "textbook": "Design Patterns: Elements of Reusable Object-Oriented Software",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Baker",
          "time": "MWF 11:00 AM - 12:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Clark",
          "time": "TTh 2:00 PM - 3:30 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Operating Systems Design",
      "code": "CS345",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS324"
      ],
      "semester": "Flexible",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Prof. Clark",
      "officeHours": "By Appointment",
      "textbook": "Operating System Concepts",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Clark",
          "time": "MWF 1:00 PM - 2:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Evans",
          "time": "TTh 4:00 PM - 5:30 PM"
        }
      ],
      "creditHours": 1
    },
    {
      "title": "Interactive Graphics and Image Processing",
      "code": "CS355",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "MATH 221"
      ],
      "semester": "Fall",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Dr. Evans",
      "officeHours": "Tue/Thu 2-3 PM",
      "textbook": "Computer Graphics: Principles and Practice",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Evans",
          "time": "MWF 2:00 PM - 3:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Foster",
          "time": "TTh 5:00 PM - 6:30 PM"
        }
      ],
      "creditHours": 2
    },
    {
      "title": "Advanced Techniques in Human Computer Interaction",
      "code": "CS356",
      "modality": "In-Person",
      "hasLab": true,
      "prerequisites": [
        "CS256",
        "CS260"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Prof. Foster",
      "officeHours": "Wed/Fri 11 AM - 12 PM",
      "textbook": "Information Architecture for the Web and Beyond",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Jensen",
          "time": "MWF 10:00 AM - 11:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Jensen",
          "time": "TTh 1:00 PM - 2:30 PM"
        }
      ],
      "creditHours": 5
    },
    {
      "title": "Advanced Algorithms and Problem Solving",
      "code": "CS393",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS312"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Dr. Garcia",
      "officeHours": "Mon/Wed 3-4 PM",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Garcia",
          "time": "MWF 3:00 PM - 4:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Hall",
          "time": "TTh 6:00 PM - 7:30 PM"
        }
      ],
      "creditHours": 5
    },
    {
      "title": "Topics in Computer Science",
      "code": "CS401R",
      "modality": "Online",
      "hasLab": false,
      "prerequisites": [
        "Varies by topic"
      ],
      "semester": "Winter",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Industry Expert",
      "officeHours": "Online - TBA",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Industry Expert",
          "time": "MWF 10:00 AM - 11:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Ingram",
          "time": "TTh 1:00 PM - 2:30 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Ethics and Computers in Society",
      "code": "CS404",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "General Education",
      "instructor": "Dr. Hall",
      "officeHours": "Tue/Thu 10-11 AM",
      "gradingPolicy": "Participation-Based",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Hall",
          "time": "MWF 12:00 PM - 1:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Ingram",
          "time": "TTh 3:00 PM - 4:30 PM"
        }
      ],
      "creditHours": 4
    },
    {
      "title": "Creating and Managing a Software Business",
      "code": "CS405",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "Business Minor Recommended"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Prof. Ingram (Business School)",
      "officeHours": "Wed/Fri 2-3 PM",
      "gradingPolicy": "Project-Based",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Ingram",
          "time": "MWF 2:00 PM - 3:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Johnson",
          "time": "TTh 5:00 PM - 6:30 PM"
        }
      ],
      "creditHours": 5
    },
    {
      "title": "Linear Programming and Convex Optimization",
      "code": "CS412",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "MATH 314",
        "CS235"
      ],
      "semester": "Flexible",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Dr. Johnson",
      "officeHours": "By Appointment",
      "textbook": "Convex Optimization",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Johnson",
          "time": "MWF 11:00 AM - 12:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Klein",
          "time": "TTh 2:00 PM - 3:30 PM"
        }
      ],
      "creditHours": 2
    },
    {
      "title": "Software Engineering",
      "code": "CS428",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS340",
        "CS329"
      ],
      "semester": "Flexible",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Prof. Klein",
      "officeHours": "By Appointment",
      "gradingPolicy": "Project-Based",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Klein",
          "time": "MWF 1:00 PM - 2:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Lewis",
          "time": "TTh 4:00 PM - 5:30 PM"
        }
      ],
      "creditHours": 4
    },
    {
      "title": "Algorithmic Languages and Compilers",
      "code": "CS431",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS330",
        "CS252"
      ],
      "semester": "Flexible",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Dr. Lewis",
      "officeHours": "By Appointment",
      "textbook": "Compilers: Principles, Techniques, and Tools",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Lewis",
          "time": "MWF 10:00 AM - 11:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Miller",
          "time": "TTh 1:00 PM - 2:30 PM"
        }
      ],
      "creditHours": 4
    },
    {
      "title": "Computer Vision",
      "code": "CS450",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS270",
        "MATH 221"
      ],
      "semester": "Winter",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Prof. Miller",
      "officeHours": "Tue/Thu 1-2 PM",
      "textbook": "Computer Vision: Algorithms and Applications",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Miller",
          "time": "MWF 2:00 PM - 3:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Nelson",
          "time": "TTh 5:00 PM - 6:30 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Database Modeling Concepts",
      "code": "CS452",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS235"
      ],
      "semester": "Varies",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Dr. Nelson",
      "officeHours": "Wed/Fri 10-11 AM",
      "textbook": "Database Systems: The Complete Book",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Nelson",
          "time": "MWF 10:00 AM - 11:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Olson",
          "time": "TTh 1:00 PM - 2:30 PM"
        }
      ],
      "creditHours": 4
    },
    {
      "title": "Fundamentals of Information Retrieval",
      "code": "CS453",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS235",
        "MATH 121"
      ],
      "semester": "Spring",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Prof. Olson",
      "officeHours": "Mon/Wed 1-2 PM",
      "textbook": "Introduction to Information Retrieval",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Olson",
          "time": "MWF 1:00 PM - 2:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Parker",
          "time": "TTh 4:00 PM - 5:30 PM"
        }
      ],
      "creditHours": 4
    },
    {
      "title": "Computer Graphics",
      "code": "CS455",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS355"
      ],
      "semester": "Winter",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Dr. Parker",
      "officeHours": "Tue/Thu 3-4 PM",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Parker",
          "time": "MWF 3:00 PM - 4:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Quinn",
          "time": "TTh 6:00 PM - 7:30 PM"
        }
      ],
      "creditHours": 4
    },
    {
      "title": "Mobile and Ubiquitous Human-Computer Interaction",
      "code": "CS456",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS256",
        "CS260"
      ],
      "semester": "Winter",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Prof. Quinn",
      "officeHours": "Wed/Fri 4-5 PM",
      "gradingPolicy": "Project-Based",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Quinn",
          "time": "MWF 4:00 PM - 5:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Roberts",
          "time": "TTh 7:00 PM - 8:30 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Computer Communications and Networking",
      "code": "CS460",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS224"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Dr. Roberts",
      "officeHours": "Mon/Wed 10-11 AM",
      "textbook": "Computer Networking: A Top-Down Approach",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Roberts",
          "time": "MWF 10:00 AM - 11:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Scott",
          "time": "TTh 1:00 PM - 2:30 PM"
        }
      ],
      "creditHours": 4
    },
    {
      "title": "Large-Scale Distributed System Design",
      "code": "CS462",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS324",
        "CS260"
      ],
      "semester": "Flexible",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Prof. Scott",
      "officeHours": "By Appointment",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Scott",
          "time": "MWF 11:00 AM - 12:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Taylor",
          "time": "TTh 2:00 PM - 3:30 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Computer Security",
      "code": "CS465",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS224",
        "MATH 231"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Dr. Taylor",
      "officeHours": "Tue/Thu 11 AM - 12 PM",
      "textbook": "Computer Security: Principles and Practice",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Taylor",
          "time": "MWF 12:00 PM - 1:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Underwood",
          "time": "TTh 3:00 PM - 4:30 PM"
        }
      ],
      "creditHours": 2
    },
    {
      "title": "Blockchain Technologies",
      "code": "CS466",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS260",
        "CS465"
      ],
      "semester": "Winter",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Prof. Underwood",
      "officeHours": "Wed/Fri 1-2 PM",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Underwood",
          "time": "MWF 1:00 PM - 2:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Vance",
          "time": "TTh 4:00 PM - 5:30 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Introduction to Artificial Intelligence",
      "code": "CS470",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS235",
        "MATH 221"
      ],
      "semester": "Varies",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Dr. Vance",
      "officeHours": "Mon/Wed 2-3 PM",
      "textbook": "Artificial Intelligence: A Modern Approach",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Vance",
          "time": "MWF 2:00 PM - 3:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Washington",
          "time": "TTh 5:00 PM - 6:30 PM"
        }
      ],
      "creditHours": 2
    },
    {
      "title": "Voice User Interfaces",
      "code": "CS471",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS256",
        "CS270"
      ],
      "semester": "Winter",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Prof. Washington",
      "officeHours": "Tue/Thu 4-5 PM",
      "gradingPolicy": "Project-Based",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Washington",
          "time": "MWF 3:00 PM - 4:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Xavier",
          "time": "TTh 6:00 PM - 7:30 PM"
        }
      ],
      "creditHours": 2
    },
    {
      "title": "Advanced Machine Learning",
      "code": "CS473",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS270",
        "MATH 321"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Dr. Xavier",
      "officeHours": "Wed/Fri 10-11 AM",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Xavier",
          "time": "MWF 10:00 AM - 11:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Prof. Yates",
          "time": "TTh 1:00 PM - 2:30 PM"
        }
      ],
      "creditHours": 2
    },
    {
      "title": "Introduction to Deep Learning",
      "code": "CS474",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS270",
        "MATH 221",
        "CS355"
      ],
      "semester": "Fall/Winter",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Prof. Yates",
      "officeHours": "Mon/Wed 4-5 PM",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Yates",
          "time": "MWF 4:00 PM - 5:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Zimmerman",
          "time": "TTh 7:00 PM - 8:30 PM"
        }
      ],
      "creditHours": 1
    },
    {
      "title": "Secondary Minor Student Teaching",
      "code": "CS477R",
      "modality": "Experiential",
      "hasLab": false,
      "prerequisites": [
        "Education Minor",
        "Department Approval"
      ],
      "semester": "Varies",
      "department": "Computer Science",
      "degreeRequirement": "Minor Requirement",
      "instructor": "Education Faculty Supervisor",
      "officeHours": "Contact Supervisor",
      "gradingPolicy": "Pass/Fail",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Education Faculty Supervisor",
          "time": "By Arrangement"
        }
      ],
      "creditHours": 4
    },
    {
      "title": "Introduction to Machine Translation",
      "code": "CS479",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS470",
        "LING 201"
      ],
      "semester": "Fall",
      "department": "Computer Science",
      "degreeRequirement": "Elective",
      "instructor": "Dr. Zimmerman",
      "officeHours": "Tue/Thu 9-10 AM",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Zimmerman",
          "time": "MWF 9:00 AM - 10:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Adams",
          "time": "TTh 12:00 PM - 1:30 PM"
        }
      ],
      "creditHours": 2
    },
    {
      "title": "Software Engineering Capstone 1",
      "code": "CS480",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "Senior Standing in CS"
      ],
      "semester": "Fall",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Capstone Faculty Advisor",
      "officeHours": "Team-Based",
      "gradingPolicy": "Project-Based",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Capstone Faculty Advisor",
          "time": "MWF 10:00 AM - 11:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Baker",
          "time": "TTh 1:00 PM - 2:30 PM"
        }
      ],
      "creditHours": 5
    },
    {
      "title": "Software Engineering Capstone 2",
      "code": "CS481",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [
        "CS480"
      ],
      "semester": "Winter",
      "department": "Computer Science",
      "degreeRequirement": "Major Requirement",
      "instructor": "Capstone Faculty Advisor",
      "officeHours": "Team-Based",
      "gradingPolicy": "Project-Based",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Capstone Faculty Advisor",
          "time": "By Arrangement"
        }
      ],
      "creditHours": 2
    },
    {
      "title": "Calculus I",
      "code": "MATH101",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [],
      "semester": "Fall",
      "department": "Mathematics",
      "degreeRequirement": "General Education",
      "instructor": "Dr. Johnson",
      "officeHours": "Mon/Wed 3-4 PM",
      "syllabus": "calculus_syllabus.pdf",
      "textbook": "Calculus: Early Transcendentals",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Johnson",
          "time": "MWF 8:00 AM - 9:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Patel",
          "time": "TTh 10:30 AM - 12:00 PM"
        }
      ],
      "creditHours": 4
    },
    {
      "title": "Linear Algebra",
      "code": "MATH210",
      "modality": "Online",
      "hasLab": false,
      "prerequisites": ["MATH101"],
      "semester": "Spring",
      "department": "Mathematics",
      "degreeRequirement": "Major Requirement",
      "instructor": "Prof. Kim",
      "officeHours": "Fri 1-3 PM",
      "textbook": "Linear Algebra and Its Applications",
      "gradingPolicy": "Weighted",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Kim",
          "time": "MWF 11:00 AM - 12:00 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "English Composition",
      "code": "ENG101",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": [],
      "semester": "Fall",
      "department": "English",
      "degreeRequirement": "General Education",
      "instructor": "Dr. Williams",
      "officeHours": "Tue/Thu 2-3 PM",
      "syllabus": "eng_comp_syllabus.pdf",
      "textbook": "The Elements of Writing",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Williams",
          "time": "MWF 9:00 AM - 10:00 AM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Taylor",
          "time": "TTh 1:00 PM - 2:30 PM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Shakespearean Literature",
      "code": "ENG220",
      "modality": "Online",
      "hasLab": false,
      "prerequisites": ["ENG101"],
      "semester": "Spring",
      "department": "English",
      "degreeRequirement": "Elective",
      "instructor": "Prof. Carter",
      "officeHours": "Wed 10-11 AM",
      "textbook": "The Complete Works of Shakespeare",
      "gradingPolicy": "Essay-Based",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Carter",
          "time": "Asynchronous"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Probability and Statistics",
      "code": "MATH220",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": ["MATH101"],
      "semester": "Fall",
      "department": "Mathematics",
      "degreeRequirement": "Major Requirement",
      "instructor": "Dr. Nguyen",
      "officeHours": "Mon/Wed 11 AM - 12 PM",
      "syllabus": "prob_stats_syllabus.pdf",
      "textbook": "Introduction to Probability and Statistics",
      "gradingPolicy": "Weighted",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Nguyen",
          "time": "MWF 2:00 PM - 3:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Clark",
          "time": "TTh 9:00 AM - 10:30 AM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Discrete Mathematics",
      "code": "MATH230",
      "modality": "Online",
      "hasLab": false,
      "prerequisites": ["MATH101"],
      "semester": "Spring",
      "department": "Mathematics",
      "degreeRequirement": "Major Requirement",
      "instructor": "Prof. Hernandez",
      "officeHours": "Tue/Thu 1-2 PM",
      "textbook": "Discrete Mathematics and Its Applications",
      "gradingPolicy": "Standard",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Hernandez",
          "time": "MWF 10:00 AM - 11:00 AM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Modern Poetry",
      "code": "ENG250",
      "modality": "In-Person",
      "hasLab": false,
      "prerequisites": ["ENG101"],
      "semester": "Fall",
      "department": "English",
      "degreeRequirement": "Elective",
      "instructor": "Dr. Roberts",
      "officeHours": "Wed 3-4 PM",
      "syllabus": "modern_poetry_syllabus.pdf",
      "textbook": "The Norton Anthology of Modern Poetry",
      "gradingPolicy": "Essay-Based",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Dr. Roberts",
          "time": "MWF 1:00 PM - 2:00 PM"
        },
        {
          "sectionNumber": "002",
          "professor": "Dr. Evans",
          "time": "TTh 10:00 AM - 11:30 AM"
        }
      ],
      "creditHours": 3
    },
    {
      "title": "Creative Writing",
      "code": "ENG275",
      "modality": "Online",
      "hasLab": false,
      "prerequisites": ["ENG101"],
      "semester": "Spring",
      "department": "English",
      "degreeRequirement": "Elective",
      "instructor": "Prof. Martinez",
      "officeHours": "Mon 4-5 PM",
      "textbook": "Writing Fiction: A Guide to Narrative Craft",
      "gradingPolicy": "Project-Based",
      "sections": [
        {
          "sectionNumber": "001",
          "professor": "Prof. Martinez",
          "time": "Asynchronous"
        }
      ],
      "creditHours": 3
    }
  ];
  
export default courseData;