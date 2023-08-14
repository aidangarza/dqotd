import Container from '../components/container'
import Layout from '../components/layout'
import { getLatestQuote } from '../lib/api'
import Quote from '../interfaces/quote'
import QuoteBody from '../components/quote-body'
import Header from '../components/header'
import markdownToHtml from '../lib/markdownToHtml'
import DateFormatter from '../components/date-formatter'
import Promotion from '../components/promotion'
import QuoteMeta from '../components/quote-meta'

type Props = {
  latestQuote: Quote
}

export default function Index({ latestQuote }: Props) {
  return (
    <Layout>
      <QuoteMeta quote={latestQuote} />
      <Container fullScreen>
        <Header
          title={
            <>
              Posted on <DateFormatter dateString={latestQuote.releaseDate} />
            </>
          }
        />
        {latestQuote && (
          <QuoteBody
            slug={latestQuote.slug}
            content={latestQuote.content}
            excerpt={latestQuote.excerpt}
            speaker={latestQuote.speaker}
            latestSlug={latestQuote.slug}
          />
        )}
        <Promotion />
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const latestQuote = getLatestQuote([
    'slug',
    'content',
    'excerpt',
    'speaker',
    'releaseDate',
  ])

  const content = await markdownToHtml(latestQuote.content || '')

  return {
    props: {
      latestQuote: {
        ...latestQuote,
        content,
      },
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every hour
    revalidate: 60 * 60,
  }
}
