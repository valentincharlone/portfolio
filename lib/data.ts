import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "nav.experience",
    hash: "#experience",
  },
  {
    name: "nav.projects",
    hash: "#projects",
  },
  {
    name: "nav.skills",
    hash: "#skills",
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
  "React Native",
  "Redux",
  "Prisma",
  "CSS",
  "Sass",
  "Tailwind",
  "Framer Motion",
  "GSAP",
  "Git",
] as const;
