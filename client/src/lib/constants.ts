import { SiReact, SiPython, SiNotion } from "react-icons/si";
import { type IconType } from "react-icons";

interface Project {
  title: string;
  description: string;
  tech: string[];
  Icon: IconType;
  github: string | null;
  live: string | null;
}

export const PROJECTS: Project[] = [
  {
    title: "Next.js Portfolio Website",
    description: "A single-page application portfolio website built using Next.js, TailwindCSS, and shadcn/ui components.",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "shadcn/ui"],
    Icon: SiReact,
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.com",
  },
  {
    title: "LinkedIn Job Search Automation",
    description: "A comprehensive project that automates LinkedIn job searches, scrapes job details, analyzes job descriptions using GPT, and generates tailored resumes and cover letters.",
    tech: ["Python", "Selenium", "BeautifulSoup", "pandas", "GPT", "DocX"],
    Icon: SiPython,
    github: "https://github.com/yourusername/linkedin-automation",
    live: null,
  },
  {
    title: "TickTick-Notion Two-Way Sync",
    description: "A Python-based application that enables two-way synchronization between TickTick tasks and Notion databases, allowing seamless task management across both platforms.",
    tech: ["Python", "TickTick API", "Notion API", "aiohttp", "asyncio"],
    Icon: SiNotion,
    github: "https://github.com/yourusername/ticktick-notion-sync",
    live: null,
  },
];

export const SKILLS = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Node.js",
  "Storybook",
  "Accessibility",
  "HTML & CSS",
  "TailwindCSS",
  "Git & GitHub",
];

export const EXPERIENCE = [
  {
    title: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    period: "2024 — PRESENT",
    responsibilities: [
      "Build and maintain critical components used to construct Klaviyo's frontend",
      "Work closely with cross-functional teams on implementing accessibility best practices",
      "Develop and maintain accessible UI components using React and TypeScript",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Storybook",
      "Accessibility",
      "HTML/CSS",
      "Git"
    ]
  },
];