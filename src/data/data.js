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
  SiShadcnui,
  SiFoundryvirtualtabletop,
  SiCloudfoundry,
  SiEthereum,
  SiTelegram,
  SiBitcoin,
  SiWeb3Dotjs,
  SiVercel,
  SiBlockchaindotcom,
  SiSwift,
  SiPython,
  SiJupyter,
  SiClaude,
  SiGin,
  SiDrizzle,
  SiVite,
  SiLazyvim,
} from "react-icons/si";

export const skills = [
  {
    name: "JavaScript",
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
  {
    name: "Python",
    alt: "Python logo",
    icon: <SiPython size={16} className="text-gray-700" />,
  },
  {
    name: "Jupyter",
    alt: "Jupyter logo",
    icon: <SiJupyter size={16} className="text-gray-700" />,
  },
  {
    name: "Claude",
    alt: "Claude logo",
    icon: <SiClaude size={16} className="text-gray-700" />,
  },
  {
    name: "Gin",
    alt: "Gin logo",
    icon: <SiGin size={16} className="text-gray-700" />,
  },
  {
    name: "Drizzle",
    alt: "Drizzle logo",
    icon: <SiDrizzle size={16} className="text-gray-700" />,
  },
  {
    name: "Vite",
    alt: "Vite logo",
    icon: <SiVite size={16} className="text-gray-700" />,
  },
  {
    name: "LazyVim",
    alt: "LazyVim logo",
    icon: <SiLazyvim size={16} className="text-gray-700" />,
  },
  {
    name: "Shadcn",
    alt: "Shadcn logo",
    icon: <SiShadcnui size={16} className="text-gray-700" />,
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
        "This App is used to covert jpeg to pdfs with offline functionality, local storage and sharable , Seamlessley ui . With this project i learned app version and project structure.",
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
      title: "Unistream",
      description:
        "A stream service of TWAP / SPOT prices liquidity of pools in Uniswap V3 , with slippage calculation and order book visualization , with different time frames from 15mins to 2hrs.",
      tags: [
        {
          name: "React",
          logo: (
            <SiReact size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
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
          name: "Docker",
          logo: (
            <SiDocker size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
        {
          name: "Shadcnui",
          logo: (
            <SiShadcnui
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
      ],
      link: "",
    },
    {
      title: "Disperz Web3",
      description:
        "Multi-Token transfers on sepolia testnet to multiple wallets with a user-friendly interface and personlized vault.",
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
          name: "Solidity",
          logo: (
            <SiSolidity
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
        {
          name: "Shadcnui",
          logo: (
            <SiShadcnui
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
          name: "Ethereum",
          logo: (
            <SiEthereum
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
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
        "Market Reaction Signaling Bot Telegram , scrapes whale transactions buy and sell signals on memspace and sends signals through telegram bot.",
      tags: [
        {
          name: "Nuxt.js",
          logo: (
            <SiNuxtdotjs
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
        {
          name: "Telegram",
          logo: (
            <SiTelegram
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
        {
          name: "Bitcoin",
          logo: (
            <SiBitcoin size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
      ],
      link: "",
    },
    {
      title: "Go Absolute",
      description:
        "Your journey to mastering backend development with Golang. Follow this structured timeline from fundamentals to advanced systems.",
      tags: [
        {
          name: "Nuxt.js",
          logo: (
            <SiNuxtdotjs
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
          name: "Git",
          logo: (
            <SiGit size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
      ],
      link: "",
    },
    {
      title: "Kafka Eventstreaming",
      description: "",
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
      ],
      link: "",
    },
    {
      title: "Solidity Contract",
      description: "Disperz solidity contract made and test in Foundry(Rust).",
      tags: [
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
          name: "Web3.js",
          logo: (
            <SiWeb3Dotjs
              size={14}
              className="text-gray-700 dark:text-gray-300"
            />
          ),
        },
        {
          name: "Ethereum",
          logo: (
            <SiEthereum
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
        "Just me experimenting with svg Images & Animations with free resources.",
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
          name: "Vercel",
          logo: (
            <SiVercel size={14} className="text-gray-700 dark:text-gray-300" />
          ),
        },
      ],
      link: "",
    },
    {
      title: "Go websocket",
      description:
        "TWAP Oracle is a Go-based WebSocket service that streams both spot prices and time-weighted average prices (TWAP) for the USDC/WETH pair on Uniswap.",
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
          name: "Blockchain",
          logo: (
            <SiBlockchaindotcom
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
        "Template for creating a minimalist portfolio website with React, Tailwind CSS, and JavaScript.",
      tags: [
        {
          name: "Javascript",
          logo: (
            <SiJavascript
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
          name: "Tailwind",
          logo: (
            <SiTailwindcss
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
        "Practice Swift programming skills by building small projects and solving coding challenges.",
      tags: [
        {
          name: "Swift",
          logo: (
            <SiSwift size={14} className="text-gray-700 dark:text-gray-300" />
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
