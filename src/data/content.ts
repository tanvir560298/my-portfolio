import type {
  Project,
  Resource,
  RoadmapStage,
  Service,
  SkillGroup,
  Testimonial,
  TimelineEntry,
} from '../types'

export const personal = {
  name: '[YOUR NAME]',
  initials: 'YN',
  title: 'MERN Stack Developer & Web Development Instructor',
  eyebrow: 'Developer • Educator in progress',
  pitch:
    'I build practical web applications and explain complex development concepts in clear, beginner-friendly steps.',
  bio: '[PROFESSIONAL BIO]',
  location: '[LOCATION]',
  email: '[EMAIL]',
  education: '[EDUCATION]',
  experience: '[EXPERIENCE]',
  certifications: '[CERTIFICATIONS]',
  availability: 'Open to suitable opportunities',
  languages: '[LANGUAGES]',
  github: '[GITHUB URL]',
  linkedin: '[LINKEDIN URL]',
  resume: '/resume-placeholder.txt',
}

export const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Teaching', href: '/#teaching' },
  { label: 'Resources', href: '/resources' },
  { label: 'Resume', href: '/#resume' },
  { label: 'Contact', href: '/#contact' },
]

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Responsive Design',
      'State Management',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Authentication',
      'API Validation',
      'Error Handling',
    ],
  },
  { category: 'Database', items: ['MongoDB', 'Mongoose', 'Database Modeling'] },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'Vite', 'Deployment Platforms'],
  },
  {
    category: 'Additional',
    items: [
      'Accessibility',
      'SEO Basics',
      'Testing',
      'Clean Code',
      'Problem-Solving',
      'Data Structures & Algorithms',
    ],
  },
]

export const projects: Project[] = [
  {
    slug: 'mern-learning-platform',
    title: 'MERN Learning Platform',
    description: 'Sample concept for a structured course, progress, and mentoring experience.',
    fullDescription:
      'This is a clearly labeled portfolio sample concept, not claimed client or completed work.',
    category: 'Educational',
    status: 'Sample concept',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    problem: 'Beginner learners need one clear place to follow lessons and track progress.',
    solution:
      'A proposed learning workspace with modules, progress tracking, and instructor feedback.',
    role: 'Concept, product planning, UI system, and proposed full-stack implementation.',
    features: ['Structured modules', 'Progress tracking', 'Practice tasks', 'Mentor feedback'],
    decisions: ['Feature-based structure', 'Role-aware access', 'REST API contract'],
    challenges: 'Designing a useful learning flow without overwhelming a new developer.',
    resolution: 'Use progressive disclosure and divide every stage into small outcomes.',
    lessons: ['Start with learner outcomes', 'Keep interfaces focused'],
    improvements: ['Add real course content', 'User testing', 'Accessibility audit'],
    completedAt: '[COMPLETION DATE]',
    featured: true,
  },
  {
    slug: 'student-course-dashboard',
    title: 'Student Course Dashboard',
    description: 'Sample frontend concept for lessons, assignments, and learning progress.',
    fullDescription: 'A placeholder case study demonstrating the intended presentation format.',
    category: 'Frontend',
    status: 'Sample concept',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    problem: 'Course information can feel scattered and difficult to prioritize.',
    solution: 'A focused dashboard showing next steps, progress, and recent learning activity.',
    role: 'Sample UI architecture and frontend implementation.',
    features: [
      'Responsive dashboard',
      'Course cards',
      'Progress overview',
      'Accessible navigation',
    ],
    decisions: ['Typed content', 'Reusable cards', 'Mobile-first layout'],
    challenges: 'Presenting several content types without visual clutter.',
    resolution: 'A clear hierarchy and limited number of emphasized actions.',
    lessons: ['Hierarchy matters more than decoration', 'Mobile constraints improve focus'],
    improvements: ['Connect a real API', 'Add learner interviews'],
    completedAt: '[COMPLETION DATE]',
    featured: true,
  },
  {
    slug: 'full-stack-commerce',
    title: 'Full-Stack Commerce Application',
    description: 'Planned sample exploring catalogue, cart, authentication, and order flows.',
    fullDescription: 'This project is planned content and is not represented as completed work.',
    category: 'Full Stack',
    status: 'Coming soon',
    technologies: ['React', 'Express', 'MongoDB', 'Node.js'],
    problem: 'Plan a reliable end-to-end commerce workflow.',
    solution: 'A staged implementation beginning with catalogue and cart fundamentals.',
    role: 'Planned full-stack development.',
    features: ['Product catalogue', 'Cart', 'Authentication', 'Order workflow'],
    decisions: ['To be documented during implementation'],
    challenges: 'To be documented during implementation.',
    resolution: 'To be documented during implementation.',
    lessons: ['To be documented after implementation'],
    improvements: ['Payments', 'Testing', 'Deployment'],
    completedAt: '[COMPLETION DATE]',
    featured: false,
  },
]

export const roadmap: RoadmapStage[] = [
  {
    title: 'Web Fundamentals',
    description: 'Understand the platform before the frameworks.',
    topics: ['How websites work', 'HTML', 'CSS', 'Responsive design', 'Git & GitHub'],
  },
  {
    title: 'JavaScript',
    description: 'Build strong programming and browser fundamentals.',
    topics: [
      'Variables & data types',
      'Functions',
      'Arrays & objects',
      'DOM',
      'Async JavaScript',
      'Fetch API',
      'ES6+',
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Build maintainable, interactive interfaces.',
    topics: [
      'React fundamentals',
      'Components',
      'Props & state',
      'Hooks',
      'Routing',
      'Forms',
      'API integration',
      'State management',
      'Projects',
    ],
  },
  {
    title: 'Backend Development',
    description: 'Create secure application services.',
    topics: [
      'Node.js',
      'Express.js',
      'REST API design',
      'Middleware',
      'Authentication',
      'Authorization',
      'Validation',
      'Error handling',
      'Security basics',
    ],
  },
  {
    title: 'Database',
    description: 'Model and query application data.',
    topics: [
      'MongoDB',
      'Mongoose',
      'Schema design',
      'CRUD',
      'Relationships',
      'Querying',
      'Indexing basics',
    ],
  },
  {
    title: 'Full-Stack Projects',
    description: 'Connect everything and prepare to ship.',
    topics: [
      'Frontend/backend integration',
      'Auth flow',
      'File uploads',
      'Payments (advanced)',
      'Testing',
      'Deployment',
      'Portfolio prep',
      'Job prep',
    ],
  },
]

export const resources: Resource[] = [
  {
    slug: 'javascript-roadmap',
    title: 'A Practical JavaScript Learning Roadmap',
    description: 'A planned guide to learning JavaScript in a useful order.',
    category: 'Roadmap',
    readingTime: '[READING TIME]',
    publishedAt: '[PUBLICATION DATE]',
    tags: ['JavaScript', 'Beginner'],
    content: [
      'This resource is planned content.',
      'The final guide will include concepts, exercises, and project checkpoints.',
    ],
    featured: true,
    status: 'Planned Content',
  },
  {
    slug: 'react-beginner-mistakes',
    title: 'Common React Beginner Mistakes',
    description: 'A planned field guide to frequent early React problems.',
    category: 'Guide',
    readingTime: '[READING TIME]',
    publishedAt: '[PUBLICATION DATE]',
    tags: ['React', 'Learning'],
    content: [
      'This resource is planned content.',
      'It will explain each mistake with a small example and correction.',
    ],
    featured: false,
    status: 'Planned Content',
  },
]

export const services: Service[] = [
  {
    title: 'Frontend Website Development',
    description: 'Responsive, accessible interfaces built around clear business goals.',
  },
  {
    title: 'MERN Application Development',
    description: 'Practical full-stack application planning and development.',
  },
  {
    title: 'Portfolio Website Development',
    description: 'Focused portfolio sites that make skills and work easy to evaluate.',
  },
  {
    title: 'Beginner Web Tutoring',
    description: 'Step-by-step support for learners building strong fundamentals.',
  },
  {
    title: 'MERN Learning Guidance',
    description: 'A structured learning path based on your current level and goals.',
  },
  {
    title: 'Code Review & Project Guidance',
    description: 'Constructive feedback on code, structure, and next steps.',
  },
]

export const timeline: TimelineEntry[] = [
  {
    date: '[DATE]',
    title: 'Started learning web development',
    description: 'The beginning of the editable development journey.',
  },
  {
    date: '[DATE]',
    title: 'Built HTML, CSS, and JavaScript foundations',
    description: 'Focused on the core technologies of the web.',
  },
  {
    date: '[DATE]',
    title: 'Started learning React and the MERN stack',
    description: 'Moved toward component-driven and full-stack development.',
  },
  {
    date: '[FUTURE DATE]',
    title: 'Next milestone',
    description: 'Replace this with the next verified achievement.',
  },
]

export const testimonials: Testimonial[] = []

export const seo = {
  title: `${personal.name} — MERN Stack Developer & Instructor`,
  description: 'Practical MERN applications and clear, beginner-friendly web development guidance.',
}
