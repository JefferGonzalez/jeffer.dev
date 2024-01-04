import { z } from 'astro:content'

export const about = z.object({
  greeting: z.string(),
  paragraph: z.string(),
  paragraph2: z.string()
})
