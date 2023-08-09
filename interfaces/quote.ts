import type Speaker from './speaker'

type QuoteType = {
  slug: number
  speaker: Speaker
  excerpt: string
  content: string
  releaseDate: string
}

export default QuoteType
