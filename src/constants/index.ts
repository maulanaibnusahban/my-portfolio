import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface ButtonProps {
  icon: IconDefinition; // Sesuaikan dengan tipe yang lebih spesifik jika perlu, seperti IconDefinition dari FontAwesome
  classNameIcon?: string;
  classNameButton?: string;
  colorIcon?: string;
  label: string;
}

export interface TypewriterProps {
  text: string[];
  colorCursor?: string;
}

export const icons_slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export interface Technology {
  src: string;
  key: string;
  label: string;
}

export interface Project {
  src: string;
  title: string;
  href: string;
  description: string;
  technologies: Technology[];
}
