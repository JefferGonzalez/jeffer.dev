import { z } from 'astro:content'

export const project = z.array(
  z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    image: z.string(),
    link: z.string(),
    github: z.string().optional(),
    tags: z.array(z.string())
  })
)

export type Project = z.infer<typeof project>