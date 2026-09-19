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
  title: 'Full-Stack MERN Developer & CEO of Lugaish',
  eyebrow: 'MERN Developer • Teaching Web Dev in Bangla • CEO of Lugaish',
  pitch:
    'I build high-performance web applications with MongoDB, Express.js, React, and Node.js, and actively teach web development in Bangla on YouTube.',
  bio: 'I am a student at the Islamic University of Madinah, an active Full-Stack MERN developer, and the CEO of Lugaish (lugaish.vercel.app), where I also serve as an English instructor. Dedicated to empowering aspiring developers, I actively teach modern web development in Bangla on YouTube, breaking down frontend and backend concepts into structured, beginner-friendly courses. Beyond software engineering, I served as District Secretary for Interact District 3281 Bangladesh coordinating youth initiatives across 2,000+ students, graduated from the American Center\'s intensive 2-Year English & Leadership Program, represented youth as an international leadership delegate in Nepal, and completed specialized executive training in The Art of Negotiation.',
  location: 'Madinah, Saudi Arabia / Dhaka, Bangladesh',
  email: 'tahmadium@gmail.com',
  education: 'Islamic University of Madinah — Student',
  experience: 'Founder & CEO, Lead Developer & English Instructor at Lugaish • Web Development Instructor (Bangla on YouTube) • Former District Secretary at Interact District 3281 Bangladesh (Led 2,000+ Students)',
  certifications: 'American Center 2-Year English & Leadership Program, Nepal Youth Leadership Delegate, The Art of Negotiation Program',
  availability: 'Open to suitable opportunities & collaborations',
  languages: 'English (Proficient — Instructor), Bengali (Native — Web Dev Teaching), Urdu (Fluent), Hindi (Fluent), Arabic (Academic / Working)',
  github: 'https://github.com/tanvir560298',
  linkedin: 'https://www.linkedin.com/in/tanvir-ahmad-701265415/',
  youtube: 'https://youtube.com/playlist?list=PLZPdXFF1ExFQ',
  resume: '/Tanvir_Ahmad_CV.pdf',
}

export const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Subjects', href: '/hub#subjects' },
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
      'React',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'DaisyUI',
      'Responsive Design',
      'State Management',
      'React Router',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'JWT Authentication',
      'Role-Based Access Control',
      'API Security',
      'CRUD Operations',
    ],
  },
  {
    category: 'Database & Cloud',
    items: [
      'MongoDB',
      'Mongoose',
      'Firebase Authentication',
      'Database Modeling',
      'Data Aggregations & Indexing',
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'npm',
      'Vite',
      'Vercel',
      'Render',
    ],
  },
  {
    category: 'Leadership & Negotiation',
    items: [
      'Youth Leadership (Interact 3281)',
      'Strategic Negotiation & Deal Making',
      'Team Leadership (2,000+ Students)',
      'Cross-Cultural Communication',
      'English Language Instruction',
      'Public Speaking & Mentorship',
    ],
  },
  {
    category: 'Additional',
    items: [
      'Clean Code & Architecture',
      'Problem Solving',
      'Data Structures & Algorithms',
      'SEO & Web Accessibility',
      'Conflict Mediation & Diplomacy',
    ],
  },
]

export const projects: Project[] = [
  {
    slug: 'lugaish-language-learning-platform',
    title: 'Lugaish — Language Learning Platform for Students',
    description:
      'An interactive language learning platform built specifically for students to master Arabic and English with 60-day curriculum tiers, audio masterclasses, and exam practice. Founded and developed as CEO.',
    fullDescription:
      'Lugaish (lugaish.vercel.app) is an online language learning platform designed specifically for students to acquire Arabic and English proficiency through daily structured classes, 12-day monthly subscription tiers, interactive audio practice, and Cambridge test preparation. As Founder & CEO and Lead Developer, I shaped the product vision for students, architected the full-stack system, developed the web application, and manage production deployment.',
    category: 'Full Stack',
    status: 'Completed',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Vercel', 'Render'],
    problem:
      'Students learning Arabic and English often struggle with fragmented materials, inconsistent daily pacing, and losing access to completed courses.',
    solution:
      'Architected and launched a tailored language learning platform for students with cumulative monthly tier progression, permanent lifetime access retention for enrolled months, audio masterclasses, and an intuitive student/admin portal.',
    role: 'Founder & CEO, Lead Developer — Responsible for student learning vision, curriculum structure, full-stack architecture, and production deployment.',
    features: [
      'Progressive 60-day curriculum across 5 monthly tier modules',
      'Lifetime permanent access retention for enrolled months',
      'Masterclass audio player integration with Cambridge test practice',
      'Role-based admin controls for instant student tier upgrades',
      'Mobile-first responsive interface optimized for low latency',
      'Stateless session management and authenticated API endpoints',
    ],
    decisions: [
      'Single-page application architecture using React and Vite for immediate responsiveness',
      'Modular Express.js backend with MongoDB persistence deployed on Render',
      'Client-side state hydration preserving lifetime tier progress across sessions',
      'Production deployment and continuous delivery configured on Vercel',
    ],
    challenges: 'Balancing progressive curriculum unlocking in 12-day batches while guaranteeing that enrolled students permanently retain lifetime access to all previous months.',
    resolution: 'Implemented cumulative tier validation at both API and client route boundaries, ensuring students can freely revisit earlier material without regression.',
    lessons: [
      'Clear role and permission separation simplifies access control across student cohorts',
      'Consistent curriculum pacing directly enhances student engagement and completion rates',
    ],
    improvements: [
      'Introduce AI-assisted speech pronunciation feedback',
      'Expand interactive live cohort practice rooms',
    ],
    liveUrl: 'https://lugaish.vercel.app',
    repoUrl: 'https://github.com/tanvir560298/Lugaish-client',
    completedAt: 'August 2026',
    featured: true,
  },
  {
    slug: 'studymate-collaborative-learning-platform',
    title: 'StudyMate — Collaborative Study Partner Platform',
    description:
      'A full-stack collaborative platform for students to find study partners, manage learning requests, and connect by subject and skill level.',
    fullDescription:
      'StudyMate is a full-stack MERN web application built to connect students and self-learners with compatible study partners. Users can create learning profiles, explore peers by subject and experience level, exchange partner requests, manage dynamic connections, and toggle between responsive light/dark themes.',
    category: 'Full Stack',
    status: 'Completed',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Firebase Auth', 'Tailwind CSS', 'DaisyUI', 'Axios', 'Vercel'],
    problem:
      'Learners often struggle in isolation when preparing for exams or coding interviews, lacking a simple way to find peers studying the same subjects at their exact skill level.',
    solution:
      'Developed an interactive study-partner matching web app with Firebase authentication, subject-based filtering, partner request workflows, connection CRUD operations, and an Express/MongoDB backend.',
    role: 'Full-Stack MERN Developer — Built the complete client UI with React/Tailwind/DaisyUI and the backend API with Node.js, Express, and MongoDB.',
    features: [
      'User authentication with Firebase & personalized study profiles',
      'Search, filter, and sort study partners by subject and experience level',
      'Send, accept, and manage connection requests in real time',
      'Full CRUD connection management (view, update, remove connections)',
      'Responsive modern UI with dynamic light & dark mode themes',
      'RESTful backend architecture built with Express.js and MongoDB',
    ],
    decisions: [
      'Used MongoDB native driver and clean Express routes for fast, flexible schema management',
      'Integrated Firebase Authentication on frontend with secure client-server sync',
      'Built UI with Tailwind CSS and DaisyUI for rapid, mobile-first responsive design',
      'Implemented SweetAlert2 and Toast notifications for intuitive user feedback',
    ],
    challenges: 'Implementing seamless state synchronization across real-time partner requests and connection updates while maintaining consistent dark and light mode UI performance.',
    resolution: 'Utilized Axios interceptors with centralized React state management and structured REST endpoints to keep partner lists and connection statuses synchronized.',
    lessons: [
      'User matching workflows require clear, immediate visual confirmation on every status change',
      'Separating connection status into discrete states simplifies request tracking and UI rendering',
    ],
    improvements: [
      'Add real-time peer-to-peer web chat with Socket.io',
      'Implement scheduled virtual study rooms with calendar integration',
    ],
    liveUrl: 'https://studymate-client-two.vercel.app',
    repoUrl: 'https://github.com/tanvir560298/studymate-client',
    completedAt: 'May 2026',
    featured: true,
  },
  {
    slug: 'bookcourier-library-delivery-platform',
    title: 'BookCourier — Library Book Borrowing & Delivery Platform',
    description:
      'A full-stack library management and book ordering platform with multi-role dashboards for users, librarians, and administrators.',
    fullDescription:
      'BookCourier is a modern MERN stack library and book ordering platform. It enables readers to browse book catalogues, request doorstep book deliveries, and monitor order lifecycles. It features a complete Role-Based Access Control (RBAC) architecture with dedicated dashboards for readers, librarians, and system administrators.',
    category: 'Full Stack',
    status: 'Completed',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Firebase Auth', 'Tailwind CSS', 'DaisyUI', 'Vercel'],
    problem:
      'Traditional academic and public libraries rely on manual in-person visits and physical paper records, making catalogue browsing, remote borrowing, and delivery tracking cumbersome.',
    solution:
      'Engineered a full-featured digital book ordering and delivery platform featuring real-time catalogue searching, automated borrowing requests, order lifecycle management, and administrative dashboards.',
    role: 'Full-Stack MERN Developer — Architected frontend SPA and backend REST API with JWT role-based access control, database schema, and deployment.',
    features: [
      'Multi-role access control (separate dashboards for Reader, Librarian, and Admin)',
      'Interactive book catalogue with search, category filtering, and sorting',
      'Online book ordering, delivery requests, and invoice tracking',
      'Order management workflow with real-time status updates and order cancellation',
      'Admin tools for managing user roles, book inventory, and system orders',
      'Secure authentication with Firebase and stateless JWT authorization middleware',
    ],
    decisions: [
      'Secured sensitive administrative and librarian routes using server-side JWT verification',
      'Implemented MongoDB collections with optimized indexing for book catalogue search and order queries',
      'Utilized Tailwind CSS and DaisyUI for accessible, responsive multi-role dashboards',
      'Created modular Express controllers separating business logic, auth middleware, and database access',
    ],
    challenges: 'Designing and enforcing strict role-based access control (RBAC) across three distinct user personas while keeping the user experience frictionless.',
    resolution: 'Created custom JWT authorization middleware on the Express server to verify role claims on every protected endpoint, paired with protected route wrappers in React Router.',
    lessons: [
      'Role authorization must always be enforced at the API layer, never solely in frontend routing',
      'Clear status transitions (Pending -> Approved -> Out for Delivery -> Delivered) prevent invalid order updates',
    ],
    improvements: [
      'Integrate automated overdue book SMS / email reminders',
      'Add payment gateway integration for premium deliveries and late fees',
    ],
    liveUrl: 'https://bookcourier-client-neon.vercel.app',
    repoUrl: 'https://github.com/tanvir560298/bookcourier-client',
    completedAt: 'May 2026',
    featured: true,
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
    title: 'HTML Full Course in Bangla | Web Development for Beginners',
    description: 'Learn modern HTML from the ground up in Bangla! A comprehensive 7-part video series covering document structure, text formatting, SEO headings, media, forms, lists, and building a live portfolio website.',
    category: 'Video Course',
    readingTime: '7 Video Lessons • Bangla',
    publishedAt: 'Active on YouTube',
    tags: ['HTML5', 'Bangla', 'Beginner', 'Frontend', 'YouTube'],
    playlistUrl: 'https://youtube.com/playlist?list=PLZPdXFF1ExFQ',
    content: [
      'Welcome to the HTML Full Course in Bangla! In this comprehensive, structured video series, I teach HTML from the ground up in clear, intuitive Bangla to help you start your web development journey with solid foundations.',
      'Across these 7 lessons, we cover everything: environment setup, text formatting, heading hierarchy, images & hyperlinking, forms, lists, document anatomy, and building a real portfolio website project from scratch.',
      'Watch each lesson directly on this page with topic breakdowns or open the complete playlist on YouTube.',
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
    title: 'MERN Stack Web Development',
    description: 'End-to-end web applications built with MongoDB, Express.js, React, and Node.js.',
  },
  {
    title: 'Frontend Website Development',
    description: 'Modern, accessible, and ultra-fast interfaces crafted with React, Vite, and Tailwind CSS.',
  },
  {
    title: 'RESTful API & Backend Engineering',
    description: 'Scalable Node/Express APIs with secure JWT authentication, role guards, and MongoDB integration.',
  },
  {
    title: 'Portfolio & Product Consulting',
    description: 'Clear, high-converting web applications designed to showcase real projects and value.',
  },
  {
    title: 'MERN Stack Mentorship & Tutoring',
    description: 'Practical, step-by-step guidance for beginners and students mastering full-stack web development.',
  },
  {
    title: 'Code Review & Architecture Planning',
    description: 'Constructive audits of full-stack code, database modeling, security patterns, and clean design.',
  },
]

export const timeline: TimelineEntry[] = [
  {
    date: '2024',
    title: 'Started Web Development Journey',
    description: 'Built deep foundations in semantic HTML, CSS, JavaScript, and responsive design.',
  },
  {
    date: '2025',
    title: 'Adopted React & Frontend Ecosystem',
    description: 'Mastered component-driven development, state management, Tailwind CSS, and client routing.',
  },
  {
    date: '2023 – 2024',
    title: 'District Secretary — Interact District 3281 Bangladesh',
    description:
      'Led district youth operations, organized nationwide conferences, and coordinated leadership initiatives with over 2,000+ students across Bangladesh.',
  },
  {
    date: '2024 – 2025',
    title: 'American Center 2-Year Fellowship & Nepal Leadership',
    description:
      'Completed an intensive 2-year English Access & Leadership course via the American Center (US Embassy Dhaka) and represented Bangladesh as a youth leadership delegate in Nepal.',
  },
  {
    date: 'Early 2026',
    title: 'MERN Full-Stack Mastery & The Art of Negotiation',
    description:
      'Engineered full-stack applications with Node.js, Express, MongoDB, and React, while completing specialized training in The Art of Negotiation and deal making.',
  },
  {
    date: 'Mid 2026',
    title: 'Founded & Launched Lugaish as CEO',
    description:
      'Spearheaded the platform vision and developed Lugaish (lugaish.vercel.app), a dedicated online language learning platform for students, while serving as English instructor.',
  },
  {
    date: 'Present',
    title: 'Expanding Digital Learning & Development',
    description: 'Empowering students on Lugaish and preparing comprehensive full-stack web development courses.',
  },
]

export const testimonials: Testimonial[] = []

export const seo = {
  title: `${personal.name} — Full-Stack MERN Developer, Educator & CEO of Lugaish`,
  description: 'Portfolio of Tanvir Ahmad — Full-Stack MERN Developer, CEO of Lugaish, and Web Development Instructor teaching HTML, React, and MERN in Bangla on YouTube.',
}

export const courses: Course[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    studentsCount: 22,
    lessonsCount: 28,
    description: 'Learn how to create modern websites step by step, from your first page to a complete project.',
    modules: [
      {
        title: 'HTML and page structure',
        videoUrl: 'https://www.youtube.com/embed/kUMe1FH4WHY',
        slidesUrl: '/slides/webdev-html.pdf',
        slidesPreview: [
          'Understanding semantic HTML tags',
          'Document structure: head, body, header, footer, section',
          'Working with text elements, links, and images',
          'Forms, inputs, and validation attributes'
        ],
        practiceProblems: [
          {
            id: 'webdev-html-q1',
            question: 'What is the purpose of the alt attribute in an img tag?',
            answer: 'It provides alternative text description for the image if it cannot be loaded, which is essential for screen readers and accessibility.',
            hint: 'Think about screen readers and slow network connections.'
          }
        ]
      },
      {
        title: 'CSS and responsive design',
        videoUrl: 'https://www.youtube.com/embed/1Rs2ND1ryYc',
        slidesUrl: '/slides/webdev-css.pdf',
        slidesPreview: [
          'CSS selectors, properties, and cascade rules',
          'The CSS Box Model: margin, border, padding, content',
          'Flexbox and Grid layout systems',
          'Media queries and mobile-first responsive design'
        ],
        practiceProblems: [
          {
            id: 'webdev-css-q1',
            question: 'What is the difference between margin and padding in CSS?',
            answer: 'Margin creates space outside the element\'s border, while padding creates space inside the element\'s border (between the content and the border).',
            hint: 'Think about the boundaries of the element\'s border.'
          }
        ]
      },
      {
        title: 'JavaScript fundamentals',
        videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
        slidesUrl: '/slides/webdev-js.pdf',
        slidesPreview: [
          'Variables, primitive types, and operators',
          'Control flow: if statements, loops, and switch',
          'Functions, arrow syntax, and scope',
          'Arrays, objects, and basic built-in methods'
        ],
        practiceProblems: [
          {
            id: 'webdev-js-q1',
            question: 'What is the difference between let, const, and var for declaring variables?',
            answer: 'let and const are block-scoped and do not allow hoisting issues, whereas const prevents reassignment. var is function-scoped and has hoisting quirks.',
            hint: 'Compare scope and reassignment rules.'
          }
        ]
      },
      {
        title: 'Working with APIs',
        videoUrl: 'https://www.youtube.com/embed/RGKi6LSPDfo',
        slidesUrl: '/slides/webdev-apis.pdf',
        slidesPreview: [
          'What is a REST API and HTTP request methods (GET, POST, etc.)',
          'Using fetch() to retrieve JSON data',
          'Handling Promises with async/await',
          'Error handling and display feedback in UI'
        ],
        practiceProblems: [
          {
            id: 'webdev-apis-q1',
            question: 'Explain what async and await do in JavaScript.',
            answer: 'async declares that a function returns a Promise and allows the use of await inside it. await pauses execution of the async function until the Promise resolves.',
            hint: 'Think about dealing with promises in a synchronous-looking way.'
          }
        ]
      },
      {
        title: 'React basics and components',
        videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk',
        slidesUrl: '/slides/webdev-react.pdf',
        slidesPreview: [
          'Understanding JSX syntax and virtual DOM',
          'Functional components and passing props',
          'Managing state with the useState hook',
          'Handling events and rendering lists'
        ],
        practiceProblems: [
          {
            id: 'webdev-react-q1',
            question: 'Why do we need a unique key prop when rendering a list of elements in React?',
            answer: 'React uses keys to identify which items have changed, been added, or been removed, optimizing rendering performance and maintaining correct component state.',
            hint: 'Think about virtual DOM reconciliation.'
          }
        ]
      },
      {
        title: 'Build and publish a complete project',
        videoUrl: 'https://www.youtube.com/embed/2-crBg6Z0P0',
        slidesUrl: '/slides/webdev-project.pdf',
        slidesPreview: [
          'Structuring a multi-component React app',
          'Managing build scripts with Vite',
          'Deploying to production hosting like Vercel or Netlify',
          'Basic production optimizations and checklist'
        ],
        practiceProblems: [
          {
            id: 'webdev-project-q1',
            question: 'What is the purpose of running npm run build before deploying?',
            answer: 'It compiles, bundles, and minifies the source code into optimized HTML, CSS, and JS assets inside the dist folder ready for production servers.',
            hint: 'Think about file sizes and browser compatibility.'
          }
        ]
      }
    ]
  },
  {
    id: 'java-programming',
    title: 'Java Programming',
    studentsCount: 18,
    lessonsCount: 24,
    description: 'Build a strong programming foundation with Java and learn to solve problems with confidence.',
    modules: [
      {
        title: 'Variables, data types, and conditions',
        videoUrl: 'https://www.youtube.com/embed/eIrMbLyEl8M',
        slidesUrl: '/slides/java-variables.pdf',
        slidesPreview: [
          'Java syntax structure and the main method',
          'Primitive data types (int, double, boolean, char)',
          'Variable declarations and naming conventions',
          'Conditional statements (if, else if, else, switch)'
        ],
        practiceProblems: [
          {
            id: 'java-var-q1',
            question: 'What is the difference between primitive data types and reference data types in Java?',
            answer: 'Primitives store actual values directly in memory (stack), whereas reference types store references/addresses pointing to objects in the heap.',
            hint: 'Compare stack and heap memory.'
          }
        ]
      },
      {
        title: 'Methods, arrays, and strings',
        videoUrl: 'https://www.youtube.com/embed/A74TOX803D0',
        slidesUrl: '/slides/java-methods.pdf',
        slidesPreview: [
          'Declaring and calling methods, parameters, and return values',
          'Creating and traversing single-dimensional arrays',
          'String manipulation methods (concat, length, substring)',
          'Difference between == and .equals() for String comparison'
        ],
        practiceProblems: [
          {
            id: 'java-method-q1',
            question: 'Why should you use .equals() instead of == to compare strings for value equality?',
            answer: '== compares the reference/memory address of the string objects, while .equals() compares the actual character contents of the strings.',
            hint: 'Think about the string pool and object references.'
          }
        ]
      },
      {
        title: 'Classes and objects',
        videoUrl: 'https://www.youtube.com/embed/IU58d04-gI4',
        slidesUrl: '/slides/java-classes.pdf',
        slidesPreview: [
          'Object-oriented concepts: class blueprints vs. object instances',
          'Defining fields, constructors, and getter/setter methods',
          'Understanding private, public, and default access modifiers',
          'The static keyword for fields and methods'
        ],
        practiceProblems: [
          {
            id: 'java-class-q1',
            question: 'What is a constructor and what is its default behavior if you do not define one?',
            answer: 'A constructor initializes a newly created object. If none is defined, Java automatically provides a default no-argument constructor that sets fields to default values.',
            hint: 'Think about object initialization.'
          }
        ]
      },
      {
        title: 'Core object-oriented programming',
        videoUrl: 'https://www.youtube.com/embed/379D2yHAPwI',
        slidesUrl: '/slides/java-oop.pdf',
        slidesPreview: [
          'Inheritance: extending classes and using super()',
          'Polymorphism: method overloading vs. method overriding',
          'Encapsulation: hiding implementation and exposing interfaces',
          'Abstract classes vs. Interfaces'
        ],
        practiceProblems: [
          {
            id: 'java-oop-q1',
            question: 'What is the main difference between an interface and an abstract class in Java?',
            answer: 'An interface defines a contract (mostly abstract methods, multiple inheritance supported), whereas an abstract class can have instance fields and concrete methods (single inheritance only).',
            hint: 'Compare inheritance rules and state storage.'
          }
        ]
      },
      {
        title: 'Collections and error handling',
        videoUrl: 'https://www.youtube.com/embed/27t3L0s_U-U',
        slidesUrl: '/slides/java-collections.pdf',
        slidesPreview: [
          'Understanding exceptions: checked vs. unchecked',
          'Using try, catch, finally, and throw blocks',
          'The Java Collections Framework: List, Set, Map',
          'Using ArrayList and HashMap in real tasks'
        ],
        practiceProblems: [
          {
            id: 'java-coll-q1',
            question: 'What is the difference between checked exceptions and unchecked (runtime) exceptions?',
            answer: 'Checked exceptions must be declared in the method signature or handled at compile time. Unchecked exceptions occur during runtime and do not require mandatory handling.',
            hint: 'Think about compiler rules.'
          }
        ]
      },
      {
        title: 'Introduction to Spring Boot',
        videoUrl: 'https://www.youtube.com/embed/msXL2ODI9yU',
        slidesUrl: '/slides/java-springboot.pdf',
        slidesPreview: [
          'Spring framework core concepts: Dependency Injection (DI) and Inversion of Control (IoC)',
          'Setting up a Spring Boot project and directory structure',
          'Creating REST controllers with @RestController and @GetMapping',
          'Running and testing a basic Spring Boot endpoint'
        ],
        practiceProblems: [
          {
            id: 'java-spring-q1',
            question: 'What does the @RestController annotation do in Spring Boot?',
            answer: 'It marks a class as a controller where every method returns a domain object directly serialized into JSON/XML, combining @Controller and @ResponseBody.',
            hint: 'Think about HTTP responses.'
          }
        ]
      }
    ]
  },
  {
    id: 'discrete-mathematics',
    title: 'Discrete Mathematics',
    studentsCount: 14,
    lessonsCount: 20,
    description: 'Understand the logic and mathematics used in programming and computer science.',
    modules: [
      {
        title: 'Logic and truth tables',
        videoUrl: 'https://www.youtube.com/embed/xq7D1z7u2yE',
        slidesUrl: '/slides/discrete-math-logic.pdf',
        slidesPreview: [
          'Introduction to Propositional Logic',
          'Understanding logical connectives: AND (conjunction), OR (disjunction), NOT (negation)',
          'How to construct truth tables step-by-step',
          'Implications (if-then) and Biconditionals (if and only if)',
          'Tautologies, Contradictions, and Logical Equivalence'
        ],
        practiceProblems: [
          {
            id: 'dm-logic-q1',
            question: 'Let p be "It is raining" and q be "The ground is wet". Write the proposition p -> q in English.',
            answer: 'If it is raining, then the ground is wet.',
            hint: 'An implication p -> q is translated as "If p, then q".'
          },
          {
            id: 'dm-logic-q2',
            question: 'Construct the truth table for the expression p ^ ~p. What kind of proposition is this?',
            answer: 'When p is T, ~p is F, and p ^ ~p is F. When p is F, ~p is T, and p ^ ~p is F. Since the final column is all False, this is a contradiction.',
            hint: 'Create columns for p, ~p, and p ^ ~p. Calculate values for when p is True and False.'
          },
          {
            id: 'dm-logic-q3',
            question: 'Are the propositions p -> q and ~p v q logically equivalent?',
            answer: 'Yes, they are logically equivalent. Both are False only when p is True and q is False, and True in all other cases. This equivalence is known as the Implication Law.',
            hint: 'Compare their truth tables. They should have identical truth values for all truth assignments of p and q.'
          }
        ]
      },
      {
        title: 'Sets, functions, and relations',
        videoUrl: 'https://www.youtube.com/embed/2uS8aO3o7eE',
        slidesUrl: '/slides/discrete-math-sets.pdf',
        slidesPreview: [
          'Definition of a Set and Element Membership',
          'Common Set Operations: Union, Intersection, Difference, Complement',
          'Cartesian Products and Power Sets',
          'Understanding Functions: One-to-One (Injective), Onto (Surjective), and Bijection',
          'Relations and their Properties: Reflexive, Symmetric, Transitive'
        ],
        practiceProblems: [
          {
            id: 'dm-sets-q1',
            question: 'If set A = {1, 2, 3} and set B = {3, 4, 5}, what is A intersect B and A union B?',
            answer: 'A intersect B = {3} and A union B = {1, 2, 3, 4, 5}.',
            hint: 'Intersection is the common elements, and union is all unique elements combined.'
          },
          {
            id: 'dm-sets-q2',
            question: 'Let f: R -> R be defined by f(x) = 2x + 3. Is this function bijective?',
            answer: 'Yes, it is bijective. It is injective because 2a + 3 = 2b + 3 => 2a = 2b => a = b. It is surjective because for any real number y, we can find x = (y - 3)/2 such that f(x) = y.',
            hint: 'Check if it is injective (one-to-one) and surjective (onto).'
          }
        ]
      },
      {
        title: 'Counting and probability',
        videoUrl: 'https://www.youtube.com/embed/5-9dC7cZ0sE',
        slidesUrl: '/slides/discrete-math-counting.pdf',
        slidesPreview: [
          'The Sum Rule and Product Rule of Counting',
          'Permutations (Order Matters) vs. Combinations (Order Doesn\'t Matter)',
          'The Pigeonhole Principle and its Applications',
          'Introduction to Probability and Sample Spaces',
          'Conditional Probability and Independent Events'
        ],
        practiceProblems: [
          {
            id: 'dm-count-q1',
            question: 'How many different 4-digit PINs can be created if repetition of digits is allowed?',
            answer: 'Using the product rule: 10 * 10 * 10 * 10 = 10,000 possible PINs (from 0000 to 9999).',
            hint: 'There are 10 possible digits (0-9) for each of the 4 positions.'
          },
          {
            id: 'dm-count-q2',
            question: 'A box contains 5 red balls and 3 blue balls. If two balls are drawn at random without replacement, what is the probability that both are blue?',
            answer: 'Probability of first blue is 3/8. Probability of second blue is 2/7. Total probability is (3/8) * (2/7) = 6/56 = 3/28 ≈ 0.107.',
            hint: 'Multiply the probability of the first blue ball by the probability of the second blue ball, given the first was blue.'
          }
        ]
      },
      {
        title: 'Proofs and mathematical induction',
        videoUrl: 'https://www.youtube.com/embed/wKee41v3Jg4',
        slidesUrl: '/slides/discrete-math-proofs.pdf',
        slidesPreview: [
          'Direct Proofs and Proofs by Contraposition',
          'Proof by Contradiction: Assuming the negative and finding an absurdity',
          'The Principle of Mathematical Induction: Base Case and Inductive Step',
          'Strong Induction and Well-Ordering Principle',
          'Common Pitfalls in Mathematical Proofs'
        ],
        practiceProblems: [
          {
            id: 'dm-proofs-q1',
            question: 'Prove that if n is an odd integer, then n^2 is also odd.',
            answer: 'Let n = 2k + 1 for some integer k. Then n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1. Since 2k^2 + 2k is an integer, say m, then n^2 = 2m + 1, which is odd by definition.',
            hint: 'Write an odd integer n in the form 2k + 1 where k is an integer, then square it.'
          }
        ]
      },
      {
        title: 'Graphs and trees',
        videoUrl: 'https://www.youtube.com/embed/C7P-zHnF9Jg',
        slidesUrl: '/slides/discrete-math-graphs.pdf',
        slidesPreview: [
          'Introduction to Graphs: Vertices, Edges, and Degree',
          'Directed vs. Undirected Graphs, Weighted Graphs',
          'Euler Paths/Circuits vs. Hamiltonian Paths/Circuits',
          'Trees: Definitions, Rooted Trees, and Binary Trees',
          'Spanning Trees and Algorithms (Kruskal\'s / Prim\'s)'
        ],
        practiceProblems: [
          {
            id: 'dm-graphs-q1',
            question: 'What is the sum of the degrees of all vertices in any undirected graph?',
            answer: 'The sum of the degrees of all vertices is equal to twice the number of edges (2|E|). This is because every edge contributes exactly 1 to the degree of its two endpoints.',
            hint: 'Think about the Handshaking Lemma.'
          }
        ]
      },
      {
        title: 'Boolean algebra',
        videoUrl: 'https://www.youtube.com/embed/gHk_88B3X3E',
        slidesUrl: '/slides/discrete-math-boolean.pdf',
        slidesPreview: [
          'Boolean Functions, Expressions, and Identities',
          'Duality Principle in Boolean Algebra',
          'Representing Boolean Functions: Sum-of-Products and Product-of-Sums',
          'Logic Gates: AND, OR, NOT, XOR, NAND, NOR',
          'Karnaugh Maps (K-Maps) for Minimization'
        ],
        practiceProblems: [
          {
            id: 'dm-bool-q1',
            question: 'Simplify the Boolean expression: A * B + A * (B + C) using Boolean laws.',
            answer: 'Distributing the second term gives: A * B + A * B + A * C. By the idempotent law, A * B + A * B = A * B. So it simplifies to A * B + A * C = A * (B + C).',
            hint: 'Use the distributive law and absorption/idempotent laws.'
          }
        ]
      }
    ]
  }
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
