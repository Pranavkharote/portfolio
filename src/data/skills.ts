import { SkillCategory } from "~/types/data";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons";

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: `${DI}/java/java-original.svg` },
      { name: "JavaScript", icon: `${DI}/javascript/javascript-original.svg` },
      { name: "SQL", icon: `${DI}/mysql/mysql-original.svg` },
    ],
  },

  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: `${DI}/react/react-original.svg` },
      { name: "HTML5", icon: `${DI}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${DI}/css3/css3-original.svg` },
      { name: "Tailwind CSS", icon: `${DI}/tailwindcss/tailwindcss-original.svg` },
    ],
  },

  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      { name: "Express.js", icon: `${DI}/express/express-original.svg` },
    ],
  },

  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: `${DI}/mongodb/mongodb-original.svg` },
      { name: "MySQL", icon: `${DI}/mysql/mysql-original.svg` },
    ],
  },

  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: `${DI}/git/git-original.svg` },
      { name: "GitHub", icon: `${DI}/github/github-original.svg` },
      { name: "Postman", icon: `${DI}/postman/postman-original.svg` },
      { name: "Linux", icon: `${DI}/linux/linux-original.svg` },
      { name: "Vercel", icon: `${DI}/vercel/vercel-original.svg` },
    ],
  },
];