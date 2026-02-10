import {
  ReactLogo,
  MongoDBLogo,
  NodeJsLogo,
  NextJsLogo,
  GoLogo,
  DockerLogo,
  ExpoLogo,
  SolidityLogo,
  TypeScriptLogo,
  GitLogo,
  PostgreSQLLogo,
} from "../app/components/logo";

export const about = {
  name: "Shivang Dixit",
  role: "Web & Mobile Dev",
  proficient: ["Go", "TypeScript", "React", "PostgreSQL"],
  about:
    "A minimal, clean portfolio template built with Next.js. Perfect for developers who want a simple yet professional online presence without the complexity.",
  email: "your.email@example.com",
};

export const seo = {
  title: `${about.name} | ${about.role}`,
  description:
    "Minimal, clean Next.js portfolio template for developers seeking a simple, professional online presence without extra complexity.",
  keywords:
    "portfolio, web developer, Next.js, developer portfolio, minimal portfolio",
};

export const forms = {
  formspreeUrl: "https://formspree.io/f/<url>",
};

export const skills = [
  { name: "Html", alt: "html logo", icon: "/html.svg" },
  { name: "Css", alt: "css logo", icon: "/css.svg" },
  { name: "Js", alt: "js logo", icon: "/js.svg" },
  { name: "Tailwind", alt: "tailwind logo", icon: "/tailwind.svg" },
  { name: "React Js", alt: "react logo", icon: "/react.svg" },
  { name: "Next Js", alt: "nextjs logo", icon: "/nextjs.svg" },
];

export const socials = {
  github: "https://github.com/sachinbhujel",
  twitter: "https://twitter.com/sachinbhujel909",
  instagram: "https://www.instagram.com/imsachinbhujel",
  facebook: "https://www.facebook.com/imsachinbhujel",
};

export const projects = {
  pinProjects: [
    {
      title: "Modern Portfolio",
      description:
        "A sleek, modern portfolio site to showcase your work and skills. Responsive design with smooth navigation and SEO optimization.",
      tags: [
        { name: "Next.js", logo: <NextJsLogo size={14} /> },
        { name: "React", logo: <ReactLogo size={14} /> },
        { name: "TypeScript", logo: <TypeScriptLogo size={14} /> },
        { name: "PostgreSQL", logo: <PostgreSQLLogo size={14} /> },
      ],
      link: "",
    },
    {
      title: "Developer Blog Platform",
      description:
        "A clean, minimal blog setup featuring dynamic content, category filters, and easy-to-read layouts. Perfect for sharing your ideas.",
      tags: [
        { name: "React", logo: <ReactLogo size={14} /> },
        { name: "Node.js", logo: <NodeJsLogo size={14} /> },
        { name: "MongoDB", logo: <MongoDBLogo size={14} /> },
        { name: "Docker", logo: <DockerLogo size={14} /> },
      ],
      link: "",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A fast and scalable online store with product listings, cart functionality, and seamless checkout experience. Built for performance.",
      tags: [
        { name: "Next.js", logo: <NextJsLogo size={14} /> },
        { name: "Go", logo: <GoLogo size={14} /> },
        { name: "PostgreSQL", logo: <PostgreSQLLogo size={14} /> },
        { name: "Docker", logo: <DockerLogo size={14} /> },
      ],
      link: "",
    },
  ],
  otherProjects: [
    {
      title: "DeFi Dashboard",
      description:
        "Real-time cryptocurrency portfolio tracker with wallet integration and market analytics. Built for Web3 enthusiasts.",
      tags: [
        { name: "React", logo: <ReactLogo size={14} /> },
        { name: "Solidity", logo: <SolidityLogo size={14} /> },
        { name: "TypeScript", logo: <TypeScriptLogo size={14} /> },
      ],
      link: "",
    },
    {
      title: "Mobile Fitness App",
      description:
        "Cross-platform workout tracker with progress analytics, exercise library, and social features.",
      tags: [
        { name: "React", logo: <ReactLogo size={14} /> },
        { name: "Expo", logo: <ExpoLogo size={14} /> },
      ],
      link: "",
    },
    {
      title: "DevOps Dashboard",
      description:
        "Centralized dashboard for monitoring server metrics, deployment status, and CI/CD pipelines across multiple projects.",
      tags: [
        { name: "Go", logo: <GoLogo size={14} /> },
        { name: "Docker", logo: <DockerLogo size={14} /> },
        { name: "Git", logo: <GitLogo size={14} /> },
        { name: "Node.js", logo: <NodeJsLogo size={14} /> },
      ],
      link: "",
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content creation tool with customizable templates, tone adjustment, and bulk generation capabilities.",
      tags: [
        { name: "Next.js", logo: <NextJsLogo size={14} /> },
        { name: "Node.js", logo: <NodeJsLogo size={14} /> },
        { name: "MongoDB", logo: <MongoDBLogo size={14} /> },
        { name: "PostgreSQL", logo: <PostgreSQLLogo size={14} /> },
      ],
      link: "",
    },
    {
      title: "Real-time Chat Application",
      description:
        "WebSocket-based chat application with room creation, file sharing, and end-to-end encryption.",
      tags: [
        { name: "React", logo: <ReactLogo size={14} /> },
        { name: "Node.js", logo: <NodeJsLogo size={14} /> },
        { name: "MongoDB", logo: <MongoDBLogo size={14} /> },
      ],
      link: "",
    },
    {
      title: "Microservices Architecture",
      description:
        "Scalable microservices architecture with service discovery, API gateway, and distributed tracing.",
      tags: [
        { name: "Go", logo: <GoLogo size={14} /> },
        { name: "Docker", logo: <DockerLogo size={14} /> },
        { name: "Node.js", logo: <NodeJsLogo size={14} /> },
        { name: "PostgreSQL", logo: <PostgreSQLLogo size={14} /> },
      ],
      link: "",
    },
    {
      title: "API Gateway Service",
      description:
        "High-performance API gateway with rate limiting, authentication, and request routing for microservices.",
      tags: [
        { name: "Go", logo: <GoLogo size={14} /> },
        { name: "TypeScript", logo: <TypeScriptLogo size={14} /> },
        { name: "Docker", logo: <DockerLogo size={14} /> },
        { name: "PostgreSQL", logo: <PostgreSQLLogo size={14} /> },
      ],
      link: "",
    },
    {
      title: "Code Collaboration Tool",
      description:
        "Real-time code editor with collaborative features, syntax highlighting, and version control integration.",
      tags: [
        { name: "React", logo: <ReactLogo size={14} /> },
        { name: "TypeScript", logo: <TypeScriptLogo size={14} /> },
        { name: "Node.js", logo: <NodeJsLogo size={14} /> },
        { name: "Git", logo: <GitLogo size={14} /> },
      ],
      link: "",
    },
  ],
};

export const experience = [
  {
    title: "Frontend Developer at Tech Solutions",
    description:
      "Worked on building and maintaining responsive web applications using React.js and Next.js, improving UI performance and user experience.",
    date: "15/01/2024",
  },
  {
    title: "Web Developer Intern at Creative Studio",
    description:
      "Assisted in designing website layouts, wrote clean HTML/CSS code, and collaborated with the team on JavaScript features for client projects.",
    date: "10/06/2023",
  },
  {
    title: "Junior Developer at Innovate Labs",
    description:
      "Developed and tested frontend components, optimized web pages for speed, and contributed to team code reviews and debugging sessions.",
    date: "01/09/2022",
  },
];

export const blogs = [
  {
    title: "Understanding React Hooks",
    date: "12/03/2025",
    link: "#",
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Which",
    date: "25/12/2024",
    link: "#",
  },
  {
    title: "Next.js SEO Best Practices",
    date: "10/07/2024",
    link: "#",
  },
];
