import { about } from '@/schemas/about.schema'
import { jobs } from '@/schemas/job.schema'
import { missing } from '@/schemas/missing.schema'
import { projects } from '@/schemas/project.schema'
import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'

const aboutCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/about' }),
  schema: about
})

const projectCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: projects
})

const jobsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/jobs' }),
  schema: jobs
})

const missingCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/missing' }),
  schema: missing
})

export const collections = {
  about: aboutCollection,
  projects: projectCollection,
  jobs: jobsCollection,
  missing: missingCollection
}
