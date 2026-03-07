// npm install @iconify/react
import { Icon } from "@iconify/react";

// ─── Icon helper ─────────────────────────────────────────────────────────────
// size: 16 for skills, 14 for project tags
const ic = (icon, size = 16) => (
  <Icon
    icon={icon}
    width={size}
    height={size}
    className="text-[rgb(var(--bc))] transition-colors duration-200"
  />
);

// ─── Iconify icon IDs ─────────────────────────────────────────────────────────
const ICONS = {
  javascript: "simple-icons:javascript",
  tailwind: "simple-icons:tailwindcss",
  react: "simple-icons:react",
  nextjs: "simple-icons:nextdotjs",
  supabase: "simple-icons:supabase",
  sentry: "simple-icons:sentry",
  nuxt: "simple-icons:nuxtdotjs",
  go: "simple-icons:go",
  expo: "simple-icons:expo",
  docker: "simple-icons:docker",
  bun: "simple-icons:bun",
  socketio: "simple-icons:socketdotio",
  mongodb: "simple-icons:mongodb",
  kafka: "simple-icons:apachekafka",
  postgresql: "simple-icons:postgresql",
  nodejs: "simple-icons:nodedotjs",
  git: "simple-icons:git",
  solidity: "simple-icons:solidity",
  typescript: "simple-icons:typescript",
  python: "simple-icons:python",
  jupyter: "simple-icons:jupyter",
  claude: "simple-icons:claude",
  gin: "simple-icons:gin",
  drizzle: "simple-icons:drizzle",
  vite: "simple-icons:vite",
  lazyvim: "simple-icons:lazyvim",
  shadcn: "simple-icons:shadcnui",
  graphql: "simple-icons:graphql",
  neovim: "simple-icons:neovim",
  swift: "simple-icons:swift",
  lua: "simple-icons:lua",
  github: "simple-icons:github",
  rust: "simple-icons:rust",
  radixui: "simple-icons:radixui",
  mdx: "simple-icons:mdx",
  typst: "simple-icons:typst",
  zustand: "ph:circles-three",
  ethereum: "simple-icons:ethereum",
  telegram: "simple-icons:telegram",
  bitcoin: "simple-icons:bitcoin",
  web3js: "simple-icons:web3dotjs",
  vercel: "simple-icons:vercel",
  blockchain: "simple-icons:blockchaindotcom",
  reactquery: "simple-icons:reactquery",
  eylsia: "simple-icons:eylsia",
};

// ─── Tag helper (project tags use size 14) ───────────────────────────────────
const tag = (name, iconKey) => ({
  name,
  logo: ic(ICONS[iconKey], 14),
});

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skills = [
  { name: "JavaScript", alt: "js logo", icon: ic(ICONS.javascript) },
  { name: "Tailwind", alt: "tailwind logo", icon: ic(ICONS.tailwind) },
  { name: "React Js", alt: "react logo", icon: ic(ICONS.react) },
  { name: "Next Js", alt: "nextjs logo", icon: ic(ICONS.nextjs) },
  { name: "Supabase", alt: "supabase logo", icon: ic(ICONS.supabase) },
  { name: "Sentry", alt: "sentry logo", icon: ic(ICONS.sentry) },
  { name: "Nuxt", alt: "nuxt logo", icon: ic(ICONS.nuxt) },
  { name: "Go", alt: "go logo", icon: ic(ICONS.go) },
  { name: "Expo", alt: "expo logo", icon: ic(ICONS.expo) },
  { name: "Docker", alt: "docker logo", icon: ic(ICONS.docker) },
  { name: "bun", alt: "bun logo", icon: ic(ICONS.bun) },
  { name: "Socket.IO", alt: "socket.io logo", icon: ic(ICONS.socketio) },
  { name: "MongoDB", alt: "mongodb logo", icon: ic(ICONS.mongodb) },
  { name: "Apache Kafka", alt: "kafka logo", icon: ic(ICONS.kafka) },
  { name: "PostgreSQL", alt: "postgresql logo", icon: ic(ICONS.postgresql) },
  { name: "Node.js", alt: "nodejs logo", icon: ic(ICONS.nodejs) },
  { name: "Git", alt: "git logo", icon: ic(ICONS.git) },
  { name: "Solidity", alt: "solidity logo", icon: ic(ICONS.solidity) },
  { name: "TypeScript", alt: "typescript logo", icon: ic(ICONS.typescript) },
  { name: "Python", alt: "python logo", icon: ic(ICONS.python) },
  { name: "Jupyter", alt: "jupyter logo", icon: ic(ICONS.jupyter) },
  { name: "Claude", alt: "claude logo", icon: ic(ICONS.claude) },
  { name: "Gin", alt: "gin logo", icon: ic(ICONS.gin) },
  { name: "Drizzle", alt: "drizzle logo", icon: ic(ICONS.drizzle) },
  { name: "Vite", alt: "vite logo", icon: ic(ICONS.vite) },
  { name: "LazyVim", alt: "lazyvim logo", icon: ic(ICONS.lazyvim) },
  { name: "Shadcn", alt: "shadcn logo", icon: ic(ICONS.shadcn) },
  { name: "GraphQL", alt: "graphql logo", icon: ic(ICONS.graphql) },
  { name: "Neovim", alt: "neovim logo", icon: ic(ICONS.neovim) },
  { name: "Swift", alt: "swift logo", icon: ic(ICONS.swift) },
  { name: "Lua", alt: "lua logo", icon: ic(ICONS.lua) },
  { name: "Github", alt: "github logo", icon: ic(ICONS.github) },
  { name: "Rust", alt: "rust logo", icon: ic(ICONS.rust) },
  { name: "Radix UI", alt: "radixui logo", icon: ic(ICONS.radixui) },
  { name: "MDX", alt: "mdx logo", icon: ic(ICONS.mdx) },
  { name: "Typst", alt: "typst logo", icon: ic(ICONS.typst) },
  { name: "Zustand", alt: "zustand logo", icon: ic(ICONS.zustand) },
];

// ─── About ───────────────────────────────────────────────────────────────────

export const about = {
  name: "Shivang Dixit",
  role: "Web & Mobile Dev",
  proficient: ["Go", "TypeScript", "React", "React Native"],
  about:
    "Working across backend systems in Go, full-stack web development, and iOS app development to create smooth, reliable user experiences.",
  email: "dixitshiva12358@gmail.com",
};

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const seo = {
  title: `${about.name} | ${about.role}`,
  description:
    "Minimal, clean Next.js portfolio template for developers seeking a simple, professional online presence without extra complexity.",
  keywords:
    "portfolio, web developer, Next.js, developer portfolio, minimal portfolio",
};

// ─── Forms ───────────────────────────────────────────────────────────────────

export const forms = {
  formspreeUrl: "https://formspree.io/f/<url>",
};

// ─── Socials ─────────────────────────────────────────────────────────────────

export const socials = {
  github: "https://github.com/Shiv2576",
  twitter: "https://x.com/Shiv_dixit2576",
  Linkedin: "https://www.linkedin.com/in/shivangdixit2576/",
  Resume:
    "https://drive.google.com/file/d/1SXTf-DoPxkjNIzSfd4PbFMqVoa0rZxzc/view?usp=sharing",
};

// ─── Projects ────────────────────────────────────────────────────────────────

export const projects = {
  pinProjects: [
    {
      title: "HackerNews App",
      description:
        "A modern React Native mobile application that delivers the best of Hacker News in a clean, fast, and user-friendly interface, not just a reader, but a complete participation platform.",
      tags: [
        tag("Expo", "expo"),
        tag("TypeScript", "typescript"),
        tag("React Query", "reactquery"),
        tag("React Native", "react"),
      ],
      link: "https://hn-web-five.vercel.app/",
    },
    {
      title: "Weave App",
      description:
        "A clean, offline-first app that converts JPEGs to PDFs right in your mobile. No servers, no uploads—just seamless file conversion with local storage and easy sharing.",
      tags: [
        tag("React Native", "react"),
        tag("Expo", "expo"),
        tag("TypeScript", "typescript"),
      ],
      link: "https://weavemobile.netlify.app/",
    },
    {
      title: "Unistream",
      description:
        "Real-time streaming service for Uniswap V3 liquidity data. Visualizes TWAP/SPOT prices with an interactive order book and slippage calculator.",
      tags: [
        tag("React", "react"),
        tag("Next.js", "nextjs"),
        tag("Go", "go"),
        tag("Docker", "docker"),
        tag("Shadcn", "shadcn"),
      ],
      link: "https://unistream2.netlify.app/",
    },
    {
      title: "Disperz Web3",
      description:
        "Batch send multiple tokens to different wallets on Sepolia testnet in one go. Clean interface, personal vaults, and no more tedious one-by-one transfers.",
      tags: [
        tag("Next.js", "nextjs"),
        tag("Solidity", "solidity"),
        tag("Shadcn", "shadcn"),
        tag("Docker", "docker"),
        tag("Ethereum", "ethereum"),
      ],
      link: "https://disperz.netlify.app/",
    },
  ],
  otherProjects: [
    {
      title: "Market Reaction Signaling Bot Telegram",
      description:
        "Telegram bot that watches the mempool like a hawk. Scrapes whale transactions and sends instant alerts when big players move.",
      tags: [
        tag("Nuxt.js", "nuxt"),
        tag("Telegram", "telegram"),
        tag("TypeScript", "typescript"),
        tag("Bitcoin", "bitcoin"),
      ],
      link: "https://mrt-nu.vercel.app/",
    },
    {
      title: "Go Absolute",
      description:
        "A curated learning path for Go backend development. From 'hello world' to building systems that actually scale.",
      tags: [tag("Nuxt.js", "nuxt"), tag("Go", "go"), tag("Git", "git")],
      link: "https://goabsolute.netlify.app/",
    },
    {
      title: "Kafka Eventstreaming",
      description:
        "Building event-driven systems with Go and Kafka. Because sometimes you need your services to actually talk to each other.",
      tags: [tag("Go", "go"), tag("Docker", "docker"), tag("Git", "git")],
      link: "https://github.com/Shiv2576/Go-Kafka-Learning-Documentation-Roadmap",
    },
    {
      title: "Solidity Contract",
      description:
        "The brains behind Disperz—smart contracts built in Solidity and battle-tested with Foundry.",
      tags: [
        tag("Solidity", "solidity"),
        tag("Web3.js", "web3js"),
        tag("Ethereum", "ethereum"),
      ],
      link: "https://github.com/Shiv2576/Disperz",
    },
    {
      title: "Svg Animation",
      description:
        "Got bored, started playing with SVGs. No AI, just pure CSS/JS magic.",
      tags: [
        tag("React", "react"),
        tag("TypeScript", "typescript"),
        tag("Vercel", "vercel"),
      ],
      link: "https://logbook-delta-red.vercel.app/",
    },
    {
      title: "Go Websocket",
      description:
        "Real-time price oracle streaming both spot and TWAP prices for USDC/WETH on Uniswap.",
      tags: [
        tag("Go", "go"),
        tag("Docker", "docker"),
        tag("Blockchain", "blockchain"),
      ],
      link: "https://github.com/Shiv2576/Twap_Oracle-Uniswap-",
    },
    {
      title: "Minimalist Portfolio Template",
      description:
        "A no-fuss portfolio template for devs who believe less is more. Fork it and make it yours in minutes.",
      tags: [
        tag("JavaScript", "javascript"),
        tag("React", "react"),
        tag("Tailwind", "tailwind"),
      ],
      link: "https://github.com/Shiv2576/mini_folio",
    },
    {
      title: "Swift Practice",
      description:
        "My journey into iOS development—one small project and coding challenge at a time.",
      tags: [tag("Swift", "swift"), tag("Git", "git")],
      link: "https://github.com/Shiv2576/swift_practice",
    },
  ],
};

// ─── Experience ───────────────────────────────────────────────────────────────

export const experience = [
  {
    title: "HackerNews Mobile App",
    description:
      "Developed an Android application for browsing Hacker News feeds including Top, Ask, and Show posts. Implemented article reading, threaded comments, and optimized feed rendering using FlashList. Currently adding user authentication and account features.",
    date: "Current",
  },
  {
    title: "University Mobile App – Feature Development",
    description:
      "Implemented a responsive file upload feature for the university’s official mobile application using React Native and Redux, supporting multiple file formats with efficient state management.",
    date: "01/11/2025",
  },
  {
    title: "TON Telegram Mini App Development",
    description:
      "Built Telegram Mini Apps using the Telegram WebApp SDK and integrated them with the TON blockchain to enable on-chain interactions and lightweight blockchain games for user engagement.",
    date: "",
  },
  {
    title: "Chainlink Oracle Integrations",
    description:
      "Developed and deployed Solidity smart contracts integrated with Chainlink VRF for verifiable randomness and Log Triggers for automated contract execution. Implemented Chainlink Data Feeds for reliable off-chain data access.",
    date: "01/07/2024",
  },
];

// ─── Blogs ───────────────────────────────────────────────────────────────────

export const blogs = [
  {
    title: "Common Go Mistakes",
    date: "12/03/2025",
    link: "https://100go.co/",
  },
  {
    title: "Diving into Apple's CryptoKit & Foundation",
    date: "25/12/2024",
    link: "https://developer.apple.com/documentation/cryptokit",
  },
];
