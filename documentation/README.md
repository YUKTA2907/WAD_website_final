# Maithrayi S Viraktamath — Engineering Portfolio Website

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Playwright](https://img.shields.io/badge/Playwright-Tested_28%2F28_PASS-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![Node](https://img.shields.io/badge/Node.js->=18-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

A production-grade, responsive, and futuristic engineering portfolio website developed for **Maithrayi S Viraktamath**, an Electronics and Communication Engineering undergraduate at **NITTE Meenakshi Institute of Technology (NMIT), Bengaluru** (Class of 2027, CGPA: 9.11).

This platform is engineered to present a **unified engineering profile** that showcases her interdisciplinary technical versatility across **Digital System Design, FPGA Acceleration, Embedded Systems, Machine Learning, and Software Engineering** without artificial career divisions.

---

## 🌟 Key Features

- **Futuristic Technology Aesthetic**: Deep obsidian (`#060913`) and navy canvases, electric blue and cyber cyan accents, selective glassmorphism, animated circuit particle grid, and glowing gradients.
- **Unified ECE Architecture**: Showcases hardware and software competencies harmoniously without dividing the client into competing hardware or software profiles.
- **Dynamic Hero Section**: Interactive subtitle typing loop cycling through core technical domains, verified location badge (Bengaluru, India), professional headshot, and dual resume triggers.
- **Dual Authentic Resume Downloads**:
  - `Hardware_Resume.pdf` (126 KB) — VLSI, FPGA, RTL, and Embedded Systems focus.
  - `Software_Resume.pdf` (86 KB) — Machine Learning, Software Development, and Data Structures focus.
- **Recruiter Quick View**: A specialized single-scan executive drawer modal providing recruiters with essential metrics (CGPA 9.11, NMIT affiliation, core skill badges, internships, top projects, one-click email copy, and instant resume downloads).
- **Interactive Technical Interests**: 8 separate cards presenting active areas of academic curiosity and technical research.
- **Categorized Technical Skills**: Zero fake progress bars or arbitrary proficiency percentages; grouped cleanly by verified engineering domains.
- **Engineering Project Showcase with Visual Block Diagrams**:
  1. *Hardware-Accelerated RISC-V Processor on PYNQ FPGA Platform* (CORDIC accelerator, Field-Oriented Control, Vivado).
  2. *Automatic Headlight Control System* (ESP32, LDR sensor, adaptive beam switching).
  3. *Viterbi Encoder Using Verilog* (Rate 1/2, K=3 convolutional error correction).
  4. *Intelligent Expense Tracker & Spending Analyzer* (Python, SQLite, Pandas, Matplotlib).
  5. *Fashion-MNIST Clothing Classification Using ANN* (TensorFlow, Keras, 84.58% test accuracy).
  6. *Credit Card Fraud Detection* (Scikit-learn, class imbalance handling, ROC-AUC).
  7. *Traffic Light Control System* (Arduino UNO, deterministic timed FSM).
- **Interactive Project Details Modals**: Displays architecture data flow, verified performance results, tools used, and direct GitHub links.
- **Verified Certifications Viewer**: In-browser PDF previews for authentic certifications including AWS Academy ML for NLP, Finlatics MS Excel, and NPTEL Elite credentials.
- **Industry Experience & Academic Timelines**: Vertical timelines detailing internships at *Maven Silicon* (VLSI Design) and *Bharat Heavy Electricals Limited (BHEL)* (KAVACH ATP System), along with formal education at *NMIT*, Class XII (80.4%), and Class X (89.1%).
- **Leadership & Extracurriculars**: Highlights active participation in *IEEE AESS*, *Bitgenix Embedded Systems Club* (Brand Lead), and *NSS*.
- **Working Mailto Contact Channel**: Pre-populates the user's default email client with structured subjects and message bodies without fragile mock backends.
- **Dark & Light Mode Switcher**: Smooth color transitions with `localStorage` state persistence.
- **Accessibility & Reduced Motion**: Full keyboard navigation, semantic HTML tags, and automatic detection of `prefers-reduced-motion`.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | React.js 18 + Vite 6 / 8 |
| **Styling & Design System** | Tailwind CSS 3.4 + Custom Circuit & Glass Utilities |
| **Typography** | Space Grotesk (Headings), Inter (Body), JetBrains Mono (Technical Tags) |
| **Icons** | Lucide React + Custom Zero-Dependency SVG Brand Glyphs |
| **Testing Engine** | Playwright (Python) + Headless Chromium Engine |
| **Documentation** | Microsoft Word (.docx via python-docx) + Markdown |

---

## 📁 Project Directory Structure

```
WAD_website_final/
├── documentation/
│   ├── Client_Requirements.docx          # Formal client requirements specification
│   ├── Portfolio_Testing_Report.docx     # Comprehensive test report with 28 executed tests & screenshots
│   ├── README.md                         # Copy of repository documentation
│   └── test_execution_results.json       # Raw JSON output from automated test runs
├── public/
│   ├── certificates/                     # Authentic PDF certificates & marks cards
│   │   ├── AWS_ML_NLP_Certificate.pdf
│   │   ├── Class_X_Marks_Card.pdf
│   │   ├── Class_XII_Results.pdf
│   │   ├── Finlatics_MS_Excel_Certificate.pdf
│   │   └── NPTEL_Certificate.pdf
│   ├── images/
│   │   └── profile.jpg                   # Client's professional headshot (1024x1024)
│   ├── resumes/
│   │   ├── Hardware_Resume.pdf           # Downloadable Hardware resume (126 KB)
│   │   └── Software_Resume.pdf           # Downloadable Software resume (86 KB)
│   └── favicon.svg                       # Futuristic cyber circuit monogram (MSV)
├── screenshots/
│   ├── desktop/                          # 14 high-resolution desktop view screenshots
│   ├── mobile/                           # 5 mobile viewport screenshots (390x844 px)
│   └── testing/                          # 4 visual test execution evidence captures
├── src/
│   ├── components/
│   │   ├── About.jsx                     # Educational background & core engineering pillars
│   │   ├── BackgroundAnimation.jsx       # Subtle animated canvas circuit particles & nodes
│   │   ├── CertificateModal.jsx          # Interactive PDF credential previewer
│   │   ├── Certifications.jsx           # Licenses and verified certifications grid
│   │   ├── Contact.jsx                   # Contact coordinates & functional mailto composer
│   │   ├── Education.jsx                 # Formal academic history (NMIT, Class XII, Class X)
│   │   ├── Experience.jsx                # Vertical timeline for Maven Silicon & BHEL internships
│   │   ├── Footer.jsx                    # Footer with copyright, socials & back-to-top button
│   │   ├── Hero.jsx                      # Hero section with animated typing & quick actions
│   │   ├── Leadership.jsx                # IEEE AESS, Bitgenix, and NSS volunteer roles
│   │   ├── Navbar.jsx                    # Responsive glass navigation bar & recruiter button
│   │   ├── ProjectIllustrations.jsx      # High-fidelity SVG technical block diagrams
│   │   ├── ProjectModal.jsx              # Project architecture & metrics modal
│   │   ├── Projects.jsx                  # Filterable project showcase grid
│   │   ├── RecruiterQuickView.jsx        # Single-scan executive candidate drawer
│   │   ├── ScrollProgress.jsx            # Top hardware bus scroll progress meter
│   │   ├── Skills.jsx                    # Grouped technical competencies (no fake ratings)
│   │   ├── SocialIcons.jsx               # Vector SVG icons for LinkedIn and GitHub
│   │   └── TechnicalInterests.jsx        # 8 separate technical focus domain cards
│   ├── data/
│   │   └── portfolioData.js              # Centralized data model with verified facts
│   ├── App.jsx                           # Application root with theme state management
│   ├── index.css                         # Tailwind base directives, custom scrollbars & glass styling
│   └── main.jsx                          # React DOM initialization
├── index.html                            # Semantic HTML root, SEO metadata & Google Fonts
├── package.json                          # Project scripts and dependencies
├── tailwind.config.js                    # Custom color palettes, animations, and font families
├── vite.config.js                        # Vite build configuration
├── run_tests_and_capture.py              # Automated 28-test Playwright suite & screenshot capture
└── generate_documentation_docx.py        # Automated .docx documentation builder
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: v18.0.0 or higher (v24.22.0 tested)
- **npm**: v9.0.0 or higher (v11.19.1 tested)

### 1. Installation

Clone or open the project folder in your terminal:
```bash
cd WAD_website_final
npm install
```

### 2. Running Locally (Development Mode)

Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173
```

### 3. Creating a Production Build

To build the optimized, production-ready static assets:
```bash
npm run build
```
Compiled artifacts will be generated in the `dist/` directory.

### 4. Previewing the Production Build

To locally test the production build:
```bash
npm run preview
```

---

## 🧪 Testing Suite Execution

The repository includes an automated end-to-end test runner built with **Playwright**:
```bash
# Ensure dev server is running, then in a separate terminal:
python run_tests_and_capture.py
```

### Test Results Summary:
- **Total Test Cases**: 28
- **Passed**: 28 (100%)
- **Failed**: 0 (0%)
- **Blocked**: 0 (0%)

Tests comprehensively validate HTTP status, SEO tags, headshot integrity, dynamic typing animations, resume download status (HTTP 200), external link security (`rel="noopener noreferrer"`), smooth navigation scrolling, technical skills categorization (absence of fake % bars), multi-category project filtering, modal dialog lifecycles, dark/light theme switching, and mobile viewport reflow (390 × 844 px).

---

## 🚢 Deployment Instructions

The static bundle in `dist/` can be deployed to any static hosting provider:

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder into Netlify Drop, or run:
npx netlify-cli deploy --prod --dir=dist
```

### GitHub Pages
1. Configure `base: '/WAD_website_final/'` in `vite.config.js`.
2. Run `npm run build`.
3. Push the `dist/` branch or configure GitHub Actions with `actions/deploy-pages`.

---

## 👤 Client Information & Attribution

- **Client**: Maithrayi S Viraktamath
- **Location**: Bengaluru, India
- **Institution**: NITTE Meenakshi Institute of Technology (NMIT)
- **Department**: Electronics and Communication Engineering (2023–2027)
- **Email**: [maithrayi2810@gmail.com](mailto:maithrayi2810@gmail.com)
- **LinkedIn**: [linkedin.com/in/maithrayi-s-viraktamath-88a5612a1/](https://www.linkedin.com/in/maithrayi-s-viraktamath-88a5612a1/)
- **GitHub**: [github.com/maithrayi2810](https://github.com/maithrayi2810)

---

## 📄 License & Confidentiality

Developed for academic presentation and professional recruitment. All resume data and credentials verified against official client records.
