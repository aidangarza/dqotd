import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const quotesDirectory = join(process.cwd(), '_quotes')

export function getQuoteSlugs() {
  return fs
    .readdirSync(quotesDirectory)
    .map((filename) => +filename.replace(/\.md$/, ''))
    .sort((a, b) => b - a)
}

type Items = Record<string, string> & { slug?: number }

export function getQuoteBySlug(slug: number, fields: string[] = []) {
  const fullPath = join(quotesDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
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
  return slugs.map((slug) => getQuoteBySlug(slug, fields))
}

export function getActiveQuotes(fields: string[] = []) {
  const quotes = getAllQuotes([...fields, 'releaseDate'])
  const today = new Date()
  return quotes.filter((quote) => new Date(quote.releaseDate) <= today)
}

export function getLatestQuote(fields: string[] = []) {
  const activeQuotes = getActiveQuotes(fields)
  return activeQuotes[0]
}
