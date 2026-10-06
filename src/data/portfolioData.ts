export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Full-Stack" | "AI & ML" | "Systems";
  description: string;
  longDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  architecturePoints: string[];
  liveUrl?: string;
  apiUrl?: string;
  githubUrl: string;
  screenshots?: string[];
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  highlights: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  location: string;
  details?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badgeText?: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: "Advanced" | "Proficient" | "Familiar" }[];
}

export const PERSONAL_INFO = {
  name: "Dhruv Panwar",
  role: "Full-Stack Engineer & AI Systems Developer",
  status: "Available for Full-Time SDE & Engineering Roles",
  email: "dhruvspanwar12@gmail.com",
  phone: "+91 79903 03391",
  location: "Vellore / Ahmedabad, India",
  college: "Vellore Institute of Technology (VIT)",
  degree: "B.Tech in Computer Science Engineering (E-Commerce Technology)",
  cgpa: "8.16 / 10",
  graduationYear: "2027",
  github: "https://github.com/Dhruv-Panwar042",
  linkedin: "https://www.linkedin.com/in/dhruv-panwar-159b08289/",
  leetcode: "https://leetcode.com/u/DhruvPanwar",
  codeforces: "https://codeforces.com/profile/dhruvspanwar12",
  resumeUrl: "/Dhruv_Panwar_Resume.pdf",
  bio: "Final-year Computer Science undergraduate at VIT specializing in robust full-stack architectures, low-latency AI microservices, and high-concurrency systems. Experienced in shipping production-grade applications with race-safe database transactions, memory-efficient vector search pipelines, and automated multi-tier LLM fallback routing."
};

export const QUICK_STATS = [
  { label: "DSA Problems Solved", value: "400+", subtext: "LeetCode & Codeforces" },
  { label: "Deployed Systems", value: "3+", subtext: "Live on Vercel & Render" },
  { label: "Memory Optimization", value: "53%", subtext: "RAM slashed in vector search" },
  { label: "Payload Reduction", value: "97%", subtext: "Client-side canvas compression" },
  { label: "Academic CGPA", value: "8.16", subtext: "VIT Computer Science (2027)" }
];

export const PROJECTS: Project[] = [
  {
    id: "healthcare-manager",
    title: "Healthcare Appointment & Follow-up Manager",
    subtitle: "Distributed Clinical Booking & AI Triage Platform",
    category: "Full-Stack",
    description: "Production clinic platform featuring race-safe slot holds, doctor schedule management, automated email/Google Calendar sync, and LLM-powered patient pre-visit triage.",
    longDescription: "A multi-portal clinical management system engineered to solve high-concurrency doctor scheduling and post-visit communications. Designed with database-level concurrency controls to eliminate double-booking race conditions during simultaneous patient checkouts.",
    tags: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "React", "Tailwind CSS", "Groq LLM", "node-cron", "Google Calendar API"],
    metrics: [
      { label: "Concurrency Control", value: "Race-Safe" },
      { label: "AI Pre-Visit Triage", value: "<1.2s" },
      { label: "Worker Tasks", value: "3 Cron Jobs" }
    ],
    keyFeatures: [
      "Role-based portals with secure JWT auth for Patients, Doctors, and Clinic Administrators.",
      "Race-safe slot hold mechanism utilizing database transactions to prevent double-booking conflicts during simultaneous booking sessions.",
      "Instant pre-visit clinical urgency analysis powered by Groq LLM analyzing symptom descriptions for incoming doctors.",
      "Automated post-visit translation converting physician prescriptions and notes into patient-friendly plain-English care plans.",
      "Background worker pipeline (node-cron) with exponential retry queue for transactional email dispatch and Google Calendar event sync."
    ],
    architecturePoints: [
      "PostgreSQL with Prisma schema enforcing slot-uniqueness constraints and atomic hold releases.",
      "Decoupled background worker architecture preventing slow SMTP/Calendar network calls from blocking API response cycles.",
      "Modular system design documented with comprehensive concurrency threat modeling and recovery workflows."
    ],
    liveUrl: "https://healthcare-appointment-manager-sooty.vercel.app",
    apiUrl: "https://healthcare-appointment-backend-s6qe.onrender.com/api/health",
    githubUrl: "https://github.com/Dhruv-Panwar042/healthcare-appointment-manager",
    screenshots: [
      "/projects/01-login.png",
      "/projects/03-patient-booking.png",
      "/projects/04-appointment-confirmed-urgency.png",
      "/projects/05-doctor-previsit-summary.png",
      "/projects/06-patient-postvisit-summary.png"
    ],
    featured: true
  },
  {
    id: "docuvault-ai",
    title: "DocuVault AI: Grounded Multi-Doc RAG Microservice",
    subtitle: "High-Performance Vector Retrieval & LLM Synthesis",
    category: "AI & ML",
    description: "Decoupled RAG microservice with in-memory FAISS indexing, zero-cost local ONNX embeddings, and transparent L2 distance confidence tiers engineered for memory-constrained cloud environments.",
    longDescription: "Engineered specifically for low-overhead container environments (sub-256MB RAM ceilings). Replaced heavy PyTorch embedding pipelines with local ONNX Runtime inference, cutting RAM consumption by 53% while delivering sub-150ms semantic search over ingested PDF documents.",
    tags: ["Python", "FastAPI", "FAISS-CPU", "FastEmbed (ONNX)", "LangChain", "Gemini 2.5 Flash", "Docker", "ReportLab"],
    metrics: [
      { label: "Peak RAM Slashed", value: "53%" },
      { label: "Embedding API Cost", value: "$0.00 (Local ONNX)" },
      { label: "Retrieval Latency", value: "<150ms" }
    ],
    keyFeatures: [
      "Local ONNX CPU inference (all-MiniLM-L6-v2 via FastEmbed) generating 384-dimensional dense vectors with zero third-party API costs.",
      "Direct in-memory RAM document ingestion from byte buffers (io.BytesIO), completely eliminating temporary disk I/O bottlenecks and filesystem lock issues.",
      "L2 similarity distance confidence rating categorizing answers into High (<=0.5), Medium (<=1.0), and Low tiers.",
      "Sequential multi-model fallback routing (Gemini 2.5 Flash -> Flash Lite -> Flash Latest) ensuring zero downtime during API rate limits (HTTP 429).",
      "Dynamic chunk inspection inspector UI tab and automated ReportLab PDF intelligence brief generation with citation audit trails."
    ],
    architecturePoints: [
      "1,000-character chunking with 200-character semantic overlaps optimized for dense recall.",
      "Containerized microservice architecture passing 100% automated CI test suites.",
      "Decoupled REST API exposing chunk inspect, document upload, query, and executive briefing endpoints."
    ],
    liveUrl: "https://docuvault-ai-ah83.onrender.com",
    apiUrl: "https://docuvault-ai-ah83.onrender.com/docs",
    githubUrl: "https://github.com/Dhruv-Panwar042/DocuVault-AI",
    screenshots: [
      "/projects/screenshot1.png",
      "/projects/screenshot2.png",
      "/projects/screenshot3.png",
      "/projects/screenshot4.png"
    ],
    featured: true
  },
  {
    id: "visionmind-ai",
    title: "VisionMind AI: Intelligent Vision & Reasoning Service",
    subtitle: "Edge Object Detection + Multimodal LLM Pipeline",
    category: "Systems",
    description: "Containerized computer vision microservice pairing local YOLOv8n object detection with Google Gemini multimodal reasoning, featuring client-side canvas compression that cut latency by 96%.",
    longDescription: "Pairs high-speed local computer vision inference across 80 COCO classes with cloud multimodal LLMs for deep scene interpretation. Solved cloud cold-start and payload bottlenecks on shared 0.5 vCPU hosts by pioneering client-side canvas downscaling.",
    tags: ["Python", "FastAPI", "YOLOv8n", "Docker", "Google Gemini Vision", "OpenCV", "ReportLab", "HTML5 Canvas"],
    metrics: [
      { label: "Payload Reduced", value: "97%" },
      { label: "End-to-End Latency", value: "35s → 1.2s" },
      { label: "Object Classes", value: "80 COCO" }
    ],
    keyFeatures: [
      "Sub-300ms local CPU inference over 80 classes at 640x640 resolution via Ultralytics YOLOv8n.",
      "Client-side HTML5 canvas downscaling slashing raw ~4MB file uploads to ~120KB (97% bandwidth drop), reducing end-to-end response time from ~35s to ~1.2s.",
      "Gemini visual reasoning with sequential fallback routing to guarantee uptime against rate limits.",
      "Spatial density heatmaps and programmatic ReportLab PDF inspection reports generated in under 600ms.",
      "12 REST endpoints with interactive Swagger/OpenAPI documentation and latency profiler headers."
    ],
    architecturePoints: [
      "Modular pipeline separating lightweight detection from heavy multimodal LLM reasoning.",
      "Docker multi-stage container optimization for seamless deployment on 512MB RAM hosts.",
      "Latency profiling middleware tracking process time on every incoming multipart payload."
    ],
    liveUrl: "https://image-recognition-model-9l2e.onrender.com",
    apiUrl: "https://image-recognition-model-9l2e.onrender.com/docs",
    githubUrl: "https://github.com/Dhruv-Panwar042/VisionMind-AI",
    featured: true
  },
  {
    id: "fact-knowledge-layer",
    title: "Fact Knowledge Layer",
    subtitle: "Automated Cross-Document Fact Extraction & Reconciliation",
    category: "AI & ML",
    description: "Generalized fact-checking and knowledge graph engine extracting structured claims from enterprise financial PDFs, verbatim source grounding, and automated cross-document reconciliation.",
    longDescription: "Developed for Superjoin's Engineering Intern evaluation. Ingests earnings presentations and annual reports, reconciles cross-document claims into Corroborations, Contradictions, and Contextual Reconciliations, and supports both dynamic graph evaluation and ground-truth benchmark modes.",
    tags: ["Python", "FastAPI", "SQLite", "Gemini 2.5 Flash", "Knowledge Graphs", "PDF Parsing"],
    metrics: [
      { label: "Claim Grounding", value: "100% Verbatim" },
      { label: "Modes Supported", value: "Dynamic & Benchmark" },
      { label: "Evaluation Cases", value: "4 Distinct Types" }
    ],
    keyFeatures: [
      "Verbatim source grounding attributing every extracted financial claim to exact page and sentence references.",
      "Automated cross-document reconciliation detecting contradictory shipment volumes, revenue metrics, and growth figures.",
      "Dual evaluation modes: Dynamic Graph Mode deriving cases from live SQLite graph, and Benchmark Mode for rapid zero-quota testing.",
      "Interactive Swagger REST endpoints and clean visual dashboard for relationship inspection."
    ],
    architecturePoints: [
      "SQLite-backed relationship graph storing bidirectional corroborations and contextual reconciliations.",
      "Structured JSON schema validation enforcing strict claim extraction boundaries."
    ],
    githubUrl: "https://github.com/Dhruv-Panwar042/fact-knowledge-layer",
    featured: false
  },
  {
    id: "docshield",
    title: "DocShield — Document Fraud & Forensic Detector",
    subtitle: "Cyber File Integrity & Financial Content Anomaly Analysis",
    category: "Systems",
    description: "Dual-engine document forensics system combining cryptographic and metadata anomaly checks with rule-based financial/tax validation and annotated PDF reporting.",
    longDescription: "A full-spectrum document validation pipeline built to catch manipulated digital documents. Runs simultaneous cyber checks (file hashes, PDF streams, JavaScript injections) alongside deep content audits (PAN/IFSC validation, date chronological consistency, balance sheet reconciliations).",
    tags: ["Python", "Flask", "spaCy", "PDF Security", "Cyber Forensics", "HTML5/CSS"],
    metrics: [
      { label: "Scan Modes", value: "Dual Engine" },
      { label: "Integrity Checks", value: "Cryptographic" },
      { label: "Format", value: "Annotated PDF" }
    ],
    keyFeatures: [
      "Dual parallel analysis: Cyber integrity scan + financial content fraud scan.",
      "Cyber checks detecting suspicious PDF streams, hidden metadata revisions, and embedded JavaScript.",
      "Entity and regulatory validation verifying Indian tax identifiers (PAN, IFSC) and ledger calculations.",
      "Automated report generation with flagged sections visibly highlighted directly in the output PDF."
    ],
    architecturePoints: [
      "Decoupled cyber detector module and fraud rule validation engine.",
      "Lightweight web interface allowing rapid drag-and-drop document audits."
    ],
    githubUrl: "https://github.com/Dhruv-Panwar042/PaperTrail-AI",
    featured: false
  },
  {
    id: "smart-retail-ai",
    title: "Smart Retail & Customer Intelligence Suite",
    subtitle: "Computer Vision & Sentiment Analytics Gateway",
    category: "AI & ML",
    description: "Integrated e-commerce & retail intelligence gateway featuring returning-customer facial recognition, product classification (MobileNetV2), and sentiment analysis.",
    longDescription: "Unified FastAPI gateway connecting multiple AI micro-modules for physical and online retail analytics. Integrates facial recognition for VIP customer tracking, MobileNetV2 image classification for catalog automation, and sentiment analysis for feedback categorization.",
    tags: ["Python", "FastAPI", "OpenCV", "MobileNetV2", "NLP", "Docker"],
    metrics: [
      { label: "Model Modules", value: "3 Subsystems" },
      { label: "Architecture", value: "Microservice Gateway" },
      { label: "Security", value: "API Key Auth" }
    ],
    keyFeatures: [
      "Face recognition pipeline detecting returning customers for personalized store experiences.",
      "Computer vision classification categorizing product images with confidence thresholds.",
      "NLP sentiment analysis parsing user reviews into actionable positive/negative sentiment insights.",
      "Hybrid FAQ chatbot routing common questions using combined rule and ML matching."
    ],
    architecturePoints: [
      "Single API gateway pattern with modular router segregation (vision, nlp, chatbot).",
      "API-key authenticated routes with Swagger and ReDoc interactive documentation."
    ],
    githubUrl: "https://github.com/Dhruv-Panwar042/smart-retail-ai",
    featured: false
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "MPOnline Limited (TCS Joint Venture)",
    role: "Software Engineering Intern",
    duration: "May 2026 – Jul 2026",
    location: "Remote",
    type: "Internship",
    highlights: [
      "Applied agile software engineering methodologies across enterprise module refactoring and RESTful API endpoints.",
      "Maintained version control integrity across 15+ Git feature branches, participating in peer code reviews and PR workflows.",
      "Engineered automated unit testing suites validating core business logic, achieving a 95%+ test pass rate across critical services."
    ],
    skills: ["REST APIs", "Agile", "Git & GitHub", "Unit Testing", "System Refactoring", "Python"]
  },
  {
    company: "MPOnline Limited (TCS Joint Venture)",
    role: "AI / ML Intern",
    duration: "May 2026 – Jul 2026",
    location: "Remote",
    type: "Internship",
    highlights: [
      "Engineered automated data preprocessing, anomaly detection, and feature extraction pipelines across structured tabular datasets exceeding 10,000+ records.",
      "Evaluated machine learning model performance across Precision, Recall, and F1-score metrics to establish high-accuracy predictive baselines.",
      "Collaborated with cross-functional engineering teams to validate model outputs against production enterprise requirements."
    ],
    skills: ["Machine Learning", "Data Pipelines", "Feature Engineering", "Pandas", "Scikit-Learn", "Model Evaluation"]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    institution: "Vellore Institute of Technology (VIT)",
    degree: "B.Tech in Computer Science Engineering (E-Commerce Technology)",
    duration: "2023 – 2027",
    grade: "CGPA: 8.16 / 10",
    location: "Vellore, Tamil Nadu",
    details: "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, Computer Networks, Software Engineering, Cloud Computing."
  },
  {
    institution: "SS Children’s Academy (CBSE)",
    degree: "Class XII (Senior Secondary) — Physics, Chemistry, Mathematics",
    duration: "2022 – 2023",
    grade: "83.8%",
    location: "Moradabad, Uttar Pradesh"
  },
  {
    institution: "Podar International School (CBSE)",
    degree: "Class X (Secondary Education)",
    duration: "2021 – 2022",
    grade: "88.4%",
    location: "Ahmedabad, Gujarat"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Deep Learning - IIT Ropar",
    issuer: "NPTEL (Ministry of Education, Govt. of India)",
    date: "Issued May 2025",
    credentialId: "NPTEL25CS21S940400141",
    badgeText: "IIT Ropar • NPTEL",
    description: "Rigorous coursework and examination covering neural network architectures, backpropagation, CNNs, RNNs, optimization mechanics, and practical deep learning paradigms."
  },
  {
    title: "Industrial IoT Markets and Security",
    issuer: "United Latino Students Association",
    date: "Issued Dec 2024",
    credentialId: "4ZHCYA3H0R0T",
    badgeText: "IoT & Security",
    description: "Specialized certification evaluating Industrial IoT architectures, connected embedded security, protocols, and market vulnerabilities."
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "October 2025",
    badgeText: "OCI Generative AI",
    description: "Enterprise proficiency in Large Language Models (LLMs), prompt engineering, fine-tuning, RAG architectures, and OCI Generative AI service deployment."
  },
  {
    title: "NPTEL — Marketing Management II",
    issuer: "IIT / NPTEL (Ministry of Education, Govt. of India)",
    date: "2025",
    badgeText: "Top 2% (National Elite)",
    description: "Achieved 96% score, securing Elite + Gold rank in the Top 2nd percentile across India."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Fundamentals",
    skills: [
      { name: "C++ (STL, OOP)", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "SQL (PostgreSQL)", level: "Proficient" },
      { name: "JavaScript / TypeScript", level: "Proficient" },
      { name: "Data Structures & Algorithms", level: "Advanced" },
      { name: "Operating Systems & DBMS", level: "Proficient" }
    ]
  },
  {
    category: "Backend & Systems Engineering",
    skills: [
      { name: "FastAPI", level: "Advanced" },
      { name: "Node.js & Express", level: "Proficient" },
      { name: "PostgreSQL & Prisma", level: "Proficient" },
      { name: "Concurrency & Slot Locking", level: "Proficient" },
      { name: "RESTful API Architecture", level: "Advanced" },
      { name: "Docker Containerization", level: "Proficient" }
    ]
  },
  {
    category: "AI, RAG & Vector Search",
    skills: [
      { name: "FastEmbed (Local ONNX)", level: "Advanced" },
      { name: "FAISS Vector Indexing", level: "Advanced" },
      { name: "LangChain & RAG Pipelines", level: "Proficient" },
      { name: "Google Gemini & Groq APIs", level: "Advanced" },
      { name: "YOLOv8 & OpenCV", level: "Proficient" },
      { name: "Sequential Fallback Routing", level: "Advanced" }
    ]
  },
  {
    category: "Frontend & Developer Tooling",
    skills: [
      { name: "Next.js & React", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Git & GitHub Workflows", level: "Advanced" },
      { name: "ReportLab PDF Generation", level: "Proficient" },
      { name: "Linux / WSL", level: "Proficient" },
      { name: "Postman & Swagger/OpenAPI", level: "Advanced" }
    ]
  }
];

export const DSA_HIGHLIGHTS = {
  totalSolved: "400+",
  platforms: [
    { name: "LeetCode", solved: "400+", profileUrl: "https://leetcode.com/u/DhruvPanwar", focus: "Graphs, DP, Trees, Two Pointers" },
    { name: "Codeforces", solved: "87+", profileUrl: "https://codeforces.com/profile/dhruvspanwar12", focus: "Contest Problem Solving & Speed" },
    { name: "CodeChef", solved: "Active", profileUrl: "https://leetcode.com/u/DhruvPanwar", focus: "Algorithmic Challenges" }
  ],
  coreConcepts: [
    { title: "Dynamic Programming", desc: "Optimal substructure, memoization, 1D/2D state transitions, knapsack variations" },
    { title: "Graphs & Trees", desc: "BFS/DFS traversals, Dijkstra, Topological sort, LCA, Disjoint Set Union (DSU)" },
    { title: "Binary Search & Sliding Window", desc: "Search space reduction, monotonic predicates, subarray optimizations" },
    { title: "Low-Level C++ Concurrency", desc: "Memory efficiency, asymptotic time/space bounds, cache-friendly data layout" }
  ]
};
