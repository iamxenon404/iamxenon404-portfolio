export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
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

// 1. MASTER PROJECT LIST (Centralized)
export const allProjects: Project[] = [
  {
    id: 'p1',
    title: 'Nexus Dashboard',
    description: 'A high-performance real-time monitoring tool with cross-platform synchronization.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda4e3a4e92?q=80&w=2070&auto=format&fit=crop', // Replace with your actual paths
    github: 'https://github.com/youruser/nexus',
    link: 'https://nexus-demo.com',
    categoryIds: ['JS', 'DB', 'CLOUD'],
    tech: ['Next.js', 'TRPC', 'Tailwind', 'PostgreSQL', 'Docker'],
    stars: '1.2k'
  },
  {
    id: 'p2',
    title: 'Neural Engine',
    description: 'Custom implementation of pattern recognition logic and data processing pipeline.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    github: 'https://github.com/youruser/neural',
    categoryIds: ['PY', 'JS'],
    tech: ['FastAPI', 'NumPy', 'React', 'Tailwind'],
    stars: '450'
  },
  {
    id: 'p3',
    title: 'Zenith Mobile',
    description: 'A native-feel financial tracking application with offline persistence.',
    image: 'https://images.unsplash.com/photo-1616353071588-708dcff912e2?q=80&w=2070&auto=format&fit=crop',
    github: 'https://github.com/youruser/zenith',
    link: 'https://zenith-app.com',
    categoryIds: ['FL', 'DB'],
    tech: ['Dart', 'Riverpod', 'SQLite', 'Firebase'],
    stars: '890'
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
    subStack: ["React", "Next.js", "Node.js", "Express", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"]
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