import type { Certificate, Skill, SocialLink } from './types';

export const PORTFOLIO_OWNER = "Alief 'Dev' Albayu";
export const OWNER_ROLE = "Junior developer & Linux Enthusiast";
export const OWNER_BIO = `I'm a passionate developer just starting out in IT. My journey began with a curiosity about how things work on the internet, which then led me to continuously learn about the latest technologies.`;

export const SKILLS: Skill[] = [
  { name: "React & TypeScript", level: 15, category: "Frontend" },
  { name: "Next.js", level: 10, category: "Frontend" },
  { name: "PHP", level: 45, category: "Backend" },
  { name: "Node.js", level: 30, category: "Backend" },
  { name: "JavaScript", level: 45, category: "Frontend" },
  { name: "GIT & GitHub", level: 60, category: "Tools" },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "c1",
    title: "AI Praktis untuk Produktivitas",
    issuer: "Dicoding",
    date: "May 2025",
    imageUrl: "/AI.jpg",
    credentialUrl: "https://www.dicoding.com/certificates/NVP75R0YVXR0",
    skills: ["Artificial Intelligence", "Productivity", "Gen AI"]
  },
  {
    id: "c2",
    title: "Belajar Penggunaan Generative AI",
    issuer: "Dicoding",
    date: "Jun 2025",
    imageUrl: "/Gen AI.jpg",
    credentialUrl: "https://www.dicoding.com/certificates/QLZ93WDO7Z5D",
    skills: ["Generative AI", "ChatGPT", "Productivity"]
  },
  {
    id: "c3",
    title: "Belajar dasar Git dan GitHub",
    issuer: "Dicoding",
    date: "May 2025",
    imageUrl: "/Git & GitHub.jpg",
    credentialUrl: "https://www.dicoding.com/certificates/4EXGVLNQ9XRL",
    skills: ["Git", "GitHub", "Version Control"]
  },
  {
    id: "c4",
    title: "Belajar dasar Pemrograman Web",
    issuer: "Dicoding",
    date: "Sep 2025",
    imageUrl: "/Web dasar.jpg",
    credentialUrl: "https://www.dicoding.com/certificates/JMZVVN7V3ZN9",
    skills: ["HTML", "CSS", "JavaScript"]
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", iconName: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com", iconName: "linkedin" },
  { platform: "Twitter", url: "https://twitter.com", iconName: "twitter" },
];