import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
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
    description:
      "Implementé exitosamente features clave como 'Entidades' y 'Benefits' en el producto Artic CMS. Desarrollé la nueva landing empresarial con diseño disruptivo, animaciones avanzadas y objetos 3D usando Next.js 14 y TypeScript. Lideré procesos de onboarding y migraciones de nuevos medios.",
    icon: "💼",
    date: "Abril 2023 - Presente",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Framer Motion",
      "GSAP",
      "Strapi",
      "SASS",
    ],
  },
  {
    title: "Front End Engineer",
    company: "Freelance",
    description:
      "Desarrollo de sitios web responsive para clientes como Electromédica de las Sierras y Alonso Ganados. Relevamiento de requerimientos, diseño de soluciones técnicas a medida y gestión integral de hosting. Coordinación con clientes mediante demos iterativas.",
    icon: "🚀",
    date: "Julio 2022 - Presente",
    technologies: ["React", "Vite", "CSS", "JavaScript", "Hostinger", "GitHub"],
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "TypeScript", "Zustand", "CSS", "Vite", "Vercel"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "React-Query", "CSS", "Vite", "Vercel"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Pet Soft",
    description:
      "Software de gestión integral para guarderías caninas. PetSoft simplifica la administración del negocio, permitiendo a los dueños registrar mascotas, gestionar reservas, procesar pagos de forma segura con Stripe y mantener un control total sobre los animales a su cuidado.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Shadcn",
      "Prisma",
      "Stripe",
      "Vercel",
    ],
    imageUrl: wordanalyticsImg,
  },
] as const;

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
