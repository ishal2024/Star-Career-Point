export const courses = [
  {
    id: 1,
    name: "Class V–VIII Foundation Program",
    image: "https://imgs.search.brave.com/GKb9kBzhXVC3B3vblIUBL_0hmMzE6glO2kyo59BCqOM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbi5l/ZHVyZXYuaW4vQWxs/SW1hZ2VzL29yaWdp/bmFsL0FwcGxpY2F0/aW9uSW1hZ2VzL0Nv/dXJzZUltYWdlcy80/NzE0MDY1ZC00YmQ2/LTQ3MDAtYTEwMS02/NTIyM2IwMDkxOGFf/Q0kuanBn",
    description:
      "This foundation program is specially designed for students of Classes 5 to 8 to build a strong academic base in core subjects. The course focuses on conceptual clarity, logical thinking, and interactive learning methods. Students are trained with structured notes, regular assessments, and doubt-solving sessions to prepare them for higher classes like 9th and 10th. Equal emphasis is given to Mathematics, Science, Social Science, and English to ensure overall development.",
    price: "₹25,000",
    duration: "1 Year Program",
    classesPerWeek: "6 Days a Week",
    subjects: [
      {
        id: 0,
        title: "Mathematics",
        topics: [
          "Numbers and Operations",
          "Fractions and Decimals",
          "Integers",
          "Algebra Basics",
          "Ratio and Proportion",
          "Geometry",
          "Mensuration",
          "Data Handling",
          "Simple Equations",
          "Profit and Loss"
        ]
      },
      {
        id: 1,
        title: "Science",
        topics: [
          "Food and Nutrition",
          "Materials and Their Properties",
          "Motion and Force",
          "Light and Sound",
          "Plants and Animals",
          "Human Body Systems",
          "Energy and Environment",
          "Natural Resources",
          "Basic Physics and Chemistry Concepts"
        ]
      },
      {
        id: 2,
        title: "Social Science",
        topics: [
          "Ancient Civilizations",
          "Medieval India",
          "Modern India",
          "Geography Basics",
          "Maps and Globe",
          "Climate and Environment",
          "Indian Constitution Basics",
          "Civics and Society"
        ]
      },
      {
        id: 3,
        title: "English",
        topics: [
          "Grammar",
          "Reading Comprehension",
          "Writing Skills",
          "Vocabulary Building",
          "Literature (Stories & Poems)",
          "Sentence Formation",
          "Speaking Skills"
        ]
      }
    ]
  },

  // ✅ Class 9 (already improved)
  {
    id: 2,
    name: "Class IX (CBSE & Other Boards)",
    image: "https://images.unsplash.com/photo-1628863353691-0071c8c1874c",
    description:
      "This comprehensive Class IX program builds strong fundamentals for board classes with full syllabus coverage, regular testing, and conceptual clarity.",
    price: "₹30,000",
    duration: "1 Year Program",
    classesPerWeek: "6 Days a Week",
    subjects: [
      { id: 0, title: "Mathematics", topics: ["Number Systems", "Polynomials", "Coordinate Geometry", "Linear Equations", "Triangles", "Circles", "Statistics", "Probability"] },
      { id: 1, title: "Science", topics: ["Matter", "Atoms", "Cell", "Tissues", "Motion", "Gravitation", "Work Energy", "Sound"] },
      { id: 2, title: "Social Science", topics: ["French Revolution", "Nazism", "Geography India", "Democracy", "Economics"] },
      { id: 3, title: "English", topics: ["Beehive", "Moments", "Writing Skills", "Grammar"] }
    ]
  },

  // ✅ Class 10
  {
    id: 3,
    name: "Class X (CBSE & Other Boards)",
    image: "https://images.unsplash.com/photo-1631047085941-a29e9730a7e6",
    description:
      "Complete board preparation course with full syllabus coverage, test series, and revision strategies for excellent results.",
    price: "₹35,000",
    duration: "1 Year Program",
    classesPerWeek: "6 Days a Week",
    subjects: [
      { id: 0, title: "Mathematics", topics: ["Real Numbers", "Quadratics", "Trigonometry", "Statistics", "Probability"] },
      { id: 1, title: "Science", topics: ["Chemistry", "Life Processes", "Electricity", "Magnetism"] },
      { id: 2, title: "Social Science", topics: ["Nationalism", "Geography", "Political Science", "Economics"] },
      { id: 3, title: "English", topics: ["First Flight", "Footprints", "Writing", "Grammar"] }
    ]
  },

  // ✅ Class 11 PCM
  {
    id: 4,
    name: "Class XI (PCM)",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa",
    description:
      "Advanced PCM course focusing on strong fundamentals for JEE and board preparation with deep conceptual understanding.",
    price: "₹45,000",
    duration: "1 Year Program",
    classesPerWeek: "6 Days a Week",
    subjects: [
      { id: 0, title: "Physics", topics: ["Kinematics", "Laws of Motion", "Work Energy", "Thermodynamics"] },
      { id: 1, title: "Chemistry", topics: ["Atomic Structure", "Bonding", "States of Matter", "Thermodynamics"] },
      { id: 2, title: "Mathematics", topics: ["Sets", "Functions", "Trigonometry", "Limits"] },
      { id: 3, title: "English", topics: ["Hornbill", "Snapshots", "Writing", "Grammar"] }
    ]
  },

  // ✅ Class 11 PCB
  {
    id: 5,
    name: "Class XI (PCB)",
    image: "https://imgs.search.brave.com/MQDaf494sNvqX2VhlLiC2ciDRrOXkR61KGuIITTZNgs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHVk/eWF0aG9tZS5vcmcv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDgvOC0xMi5wbmc",
    description:
      "Biology-focused program for NEET aspirants with strong conceptual clarity and regular practice.",
    price: "₹44,000",
    duration: "1 Year Program",
    classesPerWeek: "6 Days a Week",
    subjects: [
      { id: 0, title: "Biology", topics: ["Cell", "Plant Physiology", "Human Physiology"] },
      { id: 1, title: "Physics", topics: ["Motion", "Work Energy", "Thermodynamics"] },
      { id: 2, title: "Chemistry", topics: ["Organic Chemistry", "Bonding", "Equilibrium"] },
      { id: 3, title: "English", topics: ["Reading", "Writing", "Grammar"] }
    ]
  },

  // ✅ Class 11 Commerce
  {
    id: 6,
    name: "Class XI (Commerce)",
    image: "https://images.unsplash.com/photo-1708011271935-3e109df56fe0",
    description:
      "Strong conceptual commerce program covering accounts, business, and economics with practical learning.",
    price: "₹40,000",
    duration: "1 Year Program",
    classesPerWeek: "6 Days a Week",
    subjects: [
      { id: 0, title: "Accountancy", topics: ["Journal", "Ledger", "Trial Balance"] },
      { id: 1, title: "Business Studies", topics: ["Business Basics", "Forms", "Management"] },
      { id: 2, title: "Economics", topics: ["Microeconomics", "Demand Supply"] },
      { id: 3, title: "English", topics: ["Writing", "Grammar"] }
    ]
  },

  // ✅ Class 11 Humanities
  {
    id: 7,
    name: "Class XI (Humanities)",
    image: "https://images.unsplash.com/photo-1620653260947-9ca7317ef82e",
    description:
      "Humanities course designed for analytical thinking and preparation for competitive exams.",
    price: "₹38,000",
    duration: "1 Year Program",
    classesPerWeek: "6 Days a Week",
    subjects: [
      { id: 0, title: "History", topics: ["Ancient", "Medieval", "World"] },
      { id: 1, title: "Political Science", topics: ["Theory", "Constitution"] },
      { id: 2, title: "Geography", topics: ["Physical", "Human"] },
      { id: 3, title: "Sociology", topics: ["Society", "Culture"] },
      { id: 4, title: "Psychology", topics: ["Behavior", "Development"] },
      { id: 5, title: "English", topics: ["Reading", "Writing"] }
    ]
  },
  {
    id: 8,
    name: "Class XII (PCM)",
    image: "https://images.unsplash.com/photo-1754304342696-7c253db44456",
    description:
      "This Class XII PCM program is designed for students preparing for CBSE board examinations as well as competitive exams like JEE. The course provides complete syllabus coverage with in-depth conceptual clarity, advanced problem-solving techniques, and regular test series. Students are guided with structured notes, doubt-solving sessions, and revision modules to ensure strong performance in both board and competitive exams. Special emphasis is given to numerical practice, conceptual application, and exam-oriented preparation.",
    price: "₹48,000",
    duration: "1 Year Program",
    classesPerWeek: "6 Days a Week",
    subjects: [
      {
        id: 0,
        title: "Physics",
        topics: [
          "Electric Charges and Fields",
          "Electrostatic Potential",
          "Current Electricity",
          "Moving Charges and Magnetism",
          "Magnetism and Matter",
          "Electromagnetic Induction",
          "Alternating Current",
          "Electromagnetic Waves",
          "Ray Optics",
          "Wave Optics",
          "Dual Nature of Matter",
          "Atoms",
          "Nuclei",
          "Semiconductors"
        ]
      },
      {
        id: 1,
        title: "Chemistry",
        topics: [
          "Solid State",
          "Solutions",
          "Electrochemistry",
          "Chemical Kinetics",
          "Surface Chemistry",
          "General Principles of Metallurgy",
          "p-Block Elements",
          "d and f Block Elements",
          "Coordination Compounds",
          "Haloalkanes and Haloarenes",
          "Alcohols Phenols and Ethers",
          "Aldehydes Ketones",
          "Carboxylic Acids",
          "Amines",
          "Biomolecules",
          "Polymers",
          "Chemistry in Everyday Life"
        ]
      },
      {
        id: 2,
        title: "Mathematics",
        topics: [
          "Relations and Functions",
          "Inverse Trigonometric Functions",
          "Matrices",
          "Determinants",
          "Continuity and Differentiability",
          "Applications of Derivatives",
          "Integrals",
          "Applications of Integrals",
          "Differential Equations",
          "Vectors",
          "3D Geometry",
          "Linear Programming",
          "Probability"
        ]
      },
      {
        id: 3,
        title: "English",
        topics: [
          "Flamingo",
          "Vistas",
          "Writing Skills",
          "Reading Comprehension",
          "Grammar",
          "Letter Writing",
          "Article Writing",
          "Report Writing"
        ]
      }
    ]
  },

  // 🔥 CLASS 12 PCB
  {
    id: 9,
    name: "Class XII (PCB )",
    image: "https://images.unsplash.com/photo-1674702693637-330943cdf0a1",
    description:
      "This Class XII PCB course is designed for students preparing for board exams and medical entrance exams like NEET. The program focuses on deep conceptual clarity in Biology along with strong fundamentals in Physics and Chemistry. It includes complete syllabus coverage, regular tests, NCERT-based preparation, and revision strategies. Special attention is given to diagrams, theoretical concepts, and application-based questions.",
    price: "₹47,000",
    duration: "1 Year Program",
    classesPerWeek: "6 Days a Week",
    subjects: [
      {
        id: 0,
        title: "Biology",
        topics: [
          "Reproduction in Organisms",
          "Human Reproduction",
          "Reproductive Health",
          "Genetics and Evolution",
          "Molecular Basis of Inheritance",
          "Biotechnology",
          "Human Health and Disease",
          "Microbes in Human Welfare",
          "Ecology",
          "Biodiversity",
          "Environmental Issues"
        ]
      },
      {
        id: 1,
        title: "Physics",
        topics: [
          "Electrostatics",
          "Current Electricity",
          "Magnetism",
          "Electromagnetic Induction",
          "Optics",
          "Modern Physics"
        ]
      },
      {
        id: 2,
        title: "Chemistry",
        topics: [
          "Solutions",
          "Electrochemistry",
          "Organic Chemistry",
          "Biomolecules",
          "Polymers"
        ]
      },
      {
        id: 3,
        title: "English",
        topics: [
          "Flamingo",
          "Vistas",
          "Writing Skills",
          "Grammar"
        ]
      }
    ]
  },

  // 🔥 CLASS 12 COMMERCE
  {
    id: 10,
    name: "Class XII (Commerce)",
    image: "https://imgs.search.brave.com/JIpIVLCSZX0lmzc0zRdLhDw_fZzI9POtkoKiRvMoRbs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LmJ5anVzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/OS9Db21tZXJjZS53/ZWJw",
    description:
      "This Class XII Commerce course is designed for students aiming to excel in board exams and pursue careers in finance, accounting, and business management. The program provides in-depth knowledge of Accountancy, Economics, and Business Studies with practical examples and real-life applications. Regular tests, case studies, and revision modules help students achieve excellent results.",
    price: "₹42,000",
    duration: "1 Year Program",
    classesPerWeek: "6 Days a Week",
    subjects: [
      {
        id: 0,
        title: "Accountancy",
        topics: [
          "Partnership Accounts",
          "Company Accounts",
          "Financial Statements",
          "Cash Flow Statement",
          "Accounting Ratios"
        ]
      },
      {
        id: 1,
        title: "Business Studies",
        topics: [
          "Management Principles",
          "Planning",
          "Organising",
          "Staffing",
          "Directing",
          "Controlling",
          "Marketing",
          "Financial Management"
        ]
      },
      {
        id: 2,
        title: "Economics",
        topics: [
          "Macroeconomics",
          "National Income",
          "Money and Banking",
          "Government Budget",
          "Balance of Payments"
        ]
      },
      {
        id: 3,
        title: "English",
        topics: [
          "Flamingo",
          "Writing Skills",
          "Reading",
          "Grammar"
        ]
      }
    ]
  },

  // 🔥 CLASS 12 HUMANITIES
  {
    id: 11,
    name: "Class XII (Humanities)",
    image: "https://images.unsplash.com/photo-1488628176578-4ffd5fdbc900",
    description:
      "This Class XII Humanities course is designed for students preparing for board exams and competitive exams like UPSC, CUET, and other entrance exams. The program focuses on conceptual understanding, analytical thinking, and answer-writing skills. Students are trained with structured notes, regular tests, and revision sessions to perform exceptionally well.",
    price: "₹40,000",
    duration: "1 Year Program",
    classesPerWeek: "6 Days a Week",
    subjects: [
      {
        id: 0,
        title: "History",
        topics: [
          "Harappan Civilization",
          "Mughal Empire",
          "Colonialism",
          "Freedom Movement",
          "Post-Independence India"
        ]
      },
      {
        id: 1,
        title: "Political Science",
        topics: [
          "Cold War",
          "Contemporary World Politics",
          "Indian Politics",
          "Democracy"
        ]
      },
      {
        id: 2,
        title: "Geography",
        topics: [
          "Human Geography",
          "Resources",
          "Transport",
          "Population"
        ]
      },
      {
        id: 3,
        title: "Sociology",
        topics: [
          "Indian Society",
          "Social Change",
          "Globalisation"
        ]
      },
      {
        id: 4,
        title: "Psychology",
        topics: [
          "Human Behaviour",
          "Personality",
          "Mental Disorders",
          "Therapies"
        ]
      },
      {
        id: 5,
        title: "English",
        topics: [
          "Flamingo",
          "Writing Skills",
          "Grammar"
        ]
      }
    ]
  }
];

export const courseCategories = [
  "Class V–VIII Foundation Program",
  "Class IX (CBSE & Other Boards)",
  "Class X (CBSE & Other Boards)",
  "Class XI (PCM)",
  "Class XI (PCB)",
  "Class XI (Commerce)",
  "Class XI (Humanities)",
  "Class XII (PCM)",
  "Class XII (PCB)",
  "Class XII (Commerce)",
  "Class XII (Humanities)"
];