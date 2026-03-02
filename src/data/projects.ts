import { Project } from "~/types/data";

export const projects: Project[] = [
  {
    id: "smartprep",
    title: "SmartPrep",
    description:
      "An interview preparation and coding practice platform inspired by LeetCode. Supports multi-language code execution, automated test case validation, and real-time feedback to help users practice problem-solving in a structured way.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "Google Gemini API",
    ],
    liveUrl: "https://smart-prep-azure.vercel.app/",
    image: "/projects/smartprep.jpg",
    featured: true,
    highlights: [
      {
        icon: "Code",
        label: "Multi-language Execution",
        detail: "Supports C++, Python, and JavaScript with automated test case checking",
      },
      {
        icon: "Server",
        label: "Backend-heavy Design",
        detail: "15+ REST APIs for code submission, polling, and result validation",
      },
      {
        icon: "Zap",
        label: "Performance Optimized",
        detail: "Reduced average API response time by ~25–35% through backend optimizations",
      },
      {
        icon: "Brain",
        label: "AI Assistance",
        detail: "Integrated AI hints and feedback to help users unblock logically",
      },
    ],
  },

  {
    id: "resumelens",
    title: "ResumeLens",
    description:
      "An ATS-style resume analysis platform that evaluates resumes, assigns scores, and provides structured improvement feedback. Designed to reduce manual resume review effort for job seekers.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "PDF Parsing",
      "Google Gemini API",
    ],
    liveUrl: "https://resumelensonline.vercel.app/",
    image: "/projects/resumelens.jpg",
    featured: true,
    highlights: [
      {
        icon: "FileSearch",
        label: "ATS-Oriented Analysis",
        detail: "Resume scoring and keyword-based evaluation logic",
      },
      {
        icon: "Settings",
        label: "Backend-Centric",
        detail: "APIs for file upload, scoring, and report generation",
      },
      {
        icon: "Clock",
        label: "Async Optimization",
        detail: "Improved AI feedback response time by optimizing async workflows",
      },
      {
        icon: "CheckCircle",
        label: "Practical Output",
        detail: "Clear, actionable feedback instead of generic suggestions",
      },
    ],
  },

  {
    id: "coming-soon",
    title: "More Projects in Progress",
    description:
      "Currently working on additional backend-focused and interview-oriented projects to deepen system design and problem-solving skills.",
    techStack: ["Java", "Node.js", "APIs", "System Design"],
    image: "/projects/placeholder.jpg",
    featured: false,
    disabled: true,
  },
];