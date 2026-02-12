import {
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiSupabase,
  SiNuxtdotjs,
  SiGo,
  SiExpo,
  SiDocker,
  SiBun,
  SiSocketdotio,
  SiMongodb,
  SiApachekafka,
  SiPostgresql,
  SiNodedotjs,
  SiGit,
  SiSolidity,
  SiTypescript,
} from "react-icons/si";

export const skills = [
  {
    name: "Js",
    alt: "js logo",
    icon: <SiJavascript size={16} className="text-gray-700" />,
  },
  {
    name: "Tailwind",
    alt: "tailwind logo",
    icon: <SiTailwindcss size={16} className="text-gray-700" />,
  },
  {
    name: "React Js",
    alt: "react logo",
    icon: <SiReact size={16} className="text-gray-700" />,
  },
  {
    name: "Next Js",
    alt: "nextjs logo",
    icon: <SiNextdotjs size={16} className="text-gray-700" />,
  },
  {
    name: "Supabase",
    alt: "supabase logo",
    icon: <SiSupabase size={16} className="text-gray-700" />,
  },
  {
    name: "Nuxt",
    alt: "nuxt logo",
    icon: <SiNuxtdotjs size={16} className="text-gray-700" />,
  },
  {
    name: "Go",
    alt: "go logo",
    icon: <SiGo size={16} className="text-gray-700" />,
  },
  {
    name: "Expo",
    alt: "Expo logo",
    icon: <SiExpo size={16} className="text-gray-700" />,
  },
  {
    name: "Docker",
    alt: "docker logo",
    icon: <SiDocker size={16} className="text-gray-700" />,
  },
  {
    name: "bun",
    alt: "bun logo",
    icon: <SiBun size={16} className="text-gray-700" />,
  },
  {
    name: "Socket.IO",
    alt: "socket.io logo",
    icon: <SiSocketdotio size={16} className="text-gray-700" />,
  },
  {
    name: "MongoDB",
    alt: "mongodb logo",
    icon: <SiMongodb size={16} className="text-gray-700" />,
  },
  {
    name: "Apache Kafka",
    alt: "apache kafka logo",
    icon: <SiApachekafka size={16} className="text-gray-700" />,
  },
  {
    name: "PostgreSQL",
    alt: "postgresql logo",
    icon: <SiPostgresql size={16} className="text-gray-700" />,
  },
  {
    name: "Node.js",
    alt: "nodejs logo",
    icon: <SiNodedotjs size={16} className="text-gray-700" />,
  },
  {
    name: "Git",
    alt: "git logo",
    icon: <SiGit size={16} className="text-gray-700" />,
  },
  {
    name: "Solidity",
    alt: "solidity logo",
    icon: <SiSolidity size={16} className="text-gray-700" />,
  },
  {
    name: "TypeScript",
    alt: "typescript logo",
    icon: <SiTypescript size={16} className="text-gray-700" />,
  },
];

export const about = {
  name: "Shivang Dixit",
  role: "Web & Mobile Dev",
  proficient: ["Go", "TypeScript", "React", "PostgreSQL"],
  about:
    "Working across backend systems in Go, full-stack web development, and iOS app development to create smooth, reliable user experiences.",
  email: "dixitshiva12358@gmail.com",
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

export const socials = {
  github: "https://github.com/Shiv2576",
  twitter: "https://x.com/Shiv_dixit2576",
  Linkedin: "https://www.linkedin.com/in/shivangdixit2576/",
};

export const projects = {
  pinProjects: [
    {
      title: "Weave App",
      description:
        "A sleek, modern portfolio site to showcase your work and skills. Responsive design with smooth navigation and SEO optimization.",
      tags: [
        {
          name: "Next.js",
          logo: (
            <SiNextdotjs
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
        {
          name: "React",
          logo: (
            <SiReact size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
        {
          name: "TypeScript",
          logo: (
            <SiTypescript
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
        {
          name: "PostgreSQL",
          logo: (
            <SiPostgresql
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
      ],
      link: "",
    },
    {
      title: "Unistream",
      description:
        "A clean, minimal blog setup featuring dynamic content, category filters, and easy-to-read layouts. Perfect for sharing your ideas.",
      tags: [
        {
          name: "React",
          logo: (
            <SiReact size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
        {
          name: "Node.js",
          logo: (
            <SiNodedotjs
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
        {
          name: "MongoDB",
          logo: (
            <SiMongodb size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
        {
          name: "Docker",
          logo: (
            <SiDocker size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
      ],
      link: "",
    },
    {
      title: "Disperz Web3",
      description:
        "A fast and scalable online store with product listings, cart functionality, and seamless checkout experience. Built for performance.",
      tags: [
        {
          name: "Next.js",
          logo: (
            <SiNextdotjs
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
        {
          name: "Go",
          logo: <SiGo size={14} className="text-gray-700 dark:text-gray-300" />,
        },
        {
          name: "PostgreSQL",
          logo: (
            <SiPostgresql
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
        {
          name: "Docker",
          logo: (
            <SiDocker size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
      ],
      link: "",
    },
  ],
  otherProjects: [
    {
      title: "Market Reaction Signaling Bot Telegram",
      description:
        "Real-time cryptocurrency portfolio tracker with wallet integration and market analytics. Built for Web3 enthusiasts.",
      tags: [
        {
          name: "React",
          logo: (
            <SiReact size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
        {
          name: "Solidity",
          logo: (
            <SiSolidity
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
        {
          name: "TypeScript",
          logo: (
            <SiTypescript
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
      ],
      link: "",
    },
    {
      title: "Go Absolute",
      description:
        "Cross-platform workout tracker with progress analytics, exercise library, and social features.",
      tags: [
        {
          name: "React",
          logo: (
            <SiReact size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
        {
          name: "Expo",
          logo: (
            <SiExpo size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
      ],
      link: "",
    },
    {
      title: "Kafka Eventstreaming",
      description:
        "Centralized dashboard for monitoring server metrics, deployment status, and CI/CD pipelines across multiple projects.",
      tags: [
        {
          name: "Go",
          logo: <SiGo size={14} className="text-gray-700 dark:text-gray-300" />,
        },
        {
          name: "Docker",
          logo: (
            <SiDocker size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
        {
          name: "Git",
          logo: (
            <SiGit size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
        {
          name: "Node.js",
          logo: (
            <SiNodedotjs
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
      ],
      link: "",
    },
    {
      title: "Solidity Contract",
      description:
        "AI-powered content creation tool with customizable templates, tone adjustment, and bulk generation capabilities.",
      tags: [
        {
          name: "Next.js",
          logo: (
            <SiNextdotjs
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
        {
          name: "Node.js",
          logo: (
            <SiNodedotjs
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
        {
          name: "MongoDB",
          logo: (
            <SiMongodb size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
        {
          name: "PostgreSQL",
          logo: (
            <SiPostgresql
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
      ],
      link: "",
    },
    {
      title: "Svg Animation",
      description:
        "WebSocket-based chat application with room creation, file sharing, and end-to-end encryption.",
      tags: [
        {
          name: "React",
          logo: (
            <SiReact size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
        {
          name: "Node.js",
          logo: (
            <SiNodedotjs
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
        {
          name: "MongoDB",
          logo: (
            <SiMongodb size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
      ],
      link: "",
    },
    {
      title: "Go websocket",
      description:
        "Scalable microservices architecture with service discovery, API gateway, and distributed tracing.",
      tags: [
        {
          name: "Go",
          logo: <SiGo size={14} className="text-gray-700 dark:text-gray-300" />,
        },
        {
          name: "Docker",
          logo: (
            <SiDocker size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
        {
          name: "Node.js",
          logo: (
            <SiNodedotjs
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
        {
          name: "PostgreSQL",
          logo: (
            <SiPostgresql
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
      ],
      link: "",
    },
    {
      title: "Minimalist Portfolio Template",
      description:
        "High-performance API gateway with rate limiting, authentication, and request routing for microservices.",
      tags: [
        {
          name: "Go",
          logo: <SiGo size={14} className="text-gray-700 dark:text-gray-300" />,
        },
        {
          name: "TypeScript",
          logo: (
            <SiTypescript
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
        {
          name: "Docker",
          logo: (
            <SiDocker size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
        {
          name: "PostgreSQL",
          logo: (
            <SiPostgresql
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
      ],
      link: "",
    },
    {
      title: "Swift Practice",
      description:
        "Real-time code editor with collaborative features, syntax highlighting, and version control integration.",
      tags: [
        {
          name: "React",
          logo: (
            <SiReact size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
        {
          name: "TypeScript",
          logo: (
            <SiTypescript
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
        {
          name: "Node.js",
          logo: (
            <SiNodedotjs
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
        {
          name: "Git",
          logo: (
            <SiGit size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
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
