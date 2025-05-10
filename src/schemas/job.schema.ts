import { z } from 'astro:content'

export const job = z.object({
  initialDate: z.string(),
  finalDate: z.string(),
  title: z.string(),
  company: z.string(),
  description: z.array(z.string()),
  latest: z.boolean().optional()
})

export const jobs = z.array(job)

export type Job = z.infer<typeof job>
