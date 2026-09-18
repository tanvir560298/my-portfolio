import {
  Braces,
  Code2,
  Database,
  GitBranch,
  KeyRound,
  Layers3,
  MonitorSmartphone,
  Network,
  Palette,
  Server,
  type LucideIcon,
} from 'lucide-react'

export enum TopicStatus {
  Planned = 'planned',
  ComingSoon = 'coming-soon',
  InProgress = 'in-progress',
  Available = 'available',
}

export interface RoadmapStep {
  id: string
  name: string
  description: string
  icon: LucideIcon
  orbitRadius: number
  size: number
  color: string
  status: TopicStatus
  resourceLink?: string
}

export const roadmapData: RoadmapStep[] = [
  {
    id: 'html',
    name: 'HTML',
    description: 'Build accessible, semantic page structures and understand how the web works.',
    icon: Code2,
    orbitRadius: 120,
    size: 52,
    color: '#f97316',
    status: TopicStatus.Available,
    resourceLink: '/resources/html-basics',
  },
  {
    id: 'css',
    name: 'CSS',
    description: 'Style polished interfaces with layout, typography, color, and modern CSS.',
    icon: Palette,
    orbitRadius: 155,
    size: 48,
    color: '#38bdf8',
    status: TopicStatus.Available,
    resourceLink: '/resources',
  },
  {
    id: 'responsive-design',
    name: 'Responsive Design',
    description: 'Create inclusive experiences that work naturally across screen sizes.',
    icon: MonitorSmartphone,
    orbitRadius: 190,
    size: 46,
    color: '#a78bfa',
    status: TopicStatus.InProgress,
  },
  {
    id: 'git',
    name: 'Git',
    description: 'Track changes, work confidently with branches, and collaborate through GitHub.',
    icon: GitBranch,
    orbitRadius: 225,
    size: 44,
    color: '#fb7185',
    status: TopicStatus.ComingSoon,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Learn programming fundamentals, the DOM, async code, and browser APIs.',
    icon: Braces,
    orbitRadius: 260,
    size: 58,
    color: '#facc15',
    status: TopicStatus.InProgress,
  },
  {
    id: 'react',
    name: 'React',
    description: 'Build maintainable interfaces with components, hooks, routing, and forms.',
    icon: Network,
    orbitRadius: 300,
    size: 54,
    color: '#22d3ee',
    status: TopicStatus.ComingSoon,
  },
  {
    id: 'nodejs-express',
    name: 'Node & Express',
    description: 'Build fast, scalable server-side applications and RESTful APIs with Node.js and Express.',
    icon: Server,
    orbitRadius: 335,
    size: 50,
    color: '#84cc16',
    status: TopicStatus.Available,
  },
  {
    id: 'mongodb',
    name: 'MongoDB & Mongoose',
    description: 'Design flexible NoSQL schemas, model collections, and optimize database queries with MongoDB.',
    icon: Database,
    orbitRadius: 370,
    size: 48,
    color: '#10b981',
    status: TopicStatus.Available,
  },
  {
    id: 'auth-security',
    name: 'Auth & JWT Security',
    description: 'Secure application endpoints with JWT tokens, role-based access control, and bcrypt hashing.',
    icon: KeyRound,
    orbitRadius: 410,
    size: 46,
    color: '#60a5fa',
    status: TopicStatus.Available,
  },
  {
    id: 'full-stack-projects',
    name: 'Full-Stack MERN',
    description: 'Connect React frontends with Node.js/Express APIs and MongoDB to build production-ready applications.',
    icon: Layers3,
    orbitRadius: 450,
    size: 60,
    color: '#34d399',
    status: TopicStatus.Available,
  },
]
