import { about } from '@schemas/about.schema'
import { job } from '@schemas/job.schema'
import { missing } from '@schemas/missing.schema'
import { project } from '@schemas/project.schema'
import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const aboutCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/about' }),
  schema: about
})

const projectCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: project
})

const jobsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/jobs' }),
  schema: job
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
