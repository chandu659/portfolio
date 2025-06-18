import { SiReact, SiPython, SiFastapi, SiTypescript } from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import { type IconType } from "react-icons";

interface ExperienceProject {
  name: string;
  description: string;
  link: string | null;
  logo?: string;
  responsibilities?: string[];
  skills?: string[];
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  Icon: IconType;
  github: string | null;
  live: string | null;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  skills: string[];
  projects?: ExperienceProject[];
}

export const PROJECTS: Project[] = [];

export const SKILLS = [
  "AI/ML: LLMs (GPT-4, Claude, Mistral, Llama)",
  "RAG Systems, PyTorch, Sentence Transformers",
  "Vector Databases (FAISS, Superlinked)",
  "Prompt Engineering, Agentic AI, NLP",
  "JavaScript (ES6+), TypeScript",
  "React, Next.js, TailwindCSS",
  "Node.js, Python (Flask, FastAPI)",
  "RESTful APIs, GraphQL",
  "AWS (EC2, IAM, API Gateway, S3, Lambda)",
  "Docker, Kubernetes, CI/CD",
  "PostgreSQL, MongoDB, SQL Alchemy ORM",
  "Vector Search, Semantic Indexing"
];

export const EXPERIENCE: Experience[] = [
  {
    title: "AI Software Developer",
    company: "Metis Analytics (Startup)",
    period: "Jan 2025 — PRESENT",
    responsibilities: [
      "Led development of multiple AI and IoT projects with a focus on agricultural technology and data management systems",
      "Designed and implemented scalable, production-ready solutions using modern tech stacks and best practices",
      "Collaborated with cross-functional teams to deliver high-impact projects for diverse clients and industries"
    ],
    skills: [
      "Flask",
      "WebSocket",
      "IoT",
      "Embedded Systems",
      "JavaScript",
      "Python",
      "Real-time Systems",
      "LLMs",
      "Prompt Engineering",
      "RAG Systems",
      "FastAPI",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Vector Databases",
      "Data Analytics"
    ],
    projects: [
      {
        name: "AutoMixer",
        description: "IoT-based agricultural spray mixing control system with real-time monitoring and remote access",
        link: "https://page.agrispraydrones.com/automixer",
        logo: "/agri.jfif",
        responsibilities: [
          "Led development of AI-powered agricultural technology solutions for precision farming and autonomous systems",
          "Designed and implemented IoT control systems for agricultural equipment with real-time monitoring capabilities",
          "Collaborated with cross-functional teams to integrate AI solutions with hardware components for smart agriculture",
          "Engineered a hybrid embedded control system (AutoMixer) for agricultural spray mixing enhanced with Flask, WebSocket, and Python threading",
          "Developed a responsive, lightweight WCAG-compliant web interface to control hardware using JavaScript ES6+, CSS, HTML, and event-driven architecture",
          "Utilized Flask-SocketIO to establish bidirectional communication channels for real-time system monitoring and control between web interface and hardware"
        ],
        skills: [
          "Flask",
          "WebSocket",
          "IoT",
          "Embedded Systems",
          "JavaScript",
          "Python",
          "Real-time Systems"
        ]
      },
      {
        name: "Eko360 - Data Science Nigeria",
        description: "AI-powered data management and analytics platform for Lagos State ministries",
        link: "https://eko360.ng/",
        logo: "/dns.png",
        responsibilities: [
          "Architected and developed Eko360, an AI-powered data management and analytics platform that transforms governance and public service delivery across nine Lagos State ministries in Nigeria",
          "Built end-to-end solution utilizing advanced RAG systems, agentic AI workflows, and microservice architecture to enable real-time decision-making, pattern recognition, and forecasting capabilities for evidence-driven policymaking",
          "Developed prompt engineering techniques for llama self-hosted models that reduced token usage while maintaining response quality",
          "Prototyped agentic AI applications with various LLMs (GPT-4, Claude, Mistral), incorporating multi-tool capabilities and LangChain frameworks",
          "Engineered RAG-based document processing system with Python and PyTorch achieving 92% retrieval accuracy",
          "Designed and implemented a scalable FastAPI and Python backend for document processing with Sentence Transformers",
          "Led design and implemented session-based agentic application with microservice architecture utilizing Next.js, React, TypeScript",
          "Designed and managed PostgreSQL database schema with vector storage via Superlinked and FAISS for efficient semantic search"
        ],
        skills: [
          "LLMs",
          "Prompt Engineering",
          "RAG Systems",
          "Python",
          "FastAPI",
          "Next.js",
          "React",
          "TypeScript",
          "PostgreSQL",
          "Vector Databases",
          "Data Analytics"
        ]
      }
    ]
  },
  {
    title: "Software Developer",
    company: "Neighborhood Innovation Center (Non-profit)",
    period: "Dec 2024 — PRESENT",
    responsibilities: [
      "Developed Microsoft Copilot knowledge-based agent integrated with Microsoft 365, increasing community engagement by 45%",
      "Implemented ETL pipelines for processing audio files of various formats, reducing manual audio cleaning by 60%",
      "Architected auto documentation software using Whisper (STT) model hosted on client AWS EC2 with API Gateway",
      "Developed AI full-stack application on AWS EC2 using JavaScript, Next.js, and Node.js, integrated 400+ AI security cameras",
      "Built role-based access control (RBAC) with encrypted data transmission and secure API endpoints",
      "Established GitHub Actions CI/CD pipeline with automated testing and deployment, reducing release cycle time by 60%"
    ],
    skills: [
      "AWS EC2",
      "Next.js",
      "Node.js",
      "React.js",
      "Tailwind CSS",
      "JWT",
      "GraphQL",
      "CI/CD",
      "PostgreSQL",
      "Agile"
    ],
    projects: [
      {
        name: "ConnectedDutchtown Dashboard",
        description: "Interactive dashboard for community data visualization and resource management",
        link: "https://connecteddutchtown.org",
        logo: "/dtcid.png",
        responsibilities: [
          "Developed AI full-stack application on AWS EC2 using JavaScript, Next.js, and Node.js, integrated 400+ AI security cameras",
          "Built role-based access control (RBAC) with encrypted data transmission and secure API endpoints",
          "Created interactive data visualization dashboard for community resource management",
          "Implemented real-time alerts and notifications system for community safety",
          "Designed and optimized PostgreSQL database schema for efficient geospatial queries"
        ],
        skills: [
          "Next.js",
          "Node.js",
          "AWS EC2",
          "Google Maps API",
          "JWT",
          "GraphQL",
          "PostgreSQL",
          "Real-time Data"
        ]
      }
    ]
  },
  {
    title: "Software Developer",
    company: "Gamyam (Startup)",
    period: "June 2024 — Dec 2024",
    responsibilities: [
      "Developed a virtualized list component with React Window that reduced rendering time by 82% for large data sets",
      "Optimized frontend performance through code splitting and lazy loading techniques, reducing initial bundle size by 62%",
      "Developed a microservices architecture using TypeScript/Node.js and integrated external services for real-time notifications",
      "Engineered MongoDB data architecture using Mongoose ODM, implementing custom schemas and middleware validation"
    ],
    skills: [
      "React",
      "Performance Optimization",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Azure DevOps",
      "Microservices"
    ]
  },
  {
    title: "Application Developer",
    company: "Saint Louis University",
    period: "Jun 2023 — May 2024",
    responsibilities: [
      "Built reusable React component libraries that reduced UI development time by 40% across multiple university applications",
      "Conducted 30+ end-to-end test cases using Cypress and Mocha for web app components",
      "Led code reviews and incident response protocols, resolving critical issues within SLA targets",
      "Developed SQL queries and designed tables, integrated PL/SQL procedures to automate camp audit reports and dashboards"
    ],
    skills: [
      "React",
      "Cypress",
      "Mocha",
      "SQL",
      "PL/SQL",
      "PostgreSQL",
      "MongoDB",
      "Notion"
    ]
  },
  {
    title: "Systems Engineer",
    company: "Tata Consultancy Services",
    period: "June 2021 — Dec 2022",
    responsibilities: [
      "Maintained enterprise service applications and debugged SAP java mappings in SAP CPI, PO enhancing data transfer",
      "Managed deployments of ERP applications on SAP Hana, providing smooth operation and scalability",
      "Deployed and updated CORS, Content Security Policies (CSP), and SSL/TLS certifications across client ERP systems",
      "Developed and managed a scalable API monitoring solution using Axway API Gateway, integrated with ELK Stack"
    ],
    skills: [
      "SAP",
      "ERP",
      "API Gateway",
      "ELK Stack",
      "ServiceNow",
      "Agile",
      "Security"
    ]
  }
];