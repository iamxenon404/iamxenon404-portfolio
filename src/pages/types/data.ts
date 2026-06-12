export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  lightImage?: string; // Optional field for light mode image
  github: string;
  link?: string;
  categoryIds: string[]; // Maps to the keys in stackData (e.g., ['JS', 'PY'])
  tech: string[];        // Specific sub-stack used in this project
  stars?: string;        // For the "Git Star" console item
}

export interface StackCategory {
  id: string;
  name: string;
  icon: string;
  category: string;
  color: string;
  stability: string;
  subStack: string[];
}

// 1. MASTER PROJECT LIST
// Standard high-tech abstract asset placeholder for deployed live system frames
const DEPLOYED_IMAGE = "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop";

export const allProjects: Project[] = [
  {
    id: 'Webhook Tester Platform',
    title: ' Xenlog404',
    description: 'Real-time HTTP payload listener and telemetry dashboard built to capture, inspect, and debug asynchronous server events.',
    image: '/assets/Xenlog.png', // Replace with actual image path
    lightImage: '/assets/Xenlog-light.png',
    github: 'https://github.com/your-username/webhook-tester', // Replace with your actual repo link
    link: 'https://webhook-tester.yourdomain.com',               // Replace or remove if not live
    categoryIds: ['JS'],
    tech: ['Next.js', 'Express', 'TypeScript', 'Tailwind CSS'],
    stars: '14'
  },
  {
    id: 'school-ecosystem',
    title: 'School Ecosystem Core',
    description: 'Multi-tiered institutional architecture syncing cross-platform mobile portals with a complex relational database management panel.',
    image: DEPLOYED_IMAGE,
    github: 'https://github.com/your-username/school-ecosystem',
    link: 'https://school.yourdomain.com',
    categoryIds: ['FL', 'JS', 'PY', 'DB'],
    tech: ['Flutter', 'React', 'Django', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    stars: '38'
  },
  {
    id: 'meetminds',
    title: 'MeetMinds Platform',
    description: 'High-performance interactive landing portal engineered with optimized component rendering and fluid responsive layout interfaces.',
    image: '/assets/meetminds.png', // Replace with actual image path
    lightImage: '/assets/meetminds-light.png',
    github: 'https://github.com/your-username/meetminds',
    link: 'https://meetminds.yourdomain.com',
    categoryIds: ['JS'],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    stars: '09'
  },
  {
    id: 'restaurant-webapp',
    title: 'Culinary Engine Engine',
    description: 'Full-stack commercial restaurant management suite integrating relational schema mapping, stateful shopping flows, and administrative metrics.',
    image: DEPLOYED_IMAGE,
    github: 'https://github.com/your-username/restaurant-app',
    link: 'https://restaurant.yourdomain.com',
    categoryIds: ['JS', 'DB'],
    tech: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    stars: '22'
  },
  {
    id: 'E-commerce-Redistribution',
    title: 'Demmiz Scenthub ',
    description: 'E-commerce redistribution matrix featuring secure payload transactional data flows, stateful search matrices, and real-time ledger tracking.',
    image: '/assets/Demmiz.png',
    lightImage: '/assets/Demmiz-light.png',
    github: 'https://github.com/your-username/perfume-resell',
    link: 'https://scentxchange.yourdomain.com',
    categoryIds: ['JS', 'DB'],
    tech: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    stars: '19'
  }
];

// 2. STACK CATEGORIES
export const stackData: Record<string, StackCategory> = {
  JS: {
    id: 'JS',
    name: 'JavaScript / TS',
    icon: 'JS',
    category: 'Fullstack Web',
    color: 'bg-yellow-500/10',
    stability: '98.4%',
    subStack: ["React", "Next.js", "Node.js", "Express", "NestJS", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"]
  },
  PY: {
    id: 'PY',
    name: 'Python',
    icon: 'PY',
    category: 'Backend & Logic',
    color: 'bg-blue-500/10',
    stability: '96.2%',
    subStack: ["Django", "FastAPI", "Pygame", "NumPy", "Pandas", "Celery", "PostgreSQL"]
  },
  FL: {
    id: 'FL',
    name: 'Flutter',
    icon: 'FL',
    category: 'Mobile UI',
    color: 'bg-cyan-500/10',
    stability: '94.8%',
    subStack: ["Dart", "Riverpod", "Bloc", "Firebase", "Google Maps API", "Local Auth"]
  },
  CS: {
    id: 'CS',
    name: 'C# / Unity',
    icon: 'C#',
    category: 'Game Dev',
    color: 'bg-purple-500/10',
    stability: '91.5%',
    subStack: ["Unity Engine", "C# Scripting", "Shader Graph", "Universal Render Pipeline", "Netcode"]
  },
  DB: {
    id: 'DB',
    name: 'Databases',
    icon: 'DB',
    category: 'Storage Systems',
    color: 'bg-emerald-500/10',
    stability: '99.9%',
    subStack: ["PostgreSQL", "SQLite", "MongoDB", "Redis", "Prisma ORM", "Drizzle"]
  },
  CLOUD: {
    id: 'CLOUD',
    name: 'Cloud & DevOps',
    icon: '☁️',
    category: 'Infrastructure',
    color: 'bg-orange-500/10',
    stability: '99.1%',
    subStack: ["AWS", "Vercel", "Cloudflare", "GitHub Actions", "Docker", "Railway", "Render", "Cloudinary"]
  },
  ENGINES: {
    id: 'ENGINES',
    name: 'Engines',
    icon: '🎮',
    category: 'Interactives',
    color: 'bg-red-500/10',
    stability: '89.7%',
    subStack: ["Unreal Engine 5", "Unity", "C++", "Blueprints", "Physics Engines"]
  },
  TOOLS: {
    id: 'TOOLS',
    name: 'Software & IDEs',
    icon: '🛠️',
    category: 'Development Environment',
    color: 'bg-zinc-500/10',
    stability: '100%',
    subStack: ["VS Code", "Visual Studio", "Android Studio", "Git", "Postman", "Figma", "Docker Desktop", "Terminal"]
  }
};