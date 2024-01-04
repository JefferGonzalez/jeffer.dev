import { z } from 'astro:content'

export const missing = z.object({
  title: z.string(),
  message: z.string(),
  action: z.string()
})
