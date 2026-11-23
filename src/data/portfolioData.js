export const personalInfo = {
  name: "Maithrayi S Viraktamath",
  initials: "MSV",
  title: "Electronics and Communication Engineer",
  degree: "B.E. Electronics and Communication Engineering",
  college: "NITTE Meenakshi Institute of Technology",
  location: "Bengaluru, India",
  graduationYear: "2027",
  cgpa: "9.11",
  email: "maithrayi2810@gmail.com",
  linkedin: "https://www.linkedin.com/in/maithrayi-s-viraktamath-88a5612a1/",
  github: "https://github.com/maithrayi2810",
  headline: "Engineering Ideas Into Intelligent Solutions.",
  intro:
    "Electronics and Communication Engineering student with hands-on experience in digital design, FPGA development, embedded systems, and software engineering. Passionate about building practical technology-driven solutions through hardware and software.",
  about: {
    p1: "I am a dedicated Electronics and Communication Engineering undergraduate at NITTE Meenakshi Institute of Technology (NMIT), Bengaluru, maintaining a 9.11 CGPA. My engineering approach bridges hardware architecture and intelligent software design, driven by a deep curiosity for how digital systems translate code into physical computation.",
    p2: "Through practical projects and industry internships—including RTL design and AMBA AHB/APB interface verification at Maven Silicon and mission-critical communication analysis for the KAVACH ATP system at BHEL—I have cultivated rigorous skills in digital electronics, FPGA prototyping, and embedded C.",
    p3: "Complementing my hardware foundations, I have engineered machine learning models achieving 84.58% test accuracy on Fashion-MNIST, built fraud detection pipelines, and developed full-stack analytical software. My goal is to contribute to pioneering engineering teams developing next-generation microelectronics, embedded intelligence, and robust software systems."
  },
  typingWords: [
    "Digital System Design",
    "FPGA Development",
    "RTL Design & Verification",
    "Embedded Systems",
    "VLSI Technologies",
    "Software Engineering",
    "Machine Learning"
  ],
  resumes: {
    hardware: "/resumes/Hardware_Resume.pdf",
    software: "/resumes/Software_Resume.pdf"
  },
  profileImage: "/images/profile.jpg"
};

export const technicalInterests = [
  {
    title: "Digital System Design",
    description: "Architecting synchronous sequential and combinational logic circuits, finite state machines (FSM), and high-performance digital computation datapath units.",
    icon: "Cpu",
    tag: "Hardware Architecture"
  },
  {
    title: "FPGA Development",
    description: "Designing, mapping, and prototyping custom digital accelerators and softcore architectures on Xilinx PYNQ-Z2 and Artix-7 FPGA boards.",
    icon: "Layers",
    tag: "Reconfigurable Logic"
  },
  {
    title: "RTL Design and Verification",
    description: "Writing synthesizable Verilog and SystemVerilog modules, constructing testbenches, and verifying bus interfaces (AMBA AHB/APB) via simulation.",
    icon: "Binary",
    tag: "HDL & EDA"
  },
  {
    title: "Embedded Systems",
    description: "Developing responsive firmware on ESP32 and microcontrollers, sensor interfacing, interrupt-driven peripherals, and real-time control routines.",
    icon: "Microchip",
    tag: "Hardware-Software"
  },
  {
    title: "VLSI and Semiconductor",
    description: "Exploring integrated circuit design principles, CMOS logic families, timing closure, power-performance trade-offs, and physical IC workflows.",
    icon: "CircuitBoard",
    tag: "Silicon Technologies"
  },
  {
    title: "Machine Learning",
    description: "Training artificial neural networks (ANN), convolutional classifiers, and applying supervised algorithms to pattern recognition and tabular anomaly detection.",
    icon: "BrainCircuit",
    tag: "Applied AI"
  },
  {
    title: "Software Development",
    description: "Building structured Python applications, object-oriented solutions in C++, relational database schemas in SQLite/SQL, and data visualization tools.",
    icon: "Code2",
    tag: "Software Engineering"
  },
  {
    title: "Computer Architecture",
    description: "Investigating RISC-V ISA, instruction decoding, pipelining hazards, cache memory hierarchies, and hardware acceleration coprocessors.",
    icon: "Server",
    tag: "Core Architecture"
  }
];

export const technicalSkills = [
  {
    category: "Hardware Description Languages",
    icon: "Code",
    skills: ["Verilog HDL", "SystemVerilog"]
  },
  {
    category: "Programming Languages",
    icon: "Terminal",
    skills: ["C", "C++", "Python", "Embedded C", "SQL"]
  },
  {
    category: "Electronics and Hardware",
    icon: "Cpu",
    skills: [
      "Digital Electronics",
      "RTL Design",
      "Embedded Systems",
      "FPGA Development",
      "Functional Verification"
    ]
  },
  {
    category: "VLSI and Digital Design",
    icon: "Binary",
    skills: ["Digital Logic", "RTL Design", "Functional Verification"]
  },
  {
    category: "Tools & EDA Environments",
    icon: "Wrench",
    skills: [
      "Xilinx Vivado",
      "Cadence Virtuoso",
      "MATLAB",
      "LTspice",
      "Logisim",
      "Git",
      "VS Code"
    ]
  },
  {
    category: "Libraries and Frameworks",
    icon: "Boxes",
    skills: [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Matplotlib"
    ]
  },
  {
    category: "Core Computer Science Concepts",
    icon: "GitBranch",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "DBMS"
    ]
  }
];

export const projects = [
  {
    id: "risc-v-pynq",
    title: "Hardware-Accelerated RISC-V Processor on PYNQ FPGA Platform",
    category: "Digital Design",
    shortDescription:
      "Hardware-accelerated RISC-V processor on PYNQ-Z2 FPGA with fixed-point CORDIC accelerator and Field-Oriented Control (FOC) for BLDC motor speed regulation.",
    fullDescription:
      "Designed and simulated a fixed-point CORDIC hardware accelerator in Verilog and integrated it into a Field-Oriented Control (FOC) system for BLDC motor speed regulation using Vivado. Developed and validated Clarke/Park transformations, PI controllers, PWM generation, and a simplified BLDC motor model. Achieved approximately 2% speed error at 100 and 150 RPM reference speeds across 30,000 successful CORDIC operations.",
    technologies: [
      "Verilog HDL",
      "FPGA (PYNQ-Z2)",
      "Xilinx Vivado",
      "CORDIC Accelerator",
      "Field-Oriented Control",
      "BLDC Motor Modeling"
    ],
    repository:
      "https://github.com/tanushrivg/Hardware-Accelerated-RISC-V-Processor-on-PYNQ-FPGA-Platform",
    attribution:
      "Collaborative project hosted on GitHub (tanushrivg/Hardware-Accelerated-RISC-V-Processor-on-PYNQ-FPGA-Platform). Verified contributions: CORDIC hardware accelerator, FOC pipeline integration, Clarke/Park transform math, and Vivado simulation.",
    status: "Active / Verified",
    metrics: [
      "~2% speed error at 100 & 150 RPM",
      "30,000 successful CORDIC operations verified",
      "Fixed-point coordinate rotation digital computer datapath"
    ],
    architecture:
      "RISC-V RV32I Softcore ➔ AXI/Custom Bus ➔ CORDIC Trigonometric Accelerator (Vector/Rotation modes) ➔ Clarke/Park Transforms ➔ PI Current Loops ➔ Space Vector / Sinusoidal PWM Generation ➔ BLDC Motor Feedback."
  },
  {
    id: "headlight-control",
    title: "Automatic Headlight Control System",
    category: "Embedded Systems",
    shortDescription:
      "An ESP32-based embedded system using light-sensor interfacing to automate vehicle headlight high/low beam switching based on ambient lux thresholds.",
    fullDescription:
      "Engineered an automated headlight switching system using an ESP32 microcontroller and Light Dependent Resistor (LDR) sensor module. The firmware evaluates ambient lux levels continuously, dynamically adjusting headlight high and low beam states to prevent glare for oncoming drivers while preserving driver visibility. Includes noise debouncing and threshold calibration for dusk, dark, and tunnel conditions.",
    technologies: [
      "ESP32",
      "Embedded C++",
      "LDR Sensor Interfacing",
      "GPIO Control",
      "Arduino IDE",
      "Hardware Calibration"
    ],
    repository:
      "https://github.com/maithrayi2810/Automatic-Headlight-Control-system",
    attribution: "Sole Author / Developer (maithrayi2810 repository)",
    status: "Completed / Verified",
    metrics: [
      "Real-time ambient lux detection",
      "Calibrated multi-condition switching hysteresis",
      "Low power consumption on ESP32 SoC"
    ],
    architecture:
      "LDR Sensor Voltage Divider ➔ ESP32 12-bit ADC ➔ Moving Average Filter & Hysteresis Logic ➔ Relay / MOSFET Driver ➔ Dual-Beam Automotive LED Luminaire."
  },
  {
    id: "viterbi-encoder",
    title: "Viterbi Encoder Using Verilog HDL",
    category: "Digital Design",
    shortDescription:
      "A Verilog-based digital communication project implementing and simulating a convolutional Viterbi encoder for forward error-correction coding.",
    fullDescription:
      "Implemented a synthesizable convolutional encoder in Verilog HDL for digital transmission channels. The module takes a continuous serial binary stream and generates parity polynomials using shift register tap states and modulo-2 XOR addition. Verified functional accuracy, timing, and state transitions using Xilinx Vivado testbench simulation and waveform inspection.",
    technologies: [
      "Verilog HDL",
      "Digital Communication",
      "Convolutional Encoding",
      "RTL Simulation",
      "Xilinx Vivado",
      "Waveform Analysis"
    ],
    repository:
      "https://github.com/maithrayi2810/Viterbi-Encoder-using-Verilog",
    attribution: "Sole Author / Developer (maithrayi2810 repository)",
    status: "Completed / Verified",
    metrics: [
      "Parameterizable constraint length and generator polynomials",
      "Zero-latency synchronous shift register datapath",
      "Comprehensive testbench with waveform verification"
    ],
    architecture:
      "Serial Binary Input ➔ Synchronous Shift Register Chain (D Flip-Flops) ➔ Polynomial Modulo-2 XOR Networks (G1 & G2) ➔ Parallel-to-Serial Multiplexer ➔ Encoded Symbol Output Stream."
  },
  {
    id: "expense-tracker",
    title: "Intelligent Expense Tracker & Spending Analyzer",
    category: "Software Development",
    shortDescription:
      "A Python and SQLite-based application for recording, categorizing, updating, and analyzing financial transactions with visual spending trend reports.",
    fullDescription:
      "Developed a structured personal finance management platform leveraging Python and SQLite for transactional ACID compliance. Built statistical modules to evaluate monthly budget variances, category distribution, recurring spending leaks, and savings trajectories with interactive Matplotlib visual summaries.",
    technologies: [
      "Python",
      "SQLite",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Analysis",
      "Relational Modeling"
    ],
    repository:
      "https://github.com/maithrayi2810/Intelligent-Expense-Tracker",
    attribution: "Sole Author / Developer (maithrayi2810 repository)",
    status: "Completed / Verified",
    metrics: [
      "Full CRUD transaction operations with indexing",
      "Automated monthly expenditure aggregation",
      "Multi-dimensional visual spending breakdown"
    ],
    architecture:
      "User Transaction Entry ➔ Input Validation & Normalization ➔ SQLite Relational Storage ➔ Pandas Aggregation Engine ➔ Matplotlib Visual Rendering."
  },
  {
    id: "fashion-mnist-ann",
    title: "Fashion-MNIST Clothing Classification Using ANN",
    category: "Machine Learning",
    shortDescription:
      "An Artificial Neural Network developed using TensorFlow and Keras to classify Fashion-MNIST images across 10 clothing categories, achieving 84.58% test accuracy.",
    fullDescription:
      "Constructed a deep neural network pipeline in TensorFlow/Keras to classify 70,000 28x28 grayscale clothing articles into 10 fashion classes. Implemented min-max image normalization, flattened vector mapping, dense hidden layers with Rectified Linear Unit (ReLU) activations, dropout regularization to prevent overfitting, and Softmax categorical cross-entropy optimization.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "Deep Learning",
      "ANN",
      "Hyperparameter Tuning"
    ],
    repository: null,
    attribution:
      "Academic Machine Learning project (documented in Software Resume).",
    status: "Completed / Verified (84.58% Test Accuracy)",
    metrics: [
      "84.58% test classification accuracy",
      "10 distinct fashion item classes",
      "ReLU hidden activations & Softmax loss convergence"
    ],
    architecture:
      "28x28 Grayscale Input (784 features) ➔ Min-Max Normalization [0,1] ➔ Dense Layer 1 (ReLU + Dropout) ➔ Dense Layer 2 (ReLU) ➔ 10-Unit Softmax Output Layer."
  },
  {
    id: "credit-card-fraud",
    title: "Credit Card Fraud Detection Machine Learning Pipeline",
    category: "Machine Learning",
    shortDescription:
      "A machine learning pipeline to identify potentially fraudulent credit card transactions, addressing extreme class imbalance with precision-recall evaluation.",
    fullDescription:
      "Designed an anomaly detection and supervised classification workflow for high-volume banking transactions. Emphasized data preprocessing, PCA feature interpretation, synthetic oversampling/class-weighting to mitigate severe positive class skew, and comprehensive evaluation using Precision, Recall, F1-Score, and ROC-AUC metrics to minimize false negatives.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Class Imbalance Handling",
      "ROC-AUC Evaluation"
    ],
    repository: null,
    attribution:
      "Academic Machine Learning project (documented in Software Resume).",
    status: "Completed / Verified",
    metrics: [
      "Optimized recall on low-prevalence fraudulent classes",
      "Robust cross-validation preventing data leakage",
      "Multi-model benchmark (Logistic Regression, Random Forest)"
    ],
    architecture:
      "Transaction Data Stream ➔ Robust Feature Scaling & Cleaning ➔ Class Imbalance Resampling ➔ Classifier Pipeline (Scikit-Learn) ➔ Precision/Recall & ROC-AUC Validation."
  },
  {
    id: "traffic-light-system",
    title: "Traffic Light Control System",
    category: "Embedded Systems",
    shortDescription:
      "An Arduino UNO-based microcontroller project simulating real-world junction traffic signals with timed deterministic state machine transitions.",
    fullDescription:
      "Built and verified an embedded traffic intersection control system utilizing an Arduino UNO programmed in C/C++. The firmware implements a finite state machine managing timed transitions between Red, Yellow, and Green LED signals with accurate delay parameters and modular pin configurations.",
    technologies: [
      "Arduino UNO",
      "C / C++",
      "GPIO Interfacing",
      "Finite State Machine (FSM)",
      "Embedded Hardware"
    ],
    repository:
      "https://github.com/maithrayi2810/Traffic-Light-System",
    attribution: "Sole Author / Developer (maithrayi2810 repository)",
    status: "Completed / Verified",
    metrics: [
      "Deterministic 3-state intersection sequencing",
      "Zero-flicker current-limited LED driving",
      "Modular timing parameter configuration"
    ],
    architecture:
      "Power Regulation ➔ Arduino UNO Microcontroller ➔ Timed FSM Engine (Red/Yellow/Green) ➔ Current-limiting Resistor Network ➔ Signal Luminaire Array."
  }
];

export const experience = [
  {
    id: "maven-silicon",
    role: "VLSI Design Intern",
    company: "Maven Silicon",
    location: "Online / Remote",
    period: "Apr 2026 – May 2026",
    badge: "VLSI & Digital Verification",
    points: [
      "Worked through RTL design, simulation, and functional verification workflows using industry-standard EDA tools.",
      "Designed and verified AMBA AHB/APB interface logic in Verilog for seamless interconnect communication between SoC IP blocks.",
      "Developed a practical understanding of front-end ASIC/FPGA digital design methodology from specifications to simulation waveforms and timing checks."
    ],
    skills: ["Verilog HDL", "AMBA AHB/APB", "EDA Tools", "Functional Verification", "RTL Simulation"]
  },
  {
    id: "bhel",
    role: "Intern – Communication Domain, KAVACH ATP System",
    company: "Bharat Heavy Electricals Limited (BHEL)",
    location: "On-site",
    period: "Jan 2026",
    badge: "Safety-Critical Systems",
    points: [
      "Completed a two-week intensive engineering internship studying the indigenously developed KAVACH Automatic Train Protection (ATP) system.",
      "Investigated RF communication protocols, radio transmission mechanisms, and signal integrity requirements used in mission-critical railway automation.",
      "Analysed safety-critical hardware architectures, fail-safe signalling mechanisms, and test telemetry with strict emphasis on high-reliability railway operations."
    ],
    skills: ["KAVACH ATP", "RF Protocols", "Signal Integrity", "Safety-Critical Architecture", "Fail-Safe Logic"]
  }
];

export const education = [
  {
    id: "nmit",
    institution: "NITTE Meenakshi Institute of Technology",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Electronics and Communication Engineering",
    period: "2023 – 2027",
    score: "CGPA: 9.11",
    scoreLabel: "Cumulative GPA",
    location: "Bengaluru, India",
    highlights: [
      "Focus areas: Digital System Design, Embedded Systems, Computer Architecture, Signals & DSP, and Machine Learning.",
      "Consistent academic performer with a 9.11 CGPA in accredited autonomous curriculum under VTU."
    ]
  },
  {
    id: "class-xii",
    institution: "Nagarjuna Vidyaniketan",
    degree: "Senior Secondary (Class XII) — CBSE",
    field: "PCMB (Physics, Chemistry, Mathematics, Biology)",
    period: "2021 – 2023",
    score: "80.4%",
    scoreLabel: "CBSE Board Aggregate",
    location: "Bengaluru, India",
    highlights: [
      "Subject Highlights: English Core (93), Mathematics (78), Biology (86), Physics (73), Chemistry (72).",
      "Completed comprehensive foundational science and mathematical training."
    ]
  },
  {
    id: "class-x",
    institution: "Nagarjuna Vidyaniketan",
    degree: "Secondary School Examination (Class X) — CBSE",
    field: "General Academics & Computer Applications",
    period: "2021",
    score: "89.1%",
    scoreLabel: "CBSE Board Aggregate",
    location: "Bengaluru, India",
    highlights: [
      "Subject Highlights: Computer Applications (94), Hindi (92), Social Science (92), English (87), Science (83), Mathematics (83).",
      "Distinction in Computer Applications and Sciences."
    ]
  }
];

export const certifications = [
  {
    id: "aws-ml-nlp",
    title: "AWS Academy Graduate - Machine Learning for NLP",
    issuer: "AWS Academy / Amazon Web Services",
    date: "June 2025",
    credentialUrl: "https://www.credly.com/go/7TdlNq0A",
    fileUrl: "/certificates/AWS_ML_NLP_Certificate.pdf",
    imageUrl: "/certificates/AWS_ML_NLP_Certificate.png",
    category: "Cloud & Machine Learning",
    description: "Hands-on curriculum covering natural language processing architectures, text preprocessing, embeddings, transformer models, and cloud model deployment on AWS."
  },
  {
    id: "finlatics-excel",
    title: "MS Excel Program - Financial Modeling & Analytics",
    issuer: "Finlatics",
    date: "May 2025 – July 2025",
    credentialId: "EXCEL-896309618eb0eeb1",
    credentialUrl: "https://finlatics.com/credentialscheck",
    fileUrl: "/certificates/Finlatics_MS_Excel_Certificate.pdf",
    imageUrl: "/certificates/Finlatics_MS_Excel_Certificate.png",
    category: "Data Analysis",
    description: "Advanced data analytics, lookup functions, pivot calculations, scenario analysis, and statistical data visualization workflows."
  },
  {
    id: "nptel-wellbeing",
    title: "The Science of Happiness and Wellbeing (Elite)",
    issuer: "NPTEL / IIT Kharagpur (Govt. of India)",
    date: "Feb 2026 – Apr 2026",
    credentialId: "NPTEL26HS64S350201881",
    fileUrl: "/certificates/NPTEL_Certificate.pdf",
    imageUrl: "/certificates/NPTEL_Certificate.png",
    category: "Academic & Behavioral Science",
    description: "8-week intensive certification with 81% Elite score examining empirical psychology, cognitive ergonomics, and emotional wellbeing."
  },
  {
    id: "udemy-vlsi",
    title: "VLSI Design – Digital IC Flow & RTL Design",
    issuer: "Udemy",
    date: "July 2026",
    category: "VLSI & Hardware",
    description: "Digital integrated circuit design fundamentals, Verilog HDL synthesis, standard cell libraries, and timing concepts."
  },
  {
    id: "udemy-python",
    title: "Complete Python Bootcamp: Go from Zero to Hero",
    issuer: "Udemy",
    date: "July 2026",
    category: "Programming",
    description: "Object-oriented programming, data structures, algorithm design, modules, unit testing, and automation with Python."
  },
  {
    id: "iies-skills",
    title: "IIES Skill Development Certificate",
    issuer: "Indian Institute of Embedded Systems (IIES)",
    date: "April 2026",
    category: "Embedded Systems",
    description: "Specialized hands-on technical training in embedded microcontroller architectures, firmware development, and sensor protocols."
  }
];

export const leadership = [
  {
    role: "Student Member",
    organization: "IEEE Aerospace and Electronic Systems Society (AESS)",
    period: "2024 – Present",
    icon: "Radio",
    description: "Active member participating in technical workshops, aerospace symposiums, radar technology discussions, and electronics technical forums."
  },
  {
    role: "Brand & Outreach Team Member & Social Media Lead",
    organization: "Bitgenix (Embedded Systems Club, NMIT)",
    period: "2024 – Present",
    icon: "Megaphone",
    description: "Spearheaded technical branding campaigns, digital engagement, and event announcements for club robotics, IoT, and embedded electronics hackathons."
  },
  {
    role: "NSS Volunteer",
    organization: "National Service Scheme (NSS)",
    period: "2023 – Present",
    icon: "HeartHandshake",
    description: "Engaged in community outreach, public welfare drives, educational support initiatives, and social impact projects for local communities."
  }
];
