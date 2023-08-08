import Container from '../components/container'
import Layout from '../components/layout'
import { getLatestQuote } from '../lib/api'
import Head from 'next/head'
import Quote from '../interfaces/quote'
import QuoteBody from '../components/quote-body'
import { SITE_NAME } from '../lib/constants'
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
            latestSlug={latestQuote.slug}
          />
        )}
        <Promotion />
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const latestQuote = getLatestQuote(['slug', 'content'])

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
