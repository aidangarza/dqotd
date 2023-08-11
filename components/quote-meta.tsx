import { PATH_QUOTE_IMAGE, SITE_NAME, SITE_SHORTURL } from '../lib/constants'
import formatDate from '../lib/formatDate'
import Quote from '../interfaces/quote'
import Head from 'next/head'

type Props = {
  quote: Quote
  children?: React.ReactNode
}

const QuoteMeta = ({ quote, children }: Props) => {
  const title = `${SITE_NAME} | ${formatDate(quote.releaseDate)}`
  const description = `A quote from ${
    quote.speaker.name
  }. Posted on ${formatDate(quote.releaseDate)}. "${quote.excerpt}..."`
  const imageUrl = SITE_SHORTURL + PATH_QUOTE_IMAGE(quote.slug)

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:image" content={imageUrl} />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {children}
    </Head>
  )
}

export default QuoteMeta
