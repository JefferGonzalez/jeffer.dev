export interface Project {
  title: string
  subtitle?: string
  description: string
  image: string
  link: string
  github?: string
  tags: string[]
}

export interface Job {
  initialDate: string
  finalDate: string
  title: string
  company: string
  description: string
  link?: string
  latest?: boolean
}
