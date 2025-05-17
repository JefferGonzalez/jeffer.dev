import { z } from 'astro:content'

export const project = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string(),
  image: z.string().optional(),
  link: z.string().optional(),
  github: z.array(z.string()).optional(),
  tags: z.array(z.string())
})

export const projects = z.array(project)

export type Project = z.infer<typeof project>
