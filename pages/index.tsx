import Container from '../components/container'
import Layout from '../components/layout'
import { getLatestQuote } from '../lib/api'
import Head from 'next/head'
import Quote from '../interfaces/quote'
import QuoteBody from '../components/quote-body'
import { PATH_QUOTE_IMAGE, SITE_NAME, SITE_SHORTURL } from '../lib/constants'
import Header from '../components/header'
import formatDate from '../lib/formatDate'
import markdownToHtml from '../lib/markdownToHtml'
import DateFormatter from '../components/date-formatter'
import Promotion from '../components/promotion'

type Props = {
  latestQuote: Quote
}

export default function Index({ latestQuote }: Props) {
  return (
    <Layout>
      <Head>
        <title>{`${SITE_NAME} | ${formatDate(latestQuote.releaseDate)}`}</title>
        <meta
          property="og:image"
          content={SITE_SHORTURL + PATH_QUOTE_IMAGE(latestQuote.slug)}
        />
        <meta
          name="description"
          content={`A quote from ${
            latestQuote.speaker.name
          }. Posted on ${formatDate(latestQuote.releaseDate)}. "${
            latestQuote.excerpt
          }..."`}
        />
      </Head>
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
  const latestQuote = getLatestQuote(['slug', 'content', 'excerpt', 'speaker'])

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
