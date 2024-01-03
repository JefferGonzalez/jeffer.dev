import { job } from '@schemas/job.schema'
import { project } from '@schemas/project.schema'
import { defineCollection } from 'astro:content'

const projectCollection = defineCollection({
  type: 'data',
  schema: project
})

const jobsCollection = defineCollection({
  type: 'data',
  schema: job
})

export const collections = {
  projects: projectCollection,
  jobs: jobsCollection
}
