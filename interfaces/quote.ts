import type Speaker from './speaker'

type QuoteType = {
  slug: string
  speaker: Speaker
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default QuoteType
