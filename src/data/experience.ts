import { Experience } from "~/types/data";

export const experience: Experience[] = [
  {
    id: "exp-itux",
    company: "iTUX Solutions",
    role: "Full Stack Developer Intern",
    period: "Nov 2025 – Feb 2026",
    location: "Remote",
    website: "https://ituxsolutions.com",
    highlights: [
      "Built and enhanced 5+ backend APIs for a production e-commerce pricing system supporting checkout workflows",
      "Implemented dynamic cart price calculation logic based on business rules and user location to ensure accurate order totals across regions",
      "Tracked down and fixed a critical pricing bug during development, preventing incorrect checkout amounts from reaching live users",
    ],
    techUsed: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST APIs",
      "Nest.js"
    ],
  },
];