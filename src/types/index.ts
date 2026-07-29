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
