import type {
  Project,
  Resource,
  RoadmapStage,
  Service,
  SkillGroup,
  Testimonial,
  TimelineEntry,
  Course,
  UpcomingClass,
  ClassroomCodeSnippet,
  StudentQuestion,
  DSAProblem,
  SystemDesignNote,
} from '../types'

export const personal = {
  name: 'Tanvir Ahmad',
  initials: 'TA',
  title: 'Full-Stack Developer (React & Java/Spring Boot) & Aspiring Educator',
  eyebrow: 'Developer • Preparing to teach on YouTube',
  pitch:
    'I build robust web applications with React and Spring Boot, and am preparing to teach full-stack development on YouTube.',
  bio: 'I am a third-semester student at the Islamic University of Madinah and an active full-stack web developer specializing in React and Java/Spring Boot. For the past two months, I have been working with Lugaish as both an instructor and a web developer. I genuinely enjoy sharing what I learn and explaining it to others in a simple way. Teaching is both a personal interest and a meaningful part of my learning journey, and I am preparing to share practical web development and backend engineering lessons with students on YouTube.',
  location: '[LOCATION]',
  email: '[EMAIL]',
  education: 'Islamic University of Madinah — 3rd Semester Student',
  experience: 'Instructor & Web Developer at Lugaish — 2 months (current)',
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
  { label: 'Dev-Instructor Hub', href: '/hub' },
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
      'Java',
      'Spring Boot',
      'Spring MVC (REST APIs)',
      'Spring Security & JWT',
      'Authentication & Authorization',
      'Validation & Exception Handling',
    ],
  },
  { category: 'Database & ORM', items: ['Spring Data JPA', 'Hibernate', 'PostgreSQL', 'MySQL', 'MongoDB', 'Database Modeling'] },
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
    slug: 'lugaish-language-learning-platform',
    title: 'Lugaish Language Learning Platform',
    description:
      'A live Arabic and English learning platform that I designed and developed single-handedly for Lugaish.',
    fullDescription:
      'Lugaish is an AI-powered Arabic and English learning platform featuring daily lessons, guided practice, progress tracking, and weekly interview preparation. I was the sole website developer.',
    category: 'Frontend',
    status: 'Completed',
    technologies: ['Web Development', 'Responsive UI', 'SEO', 'Vercel'],
    problem:
      'Lugaish needed a clear online platform to present its Arabic and English learning experience.',
    solution:
      'I independently developed and deployed a responsive website that communicates the learning experience and its core features.',
    role: 'Sole website developer — responsible for the website from implementation to deployment.',
    features: [
      'Arabic and English learning experience',
      'Daily lessons',
      'Guided practice',
      'Progress tracking',
      'Weekly interview preparation',
      'Responsive interface',
    ],
    decisions: [
      'Responsive, mobile-friendly presentation',
      'Search and social sharing metadata',
      'Production deployment on Vercel',
    ],
    challenges: '[PROJECT CHALLENGES — DETAILS TO BE ADDED]',
    resolution: '[PROJECT SOLUTIONS — DETAILS TO BE ADDED]',
    lessons: ['[LESSONS LEARNED — DETAILS TO BE ADDED]'],
    improvements: ['Continue improving the platform as real learner needs develop'],
    liveUrl: 'https://lugaish.vercel.app',
    completedAt: '[COMPLETION DATE]',
    featured: true,
  },
  {
    slug: 'react-springboot-learning-platform',
    title: 'React & Spring Boot Learning Platform',
    description: 'Sample concept for a structured course, progress, and mentoring experience.',
    fullDescription:
      'This is a clearly labeled portfolio sample concept, not claimed client or completed work.',
    category: 'Educational',
    status: 'Sample concept',
    technologies: ['React', 'Spring Boot', 'Spring Security', 'PostgreSQL'],
    problem: 'Beginner learners need one clear place to follow lessons and track progress.',
    solution:
      'A proposed learning workspace with modules, progress tracking, and instructor feedback.',
    role: 'Concept, product planning, UI system, and proposed full-stack implementation.',
    features: ['Structured modules', 'Progress tracking', 'Practice tasks', 'Mentor feedback'],
    decisions: ['Feature-based structure', 'Role-aware access', 'Spring Security REST filters'],
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
    title: 'Full-Stack Spring Boot & React Commerce',
    description: 'Planned sample exploring catalogue, cart, authentication, and order flows.',
    fullDescription: 'This project is planned content and is not represented as completed work.',
    category: 'Full Stack',
    status: 'Coming soon',
    technologies: ['React', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL'],
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
    slug: 'html-basics',
    title: 'HTML Complete Crash Course',
    description: 'Learn HTML from the very beginning to structural mastery. Follow our 7-part video series to build accessible, semantic page structures.',
    category: 'Course',
    readingTime: '7 Lessons',
    publishedAt: 'Aug 17, 2026',
    tags: ['HTML', 'Beginner', 'Frontend'],
    content: [
      'Welcome to the HTML complete crash course! In this comprehensive, structured video series, we will cover HTML from start to finish. This is the exact plan we developed to help you build a solid foundation in frontend web development.',
      'Below you will find the 7 video lessons that cover everything from document layout, structure, formatting, lists, tables, links, to images, media, semantic structures, and forms.',
    ],
    featured: true,
    status: 'Published',
    videos: [
      {
        title: 'Class 01: Environment Setup & Introduction',
        youtubeId: 'YEZHgqqsocs',
        duration: '12:45',
        description: '• ওয়েব ডেভেলপমেন্ট জার্নির শুরু ও প্রাথমিক ধারণা\n• প্রয়োজনীয় সফটওয়্যার সেটআপ (Google Chrome & VS Code)\n• প্রজেক্ট ফোল্ডার ও প্রথম .html ফাইল তৈরি\n• HTML ও HyperText কী\n• ব্রাউজারে প্রথম কোড রান ও VS Code Auto Save'
      },
      {
        title: 'Class 02: Paragraph & Text Formatting Tags',
        youtubeId: 'PtwgTt8RX5M',
        duration: '15:20',
        description: '• ব্রাউজারে প্যারাগ্রাফ ও লাইন ব্রেকের নিয়ম\n• প্যারাগ্রাফ ট্যাগ (<p>) ও ওপেনিং/ক্লোজিং ট্যাগের গঠন\n• VS Code টিপস: Word Wrap ও ডামি টেক্সট (lorem)\n• বোল্ড ফরম্যাটিং: <b> vs <strong> (Semantic HTML)\n• ইটালিক ফরম্যাটিং: <i> vs <em> (Emphasis Tag)'
      },
      {
        title: 'Class 03: Heading Tags & Hierarchy',
        youtubeId: 'd6MAKl6tM_I',
        duration: '18:10',
        description: '• হেডলাইন ও টাইটেলের ধারণা (বাস্তব উদাহরণ: পত্রিকার হেডলাইন)\n• Heading Tags: <h1> থেকে <h6>\n• হেডিংয়ের সাইজ ও গুরুত্বের ক্রমবিন্যাস (SEO Hierarchy)\n• প্র্যাকটিক্যাল উদাহরণ: টাইটেল ও প্যারাগ্রাফের সমন্বয়'
      },
      {
        title: 'Class 04: Images, Links & Line Breaks',
        youtubeId: 'uqtDfCDGUuA',
        duration: '14:35',
        description: '• ইমেজ ট্যাগ: <img>, সোর্স (src) ও অল্টারনে티브 টেক্সট (alt)\n• সেলফ-ক্লোজিং ট্যাগ বনাম রেগুলার ট্যাগের পার্থক্য\n• HTML Tag বনাম Element-এর সংজ্ঞা\n• অ্যাঙ্কর ট্যাগ: <a>, হাইপারলিঙ্ক (href)\n• নতুন ট্যাবে লিঙ্ক ওপেন করার নিয়ম (target="_blank")\n• লাইন ব্রেক ট্যাগ (<br>)'
      },
      {
        title: 'Class 05: Forms, Block vs Inline, Containers & Lists',
        youtubeId: '5wfVU8R2yNA',
        duration: '22:15',
        description: '• HTML ফর্ম ও ইনপুট টাইপ: text, password, date, checkbox, email\n• <form> ট্যাগ ও কোড ফরম্যাটার (Prettier)\n• ব্লক লেভেল এলিমেন্ট বনাম ইনলাইন এলিমেন্টের পার্থক্য\n• কনটেইনার ট্যাগ: <div> (Block) এবং <span> (Inline)\n• লিস্ট তৈরির প্রাথমিক ধারণা'
      },
      {
        title: 'Class 06: HTML Lists (Detailed)',
        youtubeId: 'm3Nu1TlNg1o',
        duration: '25:50',
        description: '• লিস্ট আইটেম ট্যাগ: <li>\n• ক্রমানুসারে লিস্ট তৈরি: Ordered List (<ol>)\n• বুলেট পয়েন্ট লিস্ট তৈরি: Unordered List (<ul>)\n• বাস্তব উদাহরণ (বাজারের ফর্দ) দিয়ে ol বনাম ul-এর ব্যবহার'
      },
      {
        title: 'Class 07: Boilerplate, Live Server & Mini Project',
        youtubeId: 'fJKSDcXKPXo',
        duration: '19:40',
        description: '• HTML Boilerplate কোড স্ট্রাকচার (! + Enter শর্টকাট)\n• ডকুমেন্ট অ্যানাটমি: <!DOCTYPE html>, <html>, <head>, <body>\n• ওয়েবসাইট <title> পরিবর্তন ও Favicon আইকন যুক্ত করা\n• VS Code Live Server এক্সটেনশন ব্যবহার করে লাইভ কোডিং\n• বাস্তব প্রজেক্ট: সম্পূর্ণ শেখা ট্যাগগুলো দিয়ে একটি পোর্টফোলিও/বায়ো পেজ তৈরি এবং কোর্স সমাপনী গাইডলাইন'
      }
    ]
  },
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
    title: 'React & Spring Boot Development',
    description: 'Practical full-stack application planning and backend integration.',
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
    title: 'React & Spring Boot Mentorship',
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
    title: 'Started learning React and Java/Spring Boot',
    description: 'Moved toward enterprise full-stack development and web API engineering.',
  },
  {
    date: '[DATE]',
    title: 'Developed and launched the Lugaish website',
    description:
      'Single-handedly developed the live web platform while also serving as a non-web-development instructor at Lugaish.',
  },
  {
    date: '[FUTURE DATE]',
    title: 'Next milestone',
    description: 'Replace this with the next verified achievement.',
  },
]

export const testimonials: Testimonial[] = []

export const seo = {
  title: `${personal.name} — React & Spring Boot Developer & Instructor`,
  description: 'Robust React & Java/Spring Boot applications and clear, beginner-friendly full-stack guidance.',
}

export const courses: Course[] = [
  {
    id: 'react-springboot-masterclass',
    title: 'Full-Stack React & Spring Boot',
    studentsCount: 22,
    lessonsCount: 28,
    description: 'A comprehensive, project-based path where students learn to design, build, secure, and deploy modern React web apps integrated with Java/Spring Boot backends.',
    modules: [
      'Java Fundamentals & Object-Oriented Programming (OOP)',
      'Spring Boot & REST API Architecture (Controllers & Services)',
      'Spring Data JPA, Hibernate & PostgreSQL Database Modeling',
      'React Fundamentals, Hooks, and Component State',
      'Spring Security, JWT Filters & Frontend Route Protection',
      'Deploying Spring Boot with Docker and React on Vercel',
    ],
  },
  {
    id: 'js-essentials',
    title: 'JavaScript Essentials & DOM',
    studentsCount: 12,
    lessonsCount: 16,
    description: 'A deep-dive course focusing on pure JavaScript concepts, asynchronous execution, and modern DOM manipulation.',
    modules: [
      'Scope, Hoisting, and Closures',
      'Array Methods (map, filter, reduce) & Mutability',
      'Asynchronous JS: Event Loop, Promises, and Async/Await',
      'DOM Events & Event Delegation',
      'HTTP Requests, Fetch API, and Error Handling',
    ],
  },
]

export const upcomingClasses: UpcomingClass[] = [
  {
    id: 'class-1',
    title: 'Interactive Live Session: Async JS & Promises',
    date: 'Aug 8, 2026',
    time: '8:00 PM - 9:30 PM (BST)',
    topic: 'How the JS engine handles asynchronous code. Event Loop, Microtask Queue, Promise.all, and error handling in Express async handlers.',
    zoomPlaceholder: 'https://zoom.us/mock-classroom-link',
  },
  {
    id: 'class-2',
    title: 'Practical Lab: Mapping Entity Relationships with Hibernate',
    date: 'Aug 12, 2026',
    time: '8:00 PM - 9:30 PM (BST)',
    topic: 'Modeling relationships (One-to-Many, Many-to-Many) in Spring Boot. Solving the N+1 select query problem using Join Fetch and EntityGraphs in JPA repositories.',
    zoomPlaceholder: 'https://zoom.us/mock-classroom-link-2',
  },
]

export const classroomSnippets: ClassroomCodeSnippet[] = [
  {
    id: 'snippet-jwt',
    title: 'JWT Authentication Request Filter (Spring Security)',
    description: 'Custom request filter we build in Java to intercept incoming REST calls, extract Bearer tokens from the Authorization header, validate signatures, and bind the user to Spring Security’s Context.',
    language: 'java',
    code: `@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                    HttpServletResponse response, 
                                    FilterChain chain) throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization");
        String username = null;
        String jwt = null;

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            jwt = authHeader.substring(7);
            username = jwtUtil.extractUsername(jwt);
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);

            if (jwtUtil.validateToken(jwt, userDetails)) {
                var authToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities()
                );
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        chain.doFilter(request, response);
    }
}`,
  },
  {
    id: 'snippet-fetch-hook',
    title: 'Custom React Fetch & Cache Hook (React)',
    description: 'A custom hook I designed to show students how to abstract API fetching logic, handle loading/error states, and keep a simple in-memory cache of API calls.',
    language: 'javascript',
    code: `import { useState, useEffect, useRef } from 'react';

const cache = {}; // Simple in-memory cache object

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    
    if (cache[url]) {
      setData(cache[url]);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(\`HTTP error! status: \${response.status}\`);
        const json = await response.json();
        
        cache[url] = json; // Save to cache
        if (isMounted.current) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (isMounted.current) setError(err.message);
      } finally {
        if (isMounted.current) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, [url]);

  return { data, loading, error };
}`,
  },
]

export const studentQuestions: StudentQuestion[] = [
  {
    id: 'q-1',
    studentName: 'Ahsan Kabir (Spring Student)',
    date: 'Aug 2, 2026',
    question: 'What is the N+1 Query Problem in Spring Data JPA/Hibernate, and how do we resolve it?',
    answer: 'The N+1 problem occurs when fetching an entity with lazy-loaded relationships (like a Post and its Comments). If you have N Posts and access their Comments, Hibernate executes 1 query to fetch the Posts, and then N separate queries to fetch comments for each post (1 + N queries). We resolve this using JOIN FETCH in JPQL queries, using EntityGraphs, or specifying batch fetch sizes in the configuration.',
    category: 'Databases',
  },
  {
    id: 'q-2',
    studentName: 'Tasnim Karim (JS Student)',
    date: 'Jul 28, 2026',
    question: 'What is the main difference between Microtask Queue and Callback Queue in the Event Loop?',
    answer: 'The Microtask Queue (which handles Promises and process.nextTick) has a higher priority than the Callback/Macrotask Queue (which handles setTimeout, setInterval, and DOM events). The Event Loop will completely empty the Microtask Queue before moving on to execute even a single callback from the Macrotask Queue.',
    category: 'JavaScript',
  },
  {
    id: 'q-3',
    studentName: 'Fahim Faisal (React-Java Student)',
    date: 'Jul 25, 2026',
    question: 'Why do we disable session state (stateless session creation) in Spring Security when using JWT?',
    answer: 'We configure Spring Security to be stateless (using SessionCreationPolicy.STATELESS) because JWT tokens contain all user authentication details inside their cryptographically signed payloads. The server does not need to store session states in RAM or look up session IDs in database. Disabling server sessions makes the API fully REST-compliant, scalable, and resilient to CSRF attacks.',
    category: 'Backend Security',
  },
]

export const dsaStats = {
  solved: 82,
  easy: 45,
  medium: 32,
  hard: 5,
  target: 150,
}

export const dsaProblems: DSAProblem[] = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    tags: ['Arrays', 'Hash Map'],
    problemUrl: 'https://leetcode.com/problems/two-sum/',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution.',
    solutionCode: `function twoSum(nums, target) {
  const map = new Map(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    // Check if the complement already exists in our map
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    // Otherwise, store current element and its index
    map.set(nums[i], i);
  }
  
  return [];
}`,
    explanation: 'We use a Hash Map to store the indices of the numbers we visit. For every number, we compute the required `complement` (target - current). If the complement is already in the map, we have found the pair and return their indices. This cuts down the time complexity from O(N^2) to O(N).',
    complexity: {
      time: 'O(N) — single pass scan',
      space: 'O(N) — to store elements in the hash map',
    },
  },
  {
    id: 'merge-intervals',
    title: 'Merge Intervals',
    difficulty: 'Medium',
    tags: ['Sorting', 'Arrays'],
    problemUrl: 'https://leetcode.com/problems/merge-intervals/',
    description: 'Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.',
    solutionCode: `function merge(intervals) {
  if (intervals.length <= 1) return intervals;

  // 1. Sort the intervals based on their start times
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];

    // 2. If current interval overlaps with the last merged interval
    if (current[0] <= lastMerged[1]) {
      // Merge them by updating the end time
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // 3. Otherwise, add current interval as it is
      merged.push(current);
    }
  }

  return merged;
}`,
    explanation: 'By sorting the intervals by their start times, we guarantee that any potential overlapping intervals are adjacent in the list. We iterate and compare the start time of the current interval with the end time of the last merged interval. If they overlap, we extend the boundary; if not, we push the new interval.',
    complexity: {
      time: 'O(N log N) — due to sorting the N intervals',
      space: 'O(N) (or O(log N)) — space complexity for sorting stack or output array',
    },
  },
  {
    id: 'lru-cache',
    title: 'LRU Cache Design',
    difficulty: 'Hard',
    tags: ['Design', 'Doubly Linked List', 'Hash Map'],
    problemUrl: 'https://leetcode.com/problems/lru-cache/',
    description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the get() and put() methods in O(1) time complexity.',
    solutionCode: `class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // key -> Node
    
    // Sentinel dummy nodes
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Remove node from list
  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  // Add node to the head (most recently used position)
  _add(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    
    const node = this.map.get(key);
    this._remove(node);
    this._add(node); // Move to head
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this._remove(this.map.get(key));
    }
    
    const newNode = new Node(key, value);
    this._add(newNode);
    this.map.set(key, newNode);

    if (this.map.size > this.capacity) {
      // Evict tail (least recently used)
      const lru = this.tail.prev;
      this._remove(lru);
      this.map.delete(lru.key);
    }
  }
}`,
    explanation: 'To achieve O(1) for both lookups and updates, we combine a Hash Map and a Doubly Linked List. The Map provides O(1) retrieval of any node by its key. The Doubly Linked List allows us to add nodes to the head (marking them as most recently used) and remove nodes from the tail (marking them as least recently used) in O(1) time.',
    complexity: {
      time: 'O(1) — constant time for get and put operations',
      space: 'O(C) — where C is the maximum capacity of the cache',
    },
  },
]

export const systemDesignNotes: SystemDesignNote[] = [
  {
    id: 'rate-limiting',
    title: 'API Rate Limiting (Token Bucket)',
    description: 'How to design a distributed rate limiter to protect backend APIs from overload and brute-force requests.',
    details: [
      'Each user ID is associated with a bucket holding a maximum number of tokens.',
      'Tokens are refilled periodically at a constant rate (e.g., 5 tokens per second).',
      'Every incoming API request consumes one token. If no tokens remain, the request is rejected with HTTP 429 Too Many Requests.',
      'We use Redis to store token counts and timestamps in-memory, ensuring extremely low latency verification (under 1ms).',
    ],
    keyTakeaways: [
      'Protects server against DoS and scraping.',
      'Redis EVAL scripts make token decrements thread-safe (atomic operations).',
      'Gracefully allows traffic bursts up to the bucket capacity.',
    ],
  },
  {
    id: 'db-indexing',
    title: 'Database Indexing Fundamentals (B-Trees)',
    description: 'Understanding how database indexes optimize search performance, and the cost they bring to write operations.',
    details: [
      'Without an index, a database must scan every document in the collection (COLLSCAN). An index organizes values into a B-Tree structure.',
      'Searching an index reduces complexity from O(N) to O(log N), speeding up lookups from seconds to milliseconds.',
      'Compound indexes are ordered by multiple keys. The sequence of keys in a compound index determines whether it can support queries (e.g., query must match prefix keys).',
      'Every index requires memory storage and slows down writes (INSERT, UPDATE, DELETE) because the database must keep the B-Tree balanced.',
    ],
    keyTakeaways: [
      'Index selectively based on common filter and sort queries.',
      'Use MongoDB explain() plans to confirm if indexes are actually used.',
      'Avoid over-indexing, as it inflates RAM usage and degrades write performance.',
    ],
  },
]

