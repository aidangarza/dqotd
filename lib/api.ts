import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const quotesDirectory = join(process.cwd(), '_quotes')

export function getQuoteSlugs() {
  return fs.readdirSync(quotesDirectory).sort()
}

export function getQuoteBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(quotesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllQuotes(fields: string[] = []) {
  const slugs = getQuoteSlugs()
  return (
    slugs
      .map((slug) => getQuoteBySlug(slug, fields))
      // sort quotes by date in descending order
      .sort((quote1, quote2) => (quote1.date > quote2.date ? -1 : 1))
  )
}

export function getLatestQuote(fields: string[] = []) {
  const slugs = getQuoteSlugs()
  return getQuoteBySlug(slugs[0], fields)
}
