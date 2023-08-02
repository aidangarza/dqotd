import type Speaker from './speaker'

type QuoteType = {
  slug: number
  speaker: Speaker
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  releaseDate: string
}

export default QuoteType
