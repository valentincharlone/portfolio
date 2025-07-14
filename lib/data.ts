import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    company: "Tech Company",
    description:
      "Developed responsive web applications using React, Next.js, and TypeScript. Collaborated with design teams to implement pixel-perfect UI components.",
    icon: "💼",
    date: "2022 - Present",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Junior Web Developer",
    company: "Digital Agency",
    description:
      "Built interactive websites and landing pages. Worked with clients to understand requirements and deliver high-quality solutions.",
    icon: "🚀",
    date: "2021 - 2022",
    technologies: ["JavaScript", "HTML", "CSS", "WordPress"],
  },
  {
    title: "Freelance Developer",
    company: "Self-employed",
    description:
      "Created custom websites for small businesses. Managed projects from conception to deployment, ensuring client satisfaction.",
    icon: "💻",
    date: "2020 - 2021",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Prisma",
  "CSS",
  "Sass",
  "Tailwind",
  "Framer Motion",
  "GSAP",
  "Git",
] as const;
