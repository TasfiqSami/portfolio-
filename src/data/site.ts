export const site = {
  name: "Tasfiq Ahmed",
  initials: "TA",
  title: "Software Engineer & Minecraft Network Developer",
  tagline:
    "I build scalable web applications, powerful backend systems, and high-performance Minecraft networks with modern technologies.",
  email: "contact@tasfiqahmed.com",
  phone: "+880 1632-566353",
  location: "Dhaka, Bangladesh",
  website: "tasfiqahmed.com",
  github: "https://github.com/tasfiqahmed",
  linkedin: "https://linkedin.com/in/tasfiqahmed",
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "Minecraft Network Developer",
    "System Administrator",
  ],
  stats: [
    { label: "Years Experience", value: 4, suffix: "+" },
    { label: "Projects Completed", value: 50, suffix: "+" },
    { label: "Happy Clients", value: 30, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" },
  ],
};

export type SkillLevel = "Intermediate" | "Advanced" | "Expert";

export const skillCategories: {
  id: string;
  label: string;
  skills: { name: string; level: SkillLevel }[];
}[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Java", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "PHP", level: "Intermediate" },
      { name: "SQL", level: "Advanced" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "Next.js", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5 / CSS3", level: "Expert" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "REST APIs", level: "Advanced" },
      { name: "Prisma ORM", level: "Advanced" },
      { name: "Authentication", level: "Advanced" },
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "Database Design", level: "Advanced" },
    ],
  },
  {
    id: "devops",
    label: "Cloud & DevOps",
    skills: [
      { name: "Linux", level: "Advanced" },
      { name: "VPS / CloudPanel", level: "Advanced" },
      { name: "Vercel", level: "Advanced" },
      { name: "Nginx", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "CI/CD", level: "Intermediate" },
    ],
  },
  {
    id: "minecraft",
    label: "Minecraft",
    skills: [
      { name: "PaperMC", level: "Advanced" },
      { name: "Velocity", level: "Advanced" },
      { name: "PacketEvents", level: "Advanced" },
      { name: "LuckPerms", level: "Expert" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git & GitHub", level: "Expert" },
      { name: "Maven", level: "Advanced" },
      { name: "IntelliJ IDEA", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
    ],
  },
];

export const experience = [
  {
    role: "Software Developer & System Administrator",
    company: "Freelance / Self-Employed",
    period: "2021 — Present",
    points: [
      "Design and ship custom web apps, backend systems, and REST APIs across a range of client and personal projects.",
      "Operate Linux VPS fleets: domains, SSL, deployment pipelines, monitoring, and hardening.",
      "Integrate payment gateways, authentication, and automated workflows for production platforms.",
    ],
  },
  {
    role: "Minecraft Network Developer",
    company: "Independent Networks",
    period: "2020 — Present",
    points: [
      "Build advanced Java plugins on Paper and Velocity for large-scale multiplayer networks.",
      "Ship ranks, PvP, anti-cheat and economy systems on top of PacketEvents and LuckPerms.",
      "Engineer proxy topology, database schemas, and performance tuning for thousands of concurrent players.",
    ],
  },
  {
    role: "Web Developer",
    company: "Freelance",
    period: "2021 — Present",
    points: [
      "Craft modern responsive interfaces with Next.js, React, and Tailwind CSS.",
      "Design REST APIs, model relational data, and deploy on cloud infrastructure.",
      "Implement authentication, role-based access, and secure user flows end to end.",
    ],
  },
  {
    role: "System Administrator",
    company: "Independent",
    period: "2020 — Present",
    points: [
      "Provision and maintain Linux and Windows servers — configuration, monitoring, security.",
      "Configure Nginx, Apache, DNS, firewalls, and backup + recovery strategies.",
      "Automate deployments, scheduled tasks, and observability across environments.",
    ],
  },
];

export type ProjectCategory = "Minecraft" | "Web" | "Backend" | "Infrastructure" | "Tools";

export const projects: {
  title: string;
  category: ProjectCategory;
  description: string;
  stack: string[];
  gradient: string;
  github?: string;
  demo?: string;
}[] = [
  {
    title: "TimeCatchers Network",
    category: "Minecraft",
    description:
      "Large-scale Minecraft network with custom plugins, economies, PvP, and event frameworks tuned for thousands of concurrent players.",
    stack: ["Java", "Paper", "Velocity", "PacketEvents", "LuckPerms"],
    gradient: "from-[oklch(0.55_0.24_262)] to-[oklch(0.72_0.18_258)]",
  },
  {
    title: "E-Commerce Platform",
    category: "Web",
    description:
      "Full-stack storefront with payment integration, order management, and a polished dashboard for merchants.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
    gradient: "from-[oklch(0.6_0.22_270)] to-[oklch(0.7_0.18_240)]",
  },
  {
    title: "Server Management Panel",
    category: "Infrastructure",
    description:
      "Web dashboard for provisioning, monitoring, and orchestrating game server nodes with real-time metrics.",
    stack: ["Node.js", "Linux", "REST", "WebSockets"],
    gradient: "from-[oklch(0.55_0.2_220)] to-[oklch(0.7_0.15_260)]",
  },
  {
    title: "Auth & Billing API",
    category: "Backend",
    description:
      "Multi-tenant REST API with JWT auth, role-based access, and Stripe-backed subscription billing.",
    stack: ["Node.js", "PostgreSQL", "Prisma", "Zod"],
    gradient: "from-[oklch(0.6_0.22_260)] to-[oklch(0.55_0.24_282)]",
  },
  {
    title: "Deployment Automation",
    category: "Tools",
    description:
      "CLI + scripts that provision VPS environments, configure Nginx / SSL, and roll out zero-downtime deploys.",
    stack: ["Bash", "Nginx", "systemd", "GitHub Actions"],
    gradient: "from-[oklch(0.5_0.2_240)] to-[oklch(0.65_0.2_258)]",
  },
  {
    title: "Realtime Player Dashboard",
    category: "Web",
    description:
      "Analytics surface for Minecraft networks showing live player counts, revenue, and server health.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Recharts"],
    gradient: "from-[oklch(0.6_0.2_275)] to-[oklch(0.7_0.15_255)]",
  },
];

export const reviews = [
  {
    name: "Arman R.",
    role: "Business Owner",
    quote:
      "Tasfiq delivered an exceptional solution beyond my expectations. Highly professional and very easy to work with.",
  },
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    quote:
      "Amazing developer! The quality of work, attention to detail, and support are absolutely top-notch.",
  },
  {
    name: "Rifat Ahmed",
    role: "Server Owner",
    quote:
      "The Minecraft network he built for us is smooth, optimized, and runs perfectly at scale.",
  },
  {
    name: "Emily Chen",
    role: "Product Lead",
    quote:
      "Clean architecture, thoughtful decisions, and shipped on time. He treats the codebase like it's his own.",
  },
  {
    name: "Marco Villani",
    role: "Founder",
    quote:
      "One of the best backend engineers I've worked with. Solid systems, great communication, zero drama.",
  },
  {
    name: "Aditi K.",
    role: "Tech Lead",
    quote:
      "Refactored a mess of legacy code into something maintainable. Our deploy cadence doubled after his work.",
  },
];

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;
