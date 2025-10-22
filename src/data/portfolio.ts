import { Project, Skill, TimelineItem } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Docly",
    description: "A full-stack applicadtion for the doctor appointment system.",
    image: "/images/docly.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://doc-one-tau.vercel.app/login",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "lms",
    description: "A complete lms website using the full mern stack",
    image: "/images/image.png",
    technologies: ["React", "Node.js", "Gen ai", "Apis"],
    githubUrl: "https://github.com",
    liveUrl: "https://education-website-zcr5.vercel.app/",
    category: "Gen Ai",
  },

  {
    id: 3,
    title: "Attainers",
    description:
      "A full school mangement system witht the student, teacher and the admin login",
    image: "/images/attainers.png",
    technologies: ["React", "Node.js", "Gen ai", "Apis"],
    githubUrl: "https://github.com",
    liveUrl: "https://ankur-school-xi.vercel.app/ ",
    category: "Gen Ai",
  },

];

export const skills: Skill[] = [
  { name: "JavaScript", level: 95, category: "Languages" },
  { name: "C++", level: 90, category: "Languages" },
  { name: "Python", level: 85, category: "Languages" },
  { name: "React", level: 95, category: "Frontend" },
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Express", level: 85, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Database" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "Java", level: 90, category: "Tools" },
  { name: "Gen Ai", level: 90, category: "Tools" },
  { name: "llama-index", level: 90, category: "Tools" },
  { name: "langchain", level: 90, category: "Tools" },
  { name: "Hugging Face", level: 90, category: "Tools" },
  { name: "Vector DataBase", level: 90, category: "Tools" },
  { name: "Computer Networking", level: 90, category: "Tools" },
];
