import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import petSoft from "@/public/pet-soft.png";
import todoApp from "@/public/todo-app.png";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiPrisma,
  SiStrapi,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiFramer,
  SiGreensock,
  SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { ZustandIcon } from "@/icons/zustand-icon";

export const links = [
  {
    name: "nav.home",
    hash: "#home",
  },
  {
    name: "nav.about",
    hash: "#about",
  },
  {
    name: "nav.skills",
    hash: "#skills",
  },
  {
    name: "nav.experience",
    hash: "#experience",
  },
  {
    name: "nav.projects",
    hash: "#projects",
  },
  {
    name: "nav.contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front End Engineer",
    company: "TUXDI",
    description: "experience.description.tuxdi",
    date: "Abril 2023 - Julio 2025",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "SASS",
      "Tailwind",
      "React Admin",
      "Framer Motion",
      "GSAP",
      "Strapi",
      "Git",
      "GitLab",
      "GitHub",
    ],
  },
  {
    title: "Front End Engineer",
    company: "Freelance",
    description: "experience.description.freelance",
    date: "Julio 2022 - Presente",
    technologies: ["React", "Vite", "CSS", "JavaScript", "Hostinger", "GitHub"],
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description: "projects.description.corpcomment",
    tags: ["React", "TypeScript", "Zustand", "CSS", "Vite", "Vercel"],
    imageUrl: corpcommentImg,
    githubUrl: "https://github.com/valentincharlone/corp-comment",
    liveUrl: "https://corp-comment-cyan.vercel.app/",
  },
  {
    title: "TODO App",
    description: "projects.description.todoapp",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "Kinde Auth", "Vercel"],
    imageUrl: todoApp,
    githubUrl: "https://github.com/valentincharlone/soft-todo",
    liveUrl: "https://soft-todo.vercel.app/",
  },
  {
    title: "rmtDev",
    description: "projects.description.rmtdev",
    tags: ["React", "TypeScript", "React-Query", "CSS", "Vite", "Vercel"],
    imageUrl: rmtdevImg,
    githubUrl: "https://github.com/valentincharlone/remote-dev",
    liveUrl: "https://remote-dev-self.vercel.app/",
  },
  {
    title: "Pet Soft",
    description: "projects.description.petsoft",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Shadcn",
      "Prisma",
      "Stripe",
      "Vercel",
    ],
    imageUrl: petSoft,
    githubUrl: "https://github.com/valentincharlone/petsoft",
    liveUrl: "https://petsoft-blue.vercel.app/",
  },
];

export const skillsData: { name: string; icon: IconType | null }[] = [
  { name: "HTML", icon: SiHtml5 },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React Native", icon: SiReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Sass", icon: SiSass },
  { name: "CSS", icon: SiCss3 },
  { name: "Strapi", icon: SiStrapi },
  { name: "Prisma", icon: SiPrisma },
  { name: "Zustand", icon: ZustandIcon },
  { name: "Redux", icon: SiRedux },
  { name: "Framer Motion", icon: SiFramer },
  { name: "GSAP", icon: SiGreensock },
  { name: "Git", icon: SiGit },
] as const;
