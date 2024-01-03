import { z } from 'astro:content'

export const job = z.array(
  z.object({
    initialDate: z.string(),
    finalDate: z.string(),
    title: z.string(),
    company: z.string(),
    description: z.string(),
    latest: z.boolean().optional()
  })
)
