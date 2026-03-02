import { PersonalInfo } from "~/types/data";

export const personalInfo: PersonalInfo = {
  name: "Pranav Kharote",
  title: "Full Stack Developer",
  tagline: "Building practical, Backend-focused web applications",

  bio: "I'm a computer science student and aspiring software engineer focused on building real-world, problem-driven web applications. I’ve developed projects like SmartPrep, an interview preparation and coding practice platform, and ResumeLens, an AI-powered resume analyzer. I enjoy working with React, Node.js, and modern backend systems, and I’m continuously improving my DSA, system design, and production-level development skills.",

  email: "pranavkharote2005@gmail.com", // update if different
  location: "India",

  profileImage: "/profile.jpg",
  resumeUrl: "/resume.pdf",

  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/pranavkharote",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/pranavkharote",
      icon: "linkedin",
    },
  ],
};