export type ProjectCategory = 'Frontend' | 'Full Stack' | 'Backend' | 'Educational' | 'Practice'

export interface Project {
  slug: string
  title: string
  description: string
  fullDescription: string
  category: ProjectCategory
  status: 'Sample concept' | 'Coming soon' | 'Completed'
  technologies: string[]
  problem: string
  solution: string
  role: string
  features: string[]
  decisions: string[]
  challenges: string
  resolution: string
  lessons: string[]
  improvements: string[]
  liveUrl?: string
  repoUrl?: string
  completedAt: string
  featured: boolean
}

export interface Video {
  title: string
  youtubeId: string
  duration?: string
  description?: string
}

export interface Resource {
  slug: string
  title: string
  description: string
  category: string
  readingTime: string
  publishedAt: string
  tags: string[]
  content: string[]
  featured: boolean
  status: 'Planned Content' | 'Published'
  videos?: Video[]
  playlistUrl?: string
}


export interface SkillGroup {
  category: string
  items: string[]
}

export interface Service {
  title: string
  description: string
}

export interface RoadmapStage {
  title: string
  description: string
  topics: string[]
}

export interface TimelineEntry {
  date: string
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  photo: string
  feedback: string
  relationship: string
  sourceUrl?: string
}

export interface PracticeProblem {
  id: string
  question: string
  answer: string
  hint?: string
}

export interface ModuleDetail {
  title: string
  videoUrl?: string
  slidesUrl?: string
  slidesPreview?: string[]
  practiceProblems?: PracticeProblem[]
}

export interface Course {
  id: string
  title: string
  studentsCount: number
  lessonsCount: number
  description: string
  modules: ModuleDetail[]
}

export interface UpcomingClass {
  id: string
  title: string
  date: string
  time: string
  topic: string
  zoomPlaceholder: string
}

export interface ClassroomCodeSnippet {
  id: string
  title: string
  description: string
  language: string
  code: string
}

export interface StudentQuestion {
  id: string
  studentName: string
  date: string
  question: string
  answer: string
  category: string
}

export interface DSAProblem {
  id: string
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  tags: string[]
  problemUrl?: string
  description: string
  solutionCode: string
  explanation: string
  complexity: {
    time: string
    space: string
  }
}

export interface SystemDesignNote {
  id: string
  title: string
  description: string
  details: string[]
  keyTakeaways: string[]
}

