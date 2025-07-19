import { Project, Skill, TimelineItem } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Docly",
    description: "A full-stack applicadtion for the doctor appointment system.",
    image: "./../../dist/assets/docly.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Full Stack"
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
  { name: "Git", level: 90, category: "Tools" }
];

