import { about } from '@schemas/about.schema'
import { job } from '@schemas/job.schema'
import { missing } from '@schemas/missing.schema'
import { project } from '@schemas/project.schema'
import { defineCollection } from 'astro:content'

const aboutCollection = defineCollection({
  type: 'data',
  schema: about
})

const projectCollection = defineCollection({
  type: 'data',
  schema: project
})

const jobsCollection = defineCollection({
  type: 'data',
  schema: job
})

const missingCollection = defineCollection({
  type: 'data',
  schema: missing
})

export const collections = {
  about: aboutCollection,
  projects: projectCollection,
  jobs: jobsCollection,
  missing: missingCollection
}
