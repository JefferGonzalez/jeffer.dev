import { getCollection } from 'astro:content'
import type { CollectionEntry } from 'astro:content'

export async function getAboutData(
  lang: string
): Promise<CollectionEntry<'about'>['data']> {
  const entries = await getCollection('about')
  const entry = entries.find((e) => e.id === lang)

  if (!entry) {
    throw new Error(`Entry not found for language: ${lang} in 'about'`)
  }

  return entry.data
}

export async function getJobsData(
  lang: string
): Promise<CollectionEntry<'jobs'>['data']> {
  const entries = await getCollection('jobs')
  const entry = entries.find((e) => e.id === lang)

  if (!entry) {
    throw new Error(`Entry not found for language: ${lang} in 'jobs'`)
  }

  return entry.data
}

export async function getProjectsData(
  lang: string
): Promise<CollectionEntry<'projects'>['data']> {
  const entries = await getCollection('projects')
  const entry = entries.find((e) => e.id === lang)

  if (!entry) {
    throw new Error(`Entry not found for language: ${lang} in 'projects'`)
  }

  return entry.data
}

export async function getMissingData(
  lang: string
): Promise<CollectionEntry<'missing'>['data']> {
  const entries = await getCollection('missing')
  const entry = entries.find((e) => e.id === lang)

  if (!entry) {
    throw new Error(`Entry not found for language: ${lang} in 'missing'`)
  }

  return entry.data
}
